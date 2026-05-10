import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

export default function CMSRoute() {
  const [loading, setLoading] = useState(true);
  const [isAllowed, setIsAllowed] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    async function checkAccess() {
      setLoading(true);

      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();

      if (sessionError || !session?.user) {
        setIsLoggedIn(false);
        setIsAllowed(false);
        setLoading(false);
        return;
      }

      setIsLoggedIn(true);

      const userEmail = session.user.email;

      const { data: cmsRecord, error: cmsError } = await supabase
        .from("admin_users")
        .select("id, email, role, is_active")
        .eq("email", userEmail)
        .eq("is_active", true)
        .in("role", ["admin", "seo_expert"])
        .maybeSingle();

      if (cmsError || !cmsRecord) {
        setIsAllowed(false);
      } else {
        setIsAllowed(true);
      }

      setLoading(false);
    }

    checkAccess();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f7f5f0] text-black flex items-center justify-center">
        <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
          Checking CMS access...
        </p>
      </div>
    );
  }

  if (!isLoggedIn) {
    return <Navigate to="/admin/login" replace />;
  }

  if (!isAllowed) {
    return <Navigate to="/admin/unauthorized" replace />;
  }

  return <Outlet />;
}