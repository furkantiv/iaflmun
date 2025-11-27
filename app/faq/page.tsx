import FAQAccordion from "@/components/FAQAccordion";

const faqItems = [
  {
    question: "What are the conference dates?",
    answer:
      "IAFLMUN 2025 runs 12–14 December. Delegates should arrive on the evening of 11 December for registration and the welcome reception.",
  },
  {
    question: "Is housing provided?",
    answer:
      "Yes, partner hotels within walking distance of the venue offer discounted packages. Host-family placements are limited and prioritized for international delegations.",
  },
  {
    question: "How can I apply for financial aid?",
    answer:
      "Submit the scholarship addendum during registration. We request a recommendation letter and a short personal statement to match you with available grants.",
  },
  {
    question: "Do I need prior MUN experience?",
    answer:
      "Beginners are encouraged! Our mentorship pods and moderated trainings ensure everyone feels ready before the first session gavels in.",
  },
  {
    question: "Will sessions be hybrid or in-person?",
    answer:
      "All committees are in-person to protect the boutique experience. Select panels and keynotes will be streamed for registered guests.",
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

