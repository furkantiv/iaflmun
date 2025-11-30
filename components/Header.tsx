"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { asset } from "@/lib/assets";

const navItems = [
  { label: "OUR TEAM", href: "/team" },
  { label: "COMMITTEES", href: "/committees" },
  { label: "ABOUT", href: "/about" },
  { label: "CALENDAR", href: "/calendar" },
  { label: "VENUE", href: "/venue" },
  { label: "FAQ", href: "/faq" },
  { label: "CONTACT", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="w-full bg-[#5a0000] text-[#e8dfcc] relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo + Title */}
        <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
          <Image
            src={asset("/iaflmun-logo.png")}
            alt="IAFLMUN Logo"
            width={50}
            height={50}
          />
          <span className="text-xl font-semibold tracking-wide">IAFLMUN</span>
        </Link>

        {/* Desktop Navigation */}
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

        {/* Desktop Apply Button */}
        <Link
          href="/apply"
          className="hidden md:block bg-[#3d0000] hover:bg-[#4a0000] text-[#e8dfcc] px-6 py-2 rounded-2xl font-medium transition-all"
        >
          Apply Now
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none focus:ring-2 focus:ring-[#e8dfcc] focus:ring-offset-2 focus:ring-offset-[#5a0000] rounded"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`w-6 h-0.5 bg-[#e8dfcc] transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[#e8dfcc] transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[#e8dfcc] transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-[#5a0000] z-50 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between py-4 px-6 border-b border-[#3d0000]">
            <Link
              href="/"
              className="flex items-center gap-3"
              onClick={closeMenu}
            >
              <Image
                src={asset("/iaflmun-logo.png")}
                alt="IAFLMUN Logo"
                width={50}
                height={50}
              />
              <span className="text-xl font-semibold tracking-wide">
                IAFLMUN
              </span>
            </Link>
            <button
              onClick={closeMenu}
              className="p-2 focus:outline-none focus:ring-2 focus:ring-[#e8dfcc] focus:ring-offset-2 focus:ring-offset-[#5a0000] rounded"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex-1 flex flex-col py-8 px-6">
            <div className="flex flex-col gap-6">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={[
                      "text-lg font-semibold tracking-wide transition-colors py-2 border-b border-[#3d0000]",
                      isActive ? "text-white" : "hover:text-white",
                    ].join(" ")}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Apply Button */}
            <Link
              href="/apply"
              onClick={closeMenu}
              className="mt-8 bg-[#3d0000] hover:bg-[#4a0000] text-[#e8dfcc] px-6 py-3 rounded-2xl font-medium transition-all text-center"
            >
              Apply Now
            </Link>
          </nav>
        </div>
      </div>

      {/* Backdrop overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
