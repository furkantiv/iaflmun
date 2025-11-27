const committees = [
  {
    name: "UN Security Council",
    level: "Advanced",
    theme: "Maintaining peace amid emerging AI warfare",
    tone: "bg-gradient-to-br from-[#3a0000] to-[#781414]",
  },
  {
    name: "World Health Organization",
    level: "Intermediate",
    theme: "Rebuilding resilient health systems post-crisis",
    tone: "bg-gradient-to-br from-[#4d1c00] to-[#b85c38]",
  },
  {
    name: "UNESCO",
    level: "Beginner",
    theme: "Safeguarding cultural heritage in the digital age",
    tone: "bg-gradient-to-br from-[#3a2f20] to-[#8c6b3d]",
  },
  {
    name: "COP 31",
    level: "Intermediate",
    theme: "Financing climate adaptation for vulnerable nations",
    tone: "bg-gradient-to-br from-[#1f3a31] to-[#3d7761]",
  },
  {
    name: "Historical Crisis Committee",
    level: "Advanced",
    theme: "Cuban Missile Crisis — alternate realities",
    tone: "bg-gradient-to-br from-[#1b1b2f] to-[#53354a]",
  },
  {
    name: "Press Corps",
    level: "Creative",
    theme: "Crafting narratives & investigative reporting",
    tone: "bg-gradient-to-br from-[#2f1b2b] to-[#6a1e55]",
  },
];

export const metadata = {
  title: "IAFLMUN | Committees",
  description:
    "Discover the IAFLMUN committee lineup spanning different experience levels.",
};

export default function CommitteesPage() {
  return (
    <main className="page-shell page-shell--dark py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <p className="section-label section-label--light">COMMITTEES</p>
          <h1 className="section-title section-title--light">
            Dynamic Rooms, Bold Agendas
          </h1>
          <p className="section-subtitle section-subtitle--light text-base md:text-lg max-w-2xl mx-auto">
            From crisis simulations to press narratives, every delegate will
            find a committee that challenges their diplomacy toolkit.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {committees.map((committee) => (
            <article
              key={committee.name}
              className="rounded-3xl border border-white/10 shadow-2xl overflow-hidden group"
            >
              <div
                className={`${committee.tone} p-8 min-h-[220px] flex flex-col justify-between transition-transform duration-300 group-hover:-translate-y-1`}
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/80">
                  <span>{committee.level}</span>
                  <span>IAFLMUN</span>
                </div>

                <div className="space-y-3 mt-6">
                  <h2 className="text-3xl font-semibold">{committee.name}</h2>
                  <p className="text-sm text-white/90 leading-relaxed">
                    {committee.theme}
                  </p>
                </div>
              </div>
              <div className="bg-black/20 backdrop-blur-sm px-8 py-5 text-sm text-white/80">
                Delegates receive curated study guides, expert mentorship, and
                a committee-specific social to deepen networking.
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

