interface Env {
  RESEND_API_KEY: string;
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  try {
    if (request.method !== "POST") {
      return Response.json({ success: false, error: "Method not allowed." }, { status: 405 });
    }

    const body = await request.json();
    const { name, email, projectType, message } = body as {
      name: string;
      email: string;
      projectType: string;
      message: string;
    };

    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!env.RESEND_API_KEY) {
      return Response.json(
        { success: false, error: "Email delivery failed. Please try again or email hello@shelnovalabs.com directly." },
        { status: 502 }
      );
    }

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
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
      return Response.json({
        success: true,
        message: "Thank you! Your message has been submitted successfully.",
      });
    }

    const errorBody = await resendRes.text();
    console.error(`Resend request failed (${resendRes.status}): ${errorBody}`);
    return Response.json(
      { success: false, error: "Email delivery failed. Please try again or email hello@shelnovalabs.com directly." },
      { status: 502 }
    );
  } catch (err) {
    console.error("Contact function error:", err);
    return Response.json(
      { success: false, error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
};