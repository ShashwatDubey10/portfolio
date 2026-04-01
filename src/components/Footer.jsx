import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer
      className="py-8 px-4 relative"
      style={{ borderTop: "1px solid hsl(var(--border))" }}
    >
      <div className="container max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center font-display font-extrabold text-xs"
            style={{ background: "hsl(var(--accent))", color: "hsl(var(--accent-fg))" }}
          >
            SD
          </div>
          <p
            className="text-xs mono-font"
            style={{ color: "hsl(var(--muted-fg))" }}
          >
            © {new Date().getFullYear()} Shashwat Dubey. Built with React + Vite.
          </p>
        </div>

        <a
          href="#hero"
          id="footer-back-top"
          aria-label="Back to top"
          className="cursor-none w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          style={{
            background: "hsl(var(--card))",
            border: "1px solid hsl(var(--border))",
            color: "hsl(var(--muted-fg))",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "hsl(var(--accent) / 0.6)";
            e.currentTarget.style.color = "hsl(var(--accent))";
            e.currentTarget.style.boxShadow = "0 0 16px hsl(var(--accent) / 0.25)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "hsl(var(--border))";
            e.currentTarget.style.color = "hsl(var(--muted-fg))";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
};