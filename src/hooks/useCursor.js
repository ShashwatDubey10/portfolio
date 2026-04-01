import { useEffect } from "react";

export const useCursor = () => {
  useEffect(() => {
    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");
    if (!dot || !ring) return;

    let ringX = 0, ringY = 0;
    let dotX = 0, dotY = 0;
    let raf;

    const move = (e) => {
      dotX = e.clientX;
      dotY = e.clientY;
    };

    const animate = () => {
      ringX += (dotX - ringX) * 0.16;
      ringY += (dotY - ringY) * 0.16;
      dot.style.left = dotX + "px";
      dot.style.top = dotY + "px";
      ring.style.left = ringX + "px";
      ring.style.top = ringY + "px";
      raf = requestAnimationFrame(animate);
    };

    const onEnter = () => ring.classList.add("hovered");
    const onLeave = () => ring.classList.remove("hovered");

    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(animate);

    const interactives = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, select, [data-hover]"
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);
};
