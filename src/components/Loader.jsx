import { useEffect, useState } from "react";

const LETTERS = "LOADING".split("");
const CURVE = "12vh"; // height of the curved lip under the black layer

const Loader = ({ duration = 3400, text = LETTERS }) => {
  const [phase, setPhase] = useState("loading");
  const letters = Array.isArray(text) ? text : String(text).split("");

  // Start the exit after `duration`
  useEffect(() => {
    const t = setTimeout(() => setPhase("exiting"), duration);
    return () => clearTimeout(t);
  }, [duration]);

  // Lock page scroll while the loader is on screen
  useEffect(() => {
    if (phase === "done") return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [phase]);

  if (phase === "done") return null;

  return (
    <>
      <style>{`
        @keyframes loader-letter {
          0%, 100% { opacity: 1; }
          50%      { opacity: 0.04; }
        }
      `}</style>

      <div
        role="status"
        aria-label="Loading"
        onTransitionEnd={(e) => {
          if (e.target === e.currentTarget && phase === "exiting") setPhase("done");
        }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black
                   transition-transform duration-[1100ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
        style={{
          transform:
            phase === "exiting" ? `translateY(calc(-100% - ${CURVE}))` : "translateY(0)",
        }}
      >
        {/* Letters */}
        <div
          className={`flex gap-6 text-sm font-light uppercase text-white
                      transition-opacity duration-300 ${
                        phase === "exiting" ? "opacity-0" : "opacity-100"
                      }`}
        >
          {letters.map((char, i) => (
            <span
              key={i}
              className="inline-block"
              style={{
                animation: "loader-letter 2.4s ease-in-out infinite",
                animationDelay: `${i * 0.1}s`,
              }}
            >
              {char}
            </span>
          ))}
        </div>

        {/* Curved lip: sides hang lower than the centre, so the page appears
            to be revealed through a rounded arch as the layer lifts */}
        <svg
          aria-hidden="true"
          className="absolute left-0 top-full w-full"
          style={{ height: CURVE }}
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          <path d="M0 0 H100 V10 Q50 -10 0 10 Z" fill="black" />
        </svg>
      </div>
    </>
  );
}

export default Loader;