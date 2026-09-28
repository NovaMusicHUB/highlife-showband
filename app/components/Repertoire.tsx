"use client";

import { useState, useEffect } from "react";
import RepertoireModal from "./RepertoireModal";

// ── Data ──────────────────────────────────────────────────────────────────────

const CATEGORIES = [
  "Toate",
  "Internațional",
  "Românesc",
  "Folclor",
  "Balkan",
  "Latino",
  "Petrecere",
] as const;

const SONGS = [
  { title: "Wake Me Up Before You Go-Go", artist: "Wham!", category: "Internațional" },
  { title: "Can't Stop the Feeling!", artist: "Justin Timberlake", category: "Internațional" },
  { title: "Everything I Do (I Do It for You)", artist: "Bryan Adams", category: "Internațional" },
  { title: "We Found Love", artist: "Rihanna ft. Calvin Harris", category: "Internațional" },
  { title: "Good Feeling", artist: "Flo Rida", category: "Internațional" },
  { title: "Danza Kuduro", artist: "Don Omar ft. Lucenzo", category: "Internațional" },
  { title: "Nostalgia Engleză", artist: "Colaj / Diverse piese retro", category: "Internațional" },
  { title: "Valerie", artist: "Amy Winehouse / Mark Ronson", category: "Internațional" },
  { title: "Rhythm Is a Dancer", artist: "Snap!", category: "Internațional" },
  { title: "Sarà Perché Ti Amo", artist: "Ricchi e Poveri", category: "Internațional" },
  { title: "A Venit Poliția", artist: "Theo Rose", category: "Românesc" },
  { title: "Nostalgia Românească", artist: "Colaj / Diverse piese retro", category: "Românesc" },
  { title: "Căsuța Noastră", artist: "Gică Petrescu", category: "Românesc" },
  { title: "Hora din Moldova", artist: "Nelly Ciobanu", category: "Folclor" },
  { title: "Trandafir la Firidă", artist: "Tradițional / Lupii lui Calangea", category: "Folclor" },
  { title: "Cântă Cucu-n Bucovina", artist: "Tradițional / Grigore Leșe", category: "Folclor" },
  { title: "Pui de Moroșan", artist: "Tradițional / Frații Petreuș", category: "Folclor" },
  { title: "Colaj Gipsy Kings", artist: "Gipsy Kings", category: "Latino" },
  { title: "Ederlezi", artist: "Goran Bregović / Tradițional", category: "Balkan" },
  { title: "Bella Ciao", artist: "Tradițional / Goran Bregović", category: "Balkan" },
  { title: "Kalashnikov", artist: "Goran Bregović", category: "Balkan" },
  { title: "Striga cu Mine, Te Iubesc", artist: "Muzică de petrecere", category: "Petrecere" },
  { title: "Bea Fino și cu Nănașu", artist: "Puiu Codreanu", category: "Petrecere" },
  { title: "Muro Shavo", artist: "Tamango", category: "Balkan" },
] as const;

const PREVIEW_COUNT = 8;

// ── Component ─────────────────────────────────────────────────────────────────

export default function Repertoire() {
  const [activeCategory, setActiveCategory] = useState<string>("Toate");
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const preview = filtered.slice(0, PREVIEW_COUNT);

  return (
    <section id="repertoriu" className="py-24 lg:py-32" style={{ background: "#ffffff" }}>
      <div className="section-container">
        {/* ── Section header ── */}
        <div className="max-w-2xl mb-14 reveal">
          <p className="eyebrow mb-5">Muzica ta, alegerile tale</p>
          <h2
            className="font-display mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 600, lineHeight: 1.15, color: "#191919" }}
          >
            Repertoriul <em className="text-accent not-italic">nostru</em>
          </h2>
          <p
            className="font-body text-base"
            style={{ color: "rgba(25, 25, 25,0.6)", lineHeight: 1.75 }}
          >
            Repertoriul nostru este variat și actual, acoperind hituri
            internaționale, muzică românească și piese pentru toate vârstele.
            Mai jos ai o selecție — restul îl găsești în lista completă.
          </p>
        </div>

        {/* ── Filter tabs ── */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10 reveal stagger-1" style={{ borderBottom: "1px solid #e8e4da" }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`tab-filter${activeCategory === cat ? " active" : ""}`}
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Songs preview list ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 reveal stagger-2">
          {preview.map((song, i) => (
            <div key={`${song.title}-${i}`} className="pb-4" style={{ borderBottom: "1px solid #e8e4da" }}>
              <div className="font-display" style={{ fontSize: "1rem", fontWeight: 600, color: "#191919" }}>
                {song.title}
              </div>
              <div
                className="font-body text-xs mt-1"
                style={{ color: "rgba(25, 25, 25,0.55)" }}
              >
                {song.artist}
              </div>
            </div>
          ))}
        </div>

        {filtered.length > PREVIEW_COUNT && (
          <p
            className="font-body text-sm mt-6 reveal stagger-2"
            style={{ color: "rgba(25, 25, 25,0.45)" }}
          >
            + încă {filtered.length - PREVIEW_COUNT} piese în lista completă
          </p>
        )}

        {/* ── CTA ── */}
        <div className="mt-10 reveal stagger-3">
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn-secondary"
            aria-label="Deschide repertoriul complet"
          >
            <span>Vezi Repertoriul Complet</span>
          </button>
        </div>
      </div>

      {/* ── Repertoire Modal ── */}
      <RepertoireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
