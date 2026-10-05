import type { Metadata } from "next";
import Image from "next/image";
import Link from "../transition-link";
import { PiArrowUpRightBold, PiCalendarCheckFill, PiChartLineUpFill, PiCompassFill, PiEyeFill, PiHandshakeFill, PiHeartFill, PiLightbulbFilamentFill, PiMapPinFill, PiSmileyFill, PiTargetFill, PiTrendUpFill, PiUsersThreeFill } from "react-icons/pi";
import CountUp from "../count-up";
import Reveal from "../reveal";
import { bodyText, button, buttonDark, buttonLight, offices, RollText, sectionHeading, sectionWrap } from "../site";
import PageTransition from "../page-transition";

export const metadata: Metadata = {
  title: "About Us | Digicherry",
  description: "Meet Digicherry, a digital marketing and website development company from Puducherry with offices in Chennai, Mumbai and France.",
};

const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=80`;

const stats = [
  { icon: PiCalendarCheckFill, value: 5, suffix: "+", title: "Years of experience" },
  { icon: PiSmileyFill, value: 100, suffix: "+", title: "Happy clients" },
  { icon: PiTrendUpFill, value: 10000, suffix: "+", title: "Leads generated" },
  { icon: PiMapPinFill, value: offices.length, suffix: "", title: "Office locations" },
];

const pillars = [
  { icon: PiTargetFill, title: "Our mission", text: "To help every business we work with get found, get chosen and keep growing online, with marketing that is honest, measurable and built around real goals." },
  { icon: PiEyeFill, title: "Our vision", text: "To be the most trusted growth partner for brands across India and beyond, known for work that moves numbers, not just impressions." },
  { icon: PiCompassFill, title: "Our approach", text: "Strategy first, then execution. We study your market, plan the channels that matter and keep tuning every campaign with data." },
];

const values = [
  { icon: PiHandshakeFill, title: "Partnership", text: "We work as an extension of your team, with clear communication and no surprises." },
  { icon: PiChartLineUpFill, title: "Results", text: "Every campaign has targets, and every month you see exactly how it performed." },
  { icon: PiLightbulbFilamentFill, title: "Creativity", text: "Ideas that stop the scroll, backed by research into what your audience wants." },
  { icon: PiHeartFill, title: "Care", text: "We treat your brand like our own and celebrate your wins as if they were ours." },
];

const reasons = [
  "One team for marketing, design, content and websites",
  "Transparent monthly reporting you can actually read",
  "Strategies tailored to your business, never copy-paste",
  "Local roots in Puducherry with reach across India and France",
];


export default function AboutPage() {
  return (
    <PageTransition><main>
      <section className="relative overflow-hidden bg-[#fbf1eb] py-16 text-center sm:py-24" aria-labelledby="about-title">
        <div className="pointer-events-none absolute -top-[250px] -right-[142px] size-[440px] animate-breathe rounded-full border border-[#efc9ba80] shadow-[0_0_0_44px_#efc9ba16,0_0_0_89px_#efc9ba10] motion-reduce:animate-none" aria-hidden="true" />
        <div className="pointer-events-none absolute top-[40%] -left-[90px] size-[180px] animate-float rounded-full bg-coral/10 blur-2xl motion-reduce:animate-none" aria-hidden="true" />
        <div className={`${sectionWrap} relative`}>
          <span className="inline-flex animate-fade-down items-center gap-2 text-[12px] font-bold uppercase tracking-[.4px] motion-reduce:animate-none"><span className="size-2 animate-ping-soft rounded-full bg-coral" aria-hidden="true" />About Us</span>
          <h1 className="mx-auto mt-5 mb-0 max-w-[860px] animate-fade-up font-heading text-[clamp(40px,7vw,68px)] font-extrabold leading-[1.02] tracking-[-2px] motion-reduce:animate-none" id="about-title">We turn digital presence into <span className="text-coral">lasting success</span></h1>
          <p className="mx-auto mt-6 mb-0 max-w-[580px] animate-fade-up text-[15px] leading-[1.8] text-muted [animation-delay:200ms] motion-reduce:animate-none">Digicherry is a digital marketing and website development company born in Puducherry. We help businesses grow their reach, win more leads and build brands people remember.</p>
        </div>
      </section>

      {/* Story: a stacked photo pair on one side, the copy on the other. */}
      <section className="py-16 sm:py-24" aria-labelledby="story-title">
        <div className={`${sectionWrap} grid items-center gap-12 lg:grid-cols-2 lg:gap-16`}>
          <Reveal className="relative pb-16 sm:pb-20 lg:pb-0">
            <div className="relative h-[340px] overflow-hidden rounded-[24px] shadow-[0_18px_44px_#583a2818] sm:h-[440px] lg:mr-16">
              <Image className="scale-[1.15] object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.22,1,.36,1)] group-data-[shown]:scale-100" src={unsplash("1522071820081-009f0129c71c")} alt="The Digicherry team collaborating" fill sizes="(min-width: 1024px) 45vw, 100vw" />
            </div>
            <div className="absolute right-0 bottom-0 h-[160px] w-[55%] overflow-hidden rounded-[20px] border-[6px] border-white shadow-[0_18px_44px_#583a2826] sm:h-[200px] lg:-bottom-10">
              <Image className="object-cover" src={unsplash("1552664730-d307ca884978")} alt="Planning a campaign on a whiteboard" fill sizes="(min-width: 1024px) 25vw, 55vw" />
            </div>
            <div className="absolute top-6 -left-2 flex items-center gap-3 rounded-2xl bg-white p-3 pr-5 shadow-[0_14px_34px_#583a2820] sm:-left-6">
              <span className="grid size-11 place-items-center rounded-xl bg-coral text-white"><PiUsersThreeFill className="size-6" aria-hidden="true" /></span>
              <span><span className="block font-heading text-[20px] font-bold leading-none"><CountUp value={100} suffix="+" /></span><span className="text-[12px] text-muted">brands grown</span></span>
            </div>
          </Reveal>

          <div>
            <Reveal><span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[.4px]"><span className="size-2 animate-ping-soft rounded-full bg-coral" aria-hidden="true" />Our story</span></Reveal>
            <Reveal delay={120}><h2 className={`${sectionHeading} mt-4`} id="story-title">From Puducherry to <span className="text-coral">the world</span></h2></Reveal>
            <Reveal delay={200}>
              <p className={`mt-6 mb-0 text-[15px] ${bodyText}`}>Digicherry started with a simple belief: every business, big or small, deserves marketing that actually works. What began as a small team in Puducherry has grown into a full-service agency trusted by restaurants, clinics, schools, retailers and startups.</p>
              <p className={`mt-4 mb-0 text-[15px] ${bodyText}`}>Today we run campaigns, build websites and create content from offices in Puducherry, Chennai, Mumbai and Le Blanc-Mesnil in France, while keeping the personal attention that got us started.</p>
            </Reveal>
            <Reveal delay={280}>
              <ul className="mt-8 grid list-none gap-3 p-0">
                {reasons.map((reason) => (
                  <li className="flex items-start gap-3 text-[15px] font-medium" key={reason}>
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-coral/10 text-coral"><PiArrowUpRightBold className="size-3" aria-hidden="true" /></span>
                    {reason}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#211d1a] py-14 text-white sm:py-16" aria-label="Digicherry in numbers">
        <div className={`${sectionWrap} grid grid-cols-2 gap-8 lg:grid-cols-4`}>
          {stats.map((stat, index) => (
            <Reveal delay={index * 110} key={stat.title}>
              <div className="flex flex-col items-center text-center">
                <span className="grid size-14 place-items-center rounded-2xl bg-white/10 text-coral"><stat.icon className="size-7" aria-hidden="true" /></span>
                <span className="mt-4 font-heading text-[clamp(32px,5vw,48px)] font-extrabold leading-none tracking-[-1px]"><CountUp value={stat.value} suffix={stat.suffix} /></span>
                <span className="mt-2 text-[13px] font-semibold uppercase tracking-[.4px] text-[#b6aaa1]">{stat.title}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-24" aria-labelledby="pillars-title">
        <div className={sectionWrap}>
          <div className="text-center">
            <Reveal><span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[.4px]"><span className="size-2 animate-ping-soft rounded-full bg-coral" aria-hidden="true" />What drives us</span></Reveal>
            <Reveal delay={120}><h2 className={`${sectionHeading} mx-auto mt-4 max-w-[680px]`} id="pillars-title">Purpose behind every <span className="text-coral">campaign</span></h2></Reveal>
          </div>
          <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-3">
            {pillars.map((pillar, index) => {
              // The middle card is filled coral so the row has a clear centre of gravity.
              const accent = index === 1;
              return (
                <Reveal delay={index * 110} key={pillar.title} className="h-full">
                  <article className={`group/pillar relative h-full overflow-hidden rounded-[26px] p-8 transition duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1.5 ${accent ? "bg-coral text-white shadow-[0_18px_40px_#f56f5240]" : "bg-paper hover:shadow-[0_20px_44px_#583a2818]"}`}>
                    <pillar.icon className={`pointer-events-none absolute -right-6 -bottom-6 size-36 rotate-[-12deg] transition duration-700 group-hover/pillar:rotate-0 group-hover/pillar:scale-110 ${accent ? "text-white/15" : "text-coral/[.07]"}`} aria-hidden="true" />
                    <span className={`relative grid size-14 place-items-center rounded-2xl transition duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] group-hover/pillar:-rotate-6 group-hover/pillar:scale-110 ${accent ? "bg-white text-coral" : "bg-white text-coral shadow-[0_10px_26px_#583a2812]"}`}><pillar.icon className="size-7" aria-hidden="true" /></span>
                    <h3 className="relative mt-6 mb-0 font-heading text-[24px] font-bold tracking-[-.5px]">{pillar.title}</h3>
                    <p className={`relative mt-3 mb-0 text-[15px] leading-[1.75] ${accent ? "text-white/85" : "text-muted"}`}>{pillar.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf1eb] py-16 sm:py-24" aria-labelledby="values-title">
        <div className={sectionWrap}>
          <Reveal className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[640px]">
              <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[.4px]"><span className="size-2 animate-ping-soft rounded-full bg-coral" aria-hidden="true" />Our values</span>
              <h2 className={`${sectionHeading} mt-4`} id="values-title">How we <span className="text-coral">work with you</span></h2>
            </div>
            <p className={`m-0 max-w-[420px] text-[15px] ${bodyText}`}>Four principles guide every brief, every design and every report we send.</p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Reveal delay={index * 110} key={value.title} className="h-full">
                <div className="group/value relative h-full rounded-[22px] bg-white p-7 transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_44px_#583a2818]">
                  <span className="absolute top-6 right-7 font-heading text-[40px] font-extrabold leading-none text-coral/15">{String(index + 1).padStart(2, "0")}</span>
                  <span className="grid size-14 place-items-center rounded-2xl bg-cream text-coral transition duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] group-hover/value:-rotate-6 group-hover/value:scale-110 group-hover/value:bg-coral group-hover/value:text-white"><value.icon className="size-7" aria-hidden="true" /></span>
                  <h3 className="mt-6 mb-0 font-heading text-[21px] font-semibold tracking-[-.4px]">{value.title}</h3>
                  <p className={`mt-2 mb-0 text-[14px] ${bodyText} !leading-[1.65]`}>{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24" aria-labelledby="presence-title">
        <div className={sectionWrap}>
          <div className="text-center">
            <Reveal><span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[.4px]"><span className="size-2 animate-ping-soft rounded-full bg-coral" aria-hidden="true" />Where we are</span></Reveal>
            <Reveal delay={120}><h2 className={`${sectionHeading} mx-auto mt-4 max-w-[680px]`} id="presence-title">Rooted locally, <span className="text-coral">working globally</span></h2></Reveal>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {offices.map((office, index) => (
              <Reveal delay={index * 110} key={office.city} className="h-full">
                <div className="flex h-full flex-col rounded-[22px] border border-line bg-white p-6 transition duration-500 hover:-translate-y-1.5 hover:border-coral/40 hover:shadow-[0_20px_44px_#583a2818]">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[28px] leading-none" aria-hidden="true">{office.flag}</span>
                    {office.label && <span className="rounded-full bg-coral/10 px-2.5 py-0.5 text-[11px] font-bold text-coral">{office.label}</span>}
                  </div>
                  <h3 className="mt-5 mb-0 font-heading text-[20px] font-bold tracking-[-.3px]">{office.city}</h3>
                  <span className="text-[12px] font-bold uppercase tracking-[.4px] text-muted">{office.country}</span>
                  <address className="mt-3 text-[14px] not-italic leading-[1.7] text-muted">{office.address.join(" ")}</address>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-24" aria-labelledby="about-cta">
        <Reveal className={sectionWrap}>
          <div className="relative overflow-hidden rounded-[28px] bg-coral px-6 py-14 text-center text-white sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute -top-24 -right-24 size-[320px] animate-breathe rounded-full border border-white/30 shadow-[0_0_0_40px_#ffffff10,0_0_0_80px_#ffffff08] motion-reduce:animate-none" aria-hidden="true" />
            <h2 className="relative m-0 font-heading text-[clamp(30px,5vw,48px)] font-extrabold leading-[1.08] tracking-[-1.4px]" id="about-cta">Let&apos;s write your growth story</h2>
            <p className="relative mx-auto mt-4 mb-0 max-w-[520px] text-[15px] leading-[1.7] text-white/85">Tell us where you want your brand to go. We&apos;ll come back with a plan to get it there.</p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <Link data-cursor="button" className={`${button} ${buttonDark}`} href="/contact"><RollText>Talk to us</RollText></Link>
              <Link data-cursor="button" className={`${button} ${buttonLight}`} href="/services"><RollText>Explore services</RollText></Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main></PageTransition>
  );
}
