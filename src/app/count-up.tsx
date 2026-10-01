"use client";

import { useEffect, useRef, useState } from "react";

const DURATION = 1800;

// Counts from 0 to `value` the first time it scrolls into view; screen readers only ever hear the final number.
export default function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : DURATION;
      const start = performance.now();
      const tick = (now: number) => {
        const t = duration ? Math.min((now - start) / duration, 1) : 1;
        setCurrent(Math.round(value * (1 - Math.pow(1 - t, 3))));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.4 });

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  const final = `${value.toLocaleString("en-US")}${suffix}`;

  return (
    <span ref={ref} className="tabular-nums">
      <span aria-hidden="true">{current.toLocaleString("en-US")}{suffix}</span>
      <span className="sr-only">{final}</span>
    </span>
  );
}
