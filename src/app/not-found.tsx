import type { Metadata } from "next";
import Link from "./transition-link";
import { PiArrowUpRightBold, PiBriefcaseFill, PiChatsCircleFill, PiSparkleFill, PiUsersThreeFill } from "react-icons/pi";
import { bodyText, button, buttonCoral, buttonDark, RollText, sectionWrap } from "./site";
import PageTransition from "./page-transition";
import SwingingCherry from "./swinging-cherry";

export const metadata: Metadata = {
  title: "Page not found | Digicherry",
  description: "The page you were looking for has been picked already. Head back home or explore Digicherry's services and projects.",
};

const detours = [
  { href: "/about", icon: PiUsersThreeFill, title: "About us", text: "Who we are and how we work." },
  { href: "/services", icon: PiSparkleFill, title: "Services", text: "Marketing, SEO, websites and more." },
  { href: "/projects", icon: PiBriefcaseFill, title: "Projects", text: "Brands we have helped grow." },
  { href: "/contact", icon: PiChatsCircleFill, title: "Contact", text: "Tell us what you were after." },
];

const digit = "font-heading text-[clamp(150px,34vw,300px)] leading-[.78] font-extrabold tracking-[-.06em] text-ink";

export default function NotFound() {
  return (
    <PageTransition><main>
      <section className="relative overflow-hidden bg-[#fbf1eb] pt-12 pb-20 sm:pt-16 sm:pb-28" aria-labelledby="not-found-title">
        <div className="pointer-events-none absolute -top-[250px] -right-[142px] size-[440px] animate-breathe rounded-full border border-[#efc9ba80] shadow-[0_0_0_44px_#efc9ba16,0_0_0_89px_#efc9ba10] motion-reduce:animate-none" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-[180px] -left-[160px] size-[360px] animate-breathe rounded-full border border-[#efc9ba80] shadow-[0_0_0_36px_#efc9ba16,0_0_0_72px_#efc9ba10] [animation-delay:-4s] motion-reduce:animate-none" aria-hidden="true" />
        <div className="pointer-events-none absolute top-[30%] left-[12%] size-[200px] animate-float rounded-full bg-coral/10 blur-2xl motion-reduce:animate-none" aria-hidden="true" />
        <div className="pointer-events-none absolute top-[55%] right-[10%] size-[160px] animate-float rounded-full bg-coral/10 blur-2xl [animation-delay:-3s] motion-reduce:animate-none" aria-hidden="true" />

        <div className={`${sectionWrap} relative text-center`}>
          <div className="inline-flex animate-fade-down items-center gap-[9px] rounded-[40px] bg-white py-[5px] pr-3 pl-[5px] text-[11px] font-semibold text-[#5e5550] motion-reduce:animate-none sm:text-[12px]"><span className="animate-ping-soft rounded-[40px] bg-coral px-[9px] py-1 text-[10px] text-white motion-reduce:animate-none">404</span>Page not found</div>

          {/* The cherry pair stands in for the zero. */}
          <div className="mt-8 flex animate-fade-up items-end justify-center gap-[clamp(4px,1.5vw,16px)] select-none motion-reduce:animate-none sm:mt-10">
            <span className={digit} aria-hidden="true">4</span>
            <SwingingCherry className="-mb-[clamp(6px,1.4vw,14px)] h-[clamp(150px,34vw,300px)] shrink-0" />
            <span className={digit} aria-hidden="true">4</span>
          </div>
          <p className="mt-3 mb-0 animate-fade-up text-[11px] font-semibold tracking-[1.6px] text-[#b3a59b] uppercase [animation-delay:300ms] motion-reduce:animate-none max-sm:hidden">Psst, give them a push</p>

          <h1 className="mx-auto mt-8 mb-0 max-w-[760px] animate-fade-up font-heading text-[clamp(34px,8vw,44px)] font-extrabold leading-[1.04] tracking-[-1.4px] [animation-delay:200ms] motion-reduce:animate-none sm:mt-10 sm:text-[clamp(40px,5vw,58px)] sm:tracking-[-2px]" id="not-found-title">
            Looks like this cherry{" "}
            <em className="relative inline-block text-coral not-italic">
              got picked already.
              <svg className="pointer-events-none absolute -bottom-[.25em] left-[4%] h-[.26em] w-[92%]" viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true">
                <path className="animate-draw [animation-delay:900ms] motion-reduce:animate-none" d="M3 14 C 70 4, 160 3, 297 10" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" pathLength="1" strokeDasharray="1" opacity=".45" />
              </svg>
            </em>
          </h1>
          <p className={`${bodyText} mx-auto mt-6 mb-0 max-w-[520px] animate-fade-up text-[15px] [animation-delay:400ms] motion-reduce:animate-none sm:text-base`}>The page you&apos;re looking for has moved, been renamed, or never grew here in the first place. Let&apos;s get you back to the good stuff.</p>
          <div className="mt-8 flex animate-fade-up flex-wrap justify-center gap-3 [animation-delay:550ms] motion-reduce:animate-none">
            <Link data-cursor="button" className={`${button} ${buttonDark}`} href="/"><RollText>Back to home</RollText></Link>
            <Link data-cursor="button" className={`${button} ${buttonCoral}`} href="/contact"><RollText>Let&apos;s talk</RollText></Link>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20" aria-labelledby="detours-title">
        <div className={sectionWrap}>
          <h2 className="m-0 text-center font-heading text-[13px] font-bold tracking-[1.6px] text-muted uppercase" id="detours-title">Or take a detour</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {detours.map(({ href, icon: Icon, title, text }, index) => (
              <Link
                className="group relative flex animate-fade-up flex-col gap-4 overflow-hidden rounded-[22px] border border-line bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-coral/40 hover:shadow-[0_18px_40px_#583a2814] motion-reduce:animate-none"
                style={{ animationDelay: `${700 + index * 90}ms` }}
                href={href}
                key={href}
              >
                <div className="flex items-start justify-between">
                  <span className="grid size-12 place-items-center rounded-full bg-[#fbf1eb] text-coral transition duration-300 group-hover:bg-coral group-hover:text-white"><Icon className="size-[22px]" aria-hidden="true" /></span>
                  <PiArrowUpRightBold className="size-5 text-[#c9bcb3] transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-coral" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="m-0 font-heading text-[19px] font-bold tracking-[-.4px]">{title}</h3>
                  <p className="mt-1 mb-0 text-[14px] leading-[1.6] text-muted">{text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main></PageTransition>
  );
}
