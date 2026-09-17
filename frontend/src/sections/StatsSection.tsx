import { motion } from "framer-motion";
import { stats } from "@/data/stats";

export default function StatsSection() {
  return (
    <section className="section py-16 sm:py-20">
      <div className="glass rounded-3xl px-6 py-12 sm:px-12 grid gap-8 grid-cols-2 lg:grid-cols-4 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <div className="text-2xl sm:text-4xl font-bold font-display gradient-text mb-2">
              {stat.value}
            </div>
            <div className="text-xs sm:text-sm text-white/50">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
