"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Transparent over each page's teal header, solid teal once the page moves.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation (adjusting state during render, as React
  // recommends over an effect), on Escape and on a click outside.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
    setMenu(null);
  }
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenu(null);
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  const solid = scrolled || open || menu !== null;
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]));

  return (
    <header
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        solid ? "border-b border-teal-line bg-teal" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-16" aria-label="Main">
        <Link href="/" className="mr-auto flex items-center gap-2.5 text-cream">
          <Image src="/images/dych-icon.png" alt="" width={36} height={36} className="rounded-full" />
          <span className="font-display text-[18px] font-semibold tracking-tight">DYCH Technologies</span>
        </Link>

        <ul className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((l) =>
            l.menu ? (
              <li key={l.label} className="relative">
                <button
                  type="button"
                  aria-expanded={menu === l.label}
                  onClick={() => setMenu(menu === l.label ? null : l.label)}
                  className={`flex items-center gap-1 text-[15px] font-medium hover:text-cream ${
                    l.menu.some((m) => isActive(m.href)) ? "text-apricot" : "text-cream-soft"
                  }`}
                >
                  {l.label}
                  <ChevronDown className={`h-4 w-4 transition-transform ${menu === l.label ? "rotate-180" : ""}`} />
                </button>
                {menu === l.label && (
                  <ul className="absolute left-1/2 top-full mt-5 w-80 -translate-x-1/2 rounded-[4px] bg-cream p-2 text-ink shadow-[0_24px_50px_-24px_rgb(0_0_0/0.55)]">
                    {l.menu.map((m) => (
                      <li key={m.href}>
                        <Link
                          href={m.href}
                          onClick={() => setMenu(null)}
                          className="block rounded-[4px] px-4 py-3 hover:bg-paper"
                        >
                          <span className="block font-semibold">{m.label}</span>
                          <span className="block text-sm text-ink-sub">{m.note}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={l.label}>
                <Link
                  href={l.href}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className={`text-[15px] font-medium hover:text-cream ${isActive(l.href) ? "text-apricot" : "text-cream-soft"}`}
                >
                  {l.label}
                </Link>
              </li>
            ),
          )}
        </ul>

        <Link
          href="/contact"
          className="btn hidden border-white bg-apricot px-5 py-2 text-[15px] text-teal hover:bg-cream lg:inline-flex"
        >
          Book a Demo
        </Link>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="rounded-[4px] p-2 text-cream lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="max-h-[calc(100svh-4.5rem)] overflow-y-auto border-t border-teal-line bg-teal px-4 pb-6 sm:px-6 lg:hidden">
          {NAV_LINKS.map((l) =>
            l.menu ? (
              <div key={l.label} className="border-b border-teal-line py-3">
                <p className="py-1 text-sm text-mist">{l.label}</p>
                {l.menu.map((m) => (
                  <Link key={m.href} href={m.href} className="block py-2 text-base font-semibold text-cream">
                    {m.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link key={l.label} href={l.href} className="block border-b border-teal-line py-3.5 text-base font-semibold text-cream">
                {l.label}
              </Link>
            ),
          )}
          <Link href="/contact" className="btn mt-5 flex w-full border-white bg-apricot text-teal">
            Book a Demo
          </Link>
        </div>
      )}
    </header>
  );
}
