import { ArrowRight, MessageCircle, Code2 } from "lucide-react";

const ICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const techStack = [
  { name: "React", src: `${ICON}/react/react-original.svg` },
  { name: "Node.js", src: `${ICON}/nodejs/nodejs-original.svg` },
  { name: "MongoDB", src: `${ICON}/mongodb/mongodb-original.svg` },
  { name: "TypeScript", src: `${ICON}/typescript/typescript-original.svg` },
  { name: "Tailwind", src: `${ICON}/tailwindcss/tailwindcss-original.svg` },
  { name: "Firebase", src: `${ICON}/firebase/firebase-plain.svg` },
];

function Arrow() {
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

function Hero() {
  return (
    <section id="home" className="hero">
      <img
        className="hero-photo"
        src="/profile.jpg"
        alt="Adnan Rahman working on his laptop"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />

      <div className="hero-copy">
        <div className="hero-status">Available for opportunities</div>

        <h1>
          Turning
          <br />
          Ideas Into
          <br />
          <em>Real Products</em>
        </h1>

        <p>
          I&apos;m Adnan Rahman a Full Stack Developer who loves building modern
          scalable and user-friendly web applications that solve real problems
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View My Work <ArrowRight size={16} />
          </a>
          <a href="#contact" className="btn btn-light">
            Let&apos;s Talk <MessageCircle size={16} />
          </a>
        </div>

        <div className="hero-proof">
          <div className="avatar-stack">
            {["A", "R", "D", "+"].map((letter) => (
              <span key={letter}>{letter}</span>
            ))}
          </div>
          <div>
            <strong>Building with purpose</strong>
            Developers &amp; collaborators
          </div>
        </div>
      </div>

      <div className="hero-note n1">
        A Developer
        <br />
        Who Loves
        <br />
        Building
        <Arrow />
      </div>

      <div className="hero-note n2">
        Good code,
        <br />
        better ideas
      </div>

      <div className="tech-float">
        <div className="tech-float-head">
          <span>Tech Stack I Use</span>
          <Code2 size={14} />
        </div>
        <div className="tech-float-grid">
          {techStack.map((tech) => (
            <span key={tech.name} title={tech.name}>
              <img src={tech.src} alt={tech.name} loading="lazy" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
