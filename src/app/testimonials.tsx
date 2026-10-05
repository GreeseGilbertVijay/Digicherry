"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { PiArrowLeftBold, PiArrowRightBold, PiQuotesFill, PiStarFill } from "react-icons/pi";

// PLACEHOLDER quotes: replace every entry with real words from real clients (with their permission) before going live.
const testimonials = [
  { quote: "Digicherry rebuilt our website and took over our Instagram. Within three months, enquiries from our site doubled and walk-ins started mentioning our reels.", name: "Client Name", role: "Owner, Restaurant", service: "Social Media" },
  { quote: "They understood our business in the first meeting. The SEO work moved us onto the first page for the searches that actually bring us customers.", name: "Client Name", role: "Director, Real Estate", service: "SEO" },
  { quote: "Clear reporting every month, quick replies on WhatsApp, and ad campaigns that pay for themselves. It feels like having an in-house team.", name: "Client Name", role: "Founder, Clinic", service: "Ad Campaigns" },
  { quote: "Our new website finally looks like the brand we are. Fast, easy to update, and customers keep complimenting it.", name: "Client Name", role: "Manager, Boutique Hotel", service: "Website" },
  { quote: "From shoot to final edit, the videos they produced for our launch were sharp, on-brand and delivered ahead of schedule.", name: "Client Name", role: "Marketing Head, Retail", service: "Video" },
  { quote: "They handled our reviews and online reputation carefully. Our Google rating has climbed and so has our footfall.", name: "Client Name", role: "Partner, Education", service: "Reputation" },
];

const initials = (name: string) => name.split(" ").map((part) => part[0]).join("").slice(0, 2);

// Where each card sits relative to the front one: fanned out behind it to the right, or thrown off to the left once read.
function placement(offset: number, count: number, drag: number): CSSProperties {
  if (offset === 0) return { transform: `translateX(${drag}px) rotate(${drag / 30}deg)`, opacity: 1, zIndex: 30 };
  if (offset === 1) return { transform: "translate(var(--fan), calc(var(--fan) / 2)) scale(.96) rotate(3deg)", opacity: 1, zIndex: 20 };
  if (offset === 2) return { transform: "translate(calc(var(--fan) * 2), var(--fan)) scale(.92) rotate(6deg)", opacity: 0.7, zIndex: 10 };
  if (offset === count - 1) return { transform: "translateX(-118%) rotate(-12deg)", opacity: 0, zIndex: 40 };
  return { transform: "translate(calc(var(--fan) * 2), var(--fan)) scale(.82) rotate(5deg)", opacity: 0, zIndex: 0 };
}

export default function Testimonials() {
  const count = testimonials.length;
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [inView, setInView] = useState(false);
  const [drag, setDrag] = useState(0);
  const dragStart = useRef<number | null>(null);
  const root = useRef<HTMLDivElement>(null);

  const go = (step: number) => setActive((current) => (current + step + count) % count);
  const paused = hovering || !inView || drag !== 0;

  // Autoplay only runs while the slider is on screen, so a visitor always arrives at the first quote.
  useEffect(() => {
    const node = root.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.35 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const endDrag = () => {
    if (dragStart.current === null) return;
    if (drag < -70) go(1);
    else if (drag > 70) go(-1);
    dragStart.current = null;
    setDrag(0);
  };

  return (
    <div
      ref={root}
      className="grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-[clamp(40px,6vw,96px)]"
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocus={() => setHovering(true)}
      onBlur={() => setHovering(false)}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") go(1);
        if (event.key === "ArrowLeft") go(-1);
      }}
    >
      <div>
        <div className="relative overflow-hidden rounded-[28px] bg-[#211d1a] p-7 text-white shadow-[0_24px_60px_#17151333] sm:p-9">
          <div className="pointer-events-none absolute -right-20 -bottom-24 size-64 rounded-full bg-coral/25 blur-3xl" aria-hidden="true" />
          <PiQuotesFill className="pointer-events-none absolute -top-6 -right-4 size-40 rotate-12 text-white/[.04]" aria-hidden="true" />
          <p className="relative m-0 font-heading text-[22px] leading-[1.3] font-bold tracking-[-.5px] sm:text-[26px]">Trusted by <span className="text-coral">100+ businesses</span> to grow their reach.</p>
          {/* Faces double as shortcuts to each quote. */}
          <div className="relative mt-6 flex items-center">
            {testimonials.map((item, index) => (
              <button
                type="button"
                className={`-ml-2.5 grid size-12 cursor-pointer place-items-center rounded-full border-[3px] border-[#211d1a] font-heading text-[14px] font-bold transition duration-500 ease-[cubic-bezier(.22,1,.36,1)] first:ml-0 ${index === active ? "z-10 -translate-y-1.5 scale-110 bg-coral text-white shadow-[0_10px_24px_#f56f5266]" : "bg-[#3a332e] text-[#e9dcd2] hover:-translate-y-1 hover:bg-[#4a413b]"}`}
                onClick={() => setActive(index)}
                aria-label={`Show testimonial ${index + 1}`}
                aria-current={index === active || undefined}
                key={index}
              >
                {initials(item.name)}
              </button>
            ))}
          </div>
          <div className="relative mt-7 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
            {[["5+", "Years of experience"], ["10,000+", "Leads generated"]].map(([value, label]) => (
              <div key={label}>
                <span className="block font-heading text-[28px] font-extrabold tracking-[-.8px]">{value}</span>
                <span className="block text-[13px] text-[#a99d95]">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center gap-5">
          <div className="flex gap-2.5">
            <button type="button" data-cursor="button" className="grid size-[52px] cursor-pointer place-items-center rounded-full border border-line bg-white text-ink transition duration-300 hover:-translate-y-0.5 hover:border-coral hover:bg-coral hover:text-white hover:shadow-[0_10px_26px_#f56f5266] active:scale-95" onClick={() => go(-1)} aria-label="Previous testimonial"><PiArrowLeftBold className="size-5" /></button>
            <button type="button" data-cursor="button" className="grid size-[52px] cursor-pointer place-items-center rounded-full bg-ink text-white shadow-[0_8px_20px_#17151326] transition duration-300 hover:-translate-y-0.5 hover:bg-coral hover:shadow-[0_10px_26px_#f56f5266] active:scale-95" onClick={() => go(1)} aria-label="Next testimonial"><PiArrowRightBold className="size-5" /></button>
          </div>
          <div className="flex-1">
            <div className="flex items-baseline justify-between font-heading font-bold tabular-nums">
              {/* The number rolls up to the new value on each change. */}
              <span className="relative block h-[30px] overflow-hidden text-[26px] leading-[30px] text-ink">
                <span className="block transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]" style={{ transform: `translateY(-${active * 30}px)` }}>
                  {testimonials.map((_, index) => <span className="block" key={index}>{String(index + 1).padStart(2, "0")}</span>)}
                </span>
              </span>
              <span className="text-[14px] text-[#b3a59b]">/ {String(count).padStart(2, "0")}</span>
            </div>
            {/* Autoplay timer: when the bar fills, the next quote comes in. Reduced motion turns autoplay off entirely. */}
            <div className="mt-2.5 h-[3px] overflow-hidden rounded-full bg-ink/10">
              <span
                className="block h-full origin-left animate-progress rounded-full bg-coral motion-reduce:animate-none motion-reduce:scale-x-0"
                style={{ animationPlayState: paused ? "paused" : "running" }}
                onAnimationEnd={() => go(1)}
                key={active}
              />
            </div>
          </div>
        </div>
      </div>

      {/* The stack. Cards share one grid cell, so it is as tall as the longest quote. Drag or swipe the front card to move on. */}
      <div className="pr-[calc(var(--fan)*2)] pb-[var(--fan)] [--fan:16px] sm:[--fan:26px]" aria-live={paused ? "polite" : "off"}>
        <div
          className="grid touch-pan-y select-none"
          onPointerDown={(event) => {
            dragStart.current = event.clientX;
            event.currentTarget.setPointerCapture(event.pointerId);
          }}
          onPointerMove={(event) => dragStart.current !== null && setDrag(event.clientX - dragStart.current)}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
        >
          {testimonials.map((item, index) => {
            const offset = (index - active + count) % count;
            const front = offset === 0;
            return (
              <figure
                className={`relative col-start-1 row-start-1 m-0 flex cursor-grab flex-col overflow-hidden rounded-[28px] border border-white p-7 shadow-[0_24px_60px_#583a281f] active:cursor-grabbing sm:p-10 ${front ? "bg-white" : "bg-[#fff1e9]"} ${offset > 1 ? "pointer-events-none" : ""} ${drag && front ? "" : "transition-[transform,opacity,background-color] duration-700 ease-[cubic-bezier(.22,1,.36,1)]"}`}
                style={placement(offset, count, front ? drag : 0)}
                aria-hidden={!front}
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${count}`}
                onClick={() => offset === 1 && go(1)}
                key={index}
              >
                <div className="pointer-events-none absolute -top-16 -right-16 size-48 rounded-full bg-coral/10 blur-2xl" aria-hidden="true" />
                {/* Cards waiting in the stack show only their edge, so their text stays hidden until they come forward. */}
                <div className={`relative flex flex-1 flex-col transition duration-500 ${front ? "translate-y-0 opacity-100 delay-200" : "translate-y-3 opacity-0"}`}>
                  <div className="flex items-center justify-between">
                    <PiQuotesFill className="size-11 text-coral sm:size-12" aria-hidden="true" />
                    <span className="rounded-full bg-[#fbf1eb] px-3 py-1.5 text-[11px] font-bold tracking-[.4px] text-coral-dark uppercase">{item.service}</span>
                  </div>
                  <div className="mt-6 flex gap-1 text-[#f5a524]" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }, (_, star) => <PiStarFill className="size-[18px]" aria-hidden="true" key={star} />)}
                  </div>
                  <blockquote className="mt-4 mb-0 flex-1 font-heading text-[19px] leading-[1.5] font-semibold tracking-[-.3px] text-ink sm:text-[23px]">&ldquo;{item.quote}&rdquo;</blockquote>
                  <figcaption className="mt-8 flex items-center gap-4 border-t border-line pt-6">
                    <span className="grid size-12 shrink-0 place-items-center rounded-full bg-linear-to-br from-coral to-[#c2412a] font-heading text-[15px] font-bold text-white shadow-[0_8px_18px_#f56f5240]" aria-hidden="true">{initials(item.name)}</span>
                    <span>
                      <span className="block font-heading text-[16px] font-bold">{item.name}</span>
                      <span className="block text-[13px] text-muted">{item.role}</span>
                    </span>
                  </figcaption>
                </div>
              </figure>
            );
          })}
        </div>
      </div>
    </div>
  );
}
