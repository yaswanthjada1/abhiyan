import React, { useState, useEffect, useRef } from 'react';
import { FileText, Save, CheckCircle2, Loader2, Sparkles } from 'lucide-react';
import { saveTeamNotes, subscribeToTeamNotes } from '../firebase/services';

interface ProjectNotesProps {
  teamId: string;
  currentDay?: number;
  isMobileView?: boolean;
}

export const ProjectNotes: React.FC<ProjectNotesProps> = ({
  teamId,
  currentDay = 1,
  isMobileView = false,
}) => {
  const [activeTab, setActiveTab] = useState<string>(`day${currentDay}`);
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [currentText, setCurrentText] = useState<string>('');
  const [saveStatus, setSaveStatus] = useState<'idle' | 'typing' | 'saving' | 'saved'>('idle');
  const [isExpanded, setIsExpanded] = useState<boolean>(!isMobileView);

  const debounceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const initialFetchDone = useRef<boolean>(false);

  // Subscribe to real-time notes updates from Firestore
  useEffect(() => {
    if (!teamId) return;

    const unsubscribe = subscribeToTeamNotes(teamId, (fetchedNotes) => {
      setNotes(fetchedNotes);
      if (!initialFetchDone.current) {
        initialFetchDone.current = true;
        setCurrentText(fetchedNotes[activeTab] || '');
      }
    });

    return () => unsubscribe();
  }, [teamId]);

  // Sync current text when switching tabs
  useEffect(() => {
    setCurrentText(notes[activeTab] || '');
    setSaveStatus('idle');
  }, [activeTab]);

  // Handle note text change with ~1 second debounced autosave
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setCurrentText(val);
    setSaveStatus('typing');

    // Update local state copy
    setNotes((prev) => ({ ...prev, [activeTab]: val }));

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    debounceTimerRef.current = setTimeout(async () => {
      setSaveStatus('saving');
      await saveTeamNotes(teamId, activeTab, val);
      setSaveStatus('saved');
      setTimeout(() => {
        setSaveStatus((prev) => (prev === 'saved' ? 'idle' : prev));
      }, 2000);
    }, 1000);
  };

  const dayTabs = [
    { key: 'day1', label: 'Day 1' },
    { key: 'day2', label: 'Day 2' },
    { key: 'day3', label: 'Day 3' },
    { key: 'day4', label: 'Day 4' },
    { key: 'day5', label: 'Day 5' },
    { key: 'general', label: 'General' },
  ];

  return (
    <div
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-md)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: isMobileView ? 'auto' : '100%',
        maxHeight: isMobileView ? 'none' : 'calc(100vh - 120px)',
        position: isMobileView ? 'relative' : 'sticky',
        top: isMobileView ? '0' : '90px',
      }}
    >
      {/* Header */}
      <div
        onClick={() => isMobileView && setIsExpanded(!isExpanded)}
        style={{
          padding: '0.85rem 1.15rem',
          background: 'var(--bg-subtle)',
          borderBottom: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: isMobileView ? 'pointer' : 'default',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <FileText size={18} color="var(--primary)" />
          <h3 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 700 }}>
            Project Journal & Notes
          </h3>
        </div>

        {/* Autosave Status Indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem' }}>
          {saveStatus === 'typing' && (
            <span style={{ color: 'var(--text-muted)' }}>Typing...</span>
          )}
          {saveStatus === 'saving' && (
            <span style={{ color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
              <Loader2 size={12} className="spin" /> Saving...
            </span>
          )}
          {saveStatus === 'saved' && (
            <span style={{ color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 600 }}>
              <CheckCircle2 size={13} /> Saved ✓
            </span>
          )}
          {saveStatus === 'idle' && (
            <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>Autosaves</span>
          )}
          {isMobileView && (
            <span style={{ marginLeft: '0.5rem', fontWeight: 600, color: 'var(--primary)' }}>
              {isExpanded ? '▲ Close' : '▼ Open Notes'}
            </span>
          )}
        </div>
      </div>

      {(!isMobileView || isExpanded) && (
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '1rem', gap: '0.85rem' }}>
          {/* Day / General Tabs */}
          <div
            style={{
              display: 'flex',
              gap: '0.3rem',
              overflowX: 'auto',
              paddingBottom: '0.25rem',
              borderBottom: '1px solid var(--border-color)',
            }}
          >
            {dayTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                style={{
                  padding: '0.35rem 0.65rem',
                  fontSize: '0.75rem',
                  fontWeight: activeTab === tab.key ? 700 : 500,
                  borderRadius: 'var(--radius-sm)',
                  border: 'none',
                  background: activeTab === tab.key ? 'var(--primary)' : 'transparent',
                  color: activeTab === tab.key ? '#ffffff' : 'var(--text-color)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.15s ease',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Sparkles size={12} color="var(--primary)" />
            <span>
              {activeTab === 'general'
                ? 'Document overall ideas, architecture, and team observations.'
                : `Notes for ${activeTab.toUpperCase().replace('DAY', 'Day ')} — ideas, bugs, math observations & viva notes.`}
            </span>
          </div>

          {/* Note Editor Area */}
          <textarea
            value={currentText}
            onChange={handleTextChange}
            placeholder={`Write team notes for ${activeTab.toUpperCase().replace('DAY', 'Day ')} here...\n\n- Ideas & decisions\n- Problems encountered & AI fixes\n- Important math observations\n- Viva preparation points`}
            style={{
              width: '100%',
              flex: 1,
              minHeight: isMobileView ? '180px' : '280px',
              padding: '0.85rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-subtle)',
              color: 'var(--text-color)',
              fontFamily: 'inherit',
              fontSize: '0.85rem',
              lineHeight: '1.5',
              resize: 'vertical',
              outline: 'none',
            }}
          />
        </div>
      )}
    </div>
  );
};
