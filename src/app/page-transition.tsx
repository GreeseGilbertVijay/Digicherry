import { ViewTransition, type ReactNode } from "react";

// Wraps a page's content so it slides in the direction of travel. Any navigation without a direction
// falls back to a soft fade. Must sit in each page, not the layout: layouts persist, so they never enter or exit.
export default function PageTransition({ children }: { children: ReactNode }) {
  const motion = { "nav-forward": "nav-forward", "nav-back": "nav-back", default: "page-fade" };
  return <ViewTransition enter={motion} exit={motion} default="none">{children}</ViewTransition>;
}
