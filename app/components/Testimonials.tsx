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

// ── Component ─────────────────────────────────────────────────────────────────

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
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
    <section
      id="testimoniale"
      className="py-20 lg:py-28"
      style={{
        background: "#1a1a1a",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Logo watermark */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          right: "0",
          transform: "translateY(-50%)",
          width: "380px",
          height: "380px",
          opacity: 0.04,
          pointerEvents: "none",
          zIndex: 0,
          filter: "brightness(0) invert(1)",
        }}
      >
        <img
          src="/images/logo.svg"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>
      <div className="section-container">
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="text-center mb-14 reveal">
          <p className="eyebrow mb-4">Cuvintele Clienților Noștri</p>
          <h2 className="font-display text-4xl md:text-5xl text-champagne font-bold">
            Ce spun despre noi
          </h2>
        </div>

        {/* ── Carousel ───────────────────────────────────────────────────── */}
        <div className="relative max-w-3xl mx-auto">
          {/* Quote card */}
          <div
            key={activeIndex}
            className="animate-fade-in"
            style={{ animationDuration: "0.4s" }}
          >
            <div
              style={{
                background: "#111111",
                borderLeft: "4px solid #c9a84c",
                padding: "2.5rem 3rem",
                position: "relative",
              }}
            >
              {/* Decorative giant quote mark */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "2rem",
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "8rem",
                  lineHeight: 1,
                  color: "rgba(201,168,76,0.08)",
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                &ldquo;
              </div>

              {/* Stars */}
              <div className="stars mb-4" aria-label="5 din 5 stele">
                {[...Array(current.rating)].map((_, i) => (
                  <svg
                    key={i}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="#c9a84c"
                    aria-hidden="true"
                  >
                    <path d="M8 1 L9.8 6H15L10.6 9L12.4 14L8 11L3.6 14L5.4 9L1 6H6.2Z" />
                  </svg>
                ))}
              </div>

              {/* Quote text */}
              <blockquote
                className="font-serif italic text-xl lg:text-2xl leading-relaxed mb-6"
                style={{ color: "rgba(245,240,232,0.80)" }}
              >
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <span
                  className="gold-separator"
                  style={{ height: "40px" }}
                  aria-hidden="true"
                />
                <div>
                  <div className="font-body font-bold text-champagne text-sm">
                    {current.name}
                  </div>
                  <div
                    className="font-body text-xs tracking-wider mt-0.5"
                    style={{ color: "rgba(201,168,76,0.70)" }}
                  >
                    {current.event} &middot;{" "}
                    {current.date}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Navigation ─────────────────────────────────────────────── */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prev}
              className="btn-ghost px-4 py-2 text-xs"
              aria-label="Testimonial anterior"
            >
              ← Anterior
            </button>

            {/* Dot indicators */}
            <div
              className="flex gap-2"
              role="tablist"
              aria-label="Selectează testimonialul"
            >
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === activeIndex}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  style={{
                    width: i === activeIndex ? "24px" : "6px",
                    height: "6px",
                    borderRadius: "3px",
                    background:
                      i === activeIndex ? "#c9a84c" : "rgba(245,240,232,0.2)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    padding: 0,
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="btn-ghost px-4 py-2 text-xs"
              aria-label="Testimonial următor"
            >
              Următor →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
