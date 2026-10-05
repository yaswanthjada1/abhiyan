import React from 'react';
import { useProjectContext } from '../context/ProjectContext';
import { ProjectCard } from '../components/ProjectCard';
import { Project, CategoryType } from '../types/project';

interface CategoriesPageProps {
  onSelectProject: (p: Project) => void;
}

export const CategoriesPage: React.FC<CategoriesPageProps> = ({ onSelectProject }) => {
  const { projects, setSelectedCategory, setActiveTab } = useProjectContext();

  const categoryCounts: Record<CategoryType, number> = {
    'Rank & Linear Systems': 0,
    'Eigenvalues & Eigenvectors': 0,
    'Cayley-Hamilton & Diagonalization': 0,
    'Quadratic Forms': 0,
    'Singular Value Decomposition': 0,
    'Mixed / Multi-Topic': 0
  };

  projects.forEach(p => {
    if (categoryCounts[p.category] !== undefined) {
      categoryCounts[p.category]++;
    }
  });

  const categoryList: { name: CategoryType; code: string; desc: string }[] = [
    { name: 'Rank & Linear Systems', code: 'A1 - A8', desc: 'Gauss elimination, AX=B, row reduction & system consistency' },
    { name: 'Eigenvalues & Eigenvectors', code: 'B1 - B10', desc: 'Vibration modes, PageRank, PCA & Markov chains' },
    { name: 'Cayley-Hamilton & Diagonalization', code: 'C1 - C8', desc: 'Matrix powers A^n, characteristic equations & steady states' },
    { name: 'Quadratic Forms', code: 'D1 - D8', desc: 'Hessian, material stress, loss landscapes & definiteness' },
    { name: 'Singular Value Decomposition', code: 'E1 - E8', desc: 'SVD, low-rank approximation, image compression & recommendation' },
    { name: 'Mixed / Multi-Topic', code: 'F1 - F8', desc: 'Hill cipher, robot kinematics, game engines & linear algebra toolkits' }
  ];

  return (
    <div>
      <div style={{ marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '1.85rem', fontWeight: 800, marginBottom: '0.25rem' }}>Syllabus Categories</h1>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          Browse mini projects organized across standard Units I & II topics.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1rem' }}>
        {categoryList.map(cat => (
          <div
            key={cat.name}
            onClick={() => {
              setSelectedCategory(cat.name);
              setActiveTab('projects');
            }}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span className="badge-code">{cat.code}</span>
                <span className="badge badge-category">{categoryCounts[cat.name]} Projects</span>
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.25rem' }}>{cat.name}</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{cat.desc}</p>
            </div>

            <div style={{ marginTop: '1rem', fontSize: '0.8rem', fontWeight: 600, color: 'var(--primary)' }}>
              View Category Projects →
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
