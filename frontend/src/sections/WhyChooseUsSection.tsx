import { motion } from "framer-motion";
import { whyChooseUs } from "@/data/whyChooseUs";
import SectionHeading from "@/components/SectionHeading";

export default function WhyChooseUsSection() {
  return (
    <section className="section">
      <SectionHeading
        eyebrow="Why DevCraft"
        title={
          <>
            Built to be <span className="gradient-text">trusted with your launch</span>
          </>
        }
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {whyChooseUs.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.07 }}
              whileHover={{ y: -4 }}
              className="glass glass-hover rounded-2xl p-6 text-center"
            >
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-fuchsia/20 border border-white/10 mb-4">
                <Icon className="h-5 w-5 text-accent-fuchsia" strokeWidth={1.8} />
              </div>
              <h3 className="text-sm font-semibold mb-1.5">{item.title}</h3>
              <p className="text-xs text-white/50 leading-relaxed">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
