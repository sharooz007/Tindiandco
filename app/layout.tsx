import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TINDI & CO | Frozen Foods & Snacks",
  description:
    "The crunch side of snacks. TINDI & CO brings the finest ready-to-cook frozen foods and crispy snacks to every home. Quality today, trust forever.",
  icons: {
    icon: "/tindi-logo.svg",
    shortcut: "/tindi-logo.svg",
    apple: "/tindi-logo.svg",
  },
  openGraph: {
    title: "TINDI & CO | The Crunch Side Of Snacks",
    description:
      "Ready-to-cook frozen foods and crispy takeaway snacks. Quality today, trust forever.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bricolage.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
