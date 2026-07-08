"use client";

export default function Guarantee() {
  return (
    <section
      id="garantie"
      className="py-20 lg:py-28"
      style={{
        background: "#0d0d0d",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Logo watermark */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-40px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "500px",
          height: "500px",
          opacity: 0.045,
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

      {/* Decorative gold glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "#c9a84c",
          opacity: 0.04,
          filter: "blur(130px)",
          pointerEvents: "none",
        }}
      />

      <div
        className="section-container"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* ── Header ──────────────────────────────────────────────────────── */}
        <div className="text-center mb-14 reveal">
          <p className="eyebrow mb-4">Promisiunea Noastră</p>
          <h2
            className="font-display font-bold text-champagne"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", lineHeight: 1.1 }}
          >
            Garanție{" "}
            <em className="text-gold-gradient not-italic">200% Satisfacție</em>
          </h2>
        </div>

        {/* ── Main card ───────────────────────────────────────────────────── */}
        <div className="max-w-4xl mx-auto reveal">
          <div
            style={{
              border: "1px solid rgba(201, 168, 76, 0.25)",
              background: "rgba(201, 168, 76, 0.03)",
              padding: "clamp(2rem, 5vw, 3.5rem)",
              position: "relative",
            }}
          >
            {/* Top accent line */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: 0,
                left: "10%",
                right: "10%",
                height: "2px",
                background:
                  "linear-gradient(to right, transparent, #c9a84c, transparent)",
              }}
            />

            {/* Layout: number left, text right on desktop */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-14">
              {/* Big number */}
              <div className="text-center lg:text-left flex-shrink-0">
                <span
                  className="font-display font-bold text-gold-gradient"
                  style={{ fontSize: "clamp(5rem, 12vw, 8rem)", lineHeight: 1 }}
                  aria-label="200 la sută"
                >
                  200%
                </span>
                <p
                  className="font-body uppercase mt-1"
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.25em",
                    color: "rgba(245, 240, 232, 0.4)",
                  }}
                >
                  Satisfacție Garantată
                </p>
              </div>

              {/* Vertical separator — desktop only */}
              <div
                aria-hidden="true"
                className="hidden lg:block flex-shrink-0"
                style={{
                  width: "1px",
                  alignSelf: "stretch",
                  background: "rgba(201, 168, 76, 0.15)",
                  margin: "0.5rem 0",
                }}
              />

              {/* Text block */}
              <div className="flex flex-col gap-6 text-center lg:text-left">
                {/* Main promise */}
                <p
                  className="font-serif italic"
                  style={{
                    fontSize: "clamp(1.1rem, 2.2vw, 1.35rem)",
                    lineHeight: 1.7,
                    color: "rgba(245, 240, 232, 0.80)",
                  }}
                >
                  Ne asumăm fiecare set cu o promisiune clară:{" "}
                  <strong className="text-champagne not-italic">
                    ringul de dans nu stă gol pe durata unui set întreg.
                  </strong>
                </p>

                {/* Small fine-print note */}
                <div
                  style={{
                    display: "inline-block",
                    border: "1px solid rgba(201, 168, 76, 0.12)",
                    background: "rgba(255,255,255,0.02)",
                    borderRadius: "2px",
                    padding: "0.6rem 0.9rem",
                    textAlign: "left",
                  }}
                >
                  <p
                    className="font-body"
                    style={{
                      fontSize: "0.72rem",
                      lineHeight: 1.6,
                      color: "rgba(245, 240, 232, 0.35)",
                      fontStyle: "italic",
                    }}
                  >
                    * Garanția se aplică dacă nicio persoană nu dansează pe
                    durata unui set complet (20–30 min). Momente scurte în care
                    oaspeții se odihnesc nu constituie condiția de rambursare.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom icon row */}
            <div
              style={{
                height: "1px",
                background: "rgba(201, 168, 76, 0.1)",
                margin: "2.5rem 0 2rem",
              }}
              aria-hidden="true"
            />

            <div className="flex items-center justify-center gap-10 flex-wrap">
              {[
                { label: "Ring de dans plin", sub: "garantat pe fiecare set" },
                {
                  label: "Fără clauze ascunse",
                  sub: "termeni simpli și clari",
                },
                {
                  label: "Rambursare integrală",
                  sub: "dacă condiția e îndeplinită",
                },
              ].map(({ label, sub }) => (
                <div key={label} className="flex items-center gap-3">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    aria-hidden="true"
                    style={{ flexShrink: 0 }}
                  >
                    <circle
                      cx="9"
                      cy="9"
                      r="8"
                      stroke="#c9a84c"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M5.5 9 L7.8 11.5 L12.5 6.5"
                      stroke="#c9a84c"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>
                    <div
                      className="font-body font-semibold"
                      style={{
                        fontSize: "0.78rem",
                        color: "rgba(245,240,232,0.75)",
                      }}
                    >
                      {label}
                    </div>
                    <div
                      className="font-body"
                      style={{
                        fontSize: "0.68rem",
                        color: "rgba(245,240,232,0.35)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom accent line */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                bottom: 0,
                left: "10%",
                right: "10%",
                height: "2px",
                background:
                  "linear-gradient(to right, transparent, #c9a84c, transparent)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
