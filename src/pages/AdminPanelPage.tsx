import React, { useState, useEffect } from 'react';
import { useProjectContext } from '../context/ProjectContext';
import { Project, TeamDocument } from '../types/project';
import { exportAdminDataToExcel } from '../utils/excelExporter';
import { fetchTeamNotes } from '../firebase/services';
import { MySpaceComponent } from '../components/MySpaceComponent';
import { fetchAllPeopleForAdmin, fetchAllPersonalPhotosForAdmin, AdminPersonOverview } from '../services/personalSpaceService';
import { PersonIdentity, PersonalPhoto } from '../types/personalSpace';
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
  ShieldCheck,
  Download,
  Loader2,
  FileText,
  User
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
    'overview' | 'projects' | 'teams' | 'selections' | 'progress' | 'screenshots' | 'people' | 'guide' | 'settings'
  >('overview');

  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [screenshotDayFilter, setScreenshotDayFilter] = useState<number | 'All'>('All');
  const [isExporting, setIsExporting] = useState(false);

  // Admin People State
  const [adminPeople, setAdminPeople] = useState<AdminPersonOverview[]>([]);
  const [loadingPeople, setLoadingPeople] = useState(false);
  const [inspectedPerson, setInspectedPerson] = useState<PersonIdentity | null>(null);

  // Selected Detail Drawers / Modals
  const [viewingProject, setViewingProject] = useState<Project | null>(null);
  const [viewingTeam, setViewingTeam] = useState<TeamDocument | null>(null);
  const [teamNotesData, setTeamNotesData] = useState<Record<string, string>>({});
  const [loadingNotes, setLoadingNotes] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    if (adminUser) {
      loadAdminTeams();
    }
  }, [adminUser]);

  useEffect(() => {
    if (adminUser && currentSection === 'people') {
      setLoadingPeople(true);
      fetchAllPeopleForAdmin().then((ppl) => {
        setAdminPeople(ppl);
        setLoadingPeople(false);
      });
    }
  }, [adminUser, currentSection]);

  const handleExportData = async () => {
    try {
      setIsExporting(true);
      await exportAdminDataToExcel(projects, adminTeams, teamCounts);
    } catch (err) {
      console.error('Export failed:', err);
    } finally {
      setIsExporting(false);
    }
  };

  const handleOpenTeamDetail = async (team: TeamDocument) => {
    setViewingTeam(team);
    setLoadingNotes(true);
    const notes = await fetchTeamNotes(team.teamId);
    setTeamNotesData(notes);
    setLoadingNotes(false);
  };

  // Protected Route Guard
  if (!adminUser) {
    return (
      <div style={{ maxWidth: '440px', width: '100%', margin: '4rem auto', textAlign: 'center' }}>
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
          <button className="btn-primary" onClick={() => setActiveTab('admin-login')} style={{ minHeight: '44px' }}>
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
        t.leader?.name.toLowerCase().includes(q) ||
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
    { text: 'Team Vector completed Day 5 demo tasks', time: '1 hour ago', badge: 'Task Complete' },
    { text: 'Team Cipher selected Project F1 (Hill Cipher Encryption)', time: '2 hours ago', badge: 'Selection' },
    { text: 'Team Alpha reached 100% project completion', time: '3 hours ago', badge: 'Milestone' }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', minHeight: '80vh', width: '100%' }}>
      {/* 1. TOP ADMIN HEADER */}
      <div
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
          padding: '1rem 1.25rem',
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
            AB
          </div>
          <div>
            <div style={{ fontSize: '0.725rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              ABHIYAN
            </div>
            <h1 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.1 }}>
              Administration
            </h1>
          </div>
        </div>

        {/* Search & Administrator Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', width: '100%', maxWidth: '600px', justifyContent: 'flex-end' }}>
          <button
            onClick={handleExportData}
            disabled={isExporting}
            className="btn-primary"
            style={{
              fontSize: '0.825rem',
              padding: '0.4rem 0.85rem',
              minHeight: '38px',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            {isExporting ? (
              <>
                <Loader2 size={15} className="spin" /> Preparing Export...
              </>
            ) : (
              <>
                <Download size={15} /> Export Data (.xlsx)
              </>
            )}
          </button>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'var(--bg-subtle)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-md)',
              padding: '0.4rem 0.75rem',
              width: '100%',
              maxWidth: '220px',
              minWidth: 0
            }}
          >
            <Search size={15} color="var(--text-muted)" style={{ flexShrink: 0 }} />
            <input
              type="text"
              placeholder="Search administration..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{ border: 'none', outline: 'none', background: 'transparent', fontSize: '0.825rem', width: '100%', minWidth: 0 }}
            />
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 0.65rem',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-subtle)',
              border: '1px solid var(--border-color)'
            }}
          >
            <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShieldCheck size={14} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.1 }}>
                Administrator
              </div>
            </div>
          </div>

          <button
            className="btn-secondary"
            onClick={logoutAdmin}
            style={{ fontSize: '0.8rem', padding: '0.35rem 0.65rem', minHeight: '36px' }}
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
          className={`tab-button ${currentSection === 'people' ? 'active' : ''}`}
          onClick={() => setCurrentSection('people')}
        >
          <User size={15} /> People & Personal Space
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Overview</h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Monitor projects, teams, selections, and progress.
            </p>
          </div>

          {/* 4 Compact Statistic Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
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

          {/* Project Availability Container (Desktop Table + Mobile Cards) */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
            <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>Project Availability</h3>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Showing 50 problem statements</span>
            </div>

            {/* Desktop Table View */}
            <div className="desktop-table-view" style={{ overflowX: 'auto' }}>
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

            {/* Mobile Cards View */}
            <div className="mobile-card-view" style={{ padding: '0.85rem' }}>
              {projects.slice(0, 10).map(p => {
                const count = teamCounts[p.projectCode] || 0;
                const isFull = count >= 3;
                return (
                  <div key={p.projectCode} style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', padding: '0.85rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                      <span className="badge-code">{p.projectCode}</span>
                      <span className={`badge ${isFull ? 'badge-status-full' : 'badge-status-available'}`}>
                        {isFull ? 'Full' : `${count}/3 Teams`}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.2rem' }}>{p.title}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{p.category}</div>
                  </div>
                );
              })}
            </div>

            <div style={{ padding: '0.75rem 1.25rem', borderTop: '1px solid var(--border-color)', textAlign: 'center', background: 'var(--bg-subtle)' }}>
              <button className="btn-secondary" onClick={() => setCurrentSection('projects')} style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem', minHeight: '44px', width: '100%', justifyContent: 'center' }}>
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
                    flexDirection: 'column',
                    gap: '0.35rem',
                    padding: '0.65rem 0.85rem',
                    background: 'var(--bg-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.85rem'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="badge" style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}>
                      {act.badge}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{act.time}</span>
                  </div>
                  <span style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{act.text}</span>
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
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Projects Catalog</h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                Manage the 50 available mini projects.
              </p>
            </div>

            {/* Search & Category Filter */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', width: '100%', maxWidth: '500px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '0.4rem 0.75rem', flex: 1, minWidth: '180px' }}>
                <Search size={15} color="var(--text-muted)" style={{ flexShrink: 0 }} />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  style={{ border: 'none', outline: 'none', background: 'transparent', fontSize: '0.85rem', width: '100%', minWidth: 0 }}
                />
              </div>

              <select
                value={categoryFilter}
                onChange={e => setCategoryFilter(e.target.value)}
                style={{ padding: '0.4rem 0.65rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', background: 'var(--bg-card)', fontSize: '0.85rem', minHeight: '44px' }}
              >
                <option value="All">All Categories</option>
                <option value="Rank & Linear Systems">Rank & Linear Systems</option>
                <option value="Eigenvalues & Eigenvectors">Eigenvalues & Eigenvectors</option>
                <option value="Cayley-Hamilton & Diagonalization">Cayley-Hamilton & Diagonalization</option>
                <option value="Quadratic Forms">Quadratic Forms</option>
                <option value="Singular Value Decomposition">Singular Value Decomposition</option>
                <option value="Mixed / Multi-Topic">Mixed / Multi-Topic</option>
              </select>
            </div>
          </div>

          {/* Projects Container (Desktop Table + Mobile Cards) */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
            {/* Desktop Table */}
            <div className="desktop-table-view" style={{ overflowX: 'auto' }}>
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
                  {filteredProjects.map(p => {
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
                            style={{ fontSize: '0.75rem', padding: '0.25rem 0.55rem', minHeight: '36px' }}
                          >
                            <Eye size={13} /> View
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile Card Stack */}
            <div className="mobile-card-view" style={{ padding: '0.85rem' }}>
              {filteredProjects.map(p => {
                const count = teamCounts[p.projectCode] || 0;
                const isFull = count >= 3;
                return (
                  <div key={p.projectCode} style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', padding: '0.85rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                      <span className="badge-code">{p.projectCode}</span>
                      <span className={`badge ${isFull ? 'badge-status-full' : 'badge-status-available'}`}>
                        {isFull ? 'Full' : `${count}/3 Teams`}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.25rem' }}>{p.title}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '0.65rem' }}>{p.category}</div>
                    <button
                      className="btn-secondary"
                      onClick={() => setViewingProject(p)}
                      style={{ width: '100%', justifyContent: 'center', minHeight: '44px' }}
                    >
                      <Eye size={14} /> View Details
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* SECTION 3: TEAMS PAGE */}
      {currentSection === 'teams' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Registered Teams</h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              View registered teams and their project progress.
            </p>
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
            {/* Desktop Table */}
            <div className="desktop-table-view" style={{ overflowX: 'auto' }}>
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
                          <td style={{ padding: '0.65rem 1rem' }}>{t.leader?.name || 'N/A'}</td>
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
                              onClick={() => handleOpenTeamDetail(t)}
                              style={{ fontSize: '0.75rem', padding: '0.25rem 0.55rem', minHeight: '36px' }}
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

            {/* Mobile Card View */}
            <div className="mobile-card-view" style={{ padding: '0.85rem' }}>
              {filteredTeams.length === 0 ? (
                <p style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '1rem' }}>No teams registered yet.</p>
              ) : (
                filteredTeams.map(t => (
                  <div key={t.teamId} style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', padding: '0.85rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                      <span className="badge-code">{t.projectId}</span>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)' }}>{t.progress || 0}%</span>
                    </div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 800, marginBottom: '0.25rem' }}>{t.teamName}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                      Leader: {t.leader?.name || 'N/A'} • {(t.members?.length || 0) + 1} Members
                    </div>
                    <button
                      className="btn-secondary"
                      onClick={() => handleOpenTeamDetail(t)}
                      style={{ width: '100%', justifyContent: 'center', minHeight: '44px' }}
                    >
                      <Eye size={14} /> View Team Details
                    </button>
                  </div>
                ))
              )}
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
            <div className="desktop-table-view" style={{ overflowX: 'auto' }}>
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

            <div className="mobile-card-view" style={{ padding: '0.85rem' }}>
              {projects.map(p => {
                const count = teamCounts[p.projectCode] || 0;
                const isFull = count >= 3;
                return (
                  <div key={p.projectCode} style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', padding: '0.85rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                      <span className="badge-code">{p.projectCode}</span>
                      <span className={`badge ${isFull ? 'badge-status-full' : 'badge-status-available'}`}>
                        {isFull ? 'Full' : `${3 - count} Available`}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 700 }}>{p.title}</div>
                  </div>
                );
              })}
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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {adminTeams.map(t => (
                <div key={t.teamId} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span className="badge-code">{t.projectId}</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)' }}>{t.progress || 0}%</span>
                  </div>

                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.2rem' }}>{t.teamName}</h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                    Leader: {t.leader?.name || 'N/A'} • Current Day {t.currentDay || 1} / 5
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

            <div style={{ display: 'flex', gap: '0.5rem', width: '100%', maxWidth: '240px' }}>
              <select
                value={screenshotDayFilter}
                onChange={e => setScreenshotDayFilter(e.target.value === 'All' ? 'All' : Number(e.target.value))}
                style={{ padding: '0.4rem 0.65rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', background: 'var(--bg-card)', fontSize: '0.85rem', minHeight: '44px', width: '100%' }}
              >
                <option value="All">All 5 Days</option>
                <option value={1}>Day 1 — SETUP</option>
                <option value={2}>Day 2 — AI VIBE CODE</option>
                <option value={3}>Day 3 — CUSTOMISE</option>
                <option value={4}>Day 4 — DOCUMENT</option>
                <option value={5}>Day 5 — DEMO</option>
              </select>
            </div>
          </div>

          {filteredScreenshots.length === 0 ? (
            <div style={{ padding: '3rem 2rem', textAlign: 'center', background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>No screenshots have been uploaded yet.</p>
            </div>
          ) : (
            <div className="screenshots-grid">
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

      {/* SECTION: PEOPLE OVERVIEW */}
      {currentSection === 'people' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Registered People Overview</h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Inspect registered student identities and team member details across project teams.
            </p>
          </div>

          {inspectedPerson ? (
            <div>
              <button
                className="btn-secondary"
                onClick={() => setInspectedPerson(null)}
                style={{ marginBottom: '1rem', fontSize: '0.825rem' }}
              >
                ← Back to All People
              </button>
              <MySpaceComponent person={inspectedPerson} isAdmin={true} />
            </div>
          ) : (
            <div>
              {loadingPeople ? (
                <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                  <Loader2 size={24} className="spin" style={{ marginBottom: '0.5rem' }} />
                  <div>Loading registered people overview...</div>
                </div>
              ) : adminPeople.length === 0 ? (
                <div style={{ padding: '3rem', textAlign: 'center', background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                  <p style={{ color: 'var(--text-muted)' }}>No person identities registered yet.</p>
                </div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
                  {adminPeople
                    .filter(po => {
                      if (!searchQuery) return true;
                      const q = searchQuery.toLowerCase();
                      return po.person.name.toLowerCase().includes(q) ||
                             po.person.rollNumber.toLowerCase().includes(q) ||
                             po.person.personId.toLowerCase().includes(q) ||
                             po.person.referenceId.toLowerCase().includes(q);
                    })
                    .map(po => (
                      <div
                        key={po.person.personId}
                        style={{
                          background: 'var(--bg-card)',
                          border: '1px solid var(--border-color)',
                          borderRadius: 'var(--radius-md)',
                          padding: '1rem',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between'
                        }}
                      >
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}>
                              {po.person.personId}
                            </span>
                            <span style={{ fontSize: '0.68rem', background: 'var(--bg-subtle)', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>
                              {po.person.role}
                            </span>
                          </div>
                          <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                            {po.person.name}
                          </div>
                          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                            Roll: {po.person.rollNumber} • Ref: {po.person.referenceId}
                          </div>
                          <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                            <span>📝 Notes: <strong>{po.noteCount}</strong></span>
                          </div>
                        </div>

                        <button
                          className="btn-primary"
                          onClick={() => setInspectedPerson(po.person)}
                          style={{ width: '100%', justifyContent: 'center', fontSize: '0.8rem', padding: '0.45rem' }}
                        >
                          <Eye size={14} /> View Personal Space
                        </button>
                      </div>
                    ))}
                </div>
              )}
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

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.4rem' }}>
                1. Student Selection & Dynamic Team Size
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Students browse the 50 static problem statements. During registration, teams dynamically add or remove members within the project-configured limits (2–5 members). Upon submission, a unique <strong>Project Reference ID</strong> (e.g. <code>MMH-A1-X7K92</code>) is generated.
              </p>
            </div>

            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.4rem' }}>
                2. 5-Day Framework & Capacity Limit
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Projects are capped at maximum 3 teams per project statement. Students follow a standardized 5-day roadmap (Day 1 Setup, Day 2 AI Vibe Code, Day 3 Customise, Day 4 Document, Day 5 Demo) and upload proof screenshots for each stage.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 8: SETTINGS */}
      {currentSection === 'settings' && (
        <div style={{ maxWidth: '550px', width: '100%', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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
              <button className="btn-secondary" onClick={logoutAdmin} style={{ fontSize: '0.85rem', minHeight: '44px' }}>
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
                <span className="badge-code">{viewingProject.projectCode}</span>
                <span className="badge badge-category">{viewingProject.category}</span>
              </div>
              <button className="btn-secondary" onClick={() => setViewingProject(null)} style={{ padding: '0.25rem 0.5rem', minHeight: '36px' }}>
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
              <button className="btn-secondary" onClick={() => setViewingTeam(null)} style={{ padding: '0.25rem 0.5rem', minHeight: '36px' }}>
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

            {/* TEAM JOURNAL & NOTES INSPECTION */}
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '0.85rem', marginBottom: '1rem' }}>
              <strong style={{ fontSize: '0.8rem', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
                <FileText size={14} /> TEAM JOURNAL & NOTES:
              </strong>
              {loadingNotes ? (
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Loader2 size={12} className="spin" /> Loading team notes...
                </div>
              ) : Object.keys(teamNotesData).length === 0 ? (
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                  No journal notes entered by this team yet.
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxHeight: '180px', overflowY: 'auto' }}>
                  {['day1', 'day2', 'day3', 'day4', 'day5', 'general'].map(key => {
                    const noteContent = teamNotesData[key];
                    if (!noteContent) return null;
                    return (
                      <div key={key} style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-color)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem' }}>
                        <strong style={{ color: 'var(--primary)', textTransform: 'uppercase', fontSize: '0.725rem' }}>
                          {key.replace('day', 'Day ')} Notes:
                        </strong>
                        <div style={{ whiteSpace: 'pre-wrap', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
                          {noteContent}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
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
          <div style={{ maxWidth: '800px', width: 'calc(100% - 24px)', position: 'relative' }} onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setPreviewImage(null)}
              style={{
                position: 'absolute',
                top: '-2.5rem',
                right: 0,
                background: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
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
