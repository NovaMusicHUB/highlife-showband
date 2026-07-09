// Server Component — no 'use client' needed (CSS-only hover effects)

import type { ReactNode } from "react";

// ── Inline SVG icons (20×20) ─────────────────────────────────────────────────

const HeartIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M10 16.5C10 16.5 3.5 12 3.5 7.5C3.5 5.29 5.29 3.5 7.5 3.5C8.72 3.5 9.82 4.1 10.5 5.02C11.18 4.1 12.28 3.5 13.5 3.5C15.71 3.5 17.5 5.29 17.5 7.5C17.5 12 10 16.5 10 16.5Z"
      fill="#c9a84c"
    />
  </svg>
);

const BriefcaseIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
  >
    <rect
      x="2"
      y="7"
      width="16"
      height="10"
      rx="1.5"
      stroke="#c9a84c"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M7 7V5.5C7 4.67 7.67 4 8.5 4H11.5C12.33 4 13 4.67 13 5.5V7"
      stroke="#c9a84c"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line x1="2" y1="12" x2="18" y2="12" stroke="#c9a84c" strokeWidth="1.5" />
  </svg>
);

const SparkleIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M10 2L12.09 7.26L17.73 7.64L13.65 11.22L15 16.73L10 13.77L5 16.73L6.35 11.22L2.27 7.64L7.91 7.26L10 2Z"
      fill="#c9a84c"
    />
  </svg>
);

const FlowerIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="10" cy="10" r="2.5" fill="#c9a84c" />
    <ellipse cx="10" cy="4.5" rx="1.8" ry="2.5" fill="#c9a84c" opacity="0.7" />
    <ellipse cx="10" cy="15.5" rx="1.8" ry="2.5" fill="#c9a84c" opacity="0.7" />
    <ellipse cx="4.5" cy="10" rx="2.5" ry="1.8" fill="#c9a84c" opacity="0.7" />
    <ellipse cx="15.5" cy="10" rx="2.5" ry="1.8" fill="#c9a84c" opacity="0.7" />
  </svg>
);

const TrophyIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M6 3H14V10.5C14 13.1 12.21 14.5 10 14.5C7.79 14.5 6 13.1 6 10.5V3Z"
      stroke="#c9a84c"
      strokeWidth="1.5"
      fill="none"
    />
    <path d="M4 5H6" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" />
    <path
      d="M14 5H16"
      stroke="#c9a84c"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M4 5C4 8 5.5 8.5 6 9"
      stroke="#c9a84c"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M16 5C16 8 14.5 8.5 14 9"
      stroke="#c9a84c"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="10"
      y1="14.5"
      x2="10"
      y2="17"
      stroke="#c9a84c"
      strokeWidth="1.5"
    />
    <path
      d="M7 17H13"
      stroke="#c9a84c"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const ZapIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M11.5 2.5L4.5 11H10.5L9 17.5L16.5 9H10.5L11.5 2.5Z"
      fill="#c9a84c"
    />
  </svg>
);

// ── Card data ────────────────────────────────────────────────────────────────

type EventCard = {
  title: string;
  image: string;
  /** CSS background-position — defaults to 'center' */
  bgPosition?: string;
  description: string;
  icon: ReactNode;
  /** Tailwind col-span responsive classes */
  colClass: string;
  /** Tailwind height responsive classes */
  heightClass: string;
};

const EVENT_CARDS: EventCard[] = [
  {
    title: "Nunți",
    image: "/images/nunti/nunta-01.jpg",
    bgPosition: "center 25%",
    description:
      "Transformăm nunta ta în povestea de dragoste pe care ai visat-o. De la primul dans până la ultima piesă.",
    icon: HeartIcon,
    colClass: "sm:col-span-2 lg:col-span-2",
    heightClass: "h-[320px] lg:h-[360px]",
  },
  {
    title: "Evenimente Corporate",
    image: "/images/kimaro/kimaro-06.jpg",
    bgPosition: "center 40%",
    description:
      "Profesionalism și energie pentru echipa ta. Creăm atmosfera perfectă pentru team building-uri și gale.",
    icon: BriefcaseIcon,
    colClass: "lg:col-span-2",
    heightClass: "h-[260px]",
  },
  {
    title: "Petreceri Private",
    image: "/images/nunti/nunta-08.jpg",
    bgPosition: "center 30%",
    description: "De la aniversari memorabile la petreceri tematice de lux.",
    icon: SparkleIcon,
    colClass: "lg:col-span-2",
    heightClass: "h-[260px]",
  },
  {
    title: "Botezuri",
    image: "/images/botez-grup.jpg",
    bgPosition: "center 25%",
    description:
      "Momente sfinte cu muzica potrivită. Creăm o atmosferă căldă și emoționantă.",
    icon: FlowerIcon,
    colClass: "sm:col-span-2 lg:col-span-3",
    heightClass: "h-[260px]",
  },
  {
    title: "Gale & Premii",
    image: "/images/kimaro/kimaro-08.jpg",
    bgPosition: "center 20%",
    description:
      "Eleganță și spectacol pentru serile de gală și ceremoniile de premiere.",
    icon: TrophyIcon,
    colClass: "lg:col-span-1",
    heightClass: "h-[260px]",
  },
  {
    title: "Evenimente Publice",
    image: "/images/kimaro/kimaro-04.jpg",
    bgPosition: "center 35%",
    description:
      "Concerte, festivaluri și evenimente publice de amploare. Highlife Showband pe scenele mari ale României.",
    icon: ZapIcon,
    colClass: "sm:col-span-2 lg:col-span-2",
    heightClass: "h-[260px]",
  },
];

// ── Component ────────────────────────────────────────────────────────────────

export default function EventTypes() {
  return (
    <section id="evenimente" className="bg-dark py-20 lg:py-32">
      <div className="section-container">
        {/* ── Section header ── */}
        <div className="text-center mb-14">
          <p className="eyebrow mb-4">Suntem acolo pentru tine</p>

          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-champagne text-balance mb-6"
            style={{ lineHeight: 1.1 }}
          >
            Fiecare eveniment,{" "}
            <em className="text-gold-gradient not-italic">
              o experiență unică
            </em>
          </h2>

          <hr className="gold-rule mt-8 max-w-xs mx-auto" />
        </div>

        {/* ── Bento grid ── */}
        {/*
          Desktop (lg): 6-column bento
            Row 1: Nunți (2) | Corporate (2) | Petreceri (2) — equal width, varied height
            Row 2: Botezuri (3) | Gale (1) | Lansări (2) — asymmetric
          Mobile: 1 column; SM: 2 columns
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
          {EVENT_CARDS.map((card) => (
            <div
              key={card.title}
              className={`relative overflow-hidden group cursor-pointer ${card.colClass} ${card.heightClass}`}
            >
              {/* ── Background image — isolated in own div so CSS filter doesn't bleed onto text ── */}
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('${card.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: card.bgPosition ?? "center",
                  // Uniform brightness & warm-neutral grade across all 6 event photos
                  filter:
                    "brightness(1.32) contrast(0.93) saturate(0.78) sepia(0.07)",
                }}
                aria-hidden="true"
              />

              {/* Dark cinematic overlay — always present */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.28) 55%, transparent 100%)",
                }}
                aria-hidden="true"
              />

              {/* Gold sheen — revealed on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "rgba(201,168,76,0.12)" }}
                aria-hidden="true"
              />

              {/* Gold top-left corner accent */}
              <div
                className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                aria-hidden="true"
              >
                <div
                  style={{
                    width: "24px",
                    height: "1px",
                    background: "#c9a84c",
                    marginBottom: "3px",
                  }}
                />
                <div
                  style={{
                    width: "1px",
                    height: "24px",
                    background: "#c9a84c",
                  }}
                />
              </div>

              {/* Content block — rests at bottom, lifts gently on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                {/* Icon */}
                <div className="mb-2">{card.icon}</div>

                {/* Title */}
                <h3 className="font-display text-xl lg:text-2xl font-bold text-champagne mb-1">
                  {card.title}
                </h3>

                {/* Description — slides in on hover */}
                <p
                  className="font-body text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden max-h-0 group-hover:max-h-20"
                  style={{ color: "rgba(245, 240, 232, 0.72)" }}
                >
                  {card.description}
                </p>

                {/* CTA arrow */}
                <div
                  className="flex items-center gap-1.5 text-xs tracking-widest uppercase mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: "#c9a84c" }}
                >
                  <span className="font-body font-semibold">Află mai mult</span>
                  <span aria-hidden="true">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Footer nudge + paragraf 4 de brand ── */}
        <div className="mt-14 text-center">
          <p
            className="font-serif italic text-lg md:text-xl max-w-2xl mx-auto mb-8"
            style={{ color: "rgba(245,240,232,0.55)", lineHeight: 1.8 }}
          >
            Alege Highlife Showband pentru un eveniment cu adevărat reuşit
            &mdash; muzică live, energie şi interacțiune care ridică atmosfera
            la nivelul următor.
          </p>
          <a href="#contact" className="btn-gold">
            <span>Solicită disponibilitate</span>
          </a>
        </div>
      </div>
    </section>
  );
}
