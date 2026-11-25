import Image from "next/image";
import Link from "next/link";
import { ScanFace, ClipboardCheck, BellRing, TabletSmartphone } from "lucide-react";
import { Hero } from "@/components/Hero";
import { TimeSaved } from "@/components/TimeSaved";
import { SectorPicker, type Sector } from "@/components/SectorPicker";
import { Button, CirclePhoto, Cta, H2, Illustration, Lede, Section, SectionIntro, TextLink } from "@/components/ui";

const problems = [
  ["Shared access cards", "The credential is the person, not a badge that can be lent, copied or left at home."],
  ["Manual registers", "Cameras mark presence as people pass. Nobody fills anything in, so there is nothing to fill in late."],
  ["No idea who is on site", "A live on-site list and a live visitor list, both of which answer the question in the moment somebody asks it."],
  ["Disputes over time", "Check-in and check-out timestamps, and an export you can put in front of whoever is disputing them."],
  ["Unknown walk-ins", "An unrecognised face raises a stop event. Somebody has to log a visitor or record an override; nobody simply walks through."],
  ["A weak door process", "Paired devices, named guard accounts, PIN overrides with a written reason, and an audit log none of them can edit."],
];

const jobs = [
  {
    icon: ScanFace,
    title: "Recognition at the entrance",
    text: "A face matched against your own enrolled people as they walk in, so you know who is on the premises and who is not, without anyone walking a clipboard to the perimeter.",
    href: "/schools#security",
  },
  {
    icon: ClipboardCheck,
    title: "Attendance and timekeeping",
    text: "Arrival and departure recorded as they happen, against your own hours and late rules. No manual register, so no transcription errors to chase at the end of the month.",
    href: "/schools#attendance",
  },
  {
    icon: BellRing,
    title: "Alerts to the right people",
    text: "A notification carrying the photo, so whoever gets it can see the match was right. You set how soon after the scan it goes; SMS and WhatsApp follow where it goes unopened.",
    href: "/schools#communication",
  },
  {
    icon: TabletSmartphone,
    title: "The screen on the door",
    text: "One tablet instead of a register, a visitor book and a pass list. It tells the person on duty what to do for each arrival: allow, late, stop or unknown, and keeps working when the connection drops.",
    href: "/schools#guard-app",
  },
];

const EDU = { href: "/schools", label: "See the education product" };
const sectors: Sector[] = [
  { title: "Corporate offices", art: "register", text: "Staff timekeeping without clock cards. Reception sees who entered. Unknown faces become logged visitors rather than silent walk-ins, and HR gets a daily attendance export.", link: EDU },
  { title: "Factories and warehouses", art: "records", text: "Shift presence at the gate rather than at a desk. Late and absence records that stand up in payroll and in a safety briefing. Contractors logged at the entrance like everyone else." },
  { title: "Construction and project sites", art: "guard-tablet", text: "Who is on site right now, which is the question that matters when something happens. Check-in for workers and subcontractors, a record of deliveries and inspectors, and tablets at the perimeter even when the office PC is elsewhere." },
  { title: "Healthcare and clinics", art: "detect", text: "Staff attendance for rotas, controlled entry to restricted areas, and a visitor log for family and vendors. An audit trail for every time somebody was let through without a match." },
  { title: "Hospitality and facilities", art: "faces", text: "Staff check-in for hotels, gyms and event venues. Members recognised at the door. Guests logged at reception instead of on a clipboard that walks off." },
  { title: "Estates and gated communities", art: "boarding", text: "Residents recognised at the boom or the pedestrian gate. Guests logged against the host expecting them. Release on the tablet when the network drops, syncing when it returns." },
  { title: "Places of worship and NGOs", art: "alerts", text: "Guest records on the days a building fills with people nobody recognises, hours for paid staff, and care around the rooms that need it.", link: EDU },
  { title: "Education", art: "attendance", text: "Pupil and staff attendance, alerts to guardians, and authorised pickup at the gate. The same engine as every sector above, with the vocabulary a school uses.", link: EDU },
];

const pipeline = [
  { art: "detect", title: "Recognition", text: "A face is matched at the entry point, on hardware standing on your own site." },
  { art: "attendance", title: "Attendance", text: "That same scan writes the arrival straight into the register." },
  { art: "alerts", title: "Alerts", text: "A push notification reaches the parent on the school’s chosen delay, with SMS behind it." },
  { art: "records", title: "Records", text: "Entry logs and attendance collect into one searchable view, and export." },
];

export default function Home() {
  return (
    <>
      <Hero />

      <Section tone="light">
        <SectionIntro title="Right now, access and attendance run on trust and paper.">
          <Lede>Six things most premises still do the hard way, and what each one becomes.</Lede>
        </SectionIntro>
        <dl className="mt-14 border-t border-ink/20">
          {problems.map(([p, a]) => (
            <div key={p} className="grid gap-2 border-b border-ink/20 py-6 md:grid-cols-[1fr_1.4fr] md:gap-10">
              <dt className="text-lg font-semibold text-ink">{p}</dt>
              <dd className="leading-relaxed text-ink-body">{a}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <H2 className="max-w-[14ch]">Four jobs the front desk stops doing by hand.</H2>
            <Lede className="mt-6 max-w-[46ch]">
              One installation covers the entrance, the attendance record, the people who need telling, and the screen
              the officer on the door actually holds. Each part works on its own and gets sharper alongside the others.
            </Lede>
            <div className="relative mt-10 hidden aspect-[4/3] overflow-hidden rounded-[14px] border-[6px] border-teal lg:block">
              <Image
                src="/images/gate.jpg"
                alt="Pupils walking through a school gate past an entry camera"
                fill
                sizes="40vw"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <ul className="border-t border-ink/20">
              {jobs.map((j) => (
                <li key={j.title} className="grid grid-cols-[auto_1fr] gap-x-5 border-b border-ink/20 py-8">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber" aria-hidden="true">
                    <j.icon className="h-5 w-5 text-teal" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-ink">{j.title}</h3>
                    <p className="mt-2 max-w-[52ch] text-[17px] leading-relaxed text-ink-body">{j.text}</p>
                    <Link href={j.href} className="mt-3 inline-block font-semibold text-ink underline decoration-amber decoration-2 underline-offset-4">
                      Read more
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-[56ch] leading-relaxed text-ink-body">
              The same four run at a school gate, a factory turnstile, a clinic reception and an estate boom. What
              changes is the vocabulary, not the system. <TextLink href="/contact">Tell us what your entrance looks like.</TextLink>
            </p>
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <SectionIntro tone="dark" title="One system. Eight vocabularies.">
          <Lede tone="dark">
            A pupil, an employee, a contractor, a resident and a member of a congregation are the same problem wearing
            different nouns: somebody arrived, and the building should know. What changes between these is the language
            on the screen, not the system behind it.
          </Lede>
        </SectionIntro>
        <div className="mt-14">
          <SectorPicker sectors={sectors} />
        </div>
        <p className="mt-10 max-w-[70ch] leading-relaxed text-mist">
          Running something that is not on this list? The questions are the same — who is this person, are they
          allowed here now, when did they arrive and leave, and who else came through.{" "}
          <TextLink href="/contact" tone="dark">
            Tell us what your entrance looks like
          </TextLink>{" "}
          and we will say whether this helps.
        </p>
      </Section>

      <Section tone="light">
        <SectionIntro title="From the door to the office, in one line.">
          <Lede>
            The four parts pass the same record along, so nothing is re-typed between the gate log and the report at the
            end of term.
          </Lede>
        </SectionIntro>
        <ol className="mt-14 grid gap-px overflow-hidden rounded-[14px] border border-ink/15 bg-ink/15 sm:grid-cols-2 lg:grid-cols-4">
          {pipeline.map((s, i) => (
            <li key={s.title} className="bg-paper p-7">
              <Illustration name={s.art} className="mx-auto mb-5 max-w-[200px]" />
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber font-semibold tabular-nums text-teal">
                {i + 1}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-body">{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <Button href="/how-it-works" kind="outline-dark">
            See How It Works
          </Button>
        </div>
      </Section>

      <Section tone="cream">
        <p className="mb-4 font-semibold text-ink-sub">The arithmetic</p>
        <SectionIntro title="How much of the day the entrance is taking.">
          <Lede>
            A manual register or a sign-in book costs a few seconds per person, every single morning. Put your own two
            numbers in and see what that adds up to.
          </Lede>
        </SectionIntro>
        <div className="mt-14">
          <TimeSaved />
        </div>
      </Section>

      <Section tone="dark">
        <div className="grid gap-14 md:grid-cols-[1.1fr_0.9fr] md:items-center lg:gap-20">
          <div className="min-w-0">
            <H2 tone="dark" className="max-w-[16ch]">
              Built for the conditions it actually runs in.
            </H2>
            <Lede tone="dark" className="mt-6 max-w-[50ch]">
              Patchy power, thin bandwidth, and a parent body reachable on a basic handset long before it is reachable on
              an app. Those are constraints here, not edge cases, so they shaped the design rather than the
              troubleshooting page.
            </Lede>
            <dl className="mt-10 grid gap-8 sm:grid-cols-2">
              <div className="border-t-4 border-amber pt-5">
                <dt className="text-xl font-semibold">Offline first</dt>
                <dd className="mt-2 leading-relaxed text-mist">
                  The gate keeps reading and the register keeps writing when the line drops. Everything syncs once
                  connectivity returns.
                </dd>
              </div>
              <div className="border-t-4 border-amber pt-5">
                <dt className="text-xl font-semibold">On the phone parents already own</dt>
                <dd className="mt-2 leading-relaxed text-mist">
                  A push notification reaches a parent on the school’s own timing. Where there is no smartphone, the same
                  alert falls back to SMS, so no family is left out.
                </dd>
              </div>
            </dl>
          </div>
          <div className="space-y-8">
            <CirclePhoto src="/images/phone.jpg" alt="A parent's phone showing a check-in notification" ratio="aspect-[4/5]" />
            <div className="relative rounded-[14px] bg-cream p-7 text-ink">
              <p className="text-xl font-semibold">All face data is matched and encrypted on-device. No photos ever leave the school.</p>
              <p className="mt-3 leading-relaxed text-ink-body">
                Recognition runs on a unit at your site, not on a server elsewhere. That is why the gate survives an
                outage, and why there is nothing to upload in the first place.
              </p>
              <Link href="/security-and-trust" className="mt-4 inline-block font-semibold text-violet underline underline-offset-4">
                How we handle children’s data
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Cta title="See your entrance running on records instead of paper.">
        Tell us the size of your roll and how attendance is taken today. We will come back with what an installation
        would involve at your site.
      </Cta>
    </>
  );
}
