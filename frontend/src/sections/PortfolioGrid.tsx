import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, FileText } from "lucide-react";
import { portfolioItems, portfolioCategories } from "@/data/portfolio";
import type { PortfolioCategory } from "@/types";
import SectionHeading from "@/components/SectionHeading";

interface PortfolioGridProps {
  compact?: boolean;
}

type Filter = "All" | PortfolioCategory;

export default function PortfolioGrid({ compact = false }: PortfolioGridProps) {
  const [filter, setFilter] = useState<Filter>("All");

  const items = useMemo(() => {
    const base = filter === "All" ? portfolioItems : portfolioItems.filter((p) => p.category === filter);
    return compact ? base.slice(0, 3) : base;
  }, [filter, compact]);

  return (
    <section id="work" className="section">
      <SectionHeading
        eyebrow="Our Work"
        title={
          <>
            Projects that show <span className="gradient-text">how we think</span>
          </>
        }
        description="A set of demo/concept builds illustrating our range across business, e-commerce, portfolio, event, and application projects."
      />

      {!compact && (
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {(["All", ...portfolioCategories] as Filter[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? "bg-gradient-to-r from-accent-purple to-accent-fuchsia text-white shadow-glow-sm"
                  : "glass glass-hover text-white/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {items.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="group rounded-2xl overflow-hidden glass glass-hover"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-950/90 via-base-950/10 to-transparent" />
                {project.isDemo && (
                  <span className="absolute top-3 left-3 rounded-full bg-black/60 backdrop-blur px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-white/80 border border-white/10">
                    Demo Project
                  </span>
                )}
                <span className="absolute top-3 right-3 rounded-full bg-black/60 backdrop-blur px-3 py-1 text-[10px] font-mono text-white/80 border border-white/10">
                  {project.category}
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-base mb-1.5">{project.name}</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((t) => (
                    <span key={t} className="text-[11px] font-mono px-2 py-1 rounded-md bg-white/[0.05] border border-white/10 text-white/50">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white">
                      Live Demo <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-sm text-white/30 cursor-not-allowed">
                      Live Demo <ExternalLink className="h-3.5 w-3.5" />
                    </span>
                  )}
                  <a href={project.caseStudyUrl} className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white">
                    Case Study <FileText className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {compact && (
        <div className="mt-12 text-center">
          <Link to="/work" className="btn-secondary">
            View Full Portfolio
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </section>
  );
}
