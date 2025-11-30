import Link from "next/link";
import Image from "next/image";
import { asset } from "@/lib/assets";

const conferenceLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Committees", href: "/committees" },
  { label: "Our Team", href: "/team" },
  { label: "Apply", href: "/apply" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];



const legalLinks = [
  { label: "Terms and Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/iafl_mun",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
        aria-hidden
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 3.999 3.999 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@iafl_mun",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
        aria-hidden
      >
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/iaflmun/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
        aria-hidden
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#5a0000] text-[#f5eadd] pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[1.2fr_2fr]">
        <div className="space-y-5">
          <Image
            src={asset("/iaflmun-logo.png")}
            alt="IAFLMUN Logo"
            width={250}
            height={250}
          />
          <Link href="/" className="inline-flex flex-col gap-2">
            <span className="text-3xl font-semibold tracking-[0.3em]">
              IAFLMUN<span className="text-[#eab07c]">25</span>
            </span>
            <p className="text-sm italic text-[#f5eadd]/80 max-w-sm">
              “Gratulationes. Textum Latinum interpretatus es; ut speravi.
              Magnum tibi diem opto.”
            </p>
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#f5eadd]/70 mb-4">
              Conference
            </p>
            <ul className="space-y-2">
              {conferenceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#f5eadd]/70 mb-4">
              Legal
            </p>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#f5eadd]/70 mb-4">
              Social
            </p>
            <div className="flex items-center gap-4">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row items-center justify-between text-xs text-[#f5eadd]/70">
        <p>© iaflmun2025</p>
        <p>Crafted in Istanbul</p>
      </div>
    </footer>
  );
}

