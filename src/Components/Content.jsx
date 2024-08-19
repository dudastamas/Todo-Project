import React, { useState } from 'react';
import ProjectForm from './ProjectForm';
import ProjectDetails from './ProjectDetails';

export default function Content({project, onAddProject,  }) {

  
    return (
        <div className="flex-1 bg-white h-screen p-8">
          <ProjectForm onAddProject={onAddProject}/>
          {project &&(
            <div>
            <p>Task: {project.task}</p>
            <p>Date: {project.date}</p>
          </div>)}
        </div>
      );
  
};


