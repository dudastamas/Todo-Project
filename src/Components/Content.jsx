import ProjectForm from "./ProjectForm";
import TaskList from "./TaskList";

const Content = ({
  selectedProject,
  onAddProject,
  onAddNewTask,
  tasks,
  onShowAddnewProject,
  onDelete,
  editTask,
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
          onEditTask={editTask}
        />
      )}
    </>
  );
};

export default Content;
