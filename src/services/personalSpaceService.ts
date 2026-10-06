import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  serverTimestamp
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { PersonIdentity, PersonalPhoto, PersonalNote } from '../types/personalSpace';
import { optimizePersonalPhoto, uploadPhotoToDriveAPI, deletePhotoFromDriveAPI } from './driveService';

const PERSON_TOKEN_KEY = 'abh_person_token';
const ACTIVE_PERSON_ID_KEY = 'abh_active_person_id';

/**
 * Generate a secure private person token (32 hex characters)
 */
export const generateSecureToken = (): string => {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

/**
 * Generate a unique person ID (e.g. ABH-P7X29)
 */
export const generatePersonId = (rollNumber?: string): string => {
  const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
  let rand = '';
  for (let i = 0; i < 4; i++) {
    rand += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  const cleanRoll = rollNumber ? rollNumber.replace(/[^a-zA-Z0-9]/g, '').slice(-3).toUpperCase() : '';
  return `ABH-P${cleanRoll || 'X'}${rand.substring(0, 3)}`;
};

/**
 * Get or create person identity for a team member
 * Uses a persistent cache key derived from referenceId and rollNumber
 * so the student receives the EXACT same personId (e.g. ABH-P435M2X) across refreshes.
 */
export const getOrCreatePersonIdentity = async (
  referenceId: string,
  teamId: string,
  memberName: string,
  rollNumber: string,
  role: 'leader' | 'member' = 'member'
): Promise<PersonIdentity> => {
  const compositeKey = `abh_identity_${referenceId.replace(/[^a-zA-Z0-9]/g, '')}_${rollNumber.replace(/[^a-zA-Z0-9]/g, '')}`;
  const cached = localStorage.getItem(compositeKey);

  if (cached) {
    try {
      const parsed = JSON.parse(cached) as PersonIdentity;
      if (parsed.personId && parsed.personToken) {
        localStorage.setItem(PERSON_TOKEN_KEY, parsed.personToken);
        localStorage.setItem(ACTIVE_PERSON_ID_KEY, parsed.personId);
        return parsed;
      }
    } catch (e) {}
  }

  try {
    const peopleRef = collection(db, 'people');
    const q = query(peopleRef, where('referenceId', '==', referenceId), where('rollNumber', '==', rollNumber));
    const snap = await getDocs(q);

    if (!snap.empty) {
      const existingDoc = snap.docs[0].data() as PersonIdentity;
      localStorage.setItem(PERSON_TOKEN_KEY, existingDoc.personToken);
      localStorage.setItem(ACTIVE_PERSON_ID_KEY, existingDoc.personId);
      localStorage.setItem(compositeKey, JSON.stringify(existingDoc));
      return existingDoc;
    }

    // Generate new identity
    const personId = generatePersonId(rollNumber);
    const personToken = generateSecureToken();

    const newPerson: PersonIdentity = {
      personId,
      referenceId,
      teamId,
      name: memberName,
      rollNumber,
      role,
      personToken
    };

    const personDocRef = doc(db, 'people', personId);
    await setDoc(personDocRef, {
      ...newPerson,
      createdAt: serverTimestamp()
    });

    localStorage.setItem(PERSON_TOKEN_KEY, personToken);
    localStorage.setItem(ACTIVE_PERSON_ID_KEY, personId);
    localStorage.setItem(compositeKey, JSON.stringify(newPerson));

    return newPerson;
  } catch (error) {
    console.warn('[PersonIdentity] Firestore check error, using persistent local identity:', error);
    const storedToken = localStorage.getItem(PERSON_TOKEN_KEY) || generateSecureToken();
    const storedPersonId = localStorage.getItem(ACTIVE_PERSON_ID_KEY) || generatePersonId(rollNumber);

    const fallbackPerson: PersonIdentity = {
      personId: storedPersonId,
      referenceId,
      teamId,
      name: memberName,
      rollNumber,
      role,
      personToken: storedToken
    };

    localStorage.setItem(PERSON_TOKEN_KEY, storedToken);
    localStorage.setItem(ACTIVE_PERSON_ID_KEY, storedPersonId);
    localStorage.setItem(compositeKey, JSON.stringify(fallbackPerson));

    return fallbackPerson;
  }
};

/**
 * Validate Person Authorization Token
 * Throws 403 error if token does not authorize access to personId
 */
export const authorizePersonRequest = async (
  requestedPersonId: string,
  providedToken: string
): Promise<boolean> => {
  if (!providedToken || !requestedPersonId) {
    throw new Error('401 Unauthorized: Missing identity credentials.');
  }

  // Check stored local token
  const localToken = localStorage.getItem(PERSON_TOKEN_KEY);
  const localPersonId = localStorage.getItem(ACTIVE_PERSON_ID_KEY);

  if (localPersonId === requestedPersonId && localToken === providedToken) {
    return true;
  }

  // Verify against Firestore
  try {
    const personDocRef = doc(db, 'people', requestedPersonId);
    const snap = await getDoc(personDocRef);
    if (!snap.exists()) {
      throw new Error('403 Forbidden: Person identity not found.');
    }
    const data = snap.data() as PersonIdentity;
    if (data.personToken !== providedToken) {
      throw new Error('403 Forbidden: You are not authorized to access another person\'s data.');
    }
    return true;
  } catch (err: any) {
    if (err.message.includes('403') || err.message.includes('401')) {
      throw err;
    }
    // Fallback: check local matching
    if (localPersonId === requestedPersonId && localToken === providedToken) {
      return true;
    }
    throw new Error('403 Forbidden: Access denied.');
  }
};

// ==========================================
// PERSONAL PHOTOS SERVICE (Google Drive + Firestore metadata)
// ==========================================

/**
 * FETCH PERSONAL PHOTOS
 * Strictly isolated: Person A receives ONLY Person A's photos.
 */
export const fetchPersonalPhotos = async (
  targetPersonId: string,
  personToken: string
): Promise<PersonalPhoto[]> => {
  await authorizePersonRequest(targetPersonId, personToken);

  try {
    const photosRef = collection(db, 'personalPhotos');
    const q = query(photosRef, where('personId', '==', targetPersonId));
    const snap = await getDocs(q);

    const photos: PersonalPhoto[] = [];
    snap.forEach(d => {
      const data = d.data();
      const realDriveId = data.driveFileId && !data.driveFileId.startsWith('drive-file-') ? data.driveFileId : null;
      const viewUrl = realDriveId
        ? `/.netlify/functions/drive-photos?driveFileId=${realDriveId}&action=stream`
        : '';

      photos.push({
        photoId: d.id,
        personId: data.personId,
        driveFileId: data.driveFileId,
        driveFolderId: data.driveFolderId || '',
        fileName: data.fileName,
        caption: data.caption || '',
        viewUrl,
        uploadedAt: data.uploadedAt ? (data.uploadedAt.toDate ? data.uploadedAt.toDate().toISOString() : data.uploadedAt) : new Date().toISOString(),
        fileSizeBytes: data.fileSizeBytes
      });
    });

    // Sort by newest upload
    return photos.sort((a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime());
  } catch (error) {
    console.warn('Error fetching personal photos from Firestore:', error);
    const localKey = `abh_photos_${targetPersonId}`;
    const raw = localStorage.getItem(localKey);
    return raw ? JSON.parse(raw) : [];
  }
};

/**
 * UPLOAD PERSONAL PHOTO
 * 1. Client-side image optimization (max 1600x1600 WebP)
 * 2. Server API Google Drive upload under ROOT/{personId}/{fileName}
 * 3. Firestore metadata save in /personalPhotos/{photoId}
 */
export const uploadPersonalPhoto = async (
  personId: string,
  personToken: string,
  file: File,
  caption: string,
  onProgress?: (step: string) => void
): Promise<PersonalPhoto> => {
  await authorizePersonRequest(personId, personToken);

  // Step 1: Image Optimization
  if (onProgress) onProgress('Step 1/3: Optimizing photo (max 1600x1600 WebP)...');
  console.log(`[PhotoUpload] Step 1: Optimizing photo for ${personId}`);
  const optimized = await optimizePersonalPhoto(file, personId);

  // Step 2: Upload to Google Drive via backend API
  if (onProgress) onProgress('Step 2/3: Uploading photo to Google Drive...');
  console.log(`[PhotoUpload] Step 2: Dispatching Drive API upload for ${personId}`);

  let drivePhoto: PersonalPhoto;
  try {
    drivePhoto = await uploadPhotoToDriveAPI(optimized, personId, personToken, caption);
    if (!drivePhoto || !drivePhoto.driveFileId || drivePhoto.driveFileId.startsWith('drive-file-')) {
      throw new Error('Google Drive API did not return a valid file ID. Fake Drive IDs are strictly rejected.');
    }
    console.log(`[PhotoUpload] Step 2 complete: REAL Drive File ID ${drivePhoto.driveFileId}`);
  } catch (driveErr: any) {
    console.error('[PhotoUpload] Step 2 failed - Google Drive Upload Error:', driveErr);
    throw new Error(`Google Drive upload failed: ${driveErr.message || driveErr}`);
  }

  // Step 3: Save metadata in Firestore /personalPhotos/{photoId} (NO BASE64 / NO BLOBS IN FIRESTORE)
  if (onProgress) onProgress('Step 3/3: Saving photo metadata...');
  console.log(`[PhotoUpload] Step 3: Writing Firestore metadata for photoId: ${drivePhoto.photoId}`);

  try {
    const photoDocRef = doc(db, 'personalPhotos', drivePhoto.photoId);
    await setDoc(photoDocRef, {
      photoId: drivePhoto.photoId,
      personId,
      driveFileId: drivePhoto.driveFileId,
      driveFolderId: drivePhoto.driveFolderId || '',
      fileName: drivePhoto.fileName,
      caption: (caption || '').trim(),
      fileSizeBytes: optimized.sizeBytes,
      uploadedAt: serverTimestamp()
    });
    console.log(`[PhotoUpload] Step 3 complete: Firestore metadata saved with REAL Drive ID: ${drivePhoto.driveFileId}`);
  } catch (firestoreErr: any) {
    console.warn('[PhotoUpload] Firestore write error:', firestoreErr);
  }

  // Update local storage cache for instant persistence across refreshes
  const localKey = `abh_photos_${personId}`;
  const existing: PersonalPhoto[] = JSON.parse(localStorage.getItem(localKey) || '[]');
  const filtered = existing.filter(p => p.photoId !== drivePhoto.photoId);
  localStorage.setItem(localKey, JSON.stringify([drivePhoto, ...filtered]));

  return drivePhoto;
};

/**
 * DELETE PERSONAL PHOTO
 * Verifies owner before deleting Drive file and Firestore metadata.
 */
export const deletePersonalPhoto = async (
  photoId: string,
  personId: string,
  personToken: string,
  driveFileId?: string
): Promise<boolean> => {
  await authorizePersonRequest(personId, personToken);

  if (driveFileId) {
    try {
      await deletePhotoFromDriveAPI(photoId, personId, personToken, driveFileId);
    } catch (driveErr: any) {
      console.warn('[PhotoDelete] Google Drive deletion warning:', driveErr.message || driveErr);
    }
  }

  try {
    const photoDocRef = doc(db, 'personalPhotos', photoId);
    await deleteDoc(photoDocRef);
  } catch (error) {
    console.warn('Firestore photo deletion warning:', error);
  }

  // Remove from local storage
  const localKey = `abh_photos_${personId}`;
  const existing: PersonalPhoto[] = JSON.parse(localStorage.getItem(localKey) || '[]');
  const updated = existing.filter(p => p.photoId !== photoId);
  localStorage.setItem(localKey, JSON.stringify(updated));

  return true;
};

// ==========================================
// PERSONAL NOTES SERVICE (Firestore)
// ==========================================

/**
 * FETCH PERSONAL NOTES
 * Strictly isolated per person.
 */
export const fetchPersonalNotes = async (
  targetPersonId: string,
  personToken: string,
  isAdmin: boolean = false
): Promise<PersonalNote[]> => {
  await authorizePersonRequest(targetPersonId, personToken);

  try {
    const notesRef = collection(db, 'personalNotes');
    const q = query(notesRef, where('personId', '==', targetPersonId));
    const snap = await getDocs(q);

    const notes: PersonalNote[] = [];
    snap.forEach(d => {
      const data = d.data();
      notes.push({
        noteId: d.id,
        personId: data.personId,
        title: data.title || 'Untitled Note',
        content: data.content || '',
        createdAt: data.createdAt ? (data.createdAt.toDate ? data.createdAt.toDate().toISOString() : data.createdAt) : new Date().toISOString(),
        updatedAt: data.updatedAt ? (data.updatedAt.toDate ? data.updatedAt.toDate().toISOString() : data.updatedAt) : new Date().toISOString()
      });
    });

    return notes.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
  } catch (error) {
    console.warn('Error fetching personal notes from Firestore:', error);
    const localKey = `abh_notes_${targetPersonId}`;
    const raw = localStorage.getItem(localKey);
    return raw ? JSON.parse(raw) : [];
  }
};

/**
 * SAVE PERSONAL NOTE (Create or Update)
 */
export const savePersonalNote = async (
  noteId: string | null,
  personId: string,
  personToken: string,
  title: string,
  content: string
): Promise<PersonalNote> => {
  await authorizePersonRequest(personId, personToken);

  const targetNoteId = noteId || `note-${personId}-${Date.now()}`;
  const nowStr = new Date().toISOString();

  const newNote: PersonalNote = {
    noteId: targetNoteId,
    personId,
    title: title.trim() || 'Untitled Note',
    content: content.trim(),
    createdAt: nowStr,
    updatedAt: nowStr
  };

  try {
    const noteDocRef = doc(db, 'personalNotes', targetNoteId);
    await setDoc(noteDocRef, {
      ...newNote,
      updatedAt: serverTimestamp()
    }, { merge: true });
  } catch (error) {
    console.warn('Firestore note save warning:', error);
  }

  const localKey = `abh_notes_${personId}`;
  const existing: PersonalNote[] = JSON.parse(localStorage.getItem(localKey) || '[]');
  const idx = existing.findIndex(n => n.noteId === targetNoteId);

  let updatedList: PersonalNote[];
  if (idx >= 0) {
    existing[idx] = newNote;
    updatedList = [...existing];
  } else {
    updatedList = [newNote, ...existing];
  }

  localStorage.setItem(localKey, JSON.stringify(updatedList));
  return newNote;
};

/**
 * DELETE PERSONAL NOTE
 */
export const deletePersonalNote = async (
  noteId: string,
  personId: string,
  personToken: string,
  isAdmin: boolean = false
): Promise<boolean> => {
  await authorizePersonRequest(personId, personToken);

  try {
    const noteDocRef = doc(db, 'personalNotes', noteId);
    await deleteDoc(noteDocRef);
  } catch (error) {
    console.warn('Firestore note deletion warning:', error);
  }

  const localKey = `abh_notes_${personId}`;
  const existing: PersonalNote[] = JSON.parse(localStorage.getItem(localKey) || '[]');
  const updated = existing.filter(n => n.noteId !== noteId);
  localStorage.setItem(localKey, JSON.stringify(updated));

  return true;
};

// ==========================================
// ADMIN DASHBOARD INSPECTION SERVICE
// ==========================================

export interface AdminPersonOverview {
  person: PersonIdentity;
  photoCount: number;
  noteCount: number;
}

/**
 * Admin: Personal photos are private student data - non-accessible to admin
 */
export const fetchAllPersonalPhotosForAdmin = async (): Promise<PersonalPhoto[]> => {
  return [];
};

/**
 * Admin: Fetch all registered people overview
 */
export const fetchAllPeopleForAdmin = async (): Promise<AdminPersonOverview[]> => {
  try {
    const peopleSnap = await getDocs(collection(db, 'people'));
    const notesSnap = await getDocs(collection(db, 'personalNotes'));
    const teamsSnap = await getDocs(collection(db, 'teams'));

    const photoCounts: Record<string, number> = {};

    const noteCounts: Record<string, number> = {};
    notesSnap.forEach(d => {
      const p = d.data().personId;
      if (p) noteCounts[p] = (noteCounts[p] || 0) + 1;
    });

    const peopleMap = new Map<string, PersonIdentity>();

    // 1. Load existing people collection
    peopleSnap.forEach(d => {
      const person = d.data() as PersonIdentity;
      if (person && person.personId) {
        peopleMap.set(person.personId, person);
      }
    });

    // 2. Discover identities from registered teams
    teamsSnap.forEach(td => {
      const t = td.data();
      if (t.leader && t.leader.rollNumber) {
        const cleanRoll = t.leader.rollNumber.replace(/[^a-zA-Z0-9]/g, '').slice(-3).toUpperCase();
        const refId = t.referenceId || 'ABH-REF';
        const compositeKey = `abh_identity_${refId.replace(/[^a-zA-Z0-9]/g, '')}_${cleanRoll}`;
        const cached = localStorage.getItem(compositeKey);
        let leaderPerson: PersonIdentity | null = null;
        if (cached) {
          try { leaderPerson = JSON.parse(cached); } catch(e) {}
        }
        if (!leaderPerson) {
          const personId = `ABH-P${cleanRoll || 'L'}`;
          leaderPerson = {
            personId,
            referenceId: refId,
            teamId: t.teamId || td.id,
            name: t.leader.name,
            rollNumber: t.leader.rollNumber,
            role: 'leader',
            personToken: 'token-' + personId
          };
        }
        if (leaderPerson && !peopleMap.has(leaderPerson.personId)) {
          peopleMap.set(leaderPerson.personId, leaderPerson);
        }
      }

      if (t.members && Array.isArray(t.members)) {
        t.members.forEach((m: any) => {
          if (m.rollNumber) {
            const cleanRoll = m.rollNumber.replace(/[^a-zA-Z0-9]/g, '').slice(-3).toUpperCase();
            const refId = t.referenceId || 'ABH-REF';
            const compositeKey = `abh_identity_${refId.replace(/[^a-zA-Z0-9]/g, '')}_${cleanRoll}`;
            const cached = localStorage.getItem(compositeKey);
            let memberPerson: PersonIdentity | null = null;
            if (cached) {
              try { memberPerson = JSON.parse(cached); } catch(e) {}
            }
            if (!memberPerson) {
              const personId = `ABH-P${cleanRoll || 'M'}`;
              memberPerson = {
                personId,
                referenceId: refId,
                teamId: t.teamId || td.id,
                name: m.name,
                rollNumber: m.rollNumber,
                role: 'member',
                personToken: 'token-' + personId
              };
            }
            if (memberPerson && !peopleMap.has(memberPerson.personId)) {
              peopleMap.set(memberPerson.personId, memberPerson);
            }
          }
        });
      }
    });

    const overviewList: AdminPersonOverview[] = [];
    peopleMap.forEach(person => {
      overviewList.push({
        person,
        photoCount: photoCounts[person.personId] || 0,
        noteCount: noteCounts[person.personId] || 0
      });
    });

    return overviewList;
  } catch (error) {
    console.warn('Admin fetch people error:', error);
    return [];
  }
};
