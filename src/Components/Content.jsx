import ProjectForm from "./ProjectForm";
import TaskList from "./TaskList";

const Content = ({ selectedProject, onAddProject, onAddNewTask, tasks }) => {
  return (
    <>
      <ProjectForm onAddProject={onAddProject} />
      {selectedProject ? (
        <>
          <h2 key={selectedProject.id}>{selectedProject.name}</h2>

          <TaskList
            project={selectedProject}
            onAddNewTask={onAddNewTask}
            tasks={tasks.filter(
              (task) => task.projectId === selectedProject.id
            )}
          />
        </>
      ) : (
        <p>Select a project</p>
      )}
    </>
  );
};

export default Content;
