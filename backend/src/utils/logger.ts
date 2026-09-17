const isTest = process.env.NODE_ENV === "test";

/* Minimal logger wrapper so logging strategy can change in one place. */
export const logger = {
  info: (...args: unknown[]) => !isTest && console.log("[info]", ...args),
  warn: (...args: unknown[]) => !isTest && console.warn("[warn]", ...args),
  error: (...args: unknown[]) => !isTest && console.error("[error]", ...args),
};
