import Image from "next/image";
import logo from "../../public/digicherrylogo.png";
import type { ReactNode } from "react";

const services = [
  ["01", "Content that connects", "Distinctive ideas, thoughtful art direction, and thumb-stopping video built around what makes your brand worth following.", "Creative direction · Video · Design"],
  ["02", "A strategy with a pulse", "Audience research and a clear point of view turn your social channels into a consistent, recognizable presence.", "Research · Positioning · Planning"],
  ["03", "Community, made closer", "Real conversations build real loyalty. We show up for your audience with the care and character they deserve.", "Engagement · Listening · Care"],
  ["04", "Paid social, made smarter", "We find the right people, test what resonates, and optimize so your media budget does more of what works.", "Paid media · Creative testing · Analytics"],
  ["05", "The right kind of influence", "Thoughtful creator partnerships that feel natural to their audience and unmistakably right for your brand.", "Creator sourcing · Partnerships · Campaigns"],
  ["06", "Your socials, in good hands", "From daily publishing to monthly reporting, we keep every detail moving and every channel feeling like you.", "Publishing · Management · Reporting"],
];

const cases = [
  { brand: "Sunday Somewhere", title: "A sunnier point of view", type: "Lifestyle", image: "photo-1529139574466-a303027c1d8b", stats: ["3.2M", "6.8x", "+184%"], tone: "peach" },
  { brand: "Forma Skin", title: "Skincare, with a following", type: "Beauty", image: "photo-1534528741775-53994a69daeb", stats: ["2.1M", "4.4x", "+126%"], tone: "pink" },
  { brand: "Offscript Studio", title: "Small label. Big energy.", type: "Fashion", image: "photo-1506794778202-cad84cf45f1d", stats: ["980K", "5.2x", "+212%"], tone: "mint" },
];

const faqs = [
  ["Which platforms do you work on?", "Instagram, TikTok, LinkedIn, Pinterest, YouTube, and Facebook. We recommend the channels that make sense for your audience, not every channel just because it exists."],
  ["How soon can we get started?", "Most new partnerships launch within two to three weeks. That gives us time to learn your brand, meet your team, and build a thoughtful first-month plan."],
  ["Can you work with our in-house team?", "Absolutely. We can take the whole channel off your plate or add creative and strategic firepower wherever your team needs it."],
  ["How do you measure success?", "We agree on goals together, then report on the metrics that connect social activity to business outcomes. You will always know what is working and what we are changing."],
  ["Do you offer one-off projects?", "Yes. Strategy sprints, campaign creative, and creator programs can all be scoped as focused projects. Tell us what you have in mind and we will find the right shape."],
];

const people = [
  ["Maya Chen", "Founder & Strategy", "photo-1531123897727-8f129e1688ce"],
  ["Leo Bennett", "Creative Director", "photo-1500648767791-00dcc994a43e"],
  ["Samira Patel", "Community Lead", "photo-1534528741775-53994a69daeb"],
  ["Eli Brooks", "Paid Media Lead", "photo-1506794778202-cad84cf45f1d"],
];

const logos = Array.from({ length: 29 }, (_, index) => index + 1);

const reels = ["Db-At7SK31S", "DbGA6GaDjpl", "DaraBkiDMOM", "DapyV4Jmr9I", "DafR8tSDl35", "DaZP4muDtlK", "DaX0pjmlVQO"];

const sectionWrap = "mx-auto w-[calc(100%-10vw)] sm:w-[calc(100%-8vw)] md:w-[min(1160px,calc(100%-11vw))]";
const tintedSection = "bg-[#f7efe9] pt-16 pb-[68px] sm:pt-[86px] sm:pb-[95px] lg:py-16";
const sectionHeading = "m-0 font-heading text-[43px] font-extrabold leading-[1.03] tracking-[-1.4px] sm:text-[clamp(40px,5vw,63px)] sm:tracking-[-2px] lg:text-[clamp(44px,3.9vw,56px)]";
const headingAccent = "font-serif font-normal tracking-normal text-coral";
const bodyText = "leading-[1.8] text-muted";

const button = "group inline-flex min-h-[43px] items-center justify-center rounded-full px-[15px] text-[11px] font-bold transition duration-200 hover:-translate-y-0.5 sm:min-h-[46px] sm:px-[21px] sm:text-[13px]";
const hoverOrange = "hover:bg-coral hover:text-white hover:shadow-[0_10px_26px_#f56f5266] hover:brightness-110";
const buttonCoral = `bg-coral text-white shadow-[0_7px_17px_#dd6d5030] ${hoverOrange}`;
const buttonLight = `bg-white text-ink ${hoverOrange}`;
const buttonDark = `bg-ink text-white shadow-[0_8px_20px_#17151326] ${hoverOrange}`;
const buttonOutline = `border border-[#d5c8bd] text-ink hover:border-coral ${hoverOrange}`;
// On the coral contact section an orange hover would disappear into the background, so it goes dark instead.
const buttonOnCoral = "bg-white text-ink hover:bg-ink hover:text-white hover:shadow-[0_10px_26px_#17151340]";

const textLink = "group mt-3 inline-flex items-center gap-3 text-[11px] font-bold sm:text-xs";
const textLinkArrow = "text-coral-dark transition-transform duration-200 group-hover:translate-x-1";

function Photo({ image, alt, className = "" }: { image: string; alt: string; className?: string }) {
  return <div className={`bg-cover ${className}`} role="img" aria-label={alt} style={{ backgroundImage: `url(https://images.unsplash.com/${image}?auto=format&fit=crop&w=1000&q=85)` }} />;
}

function RollText({ children }: { children: string }) {
  return (
    <span className="relative block overflow-hidden leading-[1.3]">
      <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">{children}</span>
      <span className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0" aria-hidden="true">{children}</span>
    </span>
  );
}

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <a className={`inline-flex items-center gap-[7px] whitespace-nowrap text-base font-extrabold leading-none sm:gap-2.5 sm:text-[19px] ${className}`} href="#top">
      <span className="grid size-[30px] place-items-center rounded-[11px] bg-coral text-[17px] text-white shadow-[0_5px_13px_#df795433] sm:size-[34px] sm:text-[19px]" aria-hidden="true">&#10022;</span>
      <span>digi<span className="text-coral-dark">cherry</span></span>
    </a>
  );
}

function Kicker({ label, note }: { label: string; note: string }) {
  return (
    <div className="flex justify-between gap-5 border-b border-line pb-[15px] text-[8px] font-bold uppercase tracking-[.7px] text-[#897d75] sm:text-[10px]">
      <span>{label}</span>
      <span className="text-right font-medium normal-case tracking-normal sm:text-left">{note}</span>
    </div>
  );
}

function HeadingRow({ children, text }: { children: ReactNode; text: string }) {
  return (
    <div className="flex flex-col items-start gap-[13px] pt-8 pb-[25px] sm:flex-row sm:items-end sm:justify-between sm:gap-10 sm:pt-[43px] sm:pb-[35px] lg:pt-8 lg:pb-7">
      <h2 className={sectionHeading}>{children}</h2>
      <p className={`m-0 mb-[5px] max-w-[370px] text-xs sm:max-w-[350px] sm:text-sm ${bodyText}`}>{text}</p>
    </div>
  );
}

const storyPositions = ["bg-[position:50%_36%]", "bg-[position:50%_31%]", "bg-[position:50%_40%]"];

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
        <div className="pointer-events-none absolute -top-[250px] -right-[142px] size-[440px] rounded-full border border-[#efc9ba80] shadow-[0_0_0_44px_#efc9ba16,0_0_0_89px_#efc9ba10]" aria-hidden="true" />
        <div className={`${sectionWrap} relative`}>
        <div className="relative z-[1] mx-auto max-w-[900px] text-center lg:max-w-[1000px]">
          <div className="inline-flex items-center gap-[9px] rounded-[40px] bg-white py-[5px] pr-3 pl-[5px] text-[11px] font-semibold text-[#5e5550]"><span className="rounded-[40px] bg-coral px-[9px] py-[5px] text-[10px] text-white">#001</span>Top Digital Marketing & Website Development Company in Pondicherry</div>
          <h1 className="mb-0 font-heading text-[clamp(43px,12vw,61px)] font-extrabold leading-[.99] tracking-[-1.8px] sm:mt-[22px] sm:text-[clamp(48px,6vw,78px)] sm:tracking-[-2.6px] lg:text-[clamp(56px,5vw,72px)]" id="hero-title">More Reach! More Leads!<br className="hidden sm:inline" /><em className="text-coral not-italic">Smarter Digital Solutions</em></h1>
          <p className="mx-auto mt-[18px] max-w-[370px] text-sm leading-[1.65] text-[#746b65] sm:mt-[32px] sm:max-w-[490px] sm:text-base lg:max-w-[800px]">We specialize in digital marketing and website development, helping businesses boost website traffic, enhance online visibility, and achieve sustainable growth through effective strategies and innovative solutions tailored to your needs.</p>
          <div className="mt-[21px] flex justify-center gap-2 sm:mt-[27px] sm:gap-3 lg:mt-6"><a data-cursor="button" className={`${button} ${buttonLight}`} href="#work"><RollText>See what we do</RollText></a><a data-cursor="button" className={`${button} ${buttonDark}`} href="#services"><RollText>Explore services</RollText></a></div>
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
          <div className="flex w-max animate-logos hover:[animation-play-state:paused] motion-reduce:animate-none">
            {[...logos, ...logos].map((n, index) => (
              <Image className="mr-10 h-12 w-auto shrink-0 object-contain mix-blend-multiply sm:mr-16 sm:h-14" src={`/logos/${n}.webp`} alt={index >= logos.length ? "" : `Client logo ${n}`} width={160} height={56} key={`${n}-${index}`} />
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#211d1a] px-[5vw] pt-9 pb-4 text-[#f7f0eb] sm:px-[5.5vw] sm:pt-[49px] sm:pb-[19px]">
        <div className="flex flex-col gap-[33px] pb-8 sm:flex-row sm:justify-between sm:gap-[60px] sm:pb-[47px]">
          <div>
            <Wordmark className="text-white" />
            <p className="mt-[15px] mb-5 text-[13px] leading-[1.7] text-[#b6aaa1] sm:text-sm">Good stories for good people.<br />Social, with a little more feeling.</p>
            <div className="flex gap-[18px]">{[["https://www.instagram.com/", "Instagram"], ["https://www.linkedin.com/", "LinkedIn"]].map(([href, label]) => <a className="text-[10px] text-[#e9dcd2] hover:text-coral-dark" href={href} target="_blank" rel="noreferrer" key={label}>{label} <span aria-hidden="true">&#8599;</span></a>)}</div>
          </div>
          <div className="flex justify-between gap-6 pt-[5px] sm:justify-start sm:gap-[clamp(55px,10vw,145px)]">
            <div className="flex flex-col items-start gap-3"><span className="mb-1 text-[9px] font-bold uppercase tracking-[.8px] text-[#9d9088]">Take a look</span>{[["#about", "About"], ["#work", "Our work"], ["#services", "Services"], ["#pricing", "Pricing"]].map(([href, label]) => <a className="text-[10px] leading-[1.7] text-[#e9dcd2] hover:text-coral-dark" href={href} key={href}>{label}</a>)}</div>
            <div className="flex flex-col items-start gap-3"><span className="mb-1 text-[9px] font-bold uppercase tracking-[.8px] text-[#9d9088]">Say hello</span><a className="text-[10px] leading-[1.7] text-[#e9dcd2] hover:text-coral-dark" href="mailto:hello@digicherry.studio">Email us</a><a className="text-[10px] leading-[1.7] text-[#e9dcd2] hover:text-coral-dark" href="#faq">FAQs</a><span className="text-[10px] leading-[1.7] text-[#e9dcd2]">Brooklyn, NY<br />Working everywhere</span></div>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-[18px] gap-y-3 border-t border-[#ffffff24] pt-4 text-[8px] text-[#a99d95] sm:flex-nowrap sm:justify-between sm:gap-5 sm:text-[9px]"><span>&copy; 2026 Digicherry Studio</span><span>Made with good intentions <span className="text-coral">&#10084;</span></span><a className="text-[#e9dcd2]" href="#top">Back to top &uarr;</a></div>
      </footer>
    </main>
  );
}
