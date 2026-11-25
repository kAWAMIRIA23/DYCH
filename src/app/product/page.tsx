import type { Metadata } from "next";
import Link from "next/link";
import { CirclePhoto, CreamCards, Cta, H2, Illustration, Lede, PageHeader, Section, SectionIntro } from "@/components/ui";

export const metadata: Metadata = { title: "Smart Vizion" };

const steps = [
  {
    art: "detect",
    title: "It recognises a face at the entry point",
    text: "A camera matches an arriving face against your own enrolled records, on a unit standing on your own premises. No images leave the site, and the entrance keeps working through an internet outage because nothing has to travel for a match to happen.",
    link: { href: "/security-and-trust", label: "What does on-device mean?" },
  },
  {
    art: "register",
    title: "That same scan writes the record",
    text: "There is no second step for anyone to remember. Arrival and departure are timestamped as they occur, so the register - or the time record - is already correct when someone opens it.",
  },
  {
    art: "parent-alert",
    title: "And somebody is told, without anyone deciding to",
    text: "A push notification reaches whoever needs to know, carrying the photo so they can see the match was right. How soon after the scan it goes is a setting the site controls. SMS follows as a metered fallback for anyone without the app.",
  },
];

const industries = [
  {
    title: "Schools",
    text: "Seven capabilities on one pupil record: the gate, attendance that fills itself, alerts to parents, boarding, the guard's screen, the dashboard and report cards.",
    link: { href: "/schools", label: "See Smart Vizion for schools" },
  },
  {
    title: "Businesses & Workplaces",
    text: "A reception desk with a record behind it, workforce hours taken from the entrance, and recognition on the few doors that justify it.",
    link: { href: "/businesses", label: "See it for a workplace" },
  },
  {
    title: "Churches & Worship Centres",
    text: "Guests on the days a building fills with people nobody recognises, hours for paid staff, and care around the two or three rooms that need it.",
    link: { href: "/churches", label: "See it for a worship centre" },
  },
];

export default function ProductPage() {
  return (
    <>
      <PageHeader title="One technology, wherever the entrance is." image="/images/arrival.jpg" imageAlt="Pupils recognised by the entry camera as they arrive at the school gate">
        <p>
          Secure facial-recognition monitoring and attendance. Smart Vizion recognises a face at an entry point, writes
          the record that scan produces, and tells the person who needs to know. A school uses it at a gate and a
          workplace uses it at a reception desk, but underneath it is the same three things doing the same job.
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-2 font-semibold text-apricot">
          <li>Vision</li>
          <li>Safety</li>
          <li>Accountability</li>
        </ul>
      </PageHeader>

      <Section tone="light">
        <ol className="grid gap-10 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="border-t border-ink/15 pt-5">
              <Illustration name={s.art} className="mx-auto mb-6 max-w-[260px]" />
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber font-semibold text-teal">{i + 1}</span>
              <h2 className="type-item mt-5 text-ink">{s.title}</h2>
              <p className="mt-3 leading-relaxed text-ink-body">{s.text}</p>
              {s.link && (
                <Link href={s.link.href} className="mt-4 link inline-block text-ink">
                  {s.link.label}
                </Link>
              )}
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-6 rounded-[4px] bg-teal p-7 text-cream sm:grid-cols-3 sm:p-9">
          <p className="text-mist sm:col-span-3">Illustrative camera view, not a product screenshot.</p>
          <p><span className="font-semibold text-apricot">ID 4471</span> · <span className="font-semibold text-apricot">ID 2208</span> · <span className="font-semibold text-amber">UNMATCHED</span></p>
          <div>
            <p className="font-semibold">Matched</p>
            <p className="text-mist">Known, enrolled identity</p>
          </div>
          <div>
            <p className="font-semibold">Unmatched</p>
            <p className="text-mist">Flagged for a person to check</p>
          </div>
        </div>
      </Section>

      <Section id="visitor-management" tone="cream">
        <div className="grid gap-14 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="min-w-0">
            <H2 className="measure-heading">Visitor Management</H2>
            <Lede className="mt-6 measure-body">
              The paper visitor book replaced, rather than digitised alongside. A visitor is recorded on the way in and
              on the way out, against the person or the department they came to see, so the question of who was on site
              last Tuesday has one answer instead of a search through a drawer.
            </Lede>
            <Lede className="mt-4 measure-body">
              It runs on the same unit as recognition and writes to the same record, which is why it is part of Smart
              Vizion rather than something else to buy and connect.
            </Lede>
          </div>
          <CirclePhoto src="/images/visitor.jpg" alt="A guard checking in a visitor on a tablet at reception" />
        </div>
      </Section>

      <Section id="staff-attendance" tone="light">
        <SectionIntro title="Staff Attendance">
          <Lede>
            The arrival that opens somebody’s day is the clock-in, and the departure is the clock-out. Hours come from
            the entrance rather than from a notebook reconciled at the end of the month, and a manager reviewing them is
            reading the same events the gate recorded.
          </Lede>
          <Lede>
            Deliberately narrow: this is attendance visibility and attendance history. It is not payroll, not leave
            management and not a human-resources platform, and if that is what you need then this is not the thing that
            solves it.
          </Lede>
        </SectionIntro>
      </Section>

      <Section tone="dark">
        <H2 tone="dark">Where is your entrance?</H2>
        <div className="mt-12">
          <CreamCards items={industries} cols={3} />
        </div>
      </Section>

      <Cta title="Start with one entrance.">
        Most deployments begin with a single entry point and add the rest a term or a quarter later. Tell us where the
        pressure is and we will scope that first.
      </Cta>
    </>
  );
}
