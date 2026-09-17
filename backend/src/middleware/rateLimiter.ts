import rateLimit from "express-rate-limit";
import { env } from "../config/env";

export const contactRateLimiter = rateLimit({
  windowMs: env.rateLimitWindowMs,
  max: env.rateLimitMax,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many enquiries sent from this device. Please try again later.",
  },
  statusCode: 429,
});
