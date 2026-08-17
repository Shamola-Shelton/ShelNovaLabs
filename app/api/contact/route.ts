import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, projectType, message } = body;

    // Server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Log the message on the server
    console.log("=== NEW CONTACT INQUIRY ===");
    console.log(`From: ${name} (${email})`);
    console.log(`Type: ${projectType}`);
    console.log(`Message: ${message}`);
    console.log("===========================");

    // Asynchronously forward to Web3Forms / Formspree service if key available
    try {
      const apiKey = process.env.WEB3FORMS_ACCESS_KEY || "8f7481b7-a36c-4861-a06f-614fa9e28f11";
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: apiKey,
          subject: `New Project Inquiry (${projectType || "General"}) from ${name}`,
          from_name: "ShelNova Labs Website",
          to_email: "hello@shelnovalabs.com",
          name: name,
          email: email,
          project_type: projectType,
          message: message,
        }),
      }).catch((err) => {
        console.warn("External email forwarding notice:", err);
      });
    } catch (e) {
      console.warn("Email dispatch notice:", e);
    }

    // Return success to the client
    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out! Your message has been sent to hello@shelnovalabs.com.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "An error occurred. Please try again." },
      { status: 500 }
    );
  }
}
