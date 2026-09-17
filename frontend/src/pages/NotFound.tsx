import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Seo from "@/components/Seo";

export default function NotFoundPage() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />
      <section className="section min-h-[60vh] flex flex-col items-center justify-center text-center pt-40">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="text-7xl font-bold gradient-text font-display">404</span>
          <h1 className="text-2xl font-semibold mt-6 mb-3">Page not found</h1>
          <p className="text-white/55 max-w-sm mx-auto mb-8">
            The page you're looking for doesn't exist or may have moved.
          </p>
          <Link to="/" className="btn-primary">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
        </motion.div>
      </section>
    </>
  );
}
