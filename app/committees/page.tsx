import CommitteesGrid from "@/components/CommitteesGrid";

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
          Our Committees
          </h1>
        </div>
        <CommitteesGrid />
      </div>
    </main>
  );
}

