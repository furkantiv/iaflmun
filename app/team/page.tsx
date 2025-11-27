import Image from "next/image";

const teamMembers = [
  {
    name: "Aylin Demir",
    role: "Secretary-General",
    photo: "/images/team/placeholder.svg",
  },
  {
    name: "Kerem Yildiz",
    role: "Director-General",
    photo: "/images/team/placeholder.svg",
  },
  {
    name: "Selin Kara",
    role: "Head of Academics",
    photo: "/images/team/placeholder.svg",
  },
  {
    name: "Mert Can",
    role: "Head of Logistics",
    photo: "/images/team/placeholder.svg",
  },
  {
    name: "Deniz Acar",
    role: "Head of Public Relations",
    photo: "/images/team/placeholder.svg",
  },
  {
    name: "Naz Sönmez",
    role: "Head of Finance",
    photo: "/images/team/placeholder.svg",
  },
];

export const metadata = {
  title: "IAFLMUN | Our Team",
  description:
    "Meet the passionate IAFLMUN organizing team bringing the conference to life.",
};

export default function TeamPage() {
  return (
    <main className="page-shell py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <p className="section-label">OUR TEAM</p>
          <h1 className="section-title">The Faces Behind IAFLMUN</h1>
          <p className="section-subtitle text-base md:text-lg max-w-2xl mx-auto">
            A collective of driven students shaping an immersive diplomatic
            experience. Each card highlights a lead member of our Secretariat.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="surface-card surface-card--tint overflow-hidden flex flex-col"
            >
              <div className="relative w-full aspect-[4/3] bg-[#5a0000]/5">
                <Image
                  src={member.photo}
                  alt={`${member.name} headshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#000]/0 to-[#000]/30" />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-2xl font-semibold text-[#3a0000]">
                  {member.name}
                </h2>
                <p className="mt-2 text-sm font-medium uppercase tracking-wide text-[#5a0000]/80">
                  {member.role}
                </p>
                <p className="mt-4 text-sm text-[#5a0000]/70">
                  Passionate about diplomacy, innovation, and creating memorable
                  conference experiences for every delegate.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

