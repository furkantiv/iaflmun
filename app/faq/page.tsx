import FAQAccordion from "@/components/FAQAccordion";

const faqItems = [
  {
    question: "What are the official rules of procedure (RoP) of IAFLMUN?",
    answer:
      "IAFLMUN will follow the HarvardMUN",
  },
  {
    question: "Is IAFLMUN suitable for the non-experienced?",
    answer:
      "Yes, partner hotels within walking distance of the venue offer discounted packages. Host-family placements are limited and prioritized for international delegations.",
  },
  {
    question: "Is it mandatory to participate in all the sessions?",
    answer:
      "No, you can be absent for 2 sessions. If you were absent for 3 sessions, you won't be receiving an award, if you were absent for 4 sessions, you won't receive a participation certificate.",
  },
  {
    question: "What is the dress code?",
    answer:
      "Our dress code is Western Business Attire.",
  },
  {
    question: "Where will the conference be held?",
    answer:
      "At Istanbul Medeniyet University Goztepe, North Campus. You can find more information about the address at the venue page.",
  },
  {
    question: "Will there be accommodation provided?",
    answer:
      "No, unfortunately there won’t be any accommodation provided.",
  },
  {
    question: "Are international students allowed to apply?",
    answer:
      "No, unfortunately. We are currently unable to accept applications from outside Turkiye..",
  },
  {
    question: "How can we learn more about the conference?",
    answer:
      "You can contact us via e-mail for any further questions through the e-mail address provided in the contact us section.",
  },
];

export const metadata = {
  title: "IAFLMUN | FAQ",
  description:
    "Find answers about IAFLMUN logistics, housing, scholarships, and expectations.",
};

export default function FAQPage() {
  return (
    <main className="page-shell page-shell--sand py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <p className="section-label">FAQ</p>
          <h1 className="section-title">Answers before you pack</h1>
          <p className="section-subtitle">
            Still unsure about something? Browse the accordion or reach our team
            via the contact page.
          </p>
        </div>

        <FAQAccordion items={faqItems} />
      </div>
    </main>
  );
}

