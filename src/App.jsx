import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import Content from './Components/Content';

const App = () => {

  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  let foundedProject = projects.find(project => project.id === selectedProjectId)


  function handleProjectId (getProjectId){
    setSelectedProjectId(getProjectId);
  }

  function handleProjects (newProject){
    setProjects((prevProjects => 
      [...prevProjects, newProject]
    ))
  }
  return(
    <div className='flex'>
      <Sidebar  projects={projects} onGetProjectId={handleProjectId}/>
      <Content project={foundedProject} onAddProject={handleProjects}/>

    </div>
    
  )

};

export default App;
