import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import SectionHeading from "@/components/SectionHeading";

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section">
      <SectionHeading
        eyebrow="Client Feedback"
        title={
          <>
            What people say <span className="gradient-text">working with us</span>
          </>
        }
        description="Illustrative placeholder reviews shown while we collect real client testimonials."
      />

      <div className="relative max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35 }}
            className="glass rounded-3xl p-8 sm:p-10 text-center"
          >
            {active.isDemo && (
              <span className="inline-block mb-5 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-white/50">
                Demo Testimonial
              </span>
            )}
            <div className="flex justify-center gap-1 mb-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < active.rating ? "fill-accent-fuchsia text-accent-fuchsia" : "text-white/15"}`}
                />
              ))}
            </div>
            <p className="text-lg sm:text-xl leading-relaxed text-white/80 mb-8">&ldquo;{active.quote}&rdquo;</p>
            <div className="flex items-center justify-center gap-3">
              <img src={active.image} alt={active.name} className="h-11 w-11 rounded-full object-cover border border-white/10" />
              <div className="text-left">
                <div className="text-sm font-semibold">{active.name}</div>
                <div className="text-xs text-white/45">{active.role}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-4 mt-6">
          <button onClick={prev} aria-label="Previous testimonial" className="h-10 w-10 flex items-center justify-center rounded-full glass glass-hover">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-6 bg-accent-fuchsia" : "w-1.5 bg-white/20"}`}
              />
            ))}
          </div>
          <button onClick={next} aria-label="Next testimonial" className="h-10 w-10 flex items-center justify-center rounded-full glass glass-hover">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
