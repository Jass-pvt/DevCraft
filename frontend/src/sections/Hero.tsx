import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      {/* animated gradient blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-20 h-[420px] w-[420px] rounded-full bg-accent-purple/25 blur-[110px] animate-pulse-glow" />
        <div className="absolute top-10 right-0 h-[380px] w-[380px] rounded-full bg-accent-fuchsia/20 blur-[110px] animate-pulse-glow" style={{ animationDelay: "1.2s" }} />
        <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-accent-violet/20 blur-[100px] animate-float" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow justify-center mb-6"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Web Development & Digital Solutions Agency
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] max-w-4xl mx-auto"
        >
          We Design <span className="gradient-text">Dreams.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
        >
          We build modern, high-performance websites that help businesses stand out, grow, and turn visitors into customers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/contact" className="btn-primary text-base px-7 py-3.5">
            Start Your Project
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link to="/work" className="btn-secondary text-base px-7 py-3.5">
            View Our Work
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="relative mt-20 mx-auto max-w-4xl"
        >
          <div className="glass rounded-3xl p-3 sm:p-4 shadow-glow">
            <div className="rounded-2xl bg-gradient-to-br from-base-900 to-base-800 border border-white/[0.06] aspect-[16/9] overflow-hidden relative">
              {/* AI Video Player */}
              <video
                src="/Ultra_realistic_futuristic_web.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* floating UI chips */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="hidden sm:flex glass absolute -left-8 top-10 rounded-xl px-4 py-2.5 text-xs font-mono items-center gap-2 z-20"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> 99% Uptime Ready
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="hidden sm:flex glass absolute -right-6 bottom-8 rounded-xl px-4 py-2.5 text-xs font-mono items-center gap-2 z-20"
          >
            ⚡ Fast by Default
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}