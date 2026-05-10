export default function Navbar() {
  const navItems = [
    { label: "Problem", href: "#problem" },
    { label: "Pipeline", href: "#pipeline" },
    { label: "Services", href: "#services" },
    { label: "Audit", href: "#audit" },
    { label: "Belief", href: "#belief" },
  ];

  return (
    <header className="fixed left-0 top-0 z-[9999] w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a
          href="#top"
          className="text-sm font-semibold uppercase tracking-[0.28em] text-white"
        >
          Fundamental.co
        </a>

        <nav className="hidden items-center gap-7 text-xs uppercase tracking-[0.22em] text-white/45 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#request-audit"
          className="rounded-full border border-white/25 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white hover:bg-white hover:text-black"
        >
          Request Audit
        </a>
      </div>
    </header>
  );
}