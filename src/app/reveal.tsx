"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// Sets data-shown once the element scrolls into view, so it (and its children, via group-data-[shown]) can animate in.
export default function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      setShown(true);
    }, { threshold: 0.2, rootMargin: "0px 0px -40px 0px" });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-shown={shown || undefined}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group translate-y-8 opacity-0 transition-[opacity,translate] duration-700 ease-[cubic-bezier(.22,1,.36,1)] data-[shown]:translate-y-0 data-[shown]:opacity-100 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${className}`}
    >
      {children}
    </div>
  );
}
