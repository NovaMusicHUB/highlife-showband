"use client";

import { useState, useEffect } from "react";

// ── Data ──────────────────────────────────────────────────────────────────────

const FILTERS = ["Toate", "Nunți", "Scenă", "Botezuri"] as const;

const IMAGES = [
  // ── Nunți ────────────────────────────────────────────────────────────
  {
    src: "/images/nunti/nunta-01.jpg",
    category: "Nunți",
    alt: "Dans miri cu Highlife Showband",
  },
  {
    src: "/images/nunti/nunta-02.jpg",
    category: "Nunți",
    alt: "Nuntă elegantă cu muzică live",
  },
  {
    src: "/images/nunti/nunta-03.jpg",
    category: "Nunți",
    alt: "Highlife Showband la nuntă",
  },
  {
    src: "/images/nunti/nunta-04.jpg",
    category: "Nunți",
    alt: "Moment special la nuntă",
  },
  {
    src: "/images/nunti/nunta-05.jpg",
    category: "Nunți",
    alt: "Atmosferă de nuntă cu Highlife",
  },
  {
    src: "/images/nunti/nunta-06.jpg",
    category: "Nunți",
    alt: "Show live la nuntă",
  },
  {
    src: "/images/nunti/nunta-07.jpg",
    category: "Nunți",
    alt: "Vocalist Highlife la nuntă",
  },
  {
    src: "/images/nunti/nunta-08.jpg",
    category: "Nunți",
    alt: "Petrecere de nuntă",
  },
  {
    src: "/images/nunti/nunta-09.jpg",
    category: "Nunți",
    alt: "Energie pe ringul de dans la nuntă",
  },
  // ── Scenă: Concert Kimaro × Kiss FM ────────────────────────────────────
  {
    src: "/images/kimaro/kimaro-01.jpg",
    category: "Scenă",
    alt: "Highlife Showband — spectacol Kimaro",
  },
  {
    src: "/images/kimaro/kimaro-02.jpg",
    category: "Scenă",
    alt: "Highlife Showband — show live Kimaro",
  },
  {
    src: "/images/kimaro/kimaro-03.jpg",
    category: "Scenă",
    alt: "Concert Highlife Showband × Kiss FM",
  },
  {
    src: "/images/kimaro/kimaro-04.jpg",
    category: "Scenă",
    alt: "Highlife ShowBand — eveniment Kimaro",
  },
  {
    src: "/images/kimaro/kimaro-05.jpg",
    category: "Scenă",
    alt: "Probe scenă Highlife Showband",
  },
  {
    src: "/images/kimaro/kimaro-06.jpg",
    category: "Scenă",
    alt: "Kimaro — Highlife Showband live",
  },
  {
    src: "/images/kimaro/kimaro-07.jpg",
    category: "Scenă",
    alt: "Highlife Showband — performance Kimaro",
  },
  {
    src: "/images/kimaro/kimaro-08.jpg",
    category: "Scenă",
    alt: "Soliști Highlife cu Ana Moga",
  },
  // ── Botezuri ────────────────────────────────────────────────────────────
  {
    src: "/images/botez/botez-01.jpg",
    category: "Botezuri",
    alt: "Botez elegant — Highlife Showband",
  },
  {
    src: "/images/botez/botez-02.jpg",
    category: "Botezuri",
    alt: "Muzică live la botez",
  },
  {
    src: "/images/botez/botez-03.jpg",
    category: "Botezuri",
    alt: "Dans la botez cu Highlife Showband",
  },
  {
    src: "/images/botez/botez-04.jpg",
    category: "Botezuri",
    alt: "Atmosferă botez — Highlife Showband",
  },
  {
    src: "/images/botez/botez-05.jpg",
    category: "Botezuri",
    alt: "Petrecere botez — Highlife live",
  },
  {
    src: "/images/botez/botez-06.jpg",
    category: "Botezuri",
    alt: "Botez special cu muzică live",
  },
  {
    src: "/images/botez/botez-07.jpg",
    category: "Botezuri",
    alt: "Highlife Showband — botez festiv",
  },
  {
    src: "/images/botez/botez-08.jpg",
    category: "Botezuri",
    alt: "Momentul dansului la botez",
  },
  {
    src: "/images/botez/botez-09.jpg",
    category: "Botezuri",
    alt: "Botez cu orchestră live",
  },
  {
    src: "/images/botez/botez-10.jpg",
    category: "Botezuri",
    alt: "Highlife Showband — show botez",
  },
  {
    src: "/images/botez/botez-11.jpg",
    category: "Botezuri",
    alt: "Dans tradițional la botez",
  },
  {
    src: "/images/botez/botez-12.jpg",
    category: "Botezuri",
    alt: "Finalul spectacolului — botez",
  },
] as const;

// ── Component ─────────────────────────────────────────────────────────────────

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>("Toate");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Derived filtered list — computed each render, consistent between grid and lightbox
  const filteredImages =
    activeFilter === "Toate"
      ? IMAGES
      : IMAGES.filter((img) => img.category === activeFilter);

  // Close lightbox when filter changes
  useEffect(() => {
    setLightboxIndex(null);
  }, [activeFilter]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + filteredImages.length) % filteredImages.length,
        );
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredImages.length,
        );
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, filteredImages.length]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  // Reveal observer
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
      { threshold: 0.1 },
    );
    document
      .querySelectorAll(".reveal, .reveal-left, .reveal-right")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="galerie"
      className="py-20 lg:py-28"
      style={{ background: "#111111" }}
    >
      <div className="section-container">
        {/* ── Section header ── */}
        <div className="text-center mb-10 reveal">
          <p className="eyebrow mb-4">Momente Prețioase</p>
          <h2
            className="font-display text-4xl md:text-5xl font-bold text-champagne text-balance mb-6"
            style={{ lineHeight: 1.1 }}
          >
            Galeria <span className="text-gold-gradient">Noastră</span>
          </h2>
          <hr className="gold-rule mt-8 max-w-xs mx-auto" />
        </div>

        {/* ── Filter pills ── */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 reveal stagger-1">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`pill-filter${activeFilter === filter ? " active" : ""}`}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* ── Masonry grid (CSS columns) ── */}
        <div
          className="columns-2 sm:columns-3 lg:columns-4 reveal stagger-2"
          style={{ columnGap: "8px" }}
        >
          {filteredImages.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className="break-inside-avoid mb-2 relative overflow-hidden group cursor-pointer"
              onClick={() => setLightboxIndex(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover overlay with zoom icon */}
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/50 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle
                      cx="14"
                      cy="14"
                      r="8"
                      stroke="#c9a84c"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M20 20 L28 28"
                      stroke="#c9a84c"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M10 14 H18 M14 10 V18"
                      stroke="#c9a84c"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Galerie foto"
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 z-10 transition-colors"
            style={{ color: "rgba(245,240,232,0.7)", minWidth: '44px', minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6px' }}
            onClick={() => setLightboxIndex(null)}
            aria-label="Închide galeria"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M8 8 L24 24 M24 8 L8 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Prev button */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 transition-colors"
            style={{ color: "rgba(245,240,232,0.7)" }}
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) =>
                prev === null
                  ? null
                  : (prev - 1 + filteredImages.length) % filteredImages.length,
              );
            }}
            aria-label="Imaginea anterioară"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M20 6 L8 16 L20 26"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Active image */}
          <img
            src={filteredImages[lightboxIndex]?.src}
            alt={filteredImages[lightboxIndex]?.alt}
            className="max-w-[90vw] max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next button */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 transition-colors"
            style={{ color: "rgba(245,240,232,0.7)" }}
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) =>
                prev === null ? null : (prev + 1) % filteredImages.length,
              );
            }}
            aria-label="Imaginea următoare"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M12 6 L24 16 L12 26"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Counter */}
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 font-body text-sm"
            style={{ color: "rgba(245,240,232,0.5)" }}
          >
            {lightboxIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </section>
  );
}
