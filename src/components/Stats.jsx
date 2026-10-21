import { Code2, FolderCheck, Coffee, GraduationCap } from "lucide-react";

const stats = [
  {
    icon: Code2,
    number: "2+",
    label: "Years Learning",
  },
  {
    icon: FolderCheck,
    number: "5+",
    label: "Projects Built",
  },
  {
    icon: Coffee,
    number: "100+",
    label: "Cups of Coffee",
  },
  {
    icon: GraduationCap,
    number: "B.Tech",
    label: "Computer Science",
  },
];

export default function Stats() {
  return (
    <section id="stats" className="stats-section">
      <div className="stats-grid">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div className="stat-card" key={stat.label}>
              <div className="stat-icon">
                <Icon size={22} strokeWidth={1.7} />
              </div>

              <div className="stat-info">
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
