import React from "react";

const Sidebar = ({
  projects,
  onProjectSelect,
  onShowAddnewProject,
  textButton,
}) => {
  return (
    <div className="h-screen justify-center bg-[#432818]">
      <div className="h-36  flex justify-center">
        <button
          className=" px-4 my-12 text-[#e7ecef]  bg-[#936639] hover:bg-[#99582a]
          text-lg rounded-md justify-center"
          onClick={() => onShowAddnewProject()}
        >
          {textButton}
        </button>
      </div>
      <div>
        <ul className="flex flex-col space-y-4 items-center ">
          {projects.map((project) => (
            <li
              className="space-y-4 flex flex-col items-center"
              key={project.id}
            >
              <h3 className="text-white text-3xl mb-8">Projects:</h3>
              <button
                className="text-[#e7ecef]  bg-[#936639] py-2 px-6 hover:bg-[#99582a]
          text-lg rounded-md"
                key={project.id}
                onClick={() => onProjectSelect(project.id)}
              >
                {project.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
