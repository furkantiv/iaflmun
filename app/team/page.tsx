import Image from "next/image";
import { asset } from "@/lib/assets";

const teamMembers = [
  {
    name: "Melek Mamar",
    role: "Secretary-General",
    photo: asset("/images/team/placeholder.svg"),
    bio: "Melek Mamar is the Secretary-General of IAFLMUN. She is a student at the University of Istanbul and a member of the IAFLMUN team. She is passionate about diplomacy and international relations.",
  },
  {
    name: "Ada Kahraman",
    role: "Secretary General",
    photo: asset("/images/team/placeholder.svg"),
    bio: "Ada Kahraman is the Secretary General of IAFLMUN. She is a student at the University of Istanbul and a member of the IAFLMUN team. She is passionate about diplomacy and international relations.",
  },
  {
    name: "Berra Can",
    role: "Director General",
    photo: asset("/images/team/placeholder.svg"),
    bio: "Berra Can is the Director General of IAFLMUN. She is a student at the University of Istanbul and a member of the IAFLMUN team. She is passionate about diplomacy and international relations.",
  },
  {
    name: "Zeynep Yıldız",
    role: "Deputy Secretary General",
    photo: asset("/images/team/placeholder.svg"),
    bio: "Zeynep Yıldız is the Deputy Secretary General of IAFLMUN. She is a student at the University of Istanbul and a member of the IAFLMUN team. She is passionate about diplomacy and international relations.",
  },
  {
    name: "Gamze Elif Kanat",
    role: "Head of Public Relations",
    photo: asset("/images/team/placeholder.svg"),
    bio: "Gamze Elif Kanat is the Head of Public Relations of IAFLMUN. She is a student at the University of Istanbul and a member of the IAFLMUN team. She is passionate about diplomacy and international relations.",
  },
  {
    name: "Begüm Tekin",
    role: "Deputy Head of Public Relations",
    photo: asset("/images/team/placeholder.svg"),
    bio: "Begüm Tekin is the Deputy Head of Public Relations of IAFLMUN. She is a student at the University of Istanbul and a member of the IAFLMUN team. She is passionate about diplomacy and international relations.",
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
          
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="surface-card surface-card--tint overflow-hidden flex flex-col"
            >
              

              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-2xl font-semibold text-[#3a0000]">
                  {member.name}
                </h2>
                <p className="mt-2 text-sm font-medium uppercase tracking-wide text-[#5a0000]/80">
                  {member.role}
                </p>
               {/* <p className="mt-2 text-sm text-[#5a0000]/80">
                  {member.bio}
                </p> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

