import type { LeadErrors, LeadPayload } from "@/lib/validation";

export type LeadApiResponse = {
  success: boolean;
  message: string;
  leadId?: string;
  errors?: LeadErrors;
};

export async function submitLead(
  payload: LeadPayload
): Promise<LeadApiResponse> {
  const response = await fetch("/api/leads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const data = (await response.json().catch(() => null)) as
    | LeadApiResponse
    | null;

  if (!response.ok || !data?.success) {
    throw new Error(data?.message || "Unable to submit your request.");
  }

  return data;
}
