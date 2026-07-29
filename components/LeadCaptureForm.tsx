"use client";

import { CheckCircle2, Send, X } from "lucide-react";
import { FormEvent, useEffect, useId, useState } from "react";
import { submitLead } from "@/lib/api";
import {
  LeadErrors,
  LeadPayload,
  emptyLeadPayload,
  validateLeadPayload
} from "@/lib/validation";

type SubmitState = "idle" | "loading" | "success" | "error";

const fields: Array<{
  name: keyof LeadPayload;
  label: string;
  type?: string;
  placeholder: string;
}> = [
  {
    name: "fullName",
    label: "Full Name",
    placeholder: "Alex Morgan"
  },
  {
    name: "email",
    label: "Work Email",
    type: "email",
    placeholder: "alex@example.com"
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    placeholder: "+91 98765 43210"
  },
  {
    name: "company",
    label: "Company Name",
    placeholder: "Example Co."
  }
];

export default function LeadCaptureForm() {
  const formId = useId();
  const [form, setForm] = useState<LeadPayload>(emptyLeadPayload);
  const [errors, setErrors] = useState<LeadErrors>({});
  const [status, setStatus] = useState<SubmitState>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  function updateField(name: keyof LeadPayload, value: string) {
    setForm((current) => ({
      ...current,
      [name]: value
    }));
    setErrors((current) => ({
      ...current,
      [name]: undefined
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatusMessage("");

    const validation = validateLeadPayload(form);
    if (!validation.valid) {
      setErrors(validation.errors);
      setStatus("error");
      setStatusMessage("Please fix the highlighted fields.");
      return;
    }

    setStatus("loading");
    setErrors({});

    try {
      const response = await submitLead(form);
      setStatus("success");
      setStatusMessage(response.message);
      setForm(emptyLeadPayload);
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  const isLoading = status === "loading";
  const showSuccessPopup = status === "success" && Boolean(statusMessage);

  useEffect(() => {
    if (!showSuccessPopup) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setStatus("idle");
        setStatusMessage("");
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showSuccessPopup]);

  function closeSuccessPopup() {
    setStatus("idle");
    setStatusMessage("");
  }

  return (
    <>
      <form
        className="rounded-lg border border-slate-200 bg-brand-soft p-5 shadow-soft sm:p-6"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="grid gap-5 sm:grid-cols-2">
          {fields.map((field) => {
            const errorId = `${formId}-${field.name}-error`;

            return (
              <label key={field.name} className="block">
                <span className="text-sm font-bold text-brand-navy">
                  {field.label}
                </span>
                <input
                  className={`mt-2 h-12 w-full rounded-lg border bg-white px-4 text-sm text-brand-ink outline-none transition placeholder:text-slate-400 focus:border-brand-blue focus:ring-4 focus:ring-blue-100 ${
                    errors[field.name] ? "border-red-400" : "border-slate-200"
                  }`}
                  type={field.type ?? "text"}
                  value={form[field.name]}
                  placeholder={field.placeholder}
                  autoComplete={getAutocomplete(field.name)}
                  onChange={(event) =>
                    updateField(field.name, event.target.value)
                  }
                  aria-invalid={Boolean(errors[field.name])}
                  aria-describedby={errors[field.name] ? errorId : undefined}
                />
                {errors[field.name] ? (
                  <span
                    id={errorId}
                    className="mt-1 block text-xs font-semibold text-red-600"
                  >
                    {errors[field.name]}
                  </span>
                ) : null}
              </label>
            );
          })}
        </div>

        <label className="mt-5 block">
          <span className="text-sm font-bold text-brand-navy">
            Message or Requirement
          </span>
          <textarea
            className={`mt-2 min-h-32 w-full resize-y rounded-lg border bg-white px-4 py-3 text-sm text-brand-ink outline-none transition placeholder:text-slate-400 focus:border-brand-blue focus:ring-4 focus:ring-blue-100 ${
              errors.message ? "border-red-400" : "border-slate-200"
            }`}
            value={form.message}
            placeholder="Tell us about your team size, skill goals, or program timeline."
            onChange={(event) => updateField("message", event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? `${formId}-message-error` : undefined
            }
          />
          {errors.message ? (
            <span
              id={`${formId}-message-error`}
              className="mt-1 block text-xs font-semibold text-red-600"
            >
              {errors.message}
            </span>
          ) : null}
        </label>

        <button
          type="submit"
          disabled={isLoading}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-blue px-6 py-4 text-sm font-black uppercase text-white shadow-lift transition hover:bg-brand-navy disabled:cursor-not-allowed disabled:bg-slate-400 sm:w-auto"
        >
          {isLoading ? "Submitting..." : "Request a Demo"}
          <Send className="h-4 w-4" aria-hidden="true" />
        </button>

        {statusMessage && status !== "success" ? (
          <p
            className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-red-700"
            role="status"
            aria-live="polite"
          >
            {statusMessage}
          </p>
        ) : null}
      </form>

      {showSuccessPopup ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-navy/60 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeSuccessPopup();
            }
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${formId}-success-title`}
            aria-describedby={`${formId}-success-message`}
            className="relative w-full max-w-md rounded-lg bg-white p-6 text-center shadow-lift"
          >
            <button
              type="button"
              className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-brand-navy transition hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-blue-100"
              aria-label="Close success popup"
              onClick={closeSuccessPopup}
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
            </div>
            <h2
              id={`${formId}-success-title`}
              className="mt-4 text-2xl font-black text-brand-navy"
            >
              Demo request submitted
            </h2>
            <p
              id={`${formId}-success-message`}
              className="mt-3 text-sm leading-6 text-slate-600"
            >
              {statusMessage}
            </p>
            <button
              type="button"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-blue px-5 py-3 text-sm font-black uppercase text-white shadow-lift transition hover:bg-brand-navy sm:w-auto"
              onClick={closeSuccessPopup}
            >
              Done
            </button>
          </section>
        </div>
      ) : null}
    </>
  );
}

function getAutocomplete(name: keyof LeadPayload) {
  const autocomplete: Record<keyof LeadPayload, string> = {
    fullName: "name",
    email: "email",
    phone: "tel",
    company: "organization",
    message: "off"
  };

  return autocomplete[name];
}
