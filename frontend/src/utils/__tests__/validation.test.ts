import { describe, it, expect } from "vitest";
import { validateContactForm, isFormValid } from "../validation";
import type { ContactFormData } from "@/types";

const validForm: ContactFormData = {
  name: "Jane Doe",
  email: "jane@example.com",
  phone: "+91 98765 43210",
  company: "Acme",
  service: "Business Website",
  projectType: "New build",
  budget: "₹5,000 – ₹10,000",
  timeline: "1–2 Weeks",
  preferredContact: "Email",
  message: "We need a new company website with a contact form.",
};

describe("validateContactForm", () => {
  it("accepts a fully valid form", () => {
    const errors = validateContactForm(validForm);
    expect(isFormValid(errors)).toBe(true);
  });

  it("flags a missing name", () => {
    const errors = validateContactForm({ ...validForm, name: "" });
    expect(errors.name).toBeDefined();
  });

  it("flags an invalid email", () => {
    const errors = validateContactForm({ ...validForm, email: "not-an-email" });
    expect(errors.email).toBeDefined();
  });

  it("flags an invalid phone number", () => {
    const errors = validateContactForm({ ...validForm, phone: "abc" });
    expect(errors.phone).toBeDefined();
  });

  it("flags a too-short message", () => {
    const errors = validateContactForm({ ...validForm, message: "hi" });
    expect(errors.message).toBeDefined();
  });

  it("requires service, budget, timeline, and preferred contact", () => {
    const errors = validateContactForm({
      ...validForm,
      service: "",
      budget: "",
      timeline: "",
      preferredContact: "",
    });
    expect(errors.service).toBeDefined();
    expect(errors.budget).toBeDefined();
    expect(errors.timeline).toBeDefined();
    expect(errors.preferredContact).toBeDefined();
  });
});
