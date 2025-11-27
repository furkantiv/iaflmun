const highlights = [
  { title: "3 Days", detail: "of debate, crisis response, and socials" },
  { title: "400+ Delegates", detail: "representing 30+ schools" },
  { title: "6 Committees", detail: "covering global and historical agendas" },
];

const values = [
  {
    title: "Academics First",
    copy: "We design nuanced agendas and study guides that stretch every delegate.",
  },
  {
    title: "Warm Hospitality",
    copy: "Concierge-level support from arrival logistics to dietary needs.",
  },
  {
    title: "Inclusive Culture",
    copy: "Scholarship tracks and mentorship pairings keep diplomacy accessible.",
  },
];

export const metadata = {
  title: "IAFLMUN | About",
  description:
    "Learn about IAFLMUN's vision, values, and the experience we craft for delegates.",
};

export default function AboutPage() {
  return (
    <main className="page-shell page-shell--soft py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-16">
        <section className="space-y-6 text-center">
          <p className="section-label">ABOUT</p>
          <h1 className="section-title">
            A boutique conference curated in Istanbul
          </h1>
          <p className="section-subtitle text-base md:text-lg max-w-3xl mx-auto">
            IAFLMUN blends rigorous academics with modern hospitality. We are a
            student-led conference hosted on the Bosphorus, bringing together
            delegates who value purposeful diplomacy.
          </p>
        </section>

        <section className="grid gap-6 sm:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="surface-card px-6 py-8 text-center"
            >
              <h3 className="text-3xl font-semibold text-[#3a0000]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-[#3a0000]/70">{item.detail}</p>
            </div>
          ))}
        </section>

        <section className="rounded-[40px] bg-[#3a0000] text-[#f5eadd] p-10 space-y-6">
          <h2 className="text-3xl font-semibold">Our Story</h2>
          <p className="text-base leading-relaxed">
            What began as a small diplomacy club has evolved into an
            internationally recognized MUN experience. Each edition intentionally
            scales without losing our boutique charm — carefully chosen venues,
            curated committees, and keynote speakers who are active diplomats,
            authors, and climate advocates.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-[#3a0000]">
            What guides us
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="surface-card p-6 space-y-3"
              >
                <h3 className="text-xl font-semibold text-[#3a0000]">
                  {value.title}
                </h3>
                <p className="text-sm text-[#3a0000]/70">{value.copy}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

