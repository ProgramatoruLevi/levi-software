import { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  className?: string;
};

const Card = ({ children, className = "", ...rest }: CardProps) => {
  return (
    <div className={`glass rounded-2xl p-6 ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Card;