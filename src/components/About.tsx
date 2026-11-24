import Image from "next/image";

export function About() {
  return (
    <section id="about" className="scroll-mt-18 bg-paper py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-[1fr_1fr] md:items-center lg:gap-20 lg:px-16">
        <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-sm md:max-w-none">
          <Image
            src="/images/gate.jpg"
            alt="Students walking through a school gate at sunrise, past an entry camera"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="max-w-[16ch] text-[clamp(2.2rem,4.2vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-ink">
            Built in Kampala for schools across Africa.
          </h2>
          <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-ink-body">
            DYCH Technologies builds automation and system management for organisations that
            need to run more efficiently, securely and reliably. Smart School Systems is that
            work applied to the school day: the gate, the register, the parents and the fees.
          </p>
          <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-ink-body">
            It is designed to scale from a single primary school to a large secondary campus,
            and to keep working where the internet does not.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-x-8 border-t border-paper-line pt-6">
            <div>
              <dt className="text-sm text-ink-sub">Made for</dt>
              <dd className="mt-1 font-semibold text-ink">Primary and secondary schools</dd>
            </div>
            <div>
              <dt className="text-sm text-ink-sub">Based in</dt>
              <dd className="mt-1 font-semibold text-ink">Kampala, Uganda</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
