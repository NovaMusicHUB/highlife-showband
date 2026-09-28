"use client";

import { useEffect, useRef, useState } from "react";

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
  const [isPlaying, setIsPlaying] = useState<boolean[]>(() =>
    REELS.map(() => false),
  );

  // Mobile: autoplay only while the reel is in view (saves bandwidth otherwise).
  // Desktop: never autoplay — playback starts only on click.
  // On any device, playback pauses once the reel scrolls out of view.
  useEffect(() => {
    const isTouchDevice =
      typeof window !== "undefined" &&
      window.matchMedia("(hover: none) and (pointer: coarse)").matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            if (isTouchDevice) {
              video.play().catch(() => {
                // ignore autoplay policy errors (e.g. some mobile browsers)
              });
            }
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

  function toggleVideo(index: number) {
    const video = videoRefs.current[index];
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }

  return (
    <section id="reels" style={{ background: "#ffffff" }} className="py-24 lg:py-32">
      <div className="section-container">
        {/* ── Header ── */}
        <div className="max-w-2xl mb-16 reveal">
          <p className="eyebrow mb-5">Ne urmărește live</p>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontWeight: 600,
              lineHeight: 1.15,
              color: "#191919",
            }}
          >
            Reeluri &amp; <em className="text-accent not-italic">momente</em>
          </h2>
        </div>

        {/* ── Reel cards — portrait format like social media ── */}
        <div className="flex flex-col sm:flex-row items-start gap-10 lg:gap-14">
          {REELS.map((reel, i) => (
            <div
              key={reel.src}
              className={`reveal stagger-${i + 1} group relative overflow-hidden flex-shrink-0`}
              style={{
                width: "min(320px, 85vw)",
                aspectRatio: "9 / 16",
                cursor: "pointer",
              }}
              onClick={() => toggleVideo(i)}
              role="button"
              tabIndex={0}
              aria-label={
                isPlaying[i] ? `Pauzează ${reel.label}` : `Redă ${reel.label}`
              }
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleVideo(i);
                }
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
                onPlay={() =>
                  setIsPlaying((prev) =>
                    prev.map((v, idx) => (idx === i ? true : v)),
                  )
                }
                onPause={() =>
                  setIsPlaying((prev) =>
                    prev.map((v, idx) => (idx === i ? false : v)),
                  )
                }
                className="absolute inset-0 w-full h-full object-cover"
                aria-hidden="true"
                tabIndex={-1}
              />

              {/* ── Permanent subtle gradient at bottom for label legibility ── */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 40%)",
                }}
                aria-hidden="true"
              />

              {/* ── Play / pause button ── */}
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                aria-hidden="true"
              >
                <span
                  className={`flex items-center justify-center transition-opacity duration-300 ${
                    isPlaying[i]
                      ? "opacity-0 group-hover:opacity-100"
                      : "opacity-100"
                  }`}
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.15)",
                    border: "1px solid rgba(255,255,255,0.7)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {isPlaying[i] ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff">
                      <rect x="6" y="5" width="4" height="14" rx="1" />
                      <rect x="14" y="5" width="4" height="14" rx="1" />
                    </svg>
                  ) : (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#ffffff"
                      style={{ marginLeft: "2px" }}
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </span>
              </div>

              {/* ── Bottom label ── */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p
                  className="font-display"
                  style={{ fontSize: "1.05rem", fontWeight: 600, lineHeight: 1.2, color: "#ffffff" }}
                >
                  {reel.label}
                </p>
                <p
                  className="font-body mt-0.5"
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.75)",
                  }}
                >
                  {reel.sublabel}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Social follow links ── */}
        <div className="flex flex-wrap gap-x-8 gap-y-3 mt-14 reveal stagger-2">
          <a
            href="https://www.instagram.com/highlifeshowband"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline font-body text-sm"
            aria-label="Urmărește Highlife Showband pe Instagram"
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com/@Highlifeshowband"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline font-body text-sm"
            aria-label="Urmărește Highlife Showband pe YouTube"
          >
            YouTube
          </a>
          <a
            href="https://www.tiktok.com/@highlife.show.band"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline font-body text-sm"
            aria-label="Urmărește Highlife Showband pe TikTok"
          >
            TikTok
          </a>
        </div>
      </div>
    </section>
  );
}
