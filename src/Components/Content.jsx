import ProjectForm from "./ProjectForm";
import TaskList from "./TaskList";

const Content = ({ onAddProject }) => {
  return (
    <>
      <ProjectForm onAddProject={onAddProject} />
    </>
  );
};

export default Content;
