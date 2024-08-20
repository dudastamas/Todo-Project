import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  const handleProjectSelect = (projectId) => {
    setSelectedProjectId(projectId);
  };

  const handleAddTask = (projectId, newTask) => {
    setProjects(
      projects.map((project) =>
        project.id === projectId
          ? { ...project, tasks: [...project.tasks, newTask] }
          : project
      )
    );
  };

  const handleEditTask = (projectId, taskId, updatedTask) => {
    setProjects(
      projects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              tasks: project.tasks.map((task) =>
                task.id === taskId ? { ...task, ...updatedTask } : task
              ),
            }
          : project
      )
    );
  };

  const handleDeleteTask = (projectId, taskId) => {
    setProjects(
      projects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              tasks: project.tasks.filter((task) => task.id !== taskId),
            }
          : project
      )
    );
  };

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );

  return (
    <div className="flex">
      <Sidebar projects={projects} onProjectSelect={handleProjectSelect} />
      <Content
        onAddProject={handleAddProject}
        onAddTask={handleAddTask}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
        selectedProject={selectedProject}
      />
    </div>
  );
};

export default App;
