import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
        className={`${poppins.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
