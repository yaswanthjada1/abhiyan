import React, { useState, useEffect } from 'react';
import { PersonIdentity, PersonalPhoto, PersonalNote } from '../types/personalSpace';
import {
  fetchPersonalPhotos,
  uploadPersonalPhoto,
  deletePersonalPhoto,
  fetchPersonalNotes,
  savePersonalNote,
  deletePersonalNote
} from '../services/personalSpaceService';
import {
  Camera,
  FileText,
  Plus,
  Trash2,
  Eye,
  Edit,
  X,
  Upload,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Lock,
  User,
  ShieldCheck,
  Image as ImageIcon
} from 'lucide-react';

interface MySpaceComponentProps {
  person: PersonIdentity;
  isAdmin?: boolean;
}

export const MySpaceComponent: React.FC<MySpaceComponentProps> = ({ person, isAdmin = false }) => {
  const [activeTab, setActiveTab] = useState<'photos' | 'notes'>('photos');

  // Photos State
  const [photos, setPhotos] = useState<PersonalPhoto[]>([]);
  const [loadingPhotos, setLoadingPhotos] = useState<boolean>(true);
  const [showPhotoModal, setShowPhotoModal] = useState<boolean>(false);
  const [selectedPhotoFile, setSelectedPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoCaption, setPhotoCaption] = useState<string>('');
  const [uploadingPhoto, setUploadingPhoto] = useState<boolean>(false);
  const [viewingPhoto, setViewingPhoto] = useState<PersonalPhoto | null>(null);

  // Notes State
  const [notes, setNotes] = useState<PersonalNote[]>([]);
  const [loadingNotes, setLoadingNotes] = useState<boolean>(true);
  const [showNoteModal, setShowNoteModal] = useState<boolean>(false);
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [noteTitle, setNoteTitle] = useState<string>('');
  const [noteContent, setNoteContent] = useState<string>('');
  const [savingNote, setSavingNote] = useState<boolean>(false);

  // Error / Toast state
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    loadPhotos();
    loadNotes();
  }, [person.personId]);

  const loadPhotos = async () => {
    setLoadingPhotos(true);
    try {
      const data = await fetchPersonalPhotos(person.personId, person.personToken);
      setPhotos(data);
    } catch (err: any) {
      console.warn('Error loading photos:', err);
    } finally {
      setLoadingPhotos(false);
    }
  };

  const loadNotes = async () => {
    setLoadingNotes(true);
    try {
      const data = await fetchPersonalNotes(person.personId, person.personToken, isAdmin);
      setNotes(data);
    } catch (err: any) {
      console.warn('Error loading notes:', err);
    } finally {
      setLoadingNotes(false);
    }
  };

  // Handle Photo Select
  const handlePhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      setErrorMessage('File size exceeds the 10 MB limit.');
      return;
    }

    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type.toLowerCase())) {
      setErrorMessage('Only JPG, PNG, and WebP image formats are allowed.');
      return;
    }

    setErrorMessage(null);
    setSelectedPhotoFile(file);
    setPhotoPreview(URL.createObjectURL(file));
  };

  const [uploadStep, setUploadStep] = useState<string>('');
  const [modalErrorMessage, setModalErrorMessage] = useState<string | null>(null);

  // Upload Photo Action
  const handleUploadPhotoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPhotoFile) return;

    setUploadingPhoto(true);
    setErrorMessage(null);
    setModalErrorMessage(null);
    setUploadStep('Preparing upload...');

    try {
      const newPhoto = await uploadPersonalPhoto(
        person.personId,
        person.personToken,
        selectedPhotoFile,
        photoCaption,
        (step) => setUploadStep(step)
      );

      // Add ONLY on verified success
      setPhotos(prev => [newPhoto, ...prev.filter(p => p.photoId !== newPhoto.photoId)]);
      setSuccessMessage('Photo successfully saved to Google Drive ✓');
      setShowPhotoModal(false);
      setSelectedPhotoFile(null);
      setPhotoPreview(null);
      setPhotoCaption('');
      setUploadStep('');
      setTimeout(() => setSuccessMessage(null), 4000);
    } catch (err: any) {
      console.error('[MySpace] Photo upload error:', err);
      setModalErrorMessage(err.message || 'Photo upload failed. Please try again.');
    } finally {
      setUploadingPhoto(false);
    }
  };

  // Delete Photo Action
  const handleDeletePhoto = async (photoId: string) => {
    if (!window.confirm('Are you sure you want to delete this photo?')) return;

    try {
      const targetPhoto = photos.find(p => p.photoId === photoId);
      await deletePersonalPhoto(photoId, person.personId, person.personToken, targetPhoto?.driveFileId);
      setPhotos(prev => prev.filter(p => p.photoId !== photoId));
      if (viewingPhoto?.photoId === photoId) setViewingPhoto(null);
      setSuccessMessage('Photo deleted ✓');
      setTimeout(() => setSuccessMessage(null), 3000);
    } catch (err: any) {
      setErrorMessage(err.message || 'Failed to delete photo.');
    }
  };

  // Open Note Modal (New or Edit)
  const handleOpenNoteModal = (note?: PersonalNote) => {
    if (note) {
      setEditingNoteId(note.noteId);
      setNoteTitle(note.title);
      setNoteContent(note.content);
    } else {
      setEditingNoteId(null);
      setNoteTitle('');
      setNoteContent('');
    }
    setShowNoteModal(true);
  };

  // Save Note Action
  const handleSaveNoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!noteTitle.trim() && !noteContent.trim()) return;

    setSavingNote(true);
    setErrorMessage(null);

    try {
      const saved = await savePersonalNote(
        editingNoteId,
        person.personId,
        person.personToken,
        noteTitle,
        noteContent
      );

      setNotes(prev => {
        const idx = prev.findIndex(n => n.noteId === saved.noteId);
        if (idx >= 0) {
          const updated = [...prev];
          updated[idx] = saved;
          return updated;
        }
        return [saved, ...prev];
      });

      setSuccessMessage('Note saved securely ✓');
      setShowNoteModal(false);
      setNoteTitle('');
      setNoteContent('');
      setEditingNoteId(null);
      setTimeout(() => setSuccessMessage(null), 3000);
    } catch (err: any) {
      setErrorMessage(err.message || 'Failed to save note.');
    } finally {
      setSavingNote(false);
    }
  };

  // Delete Note Action
  const handleDeleteNote = async (noteId: string) => {
    if (!window.confirm('Are you sure you want to delete this note?')) return;

    try {
      await deletePersonalNote(noteId, person.personId, person.personToken, isAdmin);
      setNotes(prev => prev.filter(n => n.noteId !== noteId));
      setSuccessMessage('Note deleted ✓');
      setTimeout(() => setSuccessMessage(null), 3000);
    } catch (err: any) {
      setErrorMessage(err.message || 'Failed to delete note.');
    }
  };

  return (
    <div
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.5rem',
        boxShadow: 'var(--shadow-sm)',
        marginBottom: '1.5rem'
      }}
    >
      {/* Header Banner */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '1.25rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            <Lock size={13} /> PRIVATE PERSONAL SPACE
          </div>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 800, margin: '0.2rem 0', color: 'var(--text-primary)' }}>
            {person.name}'s Personal Space
          </h2>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Private storage for your photos and personal notes (Person ID: <code>{person.personId}</code>)
          </span>
        </div>

        {/* Tab Switcher */}
        <div style={{ display: 'flex', gap: '0.5rem', background: 'var(--bg-subtle)', padding: '0.3rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
          <button
            onClick={() => setActiveTab('photos')}
            style={{
              padding: '0.45rem 0.95rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.825rem',
              fontWeight: activeTab === 'photos' ? 800 : 600,
              border: 'none',
              background: activeTab === 'photos' ? 'var(--primary)' : 'transparent',
              color: activeTab === 'photos' ? '#ffffff' : 'var(--text-color)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'all 0.15s ease'
            }}
          >
            <Camera size={15} /> My Photos ({photos.length})
          </button>
          <button
            onClick={() => setActiveTab('notes')}
            style={{
              padding: '0.45rem 0.95rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.825rem',
              fontWeight: activeTab === 'notes' ? 800 : 600,
              border: 'none',
              background: activeTab === 'notes' ? 'var(--primary)' : 'transparent',
              color: activeTab === 'notes' ? '#ffffff' : 'var(--text-color)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'all 0.15s ease'
            }}
          >
            <FileText size={15} /> My Notes ({notes.length})
          </button>
        </div>
      </div>

      {/* Notifications */}
      {successMessage && (
        <div style={{ background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)', color: 'var(--success)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-md)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <CheckCircle2 size={16} /> {successMessage}
        </div>
      )}
      {errorMessage && (
        <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', color: 'var(--danger)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-md)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <AlertCircle size={16} /> {errorMessage}
        </div>
      )}

      {/* ================= PHOTOS TAB ================= */}
      {activeTab === 'photos' && (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
              Your personal photos are private and accessible only to you.
            </span>
            <button
              className="btn-primary"
              onClick={() => {
                setSelectedPhotoFile(null);
                setPhotoPreview(null);
                setPhotoCaption('');
                setShowPhotoModal(true);
              }}
              style={{ fontSize: '0.85rem', padding: '0.5rem 1rem', fontWeight: 700, gap: '0.35rem' }}
            >
              <Plus size={16} /> Add Photo
            </button>
          </div>

          {loadingPhotos ? (
            <div style={{ textAlign: 'center', padding: '2.5rem', color: 'var(--text-muted)' }}>
              <Loader2 size={24} className="spin" style={{ marginBottom: '0.5rem' }} />
              <div>Loading your private photos...</div>
            </div>
          ) : photos.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1.5rem', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <ImageIcon size={40} color="var(--text-muted)" style={{ marginBottom: '0.75rem' }} />
              <h4 style={{ margin: '0 0 0.35rem 0', fontSize: '1rem', fontWeight: 700 }}>No Personal Photos Yet</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0 0 1.25rem 0' }}>
                Upload your project photos, whiteboards, or team memories here.
              </p>
              <button
                className="btn-primary"
                onClick={() => setShowPhotoModal(true)}
                style={{ fontSize: '0.85rem', padding: '0.5rem 1rem', fontWeight: 700 }}
              >
                <Plus size={15} /> Upload First Photo
              </button>
            </div>
          ) : (
            <div className="project-content-grid">
              {photos.map((ph) => (
                <div
                  key={ph.photoId}
                  style={{
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <div style={{ height: '160px', overflow: 'hidden', position: 'relative', background: '#000' }}>
                    <img
                      src={ph.viewUrl}
                      alt={ph.caption || ph.fileName}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                  <div style={{ padding: '0.75rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.2rem' }}>
                        {new Date(ph.uploadedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                      {ph.caption ? (
                        <p style={{ margin: 0, fontSize: '0.825rem', color: 'var(--text-primary)', lineHeight: 1.35 }}>
                          {ph.caption}
                        </p>
                      ) : (
                        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>No caption</span>
                      )}
                    </div>

                    <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.75rem' }}>
                      <button
                        className="btn-secondary"
                        onClick={() => setViewingPhoto(ph)}
                        style={{ flex: 1, fontSize: '0.75rem', padding: '0.35rem', justifyContent: 'center' }}
                      >
                        <Eye size={13} /> View
                      </button>
                      <button
                        className="btn-secondary"
                        onClick={() => handleDeletePhoto(ph.photoId)}
                        style={{ color: 'var(--danger)', fontSize: '0.75rem', padding: '0.35rem 0.5rem' }}
                        title="Delete photo"
                      >
                        <Trash2 size={13} /> Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ================= NOTES TAB ================= */}
      {activeTab === 'notes' && (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
              Your notes are private to you and ABHIYAN admin.
            </span>
            <button
              className="btn-primary"
              onClick={() => handleOpenNoteModal()}
              style={{ fontSize: '0.85rem', padding: '0.5rem 1rem', fontWeight: 700, gap: '0.35rem' }}
            >
              <Plus size={16} /> New Note
            </button>
          </div>

          {loadingNotes ? (
            <div style={{ textAlign: 'center', padding: '2.5rem', color: 'var(--text-muted)' }}>
              <Loader2 size={24} className="spin" style={{ marginBottom: '0.5rem' }} />
              <div>Loading your private notes...</div>
            </div>
          ) : notes.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1.5rem', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <FileText size={40} color="var(--text-muted)" style={{ marginBottom: '0.75rem' }} />
              <h4 style={{ margin: '0 0 0.35rem 0', fontSize: '1rem', fontWeight: 700 }}>No Personal Notes Yet</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0 0 1.25rem 0' }}>
                Write down project ideas, formula derivations, or reminders.
              </p>
              <button
                className="btn-primary"
                onClick={() => handleOpenNoteModal()}
                style={{ fontSize: '0.85rem', padding: '0.5rem 1rem', fontWeight: 700 }}
              >
                <Plus size={15} /> Create First Note
              </button>
            </div>
          ) : (
            <div className="project-content-grid">
              {notes.map((nt) => (
                <div
                  key={nt.noteId}
                  style={{
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                      {nt.title || 'Untitled Note'}
                    </div>
                    <p style={{ margin: '0 0 0.75rem 0', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, whiteSpace: 'pre-wrap' }}>
                      {nt.content}
                    </p>
                  </div>

                  <div style={{ paddingTop: '0.5rem', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>
                      {new Date(nt.updatedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <div style={{ display: 'flex', gap: '0.4rem' }}>
                      <button
                        className="btn-secondary"
                        onClick={() => handleOpenNoteModal(nt)}
                        style={{ fontSize: '0.75rem', padding: '0.3rem 0.6rem' }}
                      >
                        <Edit size={13} /> Edit
                      </button>
                      <button
                        className="btn-secondary"
                        onClick={() => handleDeleteNote(nt.noteId)}
                        style={{ color: 'var(--danger)', fontSize: '0.75rem', padding: '0.3rem 0.5rem' }}
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* UPLOAD PHOTO MODAL */}
      {showPhotoModal && (
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(15, 23, 42, 0.65)',
            backdropFilter: 'blur(4px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem'
          }}
          onClick={() => setShowPhotoModal(false)}
        >
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              width: '100%',
              maxWidth: '480px',
              padding: '1.5rem',
              boxShadow: 'var(--shadow-xl)',
              position: 'relative'
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPhotoModal(false)}
              aria-label="Close modal"
              style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}
            >
              <X size={20} />
            </button>

            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: '0 0 1rem 0', color: 'var(--text-primary)' }}>
              Add Personal Photo
            </h3>

            {modalErrorMessage && (
              <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', color: 'var(--danger)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-md)', fontSize: '0.825rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <AlertCircle size={16} /> {modalErrorMessage}
              </div>
            )}

            {uploadingPhoto && uploadStep && (
              <div style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)', color: 'var(--primary)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-md)', fontSize: '0.825rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Loader2 size={16} className="spin" /> {uploadStep}
              </div>
            )}

            <form onSubmit={handleUploadPhotoSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                  Select Photo (JPG, PNG, WebP — max 10MB)
                </label>
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  required
                  onChange={handlePhotoSelect}
                  style={{ width: '100%', fontSize: '0.85rem' }}
                />
              </div>

              {photoPreview && (
                <div style={{ height: '180px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border-color)', background: '#000' }}>
                  <img src={photoPreview} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
              )}

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                  Optional Note / Caption
                </label>
                <input
                  type="text"
                  placeholder="What is this photo about?"
                  value={photoCaption}
                  onChange={e => setPhotoCaption(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.6rem 0.75rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-subtle)',
                    fontSize: '0.875rem',
                    color: 'var(--text-primary)'
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '0.5rem' }}>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setShowPhotoModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={uploadingPhoto || !selectedPhotoFile}
                  style={{ fontWeight: 700 }}
                >
                  {uploadingPhoto ? <Loader2 size={16} className="spin" /> : <Upload size={16} />}
                  {uploadingPhoto ? 'Uploading Photo...' : 'Upload Photo'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CREATE/EDIT NOTE MODAL */}
      {showNoteModal && (
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(15, 23, 42, 0.65)',
            backdropFilter: 'blur(4px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem'
          }}
          onClick={() => setShowNoteModal(false)}
        >
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              width: '100%',
              maxWidth: '520px',
              padding: '1.5rem',
              boxShadow: 'var(--shadow-xl)',
              position: 'relative'
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setShowNoteModal(false)}
              aria-label="Close modal"
              style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}
            >
              <X size={20} />
            </button>

            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: '0 0 1rem 0', color: 'var(--text-primary)' }}>
              {editingNoteId ? 'Edit Personal Note' : 'Create New Personal Note'}
            </h3>

            <form onSubmit={handleSaveNoteSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                  Note Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Project Idea / Formula derivation"
                  value={noteTitle}
                  onChange={e => setNoteTitle(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.75rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-subtle)',
                    fontSize: '0.9rem',
                    color: 'var(--text-primary)'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                  Content
                </label>
                <textarea
                  required
                  rows={6}
                  placeholder="Write your personal note here..."
                  value={noteContent}
                  onChange={e => setNoteContent(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-subtle)',
                    fontSize: '0.875rem',
                    color: 'var(--text-primary)',
                    lineHeight: 1.5,
                    resize: 'vertical'
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '0.5rem' }}>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setShowNoteModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={savingNote}
                  style={{ fontWeight: 700 }}
                >
                  {savingNote ? <Loader2 size={16} className="spin" /> : null}
                  {savingNote ? 'Saving Note...' : 'Save Private Note'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* VIEW PHOTO MODAL */}
      {viewingPhoto && (
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(15, 23, 42, 0.85)',
            backdropFilter: 'blur(4px)',
            zIndex: 1050,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={() => setViewingPhoto(null)}
        >
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              maxWidth: '720px',
              width: '100%',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-xl)'
            }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ position: 'relative', background: '#000', maxHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={viewingPhoto.viewUrl} alt={viewingPhoto.caption} style={{ maxWidth: '100%', maxHeight: '70vh', objectFit: 'contain' }} />
              <button
                onClick={() => setViewingPhoto(null)}
                aria-label="Close photo preview"
                style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(0,0,0,0.6)', border: 'none', borderRadius: '50%', color: '#fff', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
              >
                <X size={18} />
              </button>
            </div>
            <div style={{ padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {viewingPhoto.caption || 'Personal Photo'}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Uploaded {new Date(viewingPhoto.uploadedAt).toLocaleString()}
                </div>
              </div>
              <button
                className="btn-secondary"
                onClick={() => handleDeletePhoto(viewingPhoto.photoId)}
                style={{ color: 'var(--danger)', fontSize: '0.8rem' }}
              >
                <Trash2 size={14} /> Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
