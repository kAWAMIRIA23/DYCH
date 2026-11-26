import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { TimeSaved } from "@/components/TimeSaved";
import { SectorPicker, type Sector } from "@/components/SectorPicker";
import { Button, CirclePhoto, Cta, H2, Lede, Section, SectionIntro, TextLink } from "@/components/ui";

const problems = [
  ["Shared access cards", "The credential is the person, not a badge that can be lent, copied or left at home."],
  ["Manual registers", "Cameras mark presence as people pass. Nobody fills anything in, so there is nothing to fill in late."],
  ["No idea who is on site", "A live on-site list and a live visitor list, both of which answer the question in the moment somebody asks it."],
  ["Disputes over time", "Check-in and check-out timestamps, and an export you can put in front of whoever is disputing them."],
  ["Unknown walk-ins", "An unrecognised face raises a stop event. Somebody has to log a visitor or record an override; nobody simply walks through."],
  ["A weak door process", "Paired devices, named guard accounts, PIN overrides with a written reason, and an audit log none of them can edit."],
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

const doors = [
  { title: "Schools", note: "Arrival, attendance, parents and the gate.", cta: "See it for schools", href: "/schools", image: "/images/gate.jpg", position: "object-center" },
  { title: "Businesses", note: "Reception, workforce hours and controlled entry.", cta: "See it for a workplace", href: "/businesses", image: "/images/visitor.jpg", position: "object-[30%_50%]" },
  { title: "Churches", note: "Guests, teams and the spaces that need care.", cta: "See it for a worship centre", href: "/churches", image: "/images/guard.jpg", position: "object-center" },
];

const morning = [
  {
    time: "07:30",
    title: "The gate opens",
    text: "A camera at the entry point matches each arriving face against the school’s own records, on a unit standing on site.",
    more: "How recognition works",
    href: "/schools#security",
    image: "/images/arrival.jpg",
    alt: "Pupils arriving through the school gate past the entry camera",
  },
  {
    time: "07:42",
    title: "The register writes itself",
    text: "Arrival is logged the moment a face is matched. The class teacher opens a register that is already correct.",
    more: "How attendance is recorded",
    href: "/schools#attendance",
    image: "/images/attendance-office.jpg",
    alt: "A student attendance dashboard on a desktop screen",
  },
  {
    time: "07:52",
    title: "The parent is told",
    text: "A push notification on the school’s chosen delay, with SMS behind it for families without a smartphone.",
    more: "How alerts are sent",
    href: "/schools#communication",
    image: "/images/parent-market.jpg",
    alt: "A parent at a market reading a check-in message on her phone",
  },
  {
    time: "08:30",
    title: "The office has the record",
    text: "Late arrivals flagged, absences noticed, and an export ready for the board, without anyone assembling it by hand.",
    more: "How records work",
    href: "/how-it-works#records",
    image: "/images/records-office.jpg",
    alt: "An administrator reviewing attendance records and board reports",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
          <div className="text-center">
            <h2 className="type-section mx-auto measure-heading text-ink">Every entrance knows who came through.</h2>
            <p className="mx-auto mt-5 measure-body text-lg leading-relaxed text-ink-body">
              One system for a school gate, a reception desk and a church foyer. Choose yours.
            </p>
          </div>
          <ul className="mt-14 grid gap-4 md:grid-cols-3">
            {doors.map((d) => (
              <li key={d.href}>
                <Link
                  href={d.href}
                  className="group relative isolate flex h-[340px] flex-col justify-end overflow-hidden rounded-[4px] p-7 text-cream md:h-[460px]"
                >
                  <Image
                    src={d.image}
                    alt=""
                    fill
                    quality={85}
                    sizes="(min-width: 768px) 33vw, 90vw"
                    className={`-z-20 object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none ${d.position}`}
                  />
                  <span aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-30% to-[#021a1e]/95" />
                  <h3 className="font-display text-[34px] font-semibold tracking-[-0.03em]">{d.title}</h3>
                  <p className="mt-2 text-mist">{d.note}</p>
                  <span className="mt-5 font-semibold text-apricot underline decoration-transparent decoration-2 underline-offset-4 group-hover:decoration-apricot">
                    {d.cta}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Section tone="light">
        <SectionIntro title="Right now, access and attendance run on trust and paper.">
          <Lede>Six things most premises still do the hard way, and what each one becomes.</Lede>
        </SectionIntro>
        <dl className="mt-14 border-t border-ink/15">
          {problems.map(([p, a]) => (
            <div key={p} className="grid gap-2 border-b border-ink/15 py-6 md:grid-cols-[1fr_1.4fr] md:gap-10">
              <dt className="text-lg font-semibold text-ink">{p}</dt>
              <dd className="leading-relaxed text-ink-body">{a}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section tone="cream">
        <SectionIntro title="One morning, from the gate to the office.">
          <Lede>
            One installation covers the entrance, the attendance record, the people who need telling, and the screen the
            officer on the door actually holds. This is what that looks like before the first lesson.
          </Lede>
        </SectionIntro>
        <ol className="relative mt-16">
          <span
            aria-hidden="true"
            className="absolute bottom-2 left-[5px] top-2 w-0.5 bg-gradient-to-b from-amber to-amber/15 md:left-[109px]"
          />
          {morning.map((m) => (
            <li key={m.time} className="relative grid gap-5 pb-16 pl-9 last:pb-0 md:grid-cols-[110px_minmax(0,1fr)_minmax(0,1fr)] md:gap-10 md:pl-0">
              <span
                aria-hidden="true"
                className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full bg-amber ring-[6px] ring-cream md:left-[103px]"
              />
              <p className="font-display text-[28px] font-semibold tracking-[-0.03em] text-ink tabular-nums">{m.time}</p>
              <div className="min-w-0 md:pl-8">
                <h3 className="type-item text-ink">{m.title}</h3>
                <p className="mt-2 measure-body text-[17px] leading-relaxed text-ink-body">{m.text}</p>
                <Link href={m.href} className="link mt-3 inline-block text-ink">
                  {m.more}
                </Link>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-[4px]">
                <Image src={m.image} alt={m.alt} fill quality={85} sizes="(min-width: 768px) 40vw, 90vw" className="object-cover" />
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Button href="/how-it-works" kind="outline-dark">
            See How It Works
          </Button>
          <p className="measure-body leading-relaxed text-ink-body">
            The same four run at a school gate, a factory turnstile, a clinic reception and an estate boom.{" "}
            <TextLink href="/contact">Tell us what your entrance looks like.</TextLink>
          </p>
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
        <p className="mt-10 measure-wide leading-relaxed text-mist">
          Running something that is not on this list? The questions are the same — who is this person, are they
          allowed here now, when did they arrive and leave, and who else came through.{" "}
          <TextLink href="/contact" tone="dark">
            Tell us what your entrance looks like
          </TextLink>{" "}
          and we will say whether this helps.
        </p>
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
            <H2 tone="dark" className="measure-heading">
              Built for the conditions it actually runs in.
            </H2>
            <Lede tone="dark" className="mt-6 measure-body">
              Patchy power, thin bandwidth, and a parent body reachable on a basic handset long before it is reachable on
              an app. Those are constraints here, not edge cases, so they shaped the design rather than the
              troubleshooting page.
            </Lede>
            <dl className="mt-10 grid gap-8 sm:grid-cols-2">
              <div className="border-t border-teal-line pt-5">
                <dt className="type-item">Offline first</dt>
                <dd className="mt-2 leading-relaxed text-mist">
                  The gate keeps reading and the register keeps writing when the line drops. Everything syncs once
                  connectivity returns.
                </dd>
              </div>
              <div className="border-t border-teal-line pt-5">
                <dt className="type-item">On the phone parents already own</dt>
                <dd className="mt-2 leading-relaxed text-mist">
                  A push notification reaches a parent on the school’s own timing. Where there is no smartphone, the same
                  alert falls back to SMS, so no family is left out.
                </dd>
              </div>
            </dl>
          </div>
          <div className="space-y-8">
            <CirclePhoto
              src="/images/parent-market.jpg"
              alt="A parent at an outdoor market, near generators, reading a DYCH Parent App check-in notification on an older smartphone"
              ratio="aspect-[16/10]"
            />
            <div className="panel-outline relative bg-teal p-7 text-cream">
              <p className="type-item">All face data is matched and encrypted on-device. No photos ever leave the school.</p>
              <p className="mt-3 leading-relaxed text-mist">
                Recognition runs on a unit at your site, not on a server elsewhere. That is why the gate survives an
                outage, and why there is nothing to upload in the first place.
              </p>
              <Link href="/security-and-trust" className="link mt-4 inline-block text-apricot">
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
