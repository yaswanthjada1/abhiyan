import React from 'react';
import { useProjectContext } from '../context/ProjectContext';
import { ProjectCard } from '../components/ProjectCard';
import { Project } from '../types/project';
import { Search, X } from 'lucide-react';

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
          Explore 50 mathematics-based mini projects, understand the problem statement, follow the step-by-step implementation roadmap, and select a project for your team.
        </p>

        {/* Instant Search Bar */}
        <div
          style={{
            maxWidth: '650px',
            display: 'flex',
            alignItems: 'center',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-md)',
            padding: '0.45rem 0.75rem',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <Search size={18} color="var(--text-muted)" style={{ marginRight: '0.5rem' }} />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search 50 projects by title, code (A1, B2), Gauss, SVD, PCA, image..."
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              background: 'transparent',
              fontSize: '0.9rem',
              color: 'var(--text-primary)'
            }}
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
              <X size={16} />
            </button>
          )}
        </div>
      </section>

      {/* Instant Category Pills Filter */}
      <div style={{ display: 'flex', gap: '0.4rem', overflowX: 'auto', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: '0.4rem 0.85rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.8rem',
              fontWeight: 600,
              border: `1px solid ${selectedCategory === cat ? 'var(--primary)' : 'var(--border-color)'}`,
              background: selectedCategory === cat ? 'var(--primary-light)' : 'var(--bg-card)',
              color: selectedCategory === cat ? 'var(--primary)' : 'var(--text-secondary)',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Instant Projects List Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Available Problem Statements ({filteredProjects.length})</h2>
      </div>

      {/* Instant Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map(project => (
          <ProjectCard key={project.projectCode} project={project} onSelectProject={onSelectProject} />
        ))}
      </div>
    </div>
  );
};
