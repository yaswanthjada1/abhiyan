import React, { useState, useEffect } from 'react';
import { useProjectContext } from '../context/ProjectContext';
import { Project, TeamDocument } from '../types/project';
import {
  BookOpen,
  FolderKanban,
  Users,
  Grid,
  TrendingUp,
  Camera,
  Settings,
  Search,
  Lock,
  X,
  Eye,
  LogOut,
  HelpCircle,
  ShieldCheck
} from 'lucide-react';

export const AdminPanelPage: React.FC = () => {
  const {
    projects,
    teamCounts,
    adminUser,
    setActiveTab,
    adminTeams,
    loadAdminTeams,
    logoutAdmin
  } = useProjectContext();

  const [currentSection, setCurrentSection] = useState<
    'overview' | 'projects' | 'teams' | 'selections' | 'progress' | 'screenshots' | 'guide' | 'settings'
  >('overview');

  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [screenshotDayFilter, setScreenshotDayFilter] = useState<number | 'All'>('All');

  // Selected Detail Drawers / Modals
  const [viewingProject, setViewingProject] = useState<Project | null>(null);
  const [viewingTeam, setViewingTeam] = useState<TeamDocument | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    if (adminUser) {
      loadAdminTeams();
    }
  }, [adminUser]);

  // Protected Route Guard
  if (!adminUser) {
    return (
      <div style={{ maxWidth: '440px', margin: '4rem auto', textAlign: 'center' }}>
        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--danger-bg)', color: 'var(--danger)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.85rem' }}>
            <Lock size={20} />
          </div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.25rem' }}>Administrator Access Required</h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
            Please sign in with administrator credentials to access the management portal.
          </p>
          <button className="btn-primary" onClick={() => setActiveTab('admin-login')}>
            Go to Sign In
          </button>
        </div>
      </div>
    );
  }

  // Calculate Statistics
  const totalProjects = projects.length; // 50
  const activeTeamsCount = adminTeams.length;
  const activeProjectsCount = Object.values(teamCounts).filter(c => c > 0).length;
  const completedTeamsCount = adminTeams.filter(t => (t.progress || 0) >= 100).length;

  // Filtered Projects List
  const filteredProjects = projects.filter(p => {
    if (categoryFilter !== 'All' && p.category !== categoryFilter) return false;
    const count = teamCounts[p.projectCode] || 0;
    if (statusFilter === 'Available' && count >= 3) return false;
    if (statusFilter === 'Full' && count < 3) return false;

    if (searchQuery) {
      const q = searchQuery.toLowerCase().trim();
      return (
        p.projectCode.toLowerCase().includes(q) ||
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.mathUsed.some(m => m.toLowerCase().includes(q))
      );
    }
    return true;
  });

  // Filtered Teams List
  const filteredTeams = adminTeams.filter(t => {
    if (searchQuery) {
      const q = searchQuery.toLowerCase().trim();
      return (
        t.teamName.toLowerCase().includes(q) ||
        t.projectId.toLowerCase().includes(q) ||
        t.leader.name.toLowerCase().includes(q) ||
        t.referenceId.toLowerCase().includes(q)
      );
    }
    return true;
  });

  // Collect All Screenshots Across Teams
  const allScreenshotsList: Array<{
    teamName: string;
    projectId: string;
    day: number;
    caption: string;
    downloadUrl: string;
    uploadedAt: string;
  }> = [];

  adminTeams.forEach(team => {
    // If team has custom uploaded screenshots or sample screenshots
    if (team.screenshots && team.screenshots.length > 0) {
      team.screenshots.forEach(s => {
        allScreenshotsList.push({
          teamName: team.teamName,
          projectId: team.projectId,
          day: s.day,
          caption: s.caption,
          downloadUrl: s.downloadUrl,
          uploadedAt: s.uploadedAt
        });
      });
    }
  });

  const filteredScreenshots = allScreenshotsList.filter(s => {
    if (screenshotDayFilter !== 'All' && s.day !== Number(screenshotDayFilter)) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase().trim();
      return (
        s.teamName.toLowerCase().includes(q) ||
        s.projectId.toLowerCase().includes(q) ||
        s.caption.toLowerCase().includes(q)
      );
    }
    return true;
  });

  // Sample Recent Activity Feed
  const recentActivities = [
    { text: 'Team Apex selected Project A1 (Hospital Ward Staffing Optimizer)', time: '12 minutes ago', badge: 'Selection' },
    { text: 'Team Matrix uploaded Day 4 progress screenshot', time: '34 minutes ago', badge: 'Screenshot' },
    { text: 'Team Vector completed Day 6 tasks', time: '1 hour ago', badge: 'Task Complete' },
    { text: 'Team Cipher selected Project F1 (Hill Cipher Encryption)', time: '2 hours ago', badge: 'Selection' },
    { text: 'Team Alpha reached 80% project completion', time: '3 hours ago', badge: 'Milestone' }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', minHeight: '80vh' }}>
      {/* 1. TOP ADMIN HEADER */}
      <div
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
          padding: '1rem 1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          boxShadow: 'var(--shadow-sm)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--primary)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '1rem'
            }}
          >
            PH
          </div>
          <div>
            <div style={{ fontSize: '0.725rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              PROJECT HUB
            </div>
            <h1 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.1 }}>
              Administration
            </h1>
          </div>
        </div>

        {/* Search & Administrator Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'var(--bg-subtle)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-md)',
              padding: '0.4rem 0.75rem',
              width: '220px'
            }}
          >
            <Search size={15} color="var(--text-muted)" />
            <input
              type="text"
              placeholder="Search administration..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{ border: 'none', outline: 'none', background: 'transparent', fontSize: '0.825rem', width: '100%' }}
            />
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.35rem 0.75rem',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-subtle)',
              border: '1px solid var(--border-color)'
            }}
          >
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShieldCheck size={16} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.1 }}>
                Administrator
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                {adminUser.email}
              </div>
            </div>
          </div>

          <button
            className="btn-secondary"
            onClick={logoutAdmin}
            style={{ fontSize: '0.8rem', padding: '0.4rem 0.75rem' }}
            title="Sign out of administration"
          >
            <LogOut size={14} /> Sign out
          </button>
        </div>
      </div>

      {/* 2. NAVIGATION TABS BAR */}
      <div className="tabs-container" style={{ marginBottom: '0.5rem', background: 'var(--bg-card)', padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
        <button
          className={`tab-button ${currentSection === 'overview' ? 'active' : ''}`}
          onClick={() => setCurrentSection('overview')}
        >
          <FolderKanban size={15} /> Overview
        </button>
        <button
          className={`tab-button ${currentSection === 'projects' ? 'active' : ''}`}
          onClick={() => setCurrentSection('projects')}
        >
          <BookOpen size={15} /> Projects ({projects.length})
        </button>
        <button
          className={`tab-button ${currentSection === 'teams' ? 'active' : ''}`}
          onClick={() => setCurrentSection('teams')}
        >
          <Users size={15} /> Teams ({adminTeams.length})
        </button>
        <button
          className={`tab-button ${currentSection === 'selections' ? 'active' : ''}`}
          onClick={() => setCurrentSection('selections')}
        >
          <Grid size={15} /> Selections
        </button>
        <button
          className={`tab-button ${currentSection === 'progress' ? 'active' : ''}`}
          onClick={() => setCurrentSection('progress')}
        >
          <TrendingUp size={15} /> Progress
        </button>
        <button
          className={`tab-button ${currentSection === 'screenshots' ? 'active' : ''}`}
          onClick={() => setCurrentSection('screenshots')}
        >
          <Camera size={15} /> Screenshots
        </button>
        <button
          className={`tab-button ${currentSection === 'guide' ? 'active' : ''}`}
          onClick={() => setCurrentSection('guide')}
        >
          <HelpCircle size={15} /> System Guide
        </button>
        <button
          className={`tab-button ${currentSection === 'settings' ? 'active' : ''}`}
          onClick={() => setCurrentSection('settings')}
        >
          <Settings size={15} /> Settings
        </button>
      </div>

      {/* SECTION 1: OVERVIEW */}
      {currentSection === 'overview' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Overview</h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Monitor projects, teams, selections, and progress.
            </p>
          </div>

          {/* 4 Compact Statistic Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.15rem' }}>
              <span style={{ fontSize: '0.725rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                PROJECTS
              </span>
              <div style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                {totalProjects}
              </div>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.15rem' }}>
              <span style={{ fontSize: '0.725rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                TEAMS
              </span>
              <div style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--primary)', marginTop: '0.2rem' }}>
                {activeTeamsCount}
              </div>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.15rem' }}>
              <span style={{ fontSize: '0.725rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                ACTIVE PROJECTS
              </span>
              <div style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--warning)', marginTop: '0.2rem' }}>
                {activeProjectsCount}
              </div>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.15rem' }}>
              <span style={{ fontSize: '0.725rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                COMPLETED
              </span>
              <div style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--success)', marginTop: '0.2rem' }}>
                {completedTeamsCount}
              </div>
            </div>
          </div>

          {/* Project Availability Table */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
            <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>Project Availability</h3>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Showing 50 problem statements</span>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ background: 'var(--bg-subtle)', borderBottom: '1px solid var(--border-color)', textTransform: 'uppercase', fontSize: '0.725rem', color: 'var(--text-muted)' }}>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Code</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Project</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Category</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'center' }}>Teams</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'center' }}>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {projects.slice(0, 15).map(p => {
                    const count = teamCounts[p.projectCode] || 0;
                    const isFull = count >= 3;
                    return (
                      <tr key={p.projectCode} style={{ borderBottom: '1px solid var(--border-color)' }}>
                        <td style={{ padding: '0.65rem 1rem' }}>
                          <span className="badge-code">{p.projectCode}</span>
                        </td>
                        <td style={{ padding: '0.65rem 1rem', fontWeight: 600 }}>{p.title}</td>
                        <td style={{ padding: '0.65rem 1rem' }}>
                          <span className="badge badge-category">{p.category}</span>
                        </td>
                        <td style={{ padding: '0.65rem 1rem', textAlign: 'center', fontWeight: 700 }}>{count} / 3</td>
                        <td style={{ padding: '0.65rem 1rem', textAlign: 'center' }}>
                          <span className={`badge ${isFull ? 'badge-status-full' : count === 2 ? 'badge' : 'badge-status-available'}`} style={count === 2 ? { background: 'var(--warning-bg)', color: 'var(--warning)' } : {}}>
                            {isFull ? 'Full' : count === 2 ? 'Almost Full' : 'Available'}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div style={{ padding: '0.75rem 1.25rem', borderTop: '1px solid var(--border-color)', textAlign: 'center', background: 'var(--bg-subtle)' }}>
              <button className="btn-secondary" onClick={() => setCurrentSection('projects')} style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem' }}>
                View All 50 Projects
              </button>
            </div>
          </div>

          {/* Recent Activity Section */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem' }}>Recent Activity</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {recentActivities.map((act, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.65rem 0.85rem',
                    background: 'var(--bg-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.85rem'
                  }}
                >
                  <span style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{act.text}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span className="badge" style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}>
                      {act.badge}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{act.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SECTION 2: PROJECTS PAGE */}
      {currentSection === 'projects' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Projects</h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                Manage the 50 available mini projects.
              </p>
            </div>

            {/* Search & Category Filter */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '0.4rem 0.75rem', width: '240px' }}>
                <Search size={15} color="var(--text-muted)" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  style={{ border: 'none', outline: 'none', background: 'transparent', fontSize: '0.85rem', width: '100%' }}
                />
              </div>

              <select
                value={categoryFilter}
                onChange={e => setCategoryFilter(e.target.value)}
                style={{ padding: '0.4rem 0.65rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', background: 'var(--bg-card)', fontSize: '0.85rem' }}
              >
                <option value="All">All Categories</option>
                <option value="Rank & Linear Systems">Rank & Linear Systems</option>
                <option value="Eigenvalues & Eigenvectors">Eigenvalues & Eigenvectors</option>
                <option value="Cayley-Hamilton & Diagonalization">Cayley-Hamilton & Diagonalization</option>
                <option value="Quadratic Forms">Quadratic Forms</option>
                <option value="Singular Value Decomposition">Singular Value Decomposition</option>
                <option value="Mixed / Multi-Topic">Mixed / Multi-Topic</option>
              </select>

              <select
                value={statusFilter}
                onChange={e => setStatusFilter(e.target.value)}
                style={{ padding: '0.4rem 0.65rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', background: 'var(--bg-card)', fontSize: '0.85rem' }}
              >
                <option value="All">All Statuses</option>
                <option value="Available">Available</option>
                <option value="Full">Full</option>
              </select>
            </div>
          </div>

          {/* Projects Table */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ background: 'var(--bg-subtle)', borderBottom: '1px solid var(--border-color)', textTransform: 'uppercase', fontSize: '0.725rem', color: 'var(--text-muted)' }}>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Code</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Project</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Category</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'center' }}>Teams</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'center' }}>Availability</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredProjects.length === 0 ? (
                    <tr>
                      <td colSpan={6} style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                        No matching projects found.
                      </td>
                    </tr>
                  ) : (
                    filteredProjects.map(p => {
                      const count = teamCounts[p.projectCode] || 0;
                      const isFull = count >= 3;
                      return (
                        <tr key={p.projectCode} style={{ borderBottom: '1px solid var(--border-color)' }}>
                          <td style={{ padding: '0.65rem 1rem' }}>
                            <span className="badge-code">{p.projectCode}</span>
                          </td>
                          <td style={{ padding: '0.65rem 1rem', fontWeight: 600 }}>{p.title}</td>
                          <td style={{ padding: '0.65rem 1rem' }}>
                            <span className="badge badge-category">{p.category}</span>
                          </td>
                          <td style={{ padding: '0.65rem 1rem', textAlign: 'center', fontWeight: 700 }}>{count} / 3</td>
                          <td style={{ padding: '0.65rem 1rem', textAlign: 'center' }}>
                            <span className={`badge ${isFull ? 'badge-status-full' : 'badge-status-available'}`}>
                              {isFull ? 'Full' : 'Available'}
                            </span>
                          </td>
                          <td style={{ padding: '0.65rem 1rem', textAlign: 'right' }}>
                            <button
                              className="btn-secondary"
                              onClick={() => setViewingProject(p)}
                              style={{ fontSize: '0.75rem', padding: '0.25rem 0.55rem' }}
                            >
                              <Eye size={13} /> View
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 3: TEAMS PAGE */}
      {currentSection === 'teams' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Teams</h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              View registered teams and their project progress.
            </p>
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ background: 'var(--bg-subtle)', borderBottom: '1px solid var(--border-color)', textTransform: 'uppercase', fontSize: '0.725rem', color: 'var(--text-muted)' }}>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Team</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Project</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Leader</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'center' }}>Members</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'center' }}>Progress</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'center' }}>Status</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredTeams.length === 0 ? (
                    <tr>
                      <td colSpan={7} style={{ padding: '2.5rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                        No teams registered yet.
                      </td>
                    </tr>
                  ) : (
                    filteredTeams.map(t => {
                      const prog = t.progress || 0;
                      const isComplete = prog >= 100;
                      return (
                        <tr key={t.teamId} style={{ borderBottom: '1px solid var(--border-color)' }}>
                          <td style={{ padding: '0.65rem 1rem', fontWeight: 700 }}>{t.teamName}</td>
                          <td style={{ padding: '0.65rem 1rem' }}>
                            <span className="badge-code">{t.projectId}</span>
                          </td>
                          <td style={{ padding: '0.65rem 1rem' }}>{t.leader.name}</td>
                          <td style={{ padding: '0.65rem 1rem', textAlign: 'center' }}>{(t.members?.length || 0) + 1}</td>
                          <td style={{ padding: '0.65rem 1rem', textAlign: 'center', fontWeight: 700, color: 'var(--primary)' }}>
                            {prog}%
                          </td>
                          <td style={{ padding: '0.65rem 1rem', textAlign: 'center' }}>
                            <span className={`badge ${isComplete ? 'badge-status-available' : 'badge'}`} style={!isComplete ? { background: 'var(--primary-light)', color: 'var(--primary)' } : {}}>
                              {isComplete ? 'Completed' : 'In Progress'}
                            </span>
                          </td>
                          <td style={{ padding: '0.65rem 1rem', textAlign: 'right' }}>
                            <button
                              className="btn-secondary"
                              onClick={() => setViewingTeam(t)}
                              style={{ fontSize: '0.75rem', padding: '0.25rem 0.55rem' }}
                            >
                              <Eye size={13} /> View Team
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 4: SELECTIONS PAGE */}
      {currentSection === 'selections' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Project Selections</h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Monitor selection allocations and capacity availability.
            </p>
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ background: 'var(--bg-subtle)', borderBottom: '1px solid var(--border-color)', textTransform: 'uppercase', fontSize: '0.725rem', color: 'var(--text-muted)' }}>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Project</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Project Title</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'center' }}>Registered Teams</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'center' }}>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {projects.map(p => {
                    const count = teamCounts[p.projectCode] || 0;
                    const isFull = count >= 3;
                    return (
                      <tr key={p.projectCode} style={{ borderBottom: '1px solid var(--border-color)' }}>
                        <td style={{ padding: '0.65rem 1rem' }}>
                          <span className="badge-code">{p.projectCode}</span>
                        </td>
                        <td style={{ padding: '0.65rem 1rem', fontWeight: 600 }}>{p.title}</td>
                        <td style={{ padding: '0.65rem 1rem', textAlign: 'center', fontWeight: 700 }}>{count} / 3</td>
                        <td style={{ padding: '0.65rem 1rem', textAlign: 'center' }}>
                          <span className={`badge ${isFull ? 'badge-status-full' : 'badge-status-available'}`}>
                            {isFull ? 'Full' : `${3 - count} Available`}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 5: PROGRESS PAGE */}
      {currentSection === 'progress' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Progress Overview</h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Track real-time completion progress across registered project teams.
            </p>
          </div>

          {adminTeams.length === 0 ? (
            <div style={{ padding: '3rem 2rem', textAlign: 'center', background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>No recent activity.</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
              {adminTeams.map(t => (
                <div key={t.teamId} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span className="badge-code">{t.projectId}</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)' }}>{t.progress || 0}%</span>
                  </div>

                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.2rem' }}>{t.teamName}</h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                    Leader: {t.leader.name} • Current Day {t.currentDay || 1} / 10
                  </p>

                  <div className="progress-bar-container">
                    <div className="progress-bar-fill" style={{ width: `${t.progress || 0}%` }} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* SECTION 6: SCREENSHOTS PAGE */}
      {currentSection === 'screenshots' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Screenshots</h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                Browse uploaded proof of work screenshots.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <select
                value={screenshotDayFilter}
                onChange={e => setScreenshotDayFilter(e.target.value === 'All' ? 'All' : Number(e.target.value))}
                style={{ padding: '0.4rem 0.65rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', background: 'var(--bg-card)', fontSize: '0.85rem' }}
              >
                <option value="All">All Days</option>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(d => (
                  <option key={d} value={d}>
                    Day {d}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {filteredScreenshots.length === 0 ? (
            <div style={{ padding: '3rem 2rem', textAlign: 'center', background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>No screenshots have been uploaded yet.</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.25rem' }}>
              {filteredScreenshots.map((scr, idx) => (
                <div
                  key={idx}
                  onClick={() => setPreviewImage(scr.downloadUrl)}
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'border-color 0.15s ease'
                  }}
                >
                  <img src={scr.downloadUrl} alt={scr.caption} style={{ width: '100%', height: '140px', objectFit: 'cover' }} />
                  <div style={{ padding: '0.75rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                      <span className="badge-code">{scr.projectId}</span>
                      <span className="badge" style={{ background: 'var(--bg-subtle)' }}>Day {scr.day}</span>
                    </div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>{scr.teamName}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{scr.caption}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* SECTION 7: SYSTEM GUIDE */}
      {currentSection === 'guide' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>System & Operations Guide</h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Complete reference guide for college project management and administration.
            </p>
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.4rem' }}>
                1. Student Selection Workflow
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Students browse the 50 static problem statements directly on the portal. When a team selects a project, they enter their team name, leader details, and member roll numbers. The system generates a unique <strong>Project Reference ID</strong> (e.g. <code>MMH-A1-X7K92</code>).
              </p>
            </div>

            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.4rem' }}>
                2. Capacity Limit Enforcement (3 Teams / Project)
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Each project statement allows maximum 3 registered teams. When the 3rd team completes registration, the project status automatically becomes <strong>FULL</strong> and prevents any 4th team registration.
              </p>
            </div>

            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.4rem' }}>
                3. Team Progress & Workspace Access
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Students access their workspace via <strong>My Project</strong> by entering their Reference ID. They check off 10-day roadmap tasks and upload proof screenshots.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 8: SETTINGS */}
      {currentSection === 'settings' && (
        <div style={{ maxWidth: '550px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Settings</h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Manage administrator account preferences.
            </p>
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>Account</h3>

            <div style={{ fontSize: '0.875rem' }}>
              <div style={{ color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Administrator Email:</div>
              <strong style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>{adminUser.email}</strong>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
              <button className="btn-secondary" onClick={logoutAdmin} style={{ fontSize: '0.85rem' }}>
                <LogOut size={14} /> Sign out
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL / DRAWER: PROJECT VIEW */}
      {viewingProject && (
        <div className="modal-overlay" onClick={() => setViewingProject(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '650px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span className="badge-code">{viewingProject.projectCode}</span>
                <span className="badge badge-category">{viewingProject.category}</span>
              </div>
              <button className="btn-secondary" onClick={() => setViewingProject(null)} style={{ padding: '0.25rem 0.5rem' }}>
                <X size={16} />
              </button>
            </div>

            <h2 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem' }}>{viewingProject.title}</h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>{viewingProject.shortDescription}</p>

            <div style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}>
              <strong style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>PROBLEM STATEMENT:</strong>
              <p style={{ fontSize: '0.85rem', lineHeight: 1.5 }}>{viewingProject.problemStatement}</p>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <strong style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>MATHEMATICS USED:</strong>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {viewingProject.mathUsed.map((m, idx) => (
                  <span key={idx} className="badge badge-category">
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <strong style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>REAL-WORLD CONNECTION:</strong>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{viewingProject.realWorldConnection}</p>
            </div>

            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '0.85rem', marginTop: '1rem' }}>
              <strong style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>REGISTERED TEAMS ({teamCounts[viewingProject.projectCode] || 0} / 3):</strong>
              {adminTeams.filter(t => t.projectId === viewingProject.projectCode).length === 0 ? (
                <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>No teams registered for this project statement yet.</p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {adminTeams.filter(t => t.projectId === viewingProject.projectCode).map((t, idx) => (
                    <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-subtle)', padding: '0.4rem 0.65rem', borderRadius: 'var(--radius-sm)', fontSize: '0.825rem' }}>
                      <span style={{ fontWeight: 600 }}>{t.teamName} (Leader: {t.leader?.name})</span>
                      <span className="badge" style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}>{t.progress || 0}% Done</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* MODAL / DRAWER: TEAM VIEW */}
      {viewingTeam && (
        <div className="modal-overlay" onClick={() => setViewingTeam(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '550px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span className="badge-code">{viewingTeam.projectId}</span>
              <button className="btn-secondary" onClick={() => setViewingTeam(null)} style={{ padding: '0.25rem 0.5rem' }}>
                <X size={16} />
              </button>
            </div>

            <h2 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.25rem' }}>{viewingTeam.teamName}</h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--primary)', fontFamily: 'var(--font-mono)', marginBottom: '1rem' }}>
              Reference ID: {viewingTeam.referenceId}
            </p>

            <div style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}>
              <strong style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>TEAM LEADER:</strong>
              <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{viewingTeam.leader?.name || 'N/A'}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                Roll: {viewingTeam.leader?.rollNumber || 'N/A'} • Email: {viewingTeam.leader?.email || 'N/A'} • Phone: {viewingTeam.leader?.phone || 'N/A'}
              </div>
            </div>

            {viewingTeam.members && viewingTeam.members.length > 0 && (
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>MEMBERS:</strong>
                <ul style={{ paddingLeft: '1.1rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  {viewingTeam.members.map((m, idx) => (
                    <li key={idx}>
                      {m.name} (Roll: {m.rollNumber})
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div style={{ marginBottom: '1rem' }}>
              <strong style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>PROGRESS ({viewingTeam.progress || 0}%):</strong>
              <div className="progress-bar-container">
                <div className="progress-bar-fill" style={{ width: `${viewingTeam.progress || 0}%` }} />
              </div>
            </div>

            {viewingTeam.screenshots && viewingTeam.screenshots.length > 0 && (
              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '0.85rem' }}>
                <strong style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.5rem' }}>PROOF SCREENSHOTS:</strong>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '0.5rem' }}>
                  {viewingTeam.screenshots.map((scr, idx) => (
                    <img
                      key={idx}
                      src={scr.downloadUrl}
                      alt={scr.caption}
                      onClick={() => setPreviewImage(scr.downloadUrl)}
                      style={{ width: '100%', height: '70px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', cursor: 'pointer', border: '1px solid var(--border-color)' }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* LIGHTBOX PREVIEW MODAL */}
      {previewImage && (
        <div className="modal-overlay" onClick={() => setPreviewImage(null)}>
          <div style={{ maxWidth: '800px', width: '90%', position: 'relative' }} onClick={e => e.stopPropagation()}>
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
            <img src={previewImage} alt="Screenshot Preview" style={{ width: '100%', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)' }} />
          </div>
        </div>
      )}
    </div>
  );
};
