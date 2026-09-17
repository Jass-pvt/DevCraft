import { motion } from "framer-motion";
import { Target, Compass, Code2, TrendingUp } from "lucide-react";
import Seo from "@/components/Seo";
import SectionHeading from "@/components/SectionHeading";
import CtaSection from "@/sections/CtaSection";

const pillars = [
  { icon: Compass, title: "Design", text: "Every project starts with understanding your audience and goals, not a template." },
  { icon: Code2, title: "Technology", text: "Modern, maintainable code built with React, Node.js, and current best practices." },
  { icon: TrendingUp, title: "Performance", text: "Fast load times and smooth interactions, because speed affects conversion." },
  { icon: Target, title: "Business Results", text: "A beautiful site that doesn't convert isn't finished — we design for outcomes." },
];

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About"
        description="DevCraft is a web development agency focused on design, technology, performance, and business results for startups, creators, and businesses."
        path="/about"
      />
      <div className="pt-32" />
      <section className="section">
        <SectionHeading
          eyebrow="About DevCraft"
          title={
            <>
              We build websites that <span className="gradient-text">work for your business</span>
            </>
          }
          description="DevCraft is a web development and digital solutions agency. We help businesses, startups, creators, and individuals turn ideas into fast, modern, well-built websites and web applications."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="glass glass-hover rounded-2xl p-6"
              >
                <Icon className="h-6 w-6 text-accent-fuchsia mb-4" strokeWidth={1.8} />
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{p.text}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-3xl p-8 sm:p-12 grid gap-10 lg:grid-cols-2 items-center"
        >
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-white/60 leading-relaxed mb-4">
              To give businesses of every size access to the kind of premium, high-performing website experience that used to be reserved for large budgets — without cutting corners on quality.
            </p>
            <p className="text-white/60 leading-relaxed">
              We treat every engagement as a partnership: understanding your business first, then building the technology around it, not the other way around.
            </p>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-base-900 to-base-800 border border-white/[0.06] aspect-square flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-glow animate-gradient-shift bg-200" />
            <span className="relative font-mono text-xs text-white/40">design · code · ship</span>
          </div>
        </motion.div>
      </section>
      <CtaSection title="Let's build something together" description="Tell us about your business and what you're trying to achieve online." />
    </>
  );
}
