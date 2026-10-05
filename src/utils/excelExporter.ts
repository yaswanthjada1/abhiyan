import * as XLSX from 'xlsx';
import { Project, TeamDocument } from '../types/project';
import { fetchTeamNotes } from '../firebase/services';

export async function exportAdminDataToExcel(
  projects: Project[],
  teams: TeamDocument[],
  teamCounts: Record<string, number>
) {
  const wb = XLSX.utils.book_new();
  const dateStr = new Date().toISOString().split('T')[0];

  // 1. SHEET 1: TEAMS
  const teamsData = teams.map((t) => {
    const project = projects.find((p) => p.projectCode === t.projectId);
    const memberCount = (t.members?.length || 0) + 1;
    const isCompleted = (t.progress || 0) >= 100;

    return {
      'Reference ID': t.referenceId,
      'Team Name': t.teamName,
      'Project Code': t.projectId,
      'Project Name': project?.title || t.projectId,
      'Team Leader': t.leader?.name || '',
      'Leader Roll Number': t.leader?.rollNumber || '',
      'Leader Email': t.leader?.email || '',
      'Leader Phone': t.leader?.phone || '',
      'Team Size': memberCount,
      'Selection Date': t.createdAt ? new Date(t.createdAt.seconds * 1000).toLocaleDateString() : dateStr,
      'Progress %': `${t.progress || 0}%`,
      'Current Day': `Day ${t.currentDay || 1}`,
      'Status': isCompleted ? 'Completed' : 'In Progress',
    };
  });
  const wsTeams = XLSX.utils.json_to_sheet(teamsData.length > 0 ? teamsData : [{ 'Info': 'No teams registered yet' }]);
  XLSX.utils.book_append_sheet(wb, wsTeams, 'Teams');

  // 2. SHEET 2: TEAM MEMBERS
  const membersData: any[] = [];
  teams.forEach((t) => {
    // Add Leader
    if (t.leader) {
      membersData.push({
        'Reference ID': t.referenceId,
        'Team Name': t.teamName,
        'Member Name': t.leader.name,
        'Roll Number': t.leader.rollNumber,
        'Role': 'Team Leader',
      });
    }
    // Add Members
    (t.members || []).forEach((m) => {
      membersData.push({
        'Reference ID': t.referenceId,
        'Team Name': t.teamName,
        'Member Name': m.name,
        'Roll Number': m.rollNumber,
        'Role': 'Team Member',
      });
    });
  });
  const wsMembers = XLSX.utils.json_to_sheet(membersData.length > 0 ? membersData : [{ 'Info': 'No team members found' }]);
  XLSX.utils.book_append_sheet(wb, wsMembers, 'Team Members');

  // 3. SHEET 3: PROJECT SELECTIONS
  const selectionsData = projects.map((p) => {
    const selectedCount = teamCounts[p.projectCode] || 0;
    const isFull = selectedCount >= 3;

    return {
      'Project Code': p.projectCode,
      'Project Title': p.title,
      'Category': p.category,
      'Teams Selected': selectedCount,
      'Max Capacity': 3,
      'Availability': isFull ? 'Full (0 remaining)' : `${3 - selectedCount} remaining`,
    };
  });
  const wsSelections = XLSX.utils.json_to_sheet(selectionsData);
  XLSX.utils.book_append_sheet(wb, wsSelections, 'Project Selections');

  // 4. SHEET 4: PROGRESS
  const progressData = teams.map((t) => {
    const completedTasks = t.completedTasks || {};
    const day1Tasks = Object.keys(completedTasks).filter((k) => k.includes('-d1-') && completedTasks[k]).length;
    const day2Tasks = Object.keys(completedTasks).filter((k) => k.includes('-d2-') && completedTasks[k]).length;
    const day3Tasks = Object.keys(completedTasks).filter((k) => k.includes('-d3-') && completedTasks[k]).length;
    const day4Tasks = Object.keys(completedTasks).filter((k) => k.includes('-d4-') && completedTasks[k]).length;
    const day5Tasks = Object.keys(completedTasks).filter((k) => k.includes('-d5-') && completedTasks[k]).length;

    return {
      'Reference ID': t.referenceId,
      'Team Name': t.teamName,
      'Project Code': t.projectId,
      'Day 1 Tasks Completed': day1Tasks,
      'Day 2 Tasks Completed': day2Tasks,
      'Day 3 Tasks Completed': day3Tasks,
      'Day 4 Tasks Completed': day4Tasks,
      'Day 5 Tasks Completed': day5Tasks,
      'Current Day': t.currentDay || 1,
      'Overall Progress %': `${t.progress || 0}%`,
    };
  });
  const wsProgress = XLSX.utils.json_to_sheet(progressData.length > 0 ? progressData : [{ 'Info': 'No progress records found' }]);
  XLSX.utils.book_append_sheet(wb, wsProgress, 'Progress');

  // 5. SHEET 5: SCREENSHOTS
  const screenshotsData: any[] = [];
  teams.forEach((t) => {
    (t.screenshots || []).forEach((s) => {
      screenshotsData.push({
        'Reference ID': t.referenceId,
        'Team Name': t.teamName,
        'Project Code': t.projectId,
        'Day': `Day ${s.day}`,
        'Caption': s.caption || '',
        'Uploaded By': s.uploaderName || '',
        'Upload Date': s.uploadedAt || '',
        'Download URL': s.downloadUrl || '',
      });
    });
  });
  const wsScreenshots = XLSX.utils.json_to_sheet(screenshotsData.length > 0 ? screenshotsData : [{ 'Info': 'No screenshots uploaded yet' }]);
  XLSX.utils.book_append_sheet(wb, wsScreenshots, 'Screenshots');

  // Generate and download XLSX file
  const fileName = `project-hub-data-${dateStr}.xlsx`;
  XLSX.writeFile(wb, fileName);
}
