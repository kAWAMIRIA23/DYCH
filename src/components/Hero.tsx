import Image from "next/image";
import Link from "next/link";

/**
 * The home page opens on one real moment: 07:42, a pupil through the gate and
 * a parent who already knows. The clock is the memorable element; everything
 * around it stays quiet.
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-teal pb-20 pt-32 text-cream sm:pb-28 sm:pt-40">
      <div
        aria-hidden="true"
        className="absolute -right-64 -top-72 -z-10 aspect-square w-[900px] rounded-full bg-[radial-gradient(circle,rgb(234_166_82/0.55)_0%,rgb(234_166_82/0.12)_45%,transparent_68%)]"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-16">
        <div className="min-w-0">
          <p
            aria-hidden="true"
            className="font-display text-[clamp(5rem,12vw,11rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-apricot tabular-nums"
          >
            07:42
          </p>
          <h1 className="mt-5 measure-heading text-[clamp(2.1rem,4.4vw,3.75rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
            <span className="sr-only">DYCH Technologies. At 07:42, </span>
            Sarah walked through the gate. Her mother already knows.
          </h1>
          <p className="mt-6 measure-body text-lg leading-relaxed text-mist">
            Smart Vizion recognises each pupil at the entrance, writes the register and tells the parent, before the
            first lesson starts.
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <Link href="/contact" className="btn border-white bg-apricot text-teal hover:bg-cream">
              Book a Demo
            </Link>
            <Link href="/how-it-works" className="btn border-mist text-cream hover:border-apricot hover:text-apricot">
              See How It Works
            </Link>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[480px]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[4px]">
            <Image
              src="/images/parent-alert.jpg"
              alt="A parent at home smiling at her phone as a DYCH Parent App notification says her child has checked in"
              fill
              priority
              quality={90}
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover object-[42%_40%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
