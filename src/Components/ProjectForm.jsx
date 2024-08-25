import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const ProjectForm = ({ onAddProject }) => {
  const projectNameRef = useRef();

  const addNewProject = (e) => {
    e.preventDefault();

    const newProject = {
      id: uuidv4(),
      name: projectNameRef.current.value,
    };
    onAddProject(newProject);
    projectNameRef.current.value = "";
  };

  return (
    <div className="h-60 bg-[#7f4f24] p-4 flex items-center justify-center">
      <form
        onSubmit={addNewProject}
        className="flex flex-col space-y-6 w-full max-w-md"
      >
        <label className="mx-auto text-white text-xl font-bold" htmlFor="text">
          Project Name
        </label>
        <input
          className="rounded-lg h-10"
          type="text"
          ref={projectNameRef}
          required
        />
        <button
          type="submit"
          className="mx-auto text-white text-lg bg-[#432818] px-4  py-2 rounded-md "
        >
          Add Project
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;
