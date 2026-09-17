import { HTMLMotionProps, motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = "", ...rest }: GlassCardProps) {
  return (
    <motion.div
      className={`glass glass-hover rounded-2xl p-6 sm:p-8 ${className}`}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
