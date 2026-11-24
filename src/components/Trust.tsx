import Image from "next/image";

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
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-[1.2fr_1fr] md:items-center lg:gap-20 lg:px-16">
        <div>
          <h2 className="max-w-[15ch] text-[clamp(2.2rem,4.2vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-ink">
            Made for how African schools really run.
          </h2>
          <p className="mt-6 max-w-[50ch] text-lg leading-relaxed text-ink-body">
            Patchy power, slow networks and parents on basic phones are the starting point,
            not an afterthought.
          </p>

          <dl className="mt-10 grid gap-8 sm:grid-cols-3">
            {points.map((p) => (
              <div key={p.title} className="border-t-2 border-ink pt-4">
                <dt className="font-extrabold text-ink">{p.title}</dt>
                <dd className="mt-2 text-[15px] leading-relaxed text-ink-body">{p.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-sm bg-cream">
          <Image
            src="/images/phone.jpg"
            alt="A parent's phone showing a notification that their child checked in at 07:42"
            fill
            sizes="(min-width: 768px) 30vw, 90vw"
            className="object-cover object-[50%_30%]"
          />
        </div>
      </div>
    </section>
  );
}
