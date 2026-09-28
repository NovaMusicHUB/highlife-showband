// ── Data ─────────────────────────────────────────────────────────────────────

const partners = [
  "Hotel InterContinental",
  "Marriott Bucharest",
  "Events by Prestige",
  "Catrina Events",
  "La Dolce Vita",
  "Crown Plaza",
  "KIMARO · Kiss FM",
];

// Duplicate for seamless infinite loop
const scrollPartners = [...partners, ...partners];

// ── Component ─────────────────────────────────────────────────────────────────

export default function Partners() {
  return (
    <section
      className="py-14 lg:py-16"
      style={{
        background: "#ffffff",
        borderTop: "1px solid #e8e4da",
        borderBottom: "1px solid #e8e4da",
      }}
    >
      {/* Eyebrow heading */}
      <div className="text-center mb-10">
        <p className="eyebrow">Parteneri de încredere</p>
      </div>

      {/* Infinite scroll strip */}
      <div className="overflow-hidden" aria-label="Partenerii noștri">
        <div
          className="flex gap-16 lg:gap-24 animate-infinite-scroll"
          style={{ width: "max-content" }}
        >
          {scrollPartners.map((partner, index) => (
            <div key={index} className="shrink-0">
              <span
                className="font-display"
                style={{
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "rgba(25, 25, 25, 0.4)",
                  whiteSpace: "nowrap",
                }}
              >
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
