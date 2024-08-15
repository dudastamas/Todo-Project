import Sidebar from "./Components/Sidebar";
import Contents from "./Components/Contents.jsx";

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
        <Sidebar onProjectClick={handleProjectClick} />
      </div>
      <div className="w-2/3">
        <Contents project = {content} />
      </div>
    </div>
    
  
  );
}

export default App;
