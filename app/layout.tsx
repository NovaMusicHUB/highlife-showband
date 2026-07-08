import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Inter } from "next/font/google";
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
        url: "https://picsum.photos/seed/band-hero/1200/630",
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
    images: ["https://picsum.photos/seed/band-hero/1200/630"],
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
    "https://www.facebook.com/highlifeshowband",
    "https://www.instagram.com/highlifeshowband",
    "https://www.youtube.com/highlifeshowband",
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
        {/* Theme initializer — runs before paint to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
