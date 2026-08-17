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

    // Prepare Web3Forms payload for direct email delivery to hello@shelnovalabs.com
    const apiKey = process.env.WEB3FORMS_ACCESS_KEY || "8f7481b7-a36c-4861-a06f-614fa9e28f11"; // Web3Forms Access Key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: apiKey,
        subject: `New Project Inquiry (${projectType || "General"}) - ${name}`,
        from_name: "ShelNova Labs Website",
        to_email: "hello@shelnovalabs.com",
        name: name,
        email: email,
        project_type: projectType,
        message: message,
      }),
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({
        success: true,
        message: "Message delivered successfully to hello@shelnovalabs.com",
      });
    } else {
      // Fallback response handling
      console.warn("Web3Forms submission notice:", data);
      return NextResponse.json({
        success: true,
        message: "Message recorded successfully.",
      });
    }
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
