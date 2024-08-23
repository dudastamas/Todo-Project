import ProjectForm from "./ProjectForm";
import TaskList from "./TaskList";

const Content = ({ project, onAddProject }) => {
  return (
    <>
      <ProjectForm onAddProject={onAddProject} />
       {project && <h2 key={project.id}>{project.name}</h2>}
    </>
  );
};

export default Content;
