import type { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Politică de Confidențialitate | Highlife Showband",
  description:
    "Politica de confidențialitate Highlife Showband — ce date colectăm, cu ce scop, ce cookie-uri folosim (Meta Pixel) și care sunt drepturile tale conform GDPR (Regulamentul (UE) 2016/679).",
  alternates: {
    canonical: "/politica-de-confidentialitate",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="pt-10 first:pt-0">
      <h2
        className="font-display mb-4"
        style={{ fontSize: "1.3rem", fontWeight: 600, color: "#191919" }}
      >
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />
      <main style={{ background: "#ffffff" }} className="py-28 lg:py-36">
        <div className="section-container max-w-2xl mx-auto">
          <p className="eyebrow mb-5 text-center">Highlife Showband</p>
          <h1
            className="font-display text-balance mb-4 text-center"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, lineHeight: 1.2, color: "#191919" }}
          >
            Politică de <em className="text-accent not-italic">Confidențialitate</em>
          </h1>
          <p
            className="font-body text-sm text-center mb-14"
            style={{ color: "rgba(25, 25, 25,0.5)" }}
          >
            Ultima actualizare: 28 septembrie 2026
          </p>

          <div
            className="font-body text-base"
            style={{ color: "rgba(25, 25, 25,0.7)", lineHeight: 1.85 }}
          >
            <Section title="1. Cine suntem">
              <p>
                Highlife Show Band (&bdquo;noi&rdquo;, &bdquo;Highlife
                Showband&rdquo;) este operator de date cu caracter personal
                pentru datele colectate prin site-ul highlifeshowband.ro și
                prin formularele noastre de pe Facebook și Instagram. Ne poți
                contacta oricând la{" "}
                <a
                  href="mailto:contact@highlifeshowband.ro"
                  className="link-underline"
                  style={{ color: "#8a7454" }}
                >
                  contact@highlifeshowband.ro
                </a>
                .
              </p>
            </Section>

            <Section title="2. Ce date colectăm și de ce">
              <p>
                Prin formularul de contact de pe site sau prin formularele Meta
                (Facebook și Instagram) colectăm: nume, adresă de email, număr
                de telefon și detalii despre evenimentul tău (tip, dată,
                număr aproximativ de invitați, mesaj). Aceste date sunt
                folosite exclusiv pentru:
              </p>
              <ul className="list-none space-y-3 pl-0">
                {[
                  "a te contacta în legătură cu solicitarea ta;",
                  "a verifica disponibilitatea pentru data evenimentului tău;",
                  "a-ți transmite o ofertă personalizată și informațiile solicitate;",
                  "a pregăti și derula contractul, dacă rezervi serviciile noastre.",
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
                Temeiul legal al prelucrării este consimțământul tău (atunci
                când completezi formularul) și, ulterior, executarea
                contractului, dacă rezervi un eveniment cu noi.
              </p>
            </Section>

            <Section title="3. Cookie-uri și Meta Pixel">
              <p>
                Site-ul folosește cookie-uri strict necesare pentru
                funcționare (de exemplu, pentru a reține alegerea ta privind
                cookie-urile sau pentru a nu-ți mai afișa un pop-up deja
                închis în sesiunea curentă).
              </p>
              <p>
                Cu acordul tău explicit, exprimat prin bannerul de cookie-uri,
                folosim și <strong>Meta Pixel</strong> (Facebook), un
                instrument de analiză și retargeting care ne ajută să
                înțelegem eficiența campaniilor publicitare. Meta Pixel
                plasează cookie-uri (ex. <code>_fbp</code>) și poate transmite
                date către Meta Platforms Ireland Ltd. / Meta Platforms, Inc.
                (SUA), în baza clauzelor contractuale standard agreate de
                Comisia Europeană pentru transferul internațional de date.
              </p>
              <p>
                Poți refuza oricând cookie-urile de marketing din bannerul
                afișat la prima vizită sau ștergând datele de navigare din
                browser — refuzul nu afectează în niciun fel utilizarea
                site-ului sau trimiterea formularului de contact.
              </p>
            </Section>

            <Section title="4. Cât timp păstrăm datele">
              <p>
                Păstrăm datele colectate prin formular cât timp este necesar
                pentru a răspunde solicitării tale și, dacă devii client,
                pe durata contractului plus perioada impusă de legislația
                fiscal-contabilă. Dacă nu se concretizează o colaborare,
                datele sunt șterse în cel mult 24 de luni de la ultimul
                contact.
              </p>
            </Section>

            <Section title="5. Cu cine partajăm datele">
              <p>
                Datele nu sunt vândute și nu sunt transmise către terți în
                scopuri comerciale. Le partajăm doar cu furnizori tehnici
                strict necesari pentru funcționarea site-ului (ex. găzduire,
                Meta Pixel, conform secțiunii 3) sau atunci când legea ne
                obligă.
              </p>
            </Section>

            <Section title="6. Drepturile tale">
              <p>Conform Regulamentului (UE) 2016/679 (GDPR), ai dreptul la:</p>
              <ul className="list-none space-y-3 pl-0">
                {[
                  "acces la datele tale personale;",
                  "rectificarea datelor incorecte sau incomplete;",
                  "ștergerea datelor („dreptul de a fi uitat”);",
                  "restricționarea prelucrării;",
                  "opoziție față de prelucrare;",
                  "portabilitatea datelor;",
                  "retragerea oricând a consimțământului, fără a afecta legalitatea prelucrării anterioare retragerii.",
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
                Pentru a-ți exercita oricare dintre aceste drepturi, scrie-ne
                la{" "}
                <a
                  href="mailto:contact@highlifeshowband.ro"
                  className="link-underline"
                  style={{ color: "#8a7454" }}
                >
                  contact@highlifeshowband.ro
                </a>
                . Îți vom răspunde în cel mult 30 de zile.
              </p>
              <p>
                Dacă consideri că prelucrarea datelor tale nu respectă legea,
                ai dreptul de a depune o plângere la Autoritatea Națională de
                Supraveghere a Prelucrării Datelor cu Caracter Personal
                (ANSPDCP) —{" "}
                <a
                  href="https://www.dataprotection.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                  style={{ color: "#8a7454" }}
                >
                  www.dataprotection.ro
                </a>
                .
              </p>
            </Section>

            <Section title="7. Contact">
              <p>
                Pentru orice întrebare legată de prelucrarea datelor tale
                personale, ne poți contacta la{" "}
                <a
                  href="mailto:contact@highlifeshowband.ro"
                  className="link-underline"
                  style={{ color: "#8a7454" }}
                >
                  contact@highlifeshowband.ro
                </a>
                .
              </p>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
