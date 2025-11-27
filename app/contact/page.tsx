export const metadata = {
  title: "IAFLMUN | Contact",
  description:
    "Reach the IAFLMUN Secretariat for registration, partnerships, or press inquiries.",
};

export default function ContactPage() {
  return (
    <main className="page-shell page-shell--dark py-16 px-6">
      <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <section className="space-y-6">
          <p className="section-label section-label--light">CONTACT</p>
          <h1 className="section-title section-title--light">
            Let’s craft your IAFLMUN experience
          </h1>
          <p className="section-subtitle section-subtitle--light">
            Secretariat office hours run Monday–Friday, 10:00–18:00 (GMT+3).
            Expect a reply within two business days.
          </p>

          <div className="space-y-4 surface-card surface-card--frosted p-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#f5eadd]/60">
                Email
              </p>
              <p className="mt-1 text-lg font-medium">secretariat@iaflmun.org</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#f5eadd]/60">
                Phone / WhatsApp
              </p>
              <p className="mt-1 text-lg font-medium">+90 212 555 00 00</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#f5eadd]/60">
                Address
              </p>
              <p className="mt-1 text-lg font-medium">
                Rumeli Hisarı Caddesi 12, Sarıyer <br />
                Istanbul, Türkiye
              </p>
            </div>
          </div>
        </section>

        <section className="surface-card bg-white text-[#3a0000] p-8 space-y-6">
          <h2 className="text-2xl font-semibold">Send us a message</h2>
          <form className="space-y-5">
            <div>
              <label className="text-sm font-semibold">Full Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="mt-2 w-full rounded-2xl border border-[#3a0000]/15 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5a0000]/40"
              />
            </div>
            <div>
              <label className="text-sm font-semibold">Email</label>
              <input
                type="email"
                placeholder="name@email.com"
                className="mt-2 w-full rounded-2xl border border-[#3a0000]/15 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5a0000]/40"
              />
            </div>
            <div>
              <label className="text-sm font-semibold">Message</label>
              <textarea
                rows={5}
                placeholder="How can we help?"
                className="mt-2 w-full rounded-2xl border border-[#3a0000]/15 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5a0000]/40 resize-none"
              />
            </div>
            <button
              type="button"
              className="w-full bg-[#5a0000] text-[#f5eadd] rounded-2xl py-3 font-semibold tracking-wide hover:bg-[#6d0c0c] transition-colors"
            >
              Submit Inquiry
            </button>
          </form>
          <p className="text-xs text-[#3a0000]/60">
            By submitting, you agree to be contacted about IAFLMUN updates. We
            will never share your information outside the Secretariat.
          </p>
        </section>
      </div>
    </main>
  );
}

