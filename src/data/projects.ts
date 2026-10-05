import { Project } from '../types/project';
import { INITIAL_PROJECTS } from './projectsData';
import { generateFiveDayGuideForProject } from './fiveDayGuideGenerator';

export const PROJECTS: Project[] = INITIAL_PROJECTS.map(p => {
  const guide = generateFiveDayGuideForProject(p);

  return {
    ...p,
    estimatedDuration: 5,
    minimumTeamSize: p.minimumTeamSize || 2,
    maximumTeamSize: p.maximumTeamSize || 5,
    projectGuide: guide,
    vivaQuestions: guide.vivaQuestions,
    demoChecklist: guide.demoChecklist,
    prompts: guide.day2.prompts || p.prompts
  };
});

export default PROJECTS;
