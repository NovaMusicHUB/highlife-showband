"use client";

import { useEffect } from "react";

// ── Data ──────────────────────────────────────────────────────────────────────

const CE_PRIMITI = [
  "4 seturi live de cover (câte 40 de minute)",
  "2 seturi de folclor (câte 30 de minute)",
  "Saxofon café-concert la primirea invitaților (30 min)",
  "Saxofon clubbing show (30 min)",
  "DJ pe toată durata evenimentului",
  "MC — prezentatorul evenimentului",
  "Sistem PA & sonorizare, cu inginer de sunet",
  "Sceno-tehnică completă — lumini, efecte și show vizual, cu inginer de lumini",
  "Scenă profesională",
  "Transport pentru trupă și echipa tehnică",
  "Recuzită show (ochelari LED etc.)",
  "Event manager dedicat",
];

const DE_CE_O_SA_TI_PLACA = [
  "Un spectacol live, energic și spectaculos",
  "Repertoriu variat, pentru toate gusturile",
  "Show personalizat după dorințele tale",
  "Ambianță sonoră și vizuală impecabilă",
  "Invitații se distrează și se bucură la maximum",
  "Dansăm și cântăm împreună, pe scenă și pe ringul de dans",
  "Scapi de grijile organizatorice ale petrecerii",
  "Rămâi cu o amintire de neuitat",
];

// ── Components ────────────────────────────────────────────────────────────────

function FeatureCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="reveal p-8 lg:p-10 h-full" style={{ background: "#f3f0ea", color: "#202024" }}>
      <h2
        className="font-display mb-6"
        style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.1rem)", fontWeight: 600, lineHeight: 1.2 }}
      >
        {title}
      </h2>
      <ul className="list-disc pl-5 flex flex-col gap-3 font-body text-sm lg:text-base" style={{ lineHeight: 1.6 }}>
        {items.map((item) => (
          <li key={item}>{item}</li>
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

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-20 lg:mb-28">
          <FeatureCard title="Ce primiți" items={CE_PRIMITI} />
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
