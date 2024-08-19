import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function ProjectForm({onAddProject})  {

    const projectNameRef = useRef();
    const dateRef = useRef();
    const taskRef = useRef()

    
    function onhandleSubmit(e){
        e.preventDefault();
        const newProject = 
             {
                id: uuidv4(),
                projectName: projectNameRef.current.value,
                date: dateRef.current.value,
                task: taskRef.current.value

            }
        
            onAddProject(newProject);
    
            projectNameRef.current.value="";
            dateRef.current.value="";
            taskRef.current.value="";
    
        }

     
  return(
    <form onSubmit={onhandleSubmit}>
        <div>
            <label htmlFor='projectName'>Project neve:</label>
            <input type="text" id='projectName' ref={projectNameRef}/>
        </div>
        <div>
            <label htmlFor='projectName'>Project neve:</label>
            <input type="date" id='projectName' ref={dateRef}/>
        </div>
        <div>
            <label htmlFor='projectName'>Project neve:</label>
            <input type="text" id='projectName' ref={taskRef}/>
        </div>
        <button type="submit">Küldés</button>
    </form>
  )
};


