export default function BackgroundTexture() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 bg-black">
      {/* Soft atmospheric depth */}
      <div className="absolute left-[-10%] top-[5%] h-[600px] w-[600px] rounded-full bg-white/[0.035] blur-3xl" />
      <div className="absolute right-[-12%] top-[25%] h-[700px] w-[700px] rounded-full bg-white/[0.028] blur-3xl" />
      <div className="absolute bottom-[-20%] left-[25%] h-[600px] w-[600px] rounded-full bg-white/[0.022] blur-3xl" />

      {/* Faint system grid */}
      <div className="absolute left-[8%] top-0 h-full w-px bg-white/[0.045]" />
      <div className="absolute left-[32%] top-0 h-full w-px bg-white/[0.025]" />
      <div className="absolute left-[68%] top-0 h-full w-px bg-white/[0.025]" />
      <div className="absolute right-[8%] top-0 h-full w-px bg-white/[0.045]" />

      <div className="absolute left-0 top-[22%] h-px w-full bg-white/[0.028]" />
      <div className="absolute left-0 top-[52%] h-px w-full bg-white/[0.02]" />
      <div className="absolute left-0 top-[82%] h-px w-full bg-white/[0.028]" />

      {/* Large brand geometry */}
      <div className="absolute -left-28 top-[12%] h-[420px] w-[420px] rounded-full border border-white/[0.055]" />
      <div className="absolute -right-36 top-[35%] h-[560px] w-[560px] rounded-full border border-white/[0.045]" />
      <div className="absolute left-[18%] bottom-[-220px] h-[460px] w-[460px] rounded-full border border-white/[0.04]" />

      {/* Pipeline leakage motif */}
      <div className="absolute left-[16%] top-[40%] flex items-center gap-5 opacity-[0.22]">
        <span className="h-2 w-2 rounded-full bg-white" />
        <span className="h-px w-24 bg-white/45" />
        <span className="text-sm text-white/50">×</span>
        <span className="h-px w-20 bg-white/35" />
        <span className="text-sm text-white/40">×</span>
        <span className="h-px w-28 bg-white/25" />
        <span className="h-2 w-2 rounded-full bg-white/60" />
      </div>

      {/* Brand mark echoes */}
      <div className="absolute right-[12%] top-[12%] opacity-[0.075]">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full border border-white" />
          <Triangle size={56} />
        </div>
      </div>

      <div className="absolute left-[8%] bottom-[18%] opacity-[0.065]">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-full bg-white" />
          <Triangle size={48} />
        </div>
      </div>

      {/* Edge control */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_62%,rgba(0,0,0,0.82)_100%)]" />
    </div>
  );
}

function Triangle({ size = 80 }) {
  return (
    <div
      style={{
        width: 0,
        height: 0,
        borderLeft: `${size / 2}px solid transparent`,
        borderRight: `${size / 2}px solid transparent`,
        borderBottom: `${size}px solid white`,
      }}
    />
  );
}