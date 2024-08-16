import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ProjectForm = ({ onAddProject }) => {
  const projectNameRef = useRef(null);
  const taskRef = useRef(null);
  const dateRef = useRef(null);

  const handleAddProject = (event) => {
    event.preventDefault();

    const newProject = {
      id: uuidv4(),
      projectName: projectNameRef.current.value,
      tasks: [
        {
          id: uuidv4(),
          taskName: taskRef.current.value,
          date: dateRef.current.value,
        }
      ],
    };

    onAddProject(newProject);

    projectNameRef.current.value = '';
    taskRef.current.value = '';
    dateRef.current.value = '';
  };

  return (
    <form onSubmit={handleAddProject}>
      <div>
        <label htmlFor="projectName">Project Name:</label>
        <input type="text" id="projectName" ref={projectNameRef} required />
      </div>
      <div>
        <label htmlFor="task">Task:</label>
        <input type="text" id="task" ref={taskRef} required />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" ref={dateRef} required />
      </div>
      <button type="submit">Add Project</button>
    </form>
  );
};

export default ProjectForm;
