import ProjectForm from "./ProjectForm";
import TaskList from "./TaskList";

const Content = ({
  selectedProject,
  onAddProject,
  onAddNewTask,
  tasks,
  onShowAddnewProject,
  onDelete,
}) => {
  return (
    <>
      {!selectedProject || onShowAddnewProject ? (
        <ProjectForm onAddProject={onAddProject} />
      ) : (
        <TaskList
          selectedProject={selectedProject}
          onAddNewTask={onAddNewTask}
          tasks={tasks.filter((task) => task.projectId === selectedProject.id)}
          onDelete={onDelete}
        />
      )}
    </>
  );
};

export default Content;
