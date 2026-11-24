const steps = [
  {
    title: "At the gate",
    description: "A camera and biometric reader identify the student at the entry point.",
  },
  {
    title: "In the register",
    description: "Attendance is marked with the exact time, by RFID or biometrics.",
  },
  {
    title: "To the parent",
    description: "An SMS or app message goes home the same minute.",
  },
  {
    title: "On the dashboard",
    description: "Staff see security logs and attendance trends for every class and day.",
  },
];

export function Integration() {
  return (
    <section id="how-it-works" className="scroll-mt-18 bg-teal py-20 text-cream sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
        <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-end">
          <h2 className="max-w-[16ch] text-[clamp(2.2rem,4.2vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.03em]">
            From the gate to the parent&apos;s phone, automatically.
          </h2>
          <p className="max-w-[44ch] text-lg leading-relaxed text-cream-soft">
            Each arrival moves through the same four steps automatically. Nobody on your staff
            has to do anything.
          </p>
        </div>

        {/* A real sequence, so the steps are numbered */}
        <ol className="mt-16 grid gap-px overflow-hidden rounded-sm bg-teal-line sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="bg-teal p-7">
              <span className="block text-sm font-semibold tabular-nums text-amber">Step {i + 1}</span>
              <h3 className="mt-6 text-xl font-extrabold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-cream-soft">{s.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
