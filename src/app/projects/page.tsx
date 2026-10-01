import type { Metadata } from "next";
import Link from "../transition-link";
import { PiSparkleFill } from "react-icons/pi";
import CountUp from "../count-up";
import Reveal from "../reveal";
import { button, buttonCoral, buttonDark, buttonLight, RollText, sectionHeading, sectionWrap } from "../site";
import BrowserFrame from "./browser-frame";
import { projects } from "./projects-data";
import ProjectsGallery from "./projects-gallery";
import PageTransition from "../page-transition";

export const metadata: Metadata = {
  title: "Projects | Digicherry",
  description: "Websites and digital work Digicherry has designed and built for brands in technology, hospitality, manufacturing and food.",
};

// The three hero mockups fan out behind each other; each floats on its own delay and pans its page on a loop.
const heroStack = [
  { project: projects[1], className: "left-0 top-[14%] w-[62%] -rotate-[7deg] [animation-delay:-2s]", scrollDelay: "-6s" },
  { project: projects[5], className: "right-0 top-[4%] w-[60%] rotate-[6deg] [animation-delay:-4s]", scrollDelay: "-11s" },
  { project: projects[3], className: "left-[17%] top-[30%] z-[1] w-[66%] [animation-delay:0s]", scrollDelay: "0s" },
];

const stats = [
  { value: 5, suffix: "+", label: "Years building websites" },
  { value: 100, suffix: "+", label: "Happy clients" },
  { value: projects.length, suffix: "", label: "Featured projects here" },
];


export default function ProjectsPage() {
  return (
    <PageTransition><main>
      <section className="relative overflow-hidden bg-[#fbf1eb] pt-14 pb-20 sm:pt-20 sm:pb-28" aria-labelledby="projects-title">
        <div className="pointer-events-none absolute -top-[250px] -right-[142px] size-[440px] animate-breathe rounded-full border border-[#efc9ba80] shadow-[0_0_0_44px_#efc9ba16,0_0_0_89px_#efc9ba10] motion-reduce:animate-none" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-0 -left-[90px] size-[260px] animate-float rounded-full bg-coral/10 blur-3xl motion-reduce:animate-none" aria-hidden="true" />
        <div className={`${sectionWrap} relative grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-10`}>
          <div className="text-center lg:text-left">
            <span className="inline-flex animate-fade-down items-center gap-[9px] rounded-[40px] bg-white py-[5px] pr-3 pl-[5px] text-[11px] font-semibold text-[#5e5550] motion-reduce:animate-none"><span className="rounded-[40px] bg-coral px-[9px] py-1 text-[10px] text-white">Our work</span>Websites that win customers</span>
            <h1 className="mt-7 mb-0 animate-fade-up font-heading text-[clamp(42px,7vw,72px)] font-extrabold leading-[1] tracking-[-2.4px] motion-reduce:animate-none" id="projects-title">Projects we&apos;re <span className="relative inline-block text-coral">proud<PiSparkleFill className="absolute -top-[.18em] -right-[.42em] size-[.38em] rotate-12 animate-pulse text-coral motion-reduce:animate-none" aria-hidden="true" /></span> of</h1>
            <p className="mx-auto mt-6 mb-0 max-w-[480px] animate-fade-up text-[15px] leading-[1.8] text-muted [animation-delay:200ms] motion-reduce:animate-none lg:mx-0">From industrial tech to boutique resorts and restaurants, here&apos;s a look at websites we&apos;ve designed and built to bring in more reach and more leads.</p>
            <div className="mt-8 flex animate-fade-up flex-wrap justify-center gap-3 [animation-delay:350ms] motion-reduce:animate-none lg:justify-start">
              <a data-cursor="button" className={`${button} ${buttonDark}`} href="#gallery"><RollText>Browse projects</RollText></a>
              <Link data-cursor="button" className={`${button} ${buttonLight}`} href="/contact"><RollText>Start your project</RollText></Link>
            </div>
            <dl className="mt-10 grid animate-fade-up grid-cols-3 gap-3 [animation-delay:500ms] motion-reduce:animate-none">
              {stats.map((stat) => (
                <div className="flex flex-col-reverse rounded-[18px] bg-white/70 px-3 py-4 backdrop-blur-sm" key={stat.label}>
                  <dt className="mt-1 text-[11px] font-semibold leading-[1.4] text-muted sm:text-[12px]">{stat.label}</dt>
                  <dd className="m-0 font-heading text-[26px] font-extrabold tracking-[-.6px] text-ink sm:text-[32px]"><CountUp value={stat.value} suffix={stat.suffix} /></dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto aspect-[1/.82] w-full max-w-[560px] animate-fade-up [animation-delay:300ms] motion-reduce:animate-none" aria-hidden="true">
            {heroStack.map(({ project, className, scrollDelay }) => (
              <div className={`absolute animate-float motion-reduce:animate-none ${className}`} key={project.image}>
                <div style={{ ["--scroll-delay" as string]: scrollDelay }} className="[&_img]:[animation-delay:var(--scroll-delay)]">
                  <BrowserFrame project={project} scroll="auto" sizes="(min-width: 1024px) 360px, 66vw" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client names drift past like the logo strip on the home page; the doubled track loops seamlessly. */}
      <section className="overflow-hidden border-y border-line bg-paper py-5" aria-label="Clients featured">
        <div className="flex w-max animate-marquee [animation-duration:40s] hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[...projects, ...projects, ...projects, ...projects].map((project, index) => (
            <span className="mr-10 inline-flex shrink-0 items-center gap-10 font-heading text-[22px] font-bold tracking-[-.5px] text-ink/80 sm:text-[28px]" key={index} aria-hidden={index >= projects.length || undefined}>
              {project.title}<PiSparkleFill className="size-5 text-coral" aria-hidden="true" />
            </span>
          ))}
        </div>
      </section>

      <section className="scroll-mt-6 py-16 sm:py-24" id="gallery" aria-labelledby="gallery-title">
        <div className={sectionWrap}>
          <div className="mb-10 text-center">
            <Reveal><span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[.4px]"><span className="size-2 animate-ping-soft rounded-full bg-coral" aria-hidden="true" />Selected work</span></Reveal>
            <Reveal delay={120}><h2 className={`${sectionHeading} mx-auto mt-4 max-w-[700px]`} id="gallery-title">Hover to scroll, <span className="text-coral">click to explore</span></h2></Reveal>
          </div>
          <ProjectsGallery />
        </div>
      </section>

      <section className="pb-16 sm:pb-24" aria-labelledby="projects-cta">
        <Reveal className={sectionWrap}>
          <div className="relative overflow-hidden rounded-[28px] bg-[#211d1a] px-6 py-14 text-center text-white sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute -top-24 -right-24 size-[320px] animate-breathe rounded-full border border-coral/40 shadow-[0_0_0_40px_#f56f5212,0_0_0_80px_#f56f520a] motion-reduce:animate-none" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-20 -left-16 size-[240px] animate-float rounded-full bg-coral/25 blur-3xl motion-reduce:animate-none" aria-hidden="true" />
            <h2 className="relative m-0 font-heading text-[clamp(30px,5vw,50px)] font-extrabold leading-[1.08] tracking-[-1.4px]" id="projects-cta">Your website could be <span className="text-coral">next</span></h2>
            <p className="relative mx-auto mt-4 mb-0 max-w-[520px] text-[15px] leading-[1.7] text-[#b6aaa1]">Tell us about your business and we&apos;ll show you what a site built to convert could look like.</p>
            <div className="relative mt-8 flex justify-center">
              <Link data-cursor="button" className={`${button} ${buttonCoral}`} href="/contact"><RollText>Start your project</RollText></Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main></PageTransition>
  );
}
