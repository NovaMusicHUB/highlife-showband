"use client";

import { useEffect } from "react";

// ── Feature bullets data ─────────────────────────────────────────────────────

const FEATURES = [
  "Muzicieni live + DJ profesionist inclus",
  "Sistem PA & lumini complet la cel mai înalt nivel",
  "Setlisturi personalizate pentru evenimentul tău",
  "Coordonator dedicat pentru planificarea evenimentului",
];

// ── Checkmark SVG ────────────────────────────────────────────────────────────

function CheckCircle() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="shrink-0 mt-0.5"
      aria-hidden="true"
    >
      <circle
        cx="10"
        cy="10"
        r="9"
        stroke="#c9a84c"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M6 10 L9 13 L14 7"
        stroke="#c9a84c"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
      className="py-20 lg:py-32"
      style={{
        background: "#111111",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Logo watermark */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          right: "0",
          transform: "translateY(-50%)",
          width: "480px",
          height: "480px",
          opacity: 0.055,
          pointerEvents: "none",
          zIndex: 0,
          filter: "brightness(0) invert(1)",
        }}
      >
        <img
          src="/images/logo.svg"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>

      {/* Top gold rule */}
      <hr className="gold-rule mb-0" aria-hidden="true" />

      <div
        className="section-container"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          {/* ── Left: image ──────────────────────────────────────────────── */}
          <div className="reveal-left lg:col-span-5 mb-12 lg:mb-0">
            {/* Extra padding to let the overflowing stat badge breathe */}
            <div style={{ paddingBottom: "2rem", paddingRight: "2rem" }}>
              <div className="relative">
                {/* Offset gold border frame */}
                <div
                  className="absolute -top-4 -left-4 w-full h-full"
                  style={{ border: "1px solid rgba(201, 168, 76, 0.28)" }}
                  aria-hidden="true"
                />

                {/* Secondary inner accent line */}
                <div
                  className="absolute -top-2 -left-2 w-full h-full"
                  style={{ border: "1px solid rgba(201, 168, 76, 0.1)" }}
                  aria-hidden="true"
                />

                {/* The photograph */}
                <img
                  src="/images/kimaro/kimaro-05.jpg"
                  alt="Highlife Showband — spectacol live pe scenă"
                  className="w-full object-cover relative z-10"
                  style={{
                    maxHeight: "560px",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                  }}
                  loading="lazy"
                />

                {/* Bottom-right L-shaped gold corner accent */}
                <div
                  className="absolute bottom-4 right-4 z-20"
                  aria-hidden="true"
                >
                  <div
                    style={{
                      width: "40px",
                      height: "2px",
                      background: "#c9a84c",
                      marginBottom: "4px",
                    }}
                  />
                  <div
                    style={{
                      width: "2px",
                      height: "40px",
                      background: "#c9a84c",
                    }}
                  />
                </div>

                {/* Floating stat badge — overflows outside the image */}
                <div
                  className="absolute -bottom-8 -right-8 z-20 px-5 py-4"
                  style={{ background: "#c9a84c", color: "#0d0d0d" }}
                >
                  <div className="font-display text-3xl font-bold leading-none">
                    12+
                  </div>
                  <div
                    className="font-body tracking-wider mt-1"
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                    }}
                  >
                    ani pe scenă
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: copy ──────────────────────────────────────────────── */}
          <div className="reveal-right lg:col-span-7">
            {/* Eyebrow */}
            <p className="eyebrow mb-5">De ce Highlife?</p>

            {/* Headline */}
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-champagne leading-tight mb-6">
              Mai mult decât o trupă —
              <br />
              <em className="text-gold-gradient not-italic">
                un spectacol complet
              </em>
            </h2>

            {/* Body text — paragrafele 1+2 din textul de brand */}
            <p
              className="font-body text-base leading-relaxed max-w-lg mb-5"
              style={{ color: "rgba(245, 240, 232, 0.70)" }}
            >
              Cu Highlife Showband, transformăm orice petrecere íntr-un show
              memorabil, plin de energie și interacțiune cu invitații.
            </p>
            <p
              className="font-body text-base leading-relaxed max-w-lg mb-8"
              style={{ color: "rgba(245, 240, 232, 0.58)" }}
            >
              Oferim soluții muzicale personalizate, adaptate complet stilului
              evenimentului tău și preferințelor muzicale ale invitaților. De la
              momente elegante de început până la show-uri explozive de dans,
              construim atmosfera perfectă pentru fiecare etapă a evenimentului.
            </p>

            {/* Feature bullets — staggered */}
            <ul className="space-y-4 mb-8" role="list">
              {FEATURES.map((feature, i) => (
                <li
                  key={feature}
                  className={`reveal flex items-start gap-3 stagger-${i + 1}`}
                >
                  <CheckCircle />
                  <span
                    className="font-body text-sm leading-relaxed"
                    style={{ color: "rgba(245, 240, 232, 0.78)" }}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Thin gold divider */}
            <hr className="gold-rule mb-8 max-w-xs" aria-hidden="true" />

            {/* CTA */}
            <a href="#pachete" className="btn-gold inline-flex mt-2">
              <span>Ce primești de la noi?</span>
              {/* Arrow icon */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                style={{ position: "relative", zIndex: 1 }}
              >
                <path
                  d="M3 8H13M9 4L13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
