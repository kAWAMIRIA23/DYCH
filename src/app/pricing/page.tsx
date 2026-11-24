import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { Cta, H2, Lede, PageHeader, Section, SectionIntro } from "@/components/ui";

export const metadata: Metadata = { title: "Pricing" };

const plans = [
  {
    name: "Core",
    text: "The gate, the register and the parent line. Where most schools start.",
    items: ["Gate camera, matched on-device", "Automatic attendance", "Parent alerts", "Admin dashboard", "Installation and training"],
  },
  {
    name: "Secure",
    badge: "Most schools",
    text: "Adds the Guard App, so the gate stops running on paper entirely.",
    items: ["Everything in Core", "Guard App", "Authorised pickup", "Digital visitor log", "Logged guard overrides", "SMS fallback, metered"],
  },
  {
    name: "Complete",
    text: "More than one site, or a school that needs us closer than a phone line.",
    items: ["Everything in Secure", "Multi-site coverage", "Dedicated support contact", "Custom integrations", "Boarding management"],
  },
];

const faqs = [
  { q: "Do we need new cameras?", a: "Not always. A built-in webcam, USB cameras, or the NVR or DVR you already have can all feed the system over the network. Where something is missing we tell you what the site needs and quote for it, and if you ask us to we will recommend what to buy and help you get hold of it. We are not selling you the hardware. Working out what you already have is what the visit is for." },
  { q: "Does it only work for schools?", a: "No. The same recognition, attendance, entry and visitor tools apply anywhere you need to know who came in and when. Offices, factories, warehouses, clinics, hotels, estates, places of worship. Schools are one sector we serve, and the one we have the deepest documentation for." },
  { q: "What happens if someone is not enrolled?", a: "The event is recorded as unknown. Somebody has to act on it: log them as a visitor, or record a supervised override with a reason against a named account. There is no path where an unrecognised person simply passes without a trace." },
  { q: "Do we need reliable internet?", a: "No. Matching runs on your own hardware and the attendance record is written locally, so the gate and the register keep working through an outage. The camera supplies the picture a match is made from; the system is not a video recorder and does not sit there keeping recordings of your entrance. Connectivity is what carries messages to parents and syncs the record afterwards." },
  { q: "Why is SMS priced separately?", a: "Push notifications cost nothing per message, so they are the primary channel. SMS exists so parents without a smartphone are still reached, and it carries a real per-message cost. Charging for it honestly is better than folding it into a flat fee and quietly rationing it." },
  { q: "What happens if something breaks mid-term?", a: "Support reaches us on the same phone and WhatsApp numbers as everything else, and the person who answers has usually walked your site." },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader title="Three plans. The figure comes after we have seen your site.">
        <p>
          Hardware, installation and training are part of a plan rather than a separate invoice. What changes the number
          is your site: how many entry points, how many pupils, and what is already there.
        </p>
      </PageHeader>

      <Section tone="dark" className="!pt-0">
        <ul className="grid gap-4 lg:grid-cols-3">
          {plans.map((p) => (
            <li
              key={p.name}
              className={`flex flex-col rounded-[14px] p-8 ${p.badge ? "bg-apricot text-teal" : "bg-cream text-ink"}`}
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-2xl font-semibold">{p.name}</h2>
                {p.badge && <span className="rounded-lg bg-teal px-3 py-1 text-sm font-semibold text-apricot">{p.badge}</span>}
              </div>
              <p className="mt-3 leading-relaxed text-ink-body">{p.text}</p>
              <ul className="mt-6 space-y-3 border-t border-ink/15 pt-6">
                {p.items.map((it) => (
                  <li key={it} className="flex gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap items-center gap-5 pt-8">
                <Link href="/contact" className="rounded-lg bg-teal px-5 py-3 font-semibold text-cream hover:bg-teal-raised">
                  Book a site visit
                </Link>
                <a href="#why-no-price" className="font-semibold underline decoration-2 underline-offset-4">
                  Why no price?
                </a>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="why-no-price" tone="light">
        <div className="grid gap-8 md:grid-cols-[1fr_1.3fr] md:gap-16">
          <H2 className="max-w-[14ch]">Why there is no price on this page.</H2>
          <div className="space-y-4">
            <Lede>
              Because we would be guessing. The number depends on how many entry points you have, how many pupils are on
              the roll, whether there are boarders, what power and network already reach the gate, and how much of it we
              can reuse. A figure quoted before any of that is known is either padded to be safe or revised upwards
              later, and neither is a good way to begin.
            </Lede>
            <Lede>
              So we confirm the exact figure after a free, no-obligation site visit. The visit costs nothing whether or
              not you go ahead, and it ends with a written scope you can take to your board.
            </Lede>
          </div>
        </div>
      </Section>

      <Section tone="cream">
        <SectionIntro title="What schools ask before they sign." />
        <div className="mt-12 border-t border-ink/20">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-ink/20">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-xl font-semibold text-ink">
                {f.q}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber text-lg text-teal transition-transform group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="max-w-[70ch] pb-7 leading-relaxed text-ink-body">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <Cta title="Book the site visit. It costs nothing either way.">
        An hour walking your entry points, and a written scope at the end of it. If it is not right for your school, we
        will say so.
      </Cta>
    </>
  );
}
