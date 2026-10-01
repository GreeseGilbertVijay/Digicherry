import Link from "./transition-link";
import Reveal from "./reveal";
import ServicePanels from "./service-panels";
import { bodyText, button, buttonCoral, buttonLight, RollText, sectionHeading, sectionWrap } from "./site";

// The home page's services block: intro copy, the expanding panels, and a way on to the full services page.
export default function ServicesSection({ viewAll = false }: { viewAll?: boolean }) {
  return (
    <section className="relative overflow-hidden bg-paper py-16 sm:py-24" aria-labelledby="services-title">
      <div className="pointer-events-none absolute -top-[120px] -left-[160px] size-[380px] animate-float rounded-full bg-coral/10 blur-3xl motion-reduce:animate-none" aria-hidden="true" />
      <div className={`${sectionWrap} relative`}>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[640px]">
            <Reveal><span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[.4px]"><span className="size-2 animate-ping-soft rounded-full bg-coral" aria-hidden="true" />Our Services</span></Reveal>
            <Reveal delay={120}><h2 className={`${sectionHeading} mt-4`} id="services-title">Everything your brand needs to <span className="text-coral">grow online</span></h2></Reveal>
          </div>
          <Reveal delay={240} className="max-w-[420px]"><p className={`m-0 text-[15px] ${bodyText}`}>From the first click to the final sale, we plan, build and run campaigns that turn attention into enquiries and enquiries into loyal customers.</p></Reveal>
        </div>

        <Reveal className="mt-12 lg:mt-16"><ServicePanels /></Reveal>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {viewAll && <Link data-cursor="button" className={`${button} ${buttonLight} shadow-[0_8px_20px_#583a2812]`} href="/services"><RollText>View all services</RollText></Link>}
          <Link data-cursor="button" className={`${button} ${buttonCoral}`} href="/contact"><RollText>Get a free strategy call</RollText></Link>
        </div>
      </div>
    </section>
  );
}
