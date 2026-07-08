"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

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

  // Sync theme state from the <html data-theme> attribute via useSyncExternalStore
  const isDark = useSyncExternalStore(
    (callback) => {
      const observer = new MutationObserver(callback);
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme"],
      });
      return () => observer.disconnect();
    },
    // client snapshot
    () => document.documentElement.getAttribute("data-theme") !== "light",
    // server snapshot — default to dark
    () => true,
  );

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

  function toggleTheme() {
    const next = isDark ? "light" : "dark";
    document.documentElement.setAttribute(
      "data-theme",
      next === "dark" ? "" : "light",
    );
    if (next === "dark") {
      document.documentElement.removeAttribute("data-theme");
    }
    try {
      localStorage.setItem("theme", next === "dark" ? "" : "light");
    } catch {}
  }

  function closeMobile() {
    setIsMobileOpen(false);
  }

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: isScrolled ? "rgba(13, 13, 13, 0.97)" : "transparent",
          backdropFilter: isScrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(16px)" : "none",
          borderBottom: isScrolled
            ? "1px solid rgba(201, 168, 76, 0.1)"
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
                  filter:
                    "brightness(0) invert(1) drop-shadow(0 0 18px rgba(255,255,255,0.45))",
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
                      color: "rgba(245, 240, 232, 0.7)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#c9a84c")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(245, 240, 232, 0.7)")
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* ── Desktop Right Controls ── */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                aria-label={
                  isDark
                    ? "Activează modul luminos"
                    : "Activează modul întunecat"
                }
                className="flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-200"
                style={{ color: "rgba(245, 240, 232, 0.5)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(245, 240, 232, 0.5)")
                }
              >
                {isDark ? (
                  /* Sun icon */
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                ) : (
                  /* Moon icon */
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </button>

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
              {/* Theme toggle mobile */}
              <button
                onClick={toggleTheme}
                aria-label={
                  isDark
                    ? "Activează modul luminos"
                    : "Activează modul întunecat"
                }
                className="flex items-center justify-center w-8 h-8"
                style={{ color: "rgba(245, 240, 232, 0.5)" }}
              >
                {isDark ? (
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                ) : (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </button>

              {/* Hamburger */}
              <button
                onClick={() => setIsMobileOpen(true)}
                aria-label="Deschide meniu"
                aria-expanded={isMobileOpen}
                className="flex flex-col justify-center items-center w-10 h-10 gap-[6px]"
              >
                <span
                  className="block w-6 h-[1.5px] transition-all duration-300"
                  style={{ background: "#c9a84c" }}
                />
                <span
                  className="block w-4 h-[1.5px] transition-all duration-300"
                  style={{ background: "rgba(245, 240, 232, 0.5)" }}
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
          background: "#0d0d0d",
          borderLeft: "1px solid rgba(201, 168, 76, 0.12)",
          transform: isMobileOpen ? "translateX(0)" : "translateX(100%)",
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
            className="flex items-center justify-center w-9 h-9 rounded-full transition-colors duration-200"
            style={{
              color: "rgba(245, 240, 232, 0.5)",
              border: "1px solid rgba(201,168,76,0.15)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(245, 240, 232, 0.5)")
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
              className="font-body uppercase py-4 transition-colors duration-200 border-b"
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                color: "rgba(245, 240, 232, 0.65)",
                borderColor: "rgba(201, 168, 76, 0.07)",
                transitionDelay: isMobileOpen ? `${i * 50}ms` : "0ms",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(245, 240, 232, 0.65)")
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Drawer CTA */}
        <div
          className="px-8 pb-10 pt-4 flex-shrink-0"
          style={{ borderTop: "1px solid rgba(201, 168, 76, 0.08)" }}
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
