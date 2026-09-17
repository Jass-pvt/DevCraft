import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface CtaSectionProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryTo?: string;
}

export default function CtaSection({
  title = "Have a project in mind?",
  description = "Tell us about your idea and let's build something amazing together.",
  primaryLabel = "Start Your Project",
  primaryTo = "/contact",
}: CtaSectionProps) {
  return (
    <section className="section">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl px-6 py-16 sm:px-16 sm:py-20 text-center bg-gradient-to-br from-accent-purple/25 via-base-900 to-accent-fuchsia/15 border border-white/10"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 left-10 h-64 w-64 rounded-full bg-accent-fuchsia/20 blur-[100px]" />
          <div className="absolute -bottom-20 right-10 h-64 w-64 rounded-full bg-accent-purple/20 blur-[100px]" />
        </div>
        <div className="relative">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">{description}</p>
          <Link to={primaryTo} className="btn-primary text-base px-7 py-3.5">
            {primaryLabel}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
