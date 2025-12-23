import { ReactNode } from "react";

export type StatusTone = "open" | "soon" | "closed";

type StatusPillProps = {
  tone: StatusTone;
  children: ReactNode;
};

const toneStyles: Record<StatusTone, string> = {
  open: "border-success/40 text-success",
  soon: "border-warning/40 text-warning",
  closed: "border-danger/40 text-danger"
};

const StatusPill = ({ tone, children }: StatusPillProps) => {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs uppercase tracking-wider ${
        toneStyles[tone]
      }`}
    >
      {children}
    </span>
  );
};

export default StatusPill;