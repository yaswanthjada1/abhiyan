import * as XLSX from 'xlsx';
import { Project, TeamDocument } from '../types/project';

export async function exportAdminDataToExcel(
  projects: Project[],
  teams: TeamDocument[],
  teamCounts: Record<string, number>
) {
  const wb = XLSX.utils.book_new();
  const dateStr = new Date().toISOString().split('T')[0];

  // 1. MASTER SHEET: ALL TEAM DATA (One row = one team with complete combined info)
  const masterData = teams.map((t) => {
    const project = projects.find((p) => p.projectCode === t.projectId);
    const memberCount = (t.members?.length || 0) + 1;
    const isCompleted = (t.progress || 0) >= 100;

    const memberNames = (t.members || []).map(m => m.name).join(', ');
    const memberRolls = (t.members || []).map(m => m.rollNumber).join(', ');

    return {
      'Team ID': t.teamId,
      'Team Name': t.teamName,
      'Team Reference': t.referenceId,
      'Leader Name': t.leader?.name || '',
      'Leader Roll Number': t.leader?.rollNumber || '',
      'Leader Phone': t.leader?.phone || '',
      'Leader Email': t.leader?.email || '',
      'Member Count': memberCount,
      'Member Names': memberNames,
      'Member Roll Numbers': memberRolls,
      'Project Code': t.projectId,
      'Project Title': project?.title || t.projectId,
      'Project Category': project?.category || 'N/A',
      'Selected At': t.createdAt ? (t.createdAt.seconds ? new Date(t.createdAt.seconds * 1000).toLocaleString() : String(t.createdAt)) : dateStr,
      'Overall Progress %': `${t.progress || 0}%`,
      'Current Day': `Day ${t.currentDay || 1}`,
      'Status': isCompleted ? 'Completed' : 'In Progress',
    };
  });
  const wsMaster = XLSX.utils.json_to_sheet(masterData.length > 0 ? masterData : [{ 'Info': 'No teams registered yet' }]);
  XLSX.utils.book_append_sheet(wb, wsMaster, 'All Team Data');

  // 2. SHEET: TEAMS
  const teamsData = teams.map((t) => {
    const project = projects.find((p) => p.projectCode === t.projectId);
    const memberCount = (t.members?.length || 0) + 1;
    const isCompleted = (t.progress || 0) >= 100;

    const memberNames = (t.members || []).map(m => m.name).join(', ');
    const memberRolls = (t.members || []).map(m => m.rollNumber).join(', ');

    return {
      'Team ID': t.teamId,
      'Team Name': t.teamName,
      'Project Code': t.projectId,
      'Project Title': project?.title || t.projectId,
      'Project Category': project?.category || 'N/A',
      'Reference ID': t.referenceId,
      'Leader Name': t.leader?.name || '',
      'Leader Roll Number': t.leader?.rollNumber || '',
      'Leader Phone Number': t.leader?.phone || '',
      'Leader Email': t.leader?.email || '',
      'Member Count': memberCount,
      'Member Names': memberNames,
      'Member Roll Numbers': memberRolls,
      'Selection Date/Time': t.createdAt ? (t.createdAt.seconds ? new Date(t.createdAt.seconds * 1000).toLocaleString() : String(t.createdAt)) : dateStr,
      'Overall Progress': `${t.progress || 0}%`,
      'Current Day': `Day ${t.currentDay || 1}`,
      'Team Status': isCompleted ? 'Completed' : 'In Progress',
    };
  });
  const wsTeams = XLSX.utils.json_to_sheet(teamsData.length > 0 ? teamsData : [{ 'Info': 'No teams registered yet' }]);
  XLSX.utils.book_append_sheet(wb, wsTeams, 'Teams');

  // 3. SHEET: TEAM MEMBERS (One row per student)
  const membersData: any[] = [];
  teams.forEach((t) => {
    // Add Leader
    if (t.leader) {
      const compositeKey = `abh_identity_${(t.referenceId || '').replace(/[^a-zA-Z0-9]/g, '')}_${(t.leader.rollNumber || '').replace(/[^a-zA-Z0-9]/g, '')}`;
      let personId = '';
      try {
        const cached = localStorage.getItem(compositeKey);
        if (cached) {
          const parsed = JSON.parse(cached);
          personId = parsed.personId || '';
        }
      } catch (e) {}

      membersData.push({
        'Team ID': t.teamId,
        'Team Name': t.teamName,
        'Member Name': t.leader.name,
        'Roll Number': t.leader.rollNumber,
        'Phone Number': t.leader.phone || '',
        'Email': t.leader.email || '',
        'Role': 'Team Leader',
        'Person ID': personId || 'N/A',
        'Joined At': t.createdAt ? (t.createdAt.seconds ? new Date(t.createdAt.seconds * 1000).toLocaleString() : String(t.createdAt)) : dateStr
      });
    }

    // Add Members
    (t.members || []).forEach((m) => {
      const compositeKey = `abh_identity_${(t.referenceId || '').replace(/[^a-zA-Z0-9]/g, '')}_${(m.rollNumber || '').replace(/[^a-zA-Z0-9]/g, '')}`;
      let personId = '';
      try {
        const cached = localStorage.getItem(compositeKey);
        if (cached) {
          const parsed = JSON.parse(cached);
          personId = parsed.personId || '';
        }
      } catch (e) {}

      membersData.push({
        'Team ID': t.teamId,
        'Team Name': t.teamName,
        'Member Name': m.name,
        'Roll Number': m.rollNumber,
        'Phone Number': (m as any).phone || '',
        'Email': (m as any).email || '',
        'Role': 'Team Member',
        'Person ID': personId || 'N/A',
        'Joined At': t.createdAt ? (t.createdAt.seconds ? new Date(t.createdAt.seconds * 1000).toLocaleString() : String(t.createdAt)) : dateStr
      });
    });
  });
  const wsMembers = XLSX.utils.json_to_sheet(membersData.length > 0 ? membersData : [{ 'Info': 'No team members found' }]);
  XLSX.utils.book_append_sheet(wb, wsMembers, 'Team Members');

  // 4. SHEET: PROJECT SELECTIONS (Project status + actual team registrations per project)
  const selectionsData: any[] = [];
  projects.forEach((p) => {
    const selectedCount = teamCounts[p.projectCode] || 0;
    const isFull = selectedCount >= 5;
    const projectTeams = teams.filter((t) => t.projectId === p.projectCode);

    if (projectTeams.length === 0) {
      selectionsData.push({
        'Project Code': p.projectCode,
        'Project Title': p.title,
        'Category': p.category,
        'Teams Selected': selectedCount,
        'Max Capacity': 5,
        'Availability': `${5 - selectedCount} remaining`,
        'Team ID': 'N/A',
        'Team Name': 'No teams yet',
        'Leader': 'N/A',
        'Member Count': 0,
        'Selected At': 'N/A'
      });
    } else {
      projectTeams.forEach((t) => {
        const memberCount = (t.members?.length || 0) + 1;
        selectionsData.push({
          'Project Code': p.projectCode,
          'Project Title': p.title,
          'Category': p.category,
          'Teams Selected': selectedCount,
          'Max Capacity': 5,
          'Availability': isFull ? 'Full (0 remaining)' : `${5 - selectedCount} remaining`,
          'Team ID': t.teamId,
          'Team Name': t.teamName,
          'Leader': t.leader?.name || '',
          'Member Count': memberCount,
          'Selected At': t.createdAt ? (t.createdAt.seconds ? new Date(t.createdAt.seconds * 1000).toLocaleString() : String(t.createdAt)) : dateStr
        });
      });
    }
  });
  const wsSelections = XLSX.utils.json_to_sheet(selectionsData);
  XLSX.utils.book_append_sheet(wb, wsSelections, 'Project Selections');

  // 5. SHEET: PROGRESS
  const progressData = teams.map((t) => {
    const completedTasks = t.completedTasks || {};
    const day1Tasks = Object.keys(completedTasks).filter((k) => k.includes('-d1-') && completedTasks[k]).length;
    const day2Tasks = Object.keys(completedTasks).filter((k) => k.includes('-d2-') && completedTasks[k]).length;
    const day3Tasks = Object.keys(completedTasks).filter((k) => k.includes('-d3-') && completedTasks[k]).length;
    const day4Tasks = Object.keys(completedTasks).filter((k) => k.includes('-d4-') && completedTasks[k]).length;
    const day5Tasks = Object.keys(completedTasks).filter((k) => k.includes('-d5-') && completedTasks[k]).length;

    return {
      'Team ID': t.teamId,
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

  // 6. SHEET: SCREENSHOTS
  const screenshotsData: any[] = [];
  teams.forEach((t) => {
    (t.screenshots || []).forEach((s) => {
      screenshotsData.push({
        'Team ID': t.teamId,
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

  // Generate and download XLSX file with standardized filename
  const fileName = `abhyan-data-${dateStr}.xlsx`;
  XLSX.writeFile(wb, fileName);
}
