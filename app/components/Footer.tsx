// Server Component — no 'use client' directive

const NAV_LINKS = [
  { label: "Acasă", href: "#" },
  { label: "Evenimente", href: "#evenimente" },
  { label: "Pachete", href: "#pachete" },
  { label: "Galerie", href: "#galerie" },
  { label: "Testimoniale", href: "#testimoniale" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const EVENT_TYPES = [
  "Nunți",
  "Botezuri",
  "Corporate",
  "Petreceri Private",
  "Gale & Premii",
  "Evenimente Publice",
];

// ── Logo SVG ──────────────────────────────────────────────────────────────────

function LogoSVG() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 42 42"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 5 L8 37"
        stroke="#c9a84c"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M8 21 L30 21"
        stroke="#c9a84c"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M30 5 L30 28"
        stroke="#c9a84c"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <ellipse
        cx="27"
        cy="33"
        rx="6"
        ry="4"
        transform="rotate(-18 27 33)"
        fill="#c9a84c"
      />
      <path
        d="M33 29 C39 25 39 31 34 33"
        stroke="#c9a84c"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0d0d0d",
        borderTop: "1px solid rgba(201,168,76,0.12)",
      }}
    >
      {/* ── Main footer grid ─────────────────────────────────────────────── */}
      <div className="section-container py-14 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* ── Column 1: Brand ──────────────────────────────────────────── */}
          <div>
            <a
              href="#"
              className="inline-block mb-5 group"
              aria-label="Highlife Showband — Acasă"
            >
              <img
                src="/images/logo.svg"
                alt="Highlife Showband"
                className="transition-transform duration-300 group-hover:scale-105"
                style={{
                  height: "64px",
                  width: "auto",
                  display: "block",
                  filter:
                    "brightness(0) invert(1) drop-shadow(0 0 10px rgba(255,255,255,0.2))",
                }}
              />
            </a>

            <p
              className="font-body text-xs mt-2 leading-relaxed"
              style={{ color: "rgba(245,240,232,0.35)" }}
            >
              Muzică live pentru cel mai important eveniment din viața ta.
              Profesionalism, pasiune și energie pe fiecare scenă.
            </p>

            <hr className="gold-rule mt-6 max-w-20" aria-hidden="true" />
          </div>

          {/* ── Column 2: Quick links ─────────────────────────────────────── */}
          <div>
            <p className="eyebrow mb-4">Linkuri Rapide</p>
            <nav aria-label="Navigare rapidă footer">
              <ul className="list-none space-y-0.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-body text-xs block py-1 transition-colors duration-200 hover:text-gold"
                      style={{ color: "rgba(245,240,232,0.40)" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* ── Column 3: Event types ─────────────────────────────────────── */}
          <div>
            <p className="eyebrow mb-4">Evenimente</p>
            <ul className="list-none space-y-0.5">
              {EVENT_TYPES.map((type) => (
                <li key={type}>
                  <a
                    href="#evenimente"
                    className="font-body text-xs block py-1 transition-colors duration-200 hover:text-gold"
                    style={{ color: "rgba(245,240,232,0.40)" }}
                  >
                    {type}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 4: Social & contact ───────────────────────────────── */}
          <div>
            <p className="eyebrow mb-4">Urmărește-ne</p>
            <ul className="list-none space-y-1">
              {/* Instagram */}
              <li>
                <a
                  href="https://www.instagram.com/highlifeshowband"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-1.5 group"
                  aria-label="Instagram"
                >
                  <span
                    className="transition-colors duration-200 group-hover:text-gold"
                    style={{ color: "rgba(245,240,232,0.40)" }}
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
                  </span>
                  <span
                    className="font-body text-xs transition-colors duration-200 group-hover:text-gold"
                    style={{ color: "rgba(245,240,232,0.40)" }}
                  >
                    Instagram
                  </span>
                </a>
              </li>
              {/* Facebook */}
              <li>
                <a
                  href="https://www.facebook.com/highlifeshowband"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-1.5 group"
                  aria-label="Facebook"
                >
                  <span
                    className="transition-colors duration-200 group-hover:text-gold"
                    style={{ color: "rgba(245,240,232,0.40)" }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </span>
                  <span
                    className="font-body text-xs transition-colors duration-200 group-hover:text-gold"
                    style={{ color: "rgba(245,240,232,0.40)" }}
                  >
                    Facebook
                  </span>
                </a>
              </li>
              {/* YouTube */}
              <li>
                <a
                  href="https://www.youtube.com/@Highlifeshowband"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-1.5 group"
                  aria-label="YouTube"
                >
                  <span
                    className="transition-colors duration-200 group-hover:text-gold"
                    style={{ color: "rgba(245,240,232,0.40)" }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                      <polygon
                        points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
                        fill="#0d0d0d"
                      />
                    </svg>
                  </span>
                  <span
                    className="font-body text-xs transition-colors duration-200 group-hover:text-gold"
                    style={{ color: "rgba(245,240,232,0.40)" }}
                  >
                    YouTube
                  </span>
                </a>
              </li>
              {/* TikTok */}
              <li>
                <a
                  https://www.tiktok.com/@highlife.show.band
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-1.5 group"
                  aria-label="TikTok"
                >
                  <span
                    className="transition-colors duration-200 group-hover:text-gold"
                    style={{ color: "rgba(245,240,232,0.40)" }}
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
                  </span>
                  <span
                    className="font-body text-xs transition-colors duration-200 group-hover:text-gold"
                    style={{ color: "rgba(245,240,232,0.40)" }}
                  >
                    TikTok
                  </span>
                </a>
              </li>
            </ul>

            {/* Quick contact */}
            <div
              className="mt-6 pt-6"
              style={{ borderTop: "1px solid rgba(201,168,76,0.08)" }}
            >
              <p
                className="font-body text-xs mb-1"
                style={{ color: "rgba(245,240,232,0.30)" }}
              >
                Rezervări &amp; info:
              </p>
              <a
                href="tel:+40754636633"
                className="font-body text-xs transition-colors duration-200 hover:text-gold"
                style={{ color: "rgba(201,168,76,0.70)" }}
              >
                0754 636 633
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ───────────────────────────────────────────────────── */}
      <div style={{ borderTop: "1px solid rgba(201,168,76,0.08)" }}>
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="font-body text-xs"
            style={{ color: "rgba(245,240,232,0.30)" }}
          >
            &copy; {new Date().getFullYear()} Highlife Showband. Toate
            drepturile rezervate.
          </p>
          <p
            className="font-body text-xs"
            style={{ color: "rgba(245,240,232,0.30)" }}
          >
            Site realizat cu ❤️ pentru muzică
          </p>
        </div>
      </div>
    </footer>
  );
}
