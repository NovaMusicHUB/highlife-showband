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
      <main className="bg-dark py-28 lg:py-36">
        <div className="section-container max-w-3xl mx-auto">
          <p className="eyebrow mb-4 text-center">Highlife Showband</p>
          <h1
            className="font-display text-4xl md:text-5xl font-bold text-champagne text-balance mb-10 text-center"
            style={{ lineHeight: 1.15 }}
          >
            Politică de <span className="text-gold-gradient">Confidențialitate</span>
          </h1>

          <hr className="gold-rule mb-12 max-w-xs mx-auto" />

          <div
            className="font-body text-base space-y-6"
            style={{ color: "rgba(245,240,232,0.75)", lineHeight: 1.9 }}
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
                  <span
                    className="mt-2 flex-shrink-0"
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#c9a84c",
                    }}
                    aria-hidden="true"
                  />
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

            <p style={{ color: "rgba(245,240,232,0.5)" }} className="text-sm pt-6">
              Pentru orice întrebare legată de prelucrarea datelor dumneavoastră
              personale, ne puteți contacta la{" "}
              <a
                href="mailto:contact@highlifeshowband.ro"
                className="transition-colors duration-200 hover:text-gold"
                style={{ color: "rgba(201,168,76,0.85)" }}
              >
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
