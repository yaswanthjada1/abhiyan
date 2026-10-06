import React from 'react';
import { BookOpen } from 'lucide-react';
import { useProjectContext } from '../context/ProjectContext';

export const Footer: React.FC = () => {
  const { setActiveTab, setSelectedProjectCode } = useProjectContext();

  return (
    <footer
      style={{
        background: 'var(--bg-card)',
        borderTop: '1px solid var(--border-color)',
        padding: '2.5rem 1.5rem 1.5rem 1.5rem',
        marginTop: 'auto'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
          fontSize: '0.85rem',
          color: 'var(--text-secondary)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <BookOpen size={18} color="var(--primary)" />
          <strong style={{ color: 'var(--text-primary)' }}>ABHYAN</strong>
          <span style={{ color: 'var(--text-muted)' }}>• Mathematics Mini Project Programme</span>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a
            href="#projects"
            onClick={e => {
              e.preventDefault();
              setActiveTab('projects');
              setSelectedProjectCode(null);
            }}
            style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
          >
            Projects
          </a>
          <a
            href="#categories"
            onClick={e => {
              e.preventDefault();
              setActiveTab('categories');
              setSelectedProjectCode(null);
            }}
            style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
          >
            Categories
          </a>
          <a
            href="#my-project"
            onClick={e => {
              e.preventDefault();
              setActiveTab('my-project');
              setSelectedProjectCode(null);
            }}
            style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
          >
            My Project
          </a>
        </div>
      </div>
    </footer>
  );
};
