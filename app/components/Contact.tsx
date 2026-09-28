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
  gdprConsent: boolean;
}

// ── Shared input style ────────────────────────────────────────────────────────

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.85rem 1rem",
  background: "#ffffff",
  border: "1px solid #dedad0",
  color: "#191919",
  fontFamily: "var(--font-inter)",
  fontSize: "0.9rem",
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
          width: "20px",
          height: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          color: "#8a7454",
          marginTop: "0.25rem",
        }}
      >
        {icon}
      </div>
      <div
        className="font-body text-sm leading-relaxed"
        style={{ color: "rgba(25, 25, 25,0.75)" }}
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
    gdprConsent: false,
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

  function handleConsentChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, gdprConsent: e.target.checked }));
    if (errors.gdprConsent) setErrors((prev) => ({ ...prev, gdprConsent: "" }));
  }

  function applyFocus(
    e: React.FocusEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    e.currentTarget.style.borderColor = "#8a7454";
  }

  function applyBlur(
    e: React.FocusEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    e.currentTarget.style.borderColor = "#dedad0";
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!form.name) newErrors.name = "Câmp obligatoriu";
    if (!form.email) newErrors.email = "Câmp obligatoriu";
    if (!form.phone) newErrors.phone = "Câmp obligatoriu";
    if (!form.gdprConsent)
      newErrors.gdprConsent = "Trebuie să fii de acord pentru a continua";
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
    <section id="contact" className="py-24 lg:py-32" style={{ background: "#faf9f6" }}>
      <div className="section-container">
        {/* ── Header ── */}
        <div className="max-w-2xl mb-16 reveal">
          <p className="eyebrow mb-5">Să Vorbim</p>
          <h2
            className="font-display mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 600, lineHeight: 1.15, color: "#191919" }}
          >
            Hai să discutăm despre{" "}
            <em className="text-accent not-italic">evenimentul tău</em>
          </h2>
          <p
            className="font-body text-base max-w-lg"
            style={{ color: "rgba(25, 25, 25,0.62)", lineHeight: 1.75 }}
          >
            Cu Highlife Showband, transformăm orice petrecere într-un show
            memorabil, plin de energie și interacțiune cu invitații. Spune-ne
            despre evenimentul tău și găsim împreună formula perfectă.
          </p>
        </div>

        {/* ── Two-column layout ──────────────────────────────────────────── */}
        <div className="lg:grid lg:grid-cols-5 lg:gap-16">
          {/* ── Left: contact info ─────────────────────────────────────── */}
          <div className="lg:col-span-2 mb-14 lg:mb-0 reveal-left">
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
                  className="link-underline"
                  style={{ color: "rgba(25, 25, 25,0.85)" }}
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
                  className="link-underline"
                  style={{ color: "rgba(25, 25, 25,0.85)" }}
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

            {/* WhatsApp link */}
            <a
              href="https://wa.me/40754636633"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline font-body"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.9rem",
                color: "#25a955",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#25a955" aria-hidden="true">
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
              <div className="py-10 text-center">
                <div className="font-display text-4xl mb-4" style={{ color: "#8a7454" }} aria-label="Succes">
                  ✓
                </div>
                <h3 className="font-display text-2xl mb-2" style={{ color: "#191919", fontWeight: 600 }}>
                  Cererea a fost trimisă!
                </h3>
                <p className="font-body text-sm" style={{ color: "rgba(25, 25, 25,0.6)" }}>
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
                        borderColor: errors.name ? "rgba(200,60,60,0.6)" : "#dedad0",
                      }}
                      aria-label="Numele tău complet"
                      aria-required="true"
                      aria-describedby={errors.name ? "err-name" : undefined}
                    />
                    {errors.name && (
                      <p id="err-name" className="font-body text-xs mt-1" style={{ color: "rgba(190,50,50,0.9)" }}>
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
                          borderColor: errors.email ? "rgba(200,60,60,0.6)" : "#dedad0",
                        }}
                        aria-label="Adresă de email"
                        aria-required="true"
                        aria-describedby={errors.email ? "err-email" : undefined}
                      />
                      {errors.email && (
                        <p id="err-email" className="font-body text-xs mt-1" style={{ color: "rgba(190,50,50,0.9)" }}>
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
                          borderColor: errors.phone ? "rgba(200,60,60,0.6)" : "#dedad0",
                        }}
                        aria-label="Număr de telefon"
                        aria-required="true"
                        aria-describedby={errors.phone ? "err-phone" : undefined}
                      />
                      {errors.phone && (
                        <p id="err-phone" className="font-body text-xs mt-1" style={{ color: "rgba(190,50,50,0.9)" }}>
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
                      color: form.eventType ? "#191919" : "rgba(25, 25, 25,0.4)",
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
                      style={inputStyle}
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

                  {/* GDPR consent */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="gdprConsent"
                        checked={form.gdprConsent}
                        onChange={handleConsentChange}
                        aria-required="true"
                        aria-describedby={errors.gdprConsent ? "err-gdpr" : undefined}
                        style={{
                          marginTop: "0.2rem",
                          width: "16px",
                          height: "16px",
                          flexShrink: 0,
                          accentColor: "#191919",
                        }}
                      />
                      <span
                        className="font-body text-xs"
                        style={{ color: "rgba(25, 25, 25,0.65)", lineHeight: 1.6 }}
                      >
                        Am citit și sunt de acord cu prelucrarea datelor mele
                        conform{" "}
                        <a
                          href="/politica-de-confidentialitate"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-underline"
                          style={{ color: "#8a7454" }}
                        >
                          Politicii de Confidențialitate
                        </a>{" "}
                        *
                      </span>
                    </label>
                    {errors.gdprConsent && (
                      <p id="err-gdpr" className="font-body text-xs mt-1" style={{ color: "rgba(190,50,50,0.9)" }}>
                        {errors.gdprConsent}
                      </p>
                    )}
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="btn-primary w-full justify-center"
                    disabled={isLoading}
                    style={{ opacity: isLoading ? 0.75 : 1 }}
                  >
                    <span>{isLoading ? "Se trimite..." : "Trimite Cererea"}</span>
                    {isLoading && (
                      <svg
                        className="animate-spin"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <circle cx="8" cy="8" r="6" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                        <path d="M8 2 A6 6 0 0 1 14 8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    )}
                  </button>
                </div>
              </form>
            )}

            {/* Privacy note */}
            <p className="font-body text-xs mt-4 text-center" style={{ color: "rgba(25, 25, 25,0.5)" }}>
              🔒 Datele tale sunt protejate și nu vor fi partajate cu terți.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
