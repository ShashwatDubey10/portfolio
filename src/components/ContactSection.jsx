import { Reveal } from "./HeroSection";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "i.shashwatdubey@gmail.com",
    href: "mailto:i.shashwatdubey@gmail.com",
    id: "contact-email",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9110687309",
    href: "tel:+919110687309",
    id: "contact-phone",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangalore, India",
    href: null,
    id: "contact-location",
  },
];

const socials = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shashwat-dubey-10297b277/",
    id: "contact-linkedin",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/ShashwatDubey10",
    id: "contact-github",
  },
  {
    icon: Twitter,
    label: "Twitter / X",
    href: "https://x.com/i_ShashwatDubey",
    id: "contact-twitter",
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-28 px-4 relative overflow-hidden">
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
        06
      </div>

      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 0%, hsl(var(--accent) / 0.05), transparent)",
        }}
      />

      <div className="container max-w-6xl mx-auto relative z-10">
        <Reveal className="mb-16">
          <span className="section-label block mb-3">Let's Connect</span>
          <h2
            className="font-display font-extrabold tracking-tighter leading-none"
            style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
          >
            Get In<br />
            <span style={{ color: "hsl(var(--accent))" }}>Touch.</span>
          </h2>
        </Reveal>

        <Reveal delay={40}>
          <div className="hr-accent mb-14" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Left — pitch */}
          <Reveal delay={60}>
            <div className="space-y-6">
              <p
                className="text-base leading-relaxed"
                style={{ color: "hsl(var(--fg) / 0.82)" }}
              >
                I'm actively looking for Product Manager roles and internships. If you're
                building something interesting and think my background — technical depth +
                product thinking — fits your team, I'd love to talk.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "hsl(var(--fg) / 0.82)" }}
              >
                Even if you just want to discuss product ideas, swap notes on PM craft, or
                explore collaboration — my inbox is always open.
              </p>

              {/* Contact info */}
              <div className="space-y-4 pt-2">
                {contactInfo.map(({ icon: Icon, label, value, href, id }) => {
                  const content = (
                    <div className="flex items-center gap-4">
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: "hsl(var(--accent) / 0.1)" }}
                      >
                        <Icon size={17} style={{ color: "hsl(var(--accent))" }} />
                      </div>
                      <div>
                        <div
                          className="section-label mb-0.5"
                          style={{ fontSize: "0.58rem" }}
                        >
                          {label}
                        </div>
                        <div className="text-sm font-medium" style={{ color: "hsl(var(--fg))" }}>
                          {value}
                        </div>
                      </div>
                    </div>
                  );

                  return href ? (
                    <a
                      key={id}
                      id={id}
                      href={href}
                      className="cursor-none block transition-opacity duration-200 hover:opacity-70"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={id} id={id} className="cursor-default">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* Right — socials + cert */}
          <Reveal delay={120}>
            <div className="space-y-6">
              {/* Social cards */}
              <div className="space-y-3">
                {socials.map(({ icon: Icon, label, href, id }) => (
                  <a
                    key={id}
                    id={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-none flex items-center gap-4 p-4 rounded-xl transition-all duration-250 group"
                    style={{
                      background: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "hsl(var(--accent) / 0.5)";
                      e.currentTarget.style.transform = "translateX(4px)";
                      e.currentTarget.style.boxShadow = "0 0 20px hsl(var(--accent) / 0.06)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "hsl(var(--border))";
                      e.currentTarget.style.transform = "translateX(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: "hsl(var(--accent) / 0.08)" }}
                    >
                      <Icon size={17} style={{ color: "hsl(var(--accent))" }} />
                    </div>
                    <span
                      className="text-sm font-semibold font-display"
                      style={{ color: "hsl(var(--fg))" }}
                    >
                      {label}
                    </span>
                    <span
                      className="ml-auto text-xs"
                      style={{ color: "hsl(var(--muted-fg))" }}
                    >
                      ↗
                    </span>
                  </a>
                ))}
              </div>

              {/* Certification callout */}
              <div
                className="p-5 rounded-xl"
                style={{
                  background: "hsl(var(--accent) / 0.05)",
                  border: "1px solid hsl(var(--accent) / 0.2)",
                }}
              >
                <div className="section-label mb-2">Certification</div>
                <div
                  className="font-display font-bold text-sm mb-1"
                  style={{ color: "hsl(var(--fg))" }}
                >
                  Breaking into Product Management
                </div>
                <div
                  className="text-xs mb-3"
                  style={{ color: "hsl(var(--muted-fg))" }}
                >
                  GeeksforGeeks
                </div>
                <a
                  href="https://drive.google.com/file/d/11frN0JhpdL3jOMDE6BZO0tnmPoKpF0Qr/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-cert-link"
                  className="cursor-none text-xs font-semibold font-display transition-opacity duration-200 hover:opacity-70"
                  style={{ color: "hsl(var(--accent))" }}
                >
                  View Certificate →
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
