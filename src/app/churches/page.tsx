import type { Metadata } from "next";
import { CreamCards, Cta, H2, Lede, PageHeader, Section } from "@/components/ui";

export const metadata: Metadata = { title: "Churches & Worship Centres" };

const places = [
  {
    title: "Guests, on a day that matters",
    text: "A visitor record for conferences, weddings, funerals and the days a building fills with people nobody at the door recognises. It is a reception process, not a checkpoint, and it exists so the team can follow up warmly afterwards rather than so anybody is screened on the way in.",
    link: { href: "/product#visitor-management", label: "Visitor Management" },
  },
  {
    title: "Paid staff and operational teams",
    text: "Where a church employs people, hours still have to be recorded. The same arrival scan writes the attendance record, which spares an administrator reconciling a notebook at the end of the month. Volunteers are a different question and we would not push it there.",
    link: { href: "/product#staff-attendance", label: "Staff Attendance" },
  },
  {
    title: "The few spaces that need care",
    text: "An office with the safe in it, a store, a children's area that should only admit cleared adults. Recognition belongs at those doors and almost nowhere else on the site, and we would rather fit one entry point properly than sell you a building's worth.",
    link: { href: "/how-it-works", label: "How recognition works" },
  },
];

export default function ChurchesPage() {
  return (
    <>
      <PageHeader title="Keep the welcome. Keep the record.">
        <p>
          A church is meant to be open, and nothing here should change how it feels to walk in on a Sunday. What DYCH
          covers is narrower: the guest book that nobody can read afterwards, the staff hours that live in somebody&apos;s
          notebook, and the two or three doors that genuinely should not open for everyone.
        </p>
      </PageHeader>

      <Section tone="light">
        <Lede className="measure-wide text-xl">
          DYCH is not church-management software and does not want to be. Giving, membership, pastoral care, rotas and
          ministry planning belong to the platform you already run, and we have no intention of asking you to move any
          of it. What we do is the physical layer around the building: who came to the office, which staff worked, and
          the handful of rooms that need a door with a memory.
        </Lede>
      </Section>

      <Section tone="dark">
        <H2 tone="dark" className="measure-heading">Three places it helps, in the order most churches meet them.</H2>
        <div className="mt-12">
          <CreamCards items={places} cols={3} />
        </div>
        <p className="mt-10 measure-wide leading-relaxed text-mist">
          If the honest answer after a visit is that your welcome desk is working and nothing needs a camera, we will
          tell you that and leave you the checklist anyway.
        </p>
      </Section>

      <Cta title="Tell us how the building runs today.">
        A visit is an hour of questions about guests, staff and the doors you worry about. It costs nothing and it ends
        with a written scope, or with us saying you do not need one.
      </Cta>
    </>
  );
}
