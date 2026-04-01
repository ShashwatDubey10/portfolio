import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Default to dark — only override if user explicitly chose light
    const stored = localStorage.getItem("theme");
    const dark = stored ? stored === "dark" : true;
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  const toggle = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  };

  return (
    <button
      id="theme-toggle-btn"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="fixed top-5 right-6 z-50 w-10 h-10 rounded-full glass flex items-center justify-center
                 hover:border-[hsl(var(--accent))] hover:shadow-[0_0_18px_hsl(30_100%_54%/0.45)]
                 transition-all duration-300 focus:outline-none cursor-none"
      style={{ border: "1px solid hsl(var(--border))" }}
    >
      <span className="relative w-5 h-5">
        <Sun
          className="absolute inset-0 h-5 w-5 text-amber-400 transition-all duration-300"
          style={{
            opacity: isDark ? 1 : 0,
            transform: isDark ? "rotate(0deg) scale(1)" : "rotate(90deg) scale(0.5)",
          }}
        />
        <Moon
          className="absolute inset-0 h-5 w-5 transition-all duration-300"
          style={{
            color: "hsl(30 100% 54%)",
            opacity: isDark ? 0 : 1,
            transform: isDark ? "rotate(-90deg) scale(0.5)" : "rotate(0deg) scale(1)",
          }}
        />
      </span>
    </button>
  );
};
