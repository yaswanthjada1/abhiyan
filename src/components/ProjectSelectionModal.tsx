import React, { useState } from 'react';
import { Project } from '../types/project';
import { useProjectContext } from '../context/ProjectContext';
import { X, Copy, Check, ShieldCheck, AlertOctagon, CheckCircle2 } from 'lucide-react';

interface ProjectSelectionModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectSelectionModal: React.FC<ProjectSelectionModalProps> = ({ project, onClose }) => {
  const { selectProjectForTeam, setActiveTab } = useProjectContext();

  const [teamName, setTeamName] = useState('');
  const [leaderName, setLeaderName] = useState('');
  const [leaderRoll, setLeaderRoll] = useState('');
  const [leaderEmail, setLeaderEmail] = useState('');
  const [leaderPhone, setLeaderPhone] = useState('');

  const [m1Name, setM1Name] = useState('');
  const [m1Roll, setM1Roll] = useState('');
  const [m2Name, setM2Name] = useState('');
  const [m2Roll, setM2Roll] = useState('');
  const [m3Name, setM3Name] = useState('');
  const [m3Roll, setM3Roll] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Success state with Reference ID
  const [createdRefId, setCreatedRefId] = useState<string | null>(null);
  const [copiedRef, setCopiedRef] = useState(false);

  if (!project) return null;

  const isFull = project.selectedTeamCount >= 3 || project.status === 'full';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (isFull) {
      setError('This project has reached its 3-team limit.');
      return;
    }

    if (!teamName.trim() || !leaderName.trim() || !leaderRoll.trim() || !leaderEmail.trim() || !leaderPhone.trim()) {
      setError('Please fill out all required team leader fields.');
      return;
    }

    setSubmitting(true);

    const membersList = [
      ...(m1Name.trim() ? [{ name: m1Name.trim(), rollNumber: m1Roll.trim() }] : []),
      ...(m2Name.trim() ? [{ name: m2Name.trim(), rollNumber: m2Roll.trim() }] : []),
      ...(m3Name.trim() ? [{ name: m3Name.trim(), rollNumber: m3Roll.trim() }] : [])
    ];

    const res = await selectProjectForTeam(project.projectCode, {
      teamName: teamName.trim(),
      leader: {
        name: leaderName.trim(),
        rollNumber: leaderRoll.trim(),
        email: leaderEmail.trim(),
        phone: leaderPhone.trim()
      },
      members: membersList
    });

    setSubmitting(false);

    if (res.success && res.referenceId) {
      setCreatedRefId(res.referenceId);
    } else {
      setError(res.message);
    }
  };

  const copyRefHandler = () => {
    if (createdRefId) {
      navigator.clipboard.writeText(createdRefId);
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2500);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <div>
            <span className="badge-code">{project.projectCode}</span>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, marginTop: '0.25rem' }}>Select Project Statement</h2>
          </div>
          <button className="btn-secondary" onClick={onClose} style={{ padding: '0.25rem 0.5rem' }}>
            <X size={18} />
          </button>
        </div>

        {/* SUCCESS CARD WITH REFERENCE ID */}
        {createdRefId ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div
              style={{
                background: 'var(--success-bg)',
                border: '1px solid var(--success)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                textAlign: 'center'
              }}
            >
              <CheckCircle2 size={36} color="var(--success)" style={{ margin: '0 auto 0.5rem auto' }} />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--success)' }}>Project Selected Successfully!</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                Your team registration has been confirmed.
              </p>
            </div>

            <div style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>PROJECT:</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700 }}>
                {project.projectCode} — {project.title}
              </div>

              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>REGISTERED TEAM:</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700 }}>{teamName}</div>
            </div>

            {/* REFERENCE ID HIGHLIGHT BOX */}
            <div
              style={{
                background: 'var(--primary-light)',
                border: '2px dashed var(--primary)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                textAlign: 'center'
              }}
            >
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                YOUR PROJECT REFERENCE ID:
              </span>
              <div style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-mono)', margin: '0.35rem 0' }}>
                {createdRefId}
              </div>

              <button
                className="btn-primary"
                onClick={copyRefHandler}
                style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem', margin: '0.25rem auto 0 auto' }}
              >
                {copiedRef ? <Check size={14} /> : <Copy size={14} />} {copiedRef ? 'Copied ✓' : 'Copy Reference ID'}
              </button>

              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.75rem' }}>
                ⚠️ Save this reference ID. You will use it on the <strong>My Project</strong> tab to access your workspace.
              </p>
            </div>

            <button
              className="btn-primary"
              onClick={() => {
                onClose();
                setActiveTab('my-project');
              }}
              style={{ width: '100%', justifyContent: 'center', padding: '0.65rem' }}
            >
              Open My Project Workspace
            </button>
          </div>
        ) : isFull ? (
          <div style={{ background: 'var(--danger-bg)', border: '1px solid var(--danger)', padding: '1rem', borderRadius: 'var(--radius-md)', color: 'var(--danger)', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <AlertOctagon size={24} />
            <div>
              <strong>Project Full (3/3 Teams Limit Reached)</strong>
              <p style={{ fontSize: '0.8rem' }}>No fourth team can select this project statement.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {error && (
              <div style={{ background: 'var(--danger-bg)', border: '1px solid var(--danger)', color: 'var(--danger)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem' }}>
                {error}
              </div>
            )}

            <div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--primary)' }}>TEAM LEADER DETAILS</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.2rem' }}>Team Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Matrix Squad"
                    value={teamName}
                    onChange={e => setTeamName(e.target.value)}
                    style={{ width: '100%', padding: '0.45rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '0.85rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.2rem' }}>Leader Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Leader Name"
                    value={leaderName}
                    onChange={e => setLeaderName(e.target.value)}
                    style={{ width: '100%', padding: '0.45rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '0.85rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.2rem' }}>Roll Number *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 21CS001"
                    value={leaderRoll}
                    onChange={e => setLeaderRoll(e.target.value)}
                    style={{ width: '100%', padding: '0.45rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '0.85rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.2rem' }}>Leader Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="leader@college.edu"
                    value={leaderEmail}
                    onChange={e => setLeaderEmail(e.target.value)}
                    style={{ width: '100%', padding: '0.45rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '0.85rem' }}
                  />
                </div>

                <div style={{ gridColumn: 'span 2' }}>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.2rem' }}>Phone Number *</label>
                  <input
                    type="text"
                    required
                    placeholder="+91 98765 43210"
                    value={leaderPhone}
                    onChange={e => setLeaderPhone(e.target.value)}
                    style={{ width: '100%', padding: '0.45rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '0.85rem' }}
                  />
                </div>
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>ADDITIONAL TEAM MEMBERS</h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '0.5rem' }}>
                  <input placeholder="Member 1 Name" value={m1Name} onChange={e => setM1Name(e.target.value)} style={{ padding: '0.4rem', fontSize: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }} />
                  <input placeholder="Roll No" value={m1Roll} onChange={e => setM1Roll(e.target.value)} style={{ padding: '0.4rem', fontSize: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '0.5rem' }}>
                  <input placeholder="Member 2 Name" value={m2Name} onChange={e => setM2Name(e.target.value)} style={{ padding: '0.4rem', fontSize: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }} />
                  <input placeholder="Roll No" value={m2Roll} onChange={e => setM2Roll(e.target.value)} style={{ padding: '0.4rem', fontSize: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '0.5rem' }}>
                  <input placeholder="Member 3 Name" value={m3Name} onChange={e => setM3Name(e.target.value)} style={{ padding: '0.4rem', fontSize: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }} />
                  <input placeholder="Roll No" value={m3Roll} onChange={e => setM3Roll(e.target.value)} style={{ padding: '0.4rem', fontSize: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }} />
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '0.5rem' }}>
              <button type="button" className="btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn-primary" disabled={submitting}>
                <ShieldCheck size={16} /> {submitting ? 'Registering...' : 'Confirm Project Selection'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
