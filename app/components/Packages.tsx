"use client";

import { useEffect } from "react";

// ── Feature row ───────────────────────────────────────────────────────────────

function Feature({ text }: { text: string }) {
  return (
    <li
      className="flex items-start gap-3 font-body text-sm"
      style={{ color: "rgba(245,240,232,0.8)" }}
    >
      <span
        className="text-gold shrink-0 mt-0.5 select-none"
        aria-hidden="true"
      >
        ✓
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
    <section
      id="pachete"
      className="py-20 lg:py-32"
      style={{
        background: "#181818",
        backgroundImage:
          "radial-gradient(rgba(201,168,76,0.06) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Logo watermark */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "10%",
          left: "0",
          width: "420px",
          height: "420px",
          opacity: 0.05,
          pointerEvents: "none",
          zIndex: 0,
          filter:
            "brightness(0) invert(1) sepia(1) saturate(2) hue-rotate(5deg)",
        }}
      >
        <img
          src="/images/logo.svg"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>

      <div
        className="section-container"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* ── SECȚIUNEA 1: Ce primiți de la noi? ── */}
        <div className="reveal max-w-4xl mx-auto mb-24">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">Show complet. Fără compromisuri.</p>
            <h2
              className="font-display text-4xl md:text-5xl font-bold text-champagne text-balance mb-4"
              style={{ lineHeight: 1.1 }}
            >
              Ce primiți <span className="text-gold-gradient">de la noi?</span>
            </h2>
            <hr className="gold-rule mt-8 max-w-xs mx-auto" />
          </div>

          {/* Features grid */}
          <div
            className="p-8 lg:p-12"
            style={{
              background: "#111111",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
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
        </div>

        {/* ── SECȚIUNEA 2: CTA prețuri ── */}
        <div
          className="reveal stagger-2 max-w-3xl mx-auto text-center px-8 lg:px-16 py-16"
          style={{
            background: "#0d0d0d",
            border: "2px solid #c9a84c",
            boxShadow: "0 0 60px rgba(201,168,76,0.15)",
          }}
        >
          <p className="eyebrow mb-4">Ofertă personalizată</p>
          <h2
            className="font-display text-3xl md:text-4xl font-bold text-champagne text-balance mb-6"
            style={{ lineHeight: 1.15 }}
          >
            Cât costă Highlife Showband{" "}
            <span className="text-gold-gradient">pentru evenimentul tău?</span>
          </h2>

          <hr className="gold-rule mb-8 max-w-xs mx-auto" />

          <p
            className="font-body text-base leading-relaxed mb-10 max-w-xl mx-auto"
            style={{ color: "rgba(245,240,232,0.65)" }}
          >
            Fiecare eveniment este unic, așa că fiecare ofertă este
            personalizată. Nu lucrăm cu prețuri fixe afișate — lucrăm cu oameni
            și cu povești. Spune-ne despre evenimentul tău și îți facem o ofertă
            completă, transparentă, fără surprize.
          </p>

          <a href="#contact" className="btn-gold inline-flex justify-center">
            <span>SOLICITĂ OFERTA</span>
          </a>
        </div>
      </div>
    </section>
  );
}
