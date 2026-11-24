"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";

const EMAIL = "xristeck@gmail.com";
const PHONES = ["+256 767 870035", "+256 788 195067"];

const field =
  "w-full rounded-lg border border-teal-line bg-teal px-4 py-3 text-cream placeholder:text-mist/50 focus:border-amber focus:outline-none";

export function Footer() {
  const [opened, setOpened] = useState(false);

  // There is no form backend yet, so the message is handed to the visitor's
  // own email app, addressed to the team and already filled in.
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Demo request from ${data.get("school") || data.get("name")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `School: ${data.get("school")}`,
      `Email: ${data.get("email")}`,
      "",
      `${data.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  return (
    <footer id="contact" className="scroll-mt-18 bg-ground text-cream">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:px-6 sm:py-28 md:grid-cols-[1fr_1.1fr] lg:gap-24 lg:px-16">
        <div>
          <h2 className="max-w-[14ch] text-[clamp(2.2rem,4.2vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-cream">
            See it working at your gate.
          </h2>
          <p className="mt-6 max-w-[42ch] text-lg leading-relaxed text-mist">
            Tell us about your school and we will arrange a demonstration on site or online.
          </p>

          <dl className="mt-12 space-y-7">
            <div>
              <dt className="text-sm text-mist">Call us</dt>
              {PHONES.map((p) => (
                <dd key={p}>
                  <a href={`tel:${p.replace(/\s/g, "")}`} className="text-xl font-semibold hover:text-apricot">
                    {p}
                  </a>
                </dd>
              ))}
            </div>
            <div>
              <dt className="text-sm text-mist">Email us</dt>
              <dd>
                <a href={`mailto:${EMAIL}`} className="text-xl font-semibold hover:text-apricot">
                  {EMAIL}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-mist">Visit us</dt>
              <dd className="text-xl font-semibold">Kampala, Uganda</dd>
            </div>
          </dl>
        </div>

        <form onSubmit={onSubmit} className="space-y-5 rounded-[14px] border border-teal-line bg-teal-raised p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-mist">
                Your name
              </label>
              <input id="name" name="name" required autoComplete="name" className={field} />
            </div>
            <div>
              <label htmlFor="school" className="mb-1.5 block text-sm font-medium text-mist">
                School
              </label>
              <input id="school" name="school" required autoComplete="organization" className={field} />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-mist">
              Email
            </label>
            <input id="email" name="email" type="email" required autoComplete="email" className={field} />
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-mist">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className={field}
              placeholder="Number of students, number of gates, anything else we should know"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-apricot px-6 py-4 font-extrabold text-teal hover:bg-cream"
          >
            Request a demo
          </button>
          <p className="text-sm text-mist" aria-live="polite">
            {opened
              ? `Your email app should now be open with the message ready. If it did not open, write to ${EMAIL}.`
              : "This opens your email app with the message filled in."}
          </p>
        </form>
      </div>

      <div className="border-t border-teal-line">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-6 text-sm text-mist sm:px-6 lg:px-16">
          <span className="flex items-center gap-2.5">
            <Image src="/images/dych-icon.png" alt="" width={24} height={24} className="rounded-full" />
            © {new Date().getFullYear()} DYCH Technologies
          </span>
          <span>Smart Vizion</span>
        </div>
      </div>
    </footer>
  );
}
