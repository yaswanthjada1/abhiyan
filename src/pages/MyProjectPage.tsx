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
  Plus
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
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: '2rem' }}>
          <LayoutDashboard size={40} color="var(--primary)" style={{ marginBottom: '1rem' }} />
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.35rem' }}>Access Your Project</h1>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            Enter your Project Reference ID received during team selection.
          </p>

          <form onSubmit={handleAccessSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <input
              type="text"
              required
              placeholder="e.g. MMH-A1-X7K92"
              value={inputRefId}
              onChange={e => setInputRefId(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 0.85rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
                fontSize: '1rem',
                fontFamily: 'var(--font-mono)',
                textAlign: 'center',
                letterSpacing: '0.05em'
              }}
            />

            <button type="submit" className="btn-primary" disabled={loading} style={{ justifyContent: 'center', padding: '0.65rem' }}>
              <Search size={16} /> {loading ? 'Validating...' : 'Open Project Workspace'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Workspace Header */}
      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.5rem', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <span className="badge-code">{activeProject.projectCode}</span>
              <span className="badge badge-category">{activeProject.category}</span>
              <span className="badge" style={{ background: 'var(--primary-light)', color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}>
                REF: {activeTeam.referenceId}
              </span>
            </div>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 800 }}>{activeProject.title}</h1>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
              Team: {activeTeam.teamName} (Leader: {activeTeam.leader.name})
            </h3>
          </div>

          <button
            className="btn-secondary"
            onClick={() => accessProjectByReferenceId('')}
            style={{ fontSize: '0.8rem', padding: '0.35rem 0.65rem' }}
          >
            Switch Reference ID
          </button>
        </div>

        {/* Progress Metrics Bar */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', background: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>PROGRESS</span>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>{activeTeam.progress || 0}%</div>
          </div>

          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>CURRENT DAY</span>
            <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>Day {activeTeam.currentDay || 1}</div>
          </div>

          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>SCREENSHOTS</span>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--success)' }}>{teamScreenshots.length}</div>
          </div>
        </div>

        <div className="progress-bar-container" style={{ marginTop: '1rem' }}>
          <div className="progress-bar-fill" style={{ width: `${activeTeam.progress || 0}%` }} />
        </div>
      </div>

      {/* Action Buttons & Task Checklist */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
        {/* Task Checklist */}
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem' }}>Task Checklist</h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {activeProject.dailyTasks.map(d => (
              <div key={d.day} style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.35rem' }}>{d.title}</h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {d.tasks.map(t => {
                    const isDone = !!(activeTeam.completedTasks && activeTeam.completedTasks[t.id]);
                    return (
                      <label key={t.id} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', cursor: 'pointer' }}>
                        <input
                          type="checkbox"
                          checked={isDone}
                          onChange={() => toggleTaskCompletion(d.day, t.id)}
                          style={{ width: '16px', height: '16px', accentColor: 'var(--primary)' }}
                        />
                        <span style={{ textDecoration: isDone ? 'line-through' : 'none', color: isDone ? 'var(--text-muted)' : 'var(--text-primary)' }}>
                          {t.text}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Firebase Storage Screenshots & Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Camera size={18} /> Proof Screenshots
              </h3>
              <button className="btn-primary" onClick={() => setShowUpload(true)} style={{ fontSize: '0.78rem', padding: '0.35rem 0.65rem' }}>
                <Plus size={14} /> Upload
              </button>
            </div>

            {/* Upload Modal */}
            {showUpload && (
              <div className="modal-overlay" onClick={() => setShowUpload(false)}>
                <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '450px' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem' }}>Upload Proof Screenshot</h3>
                  <form onSubmit={handleScreenshotSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.2rem' }}>Select Image File *</label>
                      <input
                        type="file"
                        accept="image/*"
                        required
                        onChange={e => setSelectedFile(e.target.files ? e.target.files[0] : null)}
                        style={{ width: '100%', fontSize: '0.85rem' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.2rem' }}>Day Number</label>
                      <select
                        value={uploadDay}
                        onChange={e => setUploadDay(Number(e.target.value))}
                        style={{ width: '100%', padding: '0.4rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(d => (
                          <option key={d} value={d}>
                            Day {d}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.2rem' }}>Caption / Notes</label>
                      <input
                        type="text"
                        placeholder="e.g. Gauss algorithm code executed"
                        value={uploadCaption}
                        onChange={e => setUploadCaption(e.target.value)}
                        style={{ width: '100%', padding: '0.4rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '0.85rem' }}
                      />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '0.5rem' }}>
                      <button type="button" className="btn-secondary" onClick={() => setShowUpload(false)}>
                        Cancel
                      </button>
                      <button type="submit" className="btn-primary" disabled={uploading}>
                        {uploading ? 'Uploading...' : 'Save Screenshot'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Screenshots list */}
            {teamScreenshots.length === 0 ? (
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center', padding: '1rem' }}>No screenshots uploaded yet.</p>
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
