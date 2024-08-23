import React from "react";

const Sidebar = ({ projects, projectId }) => {
  return (
    <div>
      {projects.map((project) => (
        <button key={project.id} onClick={() => projectId(project.id)}>
          {project.name}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
