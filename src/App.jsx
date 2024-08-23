import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  const handleProjectSelect = (projectId) => {
    setSelectedProjectId(projectId);
  };

  //   Végigiterál a projektek tömbjén a map() függvénnyel.
  // Ha a projekt ID egyezik a megadottal, egy új objektumot hoz létre:
  // Megtartja a projekt összes eredeti tulajdonságát (...project).
  // A tasks tömböt frissíti: megtartja az összes régi taskot (...project.tasks) és hozzáadja az újat (newTask).
  // Ha nem egyezik az ID, változatlanul hagyja a projektet.
  // Végül a setProjects() függvénnyel frissíti az állapotot az új projektek tömbjével.
  const handleAddTask = (projectId, newTask) => {
    setProjects(
      projects.map((project) =>
        project.id === projectId
          ? { ...project, tasks: [...project.tasks, newTask] }
          : project
      )
    );
  };

  //   Végigiterál a projektek tömbjén.
  // Ha a projekt ID egyezik, egy új objektumot hoz létre a projekthez:
  // Megtartja a projekt eredeti tulajdonságait (...project).
  // A tasks tömböt újra létrehozza:
  // Végigiterál a projekt taskjain.
  // Ha a task ID egyezik, frissíti a taskot az updatedTask adataival.
  // Ha nem egyezik, változatlanul hagyja a taskot.
  // Ha a projekt ID nem egyezik, változatlanul hagyja a projektet.
  // Végül frissíti a projektek állapotát az új tömbbel.
  // Ez a megközelítés biztosítja, hogy csak a megfelelő projekt megfelelő taskja frissüljön, miközben az összes többi adat változatlan marad.
  const handleEditTask = (projectId, taskId, updatedTask) => {
    setProjects(
      projects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              tasks: project.tasks.map((task) =>
                task.id === taskId ? { ...task, ...updatedTask } : task
              ),
            }
          : project
      )
    );
  };

  //   Ez a függvény egy task törlésére szolgál:
  // Végigiterál a projektek tömbjén.
  // Ha a projekt ID egyezik, egy új objektumot hoz létre a projekthez:
  // Megtartja a projekt eredeti tulajdonságait (...project).
  // A tasks tömböt újra létrehozza a filter() metódussal:
  // Csak azokat a taskokat tartja meg, amelyeknek az ID-ja nem egyezik a törlendő task ID-jával.
  // Ha a projekt ID nem egyezik, változatlanul hagyja a projektet.
  // Végül frissíti a projektek állapotát az új tömbbel.
  // Ez a megközelítés hatékonyan távolítja el a kiválasztott taskot a megfelelő projektből, miközben az összes többi projekt és task változatlan marad.
  const handleDeleteTask = (projectId, taskId) => {
    setProjects(
      projects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              tasks: project.tasks.filter((task) => task.id !== taskId),
            }
          : project
      )
    );
  };

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );

  return (
    <div className="flex">
      <Sidebar projects={projects} onProjectSelect={handleProjectSelect} />
      <Content
        onAddProject={handleAddProject}
        onAddTask={handleAddTask}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
        selectedProject={selectedProject}
      />
    </div>
  );
};

export default App;
