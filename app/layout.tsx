import type { Metadata } from "next";
import type { Viewport } from "next";
import { Playfair_Display, Cormorant_Garamond, Inter } from "next/font/google";
import Script from "next/script";
import WhatsAppButton from "./components/WhatsAppButton";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Highlife Showband — Muzică Live pentru Nunți & Evenimente | România",
  description:
    "Highlife Showband — trupa profesionistă pentru nuntă, corporate și petreceri private în toată România. Muzicieni live + DJ, sistem PA & lumini complet, setlisturi personalizate. 500+ evenimente, 12 ani experiență.",
  keywords:
    "trupa nunta Romania, muzica live nunta, formatie nunta, highlife showband, trupa corporate, muzica evenimente, formatie botez, trupa petrecere privata",
  authors: [{ name: "Highlife Showband" }],
  creator: "Highlife Showband",
  publisher: "Highlife Showband",
  metadataBase: new URL("https://highlifeshowband.ro"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Highlife Showband — Sunetul Momentului Tău Perfect",
    description:
      "Trupa profesionistă pentru nunți, corporate și petreceri private în România. 500+ evenimente, 12 ani de experiență, muzicieni live + DJ.",
    url: "https://highlifeshowband.ro",
    siteName: "Highlife Showband",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "https://highlifeshowband.ro/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Highlife Showband — Muzică Live pentru Evenimente",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Highlife Showband — Muzică Live pentru Nunți & Evenimente",
    description:
      "Trupa profesionistă pentru nunți, corporate și petreceri private în România.",
    images: ["https://highlifeshowband.ro/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Cum rezerv Highlife Showband pentru evenimentul meu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Procesul este simplu: ne contactezi prin formularul de pe site sau pe WhatsApp, stabilim detaliile evenimentului (dată, locație, tip, număr invitați), primești o ofertă personalizată în maxim 24 de ore, semnăm contractul și plătești avansul de 30% pentru confirmarea datei.",
      },
    },
    {
      "@type": "Question",
      name: "Care este avansul necesar pentru confirmarea rezervării?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pentru confirmarea rezervării solicităm un avans de 30% din valoarea totală a pachetului ales. Restul sumei se achită cu 7 zile înainte de eveniment sau la fața locului, conform condițiilor din contract.",
      },
    },
    {
      "@type": "Question",
      name: "Includeți echipament audio și de lumini în pachet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da! Toate pachetele noastre includ sistem PA profesional și echipament de lumini adaptat spațiului evenimentului. Nu trebuie să vă faceți griji pentru logistică — echipa noastră aduce și montează totul înainte de eveniment.",
      },
    },
    {
      "@type": "Question",
      name: "Pot personaliza repertoriul muzical?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolut! Personalizarea repertoriului este unul dintre avantajele noastre principale. Puteți trimite o listă cu melodiile preferate, iar noi facem tot posibilul să le includem. Avem un repertoriu de 300+ piese din toate genurile — pop, rock, jazz, folclor, hituri internaționale și mai mult.",
      },
    },
    {
      "@type": "Question",
      name: "Activați și în afara orașului / județului?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, activăm în toată România și, ocazional, peste granița țării. Taxele de deplasare sunt calculate în funcție de distanță și sunt incluse transparent în oferta finală, fără surprize.",
      },
    },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "Highlife Showband",
  description:
    "Trupa profesionistă de muzică live pentru nunți, evenimente corporate și petreceri private în România. Muzicieni live, DJ, sistem PA & lumini complet.",
  url: "https://highlifeshowband.ro",
  logo: "https://highlifeshowband.ro/logo.svg",
  foundingDate: "2013",
  areaServed: {
    "@type": "Country",
    name: "Romania",
  },
  genre: ["Pop", "Rock", "Jazz", "Folclor", "Dance"],
  sameAs: [
    "https://www.facebook.com/profile.php?id=61590603836328",
    "https://www.instagram.com/highlifeshowband",
    "https://www.youtube.com/@Highlifeshowband",
    "https://www.tiktok.com/@highlife.show.band",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "Romanian",
  },
  offers: {
    "@type": "Offer",
    description:
      "Pachete muzică live pentru nunți, corporate și petreceri private",
    areaServed: "Romania",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro"
      className={`${playfair.variable} ${cormorant.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        {/* Theme initializer — runs before paint to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <WhatsAppButton />

        {/* Meta Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '887781143876762');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=887781143876762&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
