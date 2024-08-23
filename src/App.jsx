import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [getProject, setGetProject] = useState();

  function addProject(newProject) {
    setProjects((prevProjectList) => [...prevProjectList, newProject]);
  }

  function handleProjectId(projectId) {
    setGetProject(projectId);
  }

  return (
    <div className="flex flex-row">
      <div className="w-1/4 bg-[#603808]">
        <Sidebar projects={projects} projectId={handleProjectId} />
      </div>
      <div className="flex flex-col space-y-4 w-full max-w-md mx-auto h-screen justify-center">
        <Content onAddProject={addProject} />
      </div>
    </div>
  );
};

export default App;
