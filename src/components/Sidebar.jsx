import { useState } from "react";
import {
  House,
  UserRound,
  Code2,
  FolderKanban,
  BriefcaseBusiness,
  Send,
} from "lucide-react";

const links = [
  { name: "Home", icon: House, id: "home" },
  { name: "About", icon: UserRound, id: "about" },
  { name: "Skills", icon: Code2, id: "skills" },
  { name: "Projects", icon: FolderKanban, id: "projects" },
  { name: "Experience", icon: BriefcaseBusiness, id: "experience" },
  { name: "Contact", icon: Send, id: "contact" },
];

export default function Sidebar() {
  const [active, setActive] = useState("home");

  function navigate(id) {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <aside className="sidebar">
      <a className="brand" href="#home" onClick={() => setActive("home")}>
        <span className="brand-logo">AR</span>
        <strong>Adnan Rahman</strong>
        <small>Full Stack Developer</small>
      </a>

      <nav className="side-nav">
        {links.map(({ name, icon: Icon, id }) => (
          <button
            type="button"
            key={id}
            className={`nav-link ${active === id ? "active" : ""}`}
            onClick={() => navigate(id)}
          >
            <Icon size={16} />
            <span>{name}</span>
          </button>
        ))}
      </nav>

      <p className="sidebar-quote">
        Good Code
        <br />
        Better Ideas
      </p>
    </aside>
  );
}
