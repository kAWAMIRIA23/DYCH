"use client";

import { useState } from "react";
import Link from "next/link";

const PEOPLE = [150, 400, 800, 1500];
const SECONDS = [10, 20, 30, 45];
const RECOGNITION_SECONDS = 3;

function format(totalMinutes: number) {
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  const hours = h === 0 ? "" : `${h} ${h === 1 ? "hour" : "hours"}`;
  const mins = `${m} min`;
  return [hours, mins].filter(Boolean).join(" ");
}

function Choice({
  legend,
  options,
  value,
  onChange,
  suffix = "",
  hint,
}: {
  legend: string;
  options: number[];
  value: number;
  onChange: (v: number) => void;
  suffix?: string;
  hint: string;
}) {
  return (
    <fieldset className="border-t border-ink/15 pt-6">
      <div className="flex items-baseline justify-between gap-4">
        <legend className="font-semibold text-ink">{legend}</legend>
        <span className="font-display text-2xl font-semibold tabular-nums text-ink">
          {value.toLocaleString("en-GB")}
          {suffix}
        </span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            aria-pressed={o === value}
            onClick={() => onChange(o)}
            className={`btn px-4 py-2 tabular-nums ${
              o === value ? "border-teal bg-teal text-cream" : "border-ink/30 text-ink hover:border-ink"
            }`}
          >
            {o.toLocaleString("en-GB")}
            {suffix}
          </button>
        ))}
      </div>
      <p className="mt-3 text-[15px] text-ink-sub">{hint}</p>
    </fieldset>
  );
}

export function TimeSaved() {
  const [people, setPeople] = useState(400);
  const [seconds, setSeconds] = useState(20);
  const savedPerDay = Math.max(0, people * (seconds - RECOGNITION_SECONDS));
  const day = Math.round(savedPerDay / 60);
  const week = Math.round((savedPerDay * 5) / 60);

  return (
    <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
      <div className="space-y-8">
        <Choice
          legend="People through the entrance each day"
          options={PEOPLE}
          value={people}
          onChange={setPeople}
          hint="Pupils and staff together, counted once each as they arrive."
        />
        <Choice
          legend="Seconds per manual check-in today"
          options={SECONDS}
          value={seconds}
          onChange={setSeconds}
          suffix="s"
          hint="Finding the name, marking it, and the queue that builds behind it."
        />
      </div>

      <div className="panel-outline-light p-7 text-ink sm:p-9" aria-live="polite">
        <p className="type-label text-ink-sub">Time recovered</p>
        <dl className="mt-6 space-y-6">
          <div>
            <dt className="text-ink-sub">Every day</dt>
            <dd className="font-display text-[clamp(2rem,4vw,2.8rem)] font-semibold leading-tight tabular-nums">{format(day)}</dd>
          </div>
          <div className="border-t border-ink/15 pt-6">
            <dt className="text-ink-sub">Every week</dt>
            <dd className="font-display text-[clamp(2rem,4vw,2.8rem)] font-semibold leading-tight tabular-nums">{format(week)}</dd>
          </div>
        </dl>
        <p className="mt-7 text-sm leading-relaxed text-ink-sub">
          <strong className="text-ink">Assumptions.</strong> 3 seconds per Smart Vizion recognition, as measured by
          DYCH Technologies. One scan per person per day. 5 school days a week. Departures, second entrances and
          visitors are not counted, so the real figure is higher.
        </p>
        <Link href="/how-it-works" className="link mt-5 inline-block text-ink">
          How does this work?
        </Link>
      </div>
    </div>
  );
}
