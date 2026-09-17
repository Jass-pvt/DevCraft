import {
  Building2,
  UserRound,
  ShoppingCart,
  Rocket,
  PartyPopper,
  Boxes,
  RefreshCw,
  Receipt,
  GraduationCap,
} from "lucide-react";
import type { ServiceItem } from "@/types";

export const services: ServiceItem[] = [
  {
    id: "business-websites",
    icon: Building2,
    name: "Business Websites",
    description: "Professional websites for businesses and companies that build credibility from the first click.",
    features: ["Custom design", "Responsive layout", "Contact & lead forms", "Basic SEO setup"],
  },
  {
    id: "portfolio-websites",
    icon: UserRound,
    name: "Portfolio Websites",
    description: "Modern personal and professional portfolio websites that showcase your work with impact.",
    features: ["Project showcases", "Personal branding", "Resume/CV integration", "Fast load times"],
  },
  {
    id: "billing-apps",
    icon: Receipt,
    name: "Billing App",
    description: "Custom invoice, receipt generation, and payment tracking solutions built for business operations.",
    features: ["Invoice generation", "Payment status tracking", "Client management", "Exportable reports"],
  },
  {
    id: "student-projects",
    icon: GraduationCap,
    name: "Student Project",
    description: "Full-stack web applications designed for academic submissions, capstones, and portfolio showcases.",
    features: ["Full-stack architecture", "Clean documentation", "Database integration", "Deployment assistance"],
  },
  {
    id: "ecommerce-websites",
    icon: ShoppingCart,
    name: "E-Commerce Websites",
    description: "Modern online stores and shopping experiences built to convert browsers into buyers.",
    features: ["Product catalogs", "Cart & checkout flow", "Payment-ready architecture", "Mobile-first UX"],
  },
  {
    id: "landing-pages",
    icon: Rocket,
    name: "Landing Pages",
    description: "High-converting landing pages for products, services, and marketing campaigns.",
    features: ["Conversion-focused layout", "A/B test friendly", "Fast performance", "Clear CTAs"],
  },
  {
    id: "event-wedding-websites",
    icon: PartyPopper,
    name: "Event / Wedding Websites",
    description: "Beautiful personalized websites for weddings, birthdays, and special events.",
    features: ["RSVP forms", "Photo galleries", "Event countdowns", "Custom themes"],
  },
  {
    id: "custom-web-applications",
    icon: Boxes,
    name: "Custom Web Applications",
    description: "Custom full-stack applications built around your exact business requirements.",
    features: ["Database integration", "Custom workflows", "Scalable architecture", "API integrations"],
  },
  {
    id: "website-redesign",
    icon: RefreshCw,
    name: "Website Redesign",
    description: "Modernize outdated websites with better UI, UX, responsiveness, and performance.",
    features: ["UX audit", "Modern visual refresh", "Performance optimization", "Mobile responsiveness"],
  },
];