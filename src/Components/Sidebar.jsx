import React from "react";

const Sidebar = ({
  projects,
  onProjectSelect,
  onShowAddnewProject,
  textButton,
}) => {
  return (
    <div>
      <div className="h-36 bg-[#FAFAF9] flex justify-center">
        <button
          className=" px-4 my-12 text-[#e7ecef]  bg-[#936639] hover:bg-[#99582a]
          text-lg rounded-md justify-center"
          onClick={() => onShowAddnewProject()}
        >
          {textButton}
        </button>
      </div>
      <div className="flex flex-col space-y-4 w-full max-w-md mx-auto h-screen justify-center bg-[#432818]">
        {projects.map((project) => (
          <button
            className="text-[#e7ecef] mx-20 bg-[#936639] py-2 hover:bg-[#99582a]
          text-lg rounded-md"
            key={project.id}
            onClick={() => onProjectSelect(project.id)}
          >
            {project.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
