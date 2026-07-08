"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#0d0d0d" }}
    >
      {/* ── Logo watermark — decorative background element ─────────────── */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: "-60px",
          bottom: "-60px",
          width: "520px",
          height: "520px",
          opacity: 0.045,
          zIndex: 0,
          filter: "invert(1) sepia(1) saturate(2) hue-rotate(5deg)",
        }}
        aria-hidden="true"
      >
        <img
          src="/images/logo.svg"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>

      {/* ── Triunghi geometric futurist — decorativ ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -54%)",
          width: "min(75vw, 860px)",
          zIndex: 1,
          opacity: 0.07,
        }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 100 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Triunghi exterior */}
          <polygon
            points="50,1.5 98.5,86.5 1.5,86.5"
            stroke="#c9a84c"
            strokeWidth="0.4"
            fill="none"
          />
          {/* Triunghi mediu */}
          <polygon
            points="50,18 83,79 17,79"
            stroke="#c9a84c"
            strokeWidth="0.3"
            fill="none"
          />
          {/* Triunghi interior */}
          <polygon
            points="50,34 68.5,71.5 31.5,71.5"
            stroke="#c9a84c"
            strokeWidth="0.25"
            fill="none"
          />
          {/* Punct central */}
          <circle cx="50" cy="63" r="0.8" fill="#c9a84c" opacity="0.6" />
          {/* Linii verticale de la vârf la bază */}
          <line
            x1="50"
            y1="1.5"
            x2="50"
            y2="86.5"
            stroke="#c9a84c"
            strokeWidth="0.15"
            strokeDasharray="1.5 2"
          />
          {/* Linie orizontală mediană */}
          <line
            x1="25"
            y1="44"
            x2="75"
            y2="44"
            stroke="#c9a84c"
            strokeWidth="0.15"
            strokeDasharray="1.5 2"
          />
        </svg>
      </div>

      {/* ── Band photo — right side, desktop ── */}
      <div
        className="hidden lg:block absolute top-0 bottom-0 right-0 pointer-events-none"
        style={{ width: "52%", zIndex: 1 }}
        aria-hidden="true"
      >
        {/* Left-edge blend gradient */}
        <div
          className="absolute inset-y-0 left-0 z-10"
          style={{
            width: "55%",
            background:
              "linear-gradient(to right, #0d0d0d 0%, rgba(13,13,13,0.8) 40%, transparent 100%)",
          }}
        />
        {/* Bottom blend */}
        <div
          className="absolute bottom-0 left-0 right-0 z-10"
          style={{
            height: "30%",
            background: "linear-gradient(to top, #0d0d0d 0%, transparent 100%)",
          }}
        />
        <img
          src="/images/cover.png"
          alt="Highlife Showband — membrii trupei"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 10%",
            display: "block",
          }}
        />
      </div>

      {/* ── Mobile / tablet: photo as subtle dark background ── */}
      <div
        className="lg:hidden absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/images/cover.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 15%",
          opacity: 0.18,
          zIndex: 0,
        }}
        aria-hidden="true"
      />
      {/* Mobile overlay to keep text readable */}
      <div
        className="lg:hidden absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(160deg, rgba(13,13,13,0.85) 0%, rgba(13,13,13,0.7) 60%, rgba(13,13,13,0.9) 100%)",
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      {/* ── Decorative blurred gold orbs ────────────────────────────────── */}
      <div
        className="absolute top-24 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "#c9a84c",
          opacity: 0.04,
          filter: "blur(80px)",
          zIndex: 1,
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[28rem] h-[28rem] rounded-full pointer-events-none"
        style={{
          background: "#c9a84c",
          opacity: 0.05,
          filter: "blur(100px)",
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      {/* ── Main content ────────────────────────────────────────────────── */}
      <div className="relative w-full section-container" style={{ zIndex: 2 }}>
        {/*
          Text block: full width on mobile, left 52% on desktop
          (photo occupies right 52%, so we stay in the left portion)
        */}
        <div
          className="flex flex-col justify-center pt-28 pb-20 lg:pt-32 lg:pb-24"
          style={{ maxWidth: "600px" }}
        >
          {/* Headline */}
          <h1
            className="font-display font-bold text-champagne leading-[1.05] mb-6 text-balance animate-fade-up"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              animationDelay: "0.4s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            Facem din evenimentul tău o{" "}
            <em className="text-gold-gradient not-italic">
              amintire de neuitat
            </em>
          </h1>

          {/* Subtitle */}
          <p
            className="font-serif italic max-w-lg mb-10 animate-fade-up"
            style={{
              fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
              animationDelay: "0.6s",
              opacity: 0,
              animationFillMode: "forwards",
              color: "rgba(245, 240, 232, 0.65)",
              lineHeight: 1.6,
            }}
          >
            Muzică live pentru nunți, evenimente corporate și petreceri private
            în toată România
          </p>

          {/* CTA row */}
          <div
            className="flex gap-4 flex-wrap animate-fade-up"
            style={{
              animationDelay: "0.8s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            <a href="#contact" className="btn-gold">
              <span>Solicită o Ofertă</span>
            </a>
            <a href="#showreel" className="btn-ghost">
              <span>▶ Video</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────────────── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in"
        style={{
          animationDelay: "1.4s",
          opacity: 0,
          animationFillMode: "forwards",
          zIndex: 2,
        }}
        aria-hidden="true"
      >
        <span className="eyebrow" style={{ fontSize: "0.6rem" }}>
          Scroll
        </span>
        <div className="animate-scroll-bounce">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M4 7 L10 13 L16 7"
              stroke="#c9a84c"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
