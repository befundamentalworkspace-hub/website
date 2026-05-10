import { useEffect, useMemo, useState } from "react";
import { supabase } from "../lib/supabaseClient";

const statusStyles = {
  new: "border-white/20 bg-white/10 text-white",
  reviewed: "border-blue-400/30 bg-blue-400/10 text-blue-100",
  contacted: "border-yellow-400/30 bg-yellow-400/10 text-yellow-100",
  qualified: "border-green-400/30 bg-green-400/10 text-green-100",
  "not fit": "border-red-400/30 bg-red-400/10 text-red-100",
};

export default function AdminDashboard() {
  const [auditRequests, setAuditRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageError, setPageError] = useState("");

  useEffect(() => {
    fetchAuditRequests();
  }, []);

  async function fetchAuditRequests() {
    setLoading(true);
    setPageError("");

    const { data, error } = await supabase
      .from("request_audits")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase dashboard fetch error:", error);
      setPageError(error.message || "Could not load dashboard data.");
      setLoading(false);
      return;
    }

    setAuditRequests(data || []);
    setLoading(false);
  }

  const metrics = useMemo(() => {
    const total = auditRequests.length;

    const newRequests = auditRequests.filter(
      (request) => normalizeStatus(request.status) === "new"
    ).length;

    const reviewed = auditRequests.filter(
      (request) => normalizeStatus(request.status) === "reviewed"
    ).length;

    const contacted = auditRequests.filter(
      (request) => normalizeStatus(request.status) === "contacted"
    ).length;

    const qualified = auditRequests.filter(
      (request) => normalizeStatus(request.status) === "qualified"
    ).length;

    const notFit = auditRequests.filter(
      (request) => normalizeStatus(request.status) === "not fit"
    ).length;

    return {
      total,
      newRequests,
      reviewed,
      contacted,
      qualified,
      notFit,
    };
  }, [auditRequests]);

  const recentRequests = useMemo(() => {
    return auditRequests.slice(0, 5);
  }, [auditRequests]);

  const leakSummary = useMemo(() => {
    return buildLeakSummary(auditRequests);
  }, [auditRequests]);

  const actionQueue = useMemo(() => {
    return [
      {
        label: "Review new requests",
        count: metrics.newRequests,
        description: "Audit requests that have not been reviewed yet.",
      },
      {
        label: "Contact qualified clinics",
        count: metrics.qualified,
        description: "Clinics marked as qualified and ready for outreach.",
      },
      {
        label: "Follow up contacted clinics",
        count: metrics.contacted,
        description: "Clinics contacted but not yet qualified or rejected.",
      },
      {
        label: "Clean poor-fit requests",
        count: metrics.notFit,
        description: "Requests marked as not fit for the current offer.",
      },
    ];
  }, [metrics]);

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="px-6 py-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="flex flex-col gap-8 border-b border-white/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/40">
                Admin Dashboard
              </p>

              <h1 className="mt-5 max-w-5xl text-4xl font-semibold uppercase leading-[0.9] tracking-[-0.05em] md:text-6xl lg:text-7xl">
                Operating Overview
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-6 text-white/50 md:text-base">
                Track incoming audit requests, lead status, pipeline leaks, and
                the next actions required to move qualified clinics forward.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 sm:min-w-[320px]">
              <p className="text-xs uppercase tracking-[0.25em] text-white/35">
                Today&apos;s focus
              </p>

              <p className="mt-4 text-2xl font-semibold tracking-[-0.04em]">
                {metrics.newRequests > 0
                  ? `${metrics.newRequests} new request${
                      metrics.newRequests === 1 ? "" : "s"
                    } to review`
                  : "No new requests pending"}
              </p>

              <p className="mt-3 text-sm leading-6 text-white/45">
                Start with new audit requests, then move qualified clinics into
                follow-up or consultation scheduling.
              </p>
            </div>
          </div>

          {pageError && (
            <div className="mt-8 rounded-3xl border border-red-500/30 bg-red-500/10 p-5">
              <p className="text-sm leading-6 text-red-100">{pageError}</p>
            </div>
          )}

          {/* Metrics */}
          <div className="grid gap-4 py-8 sm:grid-cols-2 lg:grid-cols-5">
            <MetricCard label="Total Requests" value={metrics.total} />
            <MetricCard label="New" value={metrics.newRequests} />
            <MetricCard label="Reviewed" value={metrics.reviewed} />
            <MetricCard label="Contacted" value={metrics.contacted} />
            <MetricCard label="Qualified" value={metrics.qualified} />
          </div>

          {/* Main Grid */}
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Recent Requests */}
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 md:p-6">
              <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/35">
                    Recent Audit Requests
                  </p>

                  <p className="mt-2 text-sm text-white/45">
                    {loading
                      ? "Loading latest requests..."
                      : `${recentRequests.length} latest request${
                          recentRequests.length === 1 ? "" : "s"
                        }`}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={fetchAuditRequests}
                  className="rounded-full border border-white/15 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white/35 hover:bg-white/10"
                >
                  Refresh
                </button>
              </div>

              <div className="mt-5 space-y-3">
                {loading ? (
                  <EmptyState
                    title="Loading"
                    text="Fetching audit requests from Supabase."
                  />
                ) : recentRequests.length === 0 ? (
                  <EmptyState
                    title="No requests yet"
                    text="New audit requests will appear here once clinics submit the form."
                  />
                ) : (
                  recentRequests.map((request) => (
                    <RecentRequestCard key={request.id} request={request} />
                  ))
                )}
              </div>
            </div>

            {/* Action Queue */}
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 md:p-6">
              <div className="border-b border-white/10 pb-5">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/35">
                  Action Queue
                </p>

                <p className="mt-2 text-sm text-white/45">
                  What needs attention next.
                </p>
              </div>

              <div className="mt-5 space-y-3">
                {actionQueue.map((item) => (
                  <ActionQueueCard
                    key={item.label}
                    label={item.label}
                    count={item.count}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Pipeline Leak Summary */}
          <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 md:p-6">
            <div className="flex flex-col gap-3 border-b border-white/10 pb-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/35">
                  Pipeline Leak Summary
                </p>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/45">
                  Auto-classified from the submitted main problem. This helps
                  identify what most incoming clinics are struggling with.
                </p>
              </div>

              <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                Based on {metrics.total} request{metrics.total === 1 ? "" : "s"}
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {leakSummary.map((item) => (
                <LeakCard
                  key={item.label}
                  label={item.label}
                  count={item.count}
                  description={item.description}
                />
              ))}
            </div>
          </div>

          {/* Bottom Review Panel */}
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <ReviewPanel
              label="Admin standard"
              title="Every request needs one clear next action."
              text="Do not let incoming leads sit as raw form submissions. Mark them reviewed, contacted, qualified, or not fit."
            />

            <ReviewPanel
              label="Pipeline principle"
              title="The first job is diagnosis."
              text="Before pitching services, identify the likely leak: attention, trust, enquiry, follow-up, positioning, or qualification."
            />

            <ReviewPanel
              label="Next build"
              title="Admin navigation and protected access."
              text="After this dashboard, connect admin pages through a simple nav and then protect them behind login."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function MetricCard({ label, value }) {
  return (
    <div className="premium-card rounded-3xl border border-white/10 bg-white/[0.03] p-5">
      <p className="text-xs uppercase tracking-[0.25em] text-white/35">
        {label}
      </p>

      <p className="mt-4 text-4xl font-semibold tracking-[-0.06em]">
        {formatMetric(value)}
      </p>
    </div>
  );
}

function RecentRequestCard({ request }) {
  const status = normalizeStatus(request.status);

  return (
    <div className="premium-card rounded-3xl border border-white/10 bg-black p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-[-0.03em]">
            {request.clinic_name || "Unnamed Clinic"}
          </p>

          <p className="mt-1 text-sm text-white/45">
            {request.name || "No name"} · {request.city || "No city"}
          </p>
        </div>

        <StatusPill status={status} />
      </div>

      <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        <p className="text-xs uppercase tracking-[0.25em] text-white/30">
          Main problem
        </p>

        <p className="mt-2 text-sm leading-6 text-white/65">
          {request.main_problem || "Not provided"}
        </p>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <MiniField label="Specialty" value={request.specialty || "N/A"} />
        <MiniField label="Budget" value={request.budget_range || "N/A"} />
        <MiniField label="Submitted" value={formatDate(request.created_at)} />
      </div>
    </div>
  );
}

function ActionQueueCard({ label, count, description }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black p-5">
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="text-base font-semibold tracking-[-0.03em]">{label}</p>

          <p className="mt-2 text-sm leading-6 text-white/45">
            {description}
          </p>
        </div>

        <p className="text-3xl font-semibold tracking-[-0.06em]">
          {formatMetric(count)}
        </p>
      </div>
    </div>
  );
}

function LeakCard({ label, count, description }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black p-5">
      <p className="text-xs uppercase tracking-[0.25em] text-white/35">
        {label}
      </p>

      <p className="mt-4 text-4xl font-semibold tracking-[-0.06em]">
        {formatMetric(count)}
      </p>

      <p className="mt-3 text-sm leading-6 text-white/45">{description}</p>
    </div>
  );
}

function ReviewPanel({ label, title, text }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/35">
        {label}
      </p>

      <h3 className="mt-5 text-2xl font-semibold uppercase leading-[0.95] tracking-[-0.04em]">
        {title}
      </h3>

      <p className="mt-5 text-sm leading-6 text-white/50">{text}</p>
    </div>
  );
}

function StatusPill({ status }) {
  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${
        statusStyles[status] || statusStyles.new
      }`}
    >
      {status}
    </span>
  );
}

function MiniField({ label, value }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.22em] text-white/30">
        {label}
      </p>

      <p className="mt-1 text-sm leading-5 text-white/65">{value}</p>
    </div>
  );
}

function EmptyState({ title, text }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black p-8 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/35">
        {title}
      </p>

      <p className="mt-3 text-sm leading-6 text-white/45">{text}</p>
    </div>
  );
}

function buildLeakSummary(requests) {
  const summary = {
    attention: 0,
    trust: 0,
    enquiry: 0,
    followup: 0,
    positioning: 0,
  };

  requests.forEach((request) => {
    const problem = `${request.main_problem || ""} ${request.notes || ""}`.toLowerCase();

    if (
      problem.includes("instagram") ||
      problem.includes("reach") ||
      problem.includes("low-quality")
    ) {
      summary.attention += 1;
    }

    if (
      problem.includes("website") ||
      problem.includes("trust") ||
      problem.includes("price") ||
      problem.includes("shopper")
    ) {
      summary.trust += 1;
    }

    if (
      problem.includes("not converting") ||
      problem.includes("booking") ||
      problem.includes("bookings") ||
      problem.includes("enquiry")
    ) {
      summary.enquiry += 1;
    }

    if (
      problem.includes("follow-up") ||
      problem.includes("follow up") ||
      problem.includes("whatsapp") ||
      problem.includes("cold")
    ) {
      summary.followup += 1;
    }

    if (
      problem.includes("positioning") ||
      problem.includes("differentiate") ||
      problem.includes("generic")
    ) {
      summary.positioning += 1;
    }
  });

  return [
    {
      label: "Attention",
      count: summary.attention,
      description: "Reach, visibility, audience quality, or discovery issue.",
    },
    {
      label: "Trust",
      count: summary.trust,
      description: "Website, proof, credibility, or price-comparison issue.",
    },
    {
      label: "Enquiry",
      count: summary.enquiry,
      description: "CTA, booking, form, or conversion-friction issue.",
    },
    {
      label: "Follow-up",
      count: summary.followup,
      description: "WhatsApp, response speed, or lead handling issue.",
    },
    {
      label: "Positioning",
      count: summary.positioning,
      description: "Clinic appears generic, unclear, or replaceable.",
    },
  ];
}

function normalizeStatus(status) {
  return status || "new";
}

function formatMetric(value) {
  return String(value || 0).padStart(2, "0");
}

function formatDate(dateString) {
  if (!dateString) return "Unknown";

  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) return "Unknown";

  return date.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}