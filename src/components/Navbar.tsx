"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Parents", href: "#parents" },
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Transparent over the hero photo, solid teal once the page moves.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        solid ? "bg-teal border-b border-teal-line" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-16">
        <a href="#top" className="mr-auto flex items-center gap-2.5 text-cream">
          <Image src="/images/dych-icon.png" alt="" width={36} height={36} className="rounded-full" />
          <span className="text-[17px] font-extrabold tracking-tight">DYCH Technologies</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-[15px] font-medium text-cream-soft hover:text-cream">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded bg-cream px-4 py-2.5 text-[15px] font-extrabold text-teal hover:bg-white md:inline-block"
        >
          Book a demo
        </a>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="rounded p-2 text-cream md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="border-t border-teal-line bg-teal px-4 pb-4 md:hidden">
          {[...links, { label: "Book a demo", href: "#contact" }].map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-teal-line py-3.5 text-base font-medium text-cream"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
