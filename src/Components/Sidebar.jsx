
import { PROJECTS } from "../project";

export default function Sidebar({ onProjectClick }) {
    return (
      <>
        {PROJECTS.map((project) => (
          <button
            key={project.id}
            className="bg-[#6B4E4E] text-white py-2 px-4 rounded-lg mb-2 hover:bg-[#8B6E6E] transition-colors duration-300"
            onClick={() => onProjectClick(project)}
          >
            {project.name}
          </button>
        ))}
      </>
    );
  }