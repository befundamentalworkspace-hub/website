import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  href?: string;
  className?: string;
  markClassName?: string;
  textClassName?: string;
  variant?: "light" | "dark";
};

export function Logo({
  href = "/",
  className,
  markClassName,
  textClassName,
  variant = "light"
}: LogoProps) {
  const markSize = markClassName?.includes("h-11")
    ? "2.75rem"
    : markClassName?.includes("h-9")
      ? "2.25rem"
      : "2.5rem";

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-3 rounded-full transition",
        variant === "dark" ? "text-white" : "text-ink",
        className
      )}
      aria-label="Fundamental.co home"
    >
      <span
        className={cn(
          "relative block h-10 w-10 shrink-0 overflow-hidden rounded-sm",
          variant === "dark" ? "bg-transparent" : "bg-transparent",
          markClassName
        )}
        style={{
          position: "relative",
          display: "block",
          width: markSize,
          height: markSize,
          flexShrink: 0,
          overflow: "hidden"
        }}
      >
        <Image
          src="/fundamental-logo.png"
          alt=""
          fill
          sizes="40px"
          className="object-contain"
          style={{ objectFit: "contain" }}
          priority
        />
      </span>
      <span className={cn("display-text text-2xl leading-none", textClassName)}>
        Fundamental.co
      </span>
    </Link>
  );
}
