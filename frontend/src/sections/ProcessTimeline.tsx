import { motion } from "framer-motion";
import { processSteps } from "@/data/process";
import SectionHeading from "@/components/SectionHeading";

export default function ProcessTimeline() {
  return (
    <section id="process" className="section">
      <SectionHeading
        eyebrow="How We Work"
        title={
          <>
            A clear process, <span className="gradient-text">start to launch</span>
          </>
        }
        description="Six steps take every project from a first conversation to a live website."
      />

      <div className="relative">
        <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="grid gap-6 lg:grid-cols-3">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="glass glass-hover rounded-2xl p-7 relative"
            >
              <span className="font-mono text-4xl font-bold text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.25)]">
                {step.number}
              </span>
              <h3 className="text-lg font-semibold mt-3 mb-2">{step.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
