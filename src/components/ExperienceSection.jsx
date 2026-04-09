import { Reveal } from "./HeroSection";
import { Briefcase } from "lucide-react";

const experience = [
  {
    role: "Full Stack Intern",
    company: "Botmeld Technologies",
    location: "Remote, IND",
    period: "Sep 2025 – Feb 2026",
    type: "Internship",
    bullets: [
      "Contributed to end-to-end development of a multi-tenant SaaS ERP/CRM platform, architecting RESTful APIs to enhance enterprise operations and customer experience.",
      "Participated in stakeholder discovery sessions, converting qualitative feedback into technical specifications and prioritised product requirements.",
      "Engineered automation workflows using n8n, reducing manual operational cycles and improving data synchronization across enterprise modules.",
      "Developed responsive UI components in React, synthesizing complex functional requirements into user-centric interfaces for internal dashboards.",
      "Collaborated in an Agile environment using Jira for sprint planning, backlog grooming, and iterative feature releases across the product lifecycle.",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 sm:py-28 px-4 relative overflow-hidden">
      {/* Ghost number — clipped to prevent overflow */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-0 top-12 font-display font-extrabold leading-none"
        style={{
          fontSize: "clamp(5rem, 18vw, 16rem)",
          color: "hsl(var(--fg) / 0.025)",
          letterSpacing: "-0.06em",
          left: "-1rem",
          maxWidth: "70vw",
          overflow: "hidden",
        }}
      >
        03
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <Reveal className="mb-16">
          <span className="section-label block mb-3">Where I've Worked</span>
          <h2
            className="font-display font-extrabold tracking-tighter leading-none"
            style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
          >
            Experience<span style={{ color: "hsl(var(--accent))" }}>.</span>
          </h2>
        </Reveal>

        <Reveal delay={40}>
          <div className="hr-accent mb-14" />
        </Reveal>

        {experience.map((exp, i) => (
          <Reveal key={exp.company} delay={i * 80}>
            <div
              className="rounded-2xl p-5 sm:p-7 md:p-10 transition-all duration-300 cursor-default"
              style={{
                background: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "hsl(var(--accent) / 0.4)";
                e.currentTarget.style.boxShadow = "0 0 30px hsl(var(--accent) / 0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "hsl(var(--border))";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Top row */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-7">
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center mt-0.5"
                    style={{ background: "hsl(var(--accent) / 0.1)" }}
                  >
                    <Briefcase size={20} style={{ color: "hsl(var(--accent))" }} />
                  </div>
                  <div>
                    <h3
                      className="font-display font-extrabold text-xl md:text-2xl tracking-tight leading-tight"
                      style={{ color: "hsl(var(--fg))" }}
                    >
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      <span
                        className="text-sm font-semibold"
                        style={{ color: "hsl(var(--accent))" }}
                      >
                        {exp.company}
                      </span>
                      <span style={{ color: "hsl(var(--border))" }}>·</span>
                      <span className="text-sm" style={{ color: "hsl(var(--muted-fg))" }}>
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                  <span className="badge">{exp.type}</span>
                  <span
                    className="mono-font text-xs"
                    style={{ color: "hsl(var(--muted-fg))" }}
                  >
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Bullets */}
              <ul className="space-y-3">
                {exp.bullets.map((b, bi) => (
                  <li key={bi} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full"
                      style={{ background: "hsl(var(--accent))" }}
                    />
                    <span
                      className="text-sm leading-relaxed"
                      style={{ color: "hsl(var(--fg) / 0.8)" }}
                    >
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
