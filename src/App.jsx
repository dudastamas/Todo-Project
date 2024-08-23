import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content";

const App = () => {
  const [projects, setProjects] = useState([]);

  function addProject(newProject) {
    setProjects((prevProjectList) => [...prevProjectList, newProject]);
  }

  return (
    <div>
      <div>
        <Sidebar projects={projects} />
      </div>
      <div>
        <Content onAddProject={addProject} />
      </div>
    </div>
  );
};

export default App;
