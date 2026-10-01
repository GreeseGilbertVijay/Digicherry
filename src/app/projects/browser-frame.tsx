import Image from "next/image";
import { projectSrc, type Project } from "./projects-data";

// A browser window around a full-page screenshot. `scroll` decides how the page moves:
// "hover" pans to the footer while the parent `group/shot` is hovered, "auto" pans on a loop.
export default function BrowserFrame({ project, scroll = "hover", sizes, className = "" }: { project: Project; scroll?: "hover" | "auto"; sizes: string; className?: string }) {
  const motion = scroll === "auto"
    ? "animate-page-scroll motion-reduce:animate-none"
    : "transition-[object-position] duration-[5s] ease-in-out group-hover/shot:object-bottom group-focus-visible/shot:object-bottom group-hover/shot:duration-[7s]";

  return (
    <div className={`overflow-hidden rounded-[16px] bg-white shadow-[0_24px_60px_#2a1a1033] ring-1 ring-black/5 ${className}`}>
      <div className="flex h-8 items-center gap-1.5 border-b border-line bg-[#f6efe9] px-3.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" /><span className="size-2.5 rounded-full bg-[#febc2e]" /><span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 h-4 flex-1 truncate rounded-full bg-white px-3 text-[9px] leading-4 text-muted">{project.title}</span>
      </div>
      <div className="relative aspect-[4/3] overflow-hidden bg-cream">
        <Image className={`object-cover object-top ${motion}`} src={projectSrc(project)} alt={`${project.title} website`} fill sizes={sizes} />
      </div>
    </div>
  );
}
