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
          background: isScrolled ? "rgba(255, 255, 255, 0.94)" : "transparent",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(12px)" : "none",
          borderBottom: isScrolled
            ? "1px solid #e8e4da"
            : "1px solid transparent",
        }}
      >
        <div className="section-container">
          <nav className="flex items-center justify-between h-[76px]">
            {/* ── Logo ── */}
            <a
              href="#"
              className="flex-shrink-0"
              aria-label="Highlife Showband — Acasă"
            >
              <img
                src="/images/logo.svg"
                alt="Highlife Showband"
                style={{
                  height: "56px",
                  width: "auto",
                  display: "block",
                  filter: "brightness(0)",
                }}
              />
            </a>

            {/* ── Desktop Nav Links ── */}
            <ul className="hidden lg:flex items-center gap-8 list-none">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body link-underline"
                    style={{
                      fontSize: "0.8rem",
                      letterSpacing: "0.02em",
                      color: "rgba(25, 25, 25, 0.78)",
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* ── Desktop Right Controls ── */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="#contact" className="btn-primary">
                <span>Solicită Ofertă</span>
              </a>
            </div>

            {/* ── Mobile Controls ── */}
            <div className="flex lg:hidden items-center gap-3">
              <button
                onClick={() => setIsMobileOpen(true)}
                aria-label="Deschide meniu"
                aria-expanded={isMobileOpen}
                className="flex flex-col justify-center items-center w-11 h-11 gap-[6px]"
              >
                <span
                  className="block w-6 h-[1.5px]"
                  style={{ background: "#191919" }}
                />
                <span
                  className="block w-6 h-[1.5px]"
                  style={{ background: "#191919" }}
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
          background: "rgba(25,25,25,0.4)",
          opacity: isMobileOpen ? 1 : 0,
          pointerEvents: isMobileOpen ? "auto" : "none",
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
          borderLeft: "1px solid #e8e4da",
          transform: isMobileOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        {/* Drawer header */}
        <div
          className="flex items-center justify-between px-6 h-[76px] flex-shrink-0"
          style={{ borderBottom: "1px solid #e8e4da" }}
        >
          <span className="eyebrow">Meniu</span>
          <button
            onClick={closeMobile}
            aria-label="Închide meniu"
            className="flex items-center justify-center w-11 h-11"
            style={{ color: "rgba(25, 25, 25,0.75)" }}
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
              className="font-body py-4 border-b"
              style={{
                fontSize: "0.95rem",
                color: "rgba(25, 25, 25,0.85)",
                borderColor: "#e8e4da",
                transitionDelay: isMobileOpen ? `${i * 40}ms` : "0ms",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Drawer CTA */}
        <div
          className="px-8 pt-4 flex-shrink-0"
          style={{
            borderTop: "1px solid #e8e4da",
            paddingBottom: "max(2.5rem, env(safe-area-inset-bottom))",
          }}
        >
          <a
            href="#contact"
            onClick={closeMobile}
            className="btn-primary w-full justify-center"
          >
            <span>Solicită Ofertă</span>
          </a>
        </div>
      </div>
    </>
  );
}
