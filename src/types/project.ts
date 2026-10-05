export type CategoryType =
  | 'Rank & Linear Systems'
  | 'Eigenvalues & Eigenvectors'
  | 'Cayley-Hamilton & Diagonalization'
  | 'Quadratic Forms'
  | 'Singular Value Decomposition'
  | 'Mixed / Multi-Topic';

export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface TeamMember {
  name: string;
  rollNumber: string;
  role?: 'leader' | 'member';
}

export interface TeamLeader {
  name: string;
  rollNumber: string;
  email: string;
  phone: string;
}

export interface TeamDocument {
  teamId: string;
  referenceId: string; // e.g. MMH-A1-X7K92
  projectId: string;   // projectCode e.g. A1
  teamName: string;
  leader: TeamLeader;
  members: TeamMember[];
  progress: number;    // 0 - 100
  currentDay: number;  // 1 - 5
  completedTasks: Record<string, boolean>; // e.g. { "d1-task1": true }
  createdAt?: any;
  updatedAt?: any;
  screenshots?: ScreenshotMetadata[];
}

export interface ScreenshotMetadata {
  id: string;
  teamId: string;
  projectId: string;
  day: number; // 1 to 5
  storagePath?: string;
  downloadUrl: string;
  caption: string;
  uploaderName?: string;
  uploadedAt: string;
}

export interface ImplementationStep {
  stepNumber: number;
  title: string;
  tasks: string[];
  deliverable: string;
}

export interface TaskItem {
  id: string;
  text: string;
  description?: string;
  expectedOutput?: string;
}

export interface DayGuideTask {
  id: string;
  title: string;
  description: string;
  expectedOutput: string;
}

export type PromptCategory =
  | 'Architecture'
  | 'Core Logic'
  | 'UI & Visualization'
  | 'Debugging'
  | 'Testing'
  | 'Understanding'
  | 'Mathematics'
  | 'Coding'
  | 'Documentation'
  | 'PPT'
  | 'Viva';

export interface ProjectPrompt {
  id: string;
  title: string;
  category: PromptCategory;
  promptText: string;
}

export interface DayGuide {
  day: number; // 1 to 5
  title: 'SETUP' | 'AI VIBE CODE' | 'CUSTOMISE' | 'DOCUMENT' | 'DEMO';
  goal: string;
  objective: string;
  tasks: DayGuideTask[];
  prompts?: ProjectPrompt[];
  expectedOutput: string[];
}

export interface VivaQuestion {
  id: string;
  question: string;
  answer: string;
  category: 'Problem' | 'Mathematics' | 'Algorithm' | 'Implementation' | 'Results' | 'Limitations' | 'Real-world';
}

export interface DocumentationSection {
  sectionNumber: number;
  title: string;
  guidance: string;
}

export interface ProjectGuide {
  day1: DayGuide;
  day2: DayGuide;
  day3: DayGuide;
  day4: DayGuide;
  day5: DayGuide;
  documentationGuide: DocumentationSection[];
  vivaQuestions: VivaQuestion[];
  demoChecklist: string[];
}

export interface ProjectResource {
  title: string;
  type: string;
  url: string;
  description: string;
}

export interface Project {
  projectId: string;      // "A1"
  projectCode: string;    // "A1"
  title: string;
  category: CategoryType;
  shortDescription: string;
  problemStatement: string;
  mathUsed: string[];
  realWorldConnection: string;
  difficulty: DifficultyLevel;
  estimatedDuration: number; // 5 days
  requiredSkills: string[];
  recommendedTechStack: {
    frontend: string;
    backend: string;
    math: string;
    charts: string;
    db: string;
  };
  selectionLimit: number;    // 3 teams max
  selectedTeamCount: number; // 0, 1, 2, 3
  minimumTeamSize?: number;  // e.g. 2
  maximumTeamSize?: number;  // e.g. 5
  status: 'available' | 'full';
  implementationGuide: ImplementationStep[];
  dailyTasks?: Array<{
    day: number;
    title: string;
    objectives: string[];
    tasks: TaskItem[];
    expectedOutput: string;
  }>;
  projectGuide?: ProjectGuide;
  prompts: ProjectPrompt[];
  vivaQuestions?: VivaQuestion[];
  demoChecklist?: string[];
  resources: ProjectResource[];
  createdAt?: any;
  updatedAt?: any;
}

export interface AdminUser {
  uid: string;
  email: string;
}
