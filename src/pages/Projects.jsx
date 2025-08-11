import ProjectCard from "../components/Projects/Card";
import { projects} from "../../public/data/projetsData";
import './Projects.css';

export default function Projects() {
  return (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}
