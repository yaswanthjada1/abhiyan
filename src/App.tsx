import React, { useState } from 'react';
import { ProjectProvider, useProjectContext } from './context/ProjectContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ToastContainer } from './components/ToastContainer';
import { ProjectSelectionModal } from './components/ProjectSelectionModal';
import { HomePage } from './pages/HomePage';
import { CategoriesPage } from './pages/CategoriesPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { MyProjectPage } from './pages/MyProjectPage';
import { AdminLoginPage } from './pages/AdminLoginPage';
import { AdminPanelPage } from './pages/AdminPanelPage';
import { Project } from './types/project';

const MainContent: React.FC = () => {
  const { activeTab, setActiveTab, selectedProjectCode } = useProjectContext();

  const [modalProject, setModalProject] = useState<Project | null>(null);

  const handleOpenSelectModal = (project: Project) => {
    setModalProject(project);
  };

  const handleCloseSelectModal = () => {
    setModalProject(null);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />

      <main className="main-container" style={{ flex: 1 }}>
        {(activeTab === 'home' || activeTab === 'projects') && (
          <HomePage onSelectProject={handleOpenSelectModal} />
        )}
        {activeTab === 'categories' && <CategoriesPage onSelectProject={handleOpenSelectModal} />}
        {activeTab === 'project-detail' && (
          <ProjectDetailPage
            projectCode={selectedProjectCode || 'A1'}
            onSelectProject={handleOpenSelectModal}
            onBack={() => setActiveTab('projects')}
          />
        )}
        {activeTab === 'my-project' && <MyProjectPage />}
        {activeTab === 'admin-login' && <AdminLoginPage />}
        {activeTab === 'admin' && <AdminPanelPage />}
      </main>

      <Footer />

      {/* Project Selection Modal */}
      <ProjectSelectionModal project={modalProject} onClose={handleCloseSelectModal} />

      <ToastContainer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ProjectProvider>
      <MainContent />
    </ProjectProvider>
  );
};

export default App;
