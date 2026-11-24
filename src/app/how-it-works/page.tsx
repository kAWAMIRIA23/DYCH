import type { Metadata } from "next";
import { CirclePhoto, Cta, Details, H2, Lede, PageHeader, Section, SectionIntro, type Tone } from "@/components/ui";

export const metadata: Metadata = { title: "How it works" };

const parts: {
  id: string;
  name: string;
  tone: Tone;
  intro: string;
  quote: string;
  needs: string;
  happens: string;
  seesLabel: string;
  sees: string;
  image?: string;
  imageAlt?: string;
}[] = [
  {
    id: "recognition",
    name: "Recognition",
    tone: "light",
    intro: "Recognition happens at the boundary, so the record starts at the moment someone actually arrives rather than when a teacher gets to it.",
    quote: "Every pupil, teacher and regular visitor is enrolled once. The roll is the school's own, and the gate matches against nothing else.",
    needs: "A camera covering the approach to each entry point and a machine on site that does the matching, holds the records and runs the services the parent, teacher and gate apps talk to. Mains power with battery backup at the gate. No reader, no card and no tag: a pupil walks up as normal. Existing CCTV can often supply the picture, because the system reads an NVR or DVR over the network as well as cameras we fit.",
    happens: "An arriving face is matched against the school’s enrolled records. A match writes an entry event. No match raises a prompt for the person on the gate.",
    seesLabel: "What the school sees",
    sees: "A live list of who is on the grounds, and a queue of anything the system could not resolve on its own.",
    image: "/images/arrival.jpg",
    imageAlt: "Pupils recognised by the entry camera at the school gate",
  },
  {
    id: "attendance",
    name: "Attendance",
    tone: "cream",
    intro: "The entry event is the attendance record. There is no second step for anyone to remember, and no paper register to transcribe afterwards.",
    quote: "The walk through the gate is the register entry. Nothing is transcribed afterwards, and nothing waits for a teacher to find a moment.",
    needs: "Nothing beyond the gate hardware for arrival and departure. Schools that want a second checkpoint at a classroom door add another camera position there; up to twenty run at once.",
    happens: "Arrival and departure are timestamped against the pupil profile and pushed into the class register as they occur.",
    seesLabel: "What the school sees",
    sees: "A register that is already filled in when the teacher opens it, with late arrivals and early departures marked at their real times.",
  },
  {
    id: "alerts",
    name: "Alerts",
    tone: "dark",
    intro: "A parent hears the same morning, not at the end of the day. This is the part that changes what a school can promise a family.",
    quote: "The message leaves on the same event that marked the register, which is why it arrives while the morning can still be acted on.",
    needs: "A guardian contact number on each pupil profile, and an SMS gateway or WhatsApp Business connection configured for the school.",
    happens: "Three messages: arrived, left, and expected but not arrived. The third is the one that matters, and it fires without anyone deciding to send it. The gap between the scan and the message is a school setting - immediate up to five hours, ten minutes as shipped - and the absence sweep has its own time of day.",
    seesLabel: "What the parent sees",
    sees: "A short message from a number they recognise, on the handset they already carry, with no app to install and no data bundle required.",
    image: "/images/phone.jpg",
    imageAlt: "A parent's phone showing a check-in message",
  },
  {
    id: "records",
    name: "Records",
    tone: "light",
    intro: "Everything above produces records. This is where they become something a head teacher can take into a meeting.",
    quote: "The reports are drawn from the entry and exit events themselves. Nobody assembles them by hand, so the figures and the gate cannot disagree.",
    needs: "No additional hardware. Reporting reads the records the first three steps already produce.",
    happens: "Entry logs and attendance records are collected into one view and kept for the retention period the school sets.",
    seesLabel: "What the school sees",
    sees: "Live counts by class and by pupil, a searchable entry log, and exports for board papers and ministry returns. Not a trend dashboard: the records, in a form you can take out.",
  },
];

const stages = [
  { title: "Site assessment", text: "We walk the entry points with you, check power and connectivity, and agree how many gates are in scope." },
  { title: "Hardware install", text: "Cameras and the local machine go in, out of teaching hours where the school prefers it. Where a school already has an NVR or DVR at the gate, that can be read over the network instead of running new cable." },
  { title: "Staff training", text: "The office and gate staff learn enrolment, the unmatched-face prompt, and how to correct a record." },
  { title: "Go live", text: "Enrolment runs class by class, alerts are switched on once guardian numbers are confirmed." },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader title="From the door to the office, in one line.">
        <p>
          Four parts pass the same record along, so nothing is re-typed between the entry log and the report at the end
          of the term. It is written here from a school deployment, because that is the one with the fullest detail; at
          a business entrance the mechanism is the same and only the nouns change. Each part below covers what it needs
          on site, what happens without anyone doing it, and what people actually see.
        </p>
        <nav aria-label="Parts" className="flex flex-wrap gap-2.5 pt-3">
          {parts.map((p, i) => (
            <a key={p.id} href={`#${p.id}`} className="rounded-lg border-[1.5px] border-mist px-4 py-2 font-bold text-cream hover:border-apricot">
              <span className="text-amber">{i + 1}</span> {p.name}
            </a>
          ))}
        </nav>
      </PageHeader>

      {parts.map((p, i) => (
        <Section key={p.id} id={p.id} tone={p.tone}>
          <div className={`grid gap-12 ${p.image ? "md:grid-cols-[1.1fr_0.9fr] md:items-center lg:gap-20" : ""}`}>
            <div className="min-w-0">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber text-lg font-extrabold text-teal">{i + 1}</span>
              <H2 tone={p.tone} className="mt-6">
                {p.name}
              </H2>
              <Lede tone={p.tone} className="mt-5 max-w-[56ch]">
                {p.intro}
              </Lede>
              <blockquote className={`mt-8 max-w-[56ch] border-l-4 border-amber pl-5 text-xl font-semibold leading-snug ${p.tone === "dark" ? "text-cream" : "text-ink"}`}>
                {p.quote}
              </blockquote>
            </div>
            {p.image && <CirclePhoto src={p.image} alt={p.imageAlt ?? ""} />}
          </div>
          <div className="mt-14">
            <Details
              tone={p.tone}
              cols={3}
              items={[
                { title: "What it needs", text: p.needs },
                { title: "What happens", text: p.happens },
                { title: p.seesLabel, text: p.sees },
              ]}
            />
          </div>
        </Section>
      ))}

      <Section tone="dark" className="border-t border-teal-line">
        <SectionIntro tone="dark" title="Offline is not one thing.">
          <Lede tone="dark">
            A system that stops when the connection does is worse than paper, because staff stop trusting it. Two
            different things can fail here and they do not fail the same way.
          </Lede>
        </SectionIntro>
        <div className="mt-14">
          <Details
            tone="dark"
            cols={3}
            items={[
              { title: "The internet goes down", text: "Recognition and the school's own workflows carry on, because matching happens on the unit standing on your premises and never depended on a round trip. What stops is anything that has to leave the building, so messages queue instead of sending." },
              { title: "A gate device loses the unit", text: "The tablet falls back to the roster it already holds. Somebody can still be looked up and a release can still be recorded by the person on duty, so the entrance keeps working with a human making the call." },
              { title: "The limit, stated plainly", text: "Offline gate mode does not match faces. It is lookup and recorded release, not recognition, and anything captured while the tablet is on its own reconciles with the record once the connection returns." },
            ]}
          />
        </div>
      </Section>

      <Section tone="cream">
        <SectionIntro title="Deployment and support">
          <Lede>
            Four stages between the first conversation and the first automatic message home. A school stays on paper
            until the last one, so there is no week where neither system is trusted.
          </Lede>
        </SectionIntro>
        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((s, i) => (
            <li key={s.title} className="rounded-[14px] bg-teal p-7 text-cream">
              <span className="text-sm font-semibold text-apricot">Stage {i + 1}</span>
              <h3 className="mt-5 text-xl font-extrabold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-mist">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Cta title="Ready to see this running at your entrance?">
        A site assessment is a walk around your entry points and an hour of questions. It costs nothing and it ends with
        a written scope.
      </Cta>
    </>
  );
}
