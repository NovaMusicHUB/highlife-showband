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
    <section id="lansare-noua" className="py-24 lg:py-32 on-dark" style={{ background: "#202024", color: "#f3f0ea" }}>
      <div className="section-container">
        {/* ── Header ── */}
        <div className="max-w-2xl mb-12 reveal">
          <p className="eyebrow mb-5">Lansare nouă</p>

          <h2
            className="font-display text-balance mb-5"
            style={{ fontSize: "clamp(1.85rem, 3.5vw, 2.75rem)", fontWeight: 600, lineHeight: 1.2, color: "#f3f0ea" }}
          >
            Am lansat piesa <em className="text-accent not-italic">&bdquo;Sade&rdquo;</em>
          </h2>

          <p className="font-body" style={{ fontSize: "1.05rem", color: "rgba(243, 240, 234,0.75)", lineHeight: 1.7 }}>
            Cea mai nouă piesă Highlife Showband este live pe YouTube —
            ascult-o și spune-ne ce părere ai!
          </p>
        </div>

        {/* ── Video container ── */}
        <div className="max-w-3xl reveal stagger-1">
          <div className="relative overflow-hidden" style={{ aspectRatio: "16 / 9" }}>
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
                {/* Poster — photo from the Highlife folders */}
                <img
                  src="/images/kimaro/kimaro-07.jpg"
                  alt="Highlife Showband — Sade (piesă nouă)"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Subtle scrim for the play button */}
                <div
                  className="absolute inset-0"
                  style={{ background: "rgba(9,9,11,0.2)" }}
                  aria-hidden="true"
                />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="relative z-10 flex items-center justify-center rounded-full transition-transform hover:scale-105"
                    style={{
                      width: "64px",
                      height: "64px",
                      background: "#f0524d",
                    }}
                    aria-label="Redă piesa Sade"
                  >
                    <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden="true" style={{ transform: "translateX(2px)" }}>
                      <path d="M10 7 L22 14 L10 21 Z" fill="#09090b" />
                    </svg>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="mt-8 reveal stagger-2">
          <a href={YOUTUBE_WATCH_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <span>Ascultă &bdquo;Sade&rdquo; pe YouTube</span>
          </a>
        </div>
      </div>
    </section>
  );
}
