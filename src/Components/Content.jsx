import React, { useState } from 'react';
import ProjectForm from './ProjectForm';
import ProjectDetails from './ProjectDetails';

export default function Content({projects, onAddProject}) {
    return (
        <div className="flex-1 bg-white h-screen p-8">
          <ProjectForm onAddProject={onAddProject}/>
          {projects.map((project, index)=>(<div key={index}>
            <p>Task: {project.task}</p>
            <p>Date: {project.date}</p>
          </div>))}
        </div>
      );
  
};


