"use client";

import { CalendarCheck, X } from "lucide-react";
import { useEffect, useRef } from "react";
import LeadCaptureForm from "@/components/LeadCaptureForm";

type DemoRequestModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function DemoRequestModal({
  isOpen,
  onClose
}: DemoRequestModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-navy/72 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-modal-title"
        className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-white shadow-lift"
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-slate-200 bg-white/95 p-5 backdrop-blur sm:p-6">
          <div className="flex gap-3">
            <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-blue text-white shadow-soft">
              <CalendarCheck className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-cyan">
                Book a demo
              </p>
              <h2
                id="demo-modal-title"
                className="mt-1 text-2xl font-black leading-tight text-brand-navy sm:text-3xl"
              >
                Request an enterprise learning demo
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                Share your team details and an Accredian Enterprise advisor can
                help map the next step.
              </p>
            </div>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-brand-navy transition hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-blue-100"
            aria-label="Close demo request popup"
            onClick={onClose}
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="p-5 sm:p-6">
          <LeadCaptureForm />
        </div>
      </section>
    </div>
  );
}
