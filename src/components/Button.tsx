import { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonVariant = "primary" | "outline" | "ghost";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  to?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-base";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-base hover:bg-accent/90 shadow-md border border-accent/30",
  outline:
    "border border-border text-text hover:border-accent/60 hover:text-accent bg-transparent",
  ghost: "text-text hover:text-accent bg-transparent"
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base"
};

const Button = ({
  children,
  className = "",
  variant = "primary",
  size = "md",
  to,
  href,
  type = "button"
}: ButtonProps) => {
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};

export default Button;
