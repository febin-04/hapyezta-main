import { Resend } from "resend";

export async function sendContactEmail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY environment variable is not defined.");
    throw new Error("Email service is not configured. Please define RESEND_API_KEY.");
  }

  const resend = new Resend(apiKey);
  const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

  const { data, error } = await resend.emails.send({
    from: `Hapyezta Contact <${fromEmail}>`,
    to: "hapyezta@gmail.com",
    replyTo: email,
    subject: `✿ New Message from ${name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e8dfd0; border-radius: 12px; background-color: #faf6ee;">
        <h2 style="color: #f47523; font-family: 'Fredoka', sans-serif;">New Message Received! ✿</h2>
        <p style="font-size: 14px; color: #2c2523; line-height: 1.5;">
          You have received a new contact form submission. Here are the details:
        </p>
        <div style="background-color: #ffffff; padding: 15px; border-radius: 8px; border: 1px solid #e8dfd0; margin-top: 15px;">
          <p style="margin: 0 0 10px 0; font-size: 14px;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 0 0 10px 0; font-size: 14px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #1c978f; text-decoration: none;">${email}</a></p>
          <p style="margin: 0; font-size: 14px;"><strong>Message:</strong></p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #786b66; white-space: pre-wrap; line-height: 1.6; background-color: #fdfaf4; padding: 10px; border-radius: 6px;">${message}</p>
        </div>
        <p style="font-size: 11px; color: #786b66; margin-top: 20px; text-align: center;">
          Sent via HAPYEZTA Contact Portal
        </p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend API Error:", error);
    throw new Error(error.message || "Failed to send email via Resend.");
  }

  return { success: true, id: data?.id };
}
