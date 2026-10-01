import Image from "next/image";
import Link from "./transition-link";
import { FaBehance, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { PiEnvelopeSimpleFill, PiMapPinFill, PiPhoneFill } from "react-icons/pi";
import logo from "../../public/digicherrylogo.png";

// Shared by every page: layout widths, button styles, contact details and the header/footer.

export const sectionWrap = "mx-auto w-[calc(100%-10vw)] sm:w-[calc(100%-8vw)] md:w-[min(1160px,calc(100%-11vw))]";
export const sectionHeading = "m-0 font-heading text-[43px] font-extrabold leading-[1.03] tracking-[-1.4px] sm:text-[clamp(40px,5vw,63px)] sm:tracking-[-2px] lg:text-[clamp(44px,3.9vw,56px)]";
export const bodyText = "leading-[1.8] text-muted";

export const button = "group inline-flex min-h-[43px] items-center justify-center rounded-full px-[15px] text-[11px] font-bold transition duration-200 hover:-translate-y-0.5 sm:min-h-[46px] sm:px-[21px] sm:text-[13px]";
const hoverOrange = "hover:bg-coral hover:text-white hover:shadow-[0_10px_26px_#f56f5266] hover:brightness-110";
export const buttonCoral = `bg-coral text-white shadow-[0_7px_17px_#dd6d5030] ${hoverOrange}`;
export const buttonLight = `bg-white text-ink ${hoverOrange}`;
export const buttonDark = `bg-ink text-white shadow-[0_8px_20px_#17151326] ${hoverOrange}`;

export const navLinks = [["/#about", "About"], ["/services", "Services"], ["/projects", "Projects"], ["/contact", "Contact"]] as const;

export const contact = {
  email: "info@digicherry.in",
  phone: "+91 96261 99993",
  phoneHref: "tel:+919626199993",
  address: ["1st floor, Om Sakthi Subhiksha Avenue,", "No FF-1 FF-2, Behind Lakshmi Petrol bunk,", "Puducherry - 605001"],
};

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
    <header className="relative z-[2] bg-paper [view-transition-name:site-header]" id="top"><div className={`${sectionWrap} flex h-[70px] items-center justify-between gap-3 sm:h-[82px] sm:gap-7`}>
      <Link className="shrink-0" href="/"><Image src={logo} alt="Digicherry Private Limited" className="h-11 w-auto sm:h-14" loading="eager" fetchPriority="high" /></Link>
      <nav className="m-auto hidden items-center gap-[clamp(22px,3vw,46px)] sm:flex" aria-label="Main navigation">
        {navLinks.map(([href, label]) => <Link className="text-[13px] font-semibold hover:text-coral-dark" href={href} key={href}>{label}</Link>)}
      </nav>
      <Link data-cursor="button" className={`${button} ${buttonCoral} max-sm:min-h-10`} href="/contact"><RollText>Let&apos;s talk</RollText></Link>
    </div></header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#211d1a] px-[5vw] pt-9 pb-4 text-[#f7f0eb] sm:px-[5.5vw] sm:pt-[49px] sm:pb-[19px]">
      <div className="flex flex-col gap-[33px] pb-8 sm:flex-row sm:justify-between sm:gap-[60px] sm:pb-[47px]">
        <div className="max-w-[340px]">
          {/* The logo's navy lettering disappears on the dark footer, so it sits on a white card. */}
          <Link className="inline-block rounded-[14px] bg-white px-4 py-3 shadow-[0_10px_26px_#00000040]" href="/"><Image src={logo} alt="Digicherry Private Limited" className="h-12 w-auto sm:h-14" /></Link>
          <p className="mt-[15px] mb-5 text-[15px] leading-[1.7] text-[#b6aaa1] sm:text-base">Digital marketing and website development that brings more reach, more leads and lasting growth.</p>
          <div className="flex flex-wrap gap-2.5">
            {socials.map(({ href, label, icon: Icon }) => (
              <a className="grid size-10 place-items-center rounded-full bg-[#ffffff12] text-[#e9dcd2] transition duration-200 hover:-translate-y-0.5 hover:bg-coral hover:text-white" href={href} target="_blank" rel="noreferrer" aria-label={label} key={label}><Icon className="size-[18px]" aria-hidden="true" /></a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-8 pt-[5px] sm:flex-row sm:gap-[clamp(40px,7vw,110px)]">
          <div className="flex flex-col items-start gap-3"><span className="mb-1 font-heading text-[19px] font-bold tracking-[-.3px] text-white sm:text-[21px]">Take a look</span>{navLinks.map(([href, label]) => <Link className="text-[13px] sm:text-sm leading-[1.7] text-[#e9dcd2] hover:text-coral-dark" href={href} key={href}>{label}</Link>)}</div>
          <div className="flex max-w-[320px] flex-col items-start gap-3.5">
            <span className="mb-1 font-heading text-[19px] font-bold tracking-[-.3px] text-white sm:text-[21px]">Say hello</span>
            <address className="flex gap-2.5 text-[13px] sm:text-sm not-italic leading-[1.7] text-[#e9dcd2]"><PiMapPinFill className="mt-1 size-4 shrink-0 text-coral" aria-hidden="true" /><span>{contact.address.map((line, index) => <span className="block" key={index}>{line}</span>)}</span></address>
            <a className="flex items-center gap-2.5 text-[13px] sm:text-sm leading-[1.7] text-[#e9dcd2] hover:text-coral-dark" href={`mailto:${contact.email}`}><PiEnvelopeSimpleFill className="size-4 shrink-0 text-coral" aria-hidden="true" />{contact.email}</a>
            <a className="flex items-center gap-2.5 text-[13px] sm:text-sm leading-[1.7] text-[#e9dcd2] hover:text-coral-dark" href={contact.phoneHref}><PiPhoneFill className="size-4 shrink-0 text-coral" aria-hidden="true" />{contact.phone}</a>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-x-[18px] gap-y-3 border-t border-[#ffffff24] pt-4 text-xs text-[#a99d95] sm:flex-nowrap sm:justify-between sm:gap-5 sm:text-[13px]"><span>&copy; 2026 Digicherry Private Limited</span><span>Made with good intentions <span className="text-coral">&#10084;</span></span><a className="text-[#e9dcd2]" href="#top">Back to top &uarr;</a></div>
    </footer>
  );
}
