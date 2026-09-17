import type { StatItem } from "@/types";

/**
 * Keep this file honest. Only add hard numbers here once they are real and
 * verifiable (e.g. actual delivered project counts). Until then, use
 * non-deceptive, qualitative statements instead of invented figures.
 */
export const stats: StatItem[] = [
  { id: "responsive", value: "100%", label: "Responsive By Default", isNumeric: true },
  { id: "performance", value: "Built for Performance", label: "Optimized Core Web Vitals", isNumeric: false },
  { id: "availability", value: "24/7", label: "Online Enquiry", isNumeric: true },
  { id: "client-focus", value: "Client Focused", label: "Custom Solutions, Not Templates", isNumeric: false },
];
