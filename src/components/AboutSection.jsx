import { useRef } from "react";
import { Reveal } from "./HeroSection";
import { Award, Layers, Users } from "lucide-react";

const pillars = [
  {
    icon: Users,
    label: "User-First Thinking",
    desc: "I obsess over the 'why' behind user behaviour — converting qualitative feedback into structured product requirements and actionable specs.",
  },
  {
    icon: Layers,
    label: "Technical Depth",
    desc: "Having built full-stack products solo, I understand engineering constraints intimately — no translation layer needed between PM and dev teams.",
  },
  {
    icon: Award,
    label: "PM Certified",
    desc: "GeeksforGeeks 'Breaking into Product Management' — reinforcing structured frameworks across discovery, prioritisation, and delivery.",
  },
];

const education = [
  {
    school: "Kalinga Institute of Industrial Technology",
    short: "KIIT, Bhubaneswar",
    degree: "B.Tech — Computer Science & Engineering",
    grade: "8.15 CGPA",
    period: "2023 – 2027",
  },
  {
    school: "Vyasa International School",
    short: "Bangalore",
    degree: "Higher Secondary — PCMC",
    grade: "81.2%",
    period: "2022 – 2023",
  },
  {
    school: "National Public School, Yeshwanthpur",
    short: "Bangalore",
    degree: "Secondary Education",
    grade: "94.8%",
    period: "2020 – 2021",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-28 px-4 relative overflow-hidden">
      {/* Ghost number */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-[-1rem] top-12 font-display font-extrabold leading-none"
        style={{
          fontSize: "clamp(8rem, 18vw, 16rem)",
          color: "hsl(var(--fg) / 0.025)",
          letterSpacing: "-0.06em",
        }}
      >
        02
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <Reveal className="flex items-end justify-between gap-4 mb-16 flex-wrap">
          <div>
            <span className="section-label block mb-3">Who I am</span>
            <h2
              className="font-display font-extrabold tracking-tighter leading-none"
              style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
            >
              About<br />
              <span style={{ color: "hsl(var(--accent))" }}>Me.</span>
            </h2>
          </div>
          <p
            className="max-w-sm text-sm leading-relaxed"
            style={{ color: "hsl(var(--muted-fg))" }}
          >
            A developer who thinks like a PM — bridging technical execution
            and strategic product vision.
          </p>
        </Reveal>

        <Reveal delay={40}>
          <div className="hr-accent mb-14" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-16">
          {/* Left — bio */}
          <Reveal delay={60}>
            <div className="space-y-5">
              <p className="text-base leading-relaxed" style={{ color: "hsl(var(--fg) / 0.85)" }}>
                I'm Shashwat — an aspiring Product Manager based in Bangalore, India,
                currently pursuing my B.Tech in Computer Science at KIIT University.
                My journey started in code, building full-stack products from scratch,
                but what kept me hooked wasn't the code itself — it was the user decisions,
                the product trade-offs, and turning ideas into things real people actually use.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "hsl(var(--fg) / 0.85)" }}>
                I've shipped products across productivity, fintech, and real-time communication.
                My time at Botmeld Technologies as a Full Stack Intern exposed me to stakeholder
                discovery, PRD writing, and Agile delivery on a multi-tenant enterprise SaaS
                platform — exactly the PM muscle I came to build.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "hsl(var(--fg) / 0.85)" }}>
                My technical background isn't a detour — it's my differentiator. I can evaluate
                feasibility, write acceptance criteria engineers trust, and prototype fast to
                validate assumptions before committing sprint capacity.
              </p>

              <div className="flex flex-wrap gap-5 pt-2">
                {[
                  { label: "Based in",   val: "Bangalore, India" },
                  { label: "Currently",  val: "KIIT, 3rd Year" },
                  { label: "Target",     val: "Product Manager" },
                ].map(({ label, val }) => (
                  <div key={label}>
                    <div className="section-label mb-0.5" style={{ fontSize: "0.58rem" }}>{label}</div>
                    <div className="text-sm font-semibold" style={{ color: "hsl(var(--fg))" }}>{val}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-3">
                <a href="#contact" id="about-contact-btn" className="btn-primary cursor-none">
                  Get In Touch
                </a>
                <a
                  href="https://drive.google.com/file/d/1glkHt2zBkRldClG9k2x4Le4jzTxXopG6/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="about-cv-btn"
                  className="btn-outline cursor-none"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right — pillars + education */}
          <div className="space-y-4">
            {pillars.map((p, i) => (
              <Reveal key={p.label} delay={120 + i * 80}>
                <div
                  className="p-5 rounded-xl transition-all duration-300 cursor-default"
                  style={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "hsl(var(--accent) / 0.45)";
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "0 0 24px hsl(var(--accent) / 0.07)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "hsl(var(--border))";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: "hsl(var(--accent) / 0.1)" }}
                    >
                      <p.icon size={18} style={{ color: "hsl(var(--accent))" }} />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm mb-1" style={{ color: "hsl(var(--fg))" }}>
                        {p.label}
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-fg))" }}>
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Education timeline */}
        <Reveal delay={200}>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="section-label">Education</span>
              <span className="flex-1 h-px" style={{ background: "hsl(var(--border))" }} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {education.map((ed, i) => (
                <div
                  key={ed.school}
                  className="p-4 rounded-xl cursor-default transition-all duration-300"
                  style={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "hsl(var(--accent) / 0.4)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "hsl(var(--border))";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div className="section-label mb-2" style={{ fontSize: "0.6rem" }}>{ed.period}</div>
                  <div className="font-display font-bold text-sm mb-1 leading-tight" style={{ color: "hsl(var(--fg))" }}>
                    {ed.short}
                  </div>
                  <div className="text-xs mb-2" style={{ color: "hsl(var(--muted-fg))" }}>{ed.degree}</div>
                  <div
                    className="inline-block text-xs font-bold px-2 py-0.5 rounded"
                    style={{ background: "hsl(var(--accent) / 0.1)", color: "hsl(var(--accent))" }}
                  >
                    {ed.grade}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};