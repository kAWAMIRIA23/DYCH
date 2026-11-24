import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

/* Shared building blocks. Two tones: "dark" is a teal ground with cream
   headlines and mist copy; "light" is paper or cream with teal ink. */

export type Tone = "dark" | "light" | "cream";

const grounds: Record<Tone, string> = {
  dark: "bg-teal text-cream",
  light: "bg-paper text-ink",
  cream: "bg-cream text-ink",
};

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-16 ${className}`}>{children}</div>;
}

export function Section({
  id,
  tone = "light",
  children,
  className = "",
}: {
  id?: string;
  tone?: Tone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-20 overflow-hidden py-20 sm:py-28 ${grounds[tone]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

type ButtonKind = "primary" | "dark" | "outline-light" | "outline-dark";
const buttons: Record<ButtonKind, string> = {
  primary: "border-white bg-apricot text-teal hover:bg-cream",
  dark: "border-white bg-teal text-cream hover:bg-teal-raised",
  "outline-light": "border-mist text-cream hover:border-apricot hover:text-apricot",
  "outline-dark": "border-ink text-ink hover:bg-ink hover:text-cream",
};

export function Button({ href, kind = "primary", children }: { href: string; kind?: ButtonKind; children: ReactNode }) {
  return (
    <Link href={href} className={`btn ${buttons[kind]}`}>
      {children}
    </Link>
  );
}

export function TextLink({ href, tone = "light", children }: { href: string; tone?: Tone; children: ReactNode }) {
  return (
    <Link
      href={href}
      className={`font-semibold underline decoration-2 underline-offset-[6px] ${
        tone === "dark" ? "text-apricot decoration-amber hover:text-cream" : "text-ink decoration-amber hover:decoration-ink"
      }`}
    >
      {children}
    </Link>
  );
}

export function H2({ children, tone = "light", className = "" }: { children: ReactNode; tone?: Tone; className?: string }) {
  return (
    <h2
      className={`text-balance text-[clamp(2.1rem,4.2vw,3.5rem)] font-semibold leading-[1.03] tracking-[-0.03em] ${
        tone === "dark" ? "text-cream" : "text-ink"
      } ${className}`}
    >
      {children}
    </h2>
  );
}

export function Lede({ children, tone = "light", className = "" }: { children: ReactNode; tone?: Tone; className?: string }) {
  return (
    <p className={`text-lg leading-relaxed ${tone === "dark" ? "text-mist" : "text-ink-body"} ${className}`}>{children}</p>
  );
}

/** Heading on the left, lede on the right: the opening of most sections. */
export function SectionIntro({ title, tone = "light", children }: { title: ReactNode; tone?: Tone; children?: ReactNode }) {
  return (
    <div className="grid gap-6 md:grid-cols-[1.15fr_1fr] md:items-start md:gap-12">
      <H2 tone={tone} className="max-w-[18ch]">
        {title}
      </H2>
      {children && <div className="max-w-[52ch] space-y-4">{children}</div>}
    </div>
  );
}

/** Teal page header for every inner page, with an optional photo in an amber circle. */
export function PageHeader({
  title,
  children,
  image,
  imageAlt = "",
}: {
  title: ReactNode;
  children?: ReactNode;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-teal pb-20 pt-36 text-cream sm:pb-28 sm:pt-44">
      <Container className={`grid gap-14 ${image ? "md:grid-cols-[1.15fr_0.85fr] md:items-center" : ""}`}>
        <div className="min-w-0">
          <h1 className="max-w-[16ch] text-balance text-[clamp(2.6rem,5.8vw,5.2rem)] font-semibold leading-[1] tracking-[-0.03em] text-cream">
            {title}
          </h1>
          {children && <div className="mt-7 max-w-[56ch] space-y-4 text-lg leading-relaxed text-mist">{children}</div>}
        </div>
        {image && <CirclePhoto src={image} alt={imageAlt} />}
      </Container>
    </section>
  );
}

/** A photo in a teal frame with the amber circle behind it, from the visitor-pass sample. */
export function CirclePhoto({ src, alt, ratio = "aspect-[4/3]" }: { src: string; alt: string; ratio?: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[480px]">
      <div
        className="absolute left-1/2 top-1/2 aspect-square w-[115%] -translate-x-[42%] -translate-y-1/2 rounded-full bg-amber"
        aria-hidden="true"
      />
      <div className={`relative ${ratio} overflow-hidden rounded-[14px] border-[6px] border-teal`}>
        <Image src={src} alt={alt} fill sizes="(min-width: 768px) 40vw, 90vw" className="object-cover" />
      </div>
    </div>
  );
}

/** Title-and-text pairs. Each pair sits under an amber rule (light) or a teal line (dark). */
export function Details({
  items,
  tone = "light",
  cols = 2,
}: {
  items: { title: ReactNode; text: ReactNode }[];
  tone?: Tone;
  cols?: 1 | 2 | 3;
}) {
  const grid = cols === 3 ? "md:grid-cols-3" : cols === 2 ? "md:grid-cols-2" : "";
  return (
    <dl className={`grid gap-x-10 gap-y-9 ${grid}`}>
      {items.map((it, i) => (
        <div key={i} className={`border-t-4 pt-5 ${tone === "dark" ? "border-amber" : "border-amber"}`}>
          <dt className={`text-xl font-semibold tracking-tight ${tone === "dark" ? "text-cream" : "text-ink"}`}>{it.title}</dt>
          <dd className={`mt-2 leading-relaxed ${tone === "dark" ? "text-mist" : "text-ink-body"}`}>{it.text}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Cream cards on teal, from the visitor pass. */
export function CreamCards({
  items,
  cols = 4,
}: {
  items: { label?: ReactNode; title: ReactNode; text: ReactNode; link?: { href: string; label: string } }[];
  cols?: 2 | 3 | 4;
}) {
  const grid = cols === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : cols === 3 ? "md:grid-cols-3" : "md:grid-cols-2";
  return (
    <ul className={`grid gap-4 ${grid}`}>
      {items.map((it, i) => (
        <li key={i} className="flex flex-col rounded-[14px] bg-cream p-7 text-ink">
          {it.label && <span className="text-sm font-semibold text-violet">{it.label}</span>}
          <h3 className={`text-xl font-semibold tracking-tight ${it.label ? "mt-5" : ""}`}>{it.title}</h3>
          <p className="mt-2 leading-relaxed text-ink-body">{it.text}</p>
          {it.link && (
            <Link href={it.link.href} className="mt-auto pt-5 text-sm font-semibold text-violet underline underline-offset-4">
              {it.link.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

/** The closing call to action on every page. */
export function Cta({ title, children, button = "Book a Demo" }: { title: ReactNode; children?: ReactNode; button?: string }) {
  return (
    <section className="relative overflow-hidden bg-teal py-20 text-cream sm:py-28">
      <div
        className="absolute -right-[12vw] top-1/2 hidden aspect-square w-[42vw] -translate-y-1/2 rounded-full bg-amber lg:block"
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="max-w-[40rem]">
          <H2 tone="dark">{title}</H2>
          {children && <Lede tone="dark" className="mt-6 max-w-[48ch]">{children}</Lede>}
          <div className="mt-8">
            <Button href="/contact">{button}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
