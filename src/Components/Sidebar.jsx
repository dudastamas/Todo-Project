import React from 'react';


export default function Sidebar({projects, onGetProjectId}) {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-4">
      
        {projects.map((project) =>  
        <button className="py-2 px-4 hover:bg-gray-800 cursor-pointer rounded" key={project.id} onClick={() => onGetProjectId(project.id)}>
          {project.projectName}
        </button>
        )}
      
    </div>
  );
};

