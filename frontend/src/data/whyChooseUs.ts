import {
  Sparkles,
  Smartphone,
  Zap,
  Search,
  ShieldCheck,
  Wallet,
  Puzzle,
  HeadphonesIcon,
} from "lucide-react";
import type { WhyChooseUsItem } from "@/types";

export const whyChooseUs: WhyChooseUsItem[] = [
  { id: "modern-design", icon: Sparkles, title: "Modern Design", description: "Clean, current visual design that reflects your brand well." },
  { id: "mobile-responsive", icon: Smartphone, title: "Mobile Responsive", description: "Every build works smoothly across phones, tablets, and desktops." },
  { id: "fast-performance", icon: Zap, title: "Fast Performance", description: "Optimized code and assets for quick load times." },
  { id: "seo-friendly", icon: Search, title: "SEO Friendly", description: "Semantic structure and metadata built in from the start." },
  { id: "secure-development", icon: ShieldCheck, title: "Secure Development", description: "Validated inputs, safe defaults, and careful handling of data." },
  { id: "affordable-pricing", icon: Wallet, title: "Affordable Pricing", description: "Transparent packages that scale with your budget." },
  { id: "custom-solutions", icon: Puzzle, title: "Custom Solutions", description: "Every project is shaped around your specific requirements." },
  { id: "professional-support", icon: HeadphonesIcon, title: "Professional Support", description: "Clear communication from enquiry through to launch." },
];
