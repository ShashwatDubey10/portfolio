import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

const NAV_ITEMS = [
  { name: "About",      href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills",     href: "#skills" },
  { name: "Projects",   href: "#projects" },
  { name: "Contact",    href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [open, setOpen]           = useState(false);
  const [active, setActive]       = useState("");
  const [isDark, setIsDark]       = useState(true);

  // Sync theme state on mount
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const dark = stored ? stored === "dark" : true;
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = ["about", "experience", "skills", "projects", "contact"];
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
        style={{
          background: scrolled ? "hsl(var(--bg) / 0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(18px)" : "none",
          borderBottom: scrolled
            ? "1px solid hsl(var(--border) / 0.5)"
            : "1px solid transparent",
          padding: scrolled ? "0.85rem 0" : "1.4rem 0",
        }}
      >
        <div className="container flex items-center justify-between">

          {/* Logo */}
          <a
            href="#hero"
            id="nav-logo"
            className="cursor-none group flex items-center gap-3 focus:outline-none"
            aria-label="Home"
          >
            <div
              className="relative w-9 h-9 rounded-lg flex items-center justify-center font-display text-sm font-extrabold
                         group-hover:shadow-[0_0_20px_hsl(30_100%_54%/0.5)] transition-all duration-300 group-hover:scale-105"
              style={{
                background: "hsl(var(--accent))",
                color: "hsl(var(--accent-fg))",
              }}
            >
              SD
              <span
                className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ border: "1px solid hsl(var(--accent) / 0.5)" }}
              />
            </div>
            <span
              className="font-display text-base font-bold tracking-tight transition-colors duration-300 group-hover:text-[hsl(var(--accent))]"
              style={{ color: "hsl(var(--fg))" }}
            >
              shashwat<span style={{ color: "hsl(var(--accent))" }}>.</span>
            </span>
          </a>

          {/* Desktop: nav links + theme toggle */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = active === id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="cursor-none relative px-4 py-2 text-sm font-medium transition-all duration-250 focus:outline-none"
                  style={{
                    color: isActive ? "hsl(var(--accent))" : "hsl(var(--muted-fg))",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "hsl(var(--fg))")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = isActive
                      ? "hsl(var(--accent))"
                      : "hsl(var(--muted-fg))")
                  }
                >
                  {isActive && (
                    <span
                      className="absolute bottom-0.5 left-4 right-4 h-px"
                      style={{ background: "hsl(var(--accent))" }}
                    />
                  )}
                  {item.name}
                </a>
              );
            })}

            {/* Theme toggle — lives in navbar, no overlap */}
            <button
              id="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="cursor-none ml-3 w-9 h-9 rounded-full flex items-center justify-center
                         transition-all duration-300 focus:outline-none
                         hover:shadow-[0_0_16px_hsl(30_100%_54%/0.4)]"
              style={{
                background: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "hsl(var(--accent) / 0.6)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "hsl(var(--border))")
              }
            >
              <span className="relative w-4 h-4">
                <Sun
                  size={15}
                  className="absolute inset-0 text-amber-400 transition-all duration-300"
                  style={{
                    opacity: isDark ? 1 : 0,
                    transform: isDark ? "rotate(0deg) scale(1)" : "rotate(90deg) scale(0.4)",
                  }}
                />
                <Moon
                  size={15}
                  className="absolute inset-0 transition-all duration-300"
                  style={{
                    color: "hsl(30 100% 54%)",
                    opacity: isDark ? 0 : 1,
                    transform: isDark ? "rotate(-90deg) scale(0.4)" : "rotate(0deg) scale(1)",
                  }}
                />
              </span>
            </button>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="theme-toggle-btn-mobile"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="cursor-none w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none"
              style={{
                background: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
              }}
            >
              <span className="relative w-4 h-4">
                <Sun
                  size={15}
                  className="absolute inset-0 text-amber-400 transition-all duration-300"
                  style={{
                    opacity: isDark ? 1 : 0,
                    transform: isDark ? "rotate(0deg) scale(1)" : "rotate(90deg) scale(0.4)",
                  }}
                />
                <Moon
                  size={15}
                  className="absolute inset-0 transition-all duration-300"
                  style={{
                    color: "hsl(30 100% 54%)",
                    opacity: isDark ? 0 : 1,
                    transform: isDark ? "rotate(-90deg) scale(0.4)" : "rotate(0deg) scale(1)",
                  }}
                />
              </span>
            </button>

            <button
              id="mobile-menu-btn"
              className="cursor-none w-9 h-9 rounded-lg flex items-center justify-center focus:outline-none"
              style={{
                background: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
              }}
              onClick={() => setOpen((p) => !p)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className="fixed inset-0 z-30 md:hidden flex flex-col items-center justify-center gap-10"
        style={{
          background: "hsl(var(--bg) / 0.97)",
          backdropFilter: "blur(20px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      >
        {NAV_ITEMS.map((item, i) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setOpen(false)}
            className="font-display text-4xl font-extrabold tracking-tighter transition-all duration-200"
            style={{
              color: "hsl(var(--fg))",
              transitionDelay: open ? `${i * 60}ms` : "0ms",
              transform: open ? "translateY(0)" : "translateY(20px)",
              opacity: open ? 1 : 0,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "hsl(var(--accent))")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "hsl(var(--fg))")
            }
          >
            {item.name}
          </a>
        ))}
      </div>
    </>
  );
};
