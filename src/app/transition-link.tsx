"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

// Pages in menu order. Moving to a page further along slides forward (content exits left); moving back slides the other way.
const order = ["/", "/services", "/projects", "/contact"];
const rank = (path: string) => Math.max(0, order.indexOf(path.split("#")[0] || "/"));

export default function TransitionLink({ href, ...props }: Omit<ComponentProps<typeof Link>, "href" | "transitionTypes"> & { href: string }) {
  const pathname = usePathname();
  const from = rank(pathname);
  const to = rank(href);
  // Same page (e.g. "/#about" while on "/") is a scroll, not a navigation, so it gets no slide.
  const types = to === from ? undefined : [to > from ? "nav-forward" : "nav-back"];
  return <Link href={href} transitionTypes={types} {...props} />;
}
