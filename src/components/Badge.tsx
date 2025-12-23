import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

const Badge = ({ children, className = "" }: BadgeProps) => {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-border bg-surface/60 px-3 py-1 text-xs uppercase tracking-wider text-muted ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;