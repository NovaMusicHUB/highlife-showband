"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden flex items-center min-h-screen"
      style={{ background: "#ffffff", paddingTop: "76px" }}
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* ── Left: text ── */}
          <div className="py-14 lg:py-0 order-2 lg:order-1">
            <p
              className="eyebrow mb-6 animate-fade-up"
              style={{ animationDelay: "0.1s", opacity: 0, animationFillMode: "forwards" }}
            >
              Muzică live pentru evenimentul tău
            </p>

            <h1
              className="font-display leading-[1.08] mb-7 text-balance animate-fade-up"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.25rem)",
                fontWeight: 600,
                color: "#191919",
                animationDelay: "0.2s",
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              Facem din evenimentul tău o{" "}
              <em className="text-accent not-italic">amintire de neuitat</em>
            </h1>

            <p
              className="font-body max-w-md mb-10 animate-fade-up"
              style={{
                fontSize: "1.1rem",
                animationDelay: "0.35s",
                opacity: 0,
                animationFillMode: "forwards",
                color: "rgba(25, 25, 25,0.62)",
                lineHeight: 1.7,
              }}
            >
              Muzică live pentru nunți, evenimente corporate și petreceri
              private în toată România.
            </p>

            <div
              className="flex gap-4 flex-wrap animate-fade-up"
              style={{
                animationDelay: "0.5s",
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              <a href="#contact" className="btn-primary">
                <span>Solicită Ofertă</span>
              </a>
              <a href="#reels" className="btn-secondary">
                <span>Vezi Showreel</span>
              </a>
            </div>
          </div>

          {/* ── Right: real photo, large and bright ── */}
          <div className="order-1 lg:order-2 pt-10 lg:pt-0">
            <div
              className="relative w-full"
              style={{ aspectRatio: "4 / 5" }}
            >
              <img
                src="/images/cover.jpg"
                alt="Highlife Showband — membrii trupei pe scenă"
                className="w-full h-full"
                style={{
                  objectFit: "cover",
                  objectPosition: "center 15%",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────────────── */}
      <div
        className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-fade-in"
        style={{
          animationDelay: "1.1s",
          opacity: 0,
          animationFillMode: "forwards",
        }}
        aria-hidden="true"
      >
        <span className="eyebrow" style={{ fontSize: "0.6rem" }}>
          Scroll
        </span>
        <div className="animate-scroll-bounce">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path
              d="M4 7 L10 13 L16 7"
              stroke="#8a7454"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
