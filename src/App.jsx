import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [tasks, setTasks] = useState([]);

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );

  function addProject(newProject) {
    setProjects((prevProjectList) => [...prevProjectList, newProject]);
  }

  function handleProjectSelect(projectId) {
    setSelectedProjectId(projectId);
  }

  function addNewTask(newTask) {
    setTasks((prevNewTask) => [...prevNewTask, newTask]);
  }

  return (
    <div className="flex flex-row">
      <div className="w-1/4 bg-[#603808]">
        <Sidebar projects={projects} onProjectSelect={handleProjectSelect} />
      </div>
      <div className="flex flex-col space-y-4 w-full max-w-md mx-auto h-screen justify-center">
        <Content
          onAddProject={addProject}
          selectedProject={selectedProject}
          onAddNewTask={addNewTask}
          tasks={tasks}
        />
      </div>
    </div>
  );
};

export default App;
