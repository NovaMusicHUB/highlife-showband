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
        className="fixed inset-0 z-40 transition-opacity"
        style={{ background: "rgba(15,15,15,0.75)" }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <div
          className="relative w-full max-w-6xl h-[95vh] overflow-hidden flex flex-col"
          style={{ background: "#ffffff" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between p-4 sm:p-6 border-b"
            style={{ borderColor: "#e8e4da" }}
          >
            <h2 className="font-display text-xl sm:text-2xl" style={{ color: "#191919", fontWeight: 600 }}>
              Repertoriul Complet
            </h2>
            <button
              onClick={onClose}
              className="flex items-center justify-center w-10 h-10"
              aria-label="Închide modal"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#191919"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
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
            className="flex items-center justify-end p-4 sm:p-6 border-t"
            style={{ borderColor: "#e8e4da" }}
          >
            <a
              href="/Repertoriu_HIGHLIFE_SHOWBAND.pdf"
              download="Repertoriu_HIGHLIFE_SHOWBAND.pdf"
              className="btn-primary"
            >
              <span className="hidden sm:inline">Descarcă PDF</span>
              <span className="sm:hidden">Descarcă</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
