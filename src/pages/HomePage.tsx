import React from 'react';
import { useProjectContext } from '../context/ProjectContext';
import { ProjectCard } from '../components/ProjectCard';
import { Project } from '../types/project';
import { Search, X, Filter } from 'lucide-react';

interface HomePageProps {
  onSelectProject: (p: Project) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onSelectProject }) => {
  const {
    projects,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory
  } = useProjectContext();

  const categories = [
    'All',
    'Rank & Linear Systems',
    'Eigenvalues & Eigenvectors',
    'Cayley-Hamilton & Diagonalization',
    'Quadratic Forms',
    'Singular Value Decomposition',
    'Mixed / Multi-Topic'
  ];

  // Instant local filtering across all 50 projects
  const filteredProjects = projects.filter(p => {
    const q = searchQuery.toLowerCase().trim();
    if (q) {
      const matchTitle = p.title.toLowerCase().includes(q);
      const matchCode = p.projectCode.toLowerCase().includes(q);
      const matchDesc = p.shortDescription.toLowerCase().includes(q) || p.problemStatement.toLowerCase().includes(q);
      const matchMath = p.mathUsed.some(m => m.toLowerCase().includes(q));
      const matchReal = p.realWorldConnection ? p.realWorldConnection.toLowerCase().includes(q) : false;
      if (!matchTitle && !matchCode && !matchDesc && !matchMath && !matchReal) return false;
    }

    if (selectedCategory !== 'All' && p.category !== selectedCategory) return false;
    return true;
  });

  return (
    <div>
      {/* Compact Academic Hero */}
      <section className="hero-section">
        <h1 className="hero-title">Choose Your Mini Project</h1>
        <p className="hero-subtitle">
          Explore 50 mathematics-based mini projects, follow the 5-day implementation roadmap, and select a project for your team.
        </p>

        {/* Instant Search Bar */}
        <div
          style={{
            maxWidth: '650px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-md)',
            padding: '0.45rem 0.75rem',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <Search size={18} color="var(--text-muted)" style={{ marginRight: '0.5rem', flexShrink: 0 }} />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search 50 projects by title, code (A1, B2), Gauss, SVD..."
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              background: 'transparent',
              fontSize: '0.9rem',
              color: 'var(--text-primary)',
              minWidth: 0
            }}
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', minHeight: '36px', padding: '0 0.25rem' }}>
              <X size={16} />
            </button>
          )}
        </div>
      </section>

      {/* Responsive Category Filter Section */}
      <div style={{ marginBottom: '1.5rem' }}>
        {/* Mobile Dropdown Category Filter (Visible on small screens) */}
        <div className="mobile-category-select" style={{ display: 'none', marginBottom: '1rem' }}>
          <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Filter size={14} /> Filter by Category
          </label>
          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            style={{
              width: '100%',
              padding: '0.6rem 0.75rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-card)',
              fontSize: '0.875rem',
              color: 'var(--text-primary)',
              minHeight: '44px'
            }}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat === 'All' ? 'All Categories (50 Projects)' : cat}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop Category Horizontal Pills (Visible on tablet & desktop) */}
        <div className="desktop-category-pills" style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '0.45rem 0.85rem',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.8rem',
                fontWeight: selectedCategory === cat ? 700 : 500,
                border: '1px solid',
                borderColor: selectedCategory === cat ? 'var(--primary)' : 'var(--border-color)',
                background: selectedCategory === cat ? 'var(--primary-light)' : 'var(--bg-card)',
                color: selectedCategory === cat ? 'var(--primary)' : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                minHeight: '36px'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Filter Stats Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
          Showing <strong>{filteredProjects.length}</strong> of 50 Mini Projects
        </span>
        {selectedCategory !== 'All' && (
          <button
            onClick={() => setSelectedCategory('All')}
            style={{ background: 'none', border: 'none', color: 'var(--primary)', fontSize: '0.8rem', cursor: 'pointer', fontWeight: 600, minHeight: '36px' }}
          >
            Clear Filter
          </button>
        )}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div style={{ padding: '3rem 1.5rem', textAlign: 'center', background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>No matching projects found for "{searchQuery}".</p>
          <button className="btn-secondary" onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }} style={{ marginTop: '1rem', minHeight: '44px' }}>
            Reset Search & Filters
          </button>
        </div>
      ) : (
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.projectCode}
              project={project}
              onSelect={onSelectProject}
            />
          ))}
        </div>
      )}
    </div>
  );
};
