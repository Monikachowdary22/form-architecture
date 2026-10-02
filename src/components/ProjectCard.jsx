import Image from "./Image";
import Arrow from "./Arrow";
import Reveal from "./Reveal";

export default function ProjectCard({ project, onOpen, className = "" }) {
  return (
    <Reveal className={`project-card ${className}`}>
      <button
        className="project-button"
        onClick={() => onOpen(project)}
        aria-label={`View ${project.title}`}
      >
        <div className="project-image">
          <Image src={project.image} alt={project.alt} />
          <span className="project-number">{project.number} / FORM</span>
          <span className="project-open"><Arrow diagonal /></span>
        </div>

        <div className="project-info">
          <div>
            <h3>{project.title}</h3>
            <p>{project.location}</p>
          </div>
          <span className="project-year">{project.year}</span>
        </div>
      </button>
    </Reveal>
  );
}
