"use client";

import { useEffect, useRef, useState } from "react";

// A pair of cherries hanging from one stem that swing like a pendulum. They lean toward the pointer, their eyes
// follow it, and a click (or tap) knocks them into a big swing. Runs as a damped spring so motion always settles.
const maxLean = 22;

export default function SwingingCherry({ className = "" }: { className?: string }) {
  const root = useRef<HTMLButtonElement>(null);
  const swing = useRef<SVGGElement>(null);
  const pupils = useRef<SVGGElement>(null);
  const kick = useRef<(direction: number) => void>(() => {});
  const [dizzy, setDizzy] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let angle = -30;
    let velocity = 0;
    let target = 0;
    let lastPointer = 0;
    let frame = 0;
    let last = performance.now();
    let dizzyTimer = 0;

    const render = (now: number) => {
      const dt = Math.min((now - last) / 1000, 1 / 30);
      last = now;
      // With no pointer around for a while, drift in a lazy breeze instead of hanging dead still.
      const idle = now - lastPointer > 2500;
      const goal = idle ? Math.sin(now / 1400) * 5 : target;
      velocity += ((goal - angle) * 38 - velocity * 2.4) * dt;
      angle += velocity * dt;
      swing.current?.setAttribute("transform", `rotate(${angle.toFixed(2)} 100 6)`);
      frame = requestAnimationFrame(render);
    };

    const onMove = (event: PointerEvent) => {
      const box = root.current?.getBoundingClientRect();
      if (!box) return;
      lastPointer = performance.now();
      const dx = event.clientX - (box.left + box.width / 2);
      const dy = event.clientY - (box.top + box.height * 0.7);
      // Lean toward the pointer, harder the closer it gets.
      const pull = Math.max(0, 1 - Math.abs(dx) / (window.innerWidth * 0.6));
      target = Math.max(-maxLean, Math.min(maxLean, -Math.sign(dx) * pull * maxLean));
      const distance = Math.hypot(dx, dy) || 1;
      const reach = Math.min(distance / 120, 1) * 3.2;
      pupils.current?.setAttribute("transform", `translate(${((dx / distance) * reach).toFixed(2)} ${((dy / distance) * reach).toFixed(2)})`);
    };

    kick.current = (direction: number) => {
      velocity += direction * 170;
      setDizzy(true);
      clearTimeout(dizzyTimer);
      dizzyTimer = window.setTimeout(() => setDizzy(false), 1600);
    };

    frame = requestAnimationFrame(render);
    window.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(dizzyTimer);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <button
      ref={root}
      type="button"
      data-cursor="button"
      aria-label="Give the cherries a push"
      className={`cursor-pointer appearance-none border-0 bg-transparent p-0 outline-offset-8 ${className}`}
      onClick={(event) => {
        const box = event.currentTarget.getBoundingClientRect();
        kick.current(event.clientX < box.left + box.width / 2 ? 1 : -1);
      }}
    >
      <svg className="block h-full w-auto overflow-visible" viewBox="0 0 200 260" aria-hidden="true">
        <ellipse cx="100" cy="254" rx="70" ry="6" fill="#171513" opacity=".08" />
        <g ref={swing} transform="rotate(-30 100 6)">
          {/* Stems meet in a knot under a leaf. */}
          <path d="M100 8 C 92 60, 70 110, 60 152" fill="none" stroke="#5b3a2a" strokeWidth="6" strokeLinecap="round" />
          <path d="M100 8 C 112 70, 134 118, 142 166" fill="none" stroke="#5b3a2a" strokeWidth="6" strokeLinecap="round" />
          <path d="M102 12 C 128 -6, 168 0, 182 22 C 156 36, 120 34, 102 12 Z" fill="#7d9b55" />
          <path d="M104 13 C 128 12, 150 16, 176 22" fill="none" stroke="#5f7d3e" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="100" cy="9" r="6" fill="#5b3a2a" />

          <circle cx="58" cy="192" r="46" fill="#db543a" />
          <circle cx="58" cy="192" r="46" fill="url(#cherry-shine)" />
          <circle cx="144" cy="204" r="44" fill="#f56f52" />
          <circle cx="144" cy="204" r="44" fill="url(#cherry-shine)" />
          <ellipse cx="38" cy="170" rx="11" ry="7" fill="#fff" opacity=".55" transform="rotate(-35 38 170)" />
          <ellipse cx="125" cy="183" rx="10" ry="6.5" fill="#fff" opacity=".55" transform="rotate(-35 125 183)" />

          {/* Faces: eyes track the pointer, and turn into little x's after a push. */}
          {dizzy ? (
            <g stroke="#171513" strokeWidth="4" strokeLinecap="round">
              {[[46, 194], [70, 194], [132, 206], [156, 206]].map(([x, y]) => (
                <path d={`M${x - 5} ${y - 5} L${x + 5} ${y + 5} M${x + 5} ${y - 5} L${x - 5} ${y + 5}`} key={x} />
              ))}
            </g>
          ) : (
            <g>
              {[[46, 194], [70, 194], [132, 206], [156, 206]].map(([x, y]) => <circle cx={x} cy={y} r="8" fill="#fff" key={x} />)}
              <g ref={pupils}>
                {[[46, 194], [70, 194], [132, 206], [156, 206]].map(([x, y]) => <circle cx={x} cy={y} r="4.2" fill="#171513" key={x} />)}
              </g>
            </g>
          )}
          <path d={dizzy ? "M50 214 Q 58 208 66 214" : "M51 211 Q 58 218 65 211"} fill="none" stroke="#171513" strokeWidth="3.5" strokeLinecap="round" />
          <ellipse cx="144" cy="226" rx={dizzy ? 6 : 4.5} ry={dizzy ? 7 : 4.5} fill="#171513" />
        </g>
        <defs>
          <radialGradient id="cherry-shine" cx=".35" cy=".3" r=".8">
            <stop offset="0" stopColor="#fff" stopOpacity=".18" />
            <stop offset=".6" stopColor="#fff" stopOpacity="0" />
            <stop offset="1" stopColor="#7a1f12" stopOpacity=".35" />
          </radialGradient>
        </defs>
      </svg>
    </button>
  );
}
