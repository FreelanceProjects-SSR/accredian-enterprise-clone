import { NextResponse } from "next/server";
import {
  LeadPayload,
  normalizeLeadPayload,
  validateLeadPayload
} from "@/lib/validation";

type StoredLead = LeadPayload & {
  id: string;
  createdAt: string;
};

const leads: StoredLead[] = [];

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid JSON body."
      },
      { status: 400 }
    );
  }

  const payload = normalizeLeadPayload(body);
  const validation = validateLeadPayload(payload);

  if (!validation.valid) {
    return NextResponse.json(
      {
        success: false,
        message: "Please fix the highlighted fields.",
        errors: validation.errors
      },
      { status: 422 }
    );
  }

  const lead: StoredLead = {
    ...payload,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString()
  };

  leads.push(lead);
  console.info("New enterprise lead received", {
    id: lead.id,
    email: lead.email,
    company: lead.company,
    createdAt: lead.createdAt
  });

  return NextResponse.json(
    {
      success: true,
      message:
        "Thank you. Our enterprise learning advisor will contact you shortly.",
      leadId: lead.id
    },
    { status: 201 }
  );
}
