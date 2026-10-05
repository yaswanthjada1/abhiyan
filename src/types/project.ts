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
  currentDay: number;  // 1 - 10
  completedTasks: Record<string, boolean>; // e.g. { "d1-task1": true }
  createdAt?: any;
  updatedAt?: any;
  screenshots?: ScreenshotMetadata[];
}

export interface ScreenshotMetadata {
  id: string;
  teamId: string;
  projectId: string;
  day: number;
  taskId?: string;
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
}

export interface DailyTask {
  day: number;
  title: string;
  objectives: string[];
  tasks: TaskItem[];
  expectedOutput: string;
}

export type PromptCategory =
  | 'Understanding'
  | 'Mathematics'
  | 'Coding'
  | 'Debugging'
  | 'Testing'
  | 'Documentation'
  | 'PPT'
  | 'Viva';

export interface ProjectPrompt {
  id: string;
  title: string;
  category: PromptCategory;
  promptText: string;
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
  estimatedDuration: number; // 10
  requiredSkills: string[];
  recommendedTechStack: {
    frontend: string;
    backend: string;
    math: string;
    charts: string;
    db: string;
  };
  selectionLimit: number;    // 3
  selectedTeamCount: number; // 0, 1, 2, 3
  status: 'available' | 'full';
  implementationGuide: ImplementationStep[];
  dailyTasks: DailyTask[];
  prompts: ProjectPrompt[];
  resources: ProjectResource[];
  createdAt?: any;
  updatedAt?: any;
}

export interface AdminUser {
  uid: string;
  email: string;
}
