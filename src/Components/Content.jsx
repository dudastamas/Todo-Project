import React, { useState } from 'react';
import ProjectForm from './ProjectForm';
import ProjectDetails from './ProjectDetails';

export default function Content() {
    return (
        <div className="flex-1 bg-white h-screen p-8">
          <ProjectForm />
        </div>
      );
  
};


