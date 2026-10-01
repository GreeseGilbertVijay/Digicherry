import type { Metadata } from "next";
import { PiEnvelopeSimpleFill, PiMapPinFill, PiPhoneFill } from "react-icons/pi";
import Reveal from "../reveal";
import { contact, sectionWrap, socials } from "../site";
import ContactForm from "./contact-form";
import PageTransition from "../page-transition";

export const metadata: Metadata = {
  title: "Contact | Digicherry",
  description: "Talk to Digicherry about digital marketing, SEO, social media and website development in Puducherry.",
};

const mapQuery = encodeURIComponent(`Digicherry, ${contact.address.join(" ")}`);

const channels = [
  { icon: PiPhoneFill, title: "Call us", value: contact.phone, href: contact.phoneHref },
  { icon: PiEnvelopeSimpleFill, title: "Email us", value: contact.email, href: `mailto:${contact.email}` },
  { icon: PiMapPinFill, title: "Visit us", value: contact.address.join(" "), href: `https://www.google.com/maps/search/?api=1&query=${mapQuery}` },
];


export default function ContactPage() {
  return (
    <PageTransition><main>
      <section className="relative overflow-hidden bg-[#fbf1eb] pt-16 pb-40 text-center sm:pt-24 sm:pb-48" aria-labelledby="contact-title">
        <div className="pointer-events-none absolute -top-[250px] -right-[142px] size-[440px] animate-breathe rounded-full border border-[#efc9ba80] shadow-[0_0_0_44px_#efc9ba16,0_0_0_89px_#efc9ba10] motion-reduce:animate-none" aria-hidden="true" />
        <div className="pointer-events-none absolute top-[40%] -left-[90px] size-[180px] animate-float rounded-full bg-coral/10 blur-2xl motion-reduce:animate-none" aria-hidden="true" />
        <div className={`${sectionWrap} relative`}>
          <span className="inline-flex animate-fade-down items-center gap-2 text-[12px] font-bold uppercase tracking-[.4px] motion-reduce:animate-none"><span className="size-2 animate-ping-soft rounded-full bg-coral" aria-hidden="true" />Contact Us</span>
          <h1 className="mx-auto mt-5 mb-0 max-w-[780px] animate-fade-up font-heading text-[clamp(40px,7vw,68px)] font-extrabold leading-[1.02] tracking-[-2px] motion-reduce:animate-none" id="contact-title">Let&apos;s grow your brand <span className="text-coral">together</span></h1>
          <p className="mx-auto mt-6 mb-0 max-w-[540px] animate-fade-up text-[15px] leading-[1.8] text-muted [animation-delay:200ms] motion-reduce:animate-none">Tell us about your business and goals. We&apos;ll get back within one working day with ideas you can act on.</p>
        </div>
      </section>

      {/* The cards and form overlap the bottom of the hero so the page reads as one piece. */}
      <section className="relative z-[1] -mt-28 pb-16 sm:-mt-32 sm:pb-24" aria-label="Get in touch">
        <div className={`${sectionWrap} grid gap-6 lg:grid-cols-[.85fr_1.15fr] lg:gap-8`}>
          <div className="grid content-start gap-4">
            {channels.map((channel, index) => (
              <Reveal delay={index * 110} key={channel.title}>
                <a className="group/channel flex items-center gap-5 rounded-[22px] border border-line bg-white p-5 shadow-[0_8px_24px_#583a280d] transition duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1 hover:border-coral/40 hover:shadow-[0_20px_44px_#583a2820] sm:p-6" href={channel.href} target={channel.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-cream text-coral transition duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] group-hover/channel:-rotate-6 group-hover/channel:scale-110 group-hover/channel:bg-coral group-hover/channel:text-white"><channel.icon className="size-7" aria-hidden="true" /></span>
                  <span className="min-w-0">
                    <span className="block text-[12px] font-bold uppercase tracking-[.4px] text-muted">{channel.title}</span>
                    <span className="mt-1 block font-heading text-[16px] font-semibold leading-[1.45] break-words sm:text-[17px]">{channel.value}</span>
                  </span>
                </a>
              </Reveal>
            ))}
            <Reveal delay={330}>
              <div className="rounded-[22px] bg-[#211d1a] p-6 text-white">
                <span className="block font-heading text-[18px] font-semibold">Follow our work</span>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {socials.map(({ href, label, icon: Icon }) => (
                    <a className="grid size-11 place-items-center rounded-full bg-white/10 text-[#e9dcd2] transition duration-300 hover:-translate-y-1 hover:bg-coral hover:text-white" href={href} target="_blank" rel="noreferrer" aria-label={label} key={label}><Icon className="size-[18px]" aria-hidden="true" /></a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <div className="rounded-[28px] border border-line bg-white p-6 shadow-[0_24px_60px_#583a2814] sm:p-10">
              <h2 className="m-0 font-heading text-[28px] font-bold tracking-[-.7px] sm:text-[34px]">Send us a message</h2>
              <p className="mt-2 mb-7 text-[14px] leading-[1.7] text-muted">Fields marked * are required.</p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 sm:pb-24" aria-label="Map">
        <Reveal className={sectionWrap}>
          <div className="overflow-hidden rounded-[28px] border-4 border-white shadow-[0_18px_44px_#583a2818]">
            <iframe className="block h-[360px] w-full border-0 grayscale-[.3] sm:h-[440px]" src={`https://www.google.com/maps?q=${mapQuery}&output=embed`} title="Digicherry office on Google Maps" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </Reveal>
      </section>
    </main></PageTransition>
  );
}
