import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/data/services";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";

interface ServicesGridProps {
  compact?: boolean;
}

export default function ServicesGrid({ compact = false }: ServicesGridProps) {
  const items = compact ? services.slice(0, 6) : services;

  return (
    <section id="services" className="section">
      <SectionHeading
        eyebrow="What We Build"
        title={
          <>
            Services shaped around <span className="gradient-text">what you need to launch</span>
          </>
        }
        description="From a single landing page to a full custom application — pick a starting point, we'll help you scope the rest."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((service, i) => {
          const Icon = service.icon;
          return (
            <GlassCard
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className="flex flex-col"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-fuchsia/20 border border-white/10 mb-5">
                <Icon className="h-6 w-6 text-accent-fuchsia" strokeWidth={1.8} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
              <p className="text-sm text-white/55 leading-relaxed mb-4">{service.description}</p>
              <ul className="space-y-1.5 mb-6 mt-auto">
                {service.features.slice(0, 3).map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-white/45">
                    <Check className="h-3.5 w-3.5 text-accent-fuchsia shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white group"
              >
                Get a Quote
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </GlassCard>
          );
        })}
      </div>

      {compact && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link to="/services" className="btn-secondary">
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      )}
    </section>
  );
}
