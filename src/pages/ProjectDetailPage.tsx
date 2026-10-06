import React from 'react';
import { Project } from '../types/project';
import { useProjectContext } from '../context/ProjectContext';
import { getComprehensiveProjectDetails } from '../data/projectDetailsGenerator';
import { MathFormula } from '../components/MathFormula';
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Calendar,
  Users,
  Lock,
  Layers,
  Sparkles,
  ArrowRight,
  Target,
  Play,
  Cpu,
  Globe,
  FileCheck2,
  Check
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

  const project = projects.find(p => p.projectCode === projectCode) || projects[0];
  const currentTeamCount = teamCounts[project.projectCode] || 0;
  const isFull = currentTeamCount >= 3;
  const availableTeams = Math.max(0, 3 - currentTeamCount);

  const details = getComprehensiveProjectDetails(project);
  const minSize = project.minimumTeamSize || 2;
  const maxSize = project.maximumTeamSize || 5;

  return (
    <div style={{ paddingBottom: '3rem' }}>
      {/* Back Button */}
      <button
        className="btn-secondary"
        onClick={onBack}
        style={{ marginBottom: '1.25rem', fontSize: '0.85rem', padding: '0.4rem 0.85rem' }}
      >
        <ArrowLeft size={16} /> Back to Project Catalog
      </button>

      {/* Header Card */}
      <div
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.25rem',
          marginBottom: '1.25rem',
          boxShadow: 'var(--shadow-md)',
          width: '100%',
          boxSizing: 'border-box'
        }}
      >
        <div className="project-detail-header">
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
              <span className="badge-code">{project.projectCode}</span>
              <span className="badge badge-category">{project.category}</span>
              <span className="badge" style={{ background: 'var(--primary-light)', color: 'var(--primary)', fontWeight: 700 }}>
                <Calendar size={13} style={{ marginRight: '4px' }} /> 5 DAYS FRAMEWORK
              </span>
              <span className="badge" style={{ background: 'var(--bg-subtle)' }}>
                <Users size={13} style={{ marginRight: '4px' }} /> Team Size: {minSize}–{maxSize}
              </span>
              <span className="badge" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#d97706', fontWeight: 600 }}>
                Difficulty: {project.difficulty}
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(20px, 5vw, 32px)', fontWeight: 800, margin: '0.35rem 0', color: 'var(--text-primary)', overflowWrap: 'anywhere' }}>
              {project.title}
            </h1>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: '0.5rem 0 0 0', overflowWrap: 'anywhere' }}>
              {project.shortDescription}
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
              gap: '0.65rem',
              width: '100%',
              background: 'var(--bg-subtle)',
              padding: '1rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-color)',
              boxSizing: 'border-box'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.825rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>Availability:</span>
              <strong style={{ color: isFull ? '#ef4444' : 'var(--success)' }}>
                {availableTeams} / 3 teams remaining
              </strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.825rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>Est. Duration:</span>
              <strong>5 Days</strong>
            </div>

            {isFull ? (
              <button
                className="btn-primary"
                disabled
                style={{
                  background: 'var(--border-color)',
                  color: 'var(--text-muted)',
                  width: '100%',
                  justifyContent: 'center',
                  minHeight: '44px',
                  cursor: 'not-allowed'
                }}
              >
                <Lock size={16} /> Project Full
              </button>
            ) : (
              <button
                className="btn-primary"
                onClick={() => onSelectProject(project)}
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  minHeight: '44px',
                  fontWeight: 700,
                  fontSize: '0.95rem'
                }}
              >
                Select This Project
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Grid Layout for Project Overview Details */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', width: '100%' }}>
        {/* 1. UNDERSTAND THE PROJECT */}
        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.25rem',
            boxShadow: 'var(--shadow-sm)',
            width: '100%',
            boxSizing: 'border-box'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
            <BookOpen size={20} color="var(--primary)" />
            <h2 style={{ fontSize: 'clamp(18px, 4vw, 24px)', fontWeight: 800, margin: 0 }}>
              UNDERSTAND THE PROJECT
            </h2>
          </div>

          <div className="project-content-grid">
            <div style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', width: '100%', boxSizing: 'border-box' }}>
              <h4 style={{ color: 'var(--primary)', margin: '0 0 0.4rem 0', fontSize: '0.9rem', fontWeight: 700 }}>
                What is the Problem?
              </h4>
              <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: '1.5', color: 'var(--text-secondary)', overflowWrap: 'anywhere' }}>
                {details.understandProject.problem}
              </p>
            </div>

            <div style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', width: '100%', boxSizing: 'border-box' }}>
              <h4 style={{ color: 'var(--primary)', margin: '0 0 0.4rem 0', fontSize: '0.9rem', fontWeight: 700 }}>
                Why Does This Problem Exist?
              </h4>
              <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: '1.5', color: 'var(--text-secondary)', overflowWrap: 'anywhere' }}>
                {details.understandProject.whyItExists}
              </p>
            </div>

            <div style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', width: '100%', boxSizing: 'border-box' }}>
              <h4 style={{ color: 'var(--primary)', margin: '0 0 0.4rem 0', fontSize: '0.9rem', fontWeight: 700 }}>
                Who Would Use This Solution?
              </h4>
              <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: '1.5', color: 'var(--text-secondary)', overflowWrap: 'anywhere' }}>
                {details.understandProject.targetUsers}
              </p>
            </div>

            <div style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', width: '100%', boxSizing: 'border-box' }}>
              <h4 style={{ color: 'var(--primary)', margin: '0 0 0.4rem 0', fontSize: '0.9rem', fontWeight: 700 }}>
                What Exactly Are We Building?
              </h4>
              <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: '1.5', color: 'var(--text-secondary)', overflowWrap: 'anywhere' }}>
                {details.understandProject.whatWeAreBuilding}
              </p>
            </div>
          </div>
        </div>

        {/* 2. MATHEMATICAL FOUNDATION */}
        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.25rem',
            boxShadow: 'var(--shadow-sm)',
            width: '100%',
            boxSizing: 'border-box'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
            <Cpu size={20} color="var(--primary)" />
            <h2 style={{ fontSize: 'clamp(18px, 4vw, 24px)', fontWeight: 800, margin: 0 }}>
              MATHEMATICAL FOUNDATION
            </h2>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem', width: '100%' }}>
            {details.mathFoundation.concepts.map((concept, idx) => (
              <span
                key={idx}
                style={{
                  background: 'var(--primary-light)',
                  color: 'var(--primary)',
                  padding: '0.3rem 0.65rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  maxWidth: '100%',
                  overflowWrap: 'anywhere'
                }}
              >
                {concept}
              </span>
            ))}
          </div>

          {/* Key Equations Rendered with KaTeX */}
          <div style={{ marginBottom: '1.25rem' }}>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.6rem', color: 'var(--text-muted)' }}>
              KEY EQUATIONS & FORMULAS
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {details.mathFoundation.equations.map((eq, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.75rem 1rem',
                    fontFamily: 'monospace',
                    fontSize: '0.9rem',
                    overflowX: 'auto'
                  }}
                >
                  <MathFormula formula={eq} block />
                </div>
              ))}
            </div>
          </div>

          {/* Variables Table */}
          <div style={{ marginTop: '1rem' }}>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.6rem', color: 'var(--text-muted)' }}>
              VARIABLES & MATRIX DEFINITIONS
            </h4>
            <div className="project-content-grid">
              {details.mathFoundation.variables.map((v, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border-color)',
                    padding: '0.6rem 0.85rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.825rem',
                    width: '100%',
                    boxSizing: 'border-box'
                  }}
                >
                  <strong style={{ color: 'var(--primary)', fontFamily: 'monospace' }}>{v.symbol}:</strong>{' '}
                  <span style={{ color: 'var(--text-secondary)', overflowWrap: 'anywhere' }}>{v.meaning}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. INPUT → PROCESS → OUTPUT */}
        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.5rem',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
            <Layers size={22} color="var(--primary)" />
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0 }}>
              INPUT → PROCESS → OUTPUT ARCHITECTURE
            </h2>
          </div>

          <div className="project-three-col-grid">
            {/* INPUT Block */}
            <div
              style={{
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                padding: '1rem',
                width: '100%',
                boxSizing: 'border-box'
              }}
            >
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                1. INPUT
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.1rem', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {details.inputProcessOutput.input.map((item, i) => (
                  <li key={i} style={{ overflowWrap: 'anywhere' }}>{item}</li>
                ))}
              </ul>
            </div>

            {/* PROCESS Block */}
            <div
              style={{
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                padding: '1rem',
                width: '100%',
                boxSizing: 'border-box'
              }}
            >
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                2. PROCESS (MATH ENGINE)
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.1rem', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {details.inputProcessOutput.process.map((item, i) => (
                  <li key={i} style={{ overflowWrap: 'anywhere' }}>{item}</li>
                ))}
              </ul>
            </div>

            {/* OUTPUT Block */}
            <div
              style={{
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                padding: '1rem',
                width: '100%',
                boxSizing: 'border-box'
              }}
            >
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--success)', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                3. OUTPUT & VISUALS
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.1rem', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {details.inputProcessOutput.output.map((item, i) => (
                  <li key={i} style={{ overflowWrap: 'anywhere' }}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 4. REAL-WORLD CONNECTION & WHAT YOU WILL BUILD */}
        <div className="project-content-grid">
          {/* Real World Connection */}
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.25rem',
              width: '100%',
              boxSizing: 'border-box'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
              <Globe size={20} color="var(--primary)" />
              <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700 }}>
                REAL-WORLD CONNECTION
              </h3>
            </div>
            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--text-secondary)', overflowWrap: 'anywhere' }}>
              {project.realWorldConnection}
            </p>
          </div>

          {/* What You Will Build */}
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.25rem',
              width: '100%',
              boxSizing: 'border-box'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
              <Target size={20} color="var(--primary)" />
              <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700 }}>
                WHAT YOU WILL BUILD
              </h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {details.whatYouWillBuild.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem' }}>
                  <Check size={16} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ color: 'var(--text-secondary)', overflowWrap: 'anywhere' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5. FINAL DELIVERABLE & EXPECTED DEMO */}
        <div className="project-content-grid">
          {/* Final Deliverable */}
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.25rem',
              width: '100%',
              boxSizing: 'border-box'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
              <FileCheck2 size={20} color="var(--success)" />
              <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700 }}>
                FINAL DELIVERABLES (DAY 5)
              </h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {details.finalDeliverable.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                  <CheckCircle2 size={16} color="var(--success)" style={{ flexShrink: 0 }} />
                  <span style={{ overflowWrap: 'anywhere' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Expected Demo Scenario */}
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.25rem',
              width: '100%',
              boxSizing: 'border-box'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
              <Play size={20} color="var(--primary)" />
              <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700 }}>
                WHAT YOU SHOULD DEMONSTRATE
              </h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              {details.expectedDemoScenario.map((step, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'var(--bg-subtle)',
                    padding: '0.5rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.825rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.4',
                    overflowWrap: 'anywhere'
                  }}
                >
                  {step}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 6. 5-DAY FRAMEWORK OVERVIEW */}
        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.25rem',
            boxShadow: 'var(--shadow-sm)',
            width: '100%',
            boxSizing: 'border-box'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <Sparkles size={20} color="var(--primary)" />
            <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 800 }}>
              THE 5-DAY PROJECT ROADMAP OVERVIEW
            </h3>
          </div>

          <div className="project-roadmap-grid">
            {[
              { day: 'Day 1', title: 'SETUP', desc: 'Deconstruct problem, formulate math model, setup environment.' },
              { day: 'Day 2', title: 'AI VIBE CODE', desc: 'Use AI prompts to build core calculation engine & MVP.' },
              { day: 'Day 3', title: 'CUSTOMISE', desc: 'Audit math, refine domain UI, add charts & step-by-step math.' },
              { day: 'Day 4', title: 'DOCUMENT', desc: 'Write 17-section report, capture proof screenshots.' },
              { day: 'Day 5', title: 'DEMO', desc: 'Prepare slides, master viva questions, present live demo.' }
            ].map((d, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--bg-subtle)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.85rem',
                  fontSize: '0.8rem',
                  width: '100%',
                  boxSizing: 'border-box'
                }}
              >
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)' }}>
                  {d.day}
                </div>
                <div style={{ fontWeight: 700, margin: '0.2rem 0 0.4rem 0', color: 'var(--text-color)' }}>
                  {d.title}
                </div>
                <div style={{ color: 'var(--text-muted)', lineHeight: '1.4', overflowWrap: 'anywhere' }}>
                  {d.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7. SKILLS & TOOLS ACQUIRED */}
        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.25rem',
            boxShadow: 'var(--shadow-sm)',
            width: '100%',
            boxSizing: 'border-box'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
            <Cpu size={20} color="var(--primary)" />
            <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 800 }}>
              SKILLS & TOOLS ACQUIRED
            </h3>
          </div>
          <div className="project-content-grid">
            <div>
              <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0 0 0.5rem 0', fontWeight: 700 }}>REQUIRED & LEARNED SKILLS</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', width: '100%' }}>
                {(project.requiredSkills || ['Linear Algebra', 'Problem Solving', 'Data Visualization']).map((skill, idx) => (
                  <span key={idx} style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-color)', padding: '0.3rem 0.65rem', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem', fontWeight: 600, overflowWrap: 'anywhere' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            {project.recommendedTechStack && (
              <div>
                <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0 0 0.5rem 0', fontWeight: 700 }}>RECOMMENDED TECH STACK</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', width: '100%' }}>
                  {Object.entries(project.recommendedTechStack).map(([k, v]) => (
                    <span key={k} style={{ background: 'var(--primary-light)', color: 'var(--primary)', padding: '0.3rem 0.65rem', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem', fontWeight: 600, overflowWrap: 'anywhere' }}>
                      <strong style={{ textTransform: 'capitalize' }}>{k}:</strong> {v}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA Card */}
        {!isFull && (
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.1), rgba(124, 58, 237, 0.1))',
              border: '1px solid var(--primary)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              marginTop: '1rem',
              minWidth: 0
            }}
          >
            <div>
              <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '1.15rem', fontWeight: 800 }}>
                Ready to build {project.title}?
              </h3>
              <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                Register your team to get your Reference ID and access the complete 5-Day workspace.
              </p>
            </div>

            <button
              className="btn-primary"
              onClick={() => onSelectProject(project)}
              style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem', fontWeight: 700 }}
            >
              Select This Project <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
