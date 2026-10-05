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
  Code,
  HelpCircle,
  AlertTriangle,
  Play,
  Layers,
  ChevronDown,
  ChevronUp,
  Sparkles
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

  const [activeTab, setActiveTab] = useState<'overview' | 'roadmap' | 'prompts' | 'documentation' | 'viva'>('overview');
  const [selectedDayTab, setSelectedDayTab] = useState<number>(1);
  const [copiedPromptId, setCopiedPromptId] = useState<string | null>(null);
  const [expandedVivaId, setExpandedVivaId] = useState<string | null>(null);

  const guide = project.projectGuide;

  const handleCopyPrompt = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPromptId(id);
    setTimeout(() => setCopiedPromptId(null), 2000);
  };

  const minSize = project.minimumTeamSize || 2;
  const maxSize = project.maximumTeamSize || 5;

  return (
    <div>
      {/* Back Button */}
      <button className="btn-secondary" onClick={onBack} style={{ marginBottom: '1rem', fontSize: '0.8rem', padding: '0.35rem 0.65rem', minHeight: '44px' }}>
        <ArrowLeft size={14} /> Back to Projects
      </button>

      {/* Top Header Card */}
      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginBottom: '1.5rem' }}>
        <div className="project-detail-header" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
          <div style={{ flex: 1, minWidth: '280px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
              <span className="badge-code">{project.projectCode}</span>
              <span className="badge badge-category">{project.category}</span>
              <span className="badge" style={{ background: 'var(--primary-light)', color: 'var(--primary)', fontWeight: 700 }}>
                <Calendar size={12} style={{ marginRight: '3px' }} /> 5 DAYS FRAMEWORK
              </span>
              <span className="badge" style={{ background: 'var(--bg-subtle)' }}>Team Size: {minSize}–{maxSize}</span>
            </div>
            <h1 style={{ fontSize: '1.65rem', fontWeight: 800, margin: '0.25rem 0' }}>{project.title}</h1>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{project.shortDescription}</p>
          </div>

          <div className="project-detail-actions" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem', width: '100%', maxWidth: '240px' }}>
            <span className={`badge ${isFull ? 'badge-status-full' : 'badge-status-available'}`} style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}>
              {isFull ? 'FULL (3/3 Teams)' : `${currentTeamCount} / 3 Teams Registered`}
            </span>

            {isFull ? (
              <button className="btn-primary" disabled style={{ background: 'var(--border-color)', color: 'var(--text-muted)', width: '100%', justifyContent: 'center', minHeight: '44px' }}>
                <Lock size={14} /> Project Full
              </button>
            ) : (
              <button className="btn-primary" onClick={() => onSelectProject(project)} style={{ width: '100%', justifyContent: 'center', minHeight: '44px', fontWeight: 700 }}>
                Select This Project
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 5-STEP VISUAL TIMELINE */}
      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <Layers size={14} /> 5-DAY IMPLEMENTATION ROADMAP
        </h3>

        <div className="five-step-timeline">
          {[
            { num: 1, title: 'DAY 1 — SETUP', subtitle: 'Understand + Prepare' },
            { num: 2, title: 'DAY 2 — AI VIBE CODE', subtitle: 'Build MVP Architecture' },
            { num: 3, title: 'DAY 3 — CUSTOMISE', subtitle: 'Refine + Verify Math' },
            { num: 4, title: 'DAY 4 — DOCUMENT', subtitle: 'Report + Screenshots' },
            { num: 5, title: 'DAY 5 — DEMO', subtitle: 'Present + Viva Defence' }
          ].map(step => (
            <div
              key={step.num}
              onClick={() => {
                setActiveTab('roadmap');
                setSelectedDayTab(step.num);
              }}
              className={`timeline-step ${selectedDayTab === step.num && activeTab === 'roadmap' ? 'active' : ''}`}
              style={{
                flex: 1,
                padding: '0.75rem',
                borderRadius: 'var(--radius-md)',
                background: selectedDayTab === step.num && activeTab === 'roadmap' ? 'var(--primary-light)' : 'var(--bg-subtle)',
                border: '1px solid',
                borderColor: selectedDayTab === step.num && activeTab === 'roadmap' ? 'var(--primary)' : 'var(--border-color)',
                cursor: 'pointer',
                textAlign: 'center',
                transition: 'all 0.15s ease'
              }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.15rem' }}>
                STAGE {step.num}
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {step.title}
              </div>
              <div style={{ fontSize: '0.725rem', color: 'var(--text-secondary)', marginTop: '0.1rem' }}>
                {step.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs-container" style={{ overflowX: 'auto', flexWrap: 'nowrap' }}>
        <button className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>
          <BookOpen size={16} /> Overview
        </button>
        <button className={`tab-button ${activeTab === 'roadmap' ? 'active' : ''}`} onClick={() => setActiveTab('roadmap')}>
          <Calendar size={16} /> 5-Day Guide
        </button>
        <button className={`tab-button ${activeTab === 'prompts' ? 'active' : ''}`} onClick={() => setActiveTab('prompts')}>
          <Terminal size={16} /> AI Prompts (5)
        </button>
        <button className={`tab-button ${activeTab === 'documentation' ? 'active' : ''}`} onClick={() => setActiveTab('documentation')}>
          <FileText size={16} /> Report Guide (17)
        </button>
        <button className={`tab-button ${activeTab === 'viva' ? 'active' : ''}`} onClick={() => setActiveTab('viva')}>
          <HelpCircle size={16} /> Viva & Demo (10 Qs)
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
          <div className="responsive-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Code size={16} /> MATHEMATICS USED
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {project.mathUsed.map((m, idx) => (
                  <span key={idx} className="badge badge-category" style={{ fontSize: '0.8rem', padding: '0.3rem 0.6rem' }}>
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Sparkles size={16} color="var(--primary)" /> REAL-WORLD CONNECTION
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{project.realWorldConnection}</p>
            </div>
          </div>

          {/* Tech Stack & Required Skills */}
          <div className="responsive-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.75rem' }}>Recommended Tech Stack</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <li><strong>Frontend:</strong> {project.recommendedTechStack.frontend}</li>
                <li><strong>Backend:</strong> {project.recommendedTechStack.backend}</li>
                <li><strong>Math Engine:</strong> {project.recommendedTechStack.math}</li>
                <li><strong>Charts & Visuals:</strong> {project.recommendedTechStack.charts}</li>
              </ul>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.75rem' }}>Required Skills</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {project.requiredSkills.map((sk, idx) => (
                  <span key={idx} className="math-tag" style={{ fontSize: '0.8rem' }}>
                    {sk}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: 5-DAY ROADMAP GUIDE */}
      {activeTab === 'roadmap' && guide && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Day Sub-tabs */}
          <div style={{ display: 'flex', gap: '0.4rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', overflowX: 'auto' }}>
            {[1, 2, 3, 4, 5].map(dNum => (
              <button
                key={dNum}
                onClick={() => setSelectedDayTab(dNum)}
                className={`tab-button ${selectedDayTab === dNum ? 'active' : ''}`}
                style={{ padding: '0.4rem 0.85rem', fontSize: '0.85rem' }}
              >
                Day {dNum} — {dNum === 1 ? 'SETUP' : dNum === 2 ? 'AI VIBE CODE' : dNum === 3 ? 'CUSTOMISE' : dNum === 4 ? 'DOCUMENT' : 'DEMO'}
              </button>
            ))}
          </div>

          {/* Day Guide Detail Card */}
          {(() => {
            const currentDayGuide =
              selectedDayTab === 1 ? guide.day1 :
              selectedDayTab === 2 ? guide.day2 :
              selectedDayTab === 3 ? guide.day3 :
              selectedDayTab === 4 ? guide.day4 : guide.day5;

            return (
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <span className="badge" style={{ background: 'var(--primary-light)', color: 'var(--primary)', fontWeight: 700 }}>
                      DAY {currentDayGuide.day}
                    </span>
                    <h2 style={{ fontSize: '1.35rem', fontWeight: 800, marginTop: '0.2rem' }}>
                      DAY {currentDayGuide.day} — {currentDayGuide.title}
                    </h2>
                  </div>
                </div>

                <div style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                  <strong style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.2rem' }}>OBJECTIVE:</strong>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>{currentDayGuide.objective}</p>
                </div>

                {/* Day 3 Mandatory Math Audit Warning */}
                {selectedDayTab === 3 && (
                  <div style={{ background: 'var(--warning-bg)', border: '1px solid var(--warning)', borderRadius: 'var(--radius-md)', padding: '1rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <AlertTriangle size={20} color="var(--warning)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ color: 'var(--warning)', fontSize: '0.875rem', display: 'block' }}>MANDATORY MATHEMATICAL AUDIT</strong>
                      <p style={{ fontSize: '0.825rem', color: 'var(--text-primary)', marginTop: '0.2rem', lineHeight: 1.5 }}>
                        Verify every mathematical result manually on paper or with a trusted calculation before presenting! Do not blindly trust AI-generated algorithms.
                      </p>
                    </div>
                  </div>
                )}

                {/* Tasks List */}
                <div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.75rem' }}>Tasks to Complete</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {currentDayGuide.tasks.map((task, idx) => (
                      <div key={task.id} style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '0.85rem', background: 'var(--bg-card)' }}>
                        <div style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                          {idx + 1}. {task.title}
                        </div>
                        <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.4rem' }}>
                          {task.description}
                        </p>
                        <div style={{ fontSize: '0.78rem', color: 'var(--primary)', background: 'var(--primary-light)', padding: '0.35rem 0.6rem', borderRadius: 'var(--radius-sm)' }}>
                          <strong>Expected Output:</strong> {task.expectedOutput}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Day 2 Prompts Preview */}
                {selectedDayTab === 2 && currentDayGuide.prompts && (
                  <div>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Terminal size={16} /> Day 2 AI Prompts
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {currentDayGuide.prompts.map(pr => (
                        <div key={pr.id} className="prompt-box">
                          <button className="prompt-copy-btn" onClick={() => handleCopyPrompt(pr.id, pr.promptText)} style={{ minHeight: '36px' }}>
                            {copiedPromptId === pr.id ? <Check size={14} /> : <Copy size={14} />}
                            {copiedPromptId === pr.id ? 'Copied' : 'Copy'}
                          </button>
                          <strong style={{ color: '#93c5fd', fontSize: '0.8rem', display: 'block', marginBottom: '0.35rem' }}>{pr.title}</strong>
                          <pre style={{ whiteSpace: 'pre-wrap', margin: 0, fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>{pr.promptText}</pre>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      )}

      {/* TAB 3: AI PROMPTS */}
      {activeTab === 'prompts' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Project-Specific AI Prompts</h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Use these exact structured prompts with ChatGPT, Claude, or Gemini during Day 2 (AI Vibe Code).
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {(project.prompts ?? []).map(pr => (
              <div key={pr.id} className="prompt-box">
                <button className="prompt-copy-btn" onClick={() => handleCopyPrompt(pr.id, pr.promptText)} style={{ minHeight: '36px' }}>
                  {copiedPromptId === pr.id ? <Check size={14} /> : <Copy size={14} />}
                  {copiedPromptId === pr.id ? 'Copied to Clipboard' : 'Copy Prompt'}
                </button>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span className="badge" style={{ background: '#334155', color: '#93c5fd', fontSize: '0.725rem' }}>{pr.category}</span>
                  <strong style={{ color: '#f8fafc', fontSize: '0.9rem' }}>{pr.title}</strong>
                </div>
                <pre style={{ whiteSpace: 'pre-wrap', margin: 0, fontFamily: 'var(--font-mono)', fontSize: '0.825rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                  {pr.promptText}
                </pre>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: DOCUMENTATION GUIDE (17 SECTIONS) */}
      {activeTab === 'documentation' && guide && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>17-Section Project Report Guide</h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Follow this academic report structure for Day 4 documentation.
            </p>
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {(guide.documentationGuide ?? []).map(sec => (
                <div key={sec.sectionNumber} style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.2rem' }}>
                    Section {sec.sectionNumber}: {sec.title}
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {sec.guidance}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: VIVA QUESTIONS & DEMO CHECKLIST */}
      {activeTab === 'viva' && guide && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>10 Viva Questions & Final Demo Checklist</h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Prepare for Day 5 project demonstration and viva evaluation.
            </p>
          </div>

          {/* Viva Questions Accordion */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <HelpCircle size={18} /> 10 Project-Specific Viva Questions
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {(guide.vivaQuestions ?? []).map((vq, idx) => {
                const isOpen = expandedVivaId === vq.id;
                return (
                  <div key={vq.id} style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                    <div
                      onClick={() => setExpandedVivaId(isOpen ? null : vq.id)}
                      style={{
                        padding: '0.75rem 1rem',
                        background: 'var(--bg-subtle)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer',
                        fontSize: '0.875rem',
                        fontWeight: 700
                      }}
                    >
                      <span>Q{idx + 1}: {vq.question}</span>
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>

                    {isOpen && (
                      <div style={{ padding: '0.85rem 1rem', background: 'var(--bg-card)', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, borderTop: '1px solid var(--border-color)' }}>
                        <strong style={{ color: 'var(--success)', display: 'block', marginBottom: '0.25rem' }}>ANSWER:</strong>
                        {vq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Final Demo Checklist */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={18} color="var(--success)" /> Final Demo Checklist (10 Items)
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.65rem' }}>
              {(guide.demoChecklist ?? []).map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-subtle)', padding: '0.6rem 0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.825rem' }}>
                  <CheckCircle2 size={16} color="var(--success)" style={{ flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
