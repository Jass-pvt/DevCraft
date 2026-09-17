import { Router } from "express";
import { contactValidationRules } from "../validators/contact.validator";
import { submitContactEnquiry } from "../controllers/contact.controller";
import { contactRateLimiter } from "../middleware/rateLimiter";

const router = Router();

router.post("/", contactRateLimiter, contactValidationRules, submitContactEnquiry);

export default router;
