"use client";

import { useEffect, useState } from "react";

// ── Config ───────────────────────────────────────────────────────────────────

const YOUTUBE_ID = "xgwdTYVUulU";
const YOUTUBE_WATCH_URL = `https://www.youtube.com/watch?v=${YOUTUBE_ID}`;

// ── Component ────────────────────────────────────────────────────────────────

export default function NewRelease() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Standard IntersectionObserver reveal pattern
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    document
      .querySelectorAll(".reveal, .reveal-left, .reveal-right")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="lansare-noua"
      className="py-16 lg:py-20"
      style={{
        background: "#faf8f4",
        borderTop: "1px solid rgba(201,168,76,0.15)",
        borderBottom: "1px solid rgba(201,168,76,0.15)",
      }}
    >
      <div className="section-container">
        {/* ── Header ── */}
        <div className="text-center mb-10 reveal">
          {/* "NOU" badge */}
          <div
            className="inline-flex items-center gap-2 mb-4"
            style={{
              padding: "0.4rem 1rem",
              border: "1px solid rgba(201,168,76,0.4)",
              background: "rgba(201,168,76,0.08)",
            }}
          >
            <span
              className="animate-pulse-ring"
              style={{
                display: "inline-block",
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "#c9a84c",
                flexShrink: 0,
              }}
              aria-hidden="true"
            />
            <span
              className="font-body uppercase"
              style={{
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                color: "#a8882e",
              }}
            >
              Lansare nouă
            </span>
          </div>

          <h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-champagne text-balance mb-4"
            style={{ lineHeight: 1.15 }}
          >
            Am lansat piesa{" "}
            <em className="text-gold-gradient not-italic">&bdquo;Sade&rdquo;</em>
          </h2>

          <p
            className="font-serif italic text-lg mt-2 max-w-xl mx-auto"
            style={{ color: "rgba(26, 26, 26,0.55)" }}
          >
            Cea mai nouă piesă Highlife Showband este live pe YouTube —
            ascult-o și spune-ne ce părere ai!
          </p>
        </div>

        {/* ── Video container ── */}
        <div className="max-w-3xl mx-auto reveal stagger-1">
          <div
            className="relative overflow-hidden"
            style={{
              aspectRatio: "16 / 9",
              border: "1px solid rgba(201,168,76,0.25)",
            }}
          >
            {isPlaying ? (
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Highlife Showband — Sade (piesă nouă)"
              />
            ) : (
              <>
                {/* Thumbnail */}
                <img
                  src={`https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`}
                  alt="Highlife Showband — Sade (piesă nouă)"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      `https://img.youtube.com/vi/${YOUTUBE_ID}/hqdefault.jpg`;
                  }}
                />

                {/* Dark scrim */}
                <div
                  className="absolute inset-0"
                  style={{ background: "rgba(0,0,0,0.5)" }}
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.45) 100%)",
                  }}
                  aria-hidden="true"
                />

                {/* Play button assembly */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="absolute animate-rotate-ring"
                    style={{
                      width: "110px",
                      height: "110px",
                      border: "1px dashed rgba(201,168,76,0.4)",
                      borderRadius: "50%",
                    }}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute animate-pulse-ring"
                    style={{
                      width: "82px",
                      height: "82px",
                      border: "1px solid rgba(201,168,76,0.6)",
                      borderRadius: "50%",
                    }}
                    aria-hidden="true"
                  />
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="relative z-10 flex items-center justify-center rounded-full transition-transform hover:scale-110 focus-visible:scale-110"
                    style={{
                      width: "68px",
                      height: "68px",
                      background: "rgba(201,168,76,0.15)",
                      border: "2px solid #c9a84c",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                    }}
                    aria-label="Redă piesa Sade"
                  >
                    <svg
                      width="26"
                      height="26"
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
                  style={{ color: "rgba(255, 255, 255, 0.85)" }}
                >
                  ▶&nbsp; Apasă pentru a asculta &bdquo;Sade&rdquo;
                </p>
              </>
            )}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="mt-8 text-center reveal stagger-2">
          <a
            href={YOUTUBE_WATCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
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
                stroke="#0d0d0d"
                strokeWidth="1.5"
                fill="none"
              />
              <polygon
                points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
                fill="#0d0d0d"
              />
            </svg>
            <span>Ascultă &bdquo;Sade&rdquo; pe YouTube</span>
          </a>
        </div>
      </div>
    </section>
  );
}
