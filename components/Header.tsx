"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "OUR TEAM", href: "/team" },
  { label: "COMMITTEES", href: "/committees" },
  { label: "ABOUT", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "CONTACT", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="w-full bg-[#5a0000] text-[#e8dfcc]">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo + Title */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/iaflmun-logo.png" alt="IAFLMUN Logo" width={50} height={50} />
          <span className="text-xl font-semibold tracking-wide">IAFLMUN</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-10 text-sm font-semibold tracking-wide">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "transition-colors",
                  isActive ? "text-white" : "hover:text-white",
                ].join(" ")}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Apply Button */}
        <Link
          href="/contact"
          className="hidden md:block bg-[#3d0000] hover:bg-[#4a0000] text-[#e8dfcc] px-6 py-2 rounded-2xl font-medium transition-all"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
}
