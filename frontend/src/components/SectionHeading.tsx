import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ eyebrow, title, description, align = "center" }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} mb-14`}
    >
      {eyebrow && <span className="eyebrow mb-4 block">{eyebrow}</span>}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1]">{title}</h2>
      {description && <p className="mt-5 text-white/60 text-base sm:text-lg leading-relaxed">{description}</p>}
    </motion.div>
  );
}
