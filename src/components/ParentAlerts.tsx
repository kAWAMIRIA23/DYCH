import Image from "next/image";

/* What actually happens, in order: a real sequence, so it is numbered. */
const steps = [
  { title: "At the gate", text: "A camera recognises the student as they walk in." },
  { title: "In the register", text: "They are marked present with the exact time." },
  { title: "On the phone", text: "The parent gets a message straight away." },
];

export function ParentAlerts() {
  return (
    <section id="parents" className="scroll-mt-18 overflow-hidden bg-violet-deep py-20 text-lilac-ink sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center lg:gap-20 lg:px-16">
        <div className="min-w-0">
          <h2 className="max-w-[14ch] text-[clamp(2.6rem,5.6vw,5.4rem)] font-extrabold leading-none tracking-[-0.035em] text-apricot">
            Parents know the minute their child is in.
          </h2>
          <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-lilac sm:text-[19px]">
            Smart Vizion recognises students at the school gate, marks them present and sends a
            message home. No paper register, no phone calls to the office.
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <a
              href="#contact"
              className="rounded-xl bg-amber px-6 py-4 font-extrabold text-violet-deep hover:bg-apricot"
            >
              Book a school demo
            </a>
            <a
              href="#how-it-works"
              className="rounded-xl border-[1.5px] border-violet-line px-6 py-4 font-extrabold hover:border-amber"
            >
              How it works
            </a>
          </div>

          <ol className="mt-12 grid border-t border-violet-line sm:grid-cols-3">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className={`py-5 sm:pr-5 ${
                  i > 0 ? "border-t border-violet-line sm:border-l sm:border-t-0 sm:pl-5" : ""
                }`}
              >
                <p className="font-extrabold">
                  <span className="mr-1.5 tabular-nums text-amber">{i + 1}</span>
                  {s.title}
                </p>
                <p className="mt-1.5 text-[15px] leading-relaxed text-lilac">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative mx-auto w-full max-w-[460px]">
          <div className="absolute inset-x-0 inset-y-[8%] rounded-full bg-violet" aria-hidden="true" />
          <div className="relative mx-auto aspect-[56/90] w-2/3 overflow-hidden rounded-[28px] shadow-[0_30px_60px_-28px_rgb(0_0_0/0.6)]">
            <Image
              src="/images/phone.jpg"
              alt="A parent's phone showing a notification that Sarah checked in at 07:42"
              fill
              sizes="(min-width: 768px) 300px, 66vw"
              className="object-cover object-[50%_30%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
