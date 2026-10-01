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
        <div className="mt-11 grid h-[285px] w-max grid-cols-[repeat(3,75vw)] gap-[11px] sm:mt-[62px] sm:h-[280px] sm:w-full lg:mt-10 lg:h-[220px] sm:grid-cols-3 sm:gap-3 md:gap-5" aria-label="Recent social campaign highlights">
          {[["photo-1524504388940-b1c1722653e1", "sofiasunday", "little moments, lately", "3.2M"], ["photo-1529139574466-a303027c1d8b", "forma.skin", "your five-minute reset", "184K"], ["photo-1534528741775-53994a69daeb", "offscript.studio", "wear it your way", "+212%"]].map(([image, handle, caption, result], index) => (
            <article className={`group relative isolate min-w-0 overflow-hidden rounded-t-[17px] border-4 border-b-0 border-white text-white shadow-[0_-8px_26px_#583a2810] sm:rounded-t-[20px] ${index === 2 ? "max-sm:mr-[8vw]" : ""}`} key={handle}>
              <Photo image={image} alt={`Social campaign portrait for ${handle}`} className={`absolute inset-0 -z-2 transition-transform duration-500 group-hover:scale-[1.035] ${storyPositions[index]}`} />
              <div className="absolute inset-0 -z-1 bg-[linear-gradient(180deg,#17151380_0%,transparent_35%,transparent_55%,#1715139c_100%)]" aria-hidden="true" />
              <div className="flex items-center gap-[7px] px-[13px] py-3.5 text-[11px] font-bold"><span className="grid size-6 place-items-center rounded-full border-2 border-white bg-coral text-[10px]">{handle[0].toUpperCase()}</span><span>{handle}</span><span className="grid size-3 place-items-center rounded-full bg-white text-[9px] text-[#5cace8]">&#10003;</span><span className="text-[10px] font-medium opacity-80">{index + 6}h</span><span className="ml-auto tracking-[2px]">...</span></div>
              <div className="absolute inset-x-[15px] bottom-3.5 flex items-end justify-between gap-2.5 text-xs sm:flex-col sm:items-start md:flex-row md:items-end"><span>{caption}</span><strong className="whitespace-nowrap text-[17px]">{result} <small className="text-[9px] font-medium">views</small></strong></div>
            </article>
          ))}
        </div>
        </div>
      </section>

      {/* The track holds the reels twice so the marquee can loop seamlessly; hovering pauses it so a reel can be played. */}
      <section className="overflow-hidden bg-[#fbf1eb] py-10 sm:py-14 motion-reduce:overflow-x-auto" aria-label="Instagram reels">
        <div className="flex w-max animate-reels hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[...reels, ...reels].map((id, index) => (
            <div className="mr-5 h-[540px] w-[326px] shrink-0 overflow-hidden rounded-[18px] border-4 border-white bg-white shadow-[0_12px_30px_#583a2814] sm:mr-7 sm:h-[580px]" key={`${id}-${index}`} aria-hidden={index >= reels.length || undefined}>
              <iframe className="block size-full border-0" src={`https://www.instagram.com/reel/${id}/embed`} title={`Instagram reel ${id}`} loading="lazy" scrolling="no" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen tabIndex={index >= reels.length ? -1 : undefined} />
            </div>
          ))}
        </div>
      </section>

      <section className="block min-h-[115px] border-b border-line bg-[#fffdfb] px-[5vw] py-[23px] sm:flex sm:min-h-[118px] sm:items-center sm:justify-center sm:gap-[25px] sm:px-[6vw] sm:py-7 md:gap-12" aria-label="Brands we have worked with">
        <p className="m-0 mb-[17px] whitespace-nowrap text-center text-[11px] text-[#92867e] sm:mb-0 sm:text-left">Good company we keep</p>
        <div className="flex w-full flex-wrap items-center justify-center gap-x-[23px] gap-y-[13px] font-bold text-[#746b65] sm:w-auto sm:flex-1 sm:flex-nowrap sm:justify-between sm:gap-6 md:w-[min(800px,70vw)] md:flex-none md:gap-[clamp(20px,5vw,76px)]">
          <span className="text-xs sm:text-sm md:text-[17px]">Sunday <i className="font-serif font-normal">Somewhere</i></span>
          <span className="text-xs sm:text-sm md:text-[17px]">forma<span className="font-normal">skin</span></span>
          <span className="font-serif text-base font-normal italic sm:text-[20px]">Offscript</span>
          <span className="text-xs sm:text-sm md:text-[17px]">DAYBREAK</span>
          <span className="font-serif text-[11px] font-normal italic tracking-[1.5px] sm:text-sm">goodkind</span>
        </div>
      </section>

      <section className={`${sectionWrap} pt-[65px] pb-[66px] sm:pt-24 sm:pb-[94px]`} id="about">
        <Kicker label="01 / A LITTLE ABOUT US" note="Small team, big feeling" />
        <div className="grid grid-cols-1 gap-[19px] pt-[34px] pb-[31px] sm:grid-cols-[1.1fr_.8fr] sm:items-end sm:gap-[10%] sm:pt-[54px] sm:pb-14">
          <h2 className={sectionHeading}>We make social<br />feel <em className={headingAccent}>like something.</em></h2>
          <div className="max-w-[460px] pb-[3px]">
            <p className="mt-0 mb-[11px] text-sm leading-[1.8] text-ink sm:mb-4 sm:text-base">Not just another post in the feed. A feeling. A conversation. That tiny spark that makes someone stop scrolling and start caring.</p>
            <p className={`mt-[13px] mb-[11px] text-[13px] sm:mt-3.5 sm:mb-3.5 sm:text-sm ${bodyText}`}>Digicherry is an independent social studio for ambitious brands with something to say. We bring sharp thinking and good energy to every little detail.</p>
            <a className={textLink} href="#contact">A little more about us <span className={textLinkArrow} aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
        <div className="grid grid-cols-2 items-center gap-y-5 border-t border-line pt-[23px] sm:grid-cols-[repeat(3,1fr)_1.2fr] sm:gap-y-0 sm:pt-[31px]">
          {[["998", "M+", "impressions earned"], ["780", "K+", "new people reached"], ["12", "M+", "in client revenue"]].map(([value, unit, label], index) => (
            <div className={`flex flex-col gap-1.5 border-l border-line pl-[13px] sm:pl-[22px] ${index === 0 ? "border-l-0 pl-0 sm:pl-0" : ""} ${index === 2 ? "max-sm:border-l-0 max-sm:pl-0" : ""}`} key={label}>
              <strong className="font-heading text-[31px] font-extrabold leading-none tracking-[-1.5px] sm:text-[37px]">{value}<span className="text-coral">{unit}</span></strong>
              <span className="text-[10px] text-muted sm:text-[11px]">{label}</span>
            </div>
          ))}
          <div className="flex items-center justify-start gap-3 text-[#746b65] sm:justify-end"><span className="text-[26px] text-coral" aria-hidden="true">&#10022;</span><p className="my-3 text-[11px] italic leading-[1.5] sm:text-[13px]">Good strategy gets attention.<br />Great stories make it stick.</p></div>
        </div>
      </section>

      <section className={tintedSection} id="services"><div className={sectionWrap}>
        <Kicker label="02 / WHAT WE DO" note="Social, from every angle" />
        <HeadingRow text="From the first big idea to the everyday replies, we make all the moving parts feel unmistakably you.">Made for the<br /><em className={headingAccent}>scroll-stop.</em></HeadingRow>
        <div className="grid grid-cols-1 border-t border-l border-[#e5d9d0] sm:grid-cols-3">
          {services.map(([number, title, description, tags]) => (
            <article className="border-r border-b border-[#e5d9d0] px-[17px] py-[19px] transition-colors duration-200 hover:bg-paper sm:min-h-[230px] sm:px-6 sm:pt-[25px] sm:pb-[21px] lg:min-h-0 lg:py-5" key={number}>
              <div className="flex justify-between text-[10px] text-[#9b8e86]"><span>{number}</span><span className="text-[17px] text-coral" aria-hidden="true">&#10022;</span></div>
              <h3 className="mt-[15px] mb-[7px] font-heading text-base font-bold sm:mt-6 sm:mb-[9px] sm:text-lg lg:mt-4">{title}</h3>
              <p className="m-0 text-[11px] leading-[1.7] text-muted sm:min-h-[63px] sm:text-xs">{description}</p>
              <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-[15px] lg:mt-3">{tags.split(" · ").map((tag) => <span className="rounded-[30px] border border-[#e7ddd5] px-2 py-[5px] text-[9px] text-[#766d66]" key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </div></section>

      <section className={`${sectionWrap} pt-[65px] pb-[66px] sm:pt-24 sm:pb-[103px] lg:py-[72px]`} id="work">
        <Kicker label="03 / THE GOOD STUFF" note="Little brands, lovely big numbers" />
        <HeadingRow text="Real people, real stories, very real results. A peek at what happens when brands show up with something to say.">Proof is in<br /><em className={headingAccent}>the people.</em></HeadingRow>
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3 sm:gap-[17px]">
          {cases.map((item) => (
            <article className="group overflow-hidden border border-line bg-white" key={item.brand}>
              <div className="relative h-[290px] overflow-hidden bg-[#eaded3] sm:h-[245px] md:h-[290px] lg:h-[240px]">
                <Photo image={item.image} alt={`${item.type} campaign portrait for ${item.brand}`} className="absolute inset-0 bg-center transition-transform duration-[450ms] group-hover:scale-[1.04]" />
                <span className="absolute top-3.5 left-3.5 rounded-[30px] bg-white px-2.5 py-[7px] text-[10px] font-bold">{item.type}</span>
                <span className="absolute right-3.5 bottom-3.5 grid size-9 place-items-center rounded-full bg-white text-lg" aria-hidden="true">&#8599;</span>
              </div>
              <div className="flex min-h-[77px] items-center justify-between px-[18px] pt-4 pb-3 sm:min-h-[88px]">
                <div><span className="text-[10px] text-[#8a7f77]">{item.brand}</span><h3 className="mt-1 mb-0 font-heading text-[17px] font-bold">{item.title}</h3></div>
                <span className="text-[17px] text-coral-dark" aria-hidden="true">&rarr;</span>
              </div>
              <div className="grid grid-cols-3 border-t border-line px-[18px] pt-3.5 pb-[17px]">
                {item.stats.map((stat, index) => <div className="flex flex-col gap-1 border-l border-line pl-[11px] first:border-l-0 first:pl-0" key={stat}><strong className="font-heading text-base font-bold">{stat}</strong><span className="text-[9px] text-muted">{["Reach", "Return", "Community"][index]}</span></div>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={tintedSection} id="pricing"><div className={sectionWrap}>
        <Kicker label="04 / THE INVESTMENT" note="Good work, no mystery math" />
        <HeadingRow text="Pick a place to start. We can always make it yours. Every partnership begins with a real conversation.">Find your<br /><em className={headingAccent}>kind of growth.</em></HeadingRow>
        <div className="mx-auto mt-[3px] grid max-w-[890px] lg:mt-0 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-[17px]">
          {[["A lovely place to start", "The Spark", "$2,500", "For new brands building a social presence with intention.", ["Social channel audit & strategy", "12 original posts each month", "Monthly content calendar", "Community management", "Monthly performance check-in", "One social platform"]], ["For the next big thing", "The Sweet Spot", "$4,800", "For growing brands ready to turn good momentum into more.", ["Everything in Spark, plus", "30 original posts each month", "Three social platforms", "Short-form video production", "Paid media creative & optimization", "Creator partnership support"]]].map(([label, name, price, description, features], index) => (
            <article className={`border bg-paper px-5 py-[23px] sm:px-[30px] sm:pt-[27px] sm:pb-[29px] lg:py-6 ${index ? "border-coral shadow-[0_12px_30px_#6b453019]" : "border-[#e6dbd2]"}`} key={name as string}>
              <div className="flex items-center justify-between text-[11px] text-[#857972]">{label as string}{index === 1 && <span className="rounded-[30px] bg-[#ffe4da] px-[9px] py-1.5 text-[9px] font-bold text-[#c84f36]">Most loved</span>}</div>
              <h3 className="mt-[15px] mb-[5px] font-heading text-[22px] font-extrabold sm:text-[25px] lg:mt-2.5">{name as string}</h3>
              <p className="m-0 min-h-[38px] text-xs leading-[1.6] text-muted">{description as string}</p>
              <div className="mt-[23px] mb-[17px] flex items-baseline gap-[7px] lg:mt-3 lg:mb-3"><strong className="font-heading text-[33px] font-extrabold tracking-[-1.6px] sm:text-[37px] lg:text-[34px]">{price as string}</strong><span className="text-[11px] text-muted">/ month</span></div>
              <a data-cursor="button" className={`${button} w-full ${index ? buttonDark : buttonOutline}`} href={`mailto:hello@digicherry.studio?subject=${encodeURIComponent(name as string)}`}><RollText>Let&apos;s talk</RollText></a>
              <div className="mt-[25px] border-t border-line pt-[15px] pb-2.5 lg:mt-[18px] lg:pt-3 text-[11px] font-bold">{index ? "Everything in Spark, plus" : "A few good things included"}</div>
              <ul className="mt-2.5 grid list-none grid-cols-2 gap-x-4 gap-y-3 p-0 lg:gap-y-2">{(features as string[]).map((feature) => <li className="relative pl-[17px] text-[9px] leading-[1.5] text-[#615a55] before:absolute before:top-[3px] before:left-0 before:size-[9px] before:rounded-full before:border-[1.5px] before:border-coral before:content-[''] sm:text-[10px]" key={feature}>{feature}</li>)}</ul>
            </article>
          ))}
        </div>
        <p className="mt-[21px] mb-0 text-center text-[10px] lg:mt-4 text-muted sm:text-[11px]">Need something in between? <a className="font-bold text-coral-dark" href="#contact">We can make that happen &rarr;</a></p>
      </div></section>

      <section className={`${sectionWrap} pt-[65px] pb-[66px] sm:pt-[94px] sm:pb-[97px] lg:py-[72px]`}>
        <Kicker label="05 / THE PEOPLE PART" note="Nice to meet you, probably" />
        <HeadingRow text="Good work is a team sport. We are a close-knit crew of curious minds who care about the details and the people behind every brand.">Small team.<br /><em className={headingAccent}>Big heart.</em></HeadingRow>
        <div className="grid grid-cols-2 gap-x-3 gap-y-[22px] sm:grid-cols-4 sm:gap-[15px]">
          {people.map(([name, role, image], index) => (
            <article key={name}>
              <Photo image={image} alt={`Portrait of ${name}`} className={`aspect-[.9] bg-[#eaded3] ${index % 2 === 0 ? "bg-[position:center_38%]" : "bg-center"}`} />
              <div className="block pt-3 md:flex md:items-baseline md:justify-between md:gap-2.5"><h3 className="m-0 font-heading text-xs font-bold sm:text-[13px]">{name}</h3><span className="mt-1 block text-left text-[9px] text-muted md:mt-0 md:text-right">{role}</span></div>
            </article>
          ))}
        </div>
        <div className="mt-7 flex items-center justify-start gap-[9px] text-[10px] text-muted sm:justify-center sm:text-[11px]"><span className="text-[17px] text-coral" aria-hidden="true">&#10022;</span><p className="m-0">There&apos;s always room for one more good egg. <a className="font-bold underline decoration-[#e8a493] underline-offset-[3px]" href="mailto:hello@digicherry.studio?subject=Joining%20the%20Digicherry%20team">Say hello</a></p></div>
      </section>

      <section className={tintedSection}><div className={sectionWrap}>
        <Kicker label="06 / KIND WORDS" note="We didn&apos;t make these up" />
        <div className="flex flex-col-reverse items-start gap-[19px] pt-8 pb-6 sm:flex-row sm:items-end sm:justify-between sm:gap-0 sm:pt-[42px] sm:pb-[34px]">
          <div className="flex flex-col gap-2"><span className="text-[17px] tracking-[3px] text-coral">&#9733;&#9733;&#9733;&#9733;&#9733;</span><span className="text-[10px] text-muted">5.0 average from our favorite people</span></div>
          <h2 className={sectionHeading}>It feels good<br />to <em className={headingAccent}>be understood.</em></h2>
        </div>
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 sm:gap-3.5">
          {[["They got the heart of our brand right away. Our social finally feels like us, and our community can tell.", "Alex Rivera", "Founder, Sunday Somewhere"], ["Digicherry brought so much clarity to our strategy and so much personality to our content. The growth followed.", "Nina James", "Marketing Director, Forma Skin"], ["Working with this team feels like having the smartest, kindest people in the room on your side.", "Jordan Lee", "Co-founder, Offscript Studio"]].map(([quote, name, title]) => (
            <blockquote className="m-0 border border-[#e7ddd5] bg-paper p-[19px] sm:min-h-[205px] sm:p-[23px]" key={name}>
              <span className="font-serif text-[52px] leading-[.7] text-coral">&ldquo;</span>
              <p className="mt-2.5 mb-4 text-[15px] leading-[1.55] sm:mt-3.5 sm:mb-5 sm:min-h-[68px] sm:text-base">{quote}</p>
              <footer className="flex items-center gap-2.5 border-t border-line pt-[13px]"><span className="grid size-[30px] place-items-center rounded-full bg-[#b56750] text-[11px] font-bold text-white">{name[0]}</span><span><strong className="block text-[10px]">{name}</strong><small className="mt-[3px] block text-[9px] text-muted">{title}</small></span></footer>
            </blockquote>
          ))}
        </div>
      </div></section>

      <section className={`${sectionWrap} pt-[65px] pb-[66px] sm:pt-[95px] sm:pb-[100px]`} id="faq">
        <Kicker label="07 / GOOD QUESTIONS" note="We love a curious person" />
        <div className="grid grid-cols-1 gap-[26px] pt-[34px] sm:grid-cols-[.8fr_1.2fr] sm:gap-[10%] sm:pt-[47px]">
          <div>
            <h2 className={sectionHeading}>Wondering<br /><em className={headingAccent}>about something?</em></h2>
            <p className={`mt-[18px] mb-2.5 max-w-[370px] text-xs sm:max-w-[310px] sm:text-sm ${bodyText}`}>Here are a few things people usually ask us. If yours isn&apos;t here, we&apos;re very easy to reach.</p>
            <a className={textLink} href="mailto:hello@digicherry.studio">Ask us anything <span className={textLinkArrow} aria-hidden="true">&rarr;</span></a>
          </div>
          <div className="border-t border-line">
            {faqs.map(([question, answer]) => (
              <details className="group border-b border-line" key={question}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-4 text-xs font-bold sm:py-[19px] sm:text-[13px] [&::-webkit-details-marker]:hidden">{question}<span className="text-xl font-normal text-coral-dark transition-transform duration-200 group-open:rotate-45" aria-hidden="true">+</span></summary>
                <p className="-mt-[3px] mr-[30px] mb-[19px] max-w-[560px] text-[11px] leading-[1.75] text-muted sm:text-xs">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-coral px-[22px] pt-[68px] pb-[63px] text-center text-white sm:px-6 sm:pt-[90px] sm:pb-[87px]" id="contact">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:18px_18px] opacity-[.12] [mask-image:linear-gradient(90deg,#000,transparent_42%,transparent_58%,#000)]" aria-hidden="true" />
        <div className="absolute top-[19px] -left-[55px] grid size-[76px] place-items-center rounded-full border border-[#fff5] text-[23px] text-[#fff9] shadow-[0_0_0_14px_#fff1,0_0_0_29px_#fff1] sm:top-[37px] sm:left-[9%] sm:size-[114px] sm:text-[31px]" aria-hidden="true">&#10022;</div>
        <div className="absolute -right-[26px] bottom-[17px] grid size-[52px] place-items-center rounded-full border border-[#fff5] text-[17px] text-[#fff9] sm:right-[9%] sm:bottom-[34px] sm:size-[72px] sm:text-[21px]" aria-hidden="true">&#10022;</div>
        <div className="relative z-[1] mx-auto max-w-[650px]">
          <span className="text-[10px] font-bold uppercase tracking-[.8px]">A good thing starts somewhere</span>
          <h2 className="mt-[19px] mb-0 font-heading text-[52px] font-extrabold leading-[.99] tracking-[-1.5px] sm:text-[clamp(50px,6.7vw,78px)] sm:tracking-[-2.6px]">Ready to make<br />a little <em className="font-serif font-normal tracking-normal text-[#542d25]">noise?</em></h2>
          <p className="mx-auto mt-[17px] mb-6 max-w-[450px] text-xs leading-[1.75] text-[#fff1ec] sm:text-sm">Bring your big idea, your messy brief, or just a good question. We&apos;ll bring the coffee and a few ideas of our own.</p>
          <a data-cursor="button" className={`${button} ${buttonOnCoral}`} href="mailto:hello@digicherry.studio"><RollText>Tell us about it</RollText></a>
          <span className="mt-[17px] block text-[10px] text-[#fff0eb]">Or write us at <a className="font-bold text-white underline underline-offset-[3px]" href="mailto:hello@digicherry.studio">hello@digicherry.studio</a></span>
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
