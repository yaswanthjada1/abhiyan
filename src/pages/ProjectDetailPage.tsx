import React, { useState } from 'react';
import { Project } from '../types/project';
import { useProjectContext } from '../context/ProjectContext';
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Calendar,
  Terminal,
  Users,
  Copy,
  Check,
  Lock,
  FileText,
  Code
} from 'lucide-react';

interface ProjectDetailPageProps {
  projectCode: string;
  onSelectProject: (p: Project) => void;
  onBack: () => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  projectCode,
  onSelectProject,
  onBack
}) => {
  const { projects, teamCounts } = useProjectContext();

  // Instant local lookup from projects.ts
  const project = projects.find(p => p.projectCode === projectCode) || projects[0];

  // Dynamic selection count from Firebase
  const currentTeamCount = teamCounts[project.projectCode] || 0;
  const isFull = currentTeamCount >= 3;

  const [activeTab, setActiveTab] = useState<'overview' | 'roadmap' | 'dayplan' | 'prompts' | 'teams'>('overview');
  const [copiedPromptId, setCopiedPromptId] = useState<string | null>(null);

  const handleCopyPrompt = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPromptId(id);
    setTimeout(() => setCopiedPromptId(null), 2000);
  };

  return (
    <div>
      {/* Back Button */}
      <button className="btn-secondary" onClick={onBack} style={{ marginBottom: '1rem', fontSize: '0.8rem', padding: '0.35rem 0.65rem' }}>
        <ArrowLeft size={14} /> Back to Projects
      </button>

      {/* Top Header Card */}
      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.5rem', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.35rem' }}>
              <span className="badge-code">{project.projectCode}</span>
              <span className="badge badge-category">{project.category}</span>
              <span className="badge" style={{ background: 'var(--bg-subtle)' }}>{project.difficulty}</span>
            </div>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 800, margin: '0.25rem 0' }}>{project.title}</h1>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{project.shortDescription}</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
            <span className={`badge ${isFull ? 'badge-status-full' : 'badge-status-available'}`}>
              {isFull ? 'FULL (3/3 Teams)' : `${currentTeamCount} / 3 Teams Registered`}
            </span>

            {isFull ? (
              <button className="btn-primary" disabled style={{ background: 'var(--border-color)', color: 'var(--text-muted)' }}>
                <Lock size={14} /> Project Full
              </button>
            ) : (
              <button className="btn-primary" onClick={() => onSelectProject(project)}>
                Select This Project
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs-container">
        <button className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>
          <BookOpen size={16} /> Overview
        </button>
        <button className={`tab-button ${activeTab === 'roadmap' ? 'active' : ''}`} onClick={() => setActiveTab('roadmap')}>
          <CheckCircle2 size={16} /> 01-08 Roadmap
        </button>
        <button className={`tab-button ${activeTab === 'dayplan' ? 'active' : ''}`} onClick={() => setActiveTab('dayplan')}>
          <Calendar size={16} /> Day-by-Day Plan
        </button>
        <button className={`tab-button ${activeTab === 'prompts' ? 'active' : ''}`} onClick={() => setActiveTab('prompts')}>
          <Terminal size={16} /> AI Prompts ({project.prompts.length})
        </button>
        <button className={`tab-button ${activeTab === 'teams' ? 'active' : ''}`} onClick={() => setActiveTab('teams')}>
          <Users size={16} /> Teams ({currentTeamCount})
        </button>
      </div>

      {/* TAB 1: OVERVIEW */}
      {activeTab === 'overview' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Problem Statement */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <FileText size={18} /> PROBLEM STATEMENT
            </h3>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>{project.problemStatement}</p>
          </div>

          {/* Math Used & Real Connection */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Code size={16} /> MATHEMATICS USED
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '0.5rem' }}>
                {project.mathUsed.map((m, idx) => (
                  <span key={idx} className="badge badge-category">
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.5rem' }}>REAL-WORLD CONNECTION</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{project.realWorldConnection}</p>
            </div>
          </div>

          {/* Tech Stack */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.5rem' }}>RECOMMENDED TECHNOLOGY STACK</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', fontSize: '0.85rem' }}>
              <div>
                <strong>Frontend:</strong> {project.recommendedTechStack.frontend}
              </div>
              <div>
                <strong>Backend:</strong> {project.recommendedTechStack.backend}
              </div>
              <div>
                <strong>Math Engine:</strong> {project.recommendedTechStack.math}
              </div>
              <div>
                <strong>Database:</strong> {project.recommendedTechStack.db}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: ROADMAP */}
      {activeTab === 'roadmap' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {project.implementationGuide.map(step => (
            <div key={step.stepNumber} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1rem', display: 'flex', gap: '1rem' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--primary-light)', color: 'var(--primary)', fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                0{step.stepNumber}
              </div>
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.35rem' }}>{step.title}</h4>
                <ul style={{ paddingLeft: '1.1rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  {step.tasks.map((t, idx) => (
                    <li key={idx}>{t}</li>
                  ))}
                </ul>
                <div style={{ marginTop: '0.5rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  Deliverable: <strong style={{ color: 'var(--text-primary)' }}>{step.deliverable}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: DAY PLAN */}
      {activeTab === 'dayplan' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {project.dailyTasks.map(d => (
            <div key={d.day} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1rem' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.25rem' }}>{d.title}</h4>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>Objective: {d.objectives.join(', ')}</p>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                Expected Output: <strong>{d.expectedOutput}</strong>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 4: PROMPTS */}
      {activeTab === 'prompts' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {project.prompts.map(p => (
            <div key={p.id}>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--primary)' }}>{p.title}</h4>
              <div className="prompt-box">
                <button className="prompt-copy-btn" onClick={() => handleCopyPrompt(p.id, p.promptText)}>
                  {copiedPromptId === p.id ? <Check size={12} color="#16a34a" /> : <Copy size={12} />} {copiedPromptId === p.id ? 'Copied' : 'Copy'}
                </button>
                {p.promptText}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 5: TEAMS */}
      {activeTab === 'teams' && (
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>Registered Teams ({currentTeamCount}/3)</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            Each project statement allows maximum 3 registered teams.
          </p>
        </div>
      )}
    </div>
  );
};
