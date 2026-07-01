"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { persistAttributionFromLocation, trackEvent, trackPageView } from "@/lib/analytics";

const scrollDepthMarks = [25, 50, 75, 90, 100];

export function AnalyticsEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const firedScrollDepths = useRef<Set<number>>(new Set());

  useEffect(() => {
    persistAttributionFromLocation();
    trackPageView();
    firedScrollDepths.current = new Set();
  }, [pathname, searchParams]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target : null;
      const clickable = target?.closest("a,button");
      if (!clickable) return;

      const tag = clickable.tagName.toLowerCase();
      const text = normalizeText(clickable.textContent);
      const href = clickable instanceof HTMLAnchorElement ? clickable.href : "";

      trackEvent("button_clicked", {
        element_type: tag,
        button_text: text || clickable.getAttribute("aria-label") || "Unlabeled action",
        destination_url: href,
        location: window.location.pathname
      });
    }

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    function handleScroll() {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;

      const depth = Math.min(100, Math.round((window.scrollY / scrollableHeight) * 100));
      const mark = scrollDepthMarks.find((threshold) => depth >= threshold && !firedScrollDepths.current.has(threshold));

      if (mark) {
        firedScrollDepths.current.add(mark);
        trackEvent("scroll_depth_reached", {
          percent_scrolled: mark
        });
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}

function normalizeText(value: string | null) {
  return value?.replace(/\s+/g, " ").trim().slice(0, 120) ?? "";
}
