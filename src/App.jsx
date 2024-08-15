import Sidebar from "./Components/Sidebar";
import Contents from "./Components/Contents.jsx";
import { PROJECTS } from "./project";
import { useState } from "react";

function App() {

  let projectContent = <p>Welcome!!</p>

  const [content, setContent] = useState();

 function handleProjectClick(project){
  setContent(project)
 }



  return (
    
    <div className="flex">
         <div className="w-1/3 bg-[#4B2E2E] h-screen flex flex-col items-center justify-center">
        {PROJECTS.map((project) => (
          <button
            key={project.id}
            className="bg-[#6B4E4E] text-white py-2 px-4 rounded-lg mb-2 hover:bg-[#8B6E6E] transition-colors duration-300"
            onClick={() => handleProjectClick(project)}
          >
            {project.name}
          </button>
        ))}
      </div>
      <div className="w-2/3">
        <Contents project = {content} />
      </div>
    </div>
    
  
  );
}

export default App;
