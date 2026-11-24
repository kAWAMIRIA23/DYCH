const points = [
  {
    title: "Works offline",
    description:
      "Attendance is recorded at the gate even when the connection drops, and syncs once it is back.",
  },
  {
    title: "SMS and WhatsApp",
    description:
      "Parents are reached on the phones they already use. No smartphone or new app is needed.",
  },
  {
    title: "Low bandwidth",
    description: "Built for the networks schools actually have, not the ones in brochures.",
  },
];

export function Trust() {
  return (
    <section id="why-dych" className="scroll-mt-18 bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
        <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-end">
          <h2 className="max-w-[15ch] text-[clamp(2.2rem,4.2vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-ink">
            Made for how African schools really run.
          </h2>
          <p className="max-w-[46ch] text-lg leading-relaxed text-ink-body">
            Patchy power, slow networks and parents on basic phones are the starting point,
            not an afterthought.
          </p>
        </div>

        <dl className="mt-14 grid gap-10 sm:grid-cols-3">
          {points.map((p) => (
            <div key={p.title} className="border-t-4 border-amber pt-5">
              <dt className="text-xl font-extrabold text-ink">{p.title}</dt>
              <dd className="mt-2 max-w-[36ch] leading-relaxed text-ink-body">{p.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
