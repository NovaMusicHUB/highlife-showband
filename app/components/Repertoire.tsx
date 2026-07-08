"use client";

import { useState, useEffect } from "react";

// ── Data ──────────────────────────────────────────────────────────────────────

const CATEGORIES = [
  "Toate",
  "Pop",
  "Rock",
  "Jazz",
  "Folclor",
  "Internațional",
  "Corporate",
] as const;

const SONGS = [
  { title: "Fericire", artist: "Irina Rimes", category: "Pop" },
  { title: "Mă doare", artist: "Smiley ft. Killa Fonic", category: "Pop" },
  { title: "Acasă", artist: "Cargo", category: "Rock" },
  { title: "Vremuri", artist: "Iris", category: "Rock" },
  { title: "Summertime", artist: "George Gershwin", category: "Jazz" },
  { title: "Fly Me to the Moon", artist: "Frank Sinatra", category: "Jazz" },
  { title: "Ciocârlia", artist: "Tradițional Românesc", category: "Folclor" },
  { title: "Hora Staccato", artist: "Grigoraș Dinicu", category: "Folclor" },
  { title: "Perfect", artist: "Ed Sheeran", category: "Internațional" },
  {
    title: "Can't Help Falling in Love",
    artist: "Elvis Presley",
    category: "Internațional",
  },
  { title: "Eye of the Tiger", artist: "Survivor", category: "Corporate" },
  { title: "We Are the Champions", artist: "Queen", category: "Corporate" },
] as const;

// ── Component ─────────────────────────────────────────────────────────────────

export default function Repertoire() {
  const [activeCategory, setActiveCategory] = useState<string>("Toate");

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

  const filtered =
    activeCategory === "Toate"
      ? SONGS
      : SONGS.filter((s) => s.category === activeCategory);

  return (
    <section id="repertoriu" className="bg-dark py-20 lg:py-28">
      <div className="section-container">
        {/* ── Section header ── */}
        <div className="text-center mb-10 reveal">
          <p className="eyebrow mb-4">Muzica ta, alegerile tale</p>
          <h2
            className="font-display text-4xl md:text-5xl font-bold text-champagne text-balance mb-6"
            style={{ lineHeight: 1.1 }}
          >
            Repertoriul <span className="text-gold-gradient">nostru</span>
          </h2>
          <p
            className="font-body text-base max-w-2xl mx-auto"
            style={{ color: "rgba(245,240,232,0.55)", lineHeight: 1.8 }}
          >
            Repertoriul nostru este variat și actual, acoperind hituri
            internaționale, muzică românească și piese pentru toate vârstele,
            astfel încât fiecare invitat să se simtă parte din petrecere.
          </p>
          <hr className="gold-rule mt-8 max-w-xs mx-auto" />
        </div>

        {/* ── Filter pills ── */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 reveal stagger-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`pill-filter${activeCategory === cat ? " active" : ""}`}
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Songs grid ── */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px reveal stagger-2"
          style={{
            background: "rgba(201,168,76,0.1)",
            opacity: 1,
            transition: "opacity 0.3s ease",
          }}
        >
          {filtered.map((song, i) => (
            <div
              key={`${song.title}-${i}`}
              className="bg-dark p-4 lg:p-5 hover:bg-surface transition-colors group"
            >
              <div className="font-display text-champagne text-base font-semibold group-hover:text-gold transition-colors">
                {song.title}
              </div>
              <div
                className="font-body text-xs mt-0.5 tracking-wide"
                style={{ color: "rgba(245,240,232,0.4)" }}
              >
                {song.artist}
              </div>
              <div
                className="font-body text-[0.6rem] tracking-widest uppercase mt-1"
                style={{ color: "rgba(201,168,76,0.5)" }}
              >
                {song.category}
              </div>
            </div>
          ))}
        </div>

        {/* ── Download CTA ── */}
        <div className="flex justify-center mt-10 reveal stagger-3">
          <a href="#" className="btn-gold" download>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M8 2 L8 11 M4 8 L8 12 L12 8 M2 14 L14 14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Descarcă Repertoriul Complet PDF</span>
          </a>
        </div>

        {/* ── Note ── */}
        <p
          className="font-body text-xs text-center mt-4"
          style={{ color: "rgba(245,240,232,0.3)" }}
        >
          Lista de mai sus reprezintă o selecție din repertoriul nostru de 500+
          piese.
        </p>
      </div>
    </section>
  );
}
