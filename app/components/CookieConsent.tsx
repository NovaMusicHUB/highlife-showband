"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const STORAGE_KEY = "highlife_cookie_consent"; // "accepted" | "rejected"
const FB_PIXEL_ID = "887781143876762";

export default function CookieConsent() {
  const [consent, setConsent] = useState<"accepted" | "rejected" | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      // localStorage may be unavailable (e.g. private browsing) — treat as no choice made yet
    }
    if (stored === "accepted" || stored === "rejected") {
      // Reading localStorage must happen post-mount to avoid a
      // server/client hydration mismatch (window is unavailable during SSR).
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setConsent(stored);
    } else {
      // Small delay so it doesn't compete with the entrance animations above the fold
      const timer = setTimeout(() => setShowBanner(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  function choose(value: "accepted" | "rejected") {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore write failures — consent still applies for this page view
    }
    setConsent(value);
    setShowBanner(false);
  }

  return (
    <>
      {/* Meta Pixel — only loaded after explicit consent, per GDPR / ePrivacy */}
      {consent === "accepted" && (
        <>
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
              fbq('init', '${FB_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}

      {/* Banner */}
      {showBanner && (
        <div
          role="dialog"
          aria-label="Consimțământ cookie-uri"
          className="fixed bottom-0 left-0 right-0 z-9999"
          style={{
            background: "#ffffff",
            borderTop: "1px solid #e8e4da",
            boxShadow: "0 -8px 30px rgba(25,25,25,0.08)",
          }}
        >
          <div className="section-container py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <p
              className="font-body text-sm flex-1"
              style={{ color: "rgba(25, 25, 25,0.7)", lineHeight: 1.6 }}
            >
              Folosim cookie-uri esențiale pentru funcționarea site-ului și,
              doar cu acordul tău, cookie-uri de marketing (Meta Pixel) pentru
              a măsura eficiența reclamelor. Poți afla mai multe în{" "}
              <a
                href="/politica-de-confidentialitate"
                className="link-underline"
                style={{ color: "#8a7454" }}
              >
                Politica de Confidențialitate
              </a>
              .
            </p>
            <div className="flex gap-3 flex-shrink-0 w-full sm:w-auto">
              <button
                onClick={() => choose("rejected")}
                className="btn-secondary flex-1 sm:flex-none justify-center"
                style={{ padding: "0.7rem 1.3rem", fontSize: "0.72rem" }}
              >
                <span>Refuz</span>
              </button>
              <button
                onClick={() => choose("accepted")}
                className="btn-primary flex-1 sm:flex-none justify-center"
                style={{ padding: "0.7rem 1.3rem", fontSize: "0.72rem" }}
              >
                <span>Accept</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
