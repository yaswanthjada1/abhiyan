import React, { useState } from 'react';
import { useProjectContext } from '../context/ProjectContext';
import {
  LayoutDashboard,
  CheckCircle2,
  Camera,
  Terminal,
  Layers,
  Upload,
  Search,
  Check,
  Copy,
  Plus,
  Users,
  Calendar,
  AlertTriangle,
  FileText,
  X
} from 'lucide-react';

export const MyProjectPage: React.FC = () => {
  const {
    activeReferenceId,
    activeTeam,
    activeProject,
    accessProjectByReferenceId,
    toggleTaskCompletion,
    uploadScreenshot,
    teamScreenshots
  } = useProjectContext();

  const [inputRefId, setInputRefId] = useState('');
  const [loading, setLoading] = useState(false);

  // Upload screenshot modal state
  const [showUpload, setShowUpload] = useState(false);
  const [uploadDay, setUploadDay] = useState(1);
  const [uploadCaption, setUploadCaption] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const [selectedDayView, setSelectedDayView] = useState(1);

  const handleAccessSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputRefId.trim()) return;

    setLoading(true);
    await accessProjectByReferenceId(inputRefId.trim());
    setLoading(false);
  };

  const handleScreenshotSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) return;

    setUploading(true);
    await uploadScreenshot(uploadDay, selectedFile, uploadCaption);
    setUploading(false);
    setSelectedFile(null);
    setUploadCaption('');
    setShowUpload(false);
  };

  // If no active team loaded, show Access Reference ID form
  if (!activeTeam || !activeProject) {
    return (
      <div style={{ maxWidth: '500px', margin: '3rem auto', textAlign: 'center' }}>
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: '2rem', boxShadow: 'var(--shadow-sm)' }}>
          <LayoutDashboard size={40} color="var(--primary)" style={{ marginBottom: '1rem' }} />
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.35rem' }}>Access Your Project Workspace</h1>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            Enter your Project Reference ID received during team selection.
          </p>

          <form onSubmit={handleAccessSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <input
              type="text"
              required
              placeholder="e.g. MMH-A1-X7K92"
              value={inputRefId}
              onChange={e => setInputRefId(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
                fontSize: '1.1rem',
                fontFamily: 'var(--font-mono)',
                textAlign: 'center',
                letterSpacing: '0.05em',
                minHeight: '44px'
              }}
            />

            <button type="submit" className="btn-primary" disabled={loading} style={{ justifyContent: 'center', padding: '0.75rem', minHeight: '44px' }}>
              <Search size={16} /> {loading ? 'Validating...' : 'Open Project Workspace'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  const guide = activeProject.projectGuide;

  const currentDayGuide = guide ? (
    selectedDayView === 1 ? guide.day1 :
    selectedDayView === 2 ? guide.day2 :
    selectedDayView === 3 ? guide.day3 :
    selectedDayView === 4 ? guide.day4 : guide.day5
  ) : null;

  return (
    <div>
      {/* Workspace Header */}
      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
              <span className="badge-code">{activeProject.projectCode}</span>
              <span className="badge badge-category">{activeProject.category}</span>
              <span className="badge" style={{ background: 'var(--primary-light)', color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}>
                REF: {activeTeam.referenceId}
              </span>
            </div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '0.2rem 0' }}>{activeTeam.teamName}</h1>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Project: <strong>{activeProject.title}</strong>
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.4rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)' }}>
              Overall Progress: {activeTeam.progress || 0}% Complete
            </span>
            <div className="progress-bar-container" style={{ width: '180px' }}>
              <div className="progress-bar-fill" style={{ width: `${activeTeam.progress || 0}%` }} />
            </div>
          </div>
        </div>

        {/* Leader & Members Summary */}
        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '0.85rem', marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.825rem' }}>
          <div>
            <span style={{ color: 'var(--text-muted)' }}>Leader: </span>
            <strong>{activeTeam.leader.name}</strong> ({activeTeam.leader.rollNumber})
          </div>
          <div>
            <span style={{ color: 'var(--text-muted)' }}>Members: </span>
            <strong>{(activeTeam.members?.length || 0) + 1} Total</strong>
          </div>
        </div>
      </div>

      {/* 5-Day Workspace Layout */}
      <div className="responsive-two-col" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
        {/* Left: 5-Day Tasks Checklist */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Day Navigation Tabs */}
          <div style={{ display: 'flex', gap: '0.4rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', overflowX: 'auto' }}>
            {[1, 2, 3, 4, 5].map(dNum => (
              <button
                key={dNum}
                onClick={() => setSelectedDayView(dNum)}
                className={`tab-button ${selectedDayView === dNum ? 'active' : ''}`}
                style={{ padding: '0.4rem 0.75rem', fontSize: '0.825rem' }}
              >
                Day {dNum} — {dNum === 1 ? 'SETUP' : dNum === 2 ? 'AI VIBE CODE' : dNum === 3 ? 'CUSTOMISE' : dNum === 4 ? 'DOCUMENT' : 'DEMO'}
              </button>
            ))}
          </div>

          {currentDayGuide && (
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.25rem' }}>
                Day {currentDayGuide.day} — {currentDayGuide.title}
              </h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                {currentDayGuide.goal}
              </p>

              {/* Day 3 Mandatory Warning */}
              {selectedDayView === 3 && (
                <div style={{ background: 'var(--warning-bg)', border: '1px solid var(--warning)', borderRadius: 'var(--radius-md)', padding: '0.85rem', marginBottom: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.825rem', color: 'var(--text-primary)' }}>
                  <AlertTriangle size={18} color="var(--warning)" style={{ flexShrink: 0 }} />
                  <span>Verify every mathematical calculation manually on paper or CAS before customizing code!</span>
                </div>
              )}

              {/* Tasks List with Checkboxes */}
              <h3 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.75rem' }}>Tasks Checklist</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {currentDayGuide.tasks.map(task => {
                  const isDone = !!activeTeam.completedTasks?.[task.id];
                  return (
                    <div
                      key={task.id}
                      onClick={() => toggleTaskCompletion(selectedDayView, task.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem',
                        padding: '0.75rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid',
                        borderColor: isDone ? 'var(--success)' : 'var(--border-color)',
                        background: isDone ? 'var(--success-bg)' : 'var(--bg-subtle)',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={isDone}
                        onChange={() => {}}
                        style={{ marginTop: '3px', width: '18px', height: '18px', cursor: 'pointer' }}
                      />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '0.85rem', fontWeight: 700, textDecoration: isDone ? 'line-through' : 'none' }}>
                          {task.title}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                          {task.description}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Right: Screenshots & Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Camera size={18} /> Proof Screenshots
              </h3>
              <button className="btn-primary" onClick={() => setShowUpload(true)} style={{ fontSize: '0.78rem', padding: '0.35rem 0.65rem', minHeight: '44px' }}>
                <Plus size={14} /> Upload
              </button>
            </div>

            {/* Upload Modal */}
            {showUpload && (
              <div className="modal-overlay" onClick={() => setShowUpload(false)}>
                <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '450px', width: '90%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Upload Proof Screenshot</h3>
                    <button className="btn-secondary" onClick={() => setShowUpload(false)} style={{ padding: '0.25rem 0.5rem', minHeight: '36px' }}>
                      <X size={16} />
                    </button>
                  </div>

                  <form onSubmit={handleScreenshotSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.2rem' }}>Select Image File *</label>
                      <input
                        type="file"
                        accept="image/*"
                        required
                        onChange={e => setSelectedFile(e.target.files ? e.target.files[0] : null)}
                        style={{ width: '100%', fontSize: '0.85rem', minHeight: '44px' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.2rem' }}>Roadmap Day</label>
                      <select
                        value={uploadDay}
                        onChange={e => setUploadDay(Number(e.target.value))}
                        style={{ width: '100%', padding: '0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', minHeight: '44px' }}
                      >
                        <option value={1}>Day 1 — SETUP</option>
                        <option value={2}>Day 2 — AI VIBE CODE</option>
                        <option value={3}>Day 3 — CUSTOMISE</option>
                        <option value={4}>Day 4 — DOCUMENT</option>
                        <option value={5}>Day 5 — DEMO</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.2rem' }}>Caption / Notes</label>
                      <input
                        type="text"
                        placeholder="e.g. Gauss elimination code executed"
                        value={uploadCaption}
                        onChange={e => setUploadCaption(e.target.value)}
                        style={{ width: '100%', padding: '0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '0.85rem', minHeight: '44px' }}
                      />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '0.5rem' }}>
                      <button type="button" className="btn-secondary" onClick={() => setShowUpload(false)} style={{ minHeight: '44px' }}>
                        Cancel
                      </button>
                      <button type="submit" className="btn-primary" disabled={uploading} style={{ minHeight: '44px' }}>
                        {uploading ? 'Uploading...' : 'Save Screenshot'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Screenshots list */}
            {teamScreenshots.length === 0 ? (
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center', padding: '1.5rem 0' }}>No screenshots uploaded yet.</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {teamScreenshots.map(scr => (
                  <div key={scr.id} style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                    <img src={scr.downloadUrl} alt={scr.caption} style={{ width: '100%', height: '120px', objectFit: 'cover' }} />
                    <div style={{ padding: '0.5rem', fontSize: '0.78rem' }}>
                      <strong>Day {scr.day}:</strong> {scr.caption}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
