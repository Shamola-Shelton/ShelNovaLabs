import { NextResponse } from "next/server";

// Simple in-memory rate limiter (per process). On Vercel serverless this resets per
// cold start, but still throttles bursts from a single browser/client.
const WINDOW_MS = 60 * 1000;
const MAX_REQUESTS = 4;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const window = hits.get(ip) ?? [];
  const filtered = window.filter((t) => now - t < WINDOW_MS);
  hits.set(ip, filtered);
  return filtered.length >= MAX_REQUESTS;
}

function getIp(request: Request): string {
  const fwd = request.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function validateAndClean(input: unknown): { ok: boolean; error?: string; data?: { name: string; email: string; projectType: string; message: string } } {
  const raw = (input ?? {}) as Record<string, unknown>;

  const str = (v: unknown): string => (typeof v === "string" ? v.trim() : "");

  const name = str(raw.name).slice(0, 100);
  const email = str(raw.email).slice(0, 200);
  const projectType = str(raw.projectType).slice(0, 100);
  const message = str(raw.message).slice(0, 5000);

  if (!name) return { ok: false, error: "Name is required." };
  if (!email) return { ok: false, error: "Email address is required." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (!message) return { ok: false, error: "Message is required." };

  return { ok: true, data: { name, email, projectType, message } };
}

export async function POST(request: Request) {
  let ip = getIp(request);
  try {
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please try again in a minute." },
        { status: 429 }
      );
    }

    const body = await request.json();

    const result = validateAndClean(body);
    if (!result.ok) {
      return NextResponse.json({ success: false, error: result.error }, { status: 400 });
    }
    const { name, email, projectType, message } = result.data!;

    const resendApiKey = process.env.RESEND_API_KEY;

    let emailDelivered = false;
    let lastError: string | null = null;

    // Option A: Delivery via Resend
    if (resendApiKey) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "ShelNova Labs <no-reply@shelnovalabs.com>",
            to: ["hello@shelnovalabs.com"],
            reply_to: email,
            subject: `New Project Inquiry (${projectType || "General"}) from ${name}`,
            html: `
              <h2>New Project Inquiry from ShelNova Labs Website</h2>
              <p><strong>Name:</strong> ${escapeHtml(name)}</p>
              <p><strong>Email:</strong> ${escapeHtml(email)}</p>
              <p><strong>Project Type:</strong> ${escapeHtml(projectType || "General")}</p>
              <hr />
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
            `,
          }),
        });

        if (resendRes.ok) {
          emailDelivered = true;
        } else {
          const errorBody = await resendRes.text();
          lastError = `Resend request failed (${resendRes.status}): ${errorBody}`;
          console.error(lastError);
        }
      } catch (err) {
        lastError = `Resend error: ${(err as Error).message}`;
        console.error(lastError);
      }
    }

    // Option B: Delivery via Web3Forms
    const web3FormsKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!emailDelivered && web3FormsKey) {
      try {
        const w3Res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: web3FormsKey,
            subject: `New Project Inquiry (${projectType || "General"}) from ${name}`,
            from_name: "ShelNova Labs Website",
            to_email: "hello@shelnovalabs.com",
            name,
            email,
            project_type: projectType,
            message,
          }),
        });

        const w3Data = await w3Res.json();
        if (w3Data.success) {
          emailDelivered = true;
        } else {
          lastError =
            `Web3Forms request failed (${w3Res.status}): ` +
            JSON.stringify(w3Data).slice(0, 500);
          console.error(lastError);
        }
      } catch (err) {
        lastError = `Web3Forms error: ${(err as Error).message}`;
        console.error(lastError);
      }
    }

    if (!emailDelivered) {
      console.error(
        "Email was not delivered. " +
          (lastError ?? "No RESEND_API_KEY/WEB3FORMS_ACCESS_KEY set in .env.local.")
      );
      return NextResponse.json(
        {
          success: false,
          error: "Email delivery failed. Please try again or email hello@shelnovalabs.com directly.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been submitted successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}