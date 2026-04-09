import { Reveal } from "./HeroSection";

// Exact skills from resume — grouped, no fake proficiency bars
const skillGroups = [
  {
    category: "Product Management",
    color: "hsl(var(--accent))",
    skills: [
      "Product Discovery",
      "User Research",
      "PRD Writing",
      "User Stories",
      "Roadmap Planning",
      "Agile / Scrum",
    ],
  },
  {
    category: "SaaS & Automation",
    color: "hsl(200 90% 55%)",
    skills: [
      "n8n",
      "SaaS Architecture",
      "Multi-tenant Systems",
      "API Integrations",
      "Cloud-native Concepts",
    ],
  },
  {
    category: "Development",
    color: "hsl(280 70% 68%)",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "JavaScript",
      "Python",
      "C++",
    ],
  },
  {
    category: "Tools",
    color: "hsl(35 90% 60%)",
    skills: ["Jira", "Docker", "Git", "GitHub", "Postman", "Cursor", "VS Code"],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 sm:py-28 px-4 relative overflow-hidden">
      {/* Ghost number */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute right-0 top-12 font-display font-extrabold leading-none"
        style={{
          fontSize: "clamp(5rem, 18vw, 16rem)",
          color: "hsl(var(--fg) / 0.025)",
          letterSpacing: "-0.06em",
          right: "-1rem",
          maxWidth: "60vw",
          overflow: "hidden",
        }}
      >
        04
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 100%, hsl(var(--accent) / 0.04), transparent)",
        }}
      />

      <div className="container max-w-6xl mx-auto relative z-10">
        <Reveal className="mb-16">
          <span className="section-label block mb-3">Skill Set</span>
          <h2
            className="font-display font-extrabold tracking-tighter leading-none"
            style={{ fontSize: "clamp(1.8rem, 6vw, 5rem)" }}
          >
            What I<br />
            <span style={{ color: "hsl(var(--accent))" }}>Bring.</span>
          </h2>
        </Reveal>

        <Reveal delay={40}>
          <div className="hr-accent mb-14" />
        </Reveal>

        <div className="space-y-10">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 70}>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: group.color }}
                  />
                  <span
                    className="font-display font-bold text-sm tracking-tight"
                    style={{ color: "hsl(var(--fg))" }}
                  >
                    {group.category}
                  </span>
                  <span
                    className="flex-1 h-px"
                    style={{ background: "hsl(var(--border))" }}
                  />
                </div>

                {/* Tag cloud — clean, no sliders */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="cursor-default inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                      style={{
                        background: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        color: "hsl(var(--fg) / 0.82)",
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = group.color;
                        e.currentTarget.style.color = group.color;
                        e.currentTarget.style.background = `${group.color}12`;
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "hsl(var(--border))";
                        e.currentTarget.style.color = "hsl(var(--fg) / 0.82)";
                        e.currentTarget.style.background = "hsl(var(--card))";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
