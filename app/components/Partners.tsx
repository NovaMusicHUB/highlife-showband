"use client";

// ── Data ─────────────────────────────────────────────────────────────────────

const partners = [
  "Hotel InterContinental",
  "Marriott Bucharest",
  "Events by Prestige",
  "Catrina Events",
  "La Dolce Vita",
  "Crown Plaza",
];

// Duplicate for seamless infinite loop
const scrollPartners = [...partners, ...partners];

// ── Component ─────────────────────────────────────────────────────────────────

export default function Partners() {
  return (
    <section
      className="py-14 lg:py-16"
      style={{
        background: "#0d0d0d",
        borderTop: "1px solid rgba(201,168,76,0.06)",
        borderBottom: "1px solid rgba(201,168,76,0.06)",
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
            <div
              key={index}
              className="shrink-0 group cursor-default"
              style={{
                filter: "grayscale(1) opacity(0.35)",
                transition: "filter 0.3s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.filter =
                  "grayscale(0) opacity(0.9)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.filter =
                  "grayscale(1) opacity(0.35)")
              }
            >
              <div
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  color: "#f5f0e8",
                  whiteSpace: "nowrap",
                  padding: "0 8px",
                  borderBottom: "1px solid #c9a84c",
                  paddingBottom: "4px",
                }}
              >
                {partner}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
