"use client";

import { useState } from "react";
import Image from "next/image";
import CommitteeModal from "./CommitteeModal";
import { asset } from "@/lib/assets";

type Committee = {
  name: string;
  level: string;
  theme: string;
  tone: string;
  image: string;
  description: string;
  driveLink: string;
};

const committees: Committee[] = [
  {
    name: "DISEC",
    level: "GA-1",
    theme: "Establishing International Legal Norms for Artificial Intelligence in Armed Conflict",
    tone: "bg-gradient-to-br from-[#3a0000] to-[#781414]",
    image: asset("/images/committees/disec.jpg"),
    description:
      "The Disarmament and International Security Committee (GA-1 DISEC) is the First Committee of the United Nations General Assembly, therefore it is also referred to as “the First Committee”. The United Nations General Assembly website presents the scope of actions as: “…all disarmament and international security matters within the scope of the Charter or relating to the powers and functions of any other organ of the United Nations; the general principles of cooperation in the maintenance of international peace and security, as well as principles governing disarmament and the regulation of armaments.” The General Assembly adopts resolutions that are not legally-binding, therefore member states do not have a legal obligation to comply with the contents of the document. Nevertheless, the General Assembly, of which DISEC is a sub-committee, holds an important position and has a significant effect on world politics and states’ perceptions.Directly proportional to technological developments, the prevalence of Artificial Intelligence increases day by day and becomes a bigger part of human life. AI has multiple beneficial aspects from basic problem solving, analyzing data to being in war instead of humankind. This situation raises questions regarding conflict norms and human rights. At this point, in history, the necessity of new legal norms  is an inevitable fact.",
    driveLink: "https://drive.google.com/file/d/1b-kIMmj9V-iKXUZK2O__PAKCPnTyrwJr/view?usp=sharing",
  },
  {
    name: "LEGAL",
    level: "GA-6",
    theme: "International Legal Standards on Human Germline Genetic Modification in Embryos",
    tone: "bg-gradient-to-br from-[#4d1c00] to-[#b85c38]",
    image: asset("/images/committees/legal.jpg"),
    description:
      "As​‍​‌‍​‍‌ the main forum for the United Nations system to discuss international legal issues, the UN General Assembly's Sixth Committee is the Legal Committee. It was one of the new organs of the UN General Assembly, created in 1947. The Committee has been established to address the subsequent need for a body responsible for overseeing the development, interpretation, and codification of international law. Over the years, it has become a major pillar of the international legal system, offering Member States the possibility to review existing legal instruments, to present their ideas for reforms as well as to examine new legal challenges. The topics of their work range from treaty law, state responsibility, international criminal justice, law of the sea, counter-terrorism to protection of civilians. By arranging detailed legal debates, the Sixth Committee supports the implementation of international law in a way that it stays feasible, logical, and compatible with global changes that are very rapid. The Sixth Committee is not the political organ where negotiations take place; rather, it is the most concentrated unit of the UN dealing with legal arguments, scrutinizing the law very strictly, and finding common ground concerning international ​‍​‌‍​‍‌obligations.",
    driveLink: "https://drive.google.com/file/d/1E5kKPaxoqlDosg_bqB_OQcBBdFunE3Rx/view?usp=sharing",
  },
  {
    name: "SOCHUM",
    level: "GA-3",
    theme: "Addressing the balance of cybersecurity measures and cyber freedom.",
    tone: "bg-gradient-to-br from-[#3a2f20] to-[#8c6b3d]",
    image: asset("/images/committees/soc.jpg"),
    description:
      "The Social, Humanitarian and Cultural Committee, which is also known as the Third Committee of the United Nations, was established in response to the Universal Declaration of Human Rights, in 1945. The right to life, cultural expression, political participation, children's rights protection, and social development are just a few of the fundamental freedoms and ideals that the Third Committee works to uphold and promote for the benefit of the entire world. In this committee, delegates will have debates on topics such as implementing nationwide cybersecurity measures and the extent of these measures, ensuring that measures do not violate privacy rights, and actions to be taken when digital rights are breached.",
    driveLink: "https://drive.google.com/file/d/1UzG6rtPQfDCYg3LsiHho7tbGqGG4WikV/view?usp=drive_link",
  },
  {
    name: "NATO",
    level: "SPECIAL",
    theme: "Reassessing NATO’s Nuclear Deterrence Policy Amidst Rising Global Security Challenges",
    tone: "bg-gradient-to-br from-[#1f3a31] to-[#3d7761]",
    image: asset("/images/committees/nato.jpg"),
    description:
      "Formed in 1949 with the signing of the Washington Treaty, NATO is a security alliance of 32 countries from North America and Europe. NATO’s fundamental goal is to safeguard the Allies’ freedom and security by political and military means, which entails renewing defence mechanisms and sustainable deterrence policies against rising worldwide threats, as NATO remains the principal security instrument of the transatlantic community.In this committee, delegates must fully grasp the significance of the nuclear policies' broad effects, requiring a new focus on the resilience of NATO's nuclear sharing arrangements against systemic and asymmetric global threats.",
    driveLink: "https://drive.google.com/file/d/1TmVrNXjDwMY6WK7QKxMOBdGF0LlvcP22/view?usp=sharing",
  },
  {
    name: "European Council",
    level: "SPECIAL",
    theme: "Strengthening the Protection of European Union Citizens Through GDPR",
    tone: "bg-gradient-to-br from-[#1b1b2f] to-[#53354a]",
    image: asset("/images/committees/euc.jpg"),
    description:
      "The Council of European Union, which is often referred to simply as ‘the Council 'is a key decision-maker in the European Union. The council consists of  the ministers of the 27 European Union countries. The Council negotiates and adopts European Union legislation and coordinates certain policies. The council councludes agreements and helps adopting the European Union’s budget. In this committee, the delegates will try to find further solutions for European Union citizens' data security by establishing new legislation & updating the GDPR reform and the Cross Border Data Enforcement Mechanisms.",
    driveLink: "https://drive.google.com/file/d/18PF0a3usTv0Qtk6C2HBEKb1R54_m1nwi/view?usp=sharing",
  },
  {
    name: "Treaty of Lausanne",
    level: "CRISIS",
    theme: "Agenda item",
    tone: "bg-gradient-to-br from-[#2f1b2b] to-[#6a1e55]",
    image: asset("/images/committees/treaty.jpg"),
    description:
      "The year was 1922, and the embers of a fallen empire still smoked across Anatolia. Europe’s great powers circled the region like wary predators, each guarding its own interests as maps were redrawn and borders trembled. In the heart of Ankara, a new Turkish leadership with determination, prepared for its final diplomatic battle. Across the sea, in the Swiss city of Lausanne, grand halls were swept and polished, soon to echo with the clash of pens instead of swords. Delegates arrived under gray skies, carrying the weight of nations on their shoulders. Their mission was anything but peaceful: to negotiate the fate of a land reborn through fire.It was here, on the edge of winter and history, that the final chapter of the War of Independence would be written, not in trenches this time, but across negotiating tables where every signature could shift the balance of power. The Treaty of Lausanne was not just an agreement; it was the last battle.",
    driveLink: "https://drive.google.com/file/d/1U6NvEr9E5OlTUpAkKHUIf7pD9uMKZI54/view?usp=sharing",
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
              className={`${committee.tone} min-h-[220px] flex flex-col justify-between transition-transform duration-300 relative overflow-hidden`}
            >
              <Image src={committee.image} alt={committee.name} width={100} height={100} priority className="w-full opacity-30 h-full object-cover absolute top-0 left-0 z-0" />
              <div className="absolute bottom-0 left-0 w-full h-full bg-black/50 p-4">
                <div className="flex items-center justify-between text-lg uppercase tracking-[0.3em] text-white/80">
                  <span>{committee.level}</span>
                  <span>IAFLMUN</span>
                </div>
                <div className="space-y-3 mt-6">
                  <h2 className="text-5xl font-semibold">{committee.name}</h2>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      <CommitteeModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        committee={selectedCommittee}
        image={selectedCommittee?.image}
      />
    </>
  );
}

