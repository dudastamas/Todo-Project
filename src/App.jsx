import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState();

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );

  function addProject(newProject) {
    setProjects((prevProjectList) => [...prevProjectList, newProject]);
  }

  function handleProjectSelect(projectId) {
    setSelectedProjectId(projectId);
    setShowProjectForm(false);
  }

  function addNewTask(newTask) {
    setTasks((prevNewTask) => [...prevNewTask, newTask]);
  }

  function handleShowProjectForm() {
    setShowProjectForm(true);
  }

  function handleDeleteTask(taskId) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }

  function editTask(taskId, updateTask) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, ...updateTask } : task
      )
    );
  }

  return (
    <div className="flex flex-row">
      <div className="w-1/4 ">
        <Sidebar
          projects={projects}
          onProjectSelect={handleProjectSelect}
          textButton="Add new Project"
          onShowAddnewProject={handleShowProjectForm}
        />
      </div>
      <div className="flex flex-col space-y-4 w-full max-w-md mx-auto h-screen justify-center">
        <Content
          onAddProject={addProject}
          selectedProject={selectedProject}
          onAddNewTask={addNewTask}
          tasks={tasks}
          onShowAddnewProject={showProjectForm}
          onDelete={handleDeleteTask}
          editTask={editTask}
        />
      </div>
    </div>
  );
};

export default App;
