"use client";

import { useState, type FormEvent } from "react";
import { PiCheckCircleFill, PiPaperPlaneTiltFill } from "react-icons/pi";
import { services } from "../services-data";
import { contact } from "../site";

const field = "peer w-full rounded-2xl border border-line bg-paper px-4 pt-6 pb-2.5 text-[15px] text-ink outline-none transition duration-300 placeholder:text-transparent focus:border-coral focus:bg-white focus:shadow-[0_0_0_4px_#f56f521f]";
// The label sits inside the field like a placeholder, then floats up once the field is focused or filled.
const label = "pointer-events-none absolute top-4 left-4 origin-left text-[15px] text-muted transition-all duration-300 peer-focus:top-2 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:text-coral-dark peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-semibold";

function Field({ name, text, type = "text", required = false, autoComplete }: { name: string; text: string; type?: string; required?: boolean; autoComplete?: string }) {
  return (
    <label className="relative block">
      <input className={field} name={name} type={type} placeholder={text} required={required} autoComplete={autoComplete} />
      <span className={label}>{text}{required && " *"}</span>
    </label>
  );
}

// There is no backend yet, so submitting drafts an email to the team in the visitor's own mail app.
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim();
    const subject = `Enquiry from ${get("name")}${get("service") ? ` - ${get("service")}` : ""}`;
    const body = [`Name: ${get("name")}`, `Email: ${get("email")}`, `Phone: ${get("phone") || "-"}`, `Service: ${get("service") || "-"}`, "", get("message")].join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex min-h-[420px] animate-fade-up flex-col items-center justify-center text-center motion-reduce:animate-none">
        <PiCheckCircleFill className="size-16 text-coral" aria-hidden="true" />
        <h3 className="mt-5 mb-0 font-heading text-[26px] font-bold tracking-[-.5px]">Almost there!</h3>
        <p className="mt-3 mb-0 max-w-[360px] text-[14px] leading-[1.7] text-muted">Your email app should have opened with your message ready. Hit send and we&apos;ll reply within one working day.</p>
        <button type="button" className="mt-6 cursor-pointer bg-transparent text-[13px] font-bold text-coral-dark underline underline-offset-4" onClick={() => setSent(false)}>Edit my message</button>
      </div>
    );
  }

  return (
    <form className="grid gap-4" onSubmit={submit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="name" text="Your name" required autoComplete="name" />
        <Field name="email" text="Email address" type="email" required autoComplete="email" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="phone" text="Phone number" type="tel" autoComplete="tel" />
        <label className="relative block">
          <select className={`${field} cursor-pointer appearance-none`} name="service" defaultValue="">
            <option value="">Not sure yet</option>
            {services.map((service) => <option key={service.image} value={service.title}>{service.title}</option>)}
          </select>
          <span className="pointer-events-none absolute top-2 left-4 text-[11px] font-semibold text-muted">Interested in</span>
          <span className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-muted" aria-hidden="true">&#9662;</span>
        </label>
      </div>
      <label className="relative block">
        <textarea className={`${field} min-h-[150px] resize-y`} name="message" placeholder="Tell us about your project" required />
        <span className={label}>Tell us about your project *</span>
      </label>
      <button data-cursor="button" type="submit" className="group/send mt-2 inline-flex min-h-[52px] cursor-pointer items-center justify-center gap-2.5 rounded-full bg-coral px-7 text-[14px] font-bold text-white shadow-[0_10px_26px_#f56f5244] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_#f56f5266] hover:brightness-110 sm:justify-self-start">
        Send message
        <PiPaperPlaneTiltFill className="size-[18px] transition-transform duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] group-hover/send:translate-x-1 group-hover/send:-translate-y-1 group-hover/send:rotate-12" aria-hidden="true" />
      </button>
    </form>
  );
}
