import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, projectType, message } = body;

    // 1. Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    console.log(`[Contact Form Submission] From: ${name} (${email}) | Type: ${projectType}`);

    const resendApiKey = process.env.RESEND_API_KEY;

    let emailDelivered = false;
    let lastError: string | null = null;

    // 2. Option A: Delivery via Resend (if RESEND_API_KEY is configured in .env.local)
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
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Project Type:</strong> ${projectType}</p>
              <hr />
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap;">${message}</p>
            `,
          }),
        });

        if (resendRes.ok) {
          emailDelivered = true;
          console.log("Email successfully sent via Resend!");
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

    // 3. Option B: Delivery via Web3Forms (if WEB3FORMS_ACCESS_KEY is configured in .env.local)
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
          console.log("Email successfully sent via Web3Forms!");
        }
      } catch (err) {
        console.error("Web3Forms error:", err);
      }
    }

    // 4. Return the real result to the caller
    if (!emailDelivered) {
      console.error(
        "Notice: Email was not delivered. " +
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
