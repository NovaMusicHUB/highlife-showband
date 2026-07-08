"use client";

import { useState } from "react";

// ── Video stats data ─────────────────────────────────────────────────────────

const VIDEO_STATS = [
  { value: "10+", label: "videoclipuri" },
  { value: "300K+", label: "vizualizări" },
  { value: "HD 4K", label: "Filmat în" },
];

// ── Component ────────────────────────────────────────────────────────────────

export default function Showreel() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="showreel" className="bg-dark py-20 lg:py-28">
      <div className="section-container">
        {/* ── Section header ── */}
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">Showreel 2024</p>

          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-champagne text-center mb-5"
            style={{ lineHeight: 1.1 }}
          >
            Vezi magia în acțiune
          </h2>

          <p
            className="font-serif italic text-xl text-center max-w-xl mx-auto"
            style={{ color: "rgba(245, 240, 232, 0.6)" }}
          >
            Descoperă energia Highlife Showband prin videoclipurile noastre
          </p>
        </div>

        {/* ── Video container — max-w-4xl ── */}
        <div className="max-w-4xl mx-auto">
          {/* 16:9 aspect-ratio wrapper */}
          <div
            className="relative overflow-hidden"
            style={{ aspectRatio: "16 / 9" }}
          >
            {isPlaying ? (
              /* ── YouTube embed — shown when playing ── */
              <iframe
                src="https://www.youtube.com/embed/6jsyRh8hkmo?autoplay=1&rel=0"
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Highlife Showband — Video"
              />
            ) : (
              /* ── Thumbnail + play button overlay ── */
              <>
                {/* Background thumbnail */}
                <img
                  src="https://img.youtube.com/vi/6jsyRh8hkmo/maxresdefault.jpg"
                  alt="Highlife Showband — video preview"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    // fallback to HQ thumbnail dacă maxres nu e disponibil
                    (e.currentTarget as HTMLImageElement).src =
                      "https://img.youtube.com/vi/6jsyRh8hkmo/hqdefault.jpg";
                  }}
                />

                {/* Dark scrim */}
                <div
                  className="absolute inset-0"
                  style={{ background: "rgba(0,0,0,0.55)" }}
                  aria-hidden="true"
                />

                {/* Subtle vignette */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.45) 100%)",
                  }}
                  aria-hidden="true"
                />

                {/* Play button assembly — centered */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Outer rotating dashed ring */}
                  <div
                    className="absolute animate-rotate-ring"
                    style={{
                      width: "120px",
                      height: "120px",
                      border: "1px dashed rgba(201,168,76,0.4)",
                      borderRadius: "50%",
                    }}
                    aria-hidden="true"
                  />

                  {/* Middle pulsing solid ring */}
                  <div
                    className="absolute animate-pulse-ring"
                    style={{
                      width: "90px",
                      height: "90px",
                      border: "1px solid rgba(201,168,76,0.6)",
                      borderRadius: "50%",
                    }}
                    aria-hidden="true"
                  />

                  {/* Play button */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="relative z-10 flex items-center justify-center rounded-full transition-transform hover:scale-110 focus-visible:scale-110"
                    style={{
                      width: "72px",
                      height: "72px",
                      background: "rgba(201,168,76,0.15)",
                      border: "2px solid #c9a84c",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                    }}
                    aria-label="Redă showreel"
                  >
                    {/* Triangle play icon — offset slightly right for visual balance */}
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      aria-hidden="true"
                      style={{ transform: "translateX(2px)" }}
                    >
                      <path d="M10 7 L22 14 L10 21 Z" fill="#c9a84c" />
                    </svg>
                  </button>
                </div>

                {/* Bottom label */}
                <p
                  className="absolute bottom-5 left-1/2 -translate-x-1/2 font-body text-xs tracking-widest uppercase whitespace-nowrap"
                  style={{ color: "rgba(245, 240, 232, 0.55)" }}
                >
                  ▶&nbsp; Apasă pentru a vizualiza showreelul nostru
                </p>
              </>
            )}
          </div>

          {/* ── Stats row ── */}
          <div
            className="mt-0 grid grid-cols-3"
            style={{ borderTop: "1px solid rgba(201, 168, 76, 0.15)" }}
          >
            {VIDEO_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center py-5 px-4 text-center"
                style={{
                  borderRight:
                    i < VIDEO_STATS.length - 1
                      ? "1px solid rgba(201, 168, 76, 0.15)"
                      : "none",
                }}
              >
                <span
                  className="font-display font-bold text-gold"
                  style={{ fontSize: "1.6rem", lineHeight: 1 }}
                >
                  {stat.value}
                </span>
                <span
                  className="font-body uppercase mt-1"
                  style={{
                    fontSize: "0.62rem",
                    letterSpacing: "0.18em",
                    color: "rgba(245, 240, 232, 0.45)",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Below-video CTA ── */}
        <div className="mt-10 text-center">
          <a
            href="https://www.youtube.com/@Highlifeshowband"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              style={{ position: "relative", zIndex: 1 }}
            >
              <path
                d="M22.54 6.42a2.78 2.78 0 00-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 001.95-1.97A29 29 0 0023 12a29 29 0 00-.46-5.58z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              <polygon
                points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
                fill="currentColor"
              />
            </svg>
            <span>Vezi toate videoclipurile pe YouTube</span>
          </a>
        </div>
      </div>
    </section>
  );
}
