import React from 'react';
import { useProjectContext } from '../context/ProjectContext';
import { BookOpen, FolderKanban, Grid, LayoutDashboard, ShieldCheck, LogOut, User } from 'lucide-react';

export const Header: React.FC = () => {
  const { activeTab, setActiveTab, setSelectedProjectCode, adminUser, logoutAdmin } = useProjectContext();

  return (
    <header className="app-header">
      <div className="header-container">
        {/* Brand */}
        <div
          className="logo-section"
          onClick={() => {
            setActiveTab('projects');
            setSelectedProjectCode(null);
          }}
        >
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--primary-light)',
              color: 'var(--primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <BookOpen size={18} />
          </div>
          <div>
            <h1 className="logo-title">Project Hub</h1>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 500, display: 'block' }}>
              Mini Project Management System
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="nav-links">
          <button
            className={`nav-item ${activeTab === 'projects' || activeTab === 'home' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('projects');
              setSelectedProjectCode(null);
            }}
          >
            <FolderKanban size={15} /> Projects
          </button>

          <button
            className={`nav-item ${activeTab === 'categories' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('categories');
              setSelectedProjectCode(null);
            }}
          >
            <Grid size={15} /> Categories
          </button>

          <button
            className={`nav-item ${activeTab === 'my-project' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('my-project');
              setSelectedProjectCode(null);
            }}
          >
            <LayoutDashboard size={15} /> My Project
          </button>

          <button
            className={`nav-item ${activeTab === 'admin' || activeTab === 'admin-login' ? 'active' : ''}`}
            onClick={() => {
              if (adminUser) {
                setActiveTab('admin');
              } else {
                setActiveTab('admin-login');
              }
              setSelectedProjectCode(null);
            }}
          >
            <ShieldCheck size={15} /> Administration
          </button>
        </nav>

        {/* Right side Profile */}
        {adminUser && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                background: 'var(--bg-subtle)',
                padding: '0.3rem 0.65rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)'
              }}
            >
              <User size={14} color="var(--primary)" /> Administrator
            </div>

            <button
              className="btn-secondary"
              onClick={logoutAdmin}
              style={{ fontSize: '0.75rem', padding: '0.3rem 0.6rem' }}
              title="Sign Out"
            >
              <LogOut size={14} /> Sign Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
