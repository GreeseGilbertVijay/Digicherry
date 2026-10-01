"use client";

import Image from "next/image";
import { useState } from "react";
import { PiArrowRightBold } from "react-icons/pi";
import { serviceSrc, serviceText, services } from "../services-data";

// A numbered list on the left drives a large preview on the right; every image stays mounted so switching is a crossfade.
export default function ServiceSwitcher() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
      <ul className="m-0 list-none p-0" role="tablist" aria-label="Services">
        {services.map((service, index) => {
          const selected = index === active;
          return (
            <li key={service.image} className="border-b border-line">
              <button
                type="button" role="tab" aria-selected={selected}
                onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => setActive(index)}
                className="group/row flex w-full cursor-pointer items-center gap-4 bg-transparent py-4 text-left sm:gap-5 sm:py-5"
              >
                <span className={`grid size-11 shrink-0 place-items-center rounded-xl transition duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] ${selected ? "rotate-[-8deg] scale-110 bg-coral text-white shadow-[0_10px_24px_#f56f5255]" : "bg-cream text-coral group-hover/row:bg-[#fde3da]"}`}>
                  <service.icon className="size-[22px]" aria-hidden="true" />
                </span>
                <span className={`flex-1 font-heading text-[18px] font-semibold tracking-[-.3px] transition duration-500 sm:text-[22px] ${selected ? "translate-x-1 text-ink" : "text-ink/45 group-hover/row:text-ink/80"}`}>{service.title}</span>
                <PiArrowRightBold className={`size-5 shrink-0 transition duration-500 ${selected ? "translate-x-0 text-coral opacity-100" : "-translate-x-3 opacity-0"}`} aria-hidden="true" />
              </button>
            </li>
          );
        })}
      </ul>

      <div className="relative lg:sticky lg:top-28 lg:self-start" role="tabpanel">
        <div className="relative aspect-[4/3.4] overflow-hidden rounded-[24px] bg-cream shadow-[0_24px_60px_#583a2826]">
          {services.map((service, index) => (
            <div key={service.image} className={`absolute inset-0 transition duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${index === active ? "scale-100 opacity-100" : "scale-110 opacity-0"} ${service.zoom ? "[&_img]:scale-[1.42]" : ""}`}>
              <Image className="object-cover" src={serviceSrc(service)} alt={index === active ? service.title : ""} fill sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
          ))}
          <div className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/20 to-transparent" aria-hidden="true" />
          {/* Keyed on the active index so the caption replays its entrance every time the service changes. */}
          <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8" key={active}>
            <span className="inline-flex animate-fade-up items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-[12px] font-bold backdrop-blur-md motion-reduce:animate-none">
              <current.icon className="size-4" aria-hidden="true" />{String(active + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
            </span>
            <h3 className="mt-4 mb-0 animate-fade-up font-heading text-[26px] font-bold tracking-[-.6px] [animation-delay:80ms] motion-reduce:animate-none sm:text-[32px]">{current.title}</h3>
            <p className="mt-2 mb-0 line-clamp-3 max-w-[460px] animate-fade-up text-[14px] leading-[1.7] text-white/80 [animation-delay:160ms] motion-reduce:animate-none">{serviceText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
