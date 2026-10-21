import { Code2, Globe, Database, Server, Wrench } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    icon: Globe,
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "Firebase", "SQL Basics"],
  },
  {
    title: "Tools & Learning",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "TypeScript"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-heading">
        <div>
          <p className="section-label">WHAT I WORK WITH</p>
          <h2>Skills & Technologies</h2>
        </div>
        <Code2 size={25} strokeWidth={1.5} />
      </div>

      <div className="skills-grid">
        {skillGroups.map(({ title, icon: Icon, skills }) => (
          <article className="skill-card" key={title}>
            <div className="skill-card-heading">
              <Icon size={20} strokeWidth={1.7} />
              <h3>{title}</h3>
            </div>

            <div className="skill-tags">
              {skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
