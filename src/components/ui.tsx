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
      className={`link-inline ${tone === "dark" ? "text-cream" : "text-ink"}`}
    >
      {children}
    </Link>
  );
}

export function H2({ children, tone = "light", className = "" }: { children: ReactNode; tone?: Tone; className?: string }) {
  return (
    <h2
      className={`text-balance type-section ${
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
      <H2 tone={tone} className="measure-heading">
        {title}
      </H2>
      {children && <div className="measure-body space-y-4">{children}</div>}
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
          <h1 className="measure-heading text-balance type-page text-cream">
            {title}
          </h1>
          {children && <div className="mt-7 measure-body space-y-4 text-lg leading-relaxed text-mist">{children}</div>}
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
      <div className={`relative ${ratio} overflow-hidden rounded-[4px] border-[6px] border-teal`}>
        <Image src={src} alt={alt} fill quality={90} sizes="(min-width: 768px) 40vw, 90vw" className="object-cover" />
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
        <div key={i} className={`border-t pt-5 ${tone === "dark" ? "border-teal-line" : "border-ink/15"}`}>
          <dt className={`type-item ${tone === "dark" ? "text-cream" : "text-ink"}`}>{it.title}</dt>
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
        <li
          key={i}
          className="panel-outline flex flex-col p-8 text-cream transition-colors duration-150 hover:border-mist hover:bg-teal-raised"
        >
          {it.label && <span className="type-label text-apricot">{it.label}</span>}
          <h3 className={`type-item ${it.label ? "mt-5" : ""}`}>{it.title}</h3>
          <p className="mt-3 leading-relaxed text-mist">{it.text}</p>
          {it.link && (
            <Link href={it.link.href} className="link mt-auto pt-6 text-apricot">
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
          {children && <Lede tone="dark" className="mt-6 measure-body">{children}</Lede>}
          <div className="mt-8">
            <Button href="/contact">{button}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** One of the line illustrations in /public/illustrations: "Teal and amber"
    for light grounds and cream cards, "Night" (dark/) on dark teal sections.
    Decorative by default (the text beside it says the same thing). */
export function Illustration({
  name,
  alt = "",
  className = "",
  dark = false,
}: {
  name: string;
  alt?: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <Image
      src={`/illustrations/${dark ? "dark/" : ""}${name}.png`}
      alt={alt}
      width={1200}
      height={1200}
      sizes="(min-width: 768px) 30vw, 70vw"
      className={`h-auto w-full ${className}`}
    />
  );
}
