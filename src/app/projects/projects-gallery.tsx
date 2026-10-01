"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PiArrowUpRightBold, PiXBold } from "react-icons/pi";
import BrowserFrame from "./browser-frame";
import { categories, projects, projectSrc, type Project } from "./projects-data";

export default function ProjectsGallery() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<Project | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const shown = filter === "All" ? projects : projects.filter((project) => project.category === filter);

  useEffect(() => {
    if (open) dialog.current?.showModal();
  }, [open]);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter projects">
        {categories.map((category) => {
          const active = category === filter;
          const count = category === "All" ? projects.length : projects.filter((project) => project.category === category).length;
          return (
            <button
              type="button" role="tab" aria-selected={active} key={category} onClick={() => setFilter(category)}
              className={`inline-flex cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-bold transition duration-300 ${active ? "bg-ink text-white shadow-[0_10px_24px_#17151330]" : "bg-white text-ink/70 shadow-[0_4px_14px_#583a280d] hover:-translate-y-0.5 hover:text-ink"}`}
            >
              {category}
              <span className={`grid min-w-5 place-items-center rounded-full px-1.5 text-[11px] leading-5 transition-colors ${active ? "bg-coral text-white" : "bg-cream text-muted"}`}>{count}</span>
            </button>
          );
        })}
      </div>

      {/* Re-keyed on the filter so the cards replay their staggered entrance every time the selection changes. */}
      <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2" key={filter}>
        {shown.map((project, index) => (
          <article className="animate-fade-up motion-reduce:animate-none" style={{ animationDelay: `${index * 110}ms` }} key={project.image}>
            <button type="button" onClick={() => setOpen(project)} className="group/shot block w-full cursor-pointer bg-transparent p-0 text-left" aria-label={`View the full ${project.title} website`}>
              <div className="relative rounded-[22px] p-4 transition duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover/shot:-translate-y-2 sm:p-6" style={{ background: `linear-gradient(140deg, ${project.tone}26, ${project.tone}0d 60%, transparent)` }}>
                <BrowserFrame project={project} sizes="(min-width: 768px) 50vw, 100vw" className="transition-shadow duration-700 group-hover/shot:shadow-[0_34px_70px_#2a1a1040]" />
                <span className="absolute right-8 bottom-8 grid size-14 scale-50 place-items-center rounded-full bg-coral text-white opacity-0 shadow-[0_12px_30px_#f56f5266] transition duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] group-hover/shot:scale-100 group-hover/shot:opacity-100 sm:right-10 sm:bottom-10" aria-hidden="true">
                  <PiArrowUpRightBold className="size-6" />
                </span>
              </div>
              <div className="mt-6 flex items-start justify-between gap-4 px-1">
                <div>
                  <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[.4px] text-muted"><span className="size-2 rounded-full" style={{ background: project.tone }} />{project.category}</span>
                  <h3 className="mt-2 mb-0 font-heading text-[24px] font-bold tracking-[-.6px] transition-colors duration-300 group-hover/shot:text-coral-dark sm:text-[28px]">{project.title}</h3>
                </div>
                <span className="mt-1 font-heading text-[13px] font-bold text-ink/30">{String(projects.indexOf(project) + 1).padStart(2, "0")}</span>
              </div>
              <p className="mt-2 mb-0 px-1 text-[14px] leading-[1.7] text-muted">{project.text}</p>
              <div className="mt-4 flex flex-wrap gap-2 px-1">
                {project.tags.map((tag) => <span className="rounded-full border border-line px-3 py-1 text-[12px] font-semibold text-ink/70" key={tag}>{tag}</span>)}
              </div>
            </button>
          </article>
        ))}
      </div>

      {/* Full-page preview: the whole screenshot in a scrollable window. Closing the dialog (Esc, backdrop or button) clears it. */}
      <dialog
        ref={dialog} onClose={() => setOpen(null)} onClick={(event) => event.target === event.currentTarget && dialog.current?.close()}
        className="m-auto h-[min(88vh,900px)] w-[min(1000px,calc(100%-24px))] max-w-none overflow-hidden rounded-[22px] border-0 bg-white p-0 shadow-[0_40px_100px_#00000066] backdrop:bg-ink/70 backdrop:backdrop-blur-sm open:animate-fade-up"
      >
        {open && (
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-4 sm:px-7">
              <div className="min-w-0">
                <span className="text-[11px] font-bold uppercase tracking-[.4px] text-muted">{open.category}</span>
                <h2 className="m-0 truncate font-heading text-[20px] font-bold tracking-[-.4px] sm:text-[24px]">{open.title}</h2>
              </div>
              <button type="button" onClick={() => dialog.current?.close()} className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-full bg-cream text-ink transition duration-300 hover:rotate-90 hover:bg-coral hover:text-white" aria-label="Close preview"><PiXBold className="size-5" /></button>
            </div>
            <div className="flex-1 overflow-y-auto overscroll-contain bg-cream">
              <Image src={projectSrc(open)} alt={`Full ${open.title} website`} width={1280} height={3000} sizes="(min-width: 1000px) 1000px, 100vw" className="block h-auto w-full" />
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
