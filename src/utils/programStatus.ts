import { StatusTone } from "../components/StatusPill";

type ProgramStatus = {
  label: string;
  tone: StatusTone;
};

export const getProgramStatus = (deadline: string): ProgramStatus => {
  const now = new Date();
  const end = new Date(deadline);

  if (Number.isNaN(end.getTime())) {
    return { label: "TBA", tone: "soon" };
  }

  if (end.getTime() < now.getTime()) {
    return { label: "Inchis", tone: "closed" };
  }

  const diffDays = (end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
  if (diffDays <= 30) {
    return { label: "In curand", tone: "soon" };
  }

  return { label: "Deschis", tone: "open" };
};