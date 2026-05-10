import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

export default function AdminUnauthorized() {
  const navigate = useNavigate();

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/admin/login");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 py-10 text-white">
      <section className="w-full max-w-3xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-center md:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/35">
          Access Denied
        </p>

        <h1 className="mt-6 text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.06em] md:text-7xl">
          Not an approved admin.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/55">
          Your login is valid, but this email has not been added to the
          Fundamental.co admin access list.
        </p>

        <div className="mt-8 rounded-3xl border border-white/10 bg-black p-5 text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/35">
            What this means
          </p>

          <p className="mt-4 text-sm leading-6 text-white/50">
            Admin pages are restricted to authenticated users whose email
            exists in the Supabase admin_users table with is_active set to
            true.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-full bg-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-white/85"
          >
            Logout
          </button>

          <a
            href="/"
            className="rounded-full border border-white/15 px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white/35 hover:bg-white/10"
          >
            Public Website
          </a>

          <a
            href="/request-audit"
            className="rounded-full border border-white/15 px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white/35 hover:bg-white/10"
          >
            Request Audit
          </a>
        </div>
      </section>
    </main>
  );
}