import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function ProjectForm({onAddProject})  {

    const nameRef = useRef();
    const dateRef = useRef();
    const descriptionRef = useRef()

    
    function onhandleSubmit(e){
        e.preventDefault();
        const newProject = 
             {
                id: uuidv4(),
                name: nameRef.current.value,
                date: dateRef.current.value,
                descriptionRef: descriptionRef.current.value

            }
        
            onAddProject(newProject);
    }
     
  return(
    <form onSubmit={onhandleSubmit}>
        <div>
            <label htmlFor='projectName'>Project neve:</label>
            <input type="text" id='projectName' ref={nameRef}/>
        </div>
        <div>
            <label htmlFor='projectName'>Project neve:</label>
            <input type="date" id='projectName' ref={dateRef}/>
        </div>
        <div>
            <label htmlFor='projectName'>Project neve:</label>
            <input type="text" id='projectName' ref={descriptionRef}/>
        </div>
        <button type="submit">Küldés</button>
    </form>
  )
};


