"use client";

import { useEffect, useRef } from "react";

const REELS = [
  {
    src: "/videos/reel-01.mp4",
    label: "Highlife Showband",
    sublabel: "Reel oficial",
  },
  {
    src: "/videos/reel-02.mp4",
    label: "Nuntă de poveste",
    sublabel: "Show live",
  },
];

export default function Reels() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Autoplay only when visible — saves bandwidth until user scrolls here
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // ignore autoplay policy errors (e.g. some mobile browsers)
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.25 },
    );

    videoRefs.current.forEach((v) => {
      if (v) observer.observe(v);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="reels"
      style={{ background: "#141414", position: "relative" }}
      className="py-20 lg:py-28 overflow-hidden"
    >
      {/* Logo watermark */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "560px",
          height: "560px",
          opacity: 0.04,
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

      <div
        className="section-container"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* ── Header ── */}
        <div className="text-center mb-12 reveal">
          <p className="eyebrow mb-4">Ne urmărește live</p>
          <h2
            className="font-display text-4xl md:text-5xl font-bold text-champagne"
            style={{ lineHeight: 1.1 }}
          >
            Reeluri &amp; <span className="text-gold-gradient">Momente</span>
          </h2>
          <p
            className="font-serif italic text-lg mt-4 max-w-xl mx-auto"
            style={{ color: "rgba(245,240,232,0.50)" }}
          >
            Energia și atmosfera Highlife Showband, în câteva secunde
          </p>
        </div>

        {/* ── Reel cards — portrait format like social media ── */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 lg:gap-10">
          {REELS.map((reel, i) => (
            <div
              key={reel.src}
              className="reveal group relative overflow-hidden flex-shrink-0"
              style={{
                width: "min(320px, 85vw)",
                aspectRatio: "9 / 16",
                border: "1px solid rgba(201,168,76,0.2)",
                transitionDelay: `${i * 0.15}s`,
              }}
            >
              {/* ── Video ── */}
              <video
                ref={(el) => {
                  videoRefs.current[i] = el;
                }}
                src={reel.src}
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                aria-label={reel.label}
              />

              {/* ── Permanent dark gradient at bottom ── */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 45%, transparent 100%)",
                }}
                aria-hidden="true"
              />

              {/* ── Gold shimmer on hover ── */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "rgba(201,168,76,0.07)" }}
                aria-hidden="true"
              />

              {/* ── Gold border glow on hover ── */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 0 1px rgba(201,168,76,0.55)",
                }}
                aria-hidden="true"
              />

              {/* ── Top badge ── */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                {/* Animated dot — shows video is playing */}
                <span
                  className="animate-pulse-ring"
                  style={{
                    display: "inline-block",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#c9a84c",
                    flexShrink: 0,
                    animationDuration: "1.5s",
                  }}
                  aria-hidden="true"
                />
                <span
                  className="font-body uppercase"
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    color: "rgba(245,240,232,0.7)",
                  }}
                >
                  Live
                </span>
              </div>

              {/* ── Bottom label ── */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p
                  className="font-display font-bold text-champagne"
                  style={{ fontSize: "1.05rem", lineHeight: 1.2 }}
                >
                  {reel.label}
                </p>
                <p
                  className="font-body mt-0.5"
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(201,168,76,0.75)",
                  }}
                >
                  {reel.sublabel}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Social follow CTAs ── */}
        <div className="flex flex-wrap justify-center gap-4 mt-12 reveal stagger-2">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/highlifeshowband"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost flex items-center gap-2"
            aria-label="Urmărește Highlife Showband pe Instagram"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="5" />
              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </svg>
            <span>Instagram</span>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@Highlifeshowband"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost flex items-center gap-2"
            aria-label="Urmărește Highlife Showband pe YouTube"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 001.95-1.97A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
              <polygon
                points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
                fill="currentColor"
                stroke="none"
              />
            </svg>
            <span>YouTube</span>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@highlifeshowband"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost flex items-center gap-2"
            aria-label="Urmărește Highlife Showband pe TikTok"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.15a8.16 8.16 0 0 0 4.77 1.52V7.23a4.85 4.85 0 0 1-1-.54z" />
            </svg>
            <span>TikTok</span>
          </a>
        </div>
      </div>
    </section>
  );
}
