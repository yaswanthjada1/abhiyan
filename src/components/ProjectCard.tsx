import React from 'react';
import { Project } from '../types/project';
import { useProjectContext } from '../context/ProjectContext';
import { Users } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelectProject: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelectProject }) => {
  const { setSelectedProjectCode, setActiveTab, teamCounts } = useProjectContext();

  // Dynamic selection count from Firebase
  const currentTeamCount = teamCounts[project.projectCode] || 0;
  const isFull = currentTeamCount >= 3;
  const remainingSlots = Math.max(0, 3 - currentTeamCount);

  return (
    <div className="project-card">
      <div>
        {/* Badges */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
          <span className="badge-code">{project.projectCode}</span>
          <span className="badge badge-category">{project.category}</span>
        </div>

        {/* Title */}
        <h3 className="project-card-title">{project.title}</h3>

        {/* Description */}
        <p className="project-card-desc">{project.shortDescription}</p>

        {/* Math Used */}
        <div style={{ marginBottom: '1rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>
            MATH USED:
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
            {project.mathUsed.map((m, idx) => (
              <span key={idx} className="math-tag">
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div>
        {/* Dynamic Teams Status from Firebase */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', fontWeight: 600 }}>
            <Users size={14} color="var(--text-muted)" />
            <span>Teams: {currentTeamCount} / 3</span>
          </div>

          <span className={`badge ${isFull ? 'badge-status-full' : 'badge-status-available'}`}>
            {isFull ? 'FULL' : remainingSlots === 3 ? 'Available' : `${remainingSlots} Slot${remainingSlots > 1 ? 's' : ''} Left`}
          </span>
        </div>

        {/* Capacity Bar */}
        <div className="progress-bar-container" style={{ marginBottom: '1rem' }}>
          <div
            className="progress-bar-fill"
            style={{
              width: `${(currentTeamCount / 3) * 100}%`,
              background: isFull ? 'var(--danger)' : 'var(--primary)'
            }}
          />
        </div>

        {/* Action Button */}
        <button
          className="btn-primary"
          onClick={() => {
            setSelectedProjectCode(project.projectCode);
            setActiveTab('project-detail');
          }}
          style={{ width: '100%', justifyContent: 'center' }}
        >
          View Project
        </button>
      </div>
    </div>
  );
};
