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
    <div>
      <form
        onSubmit={addNewProject}
        className="flex flex-col space-y-4 w-full max-w-md mx-auto h-screen justify-center"
      >
        <label htmlFor="text">New Project</label>
        <input type="text" ref={projectNameRef} />
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
};

export default ProjectForm;
