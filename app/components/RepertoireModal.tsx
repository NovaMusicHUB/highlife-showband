"use client";

import { useEffect } from "react";

interface RepertoireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RepertoireModal({ isOpen, onClose }: RepertoireModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/80 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <div
          className="relative w-full max-w-4xl max-h-[90vh] bg-dark rounded-lg overflow-hidden shadow-2xl flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between p-4 sm:p-6 border-b"
            style={{ borderColor: "rgba(201,168,76,0.2)" }}
          >
            <h2 className="font-display text-xl sm:text-2xl text-champagne">
              Repertoriul Complet
            </h2>
            <button
              onClick={onClose}
              className="flex items-center justify-center w-10 h-10 rounded-full transition-colors hover:bg-surface"
              aria-label="Închide modal"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-champagne"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* PDF Viewer */}
          <div className="flex-1 overflow-auto">
            <iframe
              src="/Repertoriu_HIGHLIFE_SHOWBAND.pdf"
              className="w-full h-full"
              title="Repertoriul Complet - Highlife Showband"
            />
          </div>

          {/* Footer with Download Button */}
          <div
            className="flex items-center justify-between p-4 sm:p-6 border-t"
            style={{ borderColor: "rgba(201,168,76,0.2)" }}
          >
            <p
              className="font-body text-xs sm:text-sm"
              style={{ color: "rgba(245,240,232,0.5)" }}
            >
              Repertoriu cu 500+ piese
            </p>
            <a
              href="/Repertoriu_HIGHLIFE_SHOWBAND.pdf"
              download="Repertoriu_HIGHLIFE_SHOWBAND.pdf"
              className="btn-gold flex items-center gap-2"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M8 2 L8 11 M4 8 L8 12 L12 8 M2 14 L14 14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="hidden sm:inline">Descarcă PDF</span>
              <span className="sm:hidden">Descarcă</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
