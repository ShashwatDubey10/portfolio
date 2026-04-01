import { Reveal } from "./HeroSection";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: "bantr",
    number: "01",
    title: "Bantr",
    subtitle: "Real-Time Chat Application",
    type: "Full Stack Development",
    description:
      "A real-time chat platform built for seamless, modern messaging. Designed and engineered the full product — from authentication flows and WebSocket-based real-time communication to a clean, responsive UI that prioritises conversation clarity.",
    bullets: [
      "Architected real-time messaging with WebSockets enabling sub-100ms message delivery",
      "Designed user-centric authentication flows with JWT and secure session management",
      "Built a scalable backend on Express + MongoDB supporting concurrent connections",
    ],
    tags: ["React", "Express.js", "MongoDB", "Socket.io"],
    github: "https://github.com/ShashwatDubey10/bantr-mern-chatapp",
    demo: "https://bantr-mern-chatapp-1.onrender.com",
    accentColor: "30 100% 54%", // saffron orange
  },
  {
    id: "savepoint",
    number: "02",
    title: "SavePoint",
    subtitle: "Gamified Productivity App",
    type: "Product Design & Full Stack Development",
    description:
      "Independently conceptualized and shipped a gamified productivity application — managing the full product roadmap from ideation to deployment. Authored PRDs and user stories, designed behavioral engagement systems (streaks, rewards) to drive retention, and built the complete MERN stack architecture.",
    bullets: [
      "Authored comprehensive PRDs and prioritised product backlog based on user pain points and feasibility",
      "Designed streak and reward systems to drive user retention and daily engagement habits",
      "Implemented secure authentication and real-time analytics dashboards on a full MERN stack",
    ],
    tags: ["React", "Node.js", "MongoDB", "PRD", "Gamification"],
    github: "https://github.com/ShashwatDubey10/Save-Point",
    demo: "https://save-point-psi.vercel.app/",
    accentColor: "200 90% 55%", // blue
  },
  {
    id: "paycircle",
    number: "03",
    title: "PayCircle",
    subtitle: "Peer-to-Peer Fintech Platform",
    type: "Fintech Product Development",
    description:
      "Conceived the original product vision and led end-to-end development of a P2P fintech platform, identifying market gaps to define a high-impact MVP. Architected automated debt calculation and settlement notifications, and produced structured PRDs with clearly defined acceptance criteria.",
    bullets: [
      "Identified market gap and defined MVP scope for group expense and debt settlement",
      "Architected automated debt calculation logic and settlement notification system",
      "Optimised user flows to reduce friction and time-to-settle for shared debts",
    ],
    tags: ["Node.js", "React", "PostgreSQL", "Fintech", "PRD"],
    github: "https://github.com/ShashwatDubey10/PayCircle",
    demo: null,
    accentColor: "280 70% 68%", // purple
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-28 px-4 relative overflow-hidden">
      {/* Ghost number */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute right-[-1rem] top-12 font-display font-extrabold leading-none"
        style={{
          fontSize: "clamp(8rem, 18vw, 16rem)",
          color: "hsl(var(--fg) / 0.025)",
          letterSpacing: "-0.06em",
        }}
      >
        05
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <Reveal className="mb-16">
          <span className="section-label block mb-3">Things I've Built</span>
          <h2
            className="font-display font-extrabold tracking-tighter leading-none"
            style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
          >
            Selected<br />
            <span style={{ color: "hsl(var(--accent))" }}>Projects.</span>
          </h2>
        </Reveal>

        <Reveal delay={40}>
          <div className="hr-accent mb-14" />
        </Reveal>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 90}>
              <div
                className="group rounded-2xl p-7 md:p-10 transition-all duration-350 cursor-default"
                style={{
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `hsl(${project.accentColor} / 0.45)`;
                  e.currentTarget.style.boxShadow = `0 0 40px hsl(${project.accentColor} / 0.07)`;
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "hsl(var(--border))";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  {/* Left — number + meta */}
                  <div className="flex-shrink-0 lg:w-48">
                    <div
                      className="font-display font-extrabold leading-none mb-3 tracking-tighter"
                      style={{
                        fontSize: "3.5rem",
                        color: `hsl(${project.accentColor} / 0.18)`,
                      }}
                    >
                      {project.number}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="mono-font text-xs px-2 py-0.5 rounded"
                          style={{
                            background: `hsl(${project.accentColor} / 0.1)`,
                            color: `hsl(${project.accentColor})`,
                            fontSize: "0.65rem",
                            letterSpacing: "0.05em",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right — content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-1 flex-wrap">
                      <div>
                        <span
                          className="section-label block mb-1"
                          style={{ color: `hsl(${project.accentColor})`, fontSize: "0.6rem" }}
                        >
                          {project.type}
                        </span>
                        <h3
                          className="font-display font-extrabold tracking-tight leading-tight"
                          style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "hsl(var(--fg))" }}
                        >
                          {project.title}
                          <span
                            className="text-base font-normal ms-2"
                            style={{ color: "hsl(var(--muted-fg))" }}
                          >
                            — {project.subtitle}
                          </span>
                        </h3>
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} GitHub`}
                          id={`project-${project.id}-github`}
                          className="cursor-none w-9 h-9 rounded-full flex items-center justify-center transition-all duration-250"
                          style={{
                            background: "hsl(var(--bg))",
                            border: "1px solid hsl(var(--border))",
                            color: "hsl(var(--muted-fg))",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = `hsl(${project.accentColor} / 0.6)`;
                            e.currentTarget.style.color = `hsl(${project.accentColor})`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "hsl(var(--border))";
                            e.currentTarget.style.color = "hsl(var(--muted-fg))";
                          }}
                        >
                          <Github size={15} />
                        </a>
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} Live Demo`}
                            id={`project-${project.id}-demo`}
                            className="cursor-none w-9 h-9 rounded-full flex items-center justify-center transition-all duration-250"
                            style={{
                              background: "hsl(var(--bg))",
                              border: "1px solid hsl(var(--border))",
                              color: "hsl(var(--muted-fg))",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.borderColor = `hsl(${project.accentColor} / 0.6)`;
                              e.currentTarget.style.color = `hsl(${project.accentColor})`;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.borderColor = "hsl(var(--border))";
                              e.currentTarget.style.color = "hsl(var(--muted-fg))";
                            }}
                          >
                            <ExternalLink size={15} />
                          </a>
                        )}
                      </div>
                    </div>

                    <p
                      className="text-sm leading-relaxed mt-4 mb-5"
                      style={{ color: "hsl(var(--fg) / 0.75)" }}
                    >
                      {project.description}
                    </p>

                    <ul className="space-y-2">
                      {project.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-2.5">
                          <span
                            className="flex-shrink-0 mt-2 w-1 h-1 rounded-full"
                            style={{ background: `hsl(${project.accentColor})` }}
                          />
                          <span
                            className="text-xs leading-relaxed"
                            style={{ color: "hsl(var(--muted-fg))" }}
                          >
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* GitHub CTA */}
        <Reveal delay={300} className="mt-12 text-center">
          <a
            href="https://github.com/ShashwatDubey10"
            target="_blank"
            rel="noopener noreferrer"
            id="projects-github-cta"
            className="cursor-none btn-outline inline-flex items-center gap-2 group"
          >
            <Github size={15} />
            More on GitHub
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
};
