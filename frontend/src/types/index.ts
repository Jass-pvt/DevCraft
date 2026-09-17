import type { LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: string;
  icon: LucideIcon;
  name: string;
  description: string;
  features: string[];
}

export type PortfolioCategory =
  | "Business"
  | "E-Commerce"
  | "Billing App"       // <-- Added
  | "Student Project"   // <-- Added
  | "Portfolio"
  | "Event"
  | "Web Application";

export interface PortfolioItem {
  id: string;
  name: string;
  category: PortfolioCategory;
  description: string;
  technologies: string[];
  features: string[];
  image: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  isDemo: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface WhyChooseUsItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  isNumeric: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  rating: number;
  quote: string;
  isDemo: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsappNumber: string;
  location: string;
}

export interface NavLink {
  label: string;
  path: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  projectType: string;
  budget: string;
  timeline: string;
  preferredContact: string;
  message: string;
}
