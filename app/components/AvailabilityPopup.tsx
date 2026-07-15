'use client'

import { useEffect, useState, useCallback } from 'react'

const STORAGE_KEY = 'highlife_availability_popup_dismissed'

export default function AvailabilityPopup() {
  const [visible, setVisible] = useState(false)

  const dismiss = useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, '1')
    setVisible(false)
  }, [])

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return

    let shown = false

    function show() {
      if (shown) return
      shown = true
      setVisible(true)
    }

    // Show after 7 seconds
    const timer = setTimeout(show, 7000)

    // Exit intent on desktop — mouse leaves viewport through top
    function handleExitIntent(e: MouseEvent) {
      if (e.clientY <= 0) show()
    }

    document.addEventListener('mouseleave', handleExitIntent)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseleave', handleExitIntent)
    }
  }, [])

  function handleContact(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    dismiss()
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }, 120)
  }

  if (!visible) return null

  return (
    <>
      <style>{`
        @keyframes hl-overlay-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes hl-card-in {
          from { opacity: 0; transform: scale(0.93) translateY(22px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);    }
        }
        .hl-popup-overlay { animation: hl-overlay-in 0.3s ease both; }
        .hl-popup-card    { animation: hl-card-in 0.4s cubic-bezier(0.16,1,0.3,1) both; }
      `}</style>

      {/* ── Overlay ─────────────────────────────────────────────────────── */}
      <div
        className="hl-popup-overlay fixed inset-0 z-[9999] flex items-center justify-center px-4 py-8"
        style={{ background: 'rgba(0,0,0,0.72)' }}
        onClick={dismiss}
        role="dialog"
        aria-modal="true"
        aria-label="Disponibilitate septembrie și octombrie"
      >
        {/* ── Card ──────────────────────────────────────────────────────── */}
        <div
          className="hl-popup-card relative w-full"
          style={{
            maxWidth: '500px',
            background: '#111111',
            border: '1px solid rgba(201,168,76,0.25)',
            borderRadius: '3px',
            padding: 'clamp(1.75rem, 5vw, 2.75rem)',
            boxShadow:
              '0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(201,168,76,0.06)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top gold accent line */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 0,
              left: '15%',
              right: '15%',
              height: '2px',
              background:
                'linear-gradient(to right, transparent, #c9a84c, transparent)',
            }}
          />

          {/* Close button */}
          <button
            onClick={dismiss}
            aria-label="Închide"
            style={{
              position: 'absolute',
              top: '0.9rem',
              right: '0.9rem',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'none',
              border: '1px solid rgba(201,168,76,0.18)',
              borderRadius: '50%',
              cursor: 'pointer',
              color: 'rgba(245,240,232,0.4)',
              transition: 'color 0.2s, border-color 0.2s',
            }}
          >
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path
                d="M1 1L10 10M10 1L1 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Eyebrow */}
          <p className="eyebrow mb-5">⚡ Disponibilitate limitată</p>

          {/* Title */}
          <h2
            className="font-display font-bold text-champagne mb-4"
            style={{ fontSize: 'clamp(1.3rem, 4vw, 1.7rem)', lineHeight: 1.15 }}
          >
            Ar fi păcat să ratezi{' '}
            <em className="text-gold-gradient not-italic">cel mai tare show</em>{' '}
            al vieții tale
          </h2>

          {/* Body text */}
          <p
            className="font-body mb-4"
            style={{
              fontSize: '0.92rem',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.65)',
            }}
          >
            Mai avem doar câteva date libere pentru{' '}
            <strong style={{ color: '#c9a84c' }}>septembrie și octombrie</strong>,
            iar rezervările pentru aceste luni vin cu câteva surprize plăcute
            incluse în pachet.
          </p>

          {/* Subtext / regret note */}
          <p
            className="font-serif italic mb-7"
            style={{
              fontSize: '0.95rem',
              lineHeight: 1.65,
              color: 'rgba(245,240,232,0.38)',
            }}
          >
            Nu vrei să realizezi abia după nuntă că ringul de dans putea arăta
            altfel.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              onClick={handleContact}
              className="btn-gold"
              style={{ textAlign: 'center', justifyContent: 'center' }}
            >
              <span>Scrie-ne acum</span>
            </a>
            <a
              href="https://wa.me/40754636633"
              target="_blank"
              rel="noopener noreferrer"
              onClick={dismiss}
              className="btn-ghost"
              style={{ textAlign: 'center', justifyContent: 'center' }}
            >
              <span>Discutăm pe WhatsApp</span>
            </a>
          </div>

          {/* Fine print */}
          <p
            className="font-body mt-5 text-center"
            style={{
              fontSize: '0.65rem',
              color: 'rgba(245,240,232,0.18)',
              letterSpacing: '0.05em',
            }}
          >
            Poți închide oricând. Nu trimitem spam.
          </p>
        </div>
      </div>
    </>
  )
}
