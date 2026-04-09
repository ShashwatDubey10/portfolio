import { ArrowDown, ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useEffect, useRef } from "react";

const ROLES = [
  "Aspiring Product Manager",
  "Full Stack Developer",
  "Product Thinker",
  "Builder at Heart",
];

// Reusable scroll reveal — exported so other sections can use it
export const Reveal = ({ children, delay = 0, fromLeft = false, className = "" }) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translate(0,0)";
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: fromLeft ? "translateX(-28px)" : "translateY(22px)",
        transition: `opacity 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms,
                     transform 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export const HeroSection = () => {
  const roleRef = useRef(null);
  const idxRef = useRef(0);
  const timerRef = useRef(null);

  useEffect(() => {
    let char = 0;
    let deleting = false;

    const tick = () => {
      const el = roleRef.current;
      if (!el) return;
      const word = ROLES[idxRef.current];
      if (!deleting) {
        el.textContent = word.slice(0, char + 1);
        char++;
        if (char === word.length) {
          deleting = true;
          timerRef.current = setTimeout(tick, 2400);
          return;
        }
      } else {
        el.textContent = word.slice(0, char - 1);
        char--;
        if (char === 0) {
          deleting = false;
          idxRef.current = (idxRef.current + 1) % ROLES.length;
        }
      }
      timerRef.current = setTimeout(tick, deleting ? 42 : 72);
    };

    timerRef.current = setTimeout(tick, 900);
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-4 overflow-hidden"
    >
      {/* Large ghost "01" — editorial decoration, clipped to prevent mobile overflow */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute right-0 top-1/2 -translate-y-1/2 font-display font-extrabold leading-none overflow-hidden"
        style={{
          fontSize: "clamp(8rem, 28vw, 26rem)",
          color: "hsl(var(--fg) / 0.028)",
          letterSpacing: "-0.06em",
          right: "-2rem",
          maxWidth: "60vw",
        }}
      >
        01
      </div>

      <div className="container max-w-6xl mx-auto z-10 pt-20 sm:pt-28 pb-16 sm:pb-20">
        <div className="max-w-4xl">

          {/* Section label */}
          <div className="opacity-0 animate-fade-in flex items-center gap-3 mb-10">
            <span className="section-label">Portfolio — 2025</span>
            <span className="w-16 h-px" style={{ background: "hsl(var(--accent) / 0.5)" }} />
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "hsl(var(--accent))" }}
            />
          </div>

          {/* Name */}
          <h1
            className="opacity-0 animate-fade-in-delay-1 font-display font-extrabold tracking-tighter leading-[0.92] mb-5 select-none"
            style={{ fontSize: "clamp(3.2rem, 9.5vw, 8.5rem)" }}
          >
            Shashwat<br />
            <span style={{ color: "hsl(var(--accent))" }}>Dubey</span>
          </h1>

          {/* Typewriter */}
          <div
            className="opacity-0 animate-fade-in-delay-2 flex items-center gap-2 mb-7"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: "hsl(var(--muted-fg))", fontSize: "clamp(0.8rem, 2.5vw, 1.05rem)" }}
          >
            <span style={{ color: "hsl(var(--accent))" }}>~/</span>
            <span ref={roleRef} />
            <span
              className="inline-block w-0.5 h-5"
              style={{ background: "hsl(var(--accent))", animation: "cursor-blink 1.1s step-end infinite" }}
            />
          </div>

          {/* Bio */}
          <p
            className="opacity-0 animate-fade-in-delay-3 text-base md:text-[1.1rem] leading-relaxed max-w-2xl mb-10"
            style={{ color: "hsl(var(--muted-fg))" }}
          >
            Aspiring Product Manager with a strong technical foundation — I've built full-stack products
            from the ground up, giving me a rare ability to bridge user needs, business goals, and
            engineering constraints. Currently seeking PM roles where I can ship products people love.
          </p>

          {/* CTAs */}
          <div className="opacity-0 animate-fade-in-delay-4 flex flex-col sm:flex-row items-start gap-4 mb-14">
            <a href="#projects" id="hero-cta-work" className="btn-primary cursor-none group">
              See My Work
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#contact" id="hero-cta-contact" className="btn-outline cursor-none">
              Get In Touch
            </a>
          </div>

          {/* Socials */}
          <div className="opacity-0 animate-fade-in-delay-5 flex items-center gap-6">
            {[
              { href: "https://github.com/ShashwatDubey10", icon: Github, label: "GitHub", id: "hero-github" },
              { href: "https://www.linkedin.com/in/shashwat-dubey-10297b277/", icon: Linkedin, label: "LinkedIn", id: "hero-linkedin" },
              { href: "https://x.com/i_ShashwatDubey", icon: Twitter, label: "Twitter", id: "hero-twitter" },
              { href: "mailto:i.shashwatdubey@gmail.com", icon: Mail, label: "Email", id: "hero-email" },
            ].map(({ href, icon: Icon, label, id }) => (
              <a
                key={id}
                id={id}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="cursor-none flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:translate-y-[-2px]"
                style={{ color: "hsl(var(--muted-fg))" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(var(--accent))")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(var(--muted-fg))")}
              >
                <Icon size={17} />
                <span className="hidden sm:inline">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Animated scroll line */}
      <a
        href="#about"
        id="hero-scroll-cue"
        aria-label="Scroll to about"
        className="cursor-none absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in-delay-5"
      >
        <span className="section-label" style={{ fontSize: "0.58rem" }}>scroll</span>
        <div className="w-px h-14 relative overflow-hidden" style={{ background: "hsl(var(--border))" }}>
          <div
            className="absolute top-0 left-0 right-0 h-8 animate-float"
            style={{ background: "linear-gradient(to bottom, hsl(var(--accent)), transparent)", animationDuration: "1.5s" }}
          />
        </div>
      </a>
    </section>
  );
};