"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import Link from "./transition-link";

// The header sticks to the top: it tucks away while scrolling down and slides back on any scroll up.
// Once the page has scrolled it floats as a frosted pill. Logo, CTA and the mobile menu's footer are rendered
// on the server (see SiteHeader in site.tsx) and handed in, so this file only owns the moving parts.
const hideAfter = 160;

type Indicator = { left: number; width: number; shown: boolean };

export default function HeaderBar({ links, logo, cta, menuFooter }: { links: readonly (readonly [string, string])[]; logo: ReactNode; cta: ReactNode; menuFooter: ReactNode }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const nav = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [indicator, setIndicator] = useState<Indicator>({ left: 0, width: 0, shown: false });

  // Only exact paths count as current, so "/#about" never steals the highlight from Home.
  const active = links.find(([href]) => href === pathname)?.[0] ?? null;
  // The link the pill sits under: dark on the current page, white while previewing another link.
  const target = hovered ?? active;

  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = Math.max(window.scrollY, 0);
      const delta = y - lastY;
      setScrolled(y > 8);
      if (y < hideAfter || delta < -4) setHidden(false);
      else if (delta > 4) setHidden(true);
      if (Math.abs(delta) > 4) lastY = y;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // The pill slides under whichever link is hovered, and rests on the current page's link otherwise.
  useLayoutEffect(() => {
    const measure = () => {
      const el = target ? nav.current?.querySelector<HTMLElement>(`[data-href="${target}"]`) : null;
      setIndicator((prev) => (el ? { left: el.offsetLeft, width: el.offsetWidth, shown: true } : { ...prev, shown: false }));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [target]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    const close = () => window.matchMedia("(min-width: 40rem)").matches && setOpen(false);
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", close);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", close);
    };
  }, [open]);

  const tucked = hidden && !open;

  return (
    <header className={`sticky top-0 z-50 transition-[translate,background-color,padding] duration-500 ease-[cubic-bezier(.22,1,.36,1)] [view-transition-name:site-header] ${tucked ? "-translate-y-[calc(100%+48px)]" : "translate-none"} ${scrolled || open ? "bg-transparent pt-2.5 sm:pt-3" : "bg-paper"}`}>
      {/* Dims the page behind the open mobile menu; tapping it closes the menu. */}
      <div className={`fixed inset-0 -z-10 bg-ink/25 backdrop-blur-[3px] transition-opacity duration-500 sm:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`} onClick={() => setOpen(false)} aria-hidden="true" />
      <div className={`mx-auto transition-[width,padding,border-radius,background-color,box-shadow,border-color] duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${scrolled || open
        ? "w-[calc(100%-20px)] rounded-[26px] border border-white/70 bg-paper/90 px-3 shadow-[0_14px_40px_#583a281a,0_2px_6px_#583a280d] backdrop-blur-xl backdrop-saturate-150 sm:w-[calc(100%-6vw)] sm:rounded-full sm:px-4 md:w-[min(1200px,calc(100%-8vw))]"
        : "w-[calc(100%-10vw)] border border-transparent sm:w-[calc(100%-8vw)] md:w-[min(1160px,calc(100%-11vw))]"}`}>
        <div className={`flex items-center justify-between gap-3 transition-[height] duration-500 ease-[cubic-bezier(.22,1,.36,1)] sm:gap-7 ${scrolled || open ? "h-[62px] sm:h-[66px]" : "h-[70px] sm:h-[82px]"}`}>
          <div className={`shrink-0 origin-left transition-[scale] duration-500 ${scrolled ? "scale-[.88]" : ""}`} onClick={() => setOpen(false)}>{logo}</div>

          <nav ref={nav} className="relative m-auto hidden items-center p-1 sm:flex" aria-label="Main navigation" onMouseLeave={() => setHovered(null)}>
            <span
              className={`pointer-events-none absolute top-1 bottom-1 rounded-full shadow-[0_4px_14px_#583a281f] transition-[left,width,opacity,background-color] duration-300 ease-[cubic-bezier(.22,1,.36,1)] ${indicator.shown ? "opacity-100" : "opacity-0"} ${target === active ? "bg-ink" : "bg-white"}`}
              style={{ left: indicator.left, width: indicator.width }}
              aria-hidden="true"
            />
            {links.map(([href, label]) => {
              const current = href === active;
              return (
                <Link
                  className={`relative rounded-full px-[clamp(12px,1.6vw,20px)] py-2 text-[13px] font-semibold transition-colors duration-300 ${href !== target ? "text-ink/75" : current ? "text-white" : "text-coral-dark"}`}
                  href={href}
                  key={href}
                  data-href={href}
                  aria-current={current ? "page" : undefined}
                  onMouseEnter={() => setHovered(href)}
                  onFocus={() => setHovered(href)}
                  onBlur={() => setHovered(null)}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            {cta}
            <button
              type="button"
              className="relative grid size-10 shrink-0 cursor-pointer place-items-center rounded-full border border-line bg-white sm:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((value) => !value)}
            >
              <span className={`absolute h-[2px] w-[18px] rounded-full bg-ink transition duration-300 ${open ? "rotate-45" : "-translate-y-[5px]"}`} />
              <span className={`absolute h-[2px] w-[18px] rounded-full bg-ink transition duration-300 ${open ? "-rotate-45" : "translate-y-[5px]"}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu: grows out of the floating bar. */}
        <div id="mobile-menu" className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(.22,1,.36,1)] sm:hidden ${open ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0"}`} inert={!open}>
          <div className="overflow-hidden">
            <nav className="flex flex-col border-t border-line/80 pt-3 pb-2" aria-label="Mobile navigation">
              {links.map(([href, label], index) => (
                <Link
                  className={`group flex items-center justify-between rounded-2xl px-3 py-3 font-heading text-[26px] font-extrabold tracking-[-.8px] transition duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${href === active ? "text-coral" : "text-ink"} ${open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
                  style={{ transitionDelay: open ? `${80 + index * 50}ms` : "0ms" }}
                  href={href}
                  key={href}
                  onClick={() => setOpen(false)}
                >
                  {label}
                  <span className={`text-[13px] font-semibold tracking-normal ${href === active ? "text-coral" : "text-[#c9bcb3]"}`}>0{index + 1}</span>
                </Link>
              ))}
            </nav>
            <div className={`border-t border-line/80 px-3 pt-4 pb-5 transition duration-500 ${open ? "opacity-100 delay-300" : "opacity-0"}`}>{menuFooter}</div>
          </div>
        </div>
      </div>
    </header>
  );
}
