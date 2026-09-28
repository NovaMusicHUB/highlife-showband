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
  {
    question:
      "A cântat Highlife Showband și pe scene mari, în fața publicului larg?",
    answer:
      "Da. Highlife Showband a fost selectată pentru KIMARO Open Stage 2026, inițiativa Kiss FM, Magic FM și Rock FM prin care trupe sunt alese să cânte pe scena din Piața Constituției, în fața a mii de oameni, alături de artiști precum Smiley, Ștefan Bănică și Theo Rose.",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section id="faq" className="py-24 lg:py-32" style={{ background: "#ffffff" }}>
      <div className="section-container">
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="max-w-2xl mx-auto text-center mb-16 reveal">
          <p className="eyebrow mb-5">Ai Întrebări?</p>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(1.85rem, 3.5vw, 2.75rem)", fontWeight: 600, color: "#191919" }}
          >
            Răspundem la cele mai frecvente întrebări
          </h2>
        </div>

        {/* ── Accordion list ─────────────────────────────────────────────── */}
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                borderBottom: "1px solid #e8e4da",
                transitionDelay: `${i * 0.05}s`,
              }}
            >
              <button
                className="w-full flex items-center justify-between py-5 text-left"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span
                  className="font-body font-semibold pr-4 text-sm lg:text-base"
                  style={{ color: openIndex === i ? "#8a7454" : "#191919" }}
                >
                  {faq.question}
                </span>
                {/* +/× toggle icon */}
                <span
                  aria-hidden="true"
                  className="font-display"
                  style={{
                    fontSize: "1.3rem",
                    lineHeight: 1,
                    color: "#191919",
                    flexShrink: 0,
                    transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
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
                  className="font-body text-sm leading-relaxed pb-6"
                  style={{ color: "rgba(25, 25, 25,0.65)" }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ─────────────────────────────────────────────────── */}
        <div className="text-center mt-16 reveal">
          <p className="font-body text-sm mb-5" style={{ color: "rgba(25, 25, 25,0.55)" }}>
            Nu ai găsit răspunsul la întrebarea ta?
          </p>
          <a href="#contact" className="btn-secondary">
            <span>Contactează-ne direct</span>
          </a>
        </div>
      </div>
    </section>
  );
}
