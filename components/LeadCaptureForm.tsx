"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
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
    placeholder: "Priya Sharma"
  },
  {
    name: "email",
    label: "Work Email",
    type: "email",
    placeholder: "priya@company.com"
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
    placeholder: "Acme Analytics"
  }
];

export default function LeadCaptureForm() {
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

  return (
    <form
      className="rounded-lg border border-slate-200 bg-brand-soft p-5 shadow-soft sm:p-6"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
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
              onChange={(event) => updateField(field.name, event.target.value)}
              aria-invalid={Boolean(errors[field.name])}
              aria-describedby={
                errors[field.name] ? `${field.name}-error` : undefined
              }
            />
            {errors[field.name] ? (
              <span
                id={`${field.name}-error`}
                className="mt-1 block text-xs font-semibold text-red-600"
              >
                {errors[field.name]}
              </span>
            ) : null}
          </label>
        ))}
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
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <span
            id="message-error"
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

      {statusMessage ? (
        <p
          className={`mt-4 rounded-lg px-4 py-3 text-sm font-semibold ${
            status === "success"
              ? "bg-emerald-50 text-emerald-700"
              : "bg-red-50 text-red-700"
          }`}
          role="status"
          aria-live="polite"
        >
          {statusMessage}
        </p>
      ) : null}
    </form>
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
