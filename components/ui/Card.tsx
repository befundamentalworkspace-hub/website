import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  as?: "article" | "div";
};

export function Card({ children, className, as = "div" }: CardProps) {
  const Component = as;

  return (
    <Component
      className={cn(
        "rounded-card border border-hairline bg-card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft",
        className
      )}
    >
      {children}
    </Component>
  );
}
