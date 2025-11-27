import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "IAFLMUN 2025 | Istanbul Academy for Leadership MUN",
    template: "%s | IAFLMUN 2025",
  },
  description:
    "IAFLMUN 2025 is a boutique Model United Nations conference in Istanbul featuring curated committees, elevated hospitality, and mentorship-driven diplomacy.",
  metadataBase: new URL("https://iaflmun.com"),
  openGraph: {
    title: "IAFLMUN 2025 | Istanbul Academy for Leadership MUN",
    description:
      "Experience IAFLMUN 2025 — curated committees, bespoke socials, and mentorship-focused diplomacy in Istanbul.",
    url: "https://iaflmun.com",
    siteName: "IAFLMUN 2025",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IAFLMUN 2025 | Istanbul Academy for Leadership MUN",
    description:
      "Experience IAFLMUN 2025 — curated committees, bespoke socials, and mentorship-focused diplomacy in Istanbul.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
