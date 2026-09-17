import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { createContactEnquiry } from "../services/contact.service";
import { asyncHandler } from "../utils/asyncHandler";
import { logger } from "../utils/logger";

export const submitContactEnquiry = asyncHandler(async (req: Request, res: Response) => {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    const fieldErrors: Record<string, string> = {};
    for (const err of result.array()) {
      // express-validator v7 error objects use `path` for the field name.
      const field = (err as any).path || (err as any).param;
      if (field && !fieldErrors[field]) {
        fieldErrors[field] = err.msg;
      }
    }

    return res.status(400).json({
      success: false,
      message: "Please check the form for errors.",
      errors: fieldErrors,
    });
  }

  const { name, email, phone, company, service, projectType, budget, timeline, preferredContact, message } =
    req.body;

  try {
    await createContactEnquiry({
      name,
      email,
      phone,
      company,
      service,
      projectType,
      budget,
      timeline,
      preferredContact,
      message,
    });
  } catch (err) {
    logger.error("Failed to store contact enquiry", err);
    return res.status(500).json({
      success: false,
      message: "We couldn't save your enquiry right now. Please try again shortly.",
    });
  }

  return res.status(201).json({
    success: true,
    message: "Your project enquiry has been received. We'll get back to you soon.",
  });
});
