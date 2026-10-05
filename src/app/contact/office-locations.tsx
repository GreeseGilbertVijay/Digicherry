"use client";

import { useState } from "react";
import { PiArrowUpRightBold, PiMapPinFill } from "react-icons/pi";
import Reveal from "../reveal";
import { offices, sectionWrap } from "../site";

const query = (office: (typeof offices)[number]) => encodeURIComponent(`Digicherry, ${office.address.join(" ")}`);

// Office cards on the left drive the map on the right, so visitors can preview each location without leaving the page.
export default function OfficeLocations() {
  const [active, setActive] = useState(0);
  const office = offices[active];

  return (
    <section className="scroll-mt-28 pb-16 sm:pb-24" id="offices" aria-labelledby="offices-title">
      <div className={sectionWrap}>
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4 sm:mb-12">
          <div>
            <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[.4px]"><span className="size-2 rounded-full bg-coral" aria-hidden="true" />Our offices</span>
            <h2 className="mt-4 mb-0 font-heading text-[clamp(32px,5vw,48px)] font-extrabold leading-[1.05] tracking-[-1.4px]" id="offices-title">Find us in <span className="text-coral">{offices.length} locations</span></h2>
          </div>
          <p className="m-0 max-w-[360px] text-[14px] leading-[1.8] text-muted">From our head office in Puducherry to Chennai, Mumbai and France, there&apos;s a Digicherry team near you.</p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr] lg:gap-8">
          <div className="grid content-start gap-4 sm:grid-cols-2 lg:grid-cols-1" role="tablist" aria-label="Office locations">
            {offices.map((item, index) => {
              const selected = index === active;
              return (
                <Reveal delay={index * 90} key={item.city}>
                  <div
                    className={`group/office relative cursor-pointer overflow-hidden rounded-[22px] border p-5 transition duration-500 ease-[cubic-bezier(.22,1,.36,1)] sm:p-6 ${selected ? "border-coral bg-white shadow-[0_20px_44px_#583a2820]" : "border-line bg-white/70 hover:-translate-y-1 hover:border-coral/40 hover:bg-white hover:shadow-[0_14px_34px_#583a2814]"}`}
                    role="tab"
                    tabIndex={0}
                    aria-selected={selected}
                    aria-controls="office-map"
                    onClick={() => setActive(index)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setActive(index);
                      }
                    }}
                  >
                    <span className={`absolute inset-y-0 left-0 w-1 bg-coral transition-transform duration-500 ${selected ? "scale-y-100" : "scale-y-0"}`} aria-hidden="true" />
                    <div className="flex items-start gap-4">
                      <span className={`grid size-12 shrink-0 place-items-center rounded-2xl transition duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] ${selected ? "bg-coral text-white" : "bg-cream text-coral group-hover/office:-rotate-6 group-hover/office:scale-110"}`}><PiMapPinFill className="size-6" aria-hidden="true" /></span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[12px] font-bold uppercase tracking-[.4px] text-muted"><span className="mr-1.5" aria-hidden="true">{item.flag}</span>{item.country}</span>
                          {item.label && <span className="rounded-full bg-coral/10 px-2.5 py-0.5 text-[11px] font-bold text-coral">{item.label}</span>}
                        </div>
                        <h3 className="mt-1 mb-0 font-heading text-[19px] font-bold tracking-[-.3px]">{item.city}</h3>
                        <address className="mt-2 text-[14px] not-italic leading-[1.7] text-muted">
                          {item.address.map((line) => <span className="block" key={line}>{line}</span>)}
                        </address>
                        <a
                          className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-bold text-ink transition-colors hover:text-coral"
                          href={`https://www.google.com/maps/search/?api=1&query=${query(item)}`}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(event) => event.stopPropagation()}
                        >
                          Get directions<PiArrowUpRightBold className="size-3.5" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={150} className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative overflow-hidden rounded-[28px] border-4 border-white shadow-[0_18px_44px_#583a2818]" id="office-map" role="tabpanel">
              <iframe className="block h-[360px] w-full border-0 grayscale-[.3] sm:h-[440px] lg:h-[560px]" src={`https://www.google.com/maps?q=${query(office)}&output=embed`} title={`Digicherry ${office.city} office on Google Maps`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" key={office.city} />
              <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-2xl bg-[#211d1a]/90 p-4 text-white backdrop-blur sm:right-auto sm:max-w-[340px]">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-coral"><PiMapPinFill className="size-5" aria-hidden="true" /></span>
                <span className="min-w-0">
                  <span className="block font-heading text-[15px] font-semibold">{office.city}, {office.country}</span>
                  <span className="block truncate text-[12px] text-[#e9dcd2]">{office.address.join(" ")}</span>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
