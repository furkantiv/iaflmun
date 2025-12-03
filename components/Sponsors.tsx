"use client";

import Image from "next/image";
import { useState } from "react";
import { asset } from "@/lib/assets";

type Sponsor = {
  name: string;
  src?: string;
};

const sponsors: Sponsor[] = [
  { name: "PIN", src: asset("/images/sponsors/pin.png") },
  { name: "BeanQ Coffee" },
  { name: "Morfose" },
  { name: "Super Energy" },
  { name: "Çiğköfteci Ömer Aybak" },
  { name: "Kızılay Natural Mineral Water" },
  { name: "Frango Döner" },
  { name: "Kuzey Yapı" },
  { name: "B Helluva Studio"},
  { name: "Uyumsoft" },
  { name: "Mostra Social" },
];

export default function Sponsors() {
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  const handleImageError = (sponsorName: string) => {
    setFailedImages((prev) => new Set(prev).add(sponsorName));
  };

  if (sponsors.length === 0) return null;

  // Render sponsor card component
  const SponsorCard = ({ sponsor, index }: { sponsor: Sponsor; index: number }) => (
    <div
      key={`${sponsor.name}-${index}`}
      className="flex-shrink-0 mx-6 sm:mx-10"
    >
      <div className="bg-[#f5eadd] rounded-xl px-8 py-5 flex items-center justify-center min-w-[180px] sm:min-w-[240px] h-[80px] sm:h-[90px] shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform">
        {!sponsor.src || failedImages.has(sponsor.name) ? (
          <span className="text-[#5a0000] font-bold text-base sm:text-lg text-center leading-tight">
            {sponsor.name}
          </span>
        ) : (
          <Image
            src={sponsor.src}
            alt={sponsor.name}
            width={200}
            height={60}
            className="object-contain max-h-[50px] sm:max-h-[60px] w-auto"
            onError={() => handleImageError(sponsor.name)}
          />
        )}
      </div>
    </div>
  );

  return (
    <section id="sponsors" className="w-full bg-[#5a0000] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="section-title section-title--light">Our Sponsors</h2>

        {/* Infinite scrolling marquee */}
        <div className="mt-10 relative overflow-hidden">
          {/* Wrapper that contains two identical sets for seamless looping */}
          <div className="flex animate-sponsor-marquee will-change-transform">
            {/* First set */}
            {sponsors.map((sponsor, index) => (
              <SponsorCard key={`set1-${sponsor.name}-${index}`} sponsor={sponsor} index={index} />
            ))}
            {/* Second set (duplicate for seamless loop) */}
            {sponsors.map((sponsor, index) => (
              <SponsorCard key={`set2-${sponsor.name}-${index}`} sponsor={sponsor} index={index + sponsors.length} />
            ))}
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-[#f5eadd]/30" />
      </div>
    </section>
  );
}
