import React from 'react';

const Sidebar = ({ projects, onProjectSelect }) => {
  return (
    <>
      <h3 className="text-3xl text-gray-400   mb-4">Projects:</h3>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <button className="bg-[#6D4C41] text-gray-400 px-4 py-2 rounded hover:bg-[#8D6E63]" onClick={() => onProjectSelect(project.id)}>
              {project.projectName}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Sidebar;