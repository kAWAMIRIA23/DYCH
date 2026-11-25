import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

/* Two faces: Bricolage Grotesque for headlines, with optical sizing so it
   tightens up at display sizes, and Inter for everything people read or
   press. Both are variable, so every weight comes from one file each. */
const display = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
  display: "swap",
});

const text = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Facial-recognition entry, automatic attendance and real-time alerts, for schools and for business across Uganda and the wider region.";

/* Carried over from the live site so search, sharing and analytics keep
   working when this build replaces it. NEXT_PUBLIC_GA_MEASUREMENT_ID
   overrides the measurement ID at build time. */
const gaMeasurementId = (() => {
  const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "G-L2CHZP0M3B";
  return /^G-[A-Z0-9]+$/.test(id) ? id : null;
})();

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "DYCH Technologies",
  alternateName: ["DYCH", "Dych Technologies"],
  url: "https://dychtechnologies.com/",
};

export const viewport: Viewport = { themeColor: "#042c33" };

export const metadata: Metadata = {
  metadataBase: new URL("https://dychtechnologies.com"),
  applicationName: "DYCH Technologies",
  /* No site-wide canonical or og:url: set here they would tell search
     engines every page is the home page. */
  openGraph: { siteName: "DYCH Technologies", type: "website", images: ["/og-image.png"] },
  keywords: [
    "school security Uganda",
    "facial recognition attendance",
    "access control Uganda",
    "staff time tracking Africa",
    "parent notification SMS",
    "DYCH Technologies",
  ],
  robots: { index: true, follow: true },
  title: {
    default: "DYCH Technologies | Smart Vizion",
    template: "%s | DYCH Technologies",
  },
  description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${text.variable} antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-[4px] focus:bg-apricot focus:px-4 focus:py-2 focus:font-semibold focus:text-teal"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        {process.env.NODE_ENV === "production" && gaMeasurementId ? <GoogleAnalytics gaId={gaMeasurementId} /> : null}
      </body>
    </html>
  );
}
