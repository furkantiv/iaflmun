"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { asset } from "@/lib/assets";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

// Etkinlik tarihini buradan ayarla
const EVENT_DATE = new Date("2025-12-05T09:00:00+03:00").getTime();

function calculateTimeLeft(): TimeLeft {
  const now = new Date().getTime();
  const diff = EVENT_DATE - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const format = (value: number) => value.toString().padStart(2, "0");

  return (
    <section
      className="relative w-full min-h-[80vh] flex items-center justify-center"
      style={{
        backgroundImage: `url('${asset("/images/hero-bg.jpg")}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Karanlık overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* İçerik */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-16">
        <div className="relative bg-[#5a0000]/90 rounded-2xl px-8 sm:px-12 py-10 sm:py-14 text-center text-[#f5eadd]">
          {/* Kuzgun */}
          <div className="hidden sm:block absolute -top-40 left-8">
            <Image
              src={asset("/images/raven.png")}
              alt="Raven"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>

          {/* Başlık */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold ">
            IAFLMUN
          </h1>

          {/* Sayaç */}
          <div className="mt-8">
            <div className="flex justify-center gap-4 sm:gap-6 md:gap-6 font-mono text-2xl sm:text-3xl md:text-4xl text-center">
              <span>{format(timeLeft.days)}</span>
              <span>:</span>
              <span>{format(timeLeft.hours)}</span>
              <span>:</span>
              <span>{format(timeLeft.minutes)}</span>
              <span>:</span>
              <span>{format(timeLeft.seconds)}</span>
            </div>

            <div className="mt-2 flex justify-center gap-6 sm:gap-10 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-center">
              <span>days</span>
              <span>hours</span>
              <span>minutes</span>
              <span>seconds</span>
            </div>
          </div>
        </div>

        {/* Alıntı */}
        <p className="mt-6 max-w-3xl mx-auto text-sm sm:text-base italic text-[#f5eadd]">
          “Gratulationes. Textum Latinum interpretatus es; ut speravi. Magnum
          tibi diem opto.”
        </p>
      </div>
    </section>
  );
}
