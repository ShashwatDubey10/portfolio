import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    const count = Math.min(
      Math.floor((window.innerWidth * window.innerHeight) / 9000),
      140
    );
    setStars(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        size: Math.random() * 2 + 0.5,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.15,
        duration: Math.random() * 5 + 2,
        delay: Math.random() * 6,
      }))
    );
    setMeteors(
      Array.from({ length: 4 }, (_, i) => ({
        id: i,
        width: Math.random() * 80 + 60,
        height: Math.random() * 1 + 1,
        x: Math.random() * 100,
        y: Math.random() * 35,
        delay: Math.random() * 16,
        duration: Math.random() * 4 + 5,
      }))
    );
  }, []);

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      {stars.map((s) => (
        <div
          key={s.id}
          className="star animate-pulse-subtle"
          style={{
            width: s.size + "px",
            height: s.size + "px",
            left: s.x + "%",
            top: s.y + "%",
            opacity: s.opacity,
            animationDuration: s.duration + "s",
            animationDelay: s.delay + "s",
          }}
        />
      ))}
      {meteors.map((m) => (
        <div
          key={m.id}
          className="meteor animate-meteor"
          style={{
            width: m.width + "px",
            height: m.height + "px",
            left: m.x + "%",
            top: m.y + "%",
            animationDelay: m.delay + "s",
            animationDuration: m.duration + "s",
          }}
        />
      ))}
    </div>
  );
};