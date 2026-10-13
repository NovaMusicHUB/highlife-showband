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

// ── Component ─────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer style={{ background: "#202024", borderTop: "1px solid rgba(243,240,234,0.1)" }}>
      {/* ── Main footer grid ─────────────────────────────────────────────── */}
      <div className="section-container py-16 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* ── Column 1: Brand ──────────────────────────────────────────── */}
          <div>
            <a href="#" className="inline-block mb-5" aria-label="Highlife Showband — Acasă">
              <img
                src="/images/logo.svg"
                alt="Highlife Showband"
                style={{ height: "48px", width: "auto", display: "block", filter: "brightness(0) invert(1)" }}
              />
            </a>

            <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(243, 240, 234,0.62)" }}>
              Muzică live pentru cel mai important eveniment din viața ta.
              Profesionalism, pasiune și energie pe fiecare scenă.
            </p>
          </div>

          {/* ── Column 2: Quick links ─────────────────────────────────────── */}
          <div>
            <p className="eyebrow mb-5">Linkuri Rapide</p>
            <nav aria-label="Navigare rapidă footer">
              <ul className="list-none space-y-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-body text-sm block py-1.5"
                      style={{ color: "rgba(243, 240, 234,0.66)" }}
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
            <p className="eyebrow mb-5">Evenimente</p>
            <ul className="list-none space-y-1">
              {EVENT_TYPES.map((type) => (
                <li key={type}>
                  <a
                    href="#evenimente"
                    className="font-body text-sm block py-1.5"
                    style={{ color: "rgba(243, 240, 234,0.66)" }}
                  >
                    {type}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 4: Social & contact ───────────────────────────────── */}
          <div>
            <p className="eyebrow mb-5">Urmărește-ne</p>
            <ul className="list-none space-y-1 mb-6">
              <li>
                <a
                  href="https://www.instagram.com/highlifeshowband"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm block py-1.5"
                  style={{ color: "rgba(243, 240, 234,0.66)" }}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61590603836328"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm block py-1.5"
                  style={{ color: "rgba(243, 240, 234,0.66)" }}
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@Highlifeshowband"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm block py-1.5"
                  style={{ color: "rgba(243, 240, 234,0.66)" }}
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@highlife.show.band"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm block py-1.5"
                  style={{ color: "rgba(243, 240, 234,0.66)" }}
                >
                  TikTok
                </a>
              </li>
            </ul>

            {/* Quick contact */}
            <p className="font-body text-xs mb-1" style={{ color: "rgba(243, 240, 234,0.5)" }}>
              Rezervări &amp; info:
            </p>
            <a href="tel:+40754636633" className="font-body text-sm" style={{ color: "#f0524d" }}>
              0754 636 633
            </a>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ───────────────────────────────────────────────────── */}
      <div style={{ borderTop: "1px solid rgba(243,240,234,0.1)" }}>
        <div className="section-container py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs" style={{ color: "rgba(243, 240, 234,0.5)" }}>
            &copy; {new Date().getFullYear()} Highlife Showband. Toate drepturile rezervate.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/politica-de-confidentialitate"
              className="font-body text-xs"
              style={{ color: "rgba(243, 240, 234,0.5)" }}
            >
              Politică de Confidențialitate
            </a>
            <p className="font-body text-xs" style={{ color: "rgba(243, 240, 234,0.5)" }}>
              Site realizat cu ❤️ pentru muzică
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
