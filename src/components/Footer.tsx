import Image from "next/image";
import Link from "next/link";
import { CONTACT, FOOTER_NAV } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ground text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.3fr_repeat(3,1fr)_1.2fr] lg:px-16">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/images/dych-icon.png" alt="" width={32} height={32} className="rounded-full" />
            <span className="font-display text-[18px] font-semibold tracking-tight">DYCH Technologies</span>
          </Link>
          <p className="mt-5 measure-body text-[15px] leading-relaxed text-mist">
            Facial-recognition entry, automatic attendance and real-time alerts, for schools and for business across
            Uganda and the wider region.
          </p>
          <p className="mt-4 text-[15px] text-mist">{CONTACT.location}</p>
        </div>

        {FOOTER_NAV.map((group) => (
          <nav key={group.heading} aria-label={group.heading}>
            <h2 className="font-semibold text-apricot">{group.heading}</h2>
            <ul className="mt-2 md:mt-4 md:space-y-2.5">
              {group.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="inline-flex min-h-11 items-center text-[15px] text-mist hover:text-cream md:min-h-0">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h2 className="font-semibold text-apricot">Talk to us</h2>
          <ul className="mt-2 text-[15px] md:mt-4 md:space-y-2.5">
            <li>
              <a href={CONTACT.whatsapp.href} className="inline-flex min-h-11 items-center text-mist hover:text-cream md:min-h-0">
                {CONTACT.whatsapp.display}
              </a>
            </li>
            {CONTACT.phones.map((p) => (
              <li key={p.href}>
                <a href={p.href} className="inline-flex min-h-11 items-center text-mist hover:text-cream md:min-h-0">
                  {p.display}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${CONTACT.email}`} className="inline-flex min-h-11 items-center break-all text-mist hover:text-cream md:min-h-0">
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a href={CONTACT.linkedin} className="inline-flex min-h-11 items-center text-mist hover:text-cream md:min-h-0">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-teal-line">
        <p className="mx-auto max-w-7xl px-4 py-6 text-sm text-mist sm:px-6 lg:px-16">
          © {new Date().getFullYear()} DYCH Technologies. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
