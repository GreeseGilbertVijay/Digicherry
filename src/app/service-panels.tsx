"use client";

import Image from "next/image";
import { useState } from "react";
import { serviceSrc, serviceText, services } from "./services-data";

// Side-by-side panels on desktop where the active one widens to reveal its copy; on mobile they stack and the active one grows taller.
export default function ServicePanels() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-3 lg:h-[520px] lg:flex-row">
      {services.map((service, index) => {
        const open = index === active;
        return (
          <button
            type="button" key={service.image} aria-expanded={open}
            onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => setActive(index)}
            className={`group/panel relative cursor-pointer overflow-hidden rounded-[22px] text-left transition-[flex-grow,height] duration-700 ease-[cubic-bezier(.22,1,.36,1)] lg:h-auto lg:min-w-0 lg:basis-0 ${open ? "h-[380px] lg:grow-[6]" : "h-[76px] lg:grow"}`}
          >
            <Image className={`object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] ${service.zoom ? "scale-[1.42]" : open ? "scale-100" : "scale-125"}`} src={serviceSrc(service)} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" />
            <div className={`absolute inset-0 transition-colors duration-700 ${open ? "bg-linear-to-t from-ink/90 via-ink/30 to-transparent" : "bg-ink/65 group-hover/panel:bg-ink/50"}`} aria-hidden="true" />

            {/* Collapsed: icon on top, title running up the panel (desktop) or across it (mobile). */}
            <div className={`absolute inset-0 flex items-center gap-4 px-5 text-white transition-opacity duration-300 lg:flex-col lg:justify-between lg:px-0 lg:py-6 ${open ? "pointer-events-none opacity-0" : "opacity-100 delay-200"}`}>
              <service.icon className="size-7 shrink-0 text-coral" aria-hidden="true" />
              <span className="font-heading text-[16px] font-semibold whitespace-nowrap lg:rotate-180 lg:[writing-mode:vertical-rl]">{service.title}</span>
            </div>

            <div className={`absolute inset-x-0 bottom-0 p-6 text-white transition duration-500 sm:p-8 ${open ? "translate-y-0 opacity-100 delay-300" : "pointer-events-none translate-y-6 opacity-0"}`}>
              <span className="grid size-14 place-items-center rounded-2xl bg-coral shadow-[0_12px_30px_#f56f5266]"><service.icon className="size-7" aria-hidden="true" /></span>
              <h3 className="mt-5 mb-0 font-heading text-[24px] font-bold tracking-[-.5px] sm:text-[30px]">{service.title}</h3>
              <p className="mt-2 mb-0 line-clamp-3 max-w-[440px] text-[14px] leading-[1.7] text-white/80">{serviceText}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
