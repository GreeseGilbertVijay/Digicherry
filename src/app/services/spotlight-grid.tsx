"use client";

import Link from "../transition-link";
import type { PointerEvent } from "react";
import { PiArrowUpRightBold } from "react-icons/pi";
import Reveal from "../reveal";
import { serviceText, services } from "../services-data";

// Writes the pointer position into --x/--y so the radial glow and border light follow the cursor across the card.
function track(event: PointerEvent<HTMLElement>) {
  const box = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--x", `${event.clientX - box.left}px`);
  event.currentTarget.style.setProperty("--y", `${event.clientY - box.top}px`);
}

export default function SpotlightGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <Reveal delay={(index % 3) * 110} key={service.image} className="h-full">
          <article onPointerMove={track} className="group/card relative h-full overflow-hidden rounded-[20px] bg-white/[.06] p-px [--x:50%] [--y:0px]">
            {/* Border light: a coral glow behind a 1px inset, so only the edge near the cursor lights up. */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100 [background:radial-gradient(260px_circle_at_var(--x)_var(--y),#f56f52,transparent_70%)]" aria-hidden="true" />
            <div className="relative flex h-full flex-col rounded-[19px] bg-[#1d1a17] p-7">
              <div className="pointer-events-none absolute inset-0 rounded-[19px] opacity-0 transition-opacity duration-500 group-hover/card:opacity-100 [background:radial-gradient(380px_circle_at_var(--x)_var(--y),#f56f521f,transparent_65%)]" aria-hidden="true" />
              <div className="relative flex items-start justify-between">
                <span className="grid size-14 place-items-center rounded-2xl bg-linear-to-br from-coral to-[#ff9a6b] text-white shadow-[0_10px_30px_#f56f5250] transition duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] group-hover/card:-rotate-6 group-hover/card:scale-110">
                  <service.icon className="size-7" aria-hidden="true" />
                </span>
                <span className="font-heading text-[13px] font-bold tracking-[1px] text-white/30">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="relative mt-7 mb-0 font-heading text-[21px] font-semibold leading-[1.25] tracking-[-.4px] text-white">{service.title}</h3>
              <p className="relative mt-3 mb-0 line-clamp-3 text-[14px] leading-[1.7] text-[#b6aaa1]">{serviceText}</p>
              <Link data-cursor="button" className="relative mt-auto inline-flex items-center gap-2 pt-6 text-[13px] font-bold text-white/80 transition-colors hover:text-coral" href="/contact">
                Learn more <PiArrowUpRightBold className="transition-transform duration-500 group-hover/card:translate-x-1 group-hover/card:-translate-y-1" aria-hidden="true" />
              </Link>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
