import Image from "next/image";
import Link from "./transition-link";
import { FaBehance, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { PiEnvelopeSimpleFill, PiMapPinFill, PiPhoneFill } from "react-icons/pi";
import logo from "../../public/digicherrylogo.png";
import { services } from "./services-data";
import HeaderBar from "./site-header";

// Shared by every page: layout widths, button styles, contact details and the header/footer.

export const sectionWrap = "mx-auto w-[calc(100%-10vw)] sm:w-[calc(100%-8vw)] md:w-[min(1160px,calc(100%-11vw))]";
export const sectionHeading = "m-0 font-heading text-[43px] font-extrabold leading-[1.03] tracking-[-1.4px] sm:text-[clamp(40px,5vw,63px)] sm:tracking-[-2px] lg:text-[clamp(44px,3.9vw,56px)]";
export const bodyText = "leading-[1.8] text-muted";

export const button = "group inline-flex min-h-[43px] items-center justify-center rounded-full px-[15px] text-[11px] font-bold transition duration-200 hover:-translate-y-0.5 sm:min-h-[46px] sm:px-[21px] sm:text-[13px]";
const hoverOrange = "hover:bg-coral hover:text-white hover:shadow-[0_10px_26px_#f56f5266] hover:brightness-110";
export const buttonCoral = `bg-coral text-white shadow-[0_7px_17px_#dd6d5030] ${hoverOrange}`;
export const buttonLight = `bg-white text-ink ${hoverOrange}`;
export const buttonDark = `bg-ink text-white shadow-[0_8px_20px_#17151326] ${hoverOrange}`;

export const navLinks = [["/", "Home"], ["/about", "About"], ["/services", "Services"], ["/projects", "Projects"], ["/contact", "Contact"]] as const;

export const contact = {
  email: "info@digicherry.in",
  phone: "+91 96261 99993",
  phoneHref: "tel:+919626199993",
  address: ["1st floor, Om Sakthi Subhiksha Avenue,", "No FF-1 FF-2, Behind Lakshmi Petrol bunk,", "Puducherry - 605001"],
};

export const offices = [
  { city: "Puducherry", country: "India", flag: "🇮🇳", label: "Head Office", address: contact.address },
  { city: "Chennai", country: "India", flag: "🇮🇳", address: ["Global Infocity, B-Block, 2nd Floor,", "#40, MGR Salai, Kandanchavadi, Perungudi,", "Chennai, Tamil Nadu - 600096"] },
  { city: "Mumbai", country: "India", flag: "🇮🇳", address: ["Office No. 810, 8th Floor,", "Lotus Arc One, Andheri West,", "Mumbai - 400053"] },
  { city: "Le Blanc-Mesnil", country: "France", flag: "🇫🇷", address: ["21 Av. de Monaco,", "93150 Le Blanc-Mesnil,", "France"] },
];

export const socials = [
  { href: "https://www.facebook.com/profile.php?id=100083845185459&mibextid=LQQJ4d", label: "Facebook", icon: FaFacebookF },
  { href: "https://instagram.com/digicherry.in?igshid=YmMyMTA2M2Y=", label: "Instagram", icon: FaInstagram },
  { href: "https://www.linkedin.com/company/96105773/admin/page-posts/published/", label: "LinkedIn", icon: FaLinkedinIn },
  { href: "https://www.youtube.com/@DigicherryDC", label: "YouTube", icon: FaYoutube },
  { href: "https://www.behance.net/gallery/231187221/Portfolio?tracking_source=project_owner_other_projects", label: "Behance", icon: FaBehance },
];

export function RollText({ children }: { children: string }) {
  return (
    <span className="relative block overflow-hidden leading-[1.3]">
      <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">{children}</span>
      <span className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0" aria-hidden="true">{children}</span>
    </span>
  );
}

export function SiteHeader() {
  return (
    <>
      {/* The sticky header is always on screen, so "Back to top" links aim at this marker instead. */}
      <span className="absolute top-0" id="top" aria-hidden="true" />
      <HeaderBar
        links={navLinks}
        logo={<Link href="/"><Image src={logo} alt="Digicherry Private Limited" className="h-11 w-auto sm:h-14" loading="eager" fetchPriority="high" /></Link>}
        cta={<Link data-cursor="button" className={`${button} ${buttonCoral} max-sm:min-h-10`} href="/contact"><RollText>Let&apos;s talk</RollText></Link>}
        menuFooter={
          <div className="flex flex-col gap-3 text-[14px] text-muted">
            <a className="flex items-center gap-3" href={`mailto:${contact.email}`}><PiEnvelopeSimpleFill className="size-4 text-coral" aria-hidden="true" />{contact.email}</a>
            <a className="flex items-center gap-3" href={contact.phoneHref}><PiPhoneFill className="size-4 text-coral" aria-hidden="true" />{contact.phone}</a>
            <div className="mt-2 flex gap-2">
              {socials.map(({ href, label, icon: Icon }) => (
                <a className="grid size-10 place-items-center rounded-full border border-line bg-white text-ink transition hover:border-coral hover:bg-coral hover:text-white" href={href} target="_blank" rel="noreferrer" aria-label={label} key={label}><Icon className="size-4" aria-hidden="true" /></a>
              ))}
            </div>
          </div>
        }
      />
    </>
  );
}

// The footer's top edge reads like a shoreline: grains of "sand" start sparse on the page and pack tighter
// until they meet a solid, gently wavy edge in the exact footer colour, so sand and footer are one surface.
// Dots come from a seeded generator so the server and client render the same tile.
const footerColor = "#211d1a";
const sandTile = { width: 360, height: 130 };
// Two full waves per tile, so the edge lines up where tiles repeat.
const shoreY = (x: number) => 104 + 5 * Math.sin((x / sandTile.width) * Math.PI * 4) + 2.5 * Math.sin((x / sandTile.width) * Math.PI * 6 + 1);
const shorePath = (() => {
  let path = `M0 ${sandTile.height} L0 ${shoreY(0).toFixed(1)}`;
  for (let x = 4; x <= sandTile.width; x += 4) path += ` L${x} ${shoreY(x).toFixed(1)}`;
  return `${path} L${sandTile.width} ${sandTile.height} Z`;
})();
const sandGrains = (() => {
  let seed = 20240917;
  const random = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const grains: { x: number; y: number; r: number; opacity: number; coral: boolean }[] = [];
  for (let i = 0; i < 3200; i++) {
    const x = random() * sandTile.width;
    const shore = shoreY(x);
    const y = random() * (shore + 2);
    // 0 at the top of the strip, 1 at the shoreline.
    const depth = Math.min(y / shore, 1);
    if (random() > depth ** 2.4) continue;
    const grain = { x, y, r: 0.4 + depth ** 1.5 * 1.9 + random() * 0.4, opacity: 0.2 + depth ** 1.2 * 0.8, coral: depth < 0.85 && random() < 0.05 };
    grains.push(grain);
    // Repeat grains that straddle the tile's side edges so the pattern has no visible seams.
    if (x < grain.r) grains.push({ ...grain, x: x + sandTile.width });
    if (x > sandTile.width - grain.r) grains.push({ ...grain, x: x - sandTile.width });
  }
  return grains;
})();

function SandEdge() {
  return (
    <div className="pointer-events-none relative -mb-px select-none" style={{ height: sandTile.height }} aria-hidden="true">
      <svg className="absolute inset-0 size-full">
        <defs>
          <pattern id="footer-sand" width={sandTile.width} height={sandTile.height} patternUnits="userSpaceOnUse">
            {sandGrains.map((grain, index) => <circle cx={grain.x.toFixed(1)} cy={grain.y.toFixed(1)} r={grain.r.toFixed(2)} fill={grain.coral ? "#f56f52" : footerColor} fillOpacity={grain.opacity.toFixed(2)} key={index} />)}
            <path d={shorePath} fill={footerColor} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#footer-sand)" />
      </svg>
    </div>
  );
}

const footerHeading = "mb-1 font-heading text-[13px] font-bold tracking-[1.6px] text-[#a99d95] uppercase";
const footerLink = "group/link inline-flex items-center gap-2 text-[14px] leading-[1.7] text-[#e9dcd2] transition-colors hover:text-coral";
const linkDash = "h-px w-0 bg-coral transition-all duration-300 group-hover/link:w-3";

export function SiteFooter() {
  return (
    <>
      <SandEdge />
      <footer className="relative overflow-hidden bg-[#211d1a] text-[#f7f0eb]">
        <div className="pointer-events-none absolute top-40 left-1/2 size-[520px] -translate-x-1/2 rounded-full bg-coral/10 blur-[120px]" aria-hidden="true" />
        <div className={`${sectionWrap} relative`}>
          <div className="flex flex-col gap-8 pt-10 pb-12 sm:pt-14 sm:pb-16 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[640px]">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-[#ffffff1f] bg-[#ffffff0a] px-3.5 py-1.5 text-[12px] font-semibold text-[#e9dcd2]"><span className="size-2 animate-ping-soft rounded-full bg-coral motion-reduce:animate-none" />Open for new projects</span>
              <h2 className="mt-5 mb-0 font-heading text-[38px] font-extrabold leading-[1.04] tracking-[-1.4px] text-white sm:text-[clamp(44px,5vw,60px)] sm:tracking-[-2px]">Have an idea? Let&apos;s make it <span className="text-coral">grow online.</span></h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link data-cursor="button" className={`${button} ${buttonCoral}`} href="/contact"><RollText>Start a project</RollText></Link>
              <a data-cursor="button" className={`${button} border border-[#ffffff2e] text-white hover:border-coral hover:bg-coral hover:shadow-[0_10px_26px_#f56f5266]`} href={`mailto:${contact.email}`}><RollText>{contact.email}</RollText></a>
            </div>
          </div>

          <div className="grid gap-10 border-t border-[#ffffff1a] py-12 sm:grid-cols-2 sm:py-14 lg:grid-cols-[1.5fr_.7fr_1.1fr_1.2fr] lg:gap-[clamp(28px,4vw,64px)]">
            <div className="max-w-[420px]">
              {/* The logo's navy lettering disappears on the dark footer, so it sits on a white card. */}
              <Link className="inline-block rounded-[14px] bg-white px-4 py-3 shadow-[0_10px_26px_#00000040]" href="/"><Image src={logo} alt="Digicherry Private Limited" className="h-11 w-auto sm:h-12" /></Link>
              <p className="mt-5 mb-6 text-[14px] leading-[1.75] text-[#b6aaa1]">Digicherry is a dynamic digital marketing and web development company dedicated to helping businesses thrive online. Their services include website design and development, search engine optimization, and social media marketing, all aimed at boosting your website traffic and enhancing your digital presence.</p>
              <div className="flex flex-wrap gap-2.5">
                {socials.map(({ href, label, icon: Icon }) => (
                  <a className="grid size-10 place-items-center rounded-full border border-[#ffffff14] bg-[#ffffff0a] text-[#e9dcd2] transition duration-200 hover:-translate-y-0.5 hover:border-coral hover:bg-coral hover:text-white" href={href} target="_blank" rel="noreferrer" aria-label={label} key={label}><Icon className="size-[17px]" aria-hidden="true" /></a>
                ))}
              </div>
            </div>
            <nav className="flex flex-col items-start gap-2.5" aria-label="Footer navigation">
              <span className={footerHeading}>Explore</span>
              {navLinks.map(([href, label]) => <Link className={footerLink} href={href} key={href}><span className={linkDash} />{label}</Link>)}
            </nav>
            <div className="flex flex-col items-start gap-2.5">
              <span className={footerHeading}>Services</span>
              {services.slice(0, 6).map((service) => <Link className={footerLink} href="/services" key={service.title}><span className={linkDash} />{service.title}</Link>)}
            </div>
            <div className="flex flex-col items-start gap-4">
              <span className={footerHeading}>Say hello</span>
              <address className="flex gap-3 text-[14px] not-italic leading-[1.7] text-[#e9dcd2]"><PiMapPinFill className="mt-1 size-4 shrink-0 text-coral" aria-hidden="true" /><span>{contact.address.map((line, index) => <span className="block" key={index}>{line}</span>)}</span></address>
              <a className="flex items-center gap-3 text-[14px] leading-[1.7] text-[#e9dcd2] transition-colors hover:text-coral" href={`mailto:${contact.email}`}><PiEnvelopeSimpleFill className="size-4 shrink-0 text-coral" aria-hidden="true" />{contact.email}</a>
              <a className="flex items-center gap-3 text-[14px] leading-[1.7] text-[#e9dcd2] transition-colors hover:text-coral" href={contact.phoneHref}><PiPhoneFill className="size-4 shrink-0 text-coral" aria-hidden="true" />{contact.phone}</a>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-[18px] gap-y-3 border-t border-[#ffffff1a] py-5 text-xs text-[#a99d95] sm:flex-nowrap sm:justify-between sm:gap-5 sm:text-[13px]"><span>&copy; 2026 Digicherry Private Limited</span><span>Made with good intentions <span className="text-coral">&#10084;</span></span><a className="text-[#e9dcd2] transition-colors hover:text-coral" href="#top">Back to top &uarr;</a></div>
        </div>
        <div className="pointer-events-none -mb-[0.2em] text-center font-heading text-[16vw] leading-[0.8] font-extrabold tracking-[-0.06em] whitespace-nowrap text-transparent select-none bg-linear-to-b from-[#ffffff17] to-[#ffffff00] bg-clip-text" aria-hidden="true">digicherry</div>
      </footer>
    </>
  );
}
