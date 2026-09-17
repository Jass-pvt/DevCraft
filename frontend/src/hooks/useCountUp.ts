import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/** Animates an integer count from 0 to `target` once the element scrolls into view. */
export function useCountUp(target: number, durationMs = 1400) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf: number;
    const start = performance.now();

    let lastVal = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / Math.max(durationMs, 1), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const nextVal = Math.round(eased * target);

      if (nextVal !== lastVal) {
        lastVal = nextVal;
        setValue(nextVal);
      }

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, durationMs]);

  return { ref, value };
}
