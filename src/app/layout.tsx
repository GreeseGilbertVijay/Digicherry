import type { Metadata } from "next";
import "./globals.css";
import CursorDot from "./cursor-dot";
import ScrollTop from "./scroll-top";

export const metadata: Metadata = {
  title: "Digicherry | Social, with a little more feeling",
  description: "Digicherry is an independent social studio for ambitious brands. Strategy, stories, and a little cherry-on-top magic for brands ready to be remembered.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="scroll-pt-5 sm:scroll-pt-[88px] motion-safe:scroll-smooth">
      <body className="m-0 bg-paper font-sans text-ink antialiased selection:bg-[#ffc8b8] selection:text-ink">{children}<ScrollTop /><CursorDot /></body>
    </html>
  );
}
