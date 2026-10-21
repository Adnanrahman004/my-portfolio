import { BriefcaseBusiness, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "education",
    title: "B.Tech in Computer Science",
    organization: "Arka Jain University",
    period: "Current",
    description:
      "Learning computer science fundamentals, programming, and software development.",
  },
  {
    type: "internship",
    title: "Internship Experience",
    organization: "HYDROKRIMP",
    period: "Internship",
    description:
      "Gained practical workplace exposure and learned about industrial hose assembly operations.",
  },
  {
    type: "learning",
    title: "Full Stack Development",
    organization: "Personal Projects",
    period: "Ongoing",
    description:
      "Practising React, JavaScript, Node.js, Express, and database fundamentals through projects.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <p className="section-label">MY JOURNEY</p>
      <h2>Experience & Education</h2>

      <div className="experience-list">
        {experiences.map((item) => {
          const Icon =
            item.type === "education" ? GraduationCap : BriefcaseBusiness;

          return (
            <article className="experience-item" key={item.title}>
              <div className="experience-icon">
                <Icon size={21} strokeWidth={1.7} />
              </div>

              <div className="experience-content">
                <span className="experience-period">{item.period}</span>
                <h3>{item.title}</h3>
                <p className="experience-organization">{item.organization}</p>
                <p className="experience-description">{item.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
