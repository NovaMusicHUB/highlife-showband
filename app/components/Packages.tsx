"use client";

import { useEffect } from "react";

// ── Feature row ───────────────────────────────────────────────────────────────

function Feature({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 font-body text-sm" style={{ color: "rgba(25, 25, 25,0.8)" }}>
      <span aria-hidden="true" style={{ color: "#8a7454", flexShrink: 0 }}>
        —
      </span>
      <span>{text}</span>
    </li>
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
    <section id="pachete" className="py-24 lg:py-32" style={{ background: "#faf9f6" }}>
      <div className="section-container">
        {/* ── SECȚIUNEA 1: Ce primiți de la noi? ── */}
        <div className="reveal max-w-3xl mx-auto mb-20 lg:mb-28 text-center">
          <p className="eyebrow mb-5">Show complet. Fără compromisuri.</p>
          <h2
            className="font-display text-balance mb-10"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 600, lineHeight: 1.15, color: "#191919" }}
          >
            Ce primiți <em className="text-accent not-italic">de la noi?</em>
          </h2>

          <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-4 text-left max-w-2xl mx-auto">
            <Feature text="4 seturi live de cover (câte 40 de minute)" />
            <Feature text="Sistem PA & sonorizare" />
            <Feature text="2 seturi de folclor (câte 30 de minute)" />
            <Feature text="Sceno-tehnică completă — lumini, efecte, show vizual" />
            <Feature text="Saxofon café-concert la primirea invitaților (30 min)" />
            <Feature text="Inginer de sunet" />
            <Feature text="Saxofon clubbing show (30 min)" />
            <Feature text="Inginer de lumini" />
            <Feature text="DJ pe toată durata evenimentului" />
            <Feature text="Transport trupă și echipă tehnică" />
            <Feature text="MC — prezentator eveniment" />
            <Feature text="Recuzită show (ochelari LED etc.)" />
            <Feature text="Event Manager dedicat" />
            <Feature text="Tot ce ține de un show incendiar — inclus în pachet" />
            <Feature text="Scenă profesională" />
          </ul>
        </div>

        {/* ── SECȚIUNEA 2: CTA prețuri ── */}
        <div className="reveal stagger-2 max-w-2xl mx-auto text-center">
          <p className="eyebrow mb-5">Ofertă personalizată</p>
          <h2
            className="font-display text-balance mb-6"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 600, lineHeight: 1.2, color: "#191919" }}
          >
            Cât costă Highlife Showband{" "}
            <em className="text-accent not-italic">pentru evenimentul tău?</em>
          </h2>

          <p
            className="font-body text-base leading-relaxed mb-10 max-w-xl mx-auto"
            style={{ color: "rgba(25, 25, 25,0.62)" }}
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
