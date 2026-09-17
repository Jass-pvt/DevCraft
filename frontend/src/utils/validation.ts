import type { ContactFormData } from "@/types";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+]?[\d\s()-]{7,20}$/;

export type FormErrors = Partial<Record<keyof ContactFormData, string>>;

export function validateContactForm(data: ContactFormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) errors.name = "Name is required.";
  else if (data.name.trim().length < 2) errors.name = "Name looks too short.";

  if (!data.email.trim()) errors.email = "Email is required.";
  else if (!EMAIL_RE.test(data.email.trim())) errors.email = "Enter a valid email address.";

  if (!data.phone.trim()) errors.phone = "Phone number is required.";
  else if (!PHONE_RE.test(data.phone.trim())) errors.phone = "Enter a valid phone number.";

  if (!data.service) errors.service = "Select a service.";
  if (!data.budget) errors.budget = "Select a budget range.";
  if (!data.timeline) errors.timeline = "Select an expected timeline.";
  if (!data.preferredContact) errors.preferredContact = "Select a preferred contact method.";

  if (!data.message.trim()) errors.message = "Tell us a bit about the project.";
  else if (data.message.trim().length < 10) errors.message = "Add a little more detail (10+ characters).";

  return errors;
}

export function isFormValid(errors: FormErrors): boolean {
  return Object.keys(errors).length === 0;
}
