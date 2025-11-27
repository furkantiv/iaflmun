"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { asset } from "@/lib/assets";

const sponsors = [
  { name: "Espressolab", src: asset("/images/sponsors/espressolab.png") },
  { name: "Eti", src: asset("/images/sponsors/eti.png") },
  { name: "Pin Drinks", src: asset("/images/sponsors/pin.png") },
  // { name: "Sponsor 4", src: asset("/images/sponsors/sponsor4.png") },
];

export default function Sponsors() {
  const [offset, setOffset] = useState(0);

  // Her 4 saniyede bir sıradaki sponsoru ortaya al
  useEffect(() => {
    if (sponsors.length === 0) return;

    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % sponsors.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  if (sponsors.length === 0) return null;

  // Diziyi kaydırarak farklı sponsorları ortaya getiriyoruz
  const rotated = sponsors.map(
    (_, i) => sponsors[(i + offset) % sponsors.length]
  );
  const centerIndex = Math.floor(rotated.length / 2);

  return (
    <section
      id="sponsors"
      className="w-full bg-[#5a0000] py-20"
    >
      <div className="max-w-7xl mx-auto text-center"> 
        <h2 className="section-title section-title--light">
          Our Sponsors
        </h2>

        <div className="mt-8 px-4 py-8 flex items-center justify-center gap-4 sm:gap-6 overflow-hidden">
          {rotated.map((sponsor, index) => {
            const isActive = index === centerIndex;
            return (
              <div
                key={sponsor.name}
                className={[
                  " bg-[#f5eadd] rounded-2xl shadow-lg flex items-center justify-center transition-all duration-500 mx-2",
                  "px-4 py-3 sm:px-8 sm:py-4",
                  isActive
                    ? "scale-110 sm:scale-125 opacity-100 z-10 shadow-2xl"
                    : "scale-90 opacity-60",
                ].join(" ")}
              >
                <Image
                  src={sponsor.src}
                  alt={sponsor.name}
                  width={300}
                  height={50}
                  className="object-contain"
                />
              </div>
            );
          })}
        </div>

        <div className="mt-10 h-px w-full bg-[#f5eadd]/70" />
      </div>
    </section>
  );
}
