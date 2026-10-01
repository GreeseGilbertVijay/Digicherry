"use client";

import { useEffect, useRef, useState } from "react";
import { PiArrowUpRightBold, PiPauseFill, PiPlayFill } from "react-icons/pi";

type Mode = "default" | "text" | "button" | "play" | "pause";

function modeFor(target: EventTarget | null): Mode {
  if (!(target instanceof Element)) return "default";
  const flagged = target.closest("[data-cursor]")?.getAttribute("data-cursor");
  if (flagged === "button" || flagged === "play" || flagged === "pause") return flagged;
  const hasText = Array.from(target.childNodes).some((node) => node.nodeType === Node.TEXT_NODE && node.textContent?.trim());
  return hasText ? "text" : "default";
}

const modeClasses: Record<Mode, string> = {
  default: "size-3 bg-ink",
  text: "size-3 bg-white shadow-[0_1px_4px_#17151340]",
  button: "size-14 border border-white/40 bg-ink/60 backdrop-blur-[2px]",
  play: "size-24 border border-white/40 bg-ink/60 backdrop-blur-[2px]",
  pause: "size-24 border border-white/40 bg-ink/60 backdrop-blur-[2px]",
};

export default function CursorDot() {
  const dot = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<Mode>("default");

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let frame = 0;
    let shown = false;
    // Reels the visitor has clicked into, so the play cursor stops covering a video that is now playing.
    const started = new WeakSet<HTMLIFrameElement>();

    const render = () => {
      current.x += (target.x - current.x) * 0.25;
      current.y += (target.y - current.y) * 0.25;
      if (dot.current) dot.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      frame = Math.abs(target.x - current.x) + Math.abs(target.y - current.y) > 0.1 ? requestAnimationFrame(render) : 0;
    };

    const onMove = (event: PointerEvent) => {
      // Movement inside an embedded iframe (Instagram reels) never reaches this page, so hide rather than freeze.
      const el = event.target instanceof Element ? event.target : null;
      // A reel's border is the last spot this page sees before the pointer disappears into the embed.
      const reelFrame = el?.closest("[data-cursor=\"play\"]")?.querySelector("iframe");
      if (reelFrame) return onIframe(reelFrame);
      if ((el?.closest("[data-cursor=\"hide\"]") && !el.closest("[data-cursor=\"button\"]"))) {
        shown = false;
        setVisible(false);
        return;
      }
      target.x = event.clientX;
      target.y = event.clientY;
      if (!smooth || !shown) {
        current.x = target.x;
        current.y = target.y;
      }
      if (!frame) frame = requestAnimationFrame(render);
      shown = true;
      setVisible(true);
      setMode(modeFor(event.target));
    };
    // The pointer can't be tracked inside an iframe, so over a reel the dot glides onto Instagram's play button
    // and becomes our play icon there; clicks still pass straight through to the embed.
    const onIframe = (frameEl: HTMLIFrameElement) => {
      const reel = frameEl.closest<HTMLElement>("[data-cursor=\"play\"]");
      if (!reel || started.has(frameEl)) return onLeave();
      const rect = frameEl.getBoundingClientRect();
      target.x = rect.left + rect.width / 2;
      target.y = rect.top + Number(reel.dataset.cursorY ?? rect.height / 2);
      if (!smooth || !shown) {
        current.x = target.x;
        current.y = target.y;
      }
      if (!frame) frame = requestAnimationFrame(render);
      shown = true;
      setVisible(true);
      setMode("play");
    };
    // Entering an iframe fires pointerover on the iframe element even when no pointermove reaches this page.
    const onOver = (event: PointerEvent) => {
      if (event.target instanceof HTMLIFrameElement) onIframe(event.target);
    };
    // A click can flip what's under the cursor (play -> pause) without the pointer moving.
    const onClick = () => requestAnimationFrame(() => {
      if (shown) setMode(modeFor(document.elementFromPoint(target.x, target.y)));
    });
    // Clicking into an iframe moves focus to it, which is the only sign this page gets that a reel was started.
    const onBlur = () => setTimeout(() => {
      const focused = document.activeElement;
      if (focused instanceof HTMLIFrameElement && focused.closest("[data-cursor=\"play\"]")) {
        started.add(focused);
        onLeave();
      }
    });
    const onLeave = () => {
      shown = false;
      setVisible(false);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerover", onOver);
    window.addEventListener("click", onClick);
    window.addEventListener("blur", onBlur);
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("click", onClick);
      window.removeEventListener("blur", onBlur);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={dot} className="pointer-events-none fixed top-0 left-0 z-[9999]" aria-hidden="true">
      <div className={`grid -translate-x-1/2 -translate-y-1/2 place-items-center overflow-hidden rounded-full transition-[width,height,background-color,border-color,opacity] duration-300 ease-out ${visible ? "opacity-100" : "opacity-0"} ${modeClasses[mode]}`}>
        <PiArrowUpRightBold className={`col-start-1 row-start-1 size-5 text-white transition duration-200 ${mode === "button" ? "scale-100 opacity-100" : "scale-50 opacity-0"}`} />
        <PiPlayFill className={`col-start-1 row-start-1 ml-1 size-9 text-white transition duration-300 ease-out ${mode === "play" ? "scale-100 opacity-100" : "scale-50 opacity-0"}`} />
        <PiPauseFill className={`col-start-1 row-start-1 size-9 text-white transition duration-200 ${mode === "pause" ? "scale-100 opacity-100" : "scale-50 opacity-0"}`} />
      </div>
    </div>
  );
}
