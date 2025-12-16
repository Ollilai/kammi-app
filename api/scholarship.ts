import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

// Initialize Resend with API key from environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

// Placeholder download links - replace with actual URLs
const DOWNLOAD_LINKS = {
  mac: "https://download.kammi.app/mac/placeholder",
  windows: "https://download.kammi.app/windows/placeholder",
};

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body;

  // Validate email
  if (!email || typeof email !== "string" || !email.includes("@")) {
    return res.status(400).json({ error: "Valid email is required" });
  }

  try {
    // Send the scholarship email with download links
    await resend.emails.send({
      from: "Kammi <onboarding@resend.dev>", // Resend test email - replace with your domain later
      to: email,
      subject: "Your Kammi download link",
      text: `Hello,

Thank you for your interest in Kammi. Here are your download links:

Mac: ${DOWNLOAD_LINKS.mac}
Windows: ${DOWNLOAD_LINKS.windows}

Kammi is a refuge for writers - a quiet, distraction-free place to let your thoughts flow.

We hope it serves you well.

With warmth,
The Kammi Team

---
P.S. If Kammi becomes valuable to you and your circumstances change, we'd be grateful if you considered supporting us at kammi.app`,
    });

    // Log the scholarship request (you could save this to a database for follow-up)
    console.log(`Scholarship granted: ${email} at ${new Date().toISOString()}`);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
