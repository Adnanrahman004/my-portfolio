import { useEffect, useRef, useState } from "react";
import {
  Sun,
  Moon,
  Mail,
  ArrowRight,
  ArrowUpRight,
  ArrowUp,
  Check,
  MapPin,
  Code2,
  FolderKanban,
  UserRound,
  BriefcaseBusiness,
  Send,
  Globe,
  Database,
  Server,
  Wrench,
  GraduationCap,
  Sparkles,
  Clock,
  MessageCircle,
  Layers,
  FileText,
  Award,
} from "lucide-react";

import "./App.css";
import Certificates from "./components/Certificates.jsx";

/* ---------- WHATSAPP ---------- */
const WHATSAPP_NUMBER = "919060331685"; // +91 9060331685
const whatsappLink = (msg) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    msg ||
      "Hi Adnan, I saw your portfolio and I'd like to talk about a project.",
  )}`;

/* ---------- CONTENT: edit here ---------- */
const PROFILE = {
  name: "Adnan Rahman",
  initials: "AR",
  role: "Full Stack Developer",
  location: "India",
  email: "rahmanadnan0551@gmail.com",
  resume: "",
  socials: { github: "", linkedin: "" },
  photos: [
    `${import.meta.env.BASE_URL}images/profile.jpg`,
    `${import.meta.env.BASE_URL}profile.jpg`,
  ],
};

const TYPING_LINES = [
  "Full Stack Developer",
  "React & Node.js Developer",
  "B.Tech CSE Student",
  "Freelance Web Developer",
];

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const navItems = [
  { label: "Home", id: "home", Icon: Code2 },
  { label: "Projects", id: "projects", Icon: FolderKanban },
  { label: "About", id: "about", Icon: UserRound },
  { label: "Learning Skills", id: "skills", Icon: Layers },
  { label: "Experience", id: "experience", Icon: BriefcaseBusiness },
  { label: "Services", id: "services", Icon: Sparkles },
  { label: "Contact", id: "contact", Icon: Send },
];

const heroStack = [
  { name: "React", src: `${DEVICON}/react/react-original.svg` },
  { name: "Node.js", src: `${DEVICON}/nodejs/nodejs-original.svg` },
  { name: "MongoDB", src: `${DEVICON}/mongodb/mongodb-original.svg` },
  { name: "TypeScript", src: `${DEVICON}/typescript/typescript-original.svg` },
  { name: "Tailwind", src: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
  { name: "Firebase", src: `${DEVICON}/firebase/firebase-plain.svg` },
];

const stats = [
  { value: "3+", label: "Years Learning", Icon: Code2 },
  { value: "6+", label: "Projects Built", Icon: FolderKanban },
  { value: "100+", label: "Cups of Coffee", Icon: Sparkles },
  { value: "B.Tech", label: "Computer Science", Icon: GraduationCap },
];

const projects = [
  {
    number: "01",
    title: "TaskNiri",
    category: "Rewards Platform",
    theme: "project-gold",
    mark: "",
    badge: "Live",
    badgeClass: "live",
    image: "/taskniri.jpg",
    url: "https://taskniri-task.vercel.app/",
    description:
      "A rewards platform where users can complete tasks and earn coins.",
    tags: [
      "React",
      "tailwind",
      "JavaScript",
      "Node.js",
      "Express.js",
      "Firebase",
    ],
  },
  {
    number: "02",
    title: "loanwala",
    category: "loan website",
    theme: "project-rose",
    mark: "",
    badge: "Live",
    badgeClass: "live",
    image: "/loanwala.jpg",
    url: "https://loanwalah.netlify.app/",
    description:
      "LoanWala helps users compare loan and insurance offers through a clean, modern and user-friendly interface",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    number: "03",
    title: "MediConnect",
    category: "Healthcare Platform",
    theme: "project-blue",
    mark: "",
    badge: "Upcoming",
    badgeClass: "new",
    image: "/mediconnect.jpg",
    url: "",
    description:
      "A healthcare platform concept designed to make medical information and services easier to access.",
    tags: ["React", "Node.js", "MongoDB"],
  },
];

const skillTabs = ["All", "Frontend", "Backend", "Database", "Tools"];

const skills = [
  {
    name: "HTML5",
    cat: "Frontend",
    src: `${DEVICON}/html5/html5-original.svg`,
  },
  { name: "CSS3", cat: "Frontend", src: `${DEVICON}/css3/css3-original.svg` },
  {
    name: "JavaScript",
    cat: "Frontend",
    src: `${DEVICON}/javascript/javascript-original.svg`,
  },
  {
    name: "TypeScript",
    cat: "Frontend",
    src: `${DEVICON}/typescript/typescript-original.svg`,
  },
  {
    name: "React",
    cat: "Frontend",
    src: `${DEVICON}/react/react-original.svg`,
  },
  {
    name: "Tailwind CSS",
    cat: "Frontend",
    src: `${DEVICON}/tailwindcss/tailwindcss-original.svg`,
  },
  {
    name: "Node.js",
    cat: "Backend",
    src: `${DEVICON}/nodejs/nodejs-original.svg`,
  },
  {
    name: "Express.js",
    cat: "Backend",
    src: `${DEVICON}/express/express-original.svg`,
    invert: true,
  },
  { name: "REST APIs", cat: "Backend", Icon: Server },
  {
    name: "MongoDB",
    cat: "Database",
    src: `${DEVICON}/mongodb/mongodb-original.svg`,
  },
  {
    name: "Firebase",
    cat: "Database",
    src: `${DEVICON}/firebase/firebase-plain.svg`,
  },
  { name: "SQL Basics", cat: "Database", Icon: Database },
  { name: "Git", cat: "Tools", src: `${DEVICON}/git/git-original.svg` },
  {
    name: "GitHub",
    cat: "Tools",
    src: `${DEVICON}/github/github-original.svg`,
    invert: true,
  },
  {
    name: "VS Code",
    cat: "Tools",
    src: `${DEVICON}/vscode/vscode-original.svg`,
  },
];

const timeline = [
  {
    year: "2026",
    title: "Full stack projects",
    place: "Personal work",
    tag: "Personal",
    text: "Designed and built TaskNiri",
  },
  {
    year: "2025",
    title: "Freelance web developer",
    place: "Self-employed",
    tag: "Freelance",
    text: "Built simple websites for local businesses and students.",
  },
  {
    year: "2024",
    title: "Started my B.Tech journey",
    place: "Computer Science & Engineering",
    tag: "Education",
    text: "Built a foundation in programming, problem-solving, and software development.",
  },
];

const services = [
  {
    title: "Frontend Development",
    description:
      "Modern, responsive interfaces with thoughtful details and clean code.",
    price: "₹3,000",
    Icon: Globe,
    points: ["Responsive design", "Modern UI/UX", "Cross-browser support"],
  },
  {
    title: "Backend Development",
    description:
      "Reliable server-side features and REST APIs for web applications.",
    price: "₹5,000",
    Icon: Server,
    points: [
      "REST API development",
      "Database integration",
      "Authentication setup",
    ],
  },
  {
    title: "Complete Website",
    description:
      "A complete website with responsive frontend and backend integration.",
    price: "₹12,000",
    Icon: Layers,
    points: ["Frontend + backend", "Database setup", "Deployment assistance"],
    featured: true,
  },
  {
    title: "Custom Features",
    description:
      "Useful custom functionality tailored to your project requirements.",
    price: "Let's discuss",
    Icon: Wrench,
    points: [
      "Custom functionality",
      "Third-party integrations",
      "Ongoing improvements",
    ],
  },
];

/* ---------- SMALL COMPONENTS ---------- */
function SectionHeading({ eyebrow, title, note }) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && (
          <p className="eyebrow">
            <span />
            {eyebrow}
          </p>
        )}
        <h2>{title}</h2>
      </div>
      {note && <p className="section-note">{note}</p>}
    </div>
  );
}

function NoteArrow() {
  return (
    <svg
      width="46"
      height="30"
      viewBox="0 0 46 30"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 4c14 0 30 6 38 20M41 24l-8-1M41 24l-2-8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 015.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.4c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21H9z" />
    </svg>
  );
}

function useTypewriter(lines) {
  const [text, setText] = useState("");
  const [lineIdx, setLineIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!lines || lines.length === 0) return undefined;

    const current = lines[lineIdx % lines.length];
    let delay = deleting ? 45 : 85;

    if (!deleting && text === current) {
      delay = 1600;
    } else if (deleting && text === "") {
      delay = 250;
    }

    const t = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setLineIdx((i) => (i + 1) % lines.length);
      } else {
        const next = deleting
          ? current.slice(0, text.length - 1)
          : current.slice(0, text.length + 1);
        setText(next);
      }
    }, delay);

    return () => clearTimeout(t);
  }, [text, deleting, lineIdx, lines]);

  return text;
}

/* ---------- PROJECT CARD ---------- */
function ProjectCard({ project }) {
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = Boolean(project.image) && !imgFailed;

  return (
    <article className="project-card reveal">
      <div className={`project-cover ${project.theme}`}>
        {showImage && (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            onError={() => setImgFailed(true)}
          />
        )}
        {project.mark && <div className="project-mark">{project.mark}</div>}
        <div className="project-cover-top">
          <span>{project.number}</span>
          <span className={`badge ${project.badgeClass}`}>{project.badge}</span>
        </div>
        <span className="project-arrow" aria-hidden="true">
          <ArrowUpRight size={16} />
        </span>
      </div>
      <div className="project-body">
        <span className="project-category">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-list">
          {project.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        {project.url && (
          <a
            className="project-link"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View project <ArrowUpRight size={14} />
          </a>
        )}
      </div>
    </article>
  );
}

/* ---------- APP ---------- */
export default function App() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [skillTab, setSkillTab] = useState("All");
  const [scrollPct, setScrollPct] = useState(0);
  const [showTop, setShowTop] = useState(false);
  // 🆕 page state: "portfolio" | "certificates"
  const [page, setPage] = useState("portfolio");
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem("portfolio-theme") === "dark";
    } catch {
      return false;
    }
  });
  const [photoIdx, setPhotoIdx] = useState(0);
  const spyLock = useRef(0);
  const typed = useTypewriter(TYPING_LINES);

  useEffect(() => {
    try {
      localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
    } catch {
      /* storage unavailable */
    }
  }, [dark]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const isMobile = window.matchMedia("(max-width: 760px)").matches;
    if (!isMobile) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const pct = max > 0 ? (doc.scrollTop / max) * 100 : 0;
      setScrollPct(pct);
      setShowTop(doc.scrollTop > 500);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (page !== "portfolio") return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() < spyLock.current) return;
        entries.forEach(
          (e) => e.isIntersecting && setActive(e.target.dataset.spy),
        );
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    document
      .querySelectorAll("[data-spy]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [page]);

  useEffect(() => {
    if (page !== "portfolio") return undefined;
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [page]);

  // when switching back to portfolio, scroll to top
  useEffect(() => {
    if (page === "portfolio") {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [page]);

  function goTo(id) {
    if (page !== "portfolio") {
      setPage("portfolio");
      // wait for the portfolio to render, then scroll
      setTimeout(() => {
        spyLock.current = Date.now() + 900;
        setActive(id);
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
      return;
    }
    spyLock.current = Date.now() + 900;
    setActive(id);
    setMenuOpen(false);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function openCertificates() {
    setPage("certificates");
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  const photo = PROFILE.photos[photoIdx];
  const ThemeIcon = dark ? Sun : Moon;
  const toggleTheme = () => setDark((d) => !d);
  const visibleSkills =
    skillTab === "All" ? skills : skills.filter((s) => s.cat === skillTab);

  return (
    <div className={`portfolio${dark ? " theme-dark" : ""}`}>
      {/* SCROLL PROGRESS */}
      <div className="scroll-progress" aria-hidden="true" role="presentation">
        <div
          className="scroll-progress-fill"
          style={{ width: `${scrollPct}%` }}
        />
      </div>

      {/* PREMIUM MENU BUTTON */}
      <button
        type="button"
        className={`menu-fab${menuOpen ? " is-open" : ""}`}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="app-sidebar"
        onClick={() => setMenuOpen((v) => !v)}
      >
        {!menuOpen && <span className="menu-fab-label">Menu</span>}
        <span className="menu-fab-lines" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </button>

      <div
        className={`side-backdrop${menuOpen ? " show" : ""}`}
        onClick={() => menuOpen && setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* SIDEBAR */}
      <aside id="app-sidebar" className={`sidebar${menuOpen ? " open" : ""}`}>
        <a
          className="brand"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            goTo("home");
          }}
        >
          <span className="brand-mark">{PROFILE.initials}</span>
          <strong>{PROFILE.name}</strong>
          <small>{PROFILE.role}</small>
        </a>

        <span className="avail-badge">Available for work</span>

        <nav className="side-nav" aria-label="Main navigation">
          {navItems.map(({ label, id, Icon }) => (
            <button
              key={id}
              type="button"
              className={`nav-item${
                page === "portfolio" && active === id ? " active" : ""
              }`}
              aria-current={
                page === "portfolio" && active === id ? "true" : undefined
              }
              onClick={() => goTo(id)}
            >
              <Icon size={16} />
              <span className="nav-label">{label}</span>
            </button>
          ))}

          {/* 🆕 My Certificates → opens Certificates page */}
          <button
            type="button"
            className={`nav-item${page === "certificates" ? " active" : ""}`}
            aria-current={page === "certificates" ? "true" : undefined}
            onClick={openCertificates}
          >
            <Award size={16} />
            <span className="nav-label">My Certificates</span>
          </button>
        </nav>

        <div className="side-bottom">
          <p className="side-label">Let&apos;s Connect</p>
          <div className="side-social">
            <a href={`mailto:${PROFILE.email}`} aria-label="Email">
              <Mail size={17} />
            </a>
            {PROFILE.socials.github && (
              <a
                href={PROFILE.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GithubIcon />
              </a>
            )}
            {PROFILE.socials.linkedin && (
              <a
                href={PROFILE.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
            )}
          </div>

          {PROFILE.resume && (
            <a
              className="resume-link"
              href={`${import.meta.env.BASE_URL}${PROFILE.resume}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText size={14} /> Download CV
            </a>
          )}

          <p className="sidebar-quote">
            Good Code
            <br />
            <span>Better Ideas</span>
          </p>

          <div className="theme-switch" role="group" aria-label="Theme">
            <button
              type="button"
              className={!dark ? "on" : ""}
              aria-label="Light theme"
              onClick={() => setDark(false)}
            >
              <Sun size={15} />
            </button>
            <button
              type="button"
              className={dark ? "on" : ""}
              aria-label="Dark theme"
              onClick={() => setDark(true)}
            >
              <Moon size={15} />
            </button>
          </div>
        </div>
      </aside>

      {/* ---------- MAIN CONTENT ---------- */}
      {page === "certificates" ? (
        <main className="main">
          <header className="mobile-head">
            <span className="mobile-brand">{PROFILE.initials}</span>
            <div className="mobile-controls">
              <button
                type="button"
                className="icon-btn"
                aria-label="Toggle theme"
                onClick={toggleTheme}
              >
                <ThemeIcon size={17} />
              </button>
            </div>
          </header>
          <Certificates onBack={() => setPage("portfolio")} />
        </main>
      ) : (
        <div className="main">
          {/* MOBILE HEADER */}
          <header className="mobile-head">
            <span className="mobile-brand">{PROFILE.initials}</span>
            <div className="mobile-controls">
              <button
                type="button"
                className="icon-btn"
                aria-label="Toggle theme"
                onClick={toggleTheme}
              >
                <ThemeIcon size={17} />
              </button>
            </div>
          </header>

          <div className="content">
            {/* HERO */}
            <section className="hero" id="home" data-spy="home">
              {photo && (
                <img
                  key={photo}
                  className="hero-photo"
                  src={photo}
                  alt={`Portrait of ${PROFILE.name}`}
                  fetchPriority="high"
                  onError={() => setPhotoIdx((i) => i + 1)}
                />
              )}

              <div className="hero-copy">
                <div className="hero-status">Open to freelance projects</div>

                <h1>
                  Turning ideas into
                  <br />
                  real <em>products</em>
                  <br />
                  people love.
                </h1>

                <p className="hero-typing" aria-live="polite">
                  {typed}
                  <span className="caret" aria-hidden="true" />
                </p>

                <p>
                  I&apos;m {PROFILE.name}, a full stack developer and B.Tech
                  Computer Science student I make clean fast and responsive
                  websites with React Node.js and MongoDB
                </p>

                <div className="hero-actions">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => goTo("projects")}
                  >
                    View My Work <ArrowRight size={16} />
                  </button>

                  <a
                    className="btn btn-light"
                    href={whatsappLink(
                      "Hi Adnan, I'd like to talk about a project.",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Let&apos;s Talk <MessageCircle size={16} />
                  </a>
                </div>

                <div className="hero-location">
                  <MapPin size={14} />
                  {PROFILE.location}
                </div>
              </div>

              <div className="hero-note n1">
                A Developer
                <br />
                Who Loves
                <br />
                Building
                <NoteArrow />
              </div>

              <div className="tech-float">
                <div className="tech-float-head">
                  <span>Tech Stack I Use</span>
                  <Code2 size={14} />
                </div>
                <div className="tech-float-grid">
                  {heroStack.map((tech) => (
                    <span key={tech.name} title={tech.name}>
                      <img src={tech.src} alt={tech.name} loading="lazy" />
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* STATS */}
            <section
              className="stats reveal"
              aria-label="Statistics"
              style={{ transform: "translateY(20px)" }}
            >
              {stats.map(({ value, label, Icon }) => (
                <div className="stat" key={label}>
                  <Icon className="stat-icon" size={24} />
                  <div>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                </div>
              ))}
            </section>

            {/* PROJECTS */}
            <section className="section" id="projects" data-spy="projects">
              <SectionHeading
                eyebrow="Selected work"
                title="projects"
                note="A few things I have designed and built while learning."
              />
              <div className="project-grid">
                {projects.map((p) => (
                  <ProjectCard key={p.title} project={p} />
                ))}
              </div>
            </section>

            {/* ABOUT + SKILLS + EXPERIENCE */}
            <section className="section three-column" data-spy="about">
              <div className="panel reveal" id="about">
                <div className="panel-head">
                  <h3>About me</h3>
                </div>
                <div className="about-photo">
                  {photo && (
                    <img
                      src={photo}
                      alt={`${PROFILE.name} at his desk`}
                      loading="lazy"
                    />
                  )}
                  <div className="about-chip">
                    <strong>B.Tech CSE</strong>
                    Computer Science student
                  </div>
                </div>
                <p>
                  I enjoy building things people use every day. I care about
                  clean code, readable design and pages that load fast on any
                  phone.
                </p>
                <p>
                  I work across the stack: React on the front, Node.js and
                  MongoDB behind it, and Git to keep it all organised.
                </p>
                <span className="about-note">
                  Always learning, always building
                </span>

                <a
                  className="mini-link"
                  href={whatsappLink(
                    "Hi Adnan, I'd like to work with you on a project.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Work with me <ArrowRight size={14} />
                </a>
              </div>

              <div className="panel reveal" id="skills">
                <div className="panel-head">
                  <h3>Learning Skills</h3>
                </div>
                <div
                  className="skill-tabs"
                  role="tablist"
                  aria-label="Skill categories"
                >
                  {skillTabs.map((tab) => (
                    <button
                      type="button"
                      key={tab}
                      role="tab"
                      aria-selected={skillTab === tab}
                      className={skillTab === tab ? "active" : ""}
                      onClick={() => setSkillTab(tab)}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="skill-grid">
                  {visibleSkills.map(({ name, src, Icon, invert }) => (
                    <div className="skill-tile" key={`${skillTab}-${name}`}>
                      {src ? (
                        <img
                          className={invert ? "invert-dark" : undefined}
                          src={src}
                          alt=""
                          loading="lazy"
                        />
                      ) : (
                        <Icon size={26} />
                      )}
                      {name}
                    </div>
                  ))}
                </div>
              </div>

              <div className="panel reveal" id="experience">
                <div className="panel-head">
                  <h3>Experience and education</h3>
                </div>
                <div className="timeline">
                  {timeline.map((item) => (
                    <div className="timeline-item" key={item.title}>
                      <span className="timeline-year">{item.year}</span>
                      <h4>{item.title}</h4>
                      <span className="timeline-tag">{item.tag}</span>
                      <strong>{item.place}</strong>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SERVICES */}
            <section className="section" id="services" data-spy="services">
              <SectionHeading
                eyebrow="Services"
                title="How I can help you"
                note="Starting prices. Final cost depends on the scope of your project."
              />
              <div className="services-grid">
                {services.map(
                  ({ title, description, price, Icon, points, featured }) => (
                    <article
                      className={`service-card reveal${
                        featured ? " featured" : ""
                      }`}
                      key={title}
                    >
                      {featured && (
                        <span className="service-badge">Most popular</span>
                      )}
                      <span className="service-icon">
                        <Icon size={19} />
                      </span>
                      <h3>{title}</h3>
                      <p>{description}</p>
                      <ul>
                        {points.map((pt) => (
                          <li key={pt}>
                            <Check size={14} />
                            {pt}
                          </li>
                        ))}
                      </ul>
                      <div className="service-price">{price}</div>

                      <a
                        className="btn btn-light service-btn"
                        href={whatsappLink(
                          `Hi Adnan, I'm interested in: ${title} (${price}).`,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Discuss this
                      </a>
                    </article>
                  ),
                )}
              </div>
            </section>

            {/* CONTACT */}
            <section className="section" id="contact" data-spy="contact">
              <div className="contact-wrap reveal">
                <div>
                  <p className="eyebrow">
                    <span />
                    Contact
                  </p>
                  <h2>Have a project in mind? Let&apos;s talk.</h2>
                  <p>
                    Tell me what you want to build and I will get back to you
                    with ideas, a timeline and a clear price.
                  </p>
                  <a
                    className="btn btn-gold"
                    href={whatsappLink(
                      "Hi Adnan, I have a project in mind. Can we discuss?",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle size={15} />
                    Chat on WhatsApp
                  </a>
                </div>
                <div className="contact-details">
                  <a
                    className="contact-row"
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle size={18} />
                    WhatsApp · +91 90603 31685
                  </a>
                  <a className="contact-row" href={`mailto:${PROFILE.email}`}>
                    <Mail size={18} />
                    {PROFILE.email}
                  </a>
                  <div className="contact-row">
                    <MapPin size={18} />
                    {PROFILE.location}
                  </div>
                  <div className="contact-row">
                    <Clock size={18} />
                    Usually replies within a day
                  </div>
                </div>
              </div>
            </section>

            {/* FOOTER */}
            <footer className="footer">
              <span>
                <strong>{PROFILE.name}</strong> © {new Date().getFullYear()}.
                All rights reserved.
              </span>
              <button type="button" onClick={() => goTo("home")}>
                Back to top <ArrowUp size={13} />
              </button>
            </footer>
          </div>
        </div>
      )}

      {/* FLOATING HIRE ME → WhatsApp */}
      <a
        className="hire-fab"
        href={whatsappLink("Hi Adnan, I'd like to hire you for a project.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hire me on WhatsApp"
      >
        <Mail size={16} /> Hire Me
      </a>

      <button
        type="button"
        className={`back-top${showTop ? " show" : ""}`}
        onClick={() => goTo("home")}
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
}
