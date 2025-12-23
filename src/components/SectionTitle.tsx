import { ReactNode } from "react";

type SectionTitleProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
};

const SectionTitle = ({ eyebrow, title, subtitle, align = "left" }: SectionTitleProps) => {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow ? (
        <span className="text-sm uppercase tracking-[0.3em] text-accent/80">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-3xl md:text-4xl text-text">{title}</h2>
      {subtitle ? (
        <p className="max-w-2xl text-muted text-base md:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
};

export default SectionTitle;