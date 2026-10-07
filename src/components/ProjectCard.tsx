import React from 'react';
import { Project } from '../types/project';
import { useProjectContext } from '../context/ProjectContext';
import { Users, Calendar } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect?: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { setSelectedProjectCode, setActiveTab, teamCounts } = useProjectContext();

  const currentTeamCount = teamCounts[project.projectCode] || 0;
  const isFull = currentTeamCount >= 5;
  const remainingSlots = Math.max(0, 5 - currentTeamCount);

  const minSize = project.minimumTeamSize || 2;
  const maxSize = project.maximumTeamSize || 5;

  return (
    <div className="project-card">
      <div>
        {/* Badges */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem', flexWrap: 'wrap', gap: '0.35rem' }}>
          <span className="badge-code">{project.projectCode}</span>
          <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
            <span className="badge" style={{ background: 'var(--bg-subtle)', color: 'var(--text-secondary)', border: '1px solid var(--border-color)', fontSize: '0.7rem' }}>
              <Calendar size={11} style={{ marginRight: '3px' }} /> 5 DAYS
            </span>
            <span className="badge badge-category">{project.category}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="project-card-title">{project.title}</h3>

        {/* Description */}
        <p className="project-card-desc">{project.shortDescription}</p>

        {/* Math Used */}
        <div style={{ marginBottom: '1rem' }}>
          <span style={{ fontSize: '0.725rem', fontWeight: 700, color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>
            MATHEMATICS:
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
        {/* Dynamic Teams Status */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', fontWeight: 600 }}>
            <Users size={14} color="var(--text-muted)" />
            <span>Teams: {currentTeamCount} / 5</span>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>({minSize}–{maxSize} members)</span>
          </div>

          <span className={`badge ${isFull ? 'badge-status-full' : 'badge-status-available'}`}>
            {isFull ? 'FULL' : remainingSlots === 5 ? 'Available' : `${remainingSlots} Slot${remainingSlots > 1 ? 's' : ''} Left`}
          </span>
        </div>

        {/* Capacity Bar */}
        <div className="progress-bar-container" style={{ marginBottom: '1rem' }}>
          <div
            className="progress-bar-fill"
            style={{
              width: `${(currentTeamCount / 5) * 100}%`,
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
          style={{ width: '100%', justifyContent: 'center', minHeight: '44px' }}
        >
          View 5-Day Roadmap & Guide
        </button>
      </div>
    </div>
  );
};
