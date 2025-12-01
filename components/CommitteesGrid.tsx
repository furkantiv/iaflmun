"use client";

import { useState } from "react";
import CommitteeModal from "./CommitteeModal";

type Committee = {
  name: string;
  level: string;
  theme: string;
  tone: string;
  description: string;
  driveLink: string;
};

const committees: Committee[] = [
  {
    name: "DISEC",
    level: "GA-1",
    theme: "Maintaining peace amid emerging AI warfare",
    tone: "bg-gradient-to-br from-[#3a0000] to-[#781414]",
    description:
      "The Disarmament and International Security Committee addresses the critical challenges of maintaining global peace in an era where artificial intelligence transforms warfare. Delegates will navigate complex diplomatic negotiations around autonomous weapons systems, cybersecurity threats, and the ethical frameworks needed to prevent escalation.",
    driveLink: "https://drive.google.com",
  },
  {
    name: "LEGAL",
    level: "GA-6",
    theme: "Rebuilding resilient health systems post-crisis",
    tone: "bg-gradient-to-br from-[#4d1c00] to-[#b85c38]",
    description:
      "The Sixth Committee (Legal) focuses on the legal and institutional frameworks necessary for rebuilding health systems after global crises. Delegates will examine international health law, state responsibilities, and mechanisms for equitable access to medical resources in post-pandemic reconstruction.",
    driveLink: "https://drive.google.com",
  },
  {
    name: "SOCHUM",
    level: "GA-3",
    theme: "Safeguarding cultural heritage in the digital age",
    tone: "bg-gradient-to-br from-[#3a2f20] to-[#8c6b3d]",
    description:
      "The Social, Humanitarian and Cultural Committee explores how digital technologies can both preserve and threaten cultural heritage. Delegates will debate digital preservation strategies, combat cultural appropriation online, and develop frameworks for protecting indigenous knowledge in virtual spaces.",
    driveLink: "https://drive.google.com",
  },
  {
    name: "NATO",
    level: "SPECIAL",
    theme: "Financing climate adaptation for vulnerable nations",
    tone: "bg-gradient-to-br from-[#1f3a31] to-[#3d7761]",
    description:
      "This special committee brings together NATO member states to address climate adaptation funding mechanisms. Delegates will negotiate financial commitments, technological transfers, and cooperative frameworks to support vulnerable nations facing climate-related security challenges.",
    driveLink: "https://drive.google.com",
  },
  {
    name: "European Council",
    level: "SPECIAL",
    theme: "Cuban Missile Crisis — alternate realities",
    tone: "bg-gradient-to-br from-[#1b1b2f] to-[#53354a]",
    description:
      "Step into a historical crisis committee exploring alternate scenarios of the Cuban Missile Crisis. Delegates will navigate high-stakes diplomacy, intelligence gathering, and decision-making that could alter the course of history in this immersive crisis simulation.",
    driveLink: "https://drive.google.com",
  },
  {
    name: "Treaty of Lausanne",
    level: "CRISIS",
    theme: "Agenda item",
    tone: "bg-gradient-to-br from-[#2f1b2b] to-[#6a1e55]",
    description:
      "Welcome to the Treaty of Lausanne. In the years after World War I, the old Ottoman Empire lay in ruins. Foreign armies occupied its lands, and the harsh Treaty of Sèvres threatened to carve the country into pieces. Many believed the empire’s end was final. But in Anatolia, a new movement was rising. Led by Mustafa Kemal, Turkish nationalists refused to accept the partitioning of their homeland. They fought back, pushing out occupying forces and proving that the people of Turkey were not ready to surrender their future. By 1922, the world had changed. The victors of World War I realized they could no longer impose the old treaty. And so, in the quiet city of Lausanne, Switzerland, diplomats from the Allied powers and the new Turkish leadership gathered around negotiation tables. For months they argued, debated, and redrew maps.",
    driveLink: "https://drive.google.com",
  },
];

export default function CommitteesGrid() {
  const [selectedCommittee, setSelectedCommittee] = useState<Committee | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (committee: Committee) => {
    setSelectedCommittee(committee);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Reset selected committee after animation
    setTimeout(() => setSelectedCommittee(null), 200);
  };

  return (
    <>
      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {committees.map((committee) => (
          <button
            key={committee.name}
            onClick={() => handleCardClick(committee)}
            className="rounded-3xl border border-white/10 shadow-2xl overflow-hidden group text-left transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            <div
              className={`${committee.tone} p-8 min-h-[220px] flex flex-col justify-between transition-transform duration-300`}
            >
              <div className="flex items-center justify-between text-lg uppercase tracking-[0.3em] text-white/80">
                <span>{committee.level}</span>
                <span>IAFLMUN</span>
              </div>

              <div className="space-y-3 mt-6">
                <h2 className="text-5xl font-semibold">{committee.name}</h2>
                
              </div>
            </div>
            
          </button>
        ))}
      </div>

      <CommitteeModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        committee={selectedCommittee}
      />
    </>
  );
}

