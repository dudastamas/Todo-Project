import React from "react";

const Sidebar = ({ projects, onProjectSelect }) => {
  return (
    <div className="flex flex-col space-y-4 w-full max-w-md mx-auto h-screen justify-center">
      {projects.map((project) => (
        <button
          className=""
          key={project.id}
          onClick={() => onProjectSelect(project.id)}
        >
          {project.name}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
