import Image from "next/image";
import Link from "./transition-link";
import { PiCalendarCheckFill, PiSmileyFill, PiTrendUpFill } from "react-icons/pi";
import CountUp from "./count-up";
import Reveal from "./reveal";
import ServicesSection from "./services-section";
import Testimonials from "./testimonials";
import { bodyText, button, buttonDark, buttonLight, RollText, sectionHeading, sectionWrap } from "./site";
import PageTransition from "./page-transition";

const logos = Array.from({ length: 29 }, (_, index) => index + 1);

const reels = ["Db-At7SK31S", "DbGA6GaDjpl", "DaraBkiDMOM", "DapyV4Jmr9I", "DafR8tSDl35", "DaZP4muDtlK", "DaX0pjmlVQO"];

const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`;

// Photos and stats alternate in a checkerboard: photo, stat, photo / stat, photo, stat.
const introTiles = [
  { image: unsplash("1522202176988-66273c2fd55f"), alt: "Team planning a campaign together" },
  { icon: PiCalendarCheckFill, value: 5, suffix: "+", title: "Years of Experience", text: "Years of hands-on work in digital marketing and website development." },
  { image: unsplash("1460925895917-afdab827c52f"), alt: "Laptop showing marketing analytics" },
  { icon: PiSmileyFill, value: 100, suffix: "+", title: "Happy Clients", text: "Businesses that trust us to grow their reach and online presence." },
  { image: unsplash("1557804506-669a67965ba0"), alt: "Strategy meeting around a table" },
  { icon: PiTrendUpFill, value: 10000, suffix: "+", title: "Leads Generated", text: "Qualified leads delivered through campaigns built to convert." },
] as const;

// Each word slides up out of its own clipping box, staggered after `delay` ms.
function RiseWords({ text, delay = 0 }: { text: string; delay?: number }) {
  return text.split(" ").map((word, index) => (
    <span key={index}>
      {index > 0 && " "}
      <span className="-mb-[.12em] inline-block overflow-hidden pb-[.12em] align-top">
        <span className="inline-block animate-rise motion-reduce:animate-none" style={{ animationDelay: `${delay + index * 90}ms` }}>{word}</span>
      </span>
    </span>
  ));
}


export default function Home() {
  return (
    <PageTransition><main>
      <section className="relative overflow-hidden bg-[#fbf1eb] pt-[55px] sm:min-h-[640px] sm:pt-16 lg:min-h-0 lg:pt-12" aria-labelledby="hero-title">
        <div className="pointer-events-none absolute -top-[250px] -right-[142px] size-[440px] animate-breathe rounded-full border border-[#efc9ba80] shadow-[0_0_0_44px_#efc9ba16,0_0_0_89px_#efc9ba10] motion-reduce:animate-none" aria-hidden="true" />
        <div className="pointer-events-none absolute top-[38%] -left-[90px] size-[180px] animate-float rounded-full bg-coral/10 blur-2xl motion-reduce:animate-none" aria-hidden="true" />
        <div className={`${sectionWrap} relative`}>
        <div className="relative z-[1] mx-auto max-w-[900px] text-center lg:max-w-[1000px]">
          <div className="inline-flex animate-fade-down items-center gap-[9px] rounded-[40px] bg-white py-[5px] pr-3 pl-[5px] text-[11px] font-semibold text-[#5e5550] motion-reduce:animate-none"><span className="animate-ping-soft rounded-[40px] bg-coral px-[9px] py-1 text-[10px] text-white motion-reduce:animate-none">#001</span>Top Digital Marketing & Website Development Company in Pondicherry</div>
          <h1 className="mb-4 mt-8 font-heading text-[clamp(43px,12vw,61px)] font-extrabold leading-[.99] tracking-[-1.8px] sm:mt-12 sm:text-[clamp(48px,6vw,78px)] sm:tracking-[-2.6px] lg:text-[clamp(56px,5vw,72px)]" id="hero-title">
            <RiseWords text="More Reach! More Leads!" delay={150} />{" "}<br className="hidden sm:inline" />
            <em className="relative inline-block text-coral not-italic">
              <RiseWords text="Smarter Digital Solutions" delay={450} />
              {/* Hand-drawn underline that sketches itself in once the words have landed. */}
              <svg className="pointer-events-none absolute -bottom-[.3em] left-[4%] hidden h-[.28em] w-[92%] sm:block" viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true">
                <path className="animate-draw [animation-delay:1.1s] motion-reduce:animate-none" d="M3 14 C 70 4, 160 3, 297 10" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" pathLength="1" strokeDasharray="1" opacity=".45" />
              </svg>
            </em>
          </h1>
          <p className="mx-auto mt-[18px] max-w-[370px] animate-fade-up text-sm leading-[1.65] text-[#746b65] [animation-delay:800ms] motion-reduce:animate-none sm:mt-[32px] sm:max-w-[490px] sm:text-base lg:max-w-[800px]">We specialize in digital marketing and website development, helping businesses boost website traffic, enhance online visibility, and achieve sustainable growth through effective strategies and innovative solutions tailored to your needs.</p>
          <div className="mt-[21px] flex animate-fade-up justify-center gap-2 [animation-delay:1s] motion-reduce:animate-none sm:mt-[27px] sm:gap-3 lg:mt-6"><a data-cursor="button" className={`${button} ${buttonLight}`} href="#about"><RollText>See what we do</RollText></a><Link data-cursor="button" className={`${button} ${buttonDark}`} href="/services"><RollText>Explore services</RollText></Link></div>
        </div>
        </div>
      </section>

      {/* The track holds the reels twice so the marquee can loop seamlessly; hovering pauses it so a reel can be played.
          data-cursor-y is where Instagram's play button sits inside the embed, so the cursor's play icon lands on top of it. */}
      <section className="overflow-hidden bg-[#fbf1eb] py-10 sm:py-14 motion-reduce:overflow-x-auto" aria-label="Instagram reels">
        <div className="flex w-max animate-reels hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[...reels, ...reels].map((id, index) => (
            <div data-cursor="play" data-cursor-y="253" className="mr-5 h-[540px] w-[326px] shrink-0 overflow-hidden rounded-[18px] border-4 border-white bg-white shadow-[0_12px_30px_#583a2814] sm:mr-7 sm:h-[580px]" key={`${id}-${index}`} aria-hidden={index >= reels.length || undefined}>
              <iframe className="block size-full border-0" src={`https://www.instagram.com/reel/${id}/embed`} title={`Instagram reel ${id}`} loading="lazy" scrolling="no" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen tabIndex={index >= reels.length ? -1 : undefined} />
            </div>
          ))}
        </div>
      </section>

      {/* Same doubled-track trick as the reels, run in reverse so the logos drift right; multiply blends each logo's white backdrop into the strip. */}
      <section className="py-6 sm:py-8" aria-label="Clients we work with">
        <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)] motion-reduce:overflow-x-auto motion-reduce:[mask-image:none]">
          <div className="flex w-max animate-logos [will-change:translate] hover:[animation-play-state:paused] motion-reduce:animate-none">
            {/* Every logo sits in a fixed-size box and loads eagerly, so the track's width never changes mid-scroll
                and the -50% loop point always lines up exactly with the start of the second copy. */}
            {[...logos, ...logos].map((n, index) => (
              <Image className="mr-10 h-12 w-[120px] shrink-0 object-contain mix-blend-multiply sm:mr-16 sm:h-14 sm:w-[150px]" src={`/logos/${n}.webp`} alt={index >= logos.length ? "" : `Client logo ${n}`} width={150} height={56} loading="eager" key={`${n}-${index}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf1eb] py-16 sm:py-24" id="about" aria-labelledby="intro-title">
        <div className={sectionWrap}>
          <div className="text-center">
            <Reveal><span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[.4px]"><span className="size-2 animate-ping-soft rounded-full bg-coral" aria-hidden="true" />About Us</span></Reveal>
            <Reveal delay={120}><h2 className="mx-auto mt-4 max-w-[640px] font-heading text-[28px] font-bold leading-[1.3] tracking-[-1px] sm:text-[38px]" id="intro-title">
             Who is Digicherry{" "}
              <span className="relative inline-block h-[.8em] w-[1.9em] translate-y-[.08em] overflow-hidden rounded-full align-baseline shadow-[0_4px_12px_#583a2826]"><Image className="object-cover" src={unsplash("1557804506-669a67965ba0")} alt="" fill sizes="80px" /></span>{" "}
              digital presence into measurable lasting success
            </h2></Reveal>
          </div>

          {/* Each tile reveals on its own as it scrolls in; the delay staggers tiles that share a row on desktop.
              Photos settle from a slight zoom, and stat cards cascade pill → title → text. */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
            {introTiles.map((tile, index) => (
              <Reveal delay={(index % 3) * 120} key={"image" in tile ? tile.image : tile.title}>
                {"image" in tile ? (
                  <div className="relative h-[240px] overflow-hidden rounded-[14px] border border-white shadow-[0_8px_24px_#583a2814] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_#583a2826]">
                    <Image className="scale-[1.18] object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.22,1,.36,1)] group-data-[shown]:scale-100 hover:!scale-105 hover:duration-700" src={tile.image} alt={tile.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                  </div>
                ) : (
                  <div className="flex h-[240px] flex-col items-center justify-center rounded-[14px] bg-paper px-6 text-center transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_#583a2814]">
                    <span className="inline-flex scale-75 items-center gap-2 rounded-full bg-white px-5 py-2.5 font-heading text-[26px] font-semibold tracking-[-.5px] opacity-0 shadow-[0_10px_26px_#583a2812] transition duration-700 ease-[cubic-bezier(.34,1.56,.64,1)] [transition-delay:200ms] group-data-[shown]:scale-100 group-data-[shown]:opacity-100 motion-reduce:scale-100 motion-reduce:opacity-100"><tile.icon className="size-6 text-coral" aria-hidden="true" /><CountUp value={tile.value} suffix={tile.suffix} /></span>
                    <h3 className="mt-6 translate-y-3 font-heading text-[21px] font-semibold tracking-[-.4px] opacity-0 transition duration-700 [transition-delay:350ms] group-data-[shown]:translate-y-0 group-data-[shown]:opacity-100 motion-reduce:translate-y-0 motion-reduce:opacity-100">{tile.title}</h3>
                    <p className={`mt-2 max-w-[270px] translate-y-3 text-[14px] opacity-0 transition duration-700 [transition-delay:500ms] group-data-[shown]:translate-y-0 group-data-[shown]:opacity-100 motion-reduce:translate-y-0 motion-reduce:opacity-100 ${bodyText} !leading-[1.6]`}>{tile.text}</p>
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ServicesSection viewAll />

      <section className="relative overflow-hidden bg-[#fbf1eb] py-16 sm:py-24" aria-labelledby="testimonials-title">
        <div className="pointer-events-none absolute -top-[220px] -right-[160px] size-[440px] animate-breathe rounded-full border border-[#efc9ba80] shadow-[0_0_0_44px_#efc9ba16,0_0_0_89px_#efc9ba10] motion-reduce:animate-none" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-10 left-[30%] size-[260px] animate-float rounded-full bg-coral/10 blur-3xl motion-reduce:animate-none" aria-hidden="true" />
        <div className={`${sectionWrap} relative`}>
          <div className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[640px]">
              <Reveal><span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[.4px]"><span className="size-2 animate-ping-soft rounded-full bg-coral" aria-hidden="true" />Testimonials</span></Reveal>
              <Reveal delay={120}><h2 className={`${sectionHeading} mt-4`} id="testimonials-title">Kind words from brands we <span className="text-coral">help grow</span></h2></Reveal>
            </div>
            <Reveal delay={240} className="max-w-[420px]"><p className={`m-0 text-[15px] ${bodyText}`}>Restaurants, clinics, schools and startups across Pondicherry trust us with their growth. Here&apos;s what a few of them have to say.</p></Reveal>
          </div>
          <Reveal delay={150}><Testimonials /></Reveal>
        </div>
      </section>
    </main></PageTransition>
  );
}
