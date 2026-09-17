import { ContactEnquiry, ContactEnquiryDocument } from "../models/contact.model";
import { sendContactNotification } from "./email.service";
import { logger } from "../utils/logger";

export interface ContactEnquiryInput {
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
}

/**
 * Sanitizes free-text fields by escaping HTML-significant characters.
 */
function sanitize(value: string | undefined): string {
  if (!value) return "";

  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;")
    .trim();
}

export async function createContactEnquiry(
  input: ContactEnquiryInput
): Promise<ContactEnquiryDocument> {
  const sanitized: ContactEnquiryInput = {
    name: sanitize(input.name),
    email: sanitize(input.email).toLowerCase(),
    phone: sanitize(input.phone),
    company: sanitize(input.company),
    service: sanitize(input.service),
    projectType: sanitize(input.projectType),
    budget: sanitize(input.budget),
    timeline: sanitize(input.timeline),
    preferredContact: sanitize(input.preferredContact),
    message: sanitize(input.message),
  };

  // 1. Save enquiry to MongoDB
  const enquiry = await ContactEnquiry.create(sanitized);

  // 2. Send email notification
  // Email failure should not make an already-saved enquiry fail.
  try {
    await sendContactNotification(sanitized);
    logger.info("Contact enquiry email notification sent");
  } catch (err) {
    logger.error("Failed to send contact enquiry email", err);
  }

  return enquiry;
}