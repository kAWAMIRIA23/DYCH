import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Cta, H2, Lede, PageHeader, Section } from "@/components/ui";

export const metadata: Metadata = { title: "About" };

const team = [
  { name: "Grace Ddamulira", role: "Founder and Managing Director", image: "/images/grace.jpg" },
  { name: "Saida Salim", role: "Sales Manager", image: "/images/saida.jpg" },
  { name: "John Jesse Kiziri", role: "Deployment and support", image: "/images/john.jpg" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader title="Intelligent automation, built by DYCH Technologies.">
        <p>
          DYCH Technologies is a software solutions company, building automation and system management for industry and
          education across Africa, from Kampala. Smart Vizion is our live face-recognition platform: it identifies people
          at your entrance, records when they arrive and leave, and gives managers a clear record of who is on site.
        </p>
      </PageHeader>

      <Section tone="light">
        <H2 className="max-w-[22ch]">
          An organisation already knows who should be on its premises. It just has no reliable way to prove it.
        </H2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-12">
          <Lede>
            Most of the tools sold to solve that were designed somewhere with dependable power, cheap bandwidth and a
            parent body that installs apps. They arrive here, meet a two-hour outage in the first week, and the school
            goes back to the paper register it never really left.
          </Lede>
          <Lede>
            We build for the conditions that actually exist: matching that runs on site, records that survive an outage,
            and messages that reach a guardian over SMS because that is the channel they already have. The same platform
            runs a single-stream primary and a multi-campus secondary, because the hardware scales down as readily as it
            scales up.
          </Lede>
        </div>
      </Section>

      <Section tone="dark">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-[14px] bg-cream p-8 text-ink">
            <h2 className="text-sm font-semibold text-violet">Vision</h2>
            <p className="mt-4 text-xl font-semibold leading-snug">
              To be Africa’s premier driver of industrial and digital transformation, pioneering intelligent automation
              systems that empower enterprises to build smarter, resilient, and forward-ready operations.
            </p>
          </div>
          <div className="rounded-[14px] bg-cream p-8 text-ink">
            <h2 className="text-sm font-semibold text-violet">Mission</h2>
            <p className="mt-4 text-xl font-semibold leading-snug">
              To accelerate enterprise efficiency and sustainable growth across Africa by engineering robust industrial
              automation and intelligent software solutions, delivered with technical precision, integrity, and
              client-first service.
            </p>
          </div>
        </div>
        <p className="mt-8 text-[15px] text-mist">
          Incorporated in the Republic of Uganda under the Companies Act No. 1 of 2012, URSB-regulated.
        </p>
      </Section>

      <Section tone="cream">
        <H2>Meet Our Team.</H2>
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((t) => (
            <li key={t.name}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[14px] border-[6px] border-teal bg-teal">
                <Image src={t.image} alt={t.name} fill sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw" className="object-cover object-top" />
              </div>
              <p className="mt-4 text-xl font-semibold text-ink">{t.name}</p>
              <p className="text-ink-body">{t.role}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="light">
        <div className="grid gap-10 md:grid-cols-[1fr_1.3fr] md:gap-16">
          <div>
            <H2>Where we operate</H2>
            <p className="mt-6 text-xl font-semibold text-ink">Kampala, Uganda</p>
          </div>
          <div className="space-y-4">
            <Lede>
              Installations are within reach of a drive from Kampala, which is deliberate. Someone who can stand at your
              gate is worth more than a support line, and it keeps the promise of a site visit honest.
            </Lede>
            <Lede>
              We are early, and the deployment list is short. That is on purpose for now: the people who built the
              system are the ones installing it, and there is a limit to how many gates that can cover well in a term.
            </Lede>
            <Link href="/schools" className="inline-block font-semibold text-ink underline decoration-amber decoration-2 underline-offset-4">
              Where we are so far
            </Link>
          </div>
        </div>
      </Section>

      <Cta title="Come and meet the team that would install it.">
        A site assessment is a walk around your entry points and an hour of questions, with the people who would do the
        work.
      </Cta>
    </>
  );
}
