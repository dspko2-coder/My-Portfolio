import { useEffect, useState } from "react";

const LETTERS = ["L", "O", "A", "D", "I", "N", "G"];

// Show loader for at least 2 full wave cycles before exiting
const MIN_VISIBLE_MS = 2500;
const EXIT_MS = 1000;

const Loader = () => {
  const [mounted, setMounted] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const exitTimer = setTimeout(() => setExiting(true), MIN_VISIBLE_MS);
    const removeTimer = setTimeout(() => {
      setMounted(false);
      document.body.style.overflow = "";
    }, MIN_VISIBLE_MS + EXIT_MS);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      role="presentation"
      aria-hidden="true"
      className="no-reduce-motion fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
      style={{
        // Deep pure dark background (consistent in light & dark modes)
        backgroundColor: "#080808",
        // Dorbesh-style smooth curtain slide-up with curved lower edge
        transform: exiting ? "translateY(-105%)" : "translateY(0%)",
        borderRadius: exiting ? "0 0 50% 50% / 0 0 160px 160px" : "0 0 0 0",
        transition: exiting
          ? "transform 0.95s cubic-bezier(0.77, 0, 0.175, 1), border-radius 0.95s cubic-bezier(0.77, 0, 0.175, 1)"
          : "none",
        willChange: "transform, border-radius",
      }}
    >
      {/* Guarantees sharp smooth animation execution without any external dependencies */}
      <style>{`
        @keyframes sharpSmoothWave {
          0% {
            color: rgba(255, 255, 255, 0.18);
          }
          6% {
            color: #ffffff;
          }
          14% {
            color: #ffffff;
          }
          22% {
            color: rgba(255, 255, 255, 0.52);
          }
          32% {
            color: rgba(255, 255, 255, 0.18);
          }
          100% {
            color: rgba(255, 255, 255, 0.18);
          }
        }
        .letter-sweep-item {
          display: inline-block;
          color: rgba(255, 255, 255, 0.18);
          animation: sharpSmoothWave 2.1s cubic-bezier(0.4, 0, 0.2, 1) infinite both !important;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }
      `}</style>

      {/* Centered L O A D I N G word with sharp smooth wave sequence */}
      <div
        className="flex items-center select-none"
        style={{
          gap: "clamp(1rem, 2.8vw, 2.1rem)",
          opacity: exiting ? 0 : 1,
          transform: exiting ? "scale(0.94)" : "scale(1)",
          transition: "opacity 0.35s ease, transform 0.45s ease",
        }}
      >
        {LETTERS.map((letter, i) => (
          <span
            key={`${letter}-${i}`}
            className="font-display font-bold letter-sweep-item"
            style={{
              fontSize: "clamp(1.4rem, 3.4vw, 2.1rem)",
              letterSpacing: "0.22em",
              animationDelay: `${i * 0.18}s`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loader;