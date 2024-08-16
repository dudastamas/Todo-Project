import React from 'react';

const ProjectDetails = ({ project }) => {
  return (
    <div>
      <h3>{project.projectName} Details</h3>
      <ul>
        {project.tasks.map((task) => (
          <li key={task.id}>
            <strong>Task:</strong> {task.taskName} <br />
            <strong>Date:</strong> {task.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetails;
