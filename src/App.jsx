import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import Content from './Components/Content';

const App = () => {

  const [projects, setProjects] = useState([])

  function handleProjects (newProject){
    setProjects((prevProject => 
      [...prevProject, newProject]
    ))
  }
  return(
    <div className='flex'>
      <Sidebar  projects={projects}/>
      <Content projects={projects} onAddProject={handleProjects}/>
    </div>
    
  )

};

export default App;
