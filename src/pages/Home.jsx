import { useEffect } from "react";

import { StarBackground } from "../components/StarBackground.jsx";
import { Navbar } from "../components/Navbar.jsx";
import { HeroSection } from "../components/HeroSection.jsx";
import { AboutSection } from "../components/AboutSection.jsx";
import { ExperienceSection } from "../components/ExperienceSection.jsx";
import { SkillsSection } from "../components/SkillsSection.jsx";
import { ProjectsSection } from "../components/ProjectsSection.jsx";
import { ContactSection } from "../components/ContactSection.jsx";
import { Footer } from "../components/Footer.jsx";

// Custom cursor — updates DOM elements created in index.css
const useCursor = () => {
  useEffect(() => {
    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");
    if (!dot || !ring) return;

    let tx = 0, ty = 0;
    let rx = 0, ry = 0;
    let raf;

    const onMove = (e) => { tx = e.clientX; ty = e.clientY; };

    const loop = () => {
      rx += (tx - rx) * 0.15;
      ry += (ty - ry) * 0.15;
      dot.style.left = tx + "px";
      dot.style.top  = ty + "px";
      ring.style.left = rx + "px";
      ring.style.top  = ry + "px";
      raf = requestAnimationFrame(loop);
    };

    const onEnter = () => ring.classList.add("hovered");
    const onLeave = () => ring.classList.remove("hovered");

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    const refresh = () => {
      document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };
    refresh();

    // Re-attach after hydration
    const observer = new MutationObserver(refresh);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);
};

const Home = () => {
  useCursor();

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ background: "hsl(var(--bg))", color: "hsl(var(--fg))" }}
    >
      {/* Custom cursor elements */}
      <div id="cursor-dot" />
      <div id="cursor-ring" />

      <StarBackground />
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
