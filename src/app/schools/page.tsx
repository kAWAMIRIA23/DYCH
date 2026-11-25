import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { CirclePhoto, Cta, Details, H2, Illustration, Lede, PageHeader, Section, type Tone } from "@/components/ui";

export const metadata: Metadata = { title: "Schools" };

function Capability({
  id,
  tone,
  title,
  intro,
  items,
  image,
  imageAlt = "",
  illustration,
}: {
  id?: string;
  tone: Tone;
  title: string;
  intro: ReactNode;
  items: { title: string; text: ReactNode }[];
  image?: string;
  imageAlt?: string;
  illustration?: string;
}) {
  return (
    <Section id={id} tone={tone}>
      <div className={`grid gap-12 ${image || illustration ? "md:grid-cols-[1.1fr_0.9fr] md:items-center lg:gap-20" : ""}`}>
        <div className="min-w-0">
          <H2 tone={tone} className="measure-heading">
            {title}
          </H2>
          <Lede tone={tone} className="mt-6 measure-body">
            {intro}
          </Lede>
        </div>
        {image && <CirclePhoto src={image} alt={imageAlt} />}
        {illustration && <Illustration name={illustration} dark={tone === "dark"} className="mx-auto max-w-[380px]" />}
      </div>
      <div className={`relative ${image ? "mt-14 md:mt-28" : "mt-14"}`}>
        <Details tone={tone} items={items} />
      </div>
    </Section>
  );
}

const fits = [
  {
    title: "One gate or four",
    text: "The same platform runs a single-stream primary and a school with several entry points. Cameras are added per entry point, so the cost follows the site rather than a licence tier.",
  },
  {
    title: "Day schools and boarding schools",
    text: "A day school uses arrival, departure and pickup. A boarding school adds campus status and dorm check-in on top of the same records, rather than running a second system alongside.",
  },
  {
    title: "Schools where the internet is not dependable",
    text: "Matching runs on your own hardware. The gate keeps reading and the register keeps writing through an outage, and records sync when the line returns.",
  },
];

export default function SchoolsPage() {
  return (
    <>
      <PageHeader title="From the gate to the end of term." image="/images/gate.jpg" imageAlt="Pupils walking through a school gate at sunrise">
        <p>
          A school day creates the same handful of moments where accountability matters: a pupil arrives, a register
          has to be right, a parent needs telling, somebody leaves early, and at the end of it all a head teacher needs
          a record that holds up. Smart Vizion joins those moments to one pupil record. Seven capabilities, which a
          school can start with one of and add to without replacing anything.
        </p>
      </PageHeader>

      <Capability
        id="security"
        tone="light"
        illustration="detect"
        title="Facial recognition at the entry point"
        intro="A weatherproof camera at the gate matches an arriving face against the school’s own enrolled records, and a unit on site does the matching. Face data is matched and encrypted on the school’s own hardware: no photos leave the school. A pupil walks up to the gate as normal, with no card and no tag."
        items={[
          { title: "Tuned to your gate, not to a default", text: "Match, low and track similarity thresholds, minimum face size and track timeout are all adjustable, so a school sets how strictly a face must match before it counts as recognised." },
          { title: "Day pupils and boarders are different problems", text: "For a day pupil a gate scan is routine arrival or departure. For a boarder, a scan on an ordinary school day means something unusual is happening, so the system checks it against an approved pass before it shows the guard a decision." },
          { title: "When a face is not recognised", text: "Nobody is turned away automatically. The screen flags it and a person on the gate checks, the way they always have." },
          { title: "It can use the cameras you already have", text: "As well as cameras we supply, the system reads an existing NVR or DVR over the network, discovers its channels and assigns them to slots, or takes a single RTSP stream directly. Up to twenty camera positions run at once. A school with CCTV already at the gate is not necessarily buying it twice." },
        ]}
      />

      <Capability
        id="attendance"
        tone="cream"
        illustration="attendance"
        title="A register that fills itself"
        intro="Arrival is logged the moment a face is matched, and the class teacher opens a register that is already correct. Nobody reconstructs a morning from memory at break, and nobody transcribes a paper sheet afterwards."
        items={[
          { title: "Absence is noticed, not discovered", text: "If a pupil has not scanned by the school’s cutoff, an alert fires on its own. The cutoff is set per school; 8:30am is a common one rather than a fixed rule." },
          { title: "Late is not the same as absent", text: "A pupil who arrives after the cutoff raises a late-arrival alert with its own tone, not an absence alert that then has to be corrected." },
          { title: "What a parent can see and keep", text: "A monthly calendar reading green for present, red for absent and grey for holidays and weekends, a weekly summary, and a term attendance PDF they can download. Parents use that PDF with employers who reimburse school fees." },
        ]}
      />

      <Capability
        id="communication"
        tone="dark"
        title="Parents told while it still matters"
        image="/images/phone.jpg"
        imageAlt="A parent's phone showing a check-in notification"
        intro="A push notification carries the pupil’s photo, so a parent can see at a glance that it is their child and not a mismatch. Push is the primary channel because it costs nothing per message. When it goes out is the school’s decision, not ours: the delay between the gate scan and the message is a setting, anywhere from immediate to five hours, and it ships at ten minutes."
        items={[
          { title: "The delay is a dial, and you hold it", text: "Ten minutes is the default, not a limit. A school that wants the alert to land before the pupil has reached the classroom sets it to zero; one that would rather absorb a pupil stepping back out to a waiting parent leaves it longer. The same screen sets the end-of-day sweep for pupils who never checked in, and can restrict it to weekdays." },
          { title: "SMS is a fallback, and it is not free", text: "Where a push goes unopened an SMS follows, so a parent without a smartphone is still reached. SMS carries a real per-message cost and is priced as an add-on rather than folded into every plan." },
          { title: "A conversation, not just alerts", text: "A parent can message the school directly and get a reply, and can report an absence from the app before the automatic alert fires, which stops the office ringing round unnecessarily." },
          { title: "School-wide announcements", text: "Holidays, events and reminders go out to every parent from the dashboard, separate from the alert stream so notices do not get lost among arrivals." },
        ]}
      />

      <Capability
        id="boarding"
        tone="light"
        illustration="boarding"
        title="Boarding schools, where the stakes are higher"
        intro="A boarding parent is often far from the school and depends on the system entirely. So a boarder’s record is not a daily arrival event but a running campus state, and leaving campus is something that has to be authorised before it happens."
        items={[
          { title: "Evening check-in, and the alert when it does not come", text: "A scan at the dormitory entrance confirms a boarder is in for the night. If a check-in has not happened by the school’s cutoff, the parent and the matron are alerted at the same time." },
          { title: "Exeats and gate passes replace the paper letter", text: "Weekend and holiday exeats are requested and approved digitally, and unplanned exits get a gate pass with a reason and either a one-way or a return-by time. The gate checks for the approval automatically before the guard sees a decision." },
          { title: "Opening and closing day", text: "The days when a school most needs to know where everyone is. Each scan marks a boarder as reported or departed, and the office watches a live count rather than a clipboard." },
        ]}
      />

      <Capability
        id="guard-app"
        tone="cream"
        title="The guard holds one screen, not three books"
        image="/images/guard.jpg"
        imageAlt="A school security guard holding the gate tablet"
        intro="No register, no visitor book, no paper pass list. A tablet at the gate tells the person on duty what to do in front of them, whether that is a routine arrival, an approved pass, an authorised pickup or a face the system does not know."
        items={[
          { title: "The override is deliberately awkward", text: "For the case where a school has authorised something verbally but has not created the pass yet. It is tied to the individual on duty rather than to a shared code, it has to be explained at the time, and the entry stands permanently afterwards." },
          { title: "Unknown faces get logged, not waved through", text: "A visitor is recorded on the way in and on the way out, which is the paper visitor book replaced rather than digitised alongside." },
          { title: "It keeps working when the line drops", text: "Recognition runs on the school’s own network, so the gate carries on through an outage. Records sync once the connection returns." },
        ]}
      />

      <Capability
        id="dashboard"
        tone="dark"
        illustration="records"
        title="One dashboard instead of a shelf of files"
        intro="The desktop application the school actually runs on. Live camera views with recognition overlays, the gate devices and guard accounts, and a searchable record of pupils, teachers, classes and timetables in one place rather than in separate books."
        items={[
          { title: "Staff see their own job, not everything", text: "Roles decide what each account can open. Anything outside a role is hidden or refused, so a bursar, a class teacher and a head teacher are not all sharing one login." },
          { title: "Records that answer a question in one search", text: "Pupils, teachers, classes, subjects and timetables, filterable, with bulk import from a spreadsheet so a school is not typing a roll in by hand." },
          { title: "Messaging built in", text: "Staff group threads, one-to-one conversations with parents, and school-wide announcements, from the same place the records live." },
        ]}
      />

      <Capability
        id="report-cards"
        tone="light"
        illustration="report-cards"
        title="Report cards, published in one action"
        intro="A class’s assessment marks sit against the school’s own grading scale, which can be set per level or overridden for a single class. When a term’s reports are ready they publish to the parent portal in one action."
        items={[
          { title: "Your grading scale, not ours", text: "Bands are defined by percentage range, letter and grade point, set as a default for an academic level and overridden per class where a school needs it." },
          { title: "Parents see it where they already are", text: "Publishing notifies parents in the portal they already use for attendance, read-only, so there is no second login to explain." },
          { title: "Still prints", text: "Exports to Excel and to PDF for print, because a report card often still has to leave the building on paper." },
        ]}
      />

      <Section tone="dark" className="border-t border-teal-line">
        <H2 tone="dark" className="measure-heading">We are early, and we would rather say so.</H2>
        <Lede tone="dark" className="mt-6 measure-body">
          This is the part of the page where most suppliers would show you a wall of school badges. We are not going to
          invent one. Here is where DYCH actually is, what the first deployment involved, and what we will publish the
          moment a school has reported it.
        </Lede>

        <div className="mt-14 rounded-[14px] bg-cream p-7 text-ink sm:p-10">
          <h3 className="type-item measure-body">
            The first deployment: one school, one gate, and a register that stopped eating the first lesson.
          </h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <p className="leading-relaxed text-ink-body">
              The problem was the ordinary one. A manual register can take up to twenty minutes of class time a day, and
              at the end of it the school still cannot prove who collected a child. Cameras at the entry point verify the
              pupil, the register writes itself, and the parent hears about it before they have thought to ring the
              office.
            </p>
            <p className="leading-relaxed text-ink-body">
              What went in: a weatherproof gate camera with on-device matching, the admin dashboard, and parent alerts.
              Installation and staff training were part of it, not a separate engagement.
            </p>
          </div>
          <dl className="mt-8 grid gap-4 border-t border-ink/15 pt-6 sm:grid-cols-3">
            {["Students enrolled", "Time saved daily", "Attendance accuracy"].map((m) => (
              <div key={m}>
                <dd className="text-3xl font-semibold text-ink-sub">—</dd>
                <dt className="mt-1 font-semibold">{m}</dt>
                <dd className="text-sm text-ink-sub">Not yet reported</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-[15px] leading-relaxed text-ink-sub">
            These are blank because the school has not reported them yet. When it does, the figures will appear here
            with the school’s name on them and its permission behind them. We would rather show you nothing than show
            you a number we made up.
          </p>
        </div>
      </Section>

      <Section tone="light">
        <H2 className="measure-heading">The kind of school this fits.</H2>
        <Lede className="mt-6 measure-body">
          Not a list of names you would have to take on trust. What the system actually copes with, so you can tell in a
          minute whether it is worth an hour of your time.
        </Lede>
        <div className="mt-12">
          <Details cols={3} items={fits} />
        </div>
      </Section>

      <Section tone="cream">
        <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <H2 className="measure-heading">What being early actually gets you.</H2>
          <div className="space-y-4">
            <Lede>
              A short list of schools means the people who built this are the people who install it, and they have time
              to do it properly. You get their attention at the gate, a say in what gets built next term, and a reference
              school you can ring rather than a case study you cannot verify.
            </Lede>
            <Lede>
              It also means we will tell you if your school is not a good fit. We can afford to, and we would rather not
              learn it after the cameras are up.
            </Lede>
            <Link href="/contact" className="link inline-block text-ink">
              Talk to the people who would install it
            </Link>
          </div>
        </div>
      </Section>

      <Cta title="Be the school whose name goes on this page.">
        We have capacity for a small number of installations this term, which means the people who built the system do
        the work themselves. A site visit costs nothing and ends with a written scope.
      </Cta>
    </>
  );
}
