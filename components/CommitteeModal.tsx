"use client";

import { useEffect } from "react";

interface CommitteeModalProps {
  isOpen: boolean;
  onClose: () => void;
  committee: {
    name: string;
    level: string;
    theme: string;
    tone: string;
    description: string;
    driveLink: string;
  } | null;
}

export default function CommitteeModal({
  isOpen,
  onClose,
  committee,
}: CommitteeModalProps) {
  // Handle ESC key to close modal
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    // Lock body scroll when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !committee) return null;

  return (
    <>
      {/* Backdrop and Modal Container */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      >
        {/* Modal Content */}
        <div
          className={`relative ${committee.tone} rounded-3xl border border-white/20 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/90 hover:text-white transition-colors z-10"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Content */}
          <div className="p-8 pt-16 sm:p-10 sm:pt-16">
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/80 mb-4">
                <span>{committee.level}</span>
                <span>IAFLMUN</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-3">
                {committee.name}
              </h2>
              <p className="text-base text-white/90 leading-relaxed">
                {committee.theme}
              </p>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-3">
                About this Committee
              </h3>
              <p className="text-sm text-white/85 leading-relaxed">
                {committee.description}
              </p>
            </div>

            {/* Drive Link */}
            <div className="pt-6 border-t border-white/20">
              <a
                href={committee.driveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-3 rounded-2xl text-white font-semibold transition-colors border border-white/20"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                View Study Guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

