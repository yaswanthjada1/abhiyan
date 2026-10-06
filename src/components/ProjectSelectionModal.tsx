import React, { useState } from 'react';
import { Project } from '../types/project';
import { useProjectContext } from '../context/ProjectContext';
import { X, Copy, Check, ShieldCheck, AlertOctagon, CheckCircle2, UserPlus, Trash2, Users } from 'lucide-react';

interface ProjectSelectionModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectSelectionModal: React.FC<ProjectSelectionModalProps> = ({ project, onClose }) => {
  const { selectProjectForTeam, setActiveTab, teamCounts } = useProjectContext();

  const minTeamSize = project?.minimumTeamSize || 2;
  const maxTeamSize = project?.maximumTeamSize || 5;

  const [teamName, setTeamName] = useState('');
  const [leaderName, setLeaderName] = useState('');
  const [leaderRoll, setLeaderRoll] = useState('');
  const [leaderEmail, setLeaderEmail] = useState('');
  const [leaderPhone, setLeaderPhone] = useState('');

  // Dynamic Members List (Initial member count = minTeamSize - 1, e.g. 1 additional member if min=2)
  const [members, setMembers] = useState<Array<{ name: string; rollNumber: string }>>([
    { name: '', rollNumber: '' }
  ]);

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Success state with Reference ID
  const [createdRefId, setCreatedRefId] = useState<string | null>(null);
  const [copiedRef, setCopiedRef] = useState(false);

  if (!project) return null;

  const currentTeamCount = teamCounts[project.projectCode] || 0;
  const isFull = currentTeamCount >= 3;
  const currentTotalSize = 1 + members.length; // Leader + Members

  const handleAddMember = () => {
    if (currentTotalSize < maxTeamSize) {
      setMembers(prev => [...prev, { name: '', rollNumber: '' }]);
    }
  };

  const handleRemoveMember = (index: number) => {
    if (currentTotalSize > minTeamSize) {
      setMembers(prev => prev.filter((_, idx) => idx !== index));
    }
  };

  const handleMemberChange = (index: number, field: 'name' | 'rollNumber', value: string) => {
    setMembers(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

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

    if (currentTotalSize < minTeamSize) {
      setError(`Team must have at least ${minTeamSize} members (including leader).`);
      return;
    }

    if (currentTotalSize > maxTeamSize) {
      setError(`Team cannot exceed ${maxTeamSize} members (including leader).`);
      return;
    }

    // Validate that all additional member rows have names & rolls
    for (let i = 0; i < members.length; i++) {
      if (!members[i].name.trim() || !members[i].rollNumber.trim()) {
        setError(`Please fill in Name and Roll Number for Member ${i + 2}.`);
        return;
      }
    }

    setSubmitting(true);

    const formattedMembers = members.map(m => ({
      name: m.name.trim(),
      rollNumber: m.rollNumber.trim(),
      role: 'member' as const
    }));

    const res = await selectProjectForTeam(project.projectCode, {
      teamName: teamName.trim(),
      leader: {
        name: leaderName.trim(),
        rollNumber: leaderRoll.trim(),
        email: leaderEmail.trim(),
        phone: leaderPhone.trim()
      },
      members: formattedMembers
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
      <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '580px', width: '95%' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <div>
            <span className="badge-code">{project.projectCode}</span>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, marginTop: '0.25rem' }}>Select Project Statement</h2>
          </div>
          <button className="btn-secondary" onClick={onClose} style={{ minHeight: '44px', minWidth: '44px', padding: '0.25rem 0.5rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
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

              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>TOTAL TEAM SIZE:</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700 }}>{currentTotalSize} Members (1 Leader + {members.length} Members)</div>
            </div>

            {/* REFERENCE ID HIGHLIGHT BOX */}
            <div
              style={{
                background: 'var(--primary-light)',
                border: '2px dashed var(--primary)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.25rem',
                textAlign: 'center'
              }}
            >
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                PROJECT REFERENCE ID (IMPORTANT)
              </span>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: 'var(--primary)', margin: '0.35rem 0' }}>
                {createdRefId}
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                Save this Reference ID. You will use it to access <strong>My Project</strong>, track 5-day roadmap progress, and upload screenshots.
              </p>

              <button
                className="btn-primary"
                onClick={copyRefHandler}
                style={{ marginTop: '1rem', width: '100%', justifyContent: 'center', minHeight: '44px' }}
              >
                {copiedRef ? <Check size={16} /> : <Copy size={16} />}
                {copiedRef ? 'Copied to Clipboard!' : 'Copy Reference ID'}
              </button>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
              <button
                className="btn-secondary"
                onClick={() => {
                  onClose();
                  setActiveTab('my-project');
                }}
                style={{ flex: 1, justifyContent: 'center', minHeight: '44px' }}
              >
                Go to My Project
              </button>
              <button
                className="btn-primary"
                onClick={onClose}
                style={{ flex: 1, justifyContent: 'center', minHeight: '44px' }}
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* REGISTRATION FORM */
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ background: 'var(--bg-subtle)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div>
                <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)', display: 'block' }}>{project.title}</strong>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Category: {project.category}</span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span className="badge" style={{ background: 'var(--primary-light)', color: 'var(--primary)', fontWeight: 700 }}>
                  <Users size={12} style={{ marginRight: '4px' }} /> Team size: {minTeamSize}–{maxTeamSize} members
                </span>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                  Current Team Size: <strong>{currentTotalSize}</strong>
                </div>
              </div>
            </div>

            {error && (
              <div
                style={{
                  background: 'var(--danger-bg)',
                  border: '1px solid var(--danger)',
                  color: 'var(--danger)',
                  padding: '0.65rem 0.85rem',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <AlertOctagon size={16} />
                <span>{error}</span>
              </div>
            )}

            {/* TEAM DETAILS */}
            <div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, borderBottom: '1px solid var(--border-color)', paddingBottom: '0.35rem', marginBottom: '0.75rem' }}>
                TEAM DETAILS
              </h3>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.25rem' }}>Team Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Team Matrix / Team Alpha"
                  value={teamName}
                  onChange={e => setTeamName(e.target.value)}
                  style={{ width: '100%', padding: '0.6rem 0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', fontSize: '0.9rem', minHeight: '44px' }}
                />
              </div>
            </div>

            {/* TEAM LEADER */}
            <div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, borderBottom: '1px solid var(--border-color)', paddingBottom: '0.35rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <ShieldCheck size={16} color="var(--primary)" /> TEAM LEADER
              </h3>

              <div className="project-content-grid">
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.2rem' }}>Leader Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={leaderName}
                    onChange={e => setLeaderName(e.target.value)}
                    style={{ width: '100%', padding: '0.55rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', fontSize: '0.875rem', minHeight: '44px' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.2rem' }}>Roll Number *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 21BCE1042"
                    value={leaderRoll}
                    onChange={e => setLeaderRoll(e.target.value)}
                    style={{ width: '100%', padding: '0.55rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', fontSize: '0.875rem', minHeight: '44px' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.2rem' }}>Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="student@university.edu"
                    value={leaderEmail}
                    onChange={e => setLeaderEmail(e.target.value)}
                    style={{ width: '100%', padding: '0.55rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', fontSize: '0.875rem', minHeight: '44px' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.2rem' }}>Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="9876543210"
                    value={leaderPhone}
                    onChange={e => setLeaderPhone(e.target.value)}
                    style={{ width: '100%', padding: '0.55rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', fontSize: '0.875rem', minHeight: '44px' }}
                  />
                </div>
              </div>
            </div>

            {/* TEAM MEMBERS (DYNAMIC) */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.35rem', marginBottom: '0.75rem' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700 }}>
                  TEAM MEMBERS ({members.length} Additional)
                </h3>
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--primary)' }}>
                  Team Size: {currentTotalSize} / {maxTeamSize}
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {members.map((member, idx) => (
                  <div key={idx} style={{ background: 'var(--bg-subtle)', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', position: 'relative' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
                        Member {idx + 2}
                      </span>
                      {currentTotalSize > minTeamSize && (
                        <button
                          type="button"
                          onClick={() => handleRemoveMember(idx)}
                          style={{
                            background: 'var(--danger-bg)',
                            color: 'var(--danger)',
                            border: '1px solid var(--danger)',
                            borderRadius: 'var(--radius-sm)',
                            padding: '0.2rem 0.5rem',
                            fontSize: '0.75rem',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.25rem',
                            minHeight: '32px'
                          }}
                        >
                          <Trash2 size={12} /> Remove
                        </button>
                      )}
                    </div>

                    <div className="project-content-grid">
                      <div>
                        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, marginBottom: '0.2rem' }}>Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Member Name"
                          value={member.name}
                          onChange={e => handleMemberChange(idx, 'name', e.target.value)}
                          style={{ width: '100%', padding: '0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '0.85rem', minHeight: '44px' }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, marginBottom: '0.2rem' }}>Roll Number *</label>
                        <input
                          type="text"
                          required
                          placeholder="Roll Number"
                          value={member.rollNumber}
                          onChange={e => handleMemberChange(idx, 'rollNumber', e.target.value)}
                          style={{ width: '100%', padding: '0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '0.85rem', minHeight: '44px' }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* + ADD MEMBER BUTTON */}
              {currentTotalSize < maxTeamSize && (
                <button
                  type="button"
                  onClick={handleAddMember}
                  className="btn-secondary"
                  style={{
                    width: '100%',
                    marginTop: '0.75rem',
                    justifyContent: 'center',
                    borderStyle: 'dashed',
                    minHeight: '44px'
                  }}
                >
                  <UserPlus size={16} /> + Add Member
                </button>
              )}
            </div>

            {/* FORM ACTIONS */}
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '0.5rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn-secondary"
                onClick={onClose}
                disabled={submitting}
                style={{ flex: 1, justifyContent: 'center', minHeight: '44px' }}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="btn-primary"
                disabled={submitting || isFull}
                style={{ flex: 1, justifyContent: 'center', minHeight: '44px' }}
              >
                {submitting ? 'Registering...' : 'Confirm Selection'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
