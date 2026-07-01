"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { navItems } from "@/lib/siteData";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-canvas/92 backdrop-blur-xl transition",
        scrolled ? "border-b border-hairline shadow-[0_8px_30px_rgba(12,10,9,0.04)]" : "border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-5 sm:px-8">
        <Logo markClassName="h-9 w-9" textClassName="text-[1.6rem]" />
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button href="/request-audit" className="min-h-10 px-4 py-2">
            Request Audit
          </Button>
        </div>
        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-card lg:hidden"
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>
      <div
        className={cn(
          "grid border-t border-hairline bg-canvas transition-all duration-300 lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <nav className="flex flex-col gap-1 px-5 py-5" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-base font-medium text-primary transition hover:bg-card"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button href="/request-audit" className="mt-3 w-full" onClick={() => setOpen(false)}>
              Request Audit
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
