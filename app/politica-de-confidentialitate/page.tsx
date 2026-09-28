import type { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Politică de Confidențialitate | Highlife Showband",
  description:
    "Politica de confidențialitate Highlife Showband — cum colectăm, folosim și protejăm datele dumneavoastră personale, conform GDPR (Regulamentul (UE) 2016/679).",
  alternates: {
    canonical: "/politica-de-confidentialitate",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />
      <main style={{ background: "#ffffff" }} className="py-28 lg:py-36">
        <div className="section-container max-w-2xl mx-auto">
          <p className="eyebrow mb-5 text-center">Highlife Showband</p>
          <h1
            className="font-display text-balance mb-12 text-center"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, lineHeight: 1.2, color: "#191919" }}
          >
            Politică de <em className="text-accent not-italic">Confidențialitate</em>
          </h1>

          <div
            className="font-body text-base space-y-6"
            style={{ color: "rgba(25, 25, 25,0.7)", lineHeight: 1.85 }}
          >
            <p>
              Highlife Show Band respectă confidențialitatea datelor
              dumneavoastră personale.
            </p>

            <p>
              Datele colectate prin formularele de contact și formularele
              Meta (Facebook și Instagram) sunt utilizate exclusiv pentru:
            </p>

            <ul className="list-none space-y-3 pl-0">
              {[
                "contactarea persoanelor interesate de serviciile Highlife Show Band;",
                "verificarea disponibilității pentru evenimente;",
                "transmiterea ofertelor și informațiilor solicitate.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" style={{ color: "#8a7454", flexShrink: 0 }}>
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p>
              Datele nu sunt vândute și nu sunt transmise către terți, cu
              excepția situațiilor prevăzute de lege.
            </p>

            <p>
              Aveți dreptul de acces, rectificare, ștergere sau restricționare
              a prelucrării datelor dumneavoastră, conform Regulamentului
              (UE) 2016/679 (GDPR).
            </p>

            <p style={{ color: "rgba(25, 25, 25,0.55)" }} className="text-sm pt-6">
              Pentru orice întrebare legată de prelucrarea datelor dumneavoastră
              personale, ne puteți contacta la{" "}
              <a href="mailto:contact@highlifeshowband.ro" className="link-underline" style={{ color: "#8a7454" }}>
                contact@highlifeshowband.ro
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
