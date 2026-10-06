import React, { useState, useEffect, useRef } from 'react';
import { useProjectContext } from '../context/ProjectContext';
import { ProjectNotes } from '../components/ProjectNotes';
import { ScreenshotUploadModal } from '../components/ScreenshotUploadModal';
import { ToolGuideModal } from '../components/ToolGuideModal';
import { MySpaceComponent } from '../components/MySpaceComponent';
import { OfficialTool, CellGuideStep, VivaQuestion, DocumentationSection, ScreenshotMetadata } from '../types/project';
import {
  BookOpen,
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
  Code,
  ExternalLink,
  Play,
  Terminal,
  FileText,
  Clock,
  ArrowRight,
  ShieldCheck,
  Zap,
  Info,
  Layers,
  Award,
  Globe,
  MessageSquare,
  Layout
} from 'lucide-react';

export const MyProjectPage: React.FC = () => {
  const {
    activeReferenceId,
    activeTeam,
    activeProject,
    accessProjectByReferenceId,
    toggleTaskCompletion,
    teamScreenshots,
    setTeamScreenshots,
    activePerson,
    selectPersonIdentity,
    setActiveTab,
    setSelectedProjectCode
  } = useProjectContext();

  const [inputRefId, setInputRefId] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedDayView, setSelectedDayView] = useState<number>(1);
  const [showUploadModal, setShowUploadModal] = useState<boolean>(false);
  const [copiedPromptId, setCopiedPromptId] = useState<string | null>(null);
  const [selectedToolForGuide, setSelectedToolForGuide] = useState<OfficialTool | null>(null);
  const [expandedTaskId, setExpandedTaskId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1024);
  const [localChecklistState, setLocalChecklistState] = useState<Record<string, boolean>>({});

  const todaysWorkRef = useRef<HTMLDivElement>(null);

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

  const handleCopyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPromptId(id);
    setTimeout(() => setCopiedPromptId(null), 2000);
  };

  const handleChecklistToggle = (key: string) => {
    setLocalChecklistState(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const scrollToTodaysWork = () => {
    if (todaysWorkRef.current) {
      todaysWorkRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Access check fallback if no active team/project
  if (!activeTeam || !activeProject) {
    return (
      <div style={{ maxWidth: '540px', margin: '3rem auto', textAlign: 'center', padding: '0 1rem' }}>
        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem 1.75rem',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--primary-light)',
              color: 'var(--primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem auto'
            }}
          >
            <BookOpen size={28} />
          </div>
          <h1 style={{ fontSize: '1.65rem', fontWeight: 800, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
            ABHIYAN Project Workspace
          </h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.75rem', lineHeight: 1.5 }}>
            Enter your <strong>Project Reference ID</strong> (e.g. MMH-A1-X7K92) to open your team workspace.
          </p>

          <form onSubmit={handleAccessSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input
              type="text"
              required
              placeholder="e.g. MMH-A1-X7K92"
              value={inputRefId}
              onChange={(e) => setInputRefId(e.target.value)}
              style={{
                width: '100%',
                padding: '0.85rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
                fontSize: '1.15rem',
                fontFamily: 'var(--font-mono)',
                textAlign: 'center',
                letterSpacing: '0.08em',
                minHeight: '48px',
                background: 'var(--bg-subtle)',
                color: 'var(--text-primary)'
              }}
            />

            <button
              type="submit"
              className="btn-primary"
              disabled={loading}
              style={{ justifyContent: 'center', padding: '0.85rem', minHeight: '48px', fontWeight: 700, fontSize: '0.95rem' }}
            >
              <Search size={18} /> {loading ? 'Validating Reference ID...' : 'Enter ABHIYAN Workspace'}
            </button>
          </form>

          <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-color)', fontSize: '0.825rem', color: 'var(--text-muted)' }}>
            Don't have a project yet?{' '}
            <button
              onClick={() => setActiveTab('projects')}
              style={{ background: 'none', border: 'none', color: 'var(--primary)', fontWeight: 700, cursor: 'pointer', textDecoration: 'underline' }}
            >
              Browse 50 Projects
            </button>
          </div>
        </div>
      </div>
    );
  }

  const guide = activeProject.projectGuide;

  const daysInfo = [
    { num: 1, title: 'SETUP', hours: 3, guide: guide?.day1 },
    { num: 2, title: 'AI VIBE CODE', hours: 4, guide: guide?.day2 },
    { num: 3, title: 'CUSTOMISE', hours: 3, guide: guide?.day3 },
    { num: 4, title: 'DOCUMENT', hours: 3, guide: guide?.day4 },
    { num: 5, title: 'DEMO', hours: 2, guide: guide?.day5 }
  ];

  const currentActiveDayNum = activeTeam.currentDay || 1;
  const currentSelectedDayObj = daysInfo.find(d => d.num === selectedDayView) || daysInfo[0];
  const currentDayGuide = currentSelectedDayObj.guide;
  const currentDayScreenshots = (teamScreenshots || []).filter((s) => s.day === selectedDayView);

  // Compute tasks completion for selected day
  const dayTasks = currentDayGuide?.tasks || [];
  const completedDayTasksCount = dayTasks.filter(t => activeTeam.completedTasks?.[t.id]).length;

  return (
    <div style={{ paddingBottom: '3rem' }}>
      {/* 1. HEADER BRANDING & PROJECT DASHBOARD SUMMARY */}
      <div
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.35rem 1.5rem',
          marginBottom: '1.5rem',
          boxShadow: 'var(--shadow-md)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
              <span className="badge-code" style={{ fontSize: '0.85rem', fontWeight: 800 }}>
                {activeProject.projectCode}
              </span>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                ABHIYAN
              </span>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                Ref: {activeTeam.referenceId}
              </span>
            </div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '0.2rem 0', color: 'var(--text-primary)', lineHeight: 1.25 }}>
              {activeProject.title}
            </h1>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap', marginTop: '0.4rem' }}>
              <span>Team: <strong style={{ color: 'var(--text-primary)' }}>{activeTeam.teamName}</strong></span>
              <span>Leader: <strong>{activeTeam.leader.name}</strong></span>
              <span>Members: <strong>{activeTeam.members.length + 1}</strong></span>
            </div>

            {/* Private Person Identity Selector Bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 800, letterSpacing: '0.05em' }}>
                ACTIVE PERSON IDENTITY:
              </span>
              <select
                value={activePerson ? `${activePerson.name}|${activePerson.rollNumber}` : `${activeTeam.leader.name}|${activeTeam.leader.rollNumber}`}
                onChange={async (e) => {
                  const [name, roll] = e.target.value.split('|');
                  const isLeader = name === activeTeam.leader.name;
                  await selectPersonIdentity(name, roll, isLeader ? 'leader' : 'member');
                }}
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  padding: '0.35rem 0.65rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-subtle)',
                  color: 'var(--text-primary)',
                  cursor: 'pointer'
                }}
              >
                <option value={`${activeTeam.leader.name}|${activeTeam.leader.rollNumber}`}>
                  👤 {activeTeam.leader.name} (Leader — Roll: {activeTeam.leader.rollNumber})
                </option>
                {activeTeam.members.map((m) => (
                  <option key={m.rollNumber} value={`${m.name}|${m.rollNumber}`}>
                    👤 {m.name} (Member — Roll: {m.rollNumber})
                  </option>
                ))}
              </select>
              {activePerson && (
                <span style={{ fontSize: '0.725rem', color: 'var(--primary)', fontWeight: 700, background: 'var(--primary-light)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                  ID: {activePerson.personId} · Private Storage Active ✓
                </span>
              )}
            </div>
          </div>

          {/* Quick Action & Overall Progress */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 800, letterSpacing: '0.05em' }}>
                OVERALL PROGRESS
              </div>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--primary)' }}>
                {activeTeam.progress}%
              </div>
            </div>

            <button
              className="btn-primary"
              onClick={scrollToTodaysWork}
              style={{ padding: '0.65rem 1.15rem', fontSize: '0.875rem', fontWeight: 700, gap: '0.4rem' }}
            >
              <Zap size={16} /> Continue Today's Work
            </button>

            <button
              className="btn-secondary"
              onClick={() => setShowUploadModal(true)}
              style={{ padding: '0.65rem 0.95rem', fontSize: '0.85rem', fontWeight: 600, gap: '0.4rem' }}
            >
              <Camera size={16} /> Upload Evidence
            </button>
          </div>
        </div>
      </div>

      {/* MY SPACE — PRIVATE PERSONAL PHOTOS & NOTES */}
      {activePerson && (
        <MySpaceComponent person={activePerson} />
      )}

      {/* 2. FIVE-DAY TIMELINE PROGRESS BAR (15 HOURS TOTAL) */}
      <div style={{ marginBottom: '1.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem', padding: '0 0.25rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            ABHIYAN 5-DAY WORKFLOW TIMELINE (TOTAL 15 HOURS)
          </span>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)' }}>
            Stage {selectedDayView} of 5 — {currentSelectedDayObj.hours} Hours Allocated
          </span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(5, minmax(110px, 1fr))' : 'repeat(5, 1fr)',
            gap: '0.5rem',
            overflowX: isMobile ? 'auto' : 'visible',
            paddingBottom: isMobile ? '0.5rem' : 0
          }}
        >
          {daysInfo.map((d) => {
            const isSelected = selectedDayView === d.num;
            const isCurrentStage = currentActiveDayNum === d.num;
            const isPassedStage = d.num < currentActiveDayNum;

            return (
              <button
                key={d.num}
                onClick={() => setSelectedDayView(d.num)}
                style={{
                  background: isSelected
                    ? 'var(--primary)'
                    : isPassedStage
                    ? 'var(--bg-subtle)'
                    : 'var(--bg-card)',
                  color: isSelected ? '#ffffff' : 'var(--text-color)',
                  border: `2px solid ${isSelected ? 'var(--primary)' : isCurrentStage ? 'var(--accent)' : 'var(--border-color)'}`,
                  borderRadius: 'var(--radius-md)',
                  padding: '0.85rem 0.6rem',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  minWidth: isMobile ? '120px' : 'auto'
                }}
              >
                <div style={{ fontSize: '0.68rem', fontWeight: 800, opacity: isSelected ? 0.9 : 0.6, letterSpacing: '0.05em' }}>
                  DAY 0{d.num} — {d.hours}H
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, marginTop: '0.15rem', whiteSpace: 'nowrap' }}>
                  {d.title}
                </div>

                {isPassedStage && (
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: isSelected ? '#ffffff' : 'var(--success)', marginTop: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                    <CheckCircle2 size={11} /> Completed
                  </span>
                )}
                {isCurrentStage && !isPassedStage && (
                  <span style={{ fontSize: '0.68rem', fontWeight: 800, background: isSelected ? '#ffffff' : 'var(--accent)', color: isSelected ? 'var(--primary)' : '#ffffff', padding: '0.1rem 0.4rem', borderRadius: '4px', marginTop: '0.25rem' }}>
                    CURRENT
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. MAIN WORKSPACE GRID: LEFT = DAY GUIDED WORKFLOW, RIGHT = PROJECT JOURNAL */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 350px',
          gap: '1.5rem',
          alignItems: 'start'
        }}
      >
        {/* LEFT COLUMN: GUIDED WORKFLOW & TASKS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

          {/* TODAY'S WORK CARD CONTAINER */}
          <div
            ref={todaysWorkRef}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            {/* Header / Goal Banner */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '1.25rem', gap: '0.75rem' }}>
              <div>
                <div style={{ fontSize: '0.725rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  DAY {selectedDayView} WORKFLOW — {currentSelectedDayObj.hours} HOURS
                </div>
                <h2 style={{ fontSize: '1.35rem', fontWeight: 800, margin: '0.2rem 0', color: 'var(--text-primary)' }}>
                  DAY {selectedDayView} — {currentSelectedDayObj.title}
                </h2>
                <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  {currentDayGuide?.goal}
                </p>
              </div>

              <div style={{ background: 'var(--bg-subtle)', padding: '0.5rem 0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', textAlign: 'right' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                  TASKS COMPLETED
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  {completedDayTasksCount} / {dayTasks.length}
                </div>
              </div>
            </div>

            {/* DAY 1 SPECIFIC SPECIAL CARDS */}
            {selectedDayView === 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '1.5rem' }}>

                {/* DAY 1: CREATE ACCOUNTS CARDS */}
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <ShieldCheck size={18} color="var(--primary)" /> 1. Create Your Accounts
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                    You will use these tools throughout the 5-day project. Click each tool card to set up your account.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '1rem' }}>
                    {(currentDayGuide?.tools || []).map((t) => (
                      <div
                        key={t.name}
                        style={{
                          background: 'var(--bg-subtle)',
                          border: '1px solid var(--border-color)',
                          borderRadius: 'var(--radius-md)',
                          padding: '1rem',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between'
                        }}
                      >
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                            <span style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                              {t.name}
                            </span>
                            {t.isOptional && (
                              <span style={{ fontSize: '0.68rem', fontWeight: 600, background: 'var(--bg-card)', padding: '0.15rem 0.4rem', borderRadius: '4px', border: '1px solid var(--border-color)' }}>
                                Optional
                              </span>
                            )}
                          </div>
                          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: '0 0 0.5rem 0', lineHeight: 1.4 }}>
                            <strong>Purpose:</strong> {t.purpose}
                          </p>
                          <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.4 }}>
                            {t.whyNeeded}
                          </p>
                        </div>

                        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                          <button
                            className="btn-secondary"
                            onClick={() => setSelectedToolForGuide(t)}
                            style={{ flex: 1, fontSize: '0.78rem', padding: '0.4rem', justifyContent: 'center' }}
                          >
                            Step Guide
                          </button>
                          <a
                            href={t.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                            style={{ flex: 1.2, fontSize: '0.78rem', padding: '0.4rem', textDecoration: 'none', justifyContent: 'center', gap: '0.25rem', fontWeight: 700 }}
                          >
                            Open {t.name} <ExternalLink size={12} />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* DAY 1: DEDICATED GOOGLE COLAB GUIDE */}
                <div style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Terminal size={20} color="var(--primary)" />
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 800, margin: 0 }}>How to use Google Colab</h3>
                    </div>
                    <a
                      href="https://colab.research.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ fontSize: '0.8rem', padding: '0.45rem 0.85rem', textDecoration: 'none', fontWeight: 700, gap: '0.35rem' }}
                    >
                      Open Google Colab ↗
                    </a>
                  </div>

                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.5 }}>
                    <strong>What is Colab?</strong> Colab is a free browser-based Python notebook environment where you will write and run your project code.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '0.5rem', marginBottom: '1.25rem' }}>
                    {[
                      'STEP 1: Open Colab (colab.research.google.com)',
                      'STEP 2: Sign in with Google account',
                      'STEP 3: Click "New Notebook"',
                      `STEP 4: Rename notebook to ${activeProject.projectCode}_${activeProject.title.replace(/[^a-zA-Z0-9]/g, '_')}`,
                      'STEP 5: Create a code cell',
                      'STEP 6: Type print("Hello World")',
                      'STEP 7: Confirm "Hello World" output appears below cell',
                      'STEP 8: Understand the Play button to execute cells',
                      'STEP 9: Understand how code and text cells work',
                      'STEP 10: Know how to restart & run all cells',
                      'STEP 11: Know how to save notebook to Google Drive',
                      'STEP 12: Know how to share/download notebook (.ipynb)'
                    ].map((stepText, idx) => (
                      <div key={idx} style={{ fontSize: '0.78rem', background: 'var(--bg-card)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}>
                        {stepText}
                      </div>
                    ))}
                  </div>

                  {/* COLAB CHECKPOINT */}
                  <div style={{ background: 'var(--bg-card)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                      COLAB CHECKPOINT
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {[
                        'Colab opens in browser',
                        'Python environment initializes',
                        'Hello World works cleanly',
                        `Notebook renamed to ${activeProject.projectCode}_${activeProject.title.replace(/[^a-zA-Z0-9]/g, '_')}`,
                        'Student knows how to run a code cell'
                      ].map((chk, i) => {
                        const key = `colab-chk-${i}`;
                        const isDone = !!localChecklistState[key];
                        return (
                          <label key={key} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.825rem', cursor: 'pointer' }}>
                            <input
                              type="checkbox"
                              checked={isDone}
                              onChange={() => handleChecklistToggle(key)}
                              style={{ width: '16px', height: '16px', accentColor: 'var(--primary)' }}
                            />
                            <span style={{ textDecoration: isDone ? 'line-through' : 'none', opacity: isDone ? 0.7 : 1 }}>
                              {chk}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* DAY 1: UNDERSTAND YOUR PROBLEM CARD */}
                <div style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                    UNDERSTAND YOUR PROBLEM
                  </h3>

                  <div style={{ background: 'var(--bg-card)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', marginBottom: '1rem' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.25rem' }}>
                      PROBLEM STATEMENT:
                    </div>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                      "{activeProject.problemStatement}"
                    </p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div style={{ fontSize: '0.825rem', background: 'var(--bg-card)', padding: '0.75rem', borderRadius: 'var(--radius-sm)' }}>
                      <strong>What are you asking to build?</strong> {guide?.problemBreakdown?.whatToBuild}
                    </div>
                    <div style={{ fontSize: '0.825rem', background: 'var(--bg-card)', padding: '0.75rem', borderRadius: 'var(--radius-sm)' }}>
                      <strong>Who would use it?</strong> {guide?.problemBreakdown?.targetUser}
                    </div>
                    <div style={{ fontSize: '0.825rem', background: 'var(--bg-card)', padding: '0.75rem', borderRadius: 'var(--radius-sm)' }}>
                      <strong>What are the inputs?</strong> {guide?.problemBreakdown?.inputs}
                    </div>
                    <div style={{ fontSize: '0.825rem', background: 'var(--bg-card)', padding: '0.75rem', borderRadius: 'var(--radius-sm)' }}>
                      <strong>What are the outputs?</strong> {guide?.problemBreakdown?.outputs}
                    </div>
                    <div style={{ fontSize: '0.825rem', background: 'var(--bg-card)', padding: '0.75rem', borderRadius: 'var(--radius-sm)' }}>
                      <strong>Mathematical Concept:</strong> {activeProject.mathUsed.join(', ')}
                    </div>
                    <div style={{ fontSize: '0.825rem', background: 'var(--bg-card)', padding: '0.75rem', borderRadius: 'var(--radius-sm)' }}>
                      <strong>Final Demo Goal:</strong> {guide?.problemBreakdown?.finalDemoGoal}
                    </div>
                  </div>

                  <div style={{ background: 'rgba(234, 179, 8, 0.1)', border: '1px solid rgba(234, 179, 8, 0.3)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', marginBottom: '1rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    ⚠️ Before continuing, make sure you can explain the problem in your own words.
                  </div>

                  {/* Problem Checklist */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {(guide?.problemBreakdown?.checklist || []).map((chk, idx) => {
                      const key = `prob-chk-${idx}`;
                      const isDone = !!localChecklistState[key];
                      return (
                        <label key={key} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.825rem', cursor: 'pointer' }}>
                          <input
                            type="checkbox"
                            checked={isDone}
                            onChange={() => handleChecklistToggle(key)}
                            style={{ width: '16px', height: '16px', accentColor: 'var(--primary)' }}
                          />
                          <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
                            {chk}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* DAY 1: ASK CHATGPT CONCEPT PROMPT */}
                <div style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <MessageSquare size={18} color="var(--primary)" />
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 800, margin: 0 }}>4. Ask ChatGPT to Explain Concept</h3>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                    Copy this project-specific prompt to ChatGPT to get a clear conceptual explanation of your mathematics project.
                  </p>

                  <div style={{ background: 'var(--bg-card)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', whiteSpace: 'pre-wrap', lineHeight: 1.5, marginBottom: '1rem', maxHeight: '200px', overflowY: 'auto' }}>
                    {currentDayGuide?.prompts?.[0]?.promptText}
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <button
                      className="btn-primary"
                      onClick={() => handleCopyText('d1-concept', currentDayGuide?.prompts?.[0]?.promptText || '')}
                      style={{ fontSize: '0.825rem', padding: '0.5rem 1rem', fontWeight: 700 }}
                    >
                      <Copy size={14} /> {copiedPromptId === 'd1-concept' ? 'Copied Prompt ✓' : 'COPY PROMPT'}
                    </button>
                    <a
                      href="https://chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      style={{ fontSize: '0.825rem', padding: '0.5rem 1rem', textDecoration: 'none', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                    >
                      OPEN CHATGPT ↗
                    </a>
                  </div>
                </div>

                {/* DAY 1: CHOOSE / VIEW YOUR PROJECT CARD */}
                <div style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--success)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.2rem' }}>
                      <CheckCircle2 size={14} /> ✓ Project Selected
                    </span>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, margin: 0 }}>
                      {activeProject.projectCode} — {activeProject.title}
                    </h4>
                  </div>
                  <button
                    className="btn-secondary"
                    onClick={() => setActiveTab('projects')}
                    style={{ fontSize: '0.825rem', padding: '0.5rem 1rem', fontWeight: 700 }}
                  >
                    Browse 50 Projects
                  </button>
                </div>

              </div>
            )}

            {/* DAY 2 SPECIFIC SPECIAL CARDS (AI VIBE CODE) */}
            {selectedDayView === 2 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '1.5rem' }}>

                {/* VISUAL STEP-BY-STEP FLOW BANNER */}
                <div style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1rem', textOverflow: 'ellipsis' }}>
                  <div style={{ fontSize: '0.725rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    DAY 2 DEVELOPMENT FLOW
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', overflowX: 'auto', paddingBottom: '0.25rem' }}>
                    {(currentDayGuide?.visualFlow || []).map((step, idx, arr) => (
                      <React.Fragment key={idx}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 800, background: step === 'WORKING MVP' ? 'var(--success)' : 'var(--bg-card)', color: step === 'WORKING MVP' ? '#ffffff' : 'var(--text-primary)', padding: '0.3rem 0.6rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', whiteSpace: 'nowrap' }}>
                          {step}
                        </span>
                        {idx < arr.length - 1 && <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>↓</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* DAY 2: BUILD PROMPT (SINGLE STRONG PROMPT) */}
                <div style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Code size={18} color="var(--primary)" />
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 800, margin: 0 }}>DAY 2 BUILD PROMPT</h3>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                    Copy this single project-specific coding prompt to ChatGPT to generate your initial Google Colab Python notebook code.
                  </p>

                  <div style={{ background: 'var(--bg-card)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', whiteSpace: 'pre-wrap', lineHeight: 1.5, marginBottom: '1rem', maxHeight: '240px', overflowY: 'auto' }}>
                    {currentDayGuide?.prompts?.[0]?.promptText}
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <button
                      className="btn-primary"
                      onClick={() => handleCopyText('d2-build', currentDayGuide?.prompts?.[0]?.promptText || '')}
                      style={{ fontSize: '0.825rem', padding: '0.5rem 1.15rem', fontWeight: 700 }}
                    >
                      <Copy size={14} /> {copiedPromptId === 'd2-build' ? 'Copied Build Prompt ✓' : 'COPY PROMPT'}
                    </button>
                    <a
                      href="https://chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      style={{ fontSize: '0.825rem', padding: '0.5rem 1.15rem', textDecoration: 'none', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                    >
                      OPEN CHATGPT ↗
                    </a>
                  </div>
                </div>

                {/* DAY 2: WARNING CARD */}
                <div style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.25)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--danger)', fontWeight: 800, fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                    <AlertCircle size={18} /> DO NOT BLINDLY COPY AI CODE
                  </div>
                  <p style={{ margin: '0 0 0.85rem 0', fontSize: '0.85rem', color: 'var(--text-primary)', lineHeight: 1.45 }}>
                    {currentDayGuide?.warningMessage}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {(currentDayGuide?.warningChecklist || []).map((item, idx) => {
                      const key = `warn-chk-${idx}`;
                      const isDone = !!localChecklistState[key];
                      return (
                        <label key={key} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.825rem', cursor: 'pointer' }}>
                          <input
                            type="checkbox"
                            checked={isDone}
                            onChange={() => handleChecklistToggle(key)}
                            style={{ width: '16px', height: '16px', accentColor: 'var(--danger)' }}
                          />
                          <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
                            {item}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* DAY 2: CELL-BY-CELL GUIDE */}
                <div style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                    CELL-BY-CELL GUIDE
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {(currentDayGuide?.cellGuide || []).map((cg) => (
                      <div key={cg.stepNumber} style={{ background: 'var(--bg-card)', padding: '0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                        <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.2rem' }}>
                          {cg.title}
                        </div>
                        <div style={{ fontSize: '0.825rem', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                          {cg.action}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', background: 'var(--bg-subtle)', padding: '0.4rem 0.6rem', borderRadius: 'var(--radius-sm)' }}>
                          <strong>Expected Result:</strong> {cg.expectedResult}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* DAY 2: DEBUGGING PROMPT */}
                {currentDayGuide?.debugPrompt && (
                  <div style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                    <div style={{ fontSize: '0.95rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                      DAY 2 DEBUGGING PROMPT
                    </div>
                    <div style={{ background: 'var(--bg-card)', padding: '0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', whiteSpace: 'pre-wrap', marginBottom: '0.85rem', maxHeight: '160px', overflowY: 'auto' }}>
                      {currentDayGuide.debugPrompt.promptText}
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button
                        className="btn-primary"
                        onClick={() => handleCopyText('d2-debug', currentDayGuide.debugPrompt?.promptText || '')}
                        style={{ fontSize: '0.8rem', padding: '0.4rem 0.85rem' }}
                      >
                        <Copy size={13} /> {copiedPromptId === 'd2-debug' ? 'Copied ✓' : 'COPY DEBUG PROMPT'}
                      </button>
                      <a
                        href="https://chatgpt.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                        style={{ fontSize: '0.8rem', padding: '0.4rem 0.85rem', textDecoration: 'none' }}
                      >
                        OPEN CHATGPT ↗
                      </a>
                    </div>
                  </div>
                )}

                {/* DAY 2: MVP WORKING CHECKPOINT */}
                <div style={{ background: 'var(--bg-subtle)', border: '2px solid var(--success)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--success)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <CheckCircle2 size={20} /> MVP WORKING ✓ CHECKPOINT
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1rem' }}>
                    {(currentDayGuide?.checkpoints || []).map((chk, i) => {
                      const key = `mvp-chk-${i}`;
                      const isDone = !!localChecklistState[key];
                      return (
                        <label key={key} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', cursor: 'pointer' }}>
                          <input
                            type="checkbox"
                            checked={isDone}
                            onChange={() => handleChecklistToggle(key)}
                            style={{ width: '16px', height: '16px', accentColor: 'var(--success)' }}
                          />
                          <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>{chk}</span>
                        </label>
                      );
                    })}
                  </div>
                  <button
                    className="btn-primary"
                    onClick={() => setShowUploadModal(true)}
                    style={{ fontSize: '0.85rem', padding: '0.55rem 1rem', fontWeight: 700, width: '100%', justifyContent: 'center' }}
                  >
                    <Camera size={16} /> Take Screenshots Now & Upload Evidence
                  </button>
                </div>

              </div>
            )}

            {/* DAY 3 SPECIFIC SPECIAL CARDS (CUSTOMISE) */}
            {selectedDayView === 3 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '1.5rem' }}>
                {/* CUSTOMIZATION GUIDANCE */}
                <div style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                    Meaningful Customization Guidance
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.85rem' }}>
                    The goal is NOT to make the project unnecessarily complicated. The goal is to make the project YOUR team's work.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '0.75rem' }}>
                    <div style={{ background: 'rgba(239, 68, 68, 0.08)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                      <strong style={{ color: 'var(--danger)', fontSize: '0.8rem' }}>BAD:</strong>
                      <p style={{ margin: 0, fontSize: '0.8rem' }}>Changing button color or font size only.</p>
                    </div>
                    <div style={{ background: 'rgba(34, 197, 94, 0.08)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(34, 197, 94, 0.2)' }}>
                      <strong style={{ color: 'var(--success)', fontSize: '0.8rem' }}>GOOD:</strong>
                      <p style={{ margin: 0, fontSize: '0.8rem' }}>Adding another dataset or trade-off graph comparing results.</p>
                    </div>
                  </div>
                </div>

                {/* DAY 3 PROMPT */}
                <div style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, marginBottom: '0.5rem' }}>DAY 3 CUSTOMIZATION PROMPT</div>
                  <div style={{ background: 'var(--bg-card)', padding: '0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', whiteSpace: 'pre-wrap', marginBottom: '0.85rem', maxHeight: '180px', overflowY: 'auto' }}>
                    {currentDayGuide?.prompts?.[0]?.promptText}
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button className="btn-primary" onClick={() => handleCopyText('d3-custom', currentDayGuide?.prompts?.[0]?.promptText || '')} style={{ fontSize: '0.8rem', padding: '0.4rem 0.85rem' }}>
                      <Copy size={13} /> {copiedPromptId === 'd3-custom' ? 'Copied ✓' : 'COPY PROMPT'}
                    </button>
                    <a href="https://chatgpt.com" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ fontSize: '0.8rem', padding: '0.4rem 0.85rem', textDecoration: 'none' }}>
                      OPEN CHATGPT ↗
                    </a>
                  </div>
                </div>

                {/* README.MD STARTER TEMPLATE */}
                <div style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800, margin: 0 }}>README.md Starter Template</h3>
                    <button className="btn-primary" onClick={() => handleCopyText('readme-tmpl', currentDayGuide?.readmeStarterTemplate || '')} style={{ fontSize: '0.78rem', padding: '0.35rem 0.75rem' }}>
                      <Copy size={12} /> {copiedPromptId === 'readme-tmpl' ? 'Copied README ✓' : 'COPY README TEMPLATE'}
                    </button>
                  </div>
                  <div style={{ background: 'var(--bg-card)', padding: '0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', whiteSpace: 'pre-wrap', maxHeight: '200px', overflowY: 'auto' }}>
                    {currentDayGuide?.readmeStarterTemplate}
                  </div>
                </div>
              </div>
            )}

            {/* DAY 4 SPECIFIC SPECIAL CARDS (DOCUMENT) */}
            {selectedDayView === 4 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '1.5rem' }}>
                {/* GITHUB GUIDE */}
                <div style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800, margin: 0 }}>HOW TO UPLOAD TO GITHUB</h3>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '0.78rem', padding: '0.35rem 0.75rem', textDecoration: 'none' }}>
                      OPEN GITHUB ↗
                    </a>
                  </div>
                  <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '1rem' }}>
                    <span>1. Open GitHub and sign in.</span>
                    <span>2. Click "New Repository".</span>
                    <span>3. Name it: <code>{activeProject.projectCode.toLowerCase()}-{activeProject.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}</code></span>
                    <span>4. Add README.md.</span>
                    <span>5. Upload Colab notebook (.ipynb).</span>
                    <span>6. Upload screenshots/assets.</span>
                    <span>7. Verify repository is Public.</span>
                    <span>8. Copy repository URL for submission.</span>
                  </div>
                </div>

                {/* CANVA PPT & SHORT NOTE */}
                <div style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800, margin: 0 }}>CANVA PPT & 1-PAGE SHORT NOTE</h3>
                    <a href="https://canva.com" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '0.78rem', padding: '0.35rem 0.75rem', textDecoration: 'none' }}>
                      OPEN CANVA ↗
                    </a>
                  </div>
                  <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    Recommended 10 Slide Deck: 1. Title | 2. Problem | 3. Real-world | 4. Math Concept | 5. Algorithm | 6. Implementation | 7. Results | 8. Screenshots | 9. Conclusion | 10. Team
                  </p>
                </div>

                {/* GOOGLE DOCS 15-SECTION REPORT */}
                <div style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800, margin: 0 }}>15-SECTION DETAILED GOOGLE DOCS REPORT</h3>
                    <a href="https://docs.google.com" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '0.78rem', padding: '0.35rem 0.75rem', textDecoration: 'none' }}>
                      OPEN GOOGLE DOCS ↗
                    </a>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '0.5rem', maxHeight: '240px', overflowY: 'auto' }}>
                    {(currentDayGuide?.reportSections || []).map((sec) => (
                      <div key={sec.sectionNumber} style={{ background: 'var(--bg-card)', padding: '0.6rem 0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '0.78rem' }}>
                        <strong>{sec.sectionNumber}. {sec.title}:</strong> <span style={{ color: 'var(--text-muted)' }}>{sec.guidance}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* DAY 5 SPECIFIC SPECIAL CARDS (DEMO) */}
            {selectedDayView === 5 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '1.5rem' }}>
                {/* 3-MINUTE DEMO SCRIPT */}
                <div style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.75rem' }}>3-MINUTE DEMO TIMING GUIDE</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {(currentDayGuide?.demoScript || []).map((ds, i) => (
                      <div key={i} style={{ background: 'var(--bg-card)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 800, background: 'var(--primary-light)', color: 'var(--primary)', padding: '0.2rem 0.5rem', borderRadius: '4px', whiteSpace: 'nowrap' }}>
                          {ds.timeframe}
                        </span>
                        <div>
                          <strong style={{ fontSize: '0.85rem' }}>{ds.section}:</strong> <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{ds.guidance}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* VIVA QUESTIONS MASTER */}
                <div style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.75rem' }}>10 PROJECT-SPECIFIC VIVA QUESTIONS</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxHeight: '340px', overflowY: 'auto' }}>
                    {(currentDayGuide?.vivaQuestions || []).map((vq, i) => (
                      <div key={vq.id} style={{ background: 'var(--bg-card)', padding: '0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                          <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase' }}>
                            Q{i+1} · {vq.category}
                          </span>
                          {vq.examinerTesting && (
                            <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                              Testing: {vq.examinerTesting}
                            </span>
                          )}
                        </div>
                        <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                          {vq.question}
                        </div>
                        <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', background: 'var(--bg-subtle)', padding: '0.5rem', borderRadius: 'var(--radius-sm)' }}>
                          <strong>Answer:</strong> {vq.answer}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* READY TO SUBMIT CHECKLIST */}
                <div style={{ background: 'var(--bg-subtle)', border: '2px solid var(--primary)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: 0, color: 'var(--primary)' }}>READY TO SUBMIT?</h3>
                    <span style={{ fontSize: '0.85rem', fontWeight: 800, background: 'var(--primary)', color: '#ffffff', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                      8 / 9 Complete
                    </span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '0.4rem', marginBottom: '1rem' }}>
                    {(guide?.demoChecklist || []).map((item, idx) => {
                      const key = `final-sub-${idx}`;
                      const isDone = !!localChecklistState[key];
                      return (
                        <label key={key} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.825rem', cursor: 'pointer' }}>
                          <input
                            type="checkbox"
                            checked={isDone}
                            onChange={() => handleChecklistToggle(key)}
                            style={{ width: '16px', height: '16px', accentColor: 'var(--primary)' }}
                          />
                          <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>{item}</span>
                        </label>
                      );
                    })}
                  </div>
                  <div style={{ textAlign: 'center', background: 'var(--primary-light)', padding: '0.75rem', borderRadius: 'var(--radius-md)', fontWeight: 800, color: 'var(--primary)' }}>
                    READY FOR DEMO ✓
                  </div>
                </div>
              </div>
            )}

            {/* DAY TASKS CHECKLIST FOR CURRENT DAY */}
            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                DAY {selectedDayView} ACTION TASKS
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {dayTasks.map((t) => {
                  const isCompleted = !!activeTeam.completedTasks?.[t.id];
                  const isExpanded = expandedTaskId === t.id;

                  return (
                    <div
                      key={t.id}
                      style={{
                        background: 'var(--bg-subtle)',
                        border: '1px solid ' + (isCompleted ? 'var(--success)' : 'var(--border-color)'),
                        borderRadius: 'var(--radius-md)',
                        padding: '1rem',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', flex: 1 }}>
                          <button
                            onClick={() => toggleTaskCompletion(selectedDayView, t.id)}
                            style={{
                              background: isCompleted ? 'var(--success)' : 'transparent',
                              border: '2px solid ' + (isCompleted ? 'var(--success)' : 'var(--border-color)'),
                              borderRadius: '4px',
                              width: '22px',
                              height: '22px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer',
                              marginTop: '0.15rem',
                              flexShrink: 0
                            }}
                          >
                            {isCompleted && <Check size={14} color="#ffffff" />}
                          </button>

                          <div>
                            <h4
                              onClick={() => setExpandedTaskId(isExpanded ? null : t.id)}
                              style={{
                                fontSize: '0.95rem',
                                fontWeight: 700,
                                margin: 0,
                                cursor: 'pointer',
                                textDecoration: isCompleted ? 'line-through' : 'none',
                                color: isCompleted ? 'var(--text-muted)' : 'var(--text-primary)'
                              }}
                            >
                              {t.title}
                            </h4>
                            <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', margin: '0.25rem 0 0 0', lineHeight: 1.4 }}>
                              {t.description}
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={() => setExpandedTaskId(isExpanded ? null : t.id)}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--text-muted)',
                            cursor: 'pointer',
                            padding: '0.2rem'
                          }}
                        >
                          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                      </div>

                      {/* Expandable Guide */}
                      {isExpanded && (
                        <div style={{ marginTop: '0.85rem', paddingTop: '0.85rem', borderTop: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.8rem' }}>
                          {t.why && (
                            <div>
                              <strong style={{ color: 'var(--primary)' }}>Why you need it:</strong> {t.why}
                            </div>
                          )}
                          {t.how && (
                            <div>
                              <strong style={{ color: 'var(--text-primary)' }}>How to do it:</strong> {t.how}
                            </div>
                          )}
                          {t.expectedOutput && (
                            <div style={{ background: 'var(--bg-card)', padding: '0.4rem 0.6rem', borderRadius: 'var(--radius-sm)' }}>
                              <strong>Expected Output:</strong> {t.expectedOutput}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* QUICK TOOLS SECTION ("TOOLS YOU NEED TODAY") */}
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.25rem 1.5rem',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div style={{ fontSize: '0.725rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
              RELEVANT TOOL SHORTCUTS
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: '0 0 1rem 0', color: 'var(--text-primary)' }}>
              TOOLS YOU NEED TODAY (DAY {selectedDayView})
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '0.85rem' }}>
              {(currentDayGuide?.tools || []).map((t) => (
                <div
                  key={t.name}
                  style={{
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.85rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                      {t.name}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.35 }}>
                      {t.purpose}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.75rem' }}>
                    <button
                      className="btn-secondary"
                      onClick={() => setSelectedToolForGuide(t)}
                      style={{ fontSize: '0.725rem', padding: '0.3rem 0.5rem', flex: 1, justifyContent: 'center' }}
                    >
                      Guide
                    </button>
                    <a
                      href={t.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ fontSize: '0.725rem', padding: '0.3rem 0.6rem', textDecoration: 'none', fontWeight: 700, gap: '0.2rem', justifyContent: 'center' }}
                    >
                      Open ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: PROJECT JOURNAL (Autosaving notes) */}
        <div>
          <ProjectNotes
            teamId={activeTeam.teamId}
            currentDay={selectedDayView}
            isMobileView={isMobile}
          />
        </div>

      </div>

      {/* MODALS */}
      {showUploadModal && (
        <ScreenshotUploadModal
          teamId={activeTeam.teamId}
          projectId={activeProject.projectCode}
          defaultDay={selectedDayView}
          onUploadComplete={(scr: ScreenshotMetadata) => setTeamScreenshots(prev => [...prev, scr])}
          onClose={() => setShowUploadModal(false)}
        />
      )}

      {selectedToolForGuide && (
        <ToolGuideModal
          tool={selectedToolForGuide}
          onClose={() => setSelectedToolForGuide(null)}
        />
      )}
    </div>
  );
};
