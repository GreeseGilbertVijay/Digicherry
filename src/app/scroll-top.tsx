"use client";

import { useEffect, useState } from "react";
import { PiArrowUpBold } from "react-icons/pi";

const SIZE = 60;
const STROKE = 3;
const RADIUS = (SIZE - STROKE) / 2 - 1;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function ScrollTop() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  const shown = progress > 0.04;
  const percent = Math.round(progress * 100);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      data-cursor="button"
      aria-label={`Back to top (${percent}% scrolled)`}
      tabIndex={shown ? 0 : -1}
      className={`group fixed right-5 bottom-5 z-50 size-[60px] cursor-pointer rounded-full bg-paper shadow-[0_10px_30px_#1715132e] transition-[opacity,translate,scale] duration-500 ease-[cubic-bezier(.22,1,.36,1)] sm:right-8 sm:bottom-8 ${shown ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-6 scale-75 opacity-0"}`}
    >
      {/* soft coral glow that grows on hover */}
      <span className="absolute inset-1 rounded-full bg-coral/40 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />

      {/* progress ring */}
      <svg className="absolute inset-0 -rotate-90" viewBox={`0 0 ${SIZE} ${SIZE}`} aria-hidden="true">
        <circle cx={SIZE / 2} cy={SIZE / 2} r={RADIUS} fill="none" strokeWidth={STROKE} className="stroke-ink/10" />
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
          className="stroke-coral drop-shadow-[0_0_4px_#f56f5299] transition-[stroke-dashoffset] duration-150 ease-out"
        />
      </svg>

      {/* inner disc with the arrow rolling up on hover */}
      <span className="absolute inset-[7px] grid place-items-center overflow-hidden rounded-full bg-ink text-white shadow-[0_10px_28px_#17151340,inset_0_1px_0_#ffffff1f] transition-[background-color,scale] duration-300 group-hover:scale-105 group-hover:bg-coral group-active:scale-95" aria-hidden="true">
        <PiArrowUpBold className="size-5 transition-transform duration-300 ease-out group-hover:-translate-y-[150%]" />
        <PiArrowUpBold className="absolute size-5 translate-y-[150%] transition-transform duration-300 ease-out group-hover:translate-y-0" />
      </span>

      {/* scroll percentage, appears on hover */}
      <span className="pointer-events-none absolute top-1/2 right-full mr-3 -translate-y-1/2 translate-x-2 whitespace-nowrap rounded-full bg-ink px-2.5 py-1 text-[10px] font-bold tracking-wide text-white opacity-0 shadow-[0_6px_16px_#17151333] transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" aria-hidden="true">
        {percent}%
      </span>
    </button>
  );
}
