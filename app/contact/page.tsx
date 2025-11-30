export const metadata = {
  title: "IAFLMUN | Contact",
  description:
    "Reach the IAFLMUN Secretariat for registration, partnerships, or press inquiries.",
};

export default function ContactPage() {
  return (
    <main className="page-shell page-shell--dark py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <section className="space-y-6">
          <p className="section-label section-label--light">CONTACT</p>
          <h1 className="section-title section-title--light">
            Contact Us
          </h1>
          
          <div className="space-y-4 surface-card surface-card--frosted p-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#f5eadd]/60">
                Email
              </p>
              <p className="mt-1 text-lg font-medium">iaflmun2582@gmail.com</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#f5eadd]/60">
                Address
              </p>
              <p className="mt-1 text-lg font-medium">
              Ünalan Mah. Ünalan Sok, Karayolu Yanyolu D-100, 34700 Üsküdar/İstanbul
              </p>
            </div>
          </div>
        </section>

        
      </div>
    </main>
  );
}

