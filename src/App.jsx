import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import Content from './Components/Content';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleProjectSelect = (projectId) => {
    setSelectedProjectId(projectId);
  };

  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  const selectedProject = projects.find(project => project.id === selectedProjectId);

  return (
    <div style={{ display: 'flex' }}>
      <div className="w-1/3 bg-[#4B2E2E] h-screen flex flex-col justify-center items-center p-4">
        <Sidebar projects={projects} onProjectSelect={handleProjectSelect} />
      </div>
      <div>
         <Content 
        onAddProject={handleAddProject} 
        selectedProject={selectedProject} 
      />
      </div>
     
    </div>
  );
};

export default App;
