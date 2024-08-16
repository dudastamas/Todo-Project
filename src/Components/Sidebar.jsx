import React from 'react';

const Sidebar = ({ projects, onProjectSelect }) => {
  return (
    <div>
      <h3>Projects</h3>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <button onClick={() => onProjectSelect(project.id)}>
              {project.projectName}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
