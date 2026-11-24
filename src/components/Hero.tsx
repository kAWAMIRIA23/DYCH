import Image from "next/image";

const strip = [
  { label: "Security", note: "Every entry point watched", href: "#solutions" },
  { label: "Attendance", note: "The register fills itself in", href: "#solutions" },
  { label: "Parents", note: "Told the minute their child arrives", href: "#solutions" },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-teal text-cream">
      {/* The arrival photo, printed in the two brand inks: greyscale lifted
          through screen onto teal, then shaded so the copy stays readable. */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <Image
          src="/images/arrival.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_40%] opacity-55 mix-blend-screen grayscale contrast-110"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(4_44_51/0.75)_0%,rgb(4_44_51/0.3)_30%,rgb(4_44_51/0.94)_62%)]" />
      </div>

      <div className="mx-auto mt-auto grid w-full max-w-7xl gap-10 px-4 pb-12 pt-36 sm:px-6 md:grid-cols-[1.4fr_1fr] md:items-end lg:px-16 lg:pb-14">
        <h1 className="text-[clamp(3.2rem,8.4vw,8.5rem)] font-black text-apricot leading-[0.88] tracking-[-0.045em]">
          Safe in.
          <br />
          Safe out.
        </h1>
        <div>
          <p className="max-w-[40ch] text-lg leading-relaxed text-cream-soft sm:text-[19px]">
            Smart Vizion watches your gate so your staff don&apos;t have to. It knows
            every student, records when they arrive and leave, and tells parents straight away.
          </p>
          <div className="mt-7 flex flex-wrap gap-3.5">
            <a
              href="#contact"
              className="rounded bg-cream px-6 py-4 font-extrabold text-teal hover:bg-white"
            >
              Book a demo
            </a>
            <a
              href="#how-it-works"
              className="rounded border-[1.5px] border-cream px-6 py-4 font-extrabold text-cream hover:bg-cream/10"
            >
              See how it works
            </a>
          </div>
        </div>
      </div>

      <ul className="grid border-t border-cream/30 md:grid-cols-3">
        {strip.map((s, i) => (
          <li key={s.label} className={i > 0 ? "border-t border-cream/30 md:border-l md:border-t-0" : ""}>
            <a
              href={s.href}
              className="group flex items-baseline justify-between gap-4 px-4 py-5 hover:bg-cream sm:px-6 lg:px-16"
            >
              <span className="font-semibold group-hover:text-teal">{s.label}</span>
              <span className="text-sm text-cream-soft group-hover:text-ink-sub">{s.note}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
