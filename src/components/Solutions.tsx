import Image from "next/image";
import { ShieldCheck, ClipboardCheck, MessageSquareText, Wallet } from "lucide-react";

const solutions = [
  {
    title: "Student security",
    description:
      "Biometric and digital identification at every entry point, so you know who is inside the school and who is not.",
    icon: ShieldCheck,
  },
  {
    title: "Accurate attendance",
    description:
      "Students are marked in and out as they pass the gate. No paper registers, no copying errors, no missing pages.",
    icon: ClipboardCheck,
  },
  {
    title: "Parent communication",
    description:
      "Parents get an automatic message when their child arrives and leaves, and a daily attendance summary.",
    icon: MessageSquareText,
  },
  {
    title: "School fees and finance",
    description:
      "Each student profile is linked to their fee account, with automatic reminders to parents and clear records for the bursar.",
    icon: Wallet,
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="scroll-mt-18 bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="max-w-[14ch] text-[clamp(2.2rem,4.2vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-ink">
              One system for the whole school day.
            </h2>
            <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-ink-body">
              Four jobs that usually take paper, phone calls and guesswork, handled from the
              moment a student reaches the gate.
            </p>
            <div className="relative mt-10 hidden aspect-[4/3] overflow-hidden rounded-[14px] border-[6px] border-teal lg:block">
              <Image
                src="/images/guard.jpg"
                alt="A school security guard checking the gate cameras on a tablet"
                fill
                sizes="40vw"
                className="object-cover object-[60%_40%]"
              />
            </div>
          </div>

          <ul className="border-t border-ink/20">
            {solutions.map((s) => (
              <li key={s.title} className="grid grid-cols-[auto_1fr] gap-x-5 border-b border-ink/20 py-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber" aria-hidden="true">
                  <s.icon className="h-5 w-5 text-teal" />
                </span>
                <div>
                  <h3 className="text-2xl font-extrabold tracking-tight text-ink">{s.title}</h3>
                  <p className="mt-2 max-w-[52ch] text-[17px] leading-relaxed text-ink-body">
                    {s.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
