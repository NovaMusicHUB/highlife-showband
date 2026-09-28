// Server Component — no 'use client' needed (CSS-only hover effects)

// ── Card data ────────────────────────────────────────────────────────────────

type EventCard = {
  title: string;
  image: string;
  /** CSS background-position — defaults to 'center' */
  bgPosition?: string;
  description: string;
};

const EVENT_CARDS: EventCard[] = [
  {
    title: "Nunți",
    image: "/images/nunti/nunta-01.jpg",
    bgPosition: "center 25%",
    description:
      "Transformăm nunta ta în povestea de dragoste pe care ai visat-o.",
  },
  {
    title: "Evenimente Corporate",
    image: "/images/kimaro/kimaro-06.jpg",
    bgPosition: "center 40%",
    description:
      "Profesionalism și energie pentru echipa ta — team building-uri și gale.",
  },
  {
    title: "Petreceri Private",
    image: "/images/nunti/nunta-08.jpg",
    bgPosition: "center 30%",
    description: "De la aniversări memorabile la petreceri tematice de lux.",
  },
  {
    title: "Botezuri",
    image: "/images/botez-grup.jpg",
    bgPosition: "center 25%",
    description: "Momente sfinte cu muzica potrivită, atmosferă caldă și emoționantă.",
  },
  {
    title: "Gale & Premii",
    image: "/images/kimaro/kimaro-08.jpg",
    bgPosition: "center 20%",
    description: "Eleganță și spectacol pentru serile de gală.",
  },
  {
    title: "Evenimente Publice",
    image: "/images/kimaro/kimaro-04.jpg",
    bgPosition: "center 35%",
    description:
      "Concerte și festivaluri de amploare — Highlife Showband pe scenele mari ale României.",
  },
];

// ── Component ────────────────────────────────────────────────────────────────

export default function EventTypes() {
  return (
    <section
      id="evenimente"
      className="py-24 lg:py-32"
      style={{ background: "#faf9f6" }}
    >
      <div className="section-container">
        {/* ── Section header ── */}
        <div className="max-w-2xl mb-16 lg:mb-20 reveal">
          <p className="eyebrow mb-5">Suntem acolo pentru tine</p>

          <h2
            className="font-display text-balance mb-0"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontWeight: 600,
              lineHeight: 1.15,
              color: "#191919",
            }}
          >
            Fiecare eveniment,{" "}
            <em className="text-accent not-italic">o experiență unică</em>
          </h2>
        </div>

        {/* ── Grid — uniform tiles, generous whitespace ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 lg:gap-y-16">
          {EVENT_CARDS.map((card, i) => (
            <div
              key={card.title}
              className={`reveal stagger-${(i % 3) + 1} group`}
            >
              <div
                className="relative overflow-hidden mb-5"
                style={{ aspectRatio: "4 / 5" }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="w-full h-full transition-transform duration-700 group-hover:scale-[1.04]"
                  style={{
                    objectFit: "cover",
                    objectPosition: card.bgPosition ?? "center",
                  }}
                />
              </div>
              <h3
                className="font-display mb-2"
                style={{ fontSize: "1.35rem", fontWeight: 600, color: "#191919" }}
              >
                {card.title}
              </h3>
              <p
                className="font-body text-sm max-w-xs"
                style={{ color: "rgba(25, 25, 25,0.58)", lineHeight: 1.65 }}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* ── Footer nudge ── */}
        <div className="mt-16 lg:mt-20 reveal">
          <p
            className="font-body text-lg max-w-xl mb-8"
            style={{ color: "rgba(25, 25, 25,0.6)", lineHeight: 1.7 }}
          >
            Alege Highlife Showband pentru un eveniment cu adevărat reușit —
            muzică live, energie și interacțiune care ridică atmosfera la
            nivelul următor.
          </p>
          <a href="#contact" className="btn-primary">
            <span>Solicită disponibilitate</span>
          </a>
        </div>
      </div>
    </section>
  );
}
