import React, { useState, useEffect } from 'react';
import { TeamDocument, Project } from '../types/project';
import { PROJECTS } from '../data/projects';
import { fetchPublicTeamsForSearch, fetchTeamNotes } from '../firebase/services';
import {
  Search,
  X,
  Eye,
  Users,
  Lock,
  Loader2
} from 'lucide-react';

export const SearchOtherTeamsComponent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [allTeams, setAllTeams] = useState<TeamDocument[]>([]);
  const [loadingTeams, setLoadingTeams] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  // Selected Team for Read-Only Modal
  const [selectedOtherTeam, setSelectedOtherTeam] = useState<TeamDocument | null>(null);
  const [selectedOtherProject, setSelectedOtherProject] = useState<Project | null>(null);
  const [, setSelectedTeamNotes] = useState<Record<string, string>>({});
  const [, setLoadingNotes] = useState(false);
  const [selectedDayTab, setSelectedDayTab] = useState<number>(1);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Lazy load teams list when user starts typing or focuses input
  const loadTeamsIfNeeded = async () => {
    if (hasLoaded || loadingTeams) return;
    setLoadingTeams(true);
    try {
      const teams = await fetchPublicTeamsForSearch();
      setAllTeams(teams);
      setHasLoaded(true);
    } catch (err) {
      console.warn('Error fetching teams for search:', err);
    } finally {
      setLoadingTeams(false);
    }
  };

  const trimmedQuery = searchQuery.trim();
  const isSearching = trimmedQuery.length >= 2;

  // Filter teams based on query (minimum 2 characters required)
  const filteredTeams = isSearching
    ? allTeams.filter(t => {
        const q = trimmedQuery.toLowerCase();
        const teamIdMatch = (t.teamId || '').toLowerCase().includes(q);
        const refIdMatch = (t.referenceId || '').toLowerCase().includes(q);
        const nameMatch = (t.teamName || '').toLowerCase().includes(q);
        const projCodeMatch = (t.projectId || '').toLowerCase().includes(q);

        const proj = PROJECTS.find(p => p.projectCode === t.projectId);
        const projTitleMatch = proj ? proj.title.toLowerCase().includes(q) : false;

        return teamIdMatch || refIdMatch || nameMatch || projCodeMatch || projTitleMatch;
      })
    : [];

  const MAX_RESULTS = 5;
  const displayedTeams = filteredTeams.slice(0, MAX_RESULTS);
  const hasMore = filteredTeams.length > MAX_RESULTS;

  const handleOpenTeamModal = async (team: TeamDocument) => {
    setSelectedOtherTeam(team);
    const proj = PROJECTS.find(p => p.projectCode === team.projectId) || PROJECTS[0];
    setSelectedOtherProject(proj);
    setSelectedDayTab(1);

    setLoadingNotes(true);
    try {
      const notes = await fetchTeamNotes(team.teamId);
      setSelectedTeamNotes(notes);
    } catch (e) {
      setSelectedTeamNotes({});
    } finally {
      setLoadingNotes(false);
    }
  };

  return (
    <div
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.25rem',
        marginBottom: '1.5rem',
        boxShadow: 'var(--shadow-sm)'
      }}
    >
      <div style={{ marginBottom: '1rem' }}>
        <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 0.25rem 0' }}>
          Search Other Teams
        </h2>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
          Explore registered ABHIYAN project teams and view their project progress.
        </p>
      </div>

      {/* SEARCH INPUT BAR */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'var(--bg-subtle)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-md)',
          padding: '0.5rem 0.85rem',
          width: '100%',
          maxWidth: '600px',
          boxSizing: 'border-box'
        }}
      >
        <Search size={16} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
        <input
          type="text"
          placeholder="Search team ID, team name or project..."
          value={searchQuery}
          onFocus={loadTeamsIfNeeded}
          onChange={e => {
            setSearchQuery(e.target.value);
            if (e.target.value.trim().length >= 2) {
              loadTeamsIfNeeded();
            }
          }}
          style={{
            border: 'none',
            outline: 'none',
            background: 'transparent',
            fontSize: '0.875rem',
            color: 'var(--text-primary)',
            width: '100%',
            minWidth: 0
          }}
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              padding: '0.2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            title="Clear search"
          >
            <X size={15} />
          </button>
        )}
      </div>

      {/* INLINE SEARCHING STATE */}
      {isSearching && loadingTeams && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.75rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          <Loader2 size={14} className="spin-animation" />
          <span>Searching...</span>
        </div>
      )}

      {/* NO RESULTS STATE (ONLY SHOWN IF SEARCH QUERY >= 2 CHARS) */}
      {isSearching && !loadingTeams && filteredTeams.length === 0 && (
        <div
          style={{
            marginTop: '1rem',
            padding: '1.25rem 1rem',
            textAlign: 'center',
            background: 'var(--bg-subtle)',
            borderRadius: 'var(--radius-md)',
            border: '1px dashed var(--border-color)',
            color: 'var(--text-muted)',
            fontSize: '0.85rem'
          }}
        >
          No teams found matching "{trimmedQuery}".
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
            Try searching by team ID, team name or project.
          </div>
        </div>
      )}

      {/* SEARCH RESULTS FEED (MAX 5 RESULTS) */}
      {isSearching && !loadingTeams && displayedTeams.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
          {displayedTeams.map(t => {
            const proj = PROJECTS.find(p => p.projectCode === t.projectId);
            const memberCount = (t.members?.length || 0) + 1;
            const progress = t.progress || 0;

            return (
              <div
                key={t.teamId}
                style={{
                  background: 'var(--bg-subtle)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem',
                  boxSizing: 'border-box'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
                      <span className="badge-code" style={{ fontSize: '0.75rem', fontWeight: 800 }}>
                        {t.referenceId || t.teamId}
                      </span>
                      <span className="badge-code" style={{ fontSize: '0.725rem', background: 'var(--primary-light)', color: 'var(--primary)' }}>
                        {t.projectId}
                      </span>
                    </div>
                    <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {t.teamName}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary)' }}>
                      Progress: {progress}%
                    </span>
                  </div>
                </div>

                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Project:</strong> {proj ? proj.title : t.projectId}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', paddingTop: '0.4rem', borderTop: '1px solid var(--border-color)' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    <Users size={13} style={{ display: 'inline', marginRight: '0.3rem' }} />
                    {memberCount} Members • Leader: <strong>{t.leader?.name || 'N/A'}</strong>
                  </div>

                  <button
                    className="btn-secondary"
                    onClick={() => handleOpenTeamModal(t)}
                    style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem', minHeight: '36px', gap: '0.3rem' }}
                  >
                    <Eye size={14} /> View Team
                  </button>
                </div>
              </div>
            );
          })}

          {hasMore && (
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '0.25rem' }}>
              More teams match your search. Enter a more specific team ID or name.
            </div>
          )}
        </div>
      )}

      {/* READ-ONLY TEAM VIEW MODAL */}
      {selectedOtherTeam && selectedOtherProject && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.65)',
            backdropFilter: 'blur(5px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1100,
            padding: '1rem',
            boxSizing: 'border-box'
          }}
          onClick={() => setSelectedOtherTeam(null)}
        >
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              maxWidth: '720px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '1.5rem',
              boxShadow: 'var(--shadow-lg)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              boxSizing: 'border-box'
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* MODAL HEADER */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <span className="badge-code" style={{ fontSize: '0.78rem' }}>{selectedOtherTeam.referenceId}</span>
                  <span style={{ fontSize: '0.725rem', fontWeight: 800, color: 'var(--warning)', background: 'var(--warning-bg)', padding: '0.15rem 0.5rem', borderRadius: '4px', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Lock size={12} /> Read-Only View
                  </span>
                </div>
                <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                  {selectedOtherTeam.teamName}
                </h2>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '0.2rem 0 0 0' }}>
                  {selectedOtherProject.projectCode} — {selectedOtherProject.title}
                </p>
              </div>

              <button
                onClick={() => setSelectedOtherTeam(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  padding: '0.35rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* TEAM SUMMARY METRICS */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.85rem' }}>
              <div style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '0.85rem' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 800 }}>OVERALL PROGRESS</div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary)', marginTop: '0.2rem' }}>
                  {selectedOtherTeam.progress || 0}%
                </div>
              </div>
              <div style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '0.85rem' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 800 }}>MEMBERS</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                  {(selectedOtherTeam.members?.length || 0) + 1} Student Members
                </div>
              </div>
              <div style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '0.85rem' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 800 }}>CURRENT DAY</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                  Day {selectedOtherTeam.currentDay || 1} of 5
                </div>
              </div>
            </div>

            {/* TEAM ROSTER */}
            <div style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1rem' }}>
              <h3 style={{ fontSize: '0.9rem', fontWeight: 800, marginBottom: '0.65rem', color: 'var(--text-primary)' }}>
                Team Members Roster
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.35rem 0.5rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                  <span>👑 <strong>{selectedOtherTeam.leader?.name}</strong> (Leader)</span>
                  <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>Roll: {selectedOtherTeam.leader?.rollNumber}</span>
                </div>
                {selectedOtherTeam.members?.map((m, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.35rem 0.5rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                    <span>👤 {m.name} (Member)</span>
                    <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>Roll: {m.rollNumber}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 5-DAY WORKFLOW PROGRESS (READ-ONLY) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <h3 style={{ fontSize: '0.9rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
                5-Day Workflow Progress (Read-Only)
              </h3>

              {/* Day Tabs */}
              <div style={{ display: 'flex', gap: '0.4rem', overflowX: 'auto', paddingBottom: '0.25rem' }}>
                {[1, 2, 3, 4, 5].map(dayNum => (
                  <button
                    key={dayNum}
                    onClick={() => setSelectedDayTab(dayNum)}
                    style={{
                      padding: '0.4rem 0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-color)',
                      background: selectedDayTab === dayNum ? 'var(--primary)' : 'var(--bg-subtle)',
                      color: selectedDayTab === dayNum ? 'white' : 'var(--text-primary)',
                      fontWeight: 700,
                      fontSize: '0.8rem',
                      cursor: 'pointer',
                      flexShrink: 0
                    }}
                  >
                    Day {dayNum}
                  </button>
                ))}
              </div>

              {/* Day Task Checklist (Disabled/Read-Only) */}
              {(() => {
                const guide = selectedOtherProject.projectGuide;
                const dayKey = `day${selectedDayTab}` as 'day1' | 'day2' | 'day3' | 'day4' | 'day5';
                const dayGuide = guide ? guide[dayKey] : null;
                const tasks = dayGuide?.tasks || [];
                const completedTasks = selectedOtherTeam.completedTasks || {};

                return (
                  <div style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {dayGuide?.title || `Day ${selectedDayTab} Tasks`}
                    </div>
                    {tasks.length === 0 ? (
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>No task details available.</div>
                    ) : (
                      tasks.map(t => {
                        const isDone = completedTasks[t.id];
                        return (
                          <div
                            key={t.id}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.6rem',
                              padding: '0.5rem 0.75rem',
                              background: 'var(--bg-card)',
                              borderRadius: 'var(--radius-sm)',
                              border: '1px solid var(--border-color)',
                              fontSize: '0.825rem'
                            }}
                          >
                            <input
                              type="checkbox"
                              checked={!!isDone}
                              disabled
                              style={{ cursor: 'not-allowed' }}
                            />
                            <span style={{ textDecoration: isDone ? 'line-through' : 'none', color: isDone ? 'var(--text-muted)' : 'var(--text-primary)' }}>
                              {t.title}
                            </span>
                          </div>
                        );
                      })
                    )}
                  </div>
                );
              })()}
            </div>

            {/* PUBLIC SCREENSHOTS EVIDENCE (READ-ONLY) */}
            {selectedOtherTeam.screenshots && selectedOtherTeam.screenshots.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <h3 style={{ fontSize: '0.9rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
                  Team Progress Evidence
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '0.65rem' }}>
                  {selectedOtherTeam.screenshots.map((scr, idx) => (
                    <div key={idx} style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', padding: '0.4rem' }}>
                      <img
                        src={scr.downloadUrl}
                        alt={scr.caption}
                        onClick={() => setPreviewImage(scr.downloadUrl)}
                        style={{ width: '100%', height: '80px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', cursor: 'pointer' }}
                      />
                      <div style={{ fontSize: '0.725rem', color: 'var(--text-secondary)', marginTop: '0.25rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        Day {scr.day}: {scr.caption}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PRIVACY WARNING FOOTER */}
            <div style={{ paddingTop: '0.85rem', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              <span>🔒 Read-only view. Personal Space, photos, & notes remain private to team owners.</span>
              <button
                className="btn-secondary"
                onClick={() => setSelectedOtherTeam(null)}
                style={{ fontSize: '0.8rem', padding: '0.35rem 0.85rem', minHeight: '36px' }}
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}

      {/* LIGHTBOX SCREENSHOT PREVIEW MODAL */}
      {previewImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1200,
            padding: '1rem'
          }}
          onClick={() => setPreviewImage(null)}
        >
          <div style={{ maxWidth: '800px', width: '100%', position: 'relative' }} onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setPreviewImage(null)}
              style={{
                position: 'absolute',
                top: '-2.5rem',
                right: 0,
                background: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={18} />
            </button>
            <img src={previewImage} alt="Evidence Preview" style={{ width: '100%', borderRadius: 'var(--radius-md)' }} />
          </div>
        </div>
      )}
    </div>
  );
};
