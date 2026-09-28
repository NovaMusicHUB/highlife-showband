"use client";

import { useState, useEffect } from "react";

// ── Data ─────────────────────────────────────────────────────────────────────

const testimonials = [
  {
    quote:
      "Sincer nu știam la ce să mă aștept, dar băieții ăștia ne-au luat prin surprindere. Toată nunta a dansat, inclusiv socrii mari care ziceau că nu dansează niciodată. A fost incredibil!",
    name: "Ioana & Cristi Moldovan",
    event: "Nuntă",
    date: "Aprilie 2025",
    rating: 5,
  },
  {
    quote:
      "Botezul Sofiei a ieșit exact cum ne-am dorit. Au cântat liniștit la început când dormea și au ridicat energia când era momentul. Nu trebuia să le explic nimic, simțeau singuri.",
    name: "Andreea Rusu",
    event: "Botez",
    date: "Februarie 2025",
    rating: 5,
  },
  {
    quote:
      "Nunta noastră a fost în mai și până acum prietenii tot îmi scriu că a fost cea mai tare nuntă la care au fost. Highlife a ținut ringul plin de la 10 seara până la 4 dimineața.",
    name: "Diana & Andrei Florescu",
    event: "Nuntă",
    date: "Mai 2025",
    rating: 5,
  },
  {
    quote:
      "Am luat Highlife la botezul băiețelului și a fost o decizie foarte bună. Au știut exact când să cânte mai încet și când să dea drumul la dans. Oaspeții au plecat super mulțumiți.",
    name: "Mirela Dănilă",
    event: "Botez",
    date: "Martie 2025",
    rating: 5,
  },
  {
    quote:
      "Ne-am căsătorit în iunie și tot ce pot să zic e că Highlife a fost cea mai bună investiție din toată nunta. Nici măcar nu ne-am gândit la muzică toată seara, pur și simplu am dansat.",
    name: "Raluca & Bogdan Ionescu",
    event: "Nuntă",
    date: "Iunie 2025",
    rating: 5,
  },
];

// ── Structured data — real reviews shown on this page, for rich snippets ──────

const averageRating = (
  testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
).toFixed(1);

const reviewJsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "Highlife Showband",
  url: "https://highlifeshowband.ro",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: averageRating,
    reviewCount: testimonials.length,
  },
  review: testimonials.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    datePublished: t.date,
    reviewBody: t.quote,
    reviewRating: {
      "@type": "Rating",
      ratingValue: t.rating,
      bestRating: 5,
    },
  })),
};

// ── Component ─────────────────────────────────────────────────────────────────

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  function prev() {
    setActiveIndex((p) => (p - 1 + testimonials.length) % testimonials.length);
  }

  function next() {
    setActiveIndex((p) => (p + 1) % testimonials.length);
  }

  // Fallback previne crash-ul dacă activeIndex rămâne temporar în afara
  // intervalului valid (ex. la hot-reload când se schimbă lista de testimoniale).
  const current = testimonials[activeIndex] ?? testimonials[0];

  return (
    <section id="testimoniale" className="py-24 lg:py-32" style={{ background: "#ffffff" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
      />
      <div className="section-container">
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="text-center mb-16 reveal">
          <p className="eyebrow mb-5">Cuvintele Clienților Noștri</p>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 600, color: "#191919" }}
          >
            Ce spun despre noi
          </h2>
        </div>

        {/* ── Carousel ───────────────────────────────────────────────────── */}
        <div className="relative max-w-2xl mx-auto text-center">
          <div key={activeIndex} className="animate-fade-in" style={{ animationDuration: "0.4s" }}>
            {/* Stars */}
            <div className="stars mb-6 justify-center" aria-label="5 din 5 stele">
              {[...Array(current.rating)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 16 16" fill="#8a7454" aria-hidden="true">
                  <path d="M8 1 L9.8 6H15L10.6 9L12.4 14L8 11L3.6 14L5.4 9L1 6H6.2Z" />
                </svg>
              ))}
            </div>

            {/* Quote text */}
            <blockquote
              className="font-display italic leading-relaxed mb-8"
              style={{ fontSize: "clamp(1.35rem, 2.6vw, 1.8rem)", fontWeight: 500, color: "#191919" }}
            >
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="font-body font-semibold text-sm" style={{ color: "#191919" }}>
              {current.name}
            </div>
            <div
              className="font-body text-xs tracking-wide mt-1"
              style={{ color: "#8a7454" }}
            >
              {current.event} &middot; {current.date}
            </div>
          </div>

          {/* ── Navigation ─────────────────────────────────────────────── */}
          <div className="flex items-center justify-between mt-12">
            <button
              onClick={prev}
              className="font-body text-xs link-underline"
              aria-label="Testimonial anterior"
              style={{ minHeight: "44px" }}
            >
              ← Anterior
            </button>

            {/* Dot indicators */}
            <div className="flex gap-2" role="tablist" aria-label="Selectează testimonialul">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === activeIndex}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  style={{
                    width: i === activeIndex ? "22px" : "6px",
                    height: "6px",
                    borderRadius: "3px",
                    background: i === activeIndex ? "#191919" : "rgba(25, 25, 25,0.2)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    padding: "12px 8px",
                    boxSizing: "content-box",
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="font-body text-xs link-underline"
              aria-label="Testimonial următor"
              style={{ minHeight: "44px" }}
            >
              Următor →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
