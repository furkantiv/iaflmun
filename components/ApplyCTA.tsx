import Link from "next/link";

export default function ApplyCTA() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-3xl md:text-[2.75rem] leading-relaxed font-serif italic text-[#2a0505]">
          Don’t miss your chance to reserve a spot at the best MUN of the year.
        </p>

        <div className="relative flex-shrink-0">
          <div
            aria-hidden
            className="absolute -inset-4 bg-[#5a0000]/30 blur-[90px]"
          />
          <Link
            href="/apply"
            className="relative inline-flex items-center justify-center rounded-2xl bg-[#5a0000] px-10 py-4 text-lg font-semibold text-[#f5eadd] shadow-2xl shadow-[#5a0000]/40 transition-colors hover:bg-[#4a0000]"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
}

