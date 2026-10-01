import Image from "next/image";
import logo from "../../public/digicherrylogo.png";
import type { ReactNode } from "react";
import { FaBehance, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { PiCalendarCheckFill, PiEnvelopeSimpleFill, PiMapPinFill, PiPhoneFill, PiSmileyFill, PiTrendUpFill } from "react-icons/pi";
import CountUp from "./count-up";
import Reveal from "./reveal";

const logos = Array.from({ length: 29 }, (_, index) => index + 1);

const reels = ["Db-At7SK31S", "DbGA6GaDjpl", "DaraBkiDMOM", "DapyV4Jmr9I", "DafR8tSDl35", "DaZP4muDtlK", "DaX0pjmlVQO"];

const socials = [
  { href: "https://www.facebook.com/profile.php?id=100083845185459&mibextid=LQQJ4d", label: "Facebook", icon: FaFacebookF },
  { href: "https://instagram.com/digicherry.in?igshid=YmMyMTA2M2Y=", label: "Instagram", icon: FaInstagram },
  { href: "https://www.linkedin.com/company/96105773/admin/page-posts/published/", label: "LinkedIn", icon: FaLinkedinIn },
  { href: "https://www.youtube.com/@DigicherryDC", label: "YouTube", icon: FaYoutube },
  { href: "https://www.behance.net/gallery/231187221/Portfolio?tracking_source=project_owner_other_projects", label: "Behance", icon: FaBehance },
];

const unsplash =(id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`;

// Photos and stats alternate in a checkerboard: photo, stat, photo / stat, photo, stat.
const introTiles = [
  { image: unsplash("1522202176988-66273c2fd55f"), alt: "Team planning a campaign together" },
  { icon: PiCalendarCheckFill, value: 5, suffix: "+", title: "Years of Experience", text: "Years of hands-on work in digital marketing and website development." },
  { image: unsplash("1460925895917-afdab827c52f"), alt: "Laptop showing marketing analytics" },
  { icon: PiSmileyFill, value: 100, suffix: "+", title: "Happy Clients", text: "Businesses that trust us to grow their reach and online presence." },
  { image: unsplash("1557804506-669a67965ba0"), alt: "Strategy meeting around a table" },
  { icon: PiTrendUpFill, value: 10000, suffix: "+", title: "Leads Generated", text: "Qualified leads delivered through campaigns built to convert." },
] as const;

const sectionWrap = "mx-auto w-[calc(100%-10vw)] sm:w-[calc(100%-8vw)] md:w-[min(1160px,calc(100%-11vw))]";
const sectionHeading = "m-0 font-heading text-[43px] font-extrabold leading-[1.03] tracking-[-1.4px] sm:text-[clamp(40px,5vw,63px)] sm:tracking-[-2px] lg:text-[clamp(44px,3.9vw,56px)]";
const bodyText = "leading-[1.8] text-muted";

const button = "group inline-flex min-h-[43px] items-center justify-center rounded-full px-[15px] text-[11px] font-bold transition duration-200 hover:-translate-y-0.5 sm:min-h-[46px] sm:px-[21px] sm:text-[13px]";
const hoverOrange = "hover:bg-coral hover:text-white hover:shadow-[0_10px_26px_#f56f5266] hover:brightness-110";
const buttonCoral = `bg-coral text-white shadow-[0_7px_17px_#dd6d5030] ${hoverOrange}`;
const buttonLight = `bg-white text-ink ${hoverOrange}`;
const buttonDark = `bg-ink text-white shadow-[0_8px_20px_#17151326] ${hoverOrange}`;


function RollText({ children }: { children: string }) {
  return (
    <span className="relative block overflow-hidden leading-[1.3]">
      <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">{children}</span>
      <span className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0" aria-hidden="true">{children}</span>
    </span>
  );
}

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
    <main>
      <header className="relative z-[2] bg-paper" id="top"><div className={`${sectionWrap} flex h-[70px] items-center justify-between gap-3 sm:h-[82px] sm:gap-7`}>
        <a className="shrink-0" href="#top"><Image src={logo} alt="Digicherry Private Limited" className="h-11 w-auto sm:h-14" loading="eager" fetchPriority="high" /></a>
        <nav className="m-auto hidden items-center gap-[clamp(22px,3vw,46px)] sm:flex" aria-label="Main navigation">
          {[["#about", "About"], ["#work", "Our work"], ["#services", "Services"], ["#pricing", "Pricing"]].map(([href, label]) => <a className="text-[13px] font-semibold hover:text-coral-dark" href={href} key={href}>{label}</a>)}
        </nav>
        <a data-cursor="button" className={`${button} ${buttonCoral} max-sm:min-h-10`} href="#contact"><RollText>Let&apos;s talk</RollText></a>
      </div></header>

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
          <div className="mt-[21px] flex animate-fade-up justify-center gap-2 [animation-delay:1s] motion-reduce:animate-none sm:mt-[27px] sm:gap-3 lg:mt-6"><a data-cursor="button" className={`${button} ${buttonLight}`} href="#work"><RollText>See what we do</RollText></a><a data-cursor="button" className={`${button} ${buttonDark}`} href="#services"><RollText>Explore services</RollText></a></div>
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

      <footer className="bg-[#211d1a] px-[5vw] pt-9 pb-4 text-[#f7f0eb] sm:px-[5.5vw] sm:pt-[49px] sm:pb-[19px]">
        <div className="flex flex-col gap-[33px] pb-8 sm:flex-row sm:justify-between sm:gap-[60px] sm:pb-[47px]">
          <div className="max-w-[340px]">
            {/* The logo's navy lettering disappears on the dark footer, so it sits on a white card. */}
            <a className="inline-block rounded-[14px] bg-white px-4 py-3 shadow-[0_10px_26px_#00000040]" href="#top"><Image src={logo} alt="Digicherry Private Limited" className="h-12 w-auto sm:h-14" /></a>
            <p className="mt-[15px] mb-5 text-[15px] leading-[1.7] text-[#b6aaa1] sm:text-base">Digital marketing and website development that brings more reach, more leads and lasting growth.</p>
            <div className="flex flex-wrap gap-2.5">
              {socials.map(({ href, label, icon: Icon }) => (
                <a className="grid size-10 place-items-center rounded-full bg-[#ffffff12] text-[#e9dcd2] transition duration-200 hover:-translate-y-0.5 hover:bg-coral hover:text-white" href={href} target="_blank" rel="noreferrer" aria-label={label} key={label}><Icon className="size-[18px]" aria-hidden="true" /></a>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-8 pt-[5px] sm:flex-row sm:gap-[clamp(40px,7vw,110px)]">
            <div className="flex flex-col items-start gap-3"><span className="mb-1 font-heading text-[19px] font-bold tracking-[-.3px] text-white sm:text-[21px]">Take a look</span>{[["#about", "About"], ["#work", "Our work"], ["#services", "Services"], ["#pricing", "Pricing"]].map(([href, label]) => <a className="text-[13px] sm:text-sm leading-[1.7] text-[#e9dcd2] hover:text-coral-dark" href={href} key={href}>{label}</a>)}</div>
            <div className="flex max-w-[320px] flex-col items-start gap-3.5">
              <span className="mb-1 font-heading text-[19px] font-bold tracking-[-.3px] text-white sm:text-[21px]">Say hello</span>
              <address className="flex gap-2.5 text-[13px] sm:text-sm not-italic leading-[1.7] text-[#e9dcd2]"><PiMapPinFill className="mt-1 size-4 shrink-0 text-coral" aria-hidden="true" /><span>1st floor, Om Sakthi Subhiksha Avenue,<br />No FF-1 FF-2, Behind Lakshmi Petrol bunk,<br />Puducherry - 605001</span></address>
              <a className="flex items-center gap-2.5 text-[13px] sm:text-sm leading-[1.7] text-[#e9dcd2] hover:text-coral-dark" href="mailto:info@digicherry.in"><PiEnvelopeSimpleFill className="size-4 shrink-0 text-coral" aria-hidden="true" />info@digicherry.in</a>
              <a className="flex items-center gap-2.5 text-[13px] sm:text-sm leading-[1.7] text-[#e9dcd2] hover:text-coral-dark" href="tel:+919626199993"><PiPhoneFill className="size-4 shrink-0 text-coral" aria-hidden="true" />+91 96261 99993</a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-[18px] gap-y-3 border-t border-[#ffffff24] pt-4 text-xs text-[#a99d95] sm:flex-nowrap sm:justify-between sm:gap-5 sm:text-[13px]"><span>&copy; 2026 Digicherry Private Limited</span><span>Made with good intentions <span className="text-coral">&#10084;</span></span><a className="text-[#e9dcd2]" href="#top">Back to top &uarr;</a></div>
      </footer>
    </main>
  );
}
