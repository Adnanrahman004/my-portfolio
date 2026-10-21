import { ArrowUpRight, Code2 } from "lucide-react";

const projects = [
  {
    number: "01",
    name: "TaskLumo",
    category: "Rewards Platform",
    description:
      "A rewards platform concept where users can complete tasks, earn coins, and track their rewards.",
    technologies: ["React", "JavaScript", "Firebase"],
    color: "project-green",
  },
  {
    number: "02",
    name: "AnimeVibes",
    category: "Anime Website",
    description:
      "An anime-inspired website concept with a clean interface for discovering anime content.",
    technologies: ["HTML", "CSS", "JavaScript"],
    color: "project-cream",
  },
  {
    number: "03",
    name: "MediConnect",
    category: "Healthcare Platform",
    description:
      "A healthcare platform concept designed to make medical information and services easier to access.",
    technologies: ["React", "Node.js", "MongoDB"],
    color: "project-sage",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-heading">
        <div>
          <p className="section-label">MY RECENT WORK</p>
          <h2>Featured Projects</h2>
        </div>

        <span className="projects-count">03 Projects</span>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article
            className={`project-card ${project.color}`}
            key={project.number}
          >
            <div className="project-top">
              <span className="project-number">{project.number}</span>
              <ArrowUpRight size={21} />
            </div>

            <div className="project-illustration">
              <Code2 size={38} strokeWidth={1.4} />
            </div>

            <p className="project-category">{project.category}</p>
            <h3>{project.name}</h3>
            <p className="project-description">{project.description}</p>

            <div className="project-tags">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
