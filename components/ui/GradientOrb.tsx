import { cn } from "@/lib/utils";

type GradientOrbProps = {
  className?: string;
  tone?: "mint" | "peach" | "lavender" | "sky" | "rose";
};

const tones = {
  mint: "bg-[#a7e5d3]/50",
  peach: "bg-[#f4c5a8]/50",
  lavender: "bg-[#c8b8e0]/45",
  sky: "bg-[#a8c8e8]/45",
  rose: "bg-[#e8b8c4]/45"
};

export function GradientOrb({ className, tone = "mint" }: GradientOrbProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute h-56 w-56 rounded-full blur-3xl orb-drift",
        tones[tone],
        className
      )}
    />
  );
}
