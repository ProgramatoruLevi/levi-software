import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type CounterProps = {
  value: number;
  suffix?: string;
  duration?: number;
};

const Counter = ({ value, suffix = "", duration = 1200 }: CounterProps) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const startTime = performance.now();
    let raf = 0;

    const tick = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const current = Math.floor(progress * value);
      setDisplay(current);
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-display text-3xl text-text">
      {display}
      {suffix}
    </span>
  );
};

export default Counter;
