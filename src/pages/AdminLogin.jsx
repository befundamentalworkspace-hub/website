import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import SEO from "../components/SEO.jsx";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState("");

  async function handleLogin(event) {
    event.preventDefault();

    setIsSubmitting(true);
    setLoginError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Login error:", error);
      setLoginError(error.message || "Could not log in.");
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(false);
    navigate("/admin/dashboard");
  }

  return (
    <>
      <SEO
        title="Admin Login | Fundamental.co"
        description="Log in to the Fundamental.co Admin Dashboard to manage audit requests, blog posts, and more."
        path="/admin/login"
        noindex={true}
      />
    <main className="min-h-screen bg-black px-6 py-10 text-white md:px-10 lg:px-16">
      <section className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/40">
            Fundamental.co
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.06em] md:text-7xl lg:text-8xl">
            Admin access only.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-7 text-white/55 md:text-lg">
            Log in to review audit requests, update lead status, and manage the
            Fundamental.co operating dashboard.
          </p>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/35">
              Protected area
            </p>

            <p className="mt-4 text-sm leading-6 text-white/50">
              The public audit form remains open. Admin pages require a valid
              Supabase Auth session.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <form onSubmit={handleLogin}>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/35">
              Login
            </p>

            <h2 className="mt-5 text-4xl font-semibold uppercase leading-[0.95] tracking-[-0.05em] md:text-5xl">
              Enter admin credentials.
            </h2>

            <div className="mt-8 space-y-5">
              <label className="block">
                <span className="text-sm font-medium text-white/70">
                  Email
                </span>

                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  placeholder="admin@example.com"
                  className="mt-3 w-full rounded-2xl border border-white/10 bg-black px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-white/35"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-white/70">
                  Password
                </span>

                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  placeholder="••••••••"
                  className="mt-3 w-full rounded-2xl border border-white/10 bg-black px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-white/35"
                />
              </label>
            </div>

            {loginError && (
              <div className="mt-6 rounded-2xl border border-red-500/30 bg-red-500/10 p-4">
                <p className="text-sm leading-6 text-red-100">{loginError}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-8 w-full rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-white/85 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Logging in..." : "Log In"}
            </button>

            <a
              href="/"
              className="mt-5 inline-flex w-full justify-center rounded-full border border-white/15 px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white/35 hover:bg-white/10"
            >
              Back to Public Form
            </a>
          </form>
        </div>
      </section>
    </main>
    </>
  );
}