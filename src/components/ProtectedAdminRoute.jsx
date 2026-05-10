import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

export default function ProtectedAdminRoute() {
  const [session, setSession] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loadingSession, setLoadingSession] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadSessionAndAdminAccess() {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error("Session error:", error);

        if (isMounted) {
          setSession(null);
          setIsAdmin(false);
          setLoadingSession(false);
        }

        return;
      }

      const currentSession = data?.session || null;

      if (!currentSession) {
        if (isMounted) {
          setSession(null);
          setIsAdmin(false);
          setLoadingSession(false);
        }

        return;
      }

      const userEmail = currentSession.user?.email;

      const { data: adminRecord, error: adminError } = await supabase
        .from("admin_users")
        .select("id, email, role, is_active")
        .eq("email", userEmail)
        .eq("is_active", true)
        .maybeSingle();

      if (adminError) {
        console.error("Admin access check error:", adminError);
      }

      if (isMounted) {
        setSession(currentSession);
        setIsAdmin(Boolean(adminRecord));
        setLoadingSession(false);
      }
    }

    loadSessionAndAdminAccess();

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (_event, currentSession) => {
        if (!currentSession) {
          setSession(null);
          setIsAdmin(false);
          setLoadingSession(false);
          return;
        }

        const userEmail = currentSession.user?.email;

        const { data: adminRecord, error: adminError } = await supabase
          .from("admin_users")
          .select("id, email, role, is_active")
          .eq("email", userEmail)
          .eq("is_active", true)
          .maybeSingle();

        if (adminError) {
          console.error("Admin access check error:", adminError);
        }

        setSession(currentSession);
        setIsAdmin(Boolean(adminRecord));
        setLoadingSession(false);
      }
    );

    return () => {
      isMounted = false;
      listener?.subscription?.unsubscribe();
    };
  }, []);

  if (loadingSession) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/35">
            Checking session
          </p>

          <p className="mt-4 text-sm text-white/50">
            Verifying admin access.
          </p>
        </div>
      </main>
    );
  }

  if (!session) {
    return <Navigate to="/admin/login" replace />;
  }

  if (!isAdmin) {
    return <Navigate to="/admin/unauthorized" replace />;
  }

  return <Outlet />;
}