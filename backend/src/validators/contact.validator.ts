import { body } from "express-validator";

const ALLOWED_SERVICES = [
  "Business Website",
  "Portfolio Website",
  'Billing App',        // <-- Added
  'Student Project',    // <-- Added
  "E-Commerce Website",
  "Landing Page",
  "Event / Wedding Website",
  "Custom Web Application",
  "Website Redesign",
  "Other",
];

const ALLOWED_BUDGETS = [
  "Under ₹5,000",
  "₹5,000 – ₹10,000",
  "₹10,000 – ₹20,000",
  "₹20,000 – ₹50,000",
  "₹50,000+",
];

const ALLOWED_TIMELINES = ["ASAP", "1–2 Weeks", "2–4 Weeks", "1–2 Months", "Flexible"];
const ALLOWED_CONTACT_METHODS = ["Email", "Phone", "WhatsApp"];

export const contactValidationRules = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required.")
    .isLength({ min: 2, max: 120 })
    .withMessage("Name must be between 2 and 120 characters."),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required.")
    .isEmail()
    .withMessage("Enter a valid email address.")
    .normalizeEmail(),

  body("phone")
    .trim()
    .notEmpty()
    .withMessage("Phone number is required.")
    .matches(/^[+]?[\d\s()-]{7,20}$/)
    .withMessage("Enter a valid phone number."),

  body("company").optional({ checkFalsy: true }).trim().isLength({ max: 150 }),

  body("service")
    .trim()
    .notEmpty()
    .withMessage("Select a service.")
    .isIn(ALLOWED_SERVICES)
    .withMessage("Select a valid service."),

  body("projectType").optional({ checkFalsy: true }).trim().isLength({ max: 150 }),

  body("budget")
    .trim()
    .notEmpty()
    .withMessage("Select a budget range.")
    .isIn(ALLOWED_BUDGETS)
    .withMessage("Select a valid budget range."),

  body("timeline")
    .trim()
    .notEmpty()
    .withMessage("Select an expected timeline.")
    .isIn(ALLOWED_TIMELINES)
    .withMessage("Select a valid timeline."),

  body("preferredContact")
    .trim()
    .notEmpty()
    .withMessage("Select a preferred contact method.")
    .isIn(ALLOWED_CONTACT_METHODS)
    .withMessage("Select a valid contact method."),

  body("message")
    .trim()
    .notEmpty()
    .withMessage("Project description / message is required.")
    .isLength({ min: 10, max: 4000 })
    .withMessage("Message must be between 10 and 4000 characters."),
];
