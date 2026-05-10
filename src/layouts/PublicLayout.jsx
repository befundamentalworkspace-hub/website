import { Link, NavLink, Outlet } from "react-router-dom";
import logoMark from "../assets/fundamental-mark.png";

const navItems = [
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Results", path: "/results" },
  { label: "Blog", path: "/blog" },
  { label: "Our Clients", path: "/our-clients" },
];

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-12">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.03]">
              <img
                src={logoMark}
                alt="Fundamental.co"
                className="h-6 w-6 object-contain"
              />
            </div>

            <span className="text-sm font-medium uppercase tracking-[0.28em] text-white">
              Fundamental.co
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-xs font-medium uppercase tracking-[0.22em] transition ${
                    isActive ? "text-white" : "text-white/45 hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <Link
            to="/request-audit"
            className="rounded-full border border-white bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-black hover:text-white"
          >
            Request Audit
          </Link>
        </div>
      </header>

      <main className="pt-[73px]">
        <Outlet />
      </main>
    </div>
  );
}
