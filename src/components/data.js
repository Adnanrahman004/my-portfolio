import {
  Home,
  FolderGit2,
  User,
  Layers,
  Briefcase,
  Sparkles,
  Mail,
  Code2,
  Braces,
  Palette,
  Server,
  Database,
  GitBranch,
  Terminal,
  Smartphone,
  GraduationCap,
  Rocket,
  Clock,
  Smile,
  Globe,
  Bug,
} from "lucide-react";

/* Edit this file to change content. Leave github/linkedin empty to hide those icons. */
export const PROFILE = {
  name: "Adnan Rahman",
  role: "Full Stack Developer",
  location: "Jamshedpur, India",
  email: "adnan@example.com",
  github: "",
  linkedin: "",
  tagline: ["Good Code,", "Better Ideas"],
  photo: "", // paste an image URL or /photo.jpg from the public folder
};

export const NAV = [
  { id: "home", label: "Home", icon: Home },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Layers },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "services", label: "Services", icon: Sparkles },
  { id: "contact", label: "Contact", icon: Mail },
];

export const STATS = [
  { icon: FolderGit2, value: "3+", label: "Projects built" },
  { icon: Layers, value: "10+", label: "Technologies used" },
  { icon: Clock, value: "2+ yrs", label: "Learning and building" },
  { icon: Smile, value: "100%", label: "Client focus" },
];

export const PROJECTS = [
  {
    name: "TaskLumo",
    type: "Task manager",
    mark: "TL",
    cover: "task",
    year: "2025",
    text: "Plan, track and finish daily tasks with a clean dashboard, filters and reminders.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    name: "AnimeVibes",
    type: "Anime discovery",
    mark: "AV",
    cover: "anime",
    year: "2025",
    text: "Search anime, read details and save favourites using a public anime API.",
    tags: ["React", "REST API", "CSS"],
  },
  {
    name: "MediConnect",
    type: "Clinic booking",
    mark: "MC",
    cover: "medi",
    year: "2024",
    text: "Book appointments and manage patient records in one simple, secure app.",
    tags: ["Express", "MongoDB", "React"],
  },
];

export const SKILLS = [
  { icon: Code2, name: "React", note: "Frontend" },
  { icon: Braces, name: "JavaScript", note: "Language" },
  { icon: Palette, name: "HTML & CSS", note: "Frontend" },
  { icon: Smartphone, name: "Responsive UI", note: "Design" },
  { icon: Server, name: "Node.js", note: "Backend" },
  { icon: Terminal, name: "Express", note: "Backend" },
  { icon: Database, name: "MongoDB", note: "Database" },
  { icon: GitBranch, name: "Git & GitHub", note: "Tools" },
];

export const EXPERIENCE = [
  {
    icon: Rocket,
    when: "2025",
    title: "Full stack projects",
    place: "Personal work",
    text: "Shipped TaskLumo, AnimeVibes and MediConnect from idea to deployment.",
  },
  {
    icon: Briefcase,
    when: "2024",
    title: "Freelance web developer",
    place: "Self-employed",
    text: "Built websites for local businesses and students.",
  },
];
export const EDUCATION = [
  {
    icon: GraduationCap,
    when: "2023 - Present",
    title: "B.Tech, Computer Science",
    place: "Your college name",
    text: "Core subjects, web development and team projects.",
  },
  {
    icon: GraduationCap,
    when: "2021 - 2023",
    title: "Senior Secondary",
    place: "Your school name",
    text: "Science stream with computer science.",
  },
];

export const SERVICES = [
  {
    icon: Globe,
    name: "Landing page",
    price: "₹3,999",
    text: "One fast, responsive page for your business or event.",
    features: ["1 page", "Mobile friendly", "Contact button"],
  },
  {
    icon: Layers,
    name: "Portfolio website",
    price: "₹7,999",
    featured: true,
    text: "A personal site that shows your work clearly.",
    features: ["Up to 6 sections", "Dark mode", "Basic SEO"],
  },
  {
    icon: Code2,
    name: "Web application",
    price: "₹19,999",
    text: "A custom app with login and a database.",
    features: ["Login and dashboard", "API and database", "Deployment"],
  },
  {
    icon: Bug,
    name: "Fix and improve",
    price: "₹1,499",
    text: "Bug fixes, layout repairs and speed improvements.",
    features: ["Code review", "Responsive fixes", "Quick delivery"],
  },
];

export const TECH_CARD = ["React", "Node", "MongoDB", "Vite"];
