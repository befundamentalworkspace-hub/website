import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "ghost" | "dark";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const variants = {
  primary:
    "border-primary bg-primary text-white hover:-translate-y-0.5 hover:bg-ink hover:shadow-lift",
  secondary:
    "border-hairline-strong bg-card text-primary hover:-translate-y-0.5 hover:border-primary hover:shadow-soft",
  ghost: "border-transparent bg-transparent text-primary hover:bg-hairline-soft",
  dark:
    "border-white/20 bg-white text-ink hover:-translate-y-0.5 hover:bg-canvas-soft hover:shadow-lift"
};

export function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  className,
  onClick,
  disabled
}: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition duration-300",
    variants[variant],
    disabled ? "cursor-not-allowed opacity-60 hover:translate-y-0 hover:shadow-none" : undefined,
    className
  );

  if (href) {
    return (
      <Link className={classes} href={href} onClick={onClick}>
        {children}
        <ArrowRight aria-hidden="true" size={16} />
      </Link>
    );
  }

  return (
    <button className={classes} type={type} onClick={onClick} disabled={disabled}>
      {children}
      <ArrowRight aria-hidden="true" size={16} />
    </button>
  );
}
