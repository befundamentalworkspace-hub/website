import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";
import { servicePageSummaries } from "@/lib/servicePages";
import { navItems, pipelineStages, siteConfig } from "@/lib/siteData";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Refund & Cancellation", href: "/refund-cancellation-policy" }
];

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-ink text-white">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.7fr_1fr_0.75fr_0.95fr]">
          <div>
            <Logo variant="dark" markClassName="h-11 w-11" textClassName="text-3xl" />
            <p className="mt-5 max-w-md text-sm leading-6 text-white/68">
              Trust-first patient acquisition infrastructure for doctor-led clinics:
              attention, trust, enquiry, follow-up, consultation, and conversion.
            </p>
            <div className="mt-7">
              <Button href="/request-audit" variant="dark">
                Request Pipeline Audit
              </Button>
            </div>
          </div>
          <nav aria-label="Footer navigation">
            <p className="section-label text-white/46">Pages</p>
            <ul className="mt-4 space-y-3 text-sm text-white/72">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link className="transition hover:text-white" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Footer service navigation">
            <p className="section-label text-white/46">Service pages</p>
            <ul className="mt-4 space-y-3 text-sm text-white/72">
              {servicePageSummaries.map((item) => (
                <li key={item.href}>
                  <Link className="transition hover:text-white" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="section-label text-white/46">Pipeline</p>
            <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/72">
              {pipelineStages.map((stage) => (
                <li key={stage.name}>{stage.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="section-label text-white/46">Business</p>
            <ul className="mt-4 space-y-3 text-sm text-white/72">
              <li>
                <Link className="transition hover:text-white" href={`mailto:${siteConfig.contact.email}`}>
                  {siteConfig.contact.email}
                </Link>
              </li>
              <li>{siteConfig.contact.phone}</li>
              <li>{siteConfig.contact.location}</li>
            </ul>
            <p className="section-label mt-6 text-white/46">Legal</p>
            <ul className="mt-4 space-y-3 text-sm text-white/72">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link className="transition hover:text-white" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/46 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Fundamental.co. All rights reserved.</p>
          <p>Built for clinics where credibility decides conversion.</p>
        </div>
      </Container>
    </footer>
  );
}
