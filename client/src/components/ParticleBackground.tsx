// src/components/ParticleBackground.jsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: { value: "transparent" } },
        particles: {
          number: { value: 60 },
          color: { value: ["#ff00ff", "#00ffff", "#00ffcc"] },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 2 },
          move: { enable: true, speed: 0.5 },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 100,
            opacity: 0.1,
          },
        },
      }}
    />
  );
}
