import React from 'react';
import ProjectForm from './ProjectForm';
import ProjectDetails from './ProjectDetails';

const Content = ({ onAddProject, selectedProject }) => {
  return (
    <div>
      <ProjectForm onAddProject={onAddProject} />
      {selectedProject ? (
        <ProjectDetails project={selectedProject} />
      ) : (
        <p>Please select a project to view its details.</p>
      )}
    </div>
  );
};

export default Content;
