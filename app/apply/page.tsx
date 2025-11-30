export const metadata = {
  title: "IAFLMUN | Apply Now",
  description:
    "Choose your participation package and apply to join IAFLMUN 2025. Packages available for Delegates, Chairs, Press Corps, Observers, and Crisis Staff.",
};

type Package = {
  name: string;
  price: string;
  formUrl: string;
};

const packages: Package[] = [
  {
    name: "Delegate",
    price: "1.200₺",
    formUrl: "https://forms.google.com/your-form-url-delegate",
  },
  {
    name: "Delegation",
    price: "1.150₺",
    formUrl: "https://forms.google.com/your-form-url-chair",
  },
  {
    name: "Press",
    price: "800₺",
    formUrl: "https://forms.google.com/your-form-url-press",
  },
  {
    name: "Administrative Staff",
    price: "800₺",
    formUrl: "https://forms.google.com/your-form-url-observer",
  },
  {
    name: "Chairboard Member",
    price: "800₺",
    formUrl: "https://forms.google.com/your-form-url-crisis",
  },
];

export default function ApplyPage() {
  return (
    <main className="page-shell page-shell--sand py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="section-title">Apply as a
          </h1>
        </div>

        {/* Packages Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 text-center">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="surface-card surface-card--tint p-8 flex flex-col"
            >
              <div className="mb-6">
                
                <h3 className="text-2xl font-semibold text-[#3a0000] mb-2">
                  {pkg.name}
                </h3>
                
                <div className="text-4xl font-bold text-[#5a0000] mb-6">
                  {pkg.price}
                </div>
              </div>

              <a
                href={pkg.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[#5a0000] hover:bg-[#4a0000] text-[#f5eadd] px-6 py-3 rounded-2xl font-semibold transition-colors"
              >
                Apply
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}