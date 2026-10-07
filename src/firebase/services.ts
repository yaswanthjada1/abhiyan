import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  query,
  where,
  runTransaction,
  serverTimestamp,
  addDoc,
  onSnapshot,
  deleteDoc
} from 'firebase/firestore';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { ref, uploadBytes, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { db, auth, storage } from './config';
import { TeamDocument, ScreenshotMetadata, AdminUser, Project, TeamLeader, TeamMember } from '../types/project';
import { PROJECTS } from '../data/projects';

// Helper to generate hard-to-guess reference IDs (e.g. MMH-A1-X7K92)
export const generateReferenceId = (projectCode: string): string => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let randStr = '';
  for (let i = 0; i < 5; i++) {
    randStr += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `MMH-${projectCode}-${randStr}`;
};

// FETCH DYNAMIC SELECTION COUNTS FROM FIREBASE
export const fetchDynamicTeamCounts = async (): Promise<Record<string, number>> => {
  try {
    const teamsSnap = await getDocs(collection(db, 'teams'));
    const counts: Record<string, number> = {};

    teamsSnap.forEach(dSnap => {
      const tData = dSnap.data() as TeamDocument;
      if (tData.projectId) {
        counts[tData.projectId] = (counts[tData.projectId] || 0) + 1;
      }
    });

    return counts;
  } catch (error) {
    console.warn('Firebase team counts fetch fallback (offline/initial):', error);
    return {};
  }
};

// ATOMIC 3-TEAM CAPACITY TRANSACTION IN FIRESTORE
export const selectProjectAtomic = async (
  projectCode: string,
  teamData: {
    teamName: string;
    leader: { name: string; rollNumber: string; email: string; phone: string };
    members: { name: string; rollNumber: string }[];
  }
): Promise<{ success: boolean; message: string; referenceId?: string; teamId?: string }> => {
  try {
    return await runTransaction(db, async transaction => {
      // Query existing teams for this projectId
      const teamsRef = collection(db, 'teams');
      const q = query(teamsRef, where('projectId', '==', projectCode));
      const existingTeamsSnap = await getDocs(q);

      const currentCount = existingTeamsSnap.size;

      // ATOMIC 5-TEAM CAPACITY CHECK
      if (currentCount >= 5) {
        throw new Error(`Sorry, project ${projectCode} is already full (5/5 teams registered).`);
      }

      const refId = generateReferenceId(projectCode);
      const teamId = `team-${projectCode}-${Date.now()}`;

      const newTeamDoc: TeamDocument = {
        teamId,
        referenceId: refId,
        projectId: projectCode,
        teamName: teamData.teamName,
        leader: teamData.leader,
        members: teamData.members,
        progress: 0,
        currentDay: 1,
        completedTasks: {}
      };

      // Create dynamic team record in /teams
      const teamRef = doc(db, 'teams', teamId);
      transaction.set(teamRef, {
        ...newTeamDoc,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });

      // Selection log record in /projectSelections
      const selectionRef = doc(db, 'projectSelections', `${projectCode}_${teamId}`);
      transaction.set(selectionRef, {
        projectId: projectCode,
        projectCode,
        teamId,
        referenceId: refId,
        teamName: teamData.teamName,
        createdAt: serverTimestamp()
      });

      return {
        success: true,
        message: `Successfully registered for ${projectCode}! Your Reference ID is ${refId}.`,
        referenceId: refId,
        teamId
      };
    });
  } catch (err: any) {
    console.error('Selection transaction failed:', err);
    return {
      success: false,
      message: err.message || 'Failed to complete project selection.'
    };
  }
};

// VALIDATE TEAM REFERENCE ID FOR /my-project
export const fetchTeamByReferenceId = async (
  referenceId: string
): Promise<{ team: TeamDocument; project: Project } | null> => {
  try {
    const teamsRef = collection(db, 'teams');
    const q = query(teamsRef, where('referenceId', '==', referenceId.trim().toUpperCase()));
    const querySnap = await getDocs(q);

    if (querySnap.empty) {
      return null;
    }

    const teamDocData = querySnap.docs[0].data() as TeamDocument;

    // Find static project definition from local projects.ts
    const localProject = PROJECTS.find(p => p.projectCode === teamDocData.projectId) || PROJECTS[0];

    return {
      team: teamDocData,
      project: localProject
    };
  } catch (error) {
    console.error('Fetch team by reference ID error:', error);
    return null;
  }
};

// UPDATE TEAM TASK PROGRESS IN FIRESTORE
export const updateTeamTaskProgressInFirestore = async (
  teamId: string,
  completedTasks: Record<string, boolean>,
  currentDay: number,
  progressPct: number
) => {
  try {
    const teamRef = doc(db, 'teams', teamId);
    await updateDoc(teamRef, {
      completedTasks,
      currentDay,
      progress: progressPct,
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error updating team task progress:', error);
  }
};

// RESUMABLE SCREENSHOT UPLOAD WITH REAL-TIME PROGRESS TRACKING
export const uploadScreenshotResumable = (
  teamId: string,
  projectId: string,
  day: number,
  file: File,
  caption: string,
  uploaderName: string,
  onProgress: (progressPct: number) => void
): Promise<ScreenshotMetadata> => {
  return new Promise((resolve, reject) => {
    try {
      const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
      const storagePath = `teams/${teamId}/screenshots/day-${day}/${Date.now()}_${sanitizedFileName}`;
      const storageRef = ref(storage, storagePath);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          if (snapshot.totalBytes > 0) {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            onProgress(progress);
          }
        },
        (error) => {
          console.error('Firebase Storage upload error:', error);
          const msg = error.code === 'storage/unauthorized'
            ? 'Permission denied by Storage rules.'
            : error.message || 'Network or Storage upload failure.';
          reject(new Error(`Upload failed: ${msg}`));
        },
        async () => {
          try {
            const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
            const metadata: ScreenshotMetadata = {
              id: `scr-${Date.now()}`,
              teamId,
              projectId,
              day,
              storagePath,
              downloadUrl,
              caption: caption || `Day ${day} Progress Screenshot`,
              uploaderName: uploaderName || 'Team Member',
              uploadedAt: new Date().toISOString().split('T')[0]
            };

            const scrColRef = collection(db, 'teams', teamId, 'screenshots');
            await addDoc(scrColRef, {
              ...metadata,
              createdAt: serverTimestamp()
            });

            onProgress(100);
            resolve(metadata);
          } catch (err) {
            reject(new Error('Upload completed but failed to save metadata. Please try again.'));
          }
        }
      );
    } catch (err) {
      reject(new Error('Could not initiate upload. Please try again.'));
    }
  });
};

// LEGACY FALLBACK FOR SCREENSHOT UPLOAD
export const uploadScreenshotToFirebase = async (
  teamId: string,
  projectId: string,
  day: number,
  file: File,
  caption: string,
  uploaderName: string
): Promise<ScreenshotMetadata | null> => {
  try {
    return await uploadScreenshotResumable(teamId, projectId, day, file, caption, uploaderName, () => {});
  } catch (error) {
    console.error('Firebase Storage upload failed:', error);
    return null;
  }
};

// FETCH SCREENSHOTS FOR A TEAM
export const fetchTeamScreenshots = async (teamId: string): Promise<ScreenshotMetadata[]> => {
  try {
    const scrColRef = collection(db, 'teams', teamId, 'screenshots');
    const snap = await getDocs(scrColRef);
    const list: ScreenshotMetadata[] = [];
    snap.forEach(d => list.push(d.data() as ScreenshotMetadata));
    return list;
  } catch (e) {
    return [];
  }
};

// PERSISTENT PROJECT NOTES / JOURNAL IN FIRESTORE
export const saveTeamNotes = async (teamId: string, dayKey: string, content: string) => {
  try {
    const noteRef = doc(db, 'teamNotes', teamId);
    await setDoc(
      noteRef,
      {
        [dayKey]: content,
        updatedAt: serverTimestamp()
      },
      { merge: true }
    );
  } catch (error) {
    console.error('Error saving team notes:', error);
  }
};

export const fetchTeamNotes = async (teamId: string): Promise<Record<string, string>> => {
  try {
    const noteRef = doc(db, 'teamNotes', teamId);
    const docSnap = await getDoc(noteRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      const notes: Record<string, string> = {};
      Object.keys(data).forEach(key => {
        if (typeof data[key] === 'string') {
          notes[key] = data[key];
        }
      });
      return notes;
    }
    return {};
  } catch (error) {
    console.error('Error fetching team notes:', error);
    return {};
  }
};

export const subscribeToTeamNotes = (
  teamId: string,
  callback: (notes: Record<string, string>) => void
) => {
  const noteRef = doc(db, 'teamNotes', teamId);
  return onSnapshot(
    noteRef,
    docSnap => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        const notes: Record<string, string> = {};
        Object.keys(data).forEach(key => {
          if (typeof data[key] === 'string') {
            notes[key] = data[key];
          }
        });
        callback(notes);
      } else {
        callback({});
      }
    },
    err => {
      console.warn('Notes snapshot subscription error:', err);
      callback({});
    }
  );
};

// ADMIN FIREBASE AUTH
export const loginAdminUser = async (email: string, pass: string): Promise<AdminUser> => {
  const cred = await signInWithEmailAndPassword(auth, email, pass);
  return {
    uid: cred.user.uid,
    email: cred.user.email || email
  };
};

export const logoutAdminUser = async () => {
  await signOut(auth);
};

export const subscribeToAdminAuth = (callback: (user: AdminUser | null) => void) => {
  return onAuthStateChanged(auth, firebaseUser => {
    if (firebaseUser) {
      callback({
        uid: firebaseUser.uid,
        email: firebaseUser.email || ''
      });
    } else {
      callback(null);
    }
  });
};

// ADMIN TEAMS LIST (PARALLELIZED FOR FASTER DATA LOADING)
export const fetchAllTeamsForAdmin = async (): Promise<TeamDocument[]> => {
  try {
    const teamsSnap = await getDocs(collection(db, 'teams'));
    const teams = await Promise.all(
      teamsSnap.docs.map(async d => {
        const teamData = d.data() as TeamDocument;
        try {
          const scrsSnap = await getDocs(collection(db, 'teams', d.id, 'screenshots'));
          const scrs: ScreenshotMetadata[] = [];
          scrsSnap.forEach(s => scrs.push(s.data() as ScreenshotMetadata));
          teamData.screenshots = scrs;
        } catch (e) {
          teamData.screenshots = [];
        }
        return teamData;
      })
    );
    return teams;
  } catch (e) {
    return [];
  }
};

// DELETE TEAM FROM FIRESTORE
export const deleteTeamFromFirestore = async (
  teamId: string,
  projectId: string
): Promise<{ success: boolean; message: string }> => {
  try {
    if (!auth.currentUser) {
      return {
        success: false,
        message: "You don't have permission to delete this team."
      };
    }

    // 1. Delete screenshots subcollection documents
    try {
      const scrsSnap = await getDocs(collection(db, 'teams', teamId, 'screenshots'));
      for (const d of scrsSnap.docs) {
        await deleteDoc(doc(db, 'teams', teamId, 'screenshots', d.id));
      }
    } catch (e) {
      console.warn('Subcollection screenshots deletion cleanup warning:', e);
    }

    // 2. Delete main team document
    const teamRef = doc(db, 'teams', teamId);
    await deleteDoc(teamRef);

    // 3. Clean up project selection record if it exists
    try {
      const selectionRef = doc(db, 'projectSelections', `${projectId}_${teamId}`);
      await deleteDoc(selectionRef);
    } catch (e) {
      console.warn('Project selection record deletion warning:', e);
    }

    // 4. Clean up team notes record if it exists
    try {
      const noteRef = doc(db, 'teamNotes', teamId);
      await deleteDoc(noteRef);
    } catch (e) {
      console.warn('Team notes record deletion warning:', e);
    }

    return {
      success: true,
      message: 'Team deleted successfully.'
    };
  } catch (error: any) {
    console.error('Delete team error:', error);
    const isPermissionError = error?.code === 'permission-denied' || error?.message?.includes('permission');
    return {
      success: false,
      message: isPermissionError
        ? "You don't have permission to delete this team."
        : "Unable to delete team. Please try again."
    };
  }
};

// PUBLIC TEAMS LIST FOR STUDENT SEARCH
export const fetchPublicTeamsForSearch = async (): Promise<TeamDocument[]> => {
  return await fetchAllTeamsForAdmin();
};

// UPDATE TEAM IN FIRESTORE (ADMIN EDIT)
export const updateTeamInFirestore = async (
  teamId: string,
  updatedData: {
    teamName: string;
    projectId: string;
    leader: TeamLeader;
    members: TeamMember[];
  },
  oldProjectId: string
): Promise<{ success: boolean; message: string }> => {
  try {
    if (!auth.currentUser) {
      return { success: false, message: "You don't have permission to edit teams." };
    }

    // Check project capacity if project changed
    if (updatedData.projectId !== oldProjectId) {
      const teamsRef = collection(db, 'teams');
      const q = query(teamsRef, where('projectId', '==', updatedData.projectId));
      const snap = await getDocs(q);
      const newProjCount = snap.docs.filter(d => d.id !== teamId).length;

      if (newProjCount >= 5) {
        return {
          success: false,
          message: `Cannot move this team. The selected project (${updatedData.projectId}) has reached its 5-team limit.`
        };
      }
    }

    // Update main team document
    const teamRef = doc(db, 'teams', teamId);
    await updateDoc(teamRef, {
      teamName: updatedData.teamName,
      projectId: updatedData.projectId,
      leader: updatedData.leader,
      members: updatedData.members,
      updatedAt: serverTimestamp()
    });

    // Update or re-key projectSelections record if project changed or name changed
    if (updatedData.projectId !== oldProjectId) {
      // Remove old selection record
      try {
        await deleteDoc(doc(db, 'projectSelections', `${oldProjectId}_${teamId}`));
      } catch (e) {}

      // Create new selection record
      await setDoc(doc(db, 'projectSelections', `${updatedData.projectId}_${teamId}`), {
        projectId: updatedData.projectId,
        projectCode: updatedData.projectId,
        teamId,
        teamName: updatedData.teamName,
        createdAt: serverTimestamp()
      });
    } else {
      // Update selection record teamName if project same
      try {
        await updateDoc(doc(db, 'projectSelections', `${oldProjectId}_${teamId}`), {
          teamName: updatedData.teamName,
          updatedAt: serverTimestamp()
        });
      } catch (e) {}
    }

    return { success: true, message: 'Team updated successfully.' };
  } catch (error: any) {
    console.error('Update team error:', error);
    return { success: false, message: error?.message || 'Unable to update team. Please try again.' };
  }
};


