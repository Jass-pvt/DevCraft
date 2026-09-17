import type { Testimonial } from "@/types";

/**
 * DEMO / PLACEHOLDER TESTIMONIALS
 * ---------------------------------------------------------------------
 * These are illustrative placeholders (isDemo: true), clearly labeled in
 * the UI, and must never be presented as real client reviews. Swap in
 * genuine, permissioned client testimonials as they come in.
 */
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sample Client A",
    role: "Founder, Early-stage Startup",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    quote: "This is placeholder testimonial copy showing the layout and tone we'd use for a real client quote about their project experience.",
    isDemo: true,
  },
  {
    id: "t2",
    name: "Sample Client B",
    role: "Owner, Local Business",
    image: "https://i.pravatar.cc/150?img=32",
    rating: 5,
    quote: "Placeholder text illustrating how a testimonial about turnaround time and communication would appear on the page.",
    isDemo: true,
  },
  {
    id: "t3",
    name: "Sample Client C",
    role: "Creator / Freelancer",
    image: "https://i.pravatar.cc/150?img=47",
    rating: 4,
    quote: "Demo testimonial content used to preview the carousel styling before real client reviews are added.",
    isDemo: true,
  },
];
