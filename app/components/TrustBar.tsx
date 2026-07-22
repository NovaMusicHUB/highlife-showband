'use client'

import { useEffect, useRef, useState } from 'react'

interface Stat {
  number: number
  suffix: string
  label: string
}

const STATS: Stat[] = [
  { number: 270, suffix: '+', label: 'Evenimente' },
  { number: 12,  suffix: '',  label: 'Ani Experiență' },
  { number: 50,  suffix: '+', label: 'Ore Repertoriu' },
  { number: 100, suffix: '%', label: 'Recenzii 5 Stele' },
]

export default function TrustBar() {
  const [counts, setCounts] = useState<number[]>(STATS.map(() => 0))
  const hasAnimated = useRef(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const targets = STATS.map((s) => s.number)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true

          targets.forEach((target, i) => {
            const duration = 2000
            const start = performance.now()

            const animate = (now: number) => {
              const elapsed = now - start
              const progress = Math.min(elapsed / duration, 1)
              // Cubic ease-out
              const eased = 1 - Math.pow(1 - progress, 3)

              setCounts((prev) => {
                const next = [...prev]
                next[i] = Math.round(eased * target)
                return next
              })

              if (progress < 1) {
                requestAnimationFrame(animate)
              }
            }

            requestAnimationFrame(animate)
          })
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id="trust"
      className="py-12 lg:py-16"
      style={{
        background: '#1a1a1a',
        borderBottom: '1px solid rgba(201, 168, 76, 0.08)',
      }}
      aria-label="Statistici Highlife Showband"
    >
      {/* ── Desktop layout: flex row with separators ── */}
      <div className="hidden lg:flex section-container justify-center items-center">
        {STATS.map((stat, i) => (
          <div key={stat.label} className="flex items-center">
            {/* Stat cell */}
            <div className="flex flex-col items-center justify-center py-0 px-12 text-center">
              {/* Number */}
              <div
                className="font-display font-bold text-gold leading-none"
                style={{ fontSize: '3.5rem' }}
                aria-label={`${stat.number}${stat.suffix} ${stat.label}`}
              >
                <span>{counts[i]}</span>
                <span>{stat.suffix}</span>
              </div>
              {/* Label */}
              <p
                className="font-body uppercase mt-2"
                style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.2em',
                  color: 'rgba(245, 240, 232, 0.5)',
                }}
              >
                {stat.label}
              </p>
            </div>

            {/* Gold separator — only between items, not after the last */}
            {i < STATS.length - 1 && (
              <span
                className="gold-separator flex-shrink-0"
                style={{ height: '60px' }}
                aria-hidden="true"
              />
            )}
          </div>
        ))}
      </div>

      {/* ── Mobile layout: 2×2 grid ── */}
      <div
        className="lg:hidden grid grid-cols-2 section-container"
        style={{
          border: '1px solid rgba(201, 168, 76, 0.1)',
          borderRadius: '0px',
        }}
      >
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center py-8 px-4 text-center"
            style={{
              borderRight: i % 2 === 0 ? '1px solid rgba(201, 168, 76, 0.1)' : 'none',
              borderBottom: i < 2 ? '1px solid rgba(201, 168, 76, 0.1)' : 'none',
            }}
          >
            {/* Number */}
            <div
              className="font-display font-bold text-gold leading-none"
              style={{ fontSize: '2.75rem' }}
              aria-label={`${stat.number}${stat.suffix} ${stat.label}`}
            >
              <span>{counts[i]}</span>
              <span>{stat.suffix}</span>
            </div>
            {/* Label */}
            <p
              className="font-body uppercase mt-2"
              style={{
                fontSize: '0.6rem',
                letterSpacing: '0.18em',
                color: 'rgba(245, 240, 232, 0.5)',
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
