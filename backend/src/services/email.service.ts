import nodemailer from "nodemailer";
import { env } from "../config/env";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: env.mailUsername,
    pass: env.mailPassword,
  },
});

export async function sendContactNotification(data: {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  projectType?: string;
  budget: string;
  timeline: string;
  preferredContact: string;
  message: string;
}): Promise<void> {
  await transporter.sendMail({
    from: env.mailFrom,
    to: env.mailUsername,
    replyTo: data.email,
    subject: `New DevCraft Enquiry from ${data.name}`,
    text: `
New project enquiry received.

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Company: ${data.company || "Not provided"}

Service: ${data.service}
Project Type: ${data.projectType || "Not provided"}
Budget: ${data.budget}
Timeline: ${data.timeline}
Preferred Contact: ${data.preferredContact}

Message:
${data.message}
    `.trim(),
  });
}
export async function testEmailConnection(): Promise<void> {
  await transporter.verify();
  console.log("✅ Email connection successful");
}