import React, { useState } from 'react';
import { useProjectContext } from '../context/ProjectContext';
import { BookOpen, FolderKanban, Grid, LayoutDashboard, ShieldCheck, LogOut, User, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const { activeTab, setActiveTab, setSelectedProjectCode, adminUser, logoutAdmin } = useProjectContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: 'projects' | 'categories' | 'my-project' | 'admin' | 'admin-login') => {
    setActiveTab(tab);
    setSelectedProjectCode(null);
    setMobileMenuOpen(false); // Close mobile drawer on item selection
  };

  return (
    <header className="app-header" style={{ position: 'sticky', top: 0, zIndex: 90, background: 'var(--bg-card)' }}>
      <div className="header-container" style={{ position: 'relative' }}>
        {/* Brand */}
        <div
          className="logo-section"
          onClick={() => handleNavClick('projects')}
        >
          <div
            style={{
              width: '34px',
              height: '34px',
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
            <h1 className="logo-title" style={{ fontSize: '1.15rem', fontWeight: 800 }}>ABHYAN</h1>
            <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 500, display: 'block' }}>
              Mini Project Programme
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-links desktop-nav">
          <button
            className={`nav-item ${activeTab === 'projects' || activeTab === 'home' ? 'active' : ''}`}
            onClick={() => handleNavClick('projects')}
          >
            <FolderKanban size={15} /> Projects
          </button>

          <button
            className={`nav-item ${activeTab === 'categories' ? 'active' : ''}`}
            onClick={() => handleNavClick('categories')}
          >
            <Grid size={15} /> Categories
          </button>

          <button
            className={`nav-item ${activeTab === 'my-project' ? 'active' : ''}`}
            onClick={() => handleNavClick('my-project')}
          >
            <LayoutDashboard size={15} /> My Project
          </button>

          <button
            className={`nav-item ${activeTab === 'admin' || activeTab === 'admin-login' ? 'active' : ''}`}
            onClick={() => handleNavClick(adminUser ? 'admin' : 'admin-login')}
          >
            <ShieldCheck size={15} /> Administration
          </button>
        </nav>

        {/* Right side Profile & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {adminUser && (
            <div className="desktop-admin-badge" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  background: 'var(--bg-subtle)',
                  padding: '0.3rem 0.65rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)'
                }}
              >
                <User size={13} color="var(--primary)" /> Administrator
              </div>

              <button
                className="btn-secondary"
                onClick={logoutAdmin}
                style={{ fontSize: '0.75rem', padding: '0.35rem 0.65rem', minHeight: '36px' }}
                title="Sign Out"
              >
                <LogOut size={14} /> Sign Out
              </button>
            </div>
          )}

          {/* Mobile Hamburger Toggle Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label="Toggle Navigation Menu"
            style={{
              display: 'none', // Controlled via CSS media query
              background: 'transparent',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-md)',
              padding: '0.5rem',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              minHeight: '44px',
              minWidth: '44px',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div
            className="mobile-nav-drawer"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'var(--bg-card)',
              borderBottom: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-md)',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              zIndex: 100
            }}
          >
            <button
              className={`nav-item ${activeTab === 'projects' || activeTab === 'home' ? 'active' : ''}`}
              onClick={() => handleNavClick('projects')}
              style={{ width: '100%', justifyContent: 'flex-start', padding: '0.75rem', minHeight: '44px' }}
            >
              <FolderKanban size={18} /> Projects
            </button>

            <button
              className={`nav-item ${activeTab === 'categories' ? 'active' : ''}`}
              onClick={() => handleNavClick('categories')}
              style={{ width: '100%', justifyContent: 'flex-start', padding: '0.75rem', minHeight: '44px' }}
            >
              <Grid size={18} /> Categories
            </button>

            <button
              className={`nav-item ${activeTab === 'my-project' ? 'active' : ''}`}
              onClick={() => handleNavClick('my-project')}
              style={{ width: '100%', justifyContent: 'flex-start', padding: '0.75rem', minHeight: '44px' }}
            >
              <LayoutDashboard size={18} /> My Project
            </button>

            <button
              className={`nav-item ${activeTab === 'admin' || activeTab === 'admin-login' ? 'active' : ''}`}
              onClick={() => handleNavClick(adminUser ? 'admin' : 'admin-login')}
              style={{ width: '100%', justifyContent: 'flex-start', padding: '0.75rem', minHeight: '44px' }}
            >
              <ShieldCheck size={18} /> Administration
            </button>

            {adminUser && (
              <div style={{ paddingTop: '0.5rem', borderTop: '1px solid var(--border-color)', marginTop: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                  Administrator ({adminUser.email})
                </span>
                <button
                  className="btn-secondary"
                  onClick={() => {
                    logoutAdmin();
                    setMobileMenuOpen(false);
                  }}
                  style={{ padding: '0.4rem 0.75rem', minHeight: '44px' }}
                >
                  <LogOut size={16} /> Sign Out
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};
