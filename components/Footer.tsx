import Link from "next/link";
import Image from "next/image";

const conferenceLinks = [
  { label: "Home", href: "/" },
  { label: "Secretariat", href: "/team" },
  { label: "Directorate", href: "/team#directorate" },
  { label: "Venue", href: "/about" },
  { label: "Schedule", href: "/faq" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];

const committeeLinks = ["WHO", "UNEP", "UNICEF", "WIPO", "UNWOMEN", "UNSC"];

const legalLinks = [
  { label: "Terms and Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/iaflmun",
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
    label: "GitHub",
    href: "https://github.com/iaflmun",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
        aria-hidden
      >
        <path d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12c0 4.65 3.015 8.59 7.2 9.99.525.105.72-.225.72-.51 0-.255-.015-1.095-.015-1.995-2.64.48-3.33-.645-3.54-1.23-.12-.3-.63-1.23-1.08-1.485-.37-.195-.9-.675-.015-.69.84-.015 1.44.78 1.635 1.11.96 1.62 2.49 1.17 3.105.885.09-.705.375-1.17.675-1.44-2.34-.27-4.8-1.17-4.8-5.205 0-1.17.42-2.13 1.11-2.88-.105-.27-.48-1.395.105-2.91 0 0 .9-.285 2.94 1.095a9.78 9.78 0 0 1 5.34 0c2.04-1.395 2.94-1.095 2.94-1.095.585 1.515.21 2.64.105 2.91.69.75 1.11 1.695 1.11 2.88 0 4.05-2.475 4.935-4.815 5.205.39.33.735.96.735 1.95 0 1.41-.015 2.55-.015 2.91 0 .285.195.63.72.51 4.185-1.41 7.2-5.34 7.2-9.99C22.5 6.2 17.8 1.5 12 1.5" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#5a0000] text-[#f5eadd] pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[1.2fr_2fr]">
        <div className="space-y-5">
          <Image src="/iaflmun-logo.png" alt="IAFLMUN Logo" width={250} height={250} />
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
              Committees
            </p>
            <ul className="space-y-2">
              {committeeLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="/committees"
                    className="hover:text-white transition-colors"
                  >
                    {link}
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

