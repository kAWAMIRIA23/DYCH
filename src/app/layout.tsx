import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "800", "900"],
});

export const metadata: Metadata = {
  title: "Smart School Systems | DYCH Technologies",
  description:
    "Secure entry, automatic attendance and instant parent alerts for schools across Africa, from DYCH Technologies in Kampala.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hanken.variable} antialiased`}>{children}</body>
    </html>
  );
}
