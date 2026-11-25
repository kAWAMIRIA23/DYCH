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
 * illustration on the right. Below the lg breakpoint it becomes a stacked
 * list where tapping a sector opens its text underneath.
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

  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
    {/* Phones and tablets: a stacked list, one sector open at a time. */}
    <ul className="border-b border-teal-line lg:hidden">
      {sectors.map((sec, i) => {
        const isOpen = open === i;
        return (
          <li key={sec.title} className="border-t border-teal-line">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`sector-m-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className={`flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left type-item ${
                  isOpen ? "text-apricot" : "text-cream"
                }`}
              >
                {sec.title}
                <span
                  aria-hidden="true"
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber text-base text-teal transition-transform ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            <div id={`sector-m-${i}`} hidden={!isOpen} className="pb-6">
              <p className="leading-relaxed text-mist">{sec.text}</p>
              {sec.link && (
                <Link href={sec.link.href} className="link mt-4 inline-block text-apricot">
                  {sec.link.label}
                </Link>
              )}
            </div>
          </li>
        );
      })}
    </ul>

    <div className="hidden overflow-hidden rounded-[4px] border border-teal-line lg:grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
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
              className={`flex shrink-0 items-center justify-between gap-3 whitespace-nowrap rounded-[4px] px-4 py-3 text-left text-[15px] transition-colors lg:whitespace-normal lg:py-3.5 lg:text-base ${
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

      <div className="text-cream">
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
              <p className="type-label tabular-nums text-mist">
                {i + 1} of {sectors.length}
              </p>
              <h3 className="type-item mt-1">{sec.title}</h3>
              <p className="mt-4 measure-body text-[17px] leading-relaxed text-mist">{sec.text}</p>
              {sec.link && (
                <Link href={sec.link.href} className="link mt-5 inline-block text-apricot">
                  {sec.link.label}
                </Link>
              )}
            </div>
            <Illustration name={sec.art} dark className="mx-auto max-w-[200px] md:max-w-none" />
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
