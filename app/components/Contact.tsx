"use client";

import { useState } from "react";

// ── Types ─────────────────────────────────────────────────────────────────────

interface FormState {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  date: string;
  guests: string;
  message: string;
}

// ── Shared input style ────────────────────────────────────────────────────────

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.75rem 1rem",
  background: "#181818",
  border: "1px solid rgba(201,168,76,0.2)",
  color: "#f5f0e8",
  fontFamily: "var(--font-inter)",
  fontSize: "0.875rem",
  outline: "none",
  transition: "border-color 0.2s ease",
};

// ── Contact info item ─────────────────────────────────────────────────────────

function InfoItem({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div
        style={{
          width: "36px",
          height: "36px",
          border: "1px solid rgba(201,168,76,0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          color: "#c9a84c",
        }}
      >
        {icon}
      </div>
      <div
        className="font-body text-sm leading-relaxed"
        style={{ color: "rgba(245,240,232,0.70)", paddingTop: "0.45rem" }}
      >
        {children}
      </div>
    </div>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    guests: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function applyFocus(
    e: React.FocusEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    e.currentTarget.style.borderColor = "rgba(201,168,76,0.6)";
  }

  function applyBlur(
    e: React.FocusEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)";
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!form.name) newErrors.name = "Câmp obligatoriu";
    if (!form.email) newErrors.email = "Câmp obligatoriu";
    if (!form.phone) newErrors.phone = "Câmp obligatoriu";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setIsLoading(true);
    await new Promise<void>((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="py-20 lg:py-28"
      style={{ background: "#0d0d0d" }}
    >
      <div className="section-container">
        {/* ── Header — brand display full-width ── */}
        <div className="mb-14 reveal">
          {/* ── HIGHLIFE / SHOWBAND — display tipografic full-lățime ── */}
          <div
            className="overflow-hidden"
            style={{
              marginLeft: "calc(-50vw + 50%)",
              width: "100vw",
              marginBottom: "2rem",
            }}
          >
            {/* HIGHLIFE — top faded via mask */}
            <div
              style={{
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 40%, black 65%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 40%, black 65%)",
                lineHeight: 0.82,
              }}
            >
              <svg
                width="100%"
                viewBox="0 0 1000 175"
                preserveAspectRatio="none"
                style={{ display: "block" }}
                aria-hidden="true"
              >
                <text
                  x="0"
                  y="165"
                  fontFamily="var(--font-playfair), Georgia, serif"
                  fontSize="175"
                  fontWeight="900"
                  fill="none"
                  stroke="rgba(245,240,232,0.28)"
                  strokeWidth="1.4"
                  textLength="1000"
                  lengthAdjust="spacingAndGlyphs"
                >
                  HIGHLIFE
                </text>
              </svg>
            </div>

            {/* SHOWBAND — sub HIGHLIFE, mai mic, auriu */}
            <svg
              width="100%"
              viewBox="0 0 1000 80"
              preserveAspectRatio="none"
              style={{ display: "block" }}
              aria-hidden="true"
            >
              <text
                x="0"
                y="68"
                fontFamily="var(--font-playfair), Georgia, serif"
                fontSize="72"
                fontWeight="700"
                fill="rgba(201,168,76,0.28)"
                stroke="none"
                textLength="1000"
                lengthAdjust="spacing"
              >
                SHOW BAND
              </text>
            </svg>
          </div>

          {/* Eyebrow + subtext */}
          <p className="eyebrow mb-4">Să Vorbim</p>
          <p
            className="font-body text-base max-w-lg"
            style={{ color: "rgba(245,240,232,0.55)", lineHeight: 1.8 }}
          >
            Cu Highlife Showband, transformăm orice petrecere într-un show
            memorabil, plin de energie și interacțiune cu invitații. Spune-ne
            despre evenimentul tău și găsim împreună formula perfectă.
          </p>
        </div>

        {/* ── Two-column layout ──────────────────────────────────────────── */}
        <div className="lg:grid lg:grid-cols-5 lg:gap-16">
          {/* ── Left: contact info ─────────────────────────────────────── */}
          <div className="lg:col-span-2 mb-12 lg:mb-0 reveal-left">
            <div className="flex flex-col gap-6 mb-8">
              {/* Phone */}
              <InfoItem
                icon={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.86 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                }
              >
                <a
                  href="tel:+40754636633"
                  style={{
                    color: "rgba(245,240,232,0.70)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#c9a84c")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(245,240,232,0.70)")
                  }
                >
                  0754 636 633
                </a>
              </InfoItem>

              {/* Email */}
              <InfoItem
                icon={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                }
              >
                <a
                  href="mailto:contact@highlifeshowband.ro"
                  style={{
                    color: "rgba(245,240,232,0.70)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#c9a84c")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(245,240,232,0.70)")
                  }
                >
                  contact@highlifeshowband.ro
                </a>
              </InfoItem>

              {/* Location */}
              <InfoItem
                icon={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                }
              >
                București, România · Activăm în toată țara
              </InfoItem>
            </div>

            {/* Map placeholder */}
            <div
              style={{
                width: "100%",
                aspectRatio: "16/9",
                background: "#1a1a1a",
                border: "1px solid rgba(201,168,76,0.15)",
                position: "relative",
                overflow: "hidden",
                marginTop: "1.5rem",
              }}
              aria-label="Hartă — București, România"
            >
              {/* Grid lines */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "linear-gradient(rgba(201,168,76,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.05) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              {/* Center marker */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    background: "#c9a84c",
                    borderRadius: "50%",
                    marginBottom: "4px",
                  }}
                />
                <div
                  style={{
                    width: "1px",
                    height: "20px",
                    background: "rgba(201,168,76,0.6)",
                  }}
                />
              </div>
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  bottom: "12px",
                  left: 0,
                  right: 0,
                  textAlign: "center",
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  color: "rgba(245,240,232,0.3)",
                }}
              >
                BUCUREȘTI, ROMÂNIA
              </div>
            </div>

            {/* WhatsApp button */}
            <a
              href="https://wa.me/40754636633"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.5rem",
                background: "rgba(37,211,102,0.1)",
                border: "1px solid rgba(37,211,102,0.3)",
                color: "#25d366",
                fontSize: "0.8rem",
                fontWeight: 600,
                textDecoration: "none",
                letterSpacing: "0.08em",
                marginTop: "1rem",
                fontFamily: "var(--font-inter)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.background =
                  "rgba(37,211,102,0.2)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.background =
                  "rgba(37,211,102,0.1)")
              }
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="#25d366"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.114.553 4.1 1.522 5.831L.054 23.25l5.57-1.44A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.812 9.812 0 01-4.952-1.335l-.356-.211-3.307.855.878-3.228-.23-.375A9.797 9.797 0 012.182 12c0-5.418 4.4-9.818 9.818-9.818 5.417 0 9.818 4.4 9.818 9.818 0 5.417-4.401 9.818-9.818 9.818z" />
              </svg>
              Scrie-ne pe WhatsApp
            </a>
          </div>

          {/* ── Right: form ────────────────────────────────────────────── */}
          <div className="lg:col-span-3 reveal-right">
            {submitted ? (
              /* Success state */
              <div
                style={{
                  background: "rgba(201,168,76,0.08)",
                  border: "1px solid rgba(201,168,76,0.3)",
                  padding: "2.5rem",
                  textAlign: "center",
                }}
              >
                <div
                  className="font-display text-4xl mb-3"
                  style={{ color: "#c9a84c" }}
                  aria-label="Succes"
                >
                  ✓
                </div>
                <h3 className="font-display text-2xl text-champagne mb-2">
                  Cererea a fost trimisă!
                </h3>
                <p
                  className="font-body text-sm"
                  style={{ color: "rgba(245,240,232,0.60)" }}
                >
                  Te contactăm în maxim 24 de ore cu o ofertă personalizată.
                </p>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} noValidate>
                <div className="flex flex-col gap-4">
                  {/* Name */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Numele tău complet *"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={applyFocus}
                      onBlur={applyBlur}
                      autoComplete="name"
                      style={{
                        ...inputStyle,
                        borderColor: errors.name
                          ? "rgba(239,68,68,0.6)"
                          : "rgba(201,168,76,0.2)",
                      }}
                      aria-label="Numele tău complet"
                      aria-required="true"
                      aria-describedby={errors.name ? "err-name" : undefined}
                    />
                    {errors.name && (
                      <p
                        id="err-name"
                        className="font-body text-xs mt-1"
                        style={{ color: "rgba(239,68,68,0.8)" }}
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email + Phone row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Adresă de email *"
                        value={form.email}
                        onChange={handleChange}
                        onFocus={applyFocus}
                        onBlur={applyBlur}
                        autoComplete="email"
                        style={{
                          ...inputStyle,
                          borderColor: errors.email
                            ? "rgba(239,68,68,0.6)"
                            : "rgba(201,168,76,0.2)",
                        }}
                        aria-label="Adresă de email"
                        aria-required="true"
                        aria-describedby={
                          errors.email ? "err-email" : undefined
                        }
                      />
                      {errors.email && (
                        <p
                          id="err-email"
                          className="font-body text-xs mt-1"
                          style={{ color: "rgba(239,68,68,0.8)" }}
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Număr de telefon *"
                        value={form.phone}
                        onChange={handleChange}
                        onFocus={applyFocus}
                        onBlur={applyBlur}
                        autoComplete="tel"
                        style={{
                          ...inputStyle,
                          borderColor: errors.phone
                            ? "rgba(239,68,68,0.6)"
                            : "rgba(201,168,76,0.2)",
                        }}
                        aria-label="Număr de telefon"
                        aria-required="true"
                        aria-describedby={
                          errors.phone ? "err-phone" : undefined
                        }
                      />
                      {errors.phone && (
                        <p
                          id="err-phone"
                          className="font-body text-xs mt-1"
                          style={{ color: "rgba(239,68,68,0.8)" }}
                        >
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Event type */}
                  <select
                    name="eventType"
                    value={form.eventType}
                    onChange={handleChange}
                    onFocus={applyFocus}
                    onBlur={applyBlur}
                    style={{
                      ...inputStyle,
                      color: form.eventType
                        ? "#f5f0e8"
                        : "rgba(245,240,232,0.35)",
                      cursor: "pointer",
                    }}
                    aria-label="Tipul evenimentului"
                  >
                    <option value="" disabled>
                      Selectează tipul evenimentului
                    </option>
                    <option value="nunta">Nuntă</option>
                    <option value="botez">Botez</option>
                    <option value="corporate">Eveniment Corporate</option>
                    <option value="petrecere">Petrecere Privată</option>
                    <option value="gala">Gală &amp; Seri de Premii</option>
                    <option value="lansare">Lansare de Produs</option>
                    <option value="altul">Altul</option>
                  </select>

                  {/* Date + Guests row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      onFocus={applyFocus}
                      onBlur={applyBlur}
                      style={{
                        ...inputStyle,
                        colorScheme: "dark",
                      }}
                      aria-label="Data evenimentului"
                    />
                    <input
                      type="number"
                      name="guests"
                      placeholder="Număr aproximativ de invitați"
                      value={form.guests}
                      onChange={handleChange}
                      onFocus={applyFocus}
                      onBlur={applyBlur}
                      min="1"
                      style={inputStyle}
                      aria-label="Număr de invitați"
                    />
                  </div>

                  {/* Message */}
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Descrieți evenimentul vostru — locația, tematica, artiștii preferați, cerințe speciale..."
                    value={form.message}
                    onChange={handleChange}
                    onFocus={applyFocus}
                    onBlur={applyBlur}
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                    }}
                    aria-label="Mesaj"
                  />

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="btn-gold w-full justify-center"
                    disabled={isLoading}
                    style={{ opacity: isLoading ? 0.75 : 1 }}
                  >
                    <span>
                      {isLoading ? "Se trimite..." : "Trimite Cererea"}
                    </span>
                    {isLoading && (
                      <svg
                        className="animate-spin"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                        style={{ position: "relative", zIndex: 1 }}
                      >
                        <circle
                          cx="8"
                          cy="8"
                          r="6"
                          stroke="rgba(0,0,0,0.3)"
                          strokeWidth="2"
                        />
                        <path
                          d="M8 2 A6 6 0 0 1 14 8"
                          stroke="#0d0d0d"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </form>
            )}

            {/* Privacy note */}
            <p
              className="font-body text-xs mt-4 text-center"
              style={{ color: "rgba(245,240,232,0.30)" }}
            >
              🔒 Datele tale sunt protejate și nu vor fi partajate cu terți.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
