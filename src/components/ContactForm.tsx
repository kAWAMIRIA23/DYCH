"use client";

import { useState, type FormEvent } from "react";
import { CONTACT } from "@/lib/site";

const field =
  "w-full rounded-lg border border-ink/25 bg-paper px-4 py-3 text-ink placeholder:text-ink-sub focus:border-teal focus:outline-none";
const label = "mb-1.5 block text-sm font-semibold text-ink";

export function ContactForm() {
  const [opened, setOpened] = useState(false);

  // There is no form backend, so the message is handed to the visitor's own
  // email app, addressed to the team and already filled in.
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    if (d.get("website")) return; // left empty by people; filled by bots
    const subject = `Enquiry from ${d.get("organisation") || d.get("name")}`;
    const body = [
      `Name: ${d.get("name")}`,
      `School or organisation: ${d.get("organisation")}`,
      `Phone or WhatsApp: ${d.get("phone")}`,
      `Work email: ${d.get("email") || "-"}`,
      `Product: ${d.get("product") || "-"}`,
      "",
      `${d.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-[14px] bg-cream p-6 text-ink shadow-[0_30px_60px_-30px_rgb(0_0_0/0.6)] sm:p-8">
      <div>
        <h2 className="type-item">Or send us the details</h2>
        <p className="mt-2 leading-relaxed text-ink-body">
          The more you can tell us about the site, the more useful the first conversation is.
        </p>
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Your name</label>
          <input id="name" name="name" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="organisation" className={label}>School or organisation</label>
          <input id="organisation" name="organisation" required autoComplete="organization" className={field} />
        </div>
        <div>
          <label htmlFor="phone" className={label}>Phone or WhatsApp</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className={field} />
        </div>
        <div>
          <label htmlFor="email" className={label}>
            Work email <span className="font-normal text-ink-sub">(optional)</span>
          </label>
          <input id="email" name="email" type="email" autoComplete="email" className={field} />
        </div>
      </div>

      <div>
        <label htmlFor="product" className={label}>
          Which product is this about? <span className="font-normal text-ink-sub">(optional)</span>
        </label>
        <select id="product" name="product" defaultValue="" className={field}>
          <option value="">Select one</option>
          <option>Smart Vizion</option>
          <option>Visitor Management</option>
          <option>Staff Attendance</option>
          <option>Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={label}>What would you like to improve?</label>
        <p id="message-hint" className="mb-2 text-sm text-ink-sub">
          How many people come through, how attendance or hours are recorded today, and anything already installed at
          the entrance.
        </p>
        <textarea id="message" name="message" rows={5} required aria-describedby="message-hint" className={field} />
      </div>

      <button type="submit" className="btn w-full border-white bg-teal py-4 text-cream hover:bg-teal-raised">
        Send message
      </button>
      <p className="text-sm text-ink-sub" aria-live="polite">
        {opened
          ? `Your email app should now be open with the message ready. If it did not open, write to ${CONTACT.email}.`
          : "This opens your email app with the message filled in."}
      </p>
    </form>
  );
}
