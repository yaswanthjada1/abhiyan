import React, { createContext, useContext, useState, useEffect } from 'react';
import { Project, TeamDocument, ScreenshotMetadata, AdminUser } from '../types/project';
import { PROJECTS } from '../data/projects';
import {
  fetchDynamicTeamCounts,
  selectProjectAtomic,
  fetchTeamByReferenceId,
  updateTeamTaskProgressInFirestore,
  uploadScreenshotToFirebase,
  fetchTeamScreenshots,
  loginAdminUser,
  logoutAdminUser,
  subscribeToAdminAuth,
  fetchAllTeamsForAdmin
} from '../firebase/services';

interface ToastNotification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'danger';
  title: string;
  message: string;
}

interface ProjectContextType {
  // Static project catalog (INSTANT from projects.ts)
  projects: Project[];
  
  // Dynamic selection counts from Firebase { "A1": 2, "B3": 1 }
  teamCounts: Record<string, number>;
  refreshTeamCounts: () => Promise<void>;

  adminUser: AdminUser | null;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedProjectCode: string | null;
  setSelectedProjectCode: (code: string | null) => void;

  // Student Project Reference Access
  activeReferenceId: string | null;
  setActiveReferenceId: (refId: string | null) => void;
  activeTeam: TeamDocument | null;
  setActiveTeam: (team: TeamDocument | null) => void;
  activeProject: Project | null;
  setActiveProject: (proj: Project | null) => void;
  teamScreenshots: ScreenshotMetadata[];
  setTeamScreenshots: React.Dispatch<React.SetStateAction<ScreenshotMetadata[]>>;

  // Filters & Search (Instant Local)
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCategory: string;
  setSelectedCategory: (c: string) => void;
  selectedDifficulty: string;
  setSelectedDifficulty: (d: string) => void;

  // Actions
  selectProjectForTeam: (
    projectCode: string,
    teamData: {
      teamName: string;
      leader: { name: string; rollNumber: string; email: string; phone: string };
      members: { name: string; rollNumber: string }[];
    }
  ) => Promise<{ success: boolean; message: string; referenceId?: string }>;

  accessProjectByReferenceId: (refId: string) => Promise<boolean>;
  toggleTaskCompletion: (dayNumber: number, taskId: string) => Promise<void>;
  uploadScreenshot: (day: number, file: File, caption: string) => Promise<boolean>;

  // Admin Auth Actions
  loginAdmin: (email: string, pass: string) => Promise<boolean>;
  logoutAdmin: () => Promise<void>;

  // Admin Data Actions
  adminTeams: TeamDocument[];
  loadAdminTeams: () => Promise<void>;

  // Toast Notifications
  notifications: ToastNotification[];
  addNotification: (type: 'info' | 'success' | 'warning' | 'danger', title: string, message: string) => void;
  removeNotification: (id: string) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

const REF_STORAGE_KEY = 'mmh_active_ref_id';

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Static projects load INSTANTLY from projects.ts
  const [projects] = useState<Project[]>(PROJECTS);

  // Dynamic team counts from Firebase
  const [teamCounts, setTeamCounts] = useState<Record<string, number>>({});
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);

  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedProjectCode, setSelectedProjectCode] = useState<string | null>(null);

  // Student Reference State
  const [activeReferenceId, setActiveReferenceId] = useState<string | null>(() => {
    return localStorage.getItem(REF_STORAGE_KEY);
  });
  const [activeTeam, setActiveTeam] = useState<TeamDocument | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [teamScreenshots, setTeamScreenshots] = useState<ScreenshotMetadata[]>([]);

  // Admin Data
  const [adminTeams, setAdminTeams] = useState<TeamDocument[]>([]);

  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  // Notifications
  const [notifications, setNotifications] = useState<ToastNotification[]>([]);

  // Refresh dynamic team counts from Firebase in background
  const refreshTeamCounts = async () => {
    const counts = await fetchDynamicTeamCounts();
    setTeamCounts(counts);
  };

  useEffect(() => {
    refreshTeamCounts();
  }, []);

  // Listen for Firebase Auth changes for Admin
  useEffect(() => {
    const unsubscribe = subscribeToAdminAuth(user => {
      setAdminUser(user);
    });
    return () => unsubscribe();
  }, []);

  // Auto-restore active team if referenceId stored
  useEffect(() => {
    if (activeReferenceId && !activeTeam) {
      accessProjectByReferenceId(activeReferenceId);
    }
  }, [activeReferenceId]);

  const addNotification = (type: 'info' | 'success' | 'warning' | 'danger', title: string, message: string) => {
    const id = 'n-' + Date.now() + '-' + Math.random().toString(36).substring(2, 5);
    setNotifications(prev => [...prev, { id, type, title, message }]);
    setTimeout(() => {
      removeNotification(id);
    }, 5000);
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  // PROJECT SELECTION VIA ATOMIC FIRESTORE TRANSACTION
  const selectProjectForTeam = async (
    projectCode: string,
    teamData: {
      teamName: string;
      leader: { name: string; rollNumber: string; email: string; phone: string };
      members: { name: string; rollNumber: string }[];
    }
  ) => {
    const res = await selectProjectAtomic(projectCode, teamData);

    if (res.success && res.referenceId) {
      addNotification('success', 'Project Registered!', `Team ${teamData.teamName} assigned Reference ID: ${res.referenceId}`);
      setActiveReferenceId(res.referenceId);
      localStorage.setItem(REF_STORAGE_KEY, res.referenceId);

      // Refresh dynamic team counts from Firebase
      await refreshTeamCounts();

      // Load team workspace
      await accessProjectByReferenceId(res.referenceId);
    } else {
      addNotification('danger', 'Selection Failed', res.message);
    }

    return res;
  };

  // ACCESS TEAM WORKSPACE BY REFERENCE ID
  const accessProjectByReferenceId = async (refId: string): Promise<boolean> => {
    const result = await fetchTeamByReferenceId(refId);

    if (result) {
      setActiveTeam(result.team);
      setActiveProject(result.project);
      setActiveReferenceId(result.team.referenceId);
      localStorage.setItem(REF_STORAGE_KEY, result.team.referenceId);

      // Load team screenshots from Firebase Storage
      const scrs = await fetchTeamScreenshots(result.team.teamId);
      setTeamScreenshots(scrs);
      return true;
    } else {
      addNotification('warning', 'Invalid Reference ID', `No registered team found with Reference ID "${refId}".`);
      return false;
    }
  };

  // TOGGLE TASK COMPLETION
  const toggleTaskCompletion = async (dayNumber: number, taskId: string) => {
    if (!activeTeam || !activeProject) return;

    const currentCompleted = { ...(activeTeam.completedTasks || {}) };
    const newStatus = !currentCompleted[taskId];
    currentCompleted[taskId] = newStatus;

    let totalTasksCount = 0;
    const guide = activeProject.projectGuide;

    if (guide) {
      [guide.day1, guide.day2, guide.day3, guide.day4, guide.day5].forEach(d => {
        totalTasksCount += d.tasks.length;
      });
    } else {
      const dailyTasks = activeProject.dailyTasks ?? [];
      dailyTasks.forEach(d => {
        totalTasksCount += d.tasks.length;
      });
    }

    let doneCount = 0;
    Object.values(currentCompleted).forEach(val => {
      if (val) doneCount++;
    });

    const newProgressPct = totalTasksCount > 0 ? Math.round((doneCount / totalTasksCount) * 100) : 0;
    const newDay = Math.min(5, Math.max(1, dayNumber));

    const updatedTeam: TeamDocument = {
      ...activeTeam,
      completedTasks: currentCompleted,
      progress: newProgressPct,
      currentDay: newDay
    };

    setActiveTeam(updatedTeam);

    // Persist in Firestore
    await updateTeamTaskProgressInFirestore(activeTeam.teamId, currentCompleted, newDay, newProgressPct);
    addNotification('info', 'Task Updated', newStatus ? 'Task marked complete.' : 'Task unchecked.');
  };

  // UPLOAD SCREENSHOT TO FIREBASE STORAGE
  const uploadScreenshot = async (day: number, file: File, caption: string): Promise<boolean> => {
    if (!activeTeam || !activeProject) {
      addNotification('warning', 'Access Required', 'Please open your project using your Reference ID first.');
      return false;
    }

    const scrMeta = await uploadScreenshotToFirebase(
      activeTeam.teamId,
      activeProject.projectCode,
      day,
      file,
      caption,
      activeTeam.leader.name
    );

    if (scrMeta) {
      setTeamScreenshots(prev => [scrMeta, ...prev]);
      addNotification('success', 'Screenshot Uploaded', `Screenshot saved successfully for Day ${day}.`);
      return true;
    } else {
      addNotification('danger', 'Upload Failed', 'Could not upload screenshot. Please try again.');
      return false;
    }
  };

  // ADMIN AUTHENTICATION
  const loginAdmin = async (email: string, pass: string): Promise<boolean> => {
    try {
      const admin = await loginAdminUser(email, pass);
      setAdminUser(admin);
      addNotification('success', 'Admin Sign In', `Authenticated as ${email}`);
      return true;
    } catch (err: any) {
      addNotification('danger', 'Login Failed', err.message || 'Invalid admin credentials.');
      return false;
    }
  };

  const logoutAdmin = async () => {
    await logoutAdminUser();
    setAdminUser(null);
    addNotification('info', 'Signed Out', 'Admin logged out.');
  };

  const loadAdminTeams = async () => {
    const teams = await fetchAllTeamsForAdmin();
    setAdminTeams(teams);
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        teamCounts,
        refreshTeamCounts,
        adminUser,
        activeTab,
        setActiveTab,
        selectedProjectCode,
        setSelectedProjectCode,
        activeReferenceId,
        setActiveReferenceId,
        activeTeam,
        setActiveTeam,
        activeProject,
        setActiveProject,
        teamScreenshots,
        setTeamScreenshots,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        selectedDifficulty,
        setSelectedDifficulty,
        selectProjectForTeam,
        accessProjectByReferenceId,
        toggleTaskCompletion,
        uploadScreenshot,
        loginAdmin,
        logoutAdmin,
        adminTeams,
        loadAdminTeams,
        notifications,
        addNotification,
        removeNotification
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProjectContext must be used within a ProjectProvider');
  }
  return context;
};
