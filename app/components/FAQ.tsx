"use client";

import { useState } from "react";

// ── Data ─────────────────────────────────────────────────────────────────────

const faqs = [
  {
    question: "Cum rezerv Highlife Showband pentru evenimentul meu?",
    answer:
      "Procesul este simplu: ne contactezi prin formularul de pe site sau pe WhatsApp, stabilim detaliile evenimentului (dată, locație, tip, număr invitați), primești o ofertă personalizată în maxim 24 de ore, semnăm contractul și plătești avansul de 30% pentru confirmarea datei.",
  },
  {
    question: "Care este avansul necesar pentru confirmarea rezervării?",
    answer:
      "Pentru confirmarea rezervării solicităm un avans de 30% din valoarea totală a pachetului ales. Restul sumei se achită cu 7 zile înainte de eveniment sau la fața locului, conform condițiilor din contract.",
  },
  {
    question: "Includeți echipament audio și de lumini în pachet?",
    answer:
      "Da! Toate pachetele noastre includ sistem PA profesional și echipament de lumini adaptat spațiului evenimentului. Nu trebuie să vă faceți griji pentru logistică — echipa noastră aduce și montează totul înainte de eveniment.",
  },
  {
    question: "Pot personaliza repertoriul muzical?",
    answer:
      "Absolut! Personalizarea repertoriului este unul dintre avantajele noastre principale. Puteți trimite o listă cu melodiile preferate, iar noi facem tot posibilul să le includem. Avem un repertoriu de 300+ piese din toate genurile — pop, rock, jazz, folclor, hituri internaționale și mai mult.",
  },
  {
    question: "Activați și în afara orașului / județului?",
    answer:
      "Da, activăm în toată România și, ocazional, peste granița țării. Taxele de deplasare sunt calculate în funcție de distanță și sunt incluse transparent în oferta finală, fără surprize.",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section
      id="faq"
      className="py-20 lg:py-28"
      style={{ background: "#111111" }}
    >
      <div className="section-container">
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="max-w-2xl mx-auto text-center mb-14 reveal">
          <p className="eyebrow mb-4">Ai Întrebări?</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-champagne font-bold">
            Răspundem la cele mai frecvente întrebări
          </h2>
        </div>

        {/* ── Accordion list ─────────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                borderBottom: "1px solid rgba(201,168,76,0.1)",
                transitionDelay: `${i * 0.05}s`,
              }}
            >
              <button
                className="w-full flex items-center justify-between py-5 text-left group"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span
                  className="font-body font-semibold pr-4 text-sm lg:text-base transition-colors duration-200"
                  style={{
                    color: openIndex === i ? "#c9a84c" : "#f5f0e8",
                  }}
                >
                  {faq.question}
                </span>
                {/* +/× toggle icon */}
                <span
                  aria-hidden="true"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "28px",
                    height: "28px",
                    border: "1px solid #c9a84c",
                    color: "#c9a84c",
                    flexShrink: 0,
                    fontSize: "1.1rem",
                    lineHeight: 1,
                    transform:
                      openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  +
                </span>
              </button>

              <div
                id={`faq-answer-${i}`}
                className={`accordion-content${openIndex === i ? " open" : ""}`}
                role="region"
                aria-labelledby={`faq-btn-${i}`}
              >
                <p
                  className="font-body text-sm leading-relaxed pb-5"
                  style={{ color: "rgba(245,240,232,0.60)" }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ─────────────────────────────────────────────────── */}
        <div className="text-center mt-14 reveal">
          <p
            className="font-body text-sm mb-5"
            style={{ color: "rgba(245,240,232,0.45)" }}
          >
            Nu ai găsit răspunsul la întrebarea ta?
          </p>
          <a href="#contact" className="btn-ghost">
            <span>Contactează-ne direct</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
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
    </section>
  );
}
