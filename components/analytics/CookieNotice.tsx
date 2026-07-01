"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getCookieConsent, setCookieConsent } from "@/lib/analytics";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getCookieConsent() === null);
  }, []);

  function choose(value: "accepted" | "declined") {
    setCookieConsent(value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[80] px-4 pb-4 sm:px-6">
      <div className="mx-auto max-w-5xl rounded-panel border border-hairline bg-card p-5 shadow-soft">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="section-label">Cookie notice</p>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-body">
              We use analytics and advertising pixels to understand website
              performance, measure campaigns, and improve the audit request
              journey. You can accept or decline non-essential tracking.
              Learn more in our{" "}
              <Link className="font-semibold text-primary underline-offset-4 hover:underline" href="/privacy-policy">
                Privacy Policy
              </Link>.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-hairline bg-card px-5 py-3 text-sm font-semibold text-primary transition hover:border-primary"
              type="button"
              onClick={() => choose("declined")}
            >
              Decline
            </button>
            <button
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-primary bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink"
              type="button"
              onClick={() => choose("accepted")}
            >
              Accept analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
