import type { Metadata } from "next";
import Image from "next/image";
import Link from "../transition-link";
import type { ReactNode } from "react";
import { PiArrowUpRightBold, PiChatsCircleFill, PiLightbulbFilamentFill, PiRocketLaunchFill, PiTrendUpFill } from "react-icons/pi";
import Reveal from "../reveal";
import { serviceSrc, serviceText, services } from "../services-data";
import { bodyText, button, buttonDark, RollText, sectionHeading, sectionWrap } from "../site";
import ServicePanels from "../service-panels";
import ServiceSwitcher from "./service-switcher";
import SpotlightGrid from "./spotlight-grid";
import PageTransition from "../page-transition";

export const metadata: Metadata = {
  title: "Services | Digicherry",
  description: "Digital marketing, SEO, social media, websites, content, design, video, ad campaigns and reputation management from Digicherry.",
};

const steps = [
  { icon: PiChatsCircleFill, title: "Discover", text: "We learn your business, your customers and what growth means to you." },
  { icon: PiLightbulbFilamentFill, title: "Plan", text: "A clear strategy with channels, content and targets you can measure." },
  { icon: PiRocketLaunchFill, title: "Launch", text: "Campaigns, creatives and websites built and shipped by one team." },
  { icon: PiTrendUpFill, title: "Grow", text: "Monthly reporting and constant tuning to bring in more leads." },
];

// Each design gets the same header: a model number, a name and one line on what makes it different.
function Model({ number, name, note, dark = false, children }: { number: string; name: string; note: string; dark?: boolean; children: ReactNode }) {
  return (
    <section className={`py-16 sm:py-24 ${dark ? "bg-[#211d1a] text-white" : ""}`} aria-label={`Model ${number}: ${name}`}>
      <div className={sectionWrap}>
        <Reveal className="mb-10 flex flex-col gap-3 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[.4px]"><span className="size-2 animate-ping-soft rounded-full bg-coral" aria-hidden="true" />Model {number}</span>
            <h2 className="mt-3 mb-0 font-heading text-[32px] font-extrabold tracking-[-1px] sm:text-[44px]">{name}</h2>
          </div>
          <p className={`m-0 max-w-[380px] text-[14px] leading-[1.7] ${dark ? "text-[#b6aaa1]" : "text-muted"}`}>{note}</p>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

function Bento() {
  const [featured, ...rest] = services;
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Reveal className="sm:col-span-2 lg:row-span-2">
          <article className="group/card relative flex h-full min-h-[420px] flex-col justify-end overflow-hidden rounded-[24px] p-8 text-white">
            <Image className="scale-110 object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.22,1,.36,1)] group-data-[shown]:scale-100 group-hover/card:!scale-105" src={serviceSrc(featured)} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" />
            <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/50 to-ink/0" aria-hidden="true" />
            <span className="relative grid size-16 place-items-center rounded-2xl bg-coral shadow-[0_14px_34px_#f56f5266] transition duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] group-hover/card:-rotate-6 group-hover/card:scale-110"><featured.icon className="size-8" aria-hidden="true" /></span>
            <h3 className="relative mt-6 mb-0 font-heading text-[30px] font-bold tracking-[-.8px] sm:text-[38px]">{featured.title}</h3>
            <p className="relative mt-3 mb-0 line-clamp-3 max-w-[460px] text-[15px] leading-[1.7] text-white/80">{serviceText}</p>
          </article>
        </Reveal>
        {rest.map((service, index) => {
          // One tile in the grid is filled coral so the eye has a second anchor after the featured card.
          const accent = index === 3;
          return (
            <Reveal delay={(index % 4) * 90} key={service.image} className="h-full">
              <article className={`group/card relative flex h-full flex-col overflow-hidden rounded-[24px] p-6 transition duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1.5 ${accent ? "bg-coral text-white shadow-[0_18px_40px_#f56f5240]" : "bg-white shadow-[0_8px_24px_#583a280d] hover:shadow-[0_20px_44px_#583a2820]"}`}>
                <service.icon className={`pointer-events-none absolute -right-6 -bottom-6 size-36 rotate-[-12deg] transition duration-700 group-hover/card:rotate-0 group-hover/card:scale-110 ${accent ? "text-white/15" : "text-coral/[.07]"}`} aria-hidden="true" />
                <span className={`relative grid size-12 place-items-center rounded-xl transition duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] group-hover/card:-rotate-6 group-hover/card:scale-110 ${accent ? "bg-white text-coral" : "bg-cream text-coral group-hover/card:bg-coral group-hover/card:text-white"}`}><service.icon className="size-6" aria-hidden="true" /></span>
                <h3 className="relative mt-5 mb-0 font-heading text-[18px] font-semibold leading-[1.3] tracking-[-.3px]">{service.title}</h3>
                <p className={`relative mt-2 mb-0 line-clamp-3 text-[13px] leading-[1.65] ${accent ? "text-white/85" : "text-muted"}`}>{serviceText}</p>
              </article>
            </Reveal>
          );
        })}
    </div>
  );
}

function OrbitCards() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <Reveal delay={(index % 3) * 110} key={service.image} className="h-full">
          {/* A spinning conic gradient sits behind a 2px inset, so on hover the border becomes a travelling coral light. */}
          <article className="group/card relative h-full overflow-hidden rounded-[26px] bg-line p-[2px] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_#f56f5226]">
            <div className="pointer-events-none absolute top-1/2 left-1/2 aspect-square w-[160%] -translate-1/2 animate-[spin_4s_linear_infinite] opacity-0 transition-opacity duration-500 group-hover/card:opacity-100 motion-reduce:animate-none [background:conic-gradient(from_0deg,transparent_0_60%,#f56f52_80%,#ffb38f_90%,transparent)]" aria-hidden="true" />
            <div className="relative flex h-full flex-col items-center rounded-[24px] bg-paper px-7 pt-10 pb-8 text-center">
              <div className="relative grid size-24 place-items-center">
                <span className="absolute inset-0 rounded-full border border-dashed border-coral/40 transition duration-[1200ms] group-hover/card:rotate-180 group-hover/card:border-coral" aria-hidden="true" />
                <span className="absolute inset-3 rounded-full bg-[#fde3da] transition duration-500 group-hover/card:scale-110 group-hover/card:bg-coral" aria-hidden="true" />
                <service.icon className="relative size-9 text-coral transition duration-500 group-hover/card:scale-110 group-hover/card:text-white" aria-hidden="true" />
              </div>
              <h3 className="mt-7 mb-0 font-heading text-[20px] font-semibold leading-[1.3] tracking-[-.4px]">{service.title}</h3>
              <p className="mt-3 mb-0 line-clamp-3 text-[14px] leading-[1.7] text-muted">{serviceText}</p>
              <Link data-cursor="button" className="mt-auto inline-flex items-center gap-2 pt-6 text-[13px] font-bold text-ink transition-colors hover:text-coral-dark" href="/contact" aria-label={`Talk to us about ${service.title}`}>
                Learn more
                <span className="grid size-8 place-items-center rounded-full bg-cream transition duration-500 group-hover/card:rotate-45 group-hover/card:bg-coral group-hover/card:text-white"><PiArrowUpRightBold aria-hidden="true" /></span>
              </Link>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}


export default function ServicesPage() {
  return (
    <PageTransition><main>
      <section className="relative overflow-hidden bg-[#fbf1eb] py-16 text-center sm:py-24" aria-labelledby="services-title">
        <div className="pointer-events-none absolute -top-[250px] -right-[142px] size-[440px] animate-breathe rounded-full border border-[#efc9ba80] shadow-[0_0_0_44px_#efc9ba16,0_0_0_89px_#efc9ba10] motion-reduce:animate-none" aria-hidden="true" />
        <div className="pointer-events-none absolute top-[40%] -left-[90px] size-[180px] animate-float rounded-full bg-coral/10 blur-2xl motion-reduce:animate-none" aria-hidden="true" />
        <div className={`${sectionWrap} relative`}>
          <span className="inline-flex animate-fade-down items-center gap-2 text-[12px] font-bold uppercase tracking-[.4px] motion-reduce:animate-none"><span className="size-2 animate-ping-soft rounded-full bg-coral" aria-hidden="true" />Our Services</span>
          <h1 className="mx-auto mt-5 mb-0 max-w-[820px] animate-fade-up font-heading text-[clamp(40px,7vw,68px)] font-extrabold leading-[1.02] tracking-[-2px] motion-reduce:animate-none" id="services-title">Everything your brand needs to <span className="text-coral">grow online</span></h1>
          <p className="mx-auto mt-6 mb-0 max-w-[560px] animate-fade-up text-[15px] leading-[1.8] text-muted [animation-delay:200ms] motion-reduce:animate-none">From the first click to the final sale, we plan, build and run campaigns that turn attention into enquiries and enquiries into loyal customers.</p>
        </div>
      </section>

      <Model number="01" name="Bento grid" note="One featured photo tile anchors a grid of icon tiles, with a large watermark icon that turns as you hover.">
        <Bento />
      </Model>
      <Model number="02" name="Spotlight" note="Dark cards where a coral glow and border light follow the cursor. Feels premium and techy." dark>
        <SpotlightGrid />
      </Model>
      <Model number="03" name="Orbit icons" note="Icon-only cards. The dashed ring spins and a light travels around the border on hover.">
        <OrbitCards />
      </Model>
      <Model number="04" name="Interactive list" note="Hover a service on the left and the large preview crossfades to its photo and copy. Compact and editorial.">
        <ServiceSwitcher />
      </Model>
      <Model number="05" name="Expanding panels" note="Photo panels that widen on hover to reveal the copy. Most dramatic; best as a full-width showcase." dark>
        <ServicePanels />
      </Model>

      <section className="bg-[#fbf1eb] py-16 sm:py-24" aria-labelledby="process-title">
        <div className={sectionWrap}>
          <div className="text-center">
            <Reveal><span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[.4px]"><span className="size-2 animate-ping-soft rounded-full bg-coral" aria-hidden="true" />How we work</span></Reveal>
            <Reveal delay={120}><h2 className={`${sectionHeading} mx-auto mt-4 max-w-[680px]`} id="process-title">Four steps from idea to <span className="text-coral">results</span></h2></Reveal>
          </div>
          <ol className="mt-12 grid list-none gap-5 p-0 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title}>
                <Reveal delay={index * 110} className="h-full">
                  <div className="group/step relative h-full rounded-[22px] bg-paper p-7 transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_44px_#583a2818]">
                    <span className="absolute top-6 right-7 font-heading text-[40px] font-extrabold leading-none text-coral/15">{String(index + 1).padStart(2, "0")}</span>
                    <span className="grid size-14 place-items-center rounded-2xl bg-white text-coral shadow-[0_10px_26px_#583a2812] transition duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] group-hover/step:-rotate-6 group-hover/step:scale-110 group-hover/step:bg-coral group-hover/step:text-white"><step.icon className="size-7" aria-hidden="true" /></span>
                    <h3 className="mt-6 mb-0 font-heading text-[21px] font-semibold tracking-[-.4px]">{step.title}</h3>
                    <p className={`mt-2 mb-0 text-[14px] ${bodyText} !leading-[1.65]`}>{step.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 sm:py-24" aria-labelledby="services-cta">
        <Reveal className={sectionWrap}>
          <div className="relative overflow-hidden rounded-[28px] bg-coral px-6 py-14 text-center text-white sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute -top-24 -right-24 size-[320px] animate-breathe rounded-full border border-white/30 shadow-[0_0_0_40px_#ffffff10,0_0_0_80px_#ffffff08] motion-reduce:animate-none" aria-hidden="true" />
            <h2 className="relative m-0 font-heading text-[clamp(30px,5vw,48px)] font-extrabold leading-[1.08] tracking-[-1.4px]" id="services-cta">Ready for more reach and more leads?</h2>
            <p className="relative mx-auto mt-4 mb-0 max-w-[520px] text-[15px] leading-[1.7] text-white/85">Tell us where you want to grow. We&apos;ll come back with a plan, free of charge.</p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <Link data-cursor="button" className={`${button} ${buttonDark}`} href="/contact"><RollText>Get a free strategy call</RollText></Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main></PageTransition>
  );
}
