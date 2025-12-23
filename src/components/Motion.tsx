import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

type MotionInViewProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1 }
};

export const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const MotionInView = ({ children, className = "", delay = 0 }: MotionInViewProps) => {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

export default MotionInView;