"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { Illustration } from "@/components/ui";

export type Sector = {
  title: string;
  text: string;
  art: string;
  link?: { href: string; label: string };
};

/**
 * Sectors as a picker: the list on the left, the chosen sector's full text and
 * illustration on the right. On phones the list becomes a row you swipe.
 * Built as an ARIA tablist, so arrow keys, Home and End move between sectors.
 */
export function SectorPicker({ sectors }: { sectors: Sector[] }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>, i: number) {
    const last = sectors.length - 1;
    const next =
      e.key === "ArrowDown" || e.key === "ArrowRight" ? (i === last ? 0 : i + 1)
      : e.key === "ArrowUp" || e.key === "ArrowLeft" ? (i === 0 ? last : i - 1)
      : e.key === "Home" ? 0
      : e.key === "End" ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className="grid overflow-hidden rounded-[14px] border border-teal-line lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
      <div
        role="tablist"
        aria-label="Sectors"
        aria-orientation="vertical"
        className="flex gap-1.5 overflow-x-auto border-b border-teal-line p-2.5 lg:flex-col lg:overflow-visible lg:border-b-0 lg:border-r"
      >
        {sectors.map((sec, i) => {
          const on = i === active;
          return (
            <button
              key={sec.title}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`sector-tab-${i}`}
              aria-selected={on}
              aria-controls={`sector-panel-${i}`}
              tabIndex={on ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`flex shrink-0 items-center justify-between gap-3 whitespace-nowrap rounded-lg px-4 py-3 text-left text-[15px] transition-colors lg:whitespace-normal lg:py-3.5 lg:text-base ${
                on ? "bg-apricot font-semibold text-teal" : "text-mist hover:bg-white/5 hover:text-cream"
              }`}
            >
              {sec.title}
              <span aria-hidden="true" className={`hidden text-lg lg:inline ${on ? "opacity-100" : "opacity-0"}`}>
                →
              </span>
            </button>
          );
        })}
      </div>

      <div className="bg-cream text-ink">
        {/* Every panel is in the page so search engines read all eight;
            only the chosen one is shown. */}
        {sectors.map((sec, i) => (
          <div
            key={sec.title}
            role="tabpanel"
            id={`sector-panel-${i}`}
            aria-labelledby={`sector-tab-${i}`}
            hidden={i !== active}
            className="grid h-full items-center gap-8 p-7 sm:p-10 md:grid-cols-[minmax(0,1fr)_200px]"
          >
            <div className="min-w-0">
              <p className="text-sm font-semibold tabular-nums text-ink-sub">
                {i + 1} of {sectors.length}
              </p>
              <h3 className="type-item mt-1">{sec.title}</h3>
              <p className="mt-4 measure-body text-[17px] leading-relaxed text-ink-body">{sec.text}</p>
              {sec.link && (
                <Link href={sec.link.href} className="mt-5 link inline-block text-ink">
                  {sec.link.label}
                </Link>
              )}
            </div>
            <Illustration name={sec.art} className="mx-auto max-w-[200px] md:max-w-none" />
          </div>
        ))}
      </div>
    </div>
  );
}
