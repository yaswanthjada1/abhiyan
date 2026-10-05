import React, { useState, useEffect } from 'react';
import { useProjectContext } from '../context/ProjectContext';
import { ProjectNotes } from '../components/ProjectNotes';
import { ScreenshotUploadModal } from '../components/ScreenshotUploadModal';
import {
  LayoutDashboard,
  CheckCircle2,
  Camera,
  Search,
  Check,
  Copy,
  Users,
  Calendar,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Image as ImageIcon,
  AlertCircle,
  HelpCircle,
  Code
} from 'lucide-react';
import { ScreenshotMetadata } from '../types/project';

export const MyProjectPage: React.FC = () => {
  const {
    activeReferenceId,
    activeTeam,
    activeProject,
    accessProjectByReferenceId,
    toggleTaskCompletion,
    teamScreenshots
  } = useProjectContext();

  const [inputRefId, setInputRefId] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedDayView, setSelectedDayView] = useState<number>(1);
  const [showUploadModal, setShowUploadModal] = useState<boolean>(false);
  const [copiedPromptId, setCopiedPromptId] = useState<string | null>(null);
  const [expandedTaskId, setExpandedTaskId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleAccessSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputRefId.trim()) return;

    setLoading(true);
    await accessProjectByReferenceId(inputRefId.trim());
    setLoading(false);
  };

  const handleCopyPrompt = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPromptId(id);
    setTimeout(() => setCopiedPromptId(null), 2000);
  };

  // Access check fallback
  if (!activeTeam || !activeProject) {
    return (
      <div style={{ maxWidth: '500px', margin: '3rem auto', textAlign: 'center' }}>
        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <LayoutDashboard size={44} color="var(--primary)" style={{ marginBottom: '1rem' }} />
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.35rem' }}>
            Access Student Workspace
          </h1>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            Enter your Project Reference ID (e.g. MMH-A1-X7K92) to open your team workspace.
          </p>

          <form onSubmit={handleAccessSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <input
              type="text"
              required
              placeholder="e.g. MMH-A1-X7K92"
              value={inputRefId}
              onChange={(e) => setInputRefId(e.target.value)}
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

            <button
              type="submit"
              className="btn-primary"
              disabled={loading}
              style={{ justifyContent: 'center', padding: '0.75rem', minHeight: '44px', fontWeight: 700 }}
            >
              <Search size={16} /> {loading ? 'Validating...' : 'Open Project Workspace'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  const guide = activeProject.projectGuide;
  const days = [
    { num: 1, title: 'SETUP', obj: guide?.day1 },
    { num: 2, title: 'AI VIBE CODE', obj: guide?.day2 },
    { num: 3, title: 'CUSTOMISE', obj: guide?.day3 },
    { num: 4, title: 'DOCUMENT', obj: guide?.day4 },
    { num: 5, title: 'DEMO', obj: guide?.day5 }
  ];

  const currentDayGuide = days.find((d) => d.num === selectedDayView)?.obj || guide?.day1;
  const currentDayScreenshots = (teamScreenshots || []).filter((s) => s.day === selectedDayView);

  return (
    <div style={{ paddingBottom: '3rem' }}>
      {/* Workspace Top Bar */}
      <div
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.25rem 1.5rem',
          marginBottom: '1.5rem',
          boxShadow: 'var(--shadow-sm)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem'
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <span className="badge-code">{activeProject.projectCode}</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              Ref: {activeTeam.referenceId}
            </span>
          </div>
          <h1 style={{ fontSize: '1.45rem', fontWeight: 800, margin: '0.2rem 0' }}>
            {activeProject.title} — {activeTeam.teamName}
          </h1>
          <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <span>Leader: <strong>{activeTeam.leader.name}</strong></span>
            <span>Members: <strong>{activeTeam.members.length + 1}</strong></span>
          </div>
        </div>

        {/* Progress & Upload Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              OVERALL PROGRESS
            </div>
            <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary)' }}>
              {activeTeam.progress}%
            </div>
          </div>

          <button
            className="btn-primary"
            onClick={() => setShowUploadModal(true)}
            style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', fontWeight: 700, gap: '0.4rem' }}
          >
            <Camera size={16} /> Upload Evidence
          </button>
        </div>
      </div>

      {/* 5-DAY NAVIGATION TABS */}
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          overflowX: 'auto',
          width: '100%',
          paddingBottom: '0.35rem',
          marginBottom: '1.5rem',
          scrollbarWidth: 'thin',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {days.map((d) => {
          const isActive = selectedDayView === d.num;
          return (
            <button
              key={d.num}
              onClick={() => setSelectedDayView(d.num)}
              style={{
                flex: '1 0 110px',
                minWidth: '110px',
                background: isActive ? 'var(--primary)' : 'var(--bg-card)',
                color: isActive ? '#ffffff' : 'var(--text-color)',
                border: '1px solid ' + (isActive ? 'var(--primary)' : 'var(--border-color)'),
                borderRadius: 'var(--radius-md)',
                padding: '0.75rem 0.5rem',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <div style={{ fontSize: '0.7rem', fontWeight: 800, opacity: isActive ? 0.9 : 0.6 }}>
                DAY {d.num}
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, marginTop: '0.1rem', whiteSpace: 'nowrap' }}>
                {d.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* MAIN TWO-COLUMN WORKSPACE (Desktop: Left=Content, Right=Notes / Mobile: Stacked) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 340px',
          gap: '1.5rem',
          alignItems: 'start'
        }}
      >
        {/* LEFT COLUMN: DAY CONTENT & TASKS & PROMPTS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Day Header Card */}
          {currentDayGuide && (
            <div
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.25rem',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase' }}>
                DAY {currentDayGuide.day} OBJECTIVE — {currentDayGuide.title}
              </div>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 800, margin: '0.3rem 0 0.5rem 0' }}>
                {currentDayGuide.goal}
              </h2>
              <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                {currentDayGuide.objective}
              </p>
            </div>
          )}

          {/* STEP-BY-STEP TASKS WITH DETAILED GUIDE */}
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.25rem',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800 }}>
                Day {selectedDayView} Task Checklist
              </h3>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Click task to expand step-by-step instructions
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {currentDayGuide?.tasks.map((task) => {
                const isChecked = !!activeTeam.completedTasks[task.id];
                const isExpanded = expandedTaskId === task.id;

                return (
                  <div
                    key={task.id}
                    style={{
                      border: '1px solid ' + (isChecked ? 'var(--success-border, var(--border-color))' : 'var(--border-color)'),
                      borderRadius: 'var(--radius-md)',
                      background: isChecked ? 'rgba(16, 185, 129, 0.03)' : 'var(--bg-subtle)',
                      overflow: 'hidden',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {/* Task Title Row */}
                    <div
                      style={{
                        padding: '0.85rem 1rem',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        cursor: 'pointer'
                      }}
                      onClick={() => setExpandedTaskId(isExpanded ? null : task.id)}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) => {
                          e.stopPropagation();
                          toggleTaskCompletion(selectedDayView, task.id);
                        }}
                        style={{
                          width: '18px',
                          height: '18px',
                          marginTop: '2px',
                          cursor: 'pointer',
                          accentColor: 'var(--primary)'
                        }}
                      />

                      <div style={{ flex: 1 }}>
                        <div
                          style={{
                            fontSize: '0.9rem',
                            fontWeight: 700,
                            textDecoration: isChecked ? 'line-through' : 'none',
                            color: isChecked ? 'var(--text-muted)' : 'var(--text-color)'
                          }}
                        >
                          {task.title}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                          {task.description}
                        </div>
                      </div>

                      <button
                        style={{
                          background: 'transparent',
                          border: 'none',
                          color: 'var(--text-muted)',
                          cursor: 'pointer',
                          padding: '0.2rem'
                        }}
                      >
                        {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>
                    </div>

                    {/* Task Detailed Breakdown Panel */}
                    {isExpanded && (
                      <div
                        style={{
                          padding: '0.85rem 1rem 1rem 2.5rem',
                          borderTop: '1px solid var(--border-color)',
                          background: 'var(--bg-card)',
                          fontSize: '0.825rem',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.6rem'
                        }}
                      >
                        {task.why && (
                          <div>
                            <strong style={{ color: 'var(--primary)' }}>WHY YOU ARE DOING IT:</strong>
                            <p style={{ margin: '0.1rem 0 0 0', color: 'var(--text-secondary)' }}>{task.why}</p>
                          </div>
                        )}

                        {task.how && (
                          <div>
                            <strong style={{ color: 'var(--primary)' }}>HOW TO DO IT:</strong>
                            <p style={{ margin: '0.1rem 0 0 0', color: 'var(--text-secondary)' }}>{task.how}</p>
                          </div>
                        )}

                        <div>
                          <strong style={{ color: 'var(--success)' }}>EXPECTED RESULT:</strong>
                          <p style={{ margin: '0.1rem 0 0 0', color: 'var(--text-secondary)' }}>{task.expectedOutput}</p>
                        </div>

                        {task.commonMistakes && (
                          <div style={{ background: 'rgba(239, 68, 68, 0.05)', padding: '0.5rem', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid #ef4444' }}>
                            <strong style={{ color: '#ef4444' }}>COMMON MISTAKE TO AVOID:</strong>
                            <p style={{ margin: '0.1rem 0 0 0', color: 'var(--text-secondary)' }}>{task.commonMistakes}</p>
                          </div>
                        )}

                        {task.screenshotSuggestion && (
                          <div style={{ background: 'rgba(79, 70, 229, 0.05)', padding: '0.5rem', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div>
                              <strong style={{ color: 'var(--primary)' }}>EVIDENCE TO CAPTURE:</strong>
                              <p style={{ margin: '0.1rem 0 0 0', color: 'var(--text-secondary)' }}>{task.screenshotSuggestion}</p>
                            </div>
                            <button
                              className="btn-secondary"
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowUploadModal(true);
                              }}
                              style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem', whiteSpace: 'nowrap' }}
                            >
                              <Camera size={12} /> Upload Screenshot
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* AI PROMPTS SECTION (4-6 REALISTIC, PRACTICAL PROMPTS) */}
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.25rem',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Sparkles size={20} color="var(--primary)" />
              <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800 }}>
                Practical AI Coding Prompts ({activeProject.prompts.length})
              </h3>
            </div>

            <p style={{ margin: '0 0 1rem 0', fontSize: '0.825rem', color: 'var(--text-muted)' }}>
              Copy these realistic, project-specific prompts into ChatGPT, Claude, or Gemini while building.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {activeProject.prompts.map((pr) => (
                <div
                  key={pr.id}
                  style={{
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.6rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.4rem' }}>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-color)' }}>
                      {pr.title}
                    </div>
                    <span className="badge badge-category" style={{ fontSize: '0.7rem' }}>
                      {pr.category}
                    </span>
                  </div>

                  <pre
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.75rem',
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-mono)',
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-word',
                      margin: 0,
                      maxHeight: '200px',
                      overflowY: 'auto',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {pr.promptText}
                  </pre>

                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button
                      className="btn-secondary"
                      onClick={() => handleCopyPrompt(pr.id, pr.promptText)}
                      style={{ padding: '0.35rem 0.75rem', fontSize: '0.775rem' }}
                    >
                      {copiedPromptId === pr.id ? (
                        <>
                          <Check size={14} color="var(--success)" /> Copied!
                        </>
                      ) : (
                        <>
                          <Copy size={14} /> Copy Prompt
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SCREENSHOTS / EVIDENCE FOR THIS DAY */}
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.25rem',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ImageIcon size={20} color="var(--primary)" />
                <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800 }}>
                  Day {selectedDayView} Screenshots & Evidence ({currentDayScreenshots.length})
                </h3>
              </div>
              <button
                className="btn-secondary"
                onClick={() => setShowUploadModal(true)}
                style={{ padding: '0.35rem 0.65rem', fontSize: '0.775rem' }}
              >
                + Add Evidence
              </button>
            </div>

            {currentDayScreenshots.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '1.5rem', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                No screenshots uploaded for Day {selectedDayView} yet. Upload evidence of your working UI or math verification.
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                {currentDayScreenshots.map((scr) => (
                  <div
                    key={scr.id}
                    style={{
                      background: 'var(--bg-subtle)',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-md)',
                      overflow: 'hidden'
                    }}
                  >
                    <a href={scr.downloadUrl} target="_blank" rel="noreferrer">
                      <img
                        src={scr.downloadUrl}
                        alt={scr.caption}
                        style={{
                          width: '100%',
                          height: '140px',
                          objectFit: 'cover',
                          display: 'block'
                        }}
                      />
                    </a>
                    <div style={{ padding: '0.65rem', fontSize: '0.775rem' }}>
                      <div style={{ fontWeight: 600, color: 'var(--text-color)' }}>{scr.caption}</div>
                      <div style={{ color: 'var(--text-muted)', marginTop: '0.2rem', fontSize: '0.7rem' }}>
                        By {scr.uploaderName || 'Team Member'} on {scr.uploadedAt}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: PROJECT NOTES / JOURNAL */}
        <div>
          <ProjectNotes teamId={activeTeam.teamId} currentDay={selectedDayView} isMobileView={isMobile} />
        </div>
      </div>

      {/* SCREENSHOT UPLOAD MODAL */}
      {showUploadModal && (
        <ScreenshotUploadModal
          teamId={activeTeam.teamId}
          projectId={activeProject.projectCode}
          defaultDay={selectedDayView}
          onUploadComplete={() => accessProjectByReferenceId(activeTeam.referenceId)}
          onClose={() => setShowUploadModal(false)}
        />
      )}
    </div>
  );
};
