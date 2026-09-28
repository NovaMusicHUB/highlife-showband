"use client";

import { useEffect } from "react";

// ── Feature bullets data ─────────────────────────────────────────────────────

const FEATURES = [
  "Muzicieni live + DJ profesionist inclus",
  "Sistem PA & lumini complet la cel mai înalt nivel",
  "Setlisturi personalizate pentru evenimentul tău",
  "Coordonator dedicat pentru planificarea evenimentului",
  "Selectați pentru KIMARO Open Stage 2026 — Kiss FM, Magic FM, Rock FM",
];

// ── Component ────────────────────────────────────────────────────────────────

export default function Experience() {
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
      id="experienta"
      className="py-24 lg:py-32"
      style={{ background: "#faf9f6" }}
    >
      <div className="section-container">
        <div className="lg:grid lg:grid-cols-12 lg:gap-20 items-center">
          {/* ── Left: image ──────────────────────────────────────────────── */}
          <div className="reveal-left lg:col-span-5 mb-14 lg:mb-0">
            <img
              src="/images/kimaro/kimaro-05.jpg"
              alt="Highlife Showband — spectacol live pe scenă"
              className="w-full"
              style={{
                aspectRatio: "4 / 5",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
              }}
              loading="lazy"
            />
            <p
              className="font-body mt-4"
              style={{
                fontSize: "0.8rem",
                letterSpacing: "0.04em",
                color: "rgba(25, 25, 25,0.5)",
              }}
            >
              12+ ani pe scenă
            </p>
          </div>

          {/* ── Right: copy ──────────────────────────────────────────────── */}
          <div className="reveal-right lg:col-span-7">
            {/* Eyebrow */}
            <p className="eyebrow mb-5">De ce Highlife?</p>

            {/* Headline */}
            <h2
              className="font-display leading-tight mb-7"
              style={{
                fontSize: "clamp(1.85rem, 3.5vw, 2.75rem)",
                fontWeight: 600,
                color: "#191919",
              }}
            >
              Mai mult decât o trupă —{" "}
              <em className="text-accent not-italic">un spectacol complet</em>
            </h2>

            {/* Body text */}
            <p
              className="font-body max-w-lg mb-5"
              style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "rgba(25, 25, 25,0.65)" }}
            >
              Cu Highlife Showband, transformăm orice petrecere într-un show
              memorabil, plin de energie și interacțiune cu invitații.
            </p>
            <p
              className="font-body max-w-lg mb-10"
              style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "rgba(25, 25, 25,0.65)" }}
            >
              Oferim soluții muzicale personalizate, adaptate complet stilului
              evenimentului tău și preferințelor muzicale ale invitaților. De
              la momente elegante de început până la show-uri explozive de
              dans, construim atmosfera perfectă pentru fiecare etapă a
              evenimentului.
            </p>

            {/* Feature list — minimal markers, no icons */}
            <ul className="flex flex-col gap-3 mb-10" role="list">
              {FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    style={{
                      color: "#8a7454",
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                      flexShrink: 0,
                    }}
                  >
                    —
                  </span>
                  <span
                    className="font-body text-sm leading-relaxed"
                    style={{ color: "rgba(25, 25, 25,0.75)" }}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a href="#pachete" className="btn-secondary">
              <span>Ce primești de la noi?</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
