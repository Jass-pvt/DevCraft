import type { PricingPlan } from "@/types";

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "₹4,999",
    description: "Suitable for individuals and small businesses.",
    features: [
      "1–3 pages",
      "Responsive design",
      "Modern UI",
      "Contact form",
      "Basic SEO",
      "Deployment",
    ],
    cta: "Get Started",
  },
  {
    id: "professional",
    name: "Professional",
    price: "₹9,999",
    description: "Suitable for growing businesses.",
    features: [
      "5–7 pages",
      "Premium UI/UX",
      "Animations",
      "Contact/enquiry system",
      "SEO optimization",
      "Deployment",
      "Performance optimization",
    ],
    cta: "Choose Professional",
    highlighted: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: "₹19,999+",
    description: "Suitable for businesses requiring advanced functionality.",
    features: [
      "Custom design",
      "Full-stack functionality",
      "Database integration",
      "Advanced animations",
      "Admin functionality where required",
      "SEO",
      "Performance optimization",
      "Deployment",
      "Post-launch support",
    ],
    cta: "Build My Website",
  },
];
