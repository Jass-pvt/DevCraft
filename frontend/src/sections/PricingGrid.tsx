import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { pricingPlans } from "@/data/pricing";
import SectionHeading from "@/components/SectionHeading";

export default function PricingGrid() {
  return (
    <section id="pricing" className="section">
      <SectionHeading
        eyebrow="Pricing"
        title={
          <>
            Transparent packages, <span className="gradient-text">no surprises</span>
          </>
        }
        description="Pick the tier that matches your project, or tell us what you need for a custom quote."
      />

      <div className="grid gap-6 lg:grid-cols-3 items-stretch">
        {pricingPlans.map((plan, i) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative flex flex-col rounded-2xl p-8 ${
              plan.highlighted
                ? "bg-gradient-to-b from-accent-purple/20 to-accent-fuchsia/10 border border-accent-fuchsia/40 shadow-glow"
                : "glass glass-hover"
            }`}
          >
            {plan.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-accent-purple to-accent-fuchsia px-4 py-1 text-xs font-semibold">
                Most Popular
              </span>
            )}
            <h3 className="text-lg font-semibold">{plan.name}</h3>
            <p className="text-sm text-white/50 mt-1 mb-5">{plan.description}</p>
            <div className="mb-6">
              <span className="text-4xl font-bold font-display">{plan.price}</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-white/70">
                  <Check className="h-4 w-4 text-accent-fuchsia mt-0.5 shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className={plan.highlighted ? "btn-primary w-full" : "btn-secondary w-full"}
            >
              {plan.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-8 glass rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-5"
      >
        <div>
          <h3 className="font-semibold text-lg mb-1">Need something custom?</h3>
          <p className="text-sm text-white/55">Tell us what you need and we'll create a custom package for you.</p>
        </div>
        <Link to="/contact" className="btn-secondary whitespace-nowrap">
          Request Custom Quote
          <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </section>
  );
}
