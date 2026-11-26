import Image from "next/image";
import Link from "next/link";
import { INDUSTRIES } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-teal text-cream">
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
        <div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-teal)_75%,transparent)_0%,color-mix(in_srgb,var(--color-teal)_30%,transparent)_30%,color-mix(in_srgb,var(--color-teal)_94%,transparent)_62%)]" />
      </div>

      <div className="mx-auto mt-auto grid w-full max-w-7xl gap-10 px-4 pb-12 pt-36 sm:px-6 md:grid-cols-[1.4fr_1fr] md:items-end lg:px-16 lg:pb-14">
        <h1 className="text-[clamp(2.6rem,5.4vw,5.4rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-apricot">
          <span className="sr-only">DYCH Technologies. </span>
          Know who is on
          <br />
          your premises
          <br />
          in real time.
        </h1>
        <div>
          <p className="measure-body text-lg leading-relaxed text-cream-soft">
            Cards, PINs and paper registers are easy to share, forget or fake. Our system uses the face as the
            credential: cameras recognise enrolled people as they walk in, mark presence automatically, and flag
            anyone the system does not know.
          </p>
          <div className="mt-7 flex flex-wrap gap-3.5">
            <Link href="/contact" className="btn border-white bg-cream text-teal hover:bg-white">
              Book a Demo
            </Link>
            <Link
              href="/how-it-works"
              className="btn border-cream text-cream hover:bg-cream/10"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </div>

      <ul className="grid border-t border-cream/30 md:grid-cols-3">
        {INDUSTRIES.map((s, i) => (
          <li key={s.href} className={i > 0 ? "border-t border-cream/30 md:border-l md:border-t-0" : ""}>
            <Link
              href={s.href}
              className="group flex items-baseline justify-between gap-4 px-4 py-5 hover:bg-cream sm:px-6 lg:px-16"
            >
              <span className="font-semibold group-hover:text-teal">{s.label}</span>
              <span className="text-right text-sm text-cream-soft group-hover:text-ink-sub">{s.note}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
