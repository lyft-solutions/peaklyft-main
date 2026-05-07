import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { formType, name, email, phone, comment, interest } = body;

    // Guard: missing API key
    if (!process.env.RESEND_API_KEY) {
      console.error("❌ RESEND_API_KEY is missing from .env.local");
      return NextResponse.json({ error: "API key not configured" }, { status: 500 });
    }

    let subject = "";
    let htmlContent = "";

    if (formType === "contact") {
      subject = `New Contact Form Submission from ${name}`;
      htmlContent = `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #ddd">${name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Phone</td><td style="padding:8px;border:1px solid #ddd">${phone || "Not provided"}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Message</td><td style="padding:8px;border:1px solid #ddd">${comment}</td></tr>
        </table>
      `;
    } else if (formType === "demo") {
      subject = `New Demo Request from ${name}`;
      htmlContent = `
        <h2>New Demo Request</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #ddd">${name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Work Email</td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Phone</td><td style="padding:8px;border:1px solid #ddd">${phone || "Not provided"}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Interest</td><td style="padding:8px;border:1px solid #ddd">${interest}</td></tr>
        </table>
      `;
    } else {
      return NextResponse.json({ error: "Invalid formType" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "Peaklyft Website <onboarding@resend.dev>",
      to: ["aadesh.ittechxpert@gmail.com"],
      replyTo: email,
      subject,
      html: htmlContent,
    });

    if (error) {
      console.error("❌ Resend error:", JSON.stringify(error, null, 2));
      return NextResponse.json({ error }, { status: 400 });
    }

    console.log("✅ Email sent:", data);
    return NextResponse.json({ success: true, data });

  } catch (err) {
    console.error("❌ Server error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}