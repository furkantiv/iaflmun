export const metadata = {
  title: "IAFLMUN | Venue",
  description:
    "Find the location of IAFLMUN 2025 conference venue in Istanbul.",
};

export default function VenuePage() {
  // Replace this with your actual venue address
  const venueAddress = "Ünalan Mah. Ünalan Sok, Karayolu Yanyolu D-100, 34700 Üsküdar/İstanbul";
  const venueName = "Istanbul Medeniyet University Goztepe North Campus";

  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.3823942974986!2d29.06802417652825!3d40.99500282024148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac7e8ef4926dd%3A0xcd46d65a8527b123!2sIstanbul%20Medeniyet%20%C3%9Cniversitesi%20Kuzey%20Kamp%C3%BCs-%20Rekt%C3%B6rl%C3%BCk!5e0!3m2!1str!2str!4v1764532826299!5m2!1str!2str`;

  return (
    <main className="py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <section className="text-center space-y-4">
          <h1 className="section-title">VENUE</h1>
          <p className="section-subtitle text-base md:text-lg max-w-3xl mx-auto">
          Our conference will take place in...
          </p>
        </section>

        <section className="space-y-8">
          {/* Venue Information Card */}
          <div className="rounded-[40px] bg-[#3a0000] text-[#f5eadd] p-8 md:p-10 space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                {venueName}
              </h2>
              <p className="text-base md:text-lg leading-relaxed opacity-90">
                {venueAddress}
              </p>
            </div>
            
          </div>

          {/* Google Maps Embed */}
          <div className="rounded-[40px] overflow-hidden shadow-2xl">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  border: 0,
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="IAFLMUN 2025 Venue Location"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Additional Information */}
          
            <div className="surface-card p-6 space-y-3">
              <h3 className="text-xl font-semibold text-[#3a0000]">
                Public Transportation
              </h3>
              <p className="text-sm text-[#2a0505] opacity-75 leading-relaxed">
                The venue is accessible via metro, bus, and ferry lines. 
                Specific route information will be shared with registered delegates.
              </p>
            

            
          </div>
        </section>
      </div>
    </main>
  );
}

