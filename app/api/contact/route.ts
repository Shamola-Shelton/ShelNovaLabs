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
    const web3FormsKey = process.env.WEB3FORMS_ACCESS_KEY;

    let emailDelivered = false;

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
            from: "ShelNova Labs <onboarding@resend.dev>",
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
        }
      } catch (err) {
        console.error("Resend error:", err);
      }
    }

    // 3. Option B: Delivery via Web3Forms (if WEB3FORMS_ACCESS_KEY is configured in .env.local)
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

    // 4. Create local environment variable template notice if no key is set yet
    if (!emailDelivered) {
      console.log(
        "Notice: To receive actual emails in your inbox, add RESEND_API_KEY or WEB3FORMS_ACCESS_KEY to .env.local"
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
