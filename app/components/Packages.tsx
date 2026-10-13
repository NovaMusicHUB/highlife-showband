"use client";

import { useEffect } from "react";

// ── Data ──────────────────────────────────────────────────────────────────────

const CE_PRIMITI = [
  "4 seturi de cover (câte 40 de minute);",
  "2 seturi de folclor (câte 30 de minute);",
  "Inginer de sunet profesionist;",
  "Inginer de lumini;",
  "Tehnicieni specializați;",
  "Event manager dedicat;",
  "Setup scenă;",
  "Sistem audio de înaltă calitate;",
  "Lumini pentru ringul de dans și scenă;",
  "Echipamente avansate de scenă (mixere, microfoane, standuri, backline etc.);",
  "Transport complet pentru trupă și echipa tehnică;",
  "Recuzită (ochelari LED etc.).",
];

const DE_CE_O_SA_TI_PLACA = [
  "Un spectacol LIVE spectaculos;",
  "Varietate muzicală pentru toate gusturile;",
  "Show complet personalizat după dorințele tale;",
  "Ambianță sonoră și vizuală impecabilă;",
  "Invitații se bucură de distracție și energie la maximum;",
  "O petrecere de care nu te mai saturi;",
  "Dansăm și cântăm împreună, pe scenă și pe ringul de dans;",
  "Tu ești în centrul atenției;",
  "Scapi de toate grijile legate de petrecere;",
  "Rămâi cu o amintire de neuitat.",
];

// ── Components ────────────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" style={{ flexShrink: 0, marginTop: "0.15rem" }}>
      <circle cx="10" cy="10" r="10" fill="#f0524d" />
      <path d="M5.8 10.4 L8.6 13.1 L14.2 7.2" stroke="#09090b" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FeatureCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div
      className="reveal p-8 lg:p-10 h-full"
      style={{ background: "#f3f0ea", color: "#202024" }}
    >
      <h2
        className="font-display text-center mb-8"
        style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.1rem)", fontWeight: 600, lineHeight: 1.2 }}
      >
        {title}
      </h2>
      <ul className="flex flex-col gap-4">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 font-body text-sm lg:text-base" style={{ lineHeight: 1.55 }}>
            <CheckIcon />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function Packages() {
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
    <section id="pachete" className="py-24 lg:py-32 on-dark" style={{ background: "#202024", color: "#f3f0ea" }}>
      <div className="section-container">
        {/* ── SECȚIUNEA 1: Ce primiți / De ce o să-ți placă ── */}
        <div className="reveal text-center mb-12 lg:mb-16">
          <p className="eyebrow mb-5">Show complet. Fără compromisuri.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-20 lg:mb-28">
          <FeatureCard title="Ce primiți" items={CE_PRIMITI} />

          {/* Photo — real Highlife folder image */}
          <div className="reveal relative min-h-[360px] lg:min-h-0">
            <img
              src="/images/kimaro/kimaro-02.jpg"
              alt="Highlife Showband — show live pe scenă"
              loading="lazy"
              className="absolute inset-0 w-full h-full"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>

          <FeatureCard title="De ce o să-ți placă" items={DE_CE_O_SA_TI_PLACA} />
        </div>

        {/* ── SECȚIUNEA 2: CTA prețuri ── */}
        <div className="reveal stagger-2 max-w-2xl mx-auto text-center">
          <p className="eyebrow mb-5">Ofertă personalizată</p>
          <h2
            className="font-display text-balance mb-6"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 600, lineHeight: 1.2, color: "#f3f0ea" }}
          >
            Cât costă Highlife Showband{" "}
            <em className="text-accent not-italic">pentru evenimentul tău?</em>
          </h2>

          <p
            className="font-body text-base leading-relaxed mb-10 max-w-xl mx-auto"
            style={{ color: "rgba(243, 240, 234,0.66)" }}
          >
            Fiecare eveniment este unic, așa că fiecare ofertă este
            personalizată. Nu lucrăm cu prețuri fixe afișate — lucrăm cu
            oameni și cu povești. Spune-ne despre evenimentul tău și îți
            facem o ofertă completă, transparentă, fără surprize.
          </p>

          <a href="#contact" className="btn-primary">
            <span>Solicită Oferta</span>
          </a>
        </div>
      </div>
    </section>
  );
}
