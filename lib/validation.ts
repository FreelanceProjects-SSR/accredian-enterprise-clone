export type LeadPayload = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

export type LeadErrors = Partial<Record<keyof LeadPayload, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+()\-\s0-9]{7,20}$/;

export const emptyLeadPayload: LeadPayload = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  message: ""
};

export function normalizeLeadPayload(input: unknown): LeadPayload {
  if (!input || typeof input !== "object") {
    return emptyLeadPayload;
  }

  const data = input as Partial<Record<keyof LeadPayload, unknown>>;

  return {
    fullName: toCleanString(data.fullName),
    email: toCleanString(data.email).toLowerCase(),
    phone: toCleanString(data.phone),
    company: toCleanString(data.company),
    message: toCleanString(data.message)
  };
}

export function validateLeadPayload(payload: LeadPayload): {
  valid: boolean;
  errors: LeadErrors;
} {
  const errors: LeadErrors = {};

  if (payload.fullName.length < 2) {
    errors.fullName = "Enter your full name.";
  }

  if (!emailPattern.test(payload.email)) {
    errors.email = "Enter a valid work email.";
  }

  if (!phonePattern.test(payload.phone)) {
    errors.phone = "Enter a valid phone number.";
  }

  if (payload.company.length < 2) {
    errors.company = "Enter your company name.";
  }

  if (payload.message.length < 10) {
    errors.message = "Share a short requirement or goal.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
}

function toCleanString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}
