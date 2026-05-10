import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

const navItems = [
  {
    label: "Dashboard",
    path: "/admin/dashboard",
  },
  {
    label: "Audit Requests",
    path: "/admin/audit-requests",
  },
  {
    label: "Blog CMS",
    path: "/admin/blog",
  },
];

export default function AdminLayout() {
  const navigate = useNavigate();

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/admin/login");
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="border-b border-white/10 bg-black px-6 py-5 lg:border-b-0 lg:border-r lg:px-6 lg:py-8">
          <div className="flex items-center justify-between gap-4 lg:block">
            <a href="/" className="block">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/40">
                Fundamental.co
              </p>

              <h1 className="mt-3 text-2xl font-semibold uppercase tracking-[-0.05em]">
                Admin OS
              </h1>
            </a>

            <button
              type="button"
              onClick={handleLogout}
              className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/70 transition hover:border-white/35 hover:bg-white/10 lg:hidden"
            >
              Logout
            </button>
          </div>

          <div className="mt-8 hidden rounded-3xl border border-white/10 bg-white/[0.03] p-5 lg:block">
            <p className="text-xs uppercase tracking-[0.25em] text-white/35">
              Operating System
            </p>

            <p className="mt-4 text-sm leading-6 text-white/50">
              Review audit requests, diagnose pipeline leaks, and move qualified
              clinics forward.
            </p>
          </div>

          <nav className="mt-6 flex gap-2 overflow-x-auto lg:mt-8 lg:flex-col lg:overflow-visible">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `whitespace-nowrap rounded-full border px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition lg:w-full lg:rounded-2xl ${
                    isActive
                      ? "border-white/35 bg-white text-black"
                      : "border-white/10 bg-white/[0.03] text-white/60 hover:border-white/25 hover:bg-white/[0.07] hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-8 hidden border-t border-white/10 pt-6 lg:block">
            <a
              href="/"
              className="inline-flex w-full justify-center rounded-full border border-white/15 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white/35 hover:bg-white/10"
            >
              View Public Form
            </a>

            <button
              type="button"
              onClick={handleLogout}
              className="mt-3 inline-flex w-full justify-center rounded-full border border-white/15 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white/35 hover:bg-white/10"
            >
              Logout
            </button>
          </div>
        </aside>

        <section className="min-w-0">
          <Outlet />
        </section>
      </div>
    </main>
  );
}