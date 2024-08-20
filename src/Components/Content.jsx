import React, { useState } from "react";
import ProjectForm from "./ProjectForm";
import TaskList from "./TaskList";

const Content = ({
  onAddProject,
  onAddTask,
  onEditTask,
  onDeleteTask,
  selectedProject,
}) => {
  const handleAddNewTask = (task) => {
    if (selectedProject) {
      onAddTask(selectedProject.id, task);
    }
  };

  const handleEditTask = (taskId, updatedTask) => {
    if (selectedProject) {
      onEditTask(selectedProject.id, taskId, updatedTask);
    }
  };

  const handleDeleteTask = (taskId) => {
    if (selectedProject) {
      onDeleteTask(selectedProject.id, taskId);
    }
  };

  return (
    <div className="p-4 flex-1">
      <ProjectForm onAddProject={onAddProject} />
      {selectedProject && (
        <TaskList
          project={selectedProject}
          onAddTask={handleAddNewTask}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask}
        />
      )}
    </div>
  );
};

export default Content;
