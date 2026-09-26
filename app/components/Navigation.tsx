"use client";

import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { label: "Acasă", href: "#" },
  { label: "Evenimente", href: "#evenimente" },
  { label: "Pachete", href: "#pachete" },
  { label: "Galerie", href: "#galerie" },
  { label: "Testimoniale", href: "#testimoniale" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on outside click
  useEffect(() => {
    if (!isMobileOpen) return;
    const handler = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setIsMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isMobileOpen]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  function closeMobile() {
    setIsMobileOpen(false);
  }

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: isScrolled ? "rgba(255, 255, 255, 0.92)" : "transparent",
          backdropFilter: isScrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(16px)" : "none",
          borderBottom: isScrolled
            ? "1px solid rgba(201, 168, 76, 0.15)"
            : "1px solid transparent",
        }}
      >
        <div className="section-container">
          <nav className="flex items-center justify-between h-[72px]">
            {/* ── Logo ── */}
            <a
              href="#"
              className="flex-shrink-0 group"
              aria-label="Highlife Showband — Acasă"
            >
              <img
                src="/images/logo.svg"
                alt="Highlife Showband"
                className="transition-transform duration-300 group-hover:scale-105"
                style={{
                  height: "68px",
                  width: "auto",
                  display: "block",
                  filter: "brightness(0)",
                }}
              />
            </a>

            {/* ── Desktop Nav Links ── */}
            <ul className="hidden lg:flex items-center gap-7 list-none">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body uppercase transition-colors duration-200"
                    style={{
                      fontSize: "0.7rem",
                      letterSpacing: "0.15em",
                      color: "rgba(26, 26, 26,0.83)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#c9a84c")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(26, 26, 26,0.83)")
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* ── Desktop Right Controls ── */}
            <div className="hidden lg:flex items-center gap-4">
              {/* CTA */}
              <a
                href="#contact"
                className="btn-gold"
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.12em",
                  padding: "0.625rem 1.375rem",
                }}
              >
                <span>Solicită Ofertă</span>
              </a>
            </div>

            {/* ── Mobile Controls ── */}
            <div className="flex lg:hidden items-center gap-3">
              {/* Hamburger */}
              <button
                onClick={() => setIsMobileOpen(true)}
                aria-label="Deschide meniu"
                aria-expanded={isMobileOpen}
                className="flex flex-col justify-center items-center w-11 h-11 gap-[6px]"
              >
                <span
                  className="block w-6 h-[1.5px] transition-all duration-300"
                  style={{ background: "#c9a84c" }}
                />
                <span
                  className="block w-4 h-[1.5px] transition-all duration-300"
                  style={{ background: "rgba(26, 26, 26, 0.5)" }}
                />
                <span
                  className="block w-6 h-[1.5px] transition-all duration-300"
                  style={{ background: "#c9a84c" }}
                />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* ── Mobile Drawer Backdrop ── */}
      <div
        className="fixed inset-0 z-40 transition-opacity duration-300 lg:hidden"
        style={{
          background: "rgba(0,0,0,0.6)",
          opacity: isMobileOpen ? 1 : 0,
          pointerEvents: isMobileOpen ? "auto" : "none",
          backdropFilter: "blur(4px)",
        }}
        aria-hidden="true"
        onClick={closeMobile}
      />

      {/* ── Mobile Drawer ── */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-label="Navigare mobilă"
        aria-modal="true"
        className="fixed top-0 right-0 bottom-0 z-50 w-[300px] flex flex-col lg:hidden transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          background: "#ffffff",
          borderLeft: "1px solid rgba(201, 168, 76, 0.2)",
          transform: isMobileOpen ? "translateX(0)" : "translateX(100%)",
          boxShadow: "-10px 0 40px rgba(0,0,0,0.08)",
        }}
      >
        {/* Drawer header */}
        <div
          className="flex items-center justify-between px-6 h-[72px] flex-shrink-0"
          style={{ borderBottom: "1px solid rgba(201, 168, 76, 0.08)" }}
        >
          <span className="eyebrow">Meniu</span>
          <button
            onClick={closeMobile}
            aria-label="Închide meniu"
            className="flex items-center justify-center w-11 h-11 rounded-full transition-colors duration-200"
            style={{
              color: "rgba(26, 26, 26,0.75)",
              border: "1px solid rgba(201,168,76,0.15)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(26, 26, 26,0.75)")
            }
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <line x1="2" y1="2" x2="14" y2="14" />
              <line x1="14" y1="2" x2="2" y2="14" />
            </svg>
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex-1 flex flex-col justify-center px-8 gap-1">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="font-body uppercase py-4 transition-colors duration-200 border-b hover:text-gold"
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                color: "rgba(26, 26, 26,0.81)",
                borderColor: "rgba(201, 168, 76, 0.07)",
                transitionDelay: isMobileOpen ? `${i * 50}ms` : "0ms",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Drawer CTA */}
        <div
          className="px-8 pt-4 flex-shrink-0"
          style={{ borderTop: "1px solid rgba(201, 168, 76, 0.08)", paddingBottom: "max(2.5rem, env(safe-area-inset-bottom))" }}
        >
          <a
            href="#contact"
            onClick={closeMobile}
            className="btn-gold w-full justify-center"
            style={{ fontSize: "0.7rem", letterSpacing: "0.15em" }}
          >
            <span>Solicită Ofertă</span>
          </a>
        </div>
      </div>
    </>
  );
}
