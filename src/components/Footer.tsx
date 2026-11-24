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
            <span className="text-[17px] font-extrabold tracking-tight">DYCH Technologies</span>
          </Link>
          <p className="mt-5 max-w-[34ch] text-[15px] leading-relaxed text-mist">
            Facial-recognition entry, automatic attendance and real-time alerts, for schools and for business across
            Uganda and the wider region.
          </p>
          <p className="mt-4 text-[15px] text-mist">{CONTACT.location}</p>
        </div>

        {FOOTER_NAV.map((group) => (
          <nav key={group.heading} aria-label={group.heading}>
            <h2 className="font-extrabold text-apricot">{group.heading}</h2>
            <ul className="mt-4 space-y-2.5">
              {group.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[15px] text-mist hover:text-cream">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h2 className="font-extrabold text-apricot">Talk to us</h2>
          <ul className="mt-4 space-y-2.5 text-[15px]">
            <li>
              <a href={CONTACT.whatsapp.href} className="text-mist hover:text-cream">
                {CONTACT.whatsapp.display}
              </a>
            </li>
            {CONTACT.phones.map((p) => (
              <li key={p.href}>
                <a href={p.href} className="text-mist hover:text-cream">
                  {p.display}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${CONTACT.email}`} className="break-all text-mist hover:text-cream">
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a href={CONTACT.linkedin} className="text-mist hover:text-cream">
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
