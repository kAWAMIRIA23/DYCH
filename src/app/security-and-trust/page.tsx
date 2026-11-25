import type { Metadata } from "next";
import { Cta, Details, H2, Illustration, Lede, PageHeader, Section, SectionIntro } from "@/components/ui";

export const metadata: Metadata = { title: "Security & trust" };

const enrolment = [
  { art: "detect", title: "A face is found", text: "The camera takes a frame and locates the face in it. At this point nothing has been identified - the system knows only that a face is there." },
  { art: "extract", title: "Its geometry is measured", text: "The distances and angles between landmarks - the corners of the eyes, the nose, the mouth - are measured. The measurements are what matter; the picture they came from is not kept." },
  { art: "template", title: "Numbers are what is stored", text: "Those measurements become the template: a string of numbers held on the unit at your gate. It can be compared against a face at the gate. It cannot be turned back into one." },
];

const questions = [
  "Where is the matching performed, and what happens to recognition when our connection is down?",
  "What exactly is stored for each pupil, and can you show us one record end to end?",
  "How do we withdraw a pupil from recognition, and what does that pupil’s day look like afterwards?",
  "If we leave, what do we get back, in what format, and how do you prove your copies are gone?",
  "Who at your company can see our data, under what circumstances, and where is that recorded?",
  "Does the system ever record a face belonging to someone who is not enrolled, and if so, who switched that on and when does it expire?",
];

export default function SecurityPage() {
  return (
    <>
      <PageHeader title="Children’s biometric data, handled carefully.">
        <p>
          Recognition means holding data about people, and about children in particular, so how it is captured, stored,
          kept apart from other customers, exported and destroyed matters more than any feature on this site. The short
          version: matching happens on your own hardware, and no photos leave your site. This page is written for
          schools because that is the strictest case; every commitment on it applies to staff and visitor data at a
          business too.
        </p>
      </PageHeader>

      <Section tone="light">
        <SectionIntro title="Matched on your hardware. No photos leave the school.">
          <Lede>
            This is the commitment the rest of the page rests on, and it is the one DYCH Technologies states plainly in
            its own materials: all face data is matched and encrypted on-device, and no photos ever leave the school.
            Recognition happens on a unit on your site, not on a server somewhere else, so there is no upload of
            children’s faces to anywhere.
          </Lede>
        </SectionIntro>
        <div className="mt-14">
          <Details
            items={[
              { title: "Enrolment does not keep a photograph", text: "It produces a mathematical template used for matching, and the template is what the system holds. It exists to recognise a pupil at an entry point and to mark a register, and it is not put to any other purpose." },
              { title: "What is actually held", text: "A matching template derived from the face, the pupil record the school already keeps, and the entry and exit events that matching produces. Face images are stored in a folder the school chooses on its own machine." },
              { title: "What it is never used for", text: "It is not sold, not shared with advertisers, and not used to build or improve anything for another customer." },
              { title: "Why this also makes the gate more reliable", text: "Because matching does not depend on a round trip to a distant server, the gate keeps reading through an internet outage. The privacy decision and the reliability behaviour are the same decision." },
            ]}
          />
        </div>
      </Section>

      <Section tone="dark">
        <SectionIntro tone="dark" title="What enrolment produces, and what it does not.">
          <Lede tone="dark">The commitment above rests on a distinction worth seeing rather than taking on trust.</Lede>
        </SectionIntro>
        <ol className="mt-14 grid gap-4 md:grid-cols-3">
          {enrolment.map((s, i) => (
            <li key={s.title} className="rounded-[14px] bg-cream p-7 text-ink">
              <Illustration name={s.art} className="mx-auto mb-6 max-w-[240px]" />
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber font-semibold text-teal">{i + 1}</span>
              <h3 className="type-item mt-5">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-body">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="cream">
        <SectionIntro title="Consent and control">
          <Lede>
            Enrolment is arranged between the school and the guardian, not between DYCH Technologies and the family. A
            school should hold recorded consent for every pupil before a template is created, and should be able to act
            on a withdrawal the same day it arrives.
          </Lede>
        </SectionIntro>
        <div className="mt-14">
          <Details
            cols={3}
            items={[
              { title: "Consent comes first", text: "A pupil is enrolled after the school records the guardian’s agreement, not before it." },
              { title: "Withdrawing it costs the pupil nothing", text: "The school deletes the template from the console, and attendance for that pupil continues by card or by the class teacher. No child is shut out of school for being withdrawn from recognition." },
              { title: "Who can enrol", text: "Named staff accounts only, and every enrolment is written to a log the school can read. That log is filterable and exports to a spreadsheet, so it is evidence rather than a screen someone has to sit and watch." },
              { title: "A parent account sees nothing until you say so", text: "Parents register themselves, and then wait. Until an administrator approves the account it can sign in and see no pupil data at all - not their own child's. Approval is a deliberate act by a named member of staff, not something that happens because a form was filled in correctly." },
              { title: "Sessions do not stay open forever", text: "An idle dashboard signs itself out on a timeout the school sets, and no session survives past eight hours whatever that timeout says. Opening the account and permissions screen asks for the password again even mid-session." },
            ]}
          />
        </div>
      </Section>

      <Section tone="light">
        <SectionIntro title="Faces the system does not know">
          <Lede>
            A recognition system has to do something when it sees somebody it has never seen. Ours can be told to
            remember them, and that setting is off unless a school turns it on deliberately.
          </Lede>
        </SectionIntro>
        <div className="mt-14">
          <Details
            items={[
              { title: "What the setting actually does", text: "With visitor auto-registration on, a face that is unrecognised and stays in view long enough is saved as a numbered placeholder, so the same person is recognised as the same person on a return visit. No name is attached. A member of staff can give it one later, or leave it." },
              { title: "What it deliberately does not do", text: "It does not mark attendance for that person, and it does not notify any parent. It is a record that somebody came back, not an accusation and not a register entry." },
              { title: "The school sets the thresholds, and cannot forget it is on", text: "How similar a return sighting must be, how long a face must be in view before it is kept, and how many days it is kept for are all yours to set. While the feature is enabled a warning banner stays visible on every gate screen, which is deliberate: a setting this consequential should not be quietly on." },
              { title: "Our recommendation", text: "Leave it off unless there is a specific reason. A school that wants to know about repeat unknown visitors at the gate has a real use for it; a school that just wants attendance does not, and should not be holding face records for people who are not part of the school." },
            ]}
          />
        </div>
      </Section>

      <Section tone="dark">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <H2 tone="dark">Isolation between schools</H2>
            <Lede tone="dark" className="mt-6">
              One school’s records are not visible to another. A deployment is scoped to the school that owns it, and
              there is no shared roll across customers that anyone could query.
            </Lede>
            <div className="mt-10">
              <Details
                tone="dark"
                cols={1}
                items={[
                  { title: "No pooled register", text: "Templates and pupil records belong to one school. They are not combined into a wider index." },
                  { title: "Accounts are scoped", text: "A staff account reaches its own school and nothing beyond it." },
                  { title: "Support access is visible", text: "Where our staff need access to diagnose a fault, it is requested from the school and recorded, rather than standing open." },
                ]}
              />
            </div>
          </div>
          <div>
            <H2 tone="dark">Export and deletion</H2>
            <Lede tone="dark" className="mt-6">
              The records are the school’s, not ours. A school can take them out in a form it can actually use, and can
              require that our copies be destroyed.
            </Lede>
            <div className="mt-10">
              <Details
                tone="dark"
                cols={1}
                items={[
                  { title: "Taking the records out", text: "Attendance, entry logs and gate records export in a readable format, without a request to us and without a charge." },
                  { title: "Ending a contract", text: "The records belong to the school and stay with the school. On request we export everything in a readable format, hand it over, and uninstall the system from site. We then remove what was held on our side and confirm in writing what went and when." },
                  { title: "A single pupil leaving", text: "A leaver’s template can be destroyed while the attendance record the school is required to keep stays intact." },
                ]}
              />
            </div>
          </div>
        </div>
      </Section>

      <Section tone="cream">
        <SectionIntro title="Uptime and offline resilience">
          <Lede>
            A system that stops when the connection does is worse than paper, because staff stop trusting it. The gate
            keeps reading and the register keeps writing through an outage.
          </Lede>
        </SectionIntro>
        <div className="mt-14">
          <Details
            cols={3}
            items={[
              { title: "Local first", text: "Entry events are written on site as they happen, not queued in the hope of a connection." },
              { title: "Catching up", text: "When connectivity returns, records synchronise on their own. Nobody re-keys a morning." },
              { title: "Power", text: "Battery backup at the entry point, so a cut does not leave a gate that cannot tell anyone who came through it." },
            ]}
          />
        </div>
      </Section>

      <Section tone="light">
        <SectionIntro title="Questions worth putting to us, and to anyone else.">
          <Lede>
            If a supplier cannot answer these plainly, that is worth knowing before a single camera goes up. Ask us at a
            site assessment and hold us to the answers.
          </Lede>
        </SectionIntro>
        <ol className="mt-14 border-t border-ink/15">
          {questions.map((q, i) => (
            <li key={q} className="grid grid-cols-[3.5rem_1fr] items-baseline border-b border-ink/15 py-6">
              <span className="type-item tabular-nums text-ink-sub">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-lg font-semibold leading-snug text-ink">{q}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Cta title="Bring your data protection questions to the site assessment.">
        We would rather answer them in front of your board than after an installation. A site assessment costs nothing
        and ends with a written scope.
      </Cta>
    </>
  );
}
