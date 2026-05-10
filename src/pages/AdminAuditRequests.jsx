import { useEffect, useMemo, useState } from "react";
import { supabase } from "../lib/supabaseClient";

const statusOptions = [
  "all",
  "new",
  "reviewed",
  "contacted",
  "qualified",
  "not fit",
];

const statusStyles = {
  new: "border-white/20 bg-white/10 text-white",
  reviewed: "border-blue-400/30 bg-blue-400/10 text-blue-100",
  contacted: "border-yellow-400/30 bg-yellow-400/10 text-yellow-100",
  qualified: "border-green-400/30 bg-green-400/10 text-green-100",
  "not fit": "border-red-400/30 bg-red-400/10 text-red-100",
};

export default function AdminAuditRequests() {
  const [auditRequests, setAuditRequests] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedRequest, setSelectedRequest] = useState(null);

  const [internalNotes, setInternalNotes] = useState("");
  const [loading, setLoading] = useState(true);
  const [pageError, setPageError] = useState("");

  const [updatingStatus, setUpdatingStatus] = useState(false);
  const [savingNotes, setSavingNotes] = useState(false);
  const [notesSaved, setNotesSaved] = useState(false);

  useEffect(() => {
    fetchAuditRequests();
  }, []);

  useEffect(() => {
    setInternalNotes(selectedRequest?.internal_notes || "");
    setNotesSaved(false);
  }, [selectedRequest]);

  async function fetchAuditRequests() {
    setLoading(true);
    setPageError("");

    const { data, error } = await supabase
      .from("request_audits")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase fetch error:", error);
      setPageError(error.message || "Could not load audit requests.");
      setLoading(false);
      return;
    }

    setAuditRequests(data || []);
    setSelectedRequest(data?.[0] || null);
    setLoading(false);
  }

  async function updateRequestStatus(newStatus) {
    if (!selectedRequest) return;

    setUpdatingStatus(true);
    setPageError("");

    const { data, error } = await supabase
      .from("request_audits")
      .update({ status: newStatus })
      .eq("id", selectedRequest.id)
      .select()
      .single();

    if (error) {
      console.error("Supabase update error:", error);
      setPageError(error.message || "Could not update status.");
      setUpdatingStatus(false);
      return;
    }

    setAuditRequests((prev) =>
      prev.map((request) => (request.id === data.id ? data : request))
    );

    setSelectedRequest(data);
    setUpdatingStatus(false);
  }

  async function saveInternalNotes() {
    if (!selectedRequest) return;

    setSavingNotes(true);
    setNotesSaved(false);
    setPageError("");

    const { data, error } = await supabase
      .from("request_audits")
      .update({ internal_notes: internalNotes })
      .eq("id", selectedRequest.id)
      .select()
      .single();

    if (error) {
      console.error("Supabase notes update error:", error);
      setPageError(error.message || "Could not save internal notes.");
      setSavingNotes(false);
      return;
    }

    setAuditRequests((prev) =>
      prev.map((request) => (request.id === data.id ? data : request))
    );

    setSelectedRequest(data);
    setSavingNotes(false);
    setNotesSaved(true);
  }

  const filteredRequests = useMemo(() => {
    if (selectedStatus === "all") return auditRequests;

    return auditRequests.filter(
      (request) => normalizeStatus(request.status) === selectedStatus
    );
  }, [auditRequests, selectedStatus]);

  const metrics = useMemo(() => {
    return {
      total: auditRequests.length,
      new: auditRequests.filter(
        (request) => normalizeStatus(request.status) === "new"
      ).length,
      qualified: auditRequests.filter(
        (request) => normalizeStatus(request.status) === "qualified"
      ).length,
    };
  }, [auditRequests]);

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="border-b border-white/10 px-6 py-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 border-b border-white/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/40">
                Admin
              </p>

              <h1 className="mt-5 max-w-4xl text-4xl font-semibold uppercase leading-[0.9] tracking-[-0.05em] md:text-6xl lg:text-7xl">
                Request Audit Inbox
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-6 text-white/50 md:text-base">
                Review incoming clinic audit requests, diagnose fit, and move
                each lead through the first stage of the Fundamental.co pipeline.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:min-w-[420px]">
              <MetricCard label="Total" value={formatMetric(metrics.total)} />
              <MetricCard label="New" value={formatMetric(metrics.new)} />
              <MetricCard
                label="Qualified"
                value={formatMetric(metrics.qualified)}
              />
            </div>
          </div>

          {pageError && (
            <div className="mt-8 rounded-3xl border border-red-500/30 bg-red-500/10 p-5">
              <p className="text-sm leading-6 text-red-100">{pageError}</p>
            </div>
          )}

          <div className="grid gap-8 py-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 md:p-5">
              <div className="flex flex-col gap-4 border-b border-white/10 pb-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/35">
                    Incoming Requests
                  </p>

                  <p className="mt-2 text-sm text-white/45">
                    {loading
                      ? "Loading requests..."
                      : `${filteredRequests.length} request${
                          filteredRequests.length === 1 ? "" : "s"
                        } visible`}
                  </p>
                </div>

                <select
                  value={selectedStatus}
                  onChange={(event) => setSelectedStatus(event.target.value)}
                  className="rounded-full border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition focus:border-white/35"
                >
                  {statusOptions.map((status) => (
                    <option key={status} value={status} className="bg-black">
                      {status === "all" ? "All statuses" : status}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-5 space-y-3">
                {loading ? (
                  <InboxEmptyState
                    title="Loading"
                    text="Fetching audit requests from Supabase."
                  />
                ) : filteredRequests.length === 0 ? (
                  <InboxEmptyState
                    title="No requests found"
                    text="No audit requests match this status filter."
                  />
                ) : (
                  filteredRequests.map((request) => (
                    <button
                      key={request.id}
                      type="button"
                      onClick={() => setSelectedRequest(request)}
                      className={`premium-card w-full rounded-3xl border p-5 text-left transition ${
                        selectedRequest?.id === request.id
                          ? "border-white/30 bg-white/[0.07]"
                          : "border-white/10 bg-black hover:border-white/20 hover:bg-white/[0.04]"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-lg font-semibold tracking-[-0.03em]">
                            {request.clinic_name || "Unnamed Clinic"}
                          </p>

                          <p className="mt-1 text-sm text-white/45">
                            {request.name || "No name"} ·{" "}
                            {request.city || "No city"}
                          </p>
                        </div>

                        <StatusPill status={normalizeStatus(request.status)} />
                      </div>

                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        <MiniField
                          label="Specialty"
                          value={request.specialty || "Not provided"}
                        />

                        <MiniField
                          label="Budget"
                          value={request.budget_range || "Not provided"}
                        />
                      </div>

                      <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                        <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                          Main problem
                        </p>

                        <p className="mt-2 text-sm leading-6 text-white/65">
                          {request.main_problem || "Not provided"}
                        </p>
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-4">
                        <p className="text-xs text-white/30">
                          Submitted {formatDate(request.created_at)}
                        </p>

                        {request.internal_notes && (
                          <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                            Notes added
                          </p>
                        )}
                      </div>
                    </button>
                  ))
                )}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 md:p-8">
              {selectedRequest ? (
                <div>
                  <div className="flex flex-col gap-5 border-b border-white/10 pb-8 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/35">
                        Request Details
                      </p>

                      <h2 className="mt-5 text-4xl font-semibold uppercase leading-[0.95] tracking-[-0.05em] md:text-5xl">
                        {selectedRequest.clinic_name || "Unnamed Clinic"}
                      </h2>

                      <p className="mt-4 text-base text-white/50">
                        {selectedRequest.name || "No name"} ·{" "}
                        {selectedRequest.city || "No city"}
                      </p>
                    </div>

                    <StatusPill status={normalizeStatus(selectedRequest.status)} />
                  </div>

                  <div className="grid gap-4 border-b border-white/10 py-8 md:grid-cols-2">
                    <DetailCard
                      label="Specialty"
                      value={selectedRequest.specialty || "Not provided"}
                    />

                    <DetailCard
                      label="Monthly enquiries"
                      value={
                        selectedRequest.monthly_enquiries || "Not provided"
                      }
                    />

                    <DetailCard
                      label="Budget range"
                      value={selectedRequest.budget_range || "Not provided"}
                    />

                    <DetailCard
                      label="Preferred contact"
                      value={
                        selectedRequest.preferred_contact || "Not provided"
                      }
                    />

                    <DetailCard
                      label="Website"
                      value={selectedRequest.website || "Not provided"}
                    />

                    <DetailCard
                      label="Instagram"
                      value={selectedRequest.instagram || "Not provided"}
                    />
                  </div>

                  <div className="border-b border-white/10 py-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/35">
                      Main Problem
                    </p>

                    <p className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
                      {selectedRequest.main_problem || "Not provided"}
                    </p>

                    <p className="mt-5 max-w-3xl text-base leading-7 text-white/55">
                      {selectedRequest.notes ||
                        "No additional notes were submitted."}
                    </p>
                  </div>

                  <div className="grid gap-4 border-b border-white/10 py-8 md:grid-cols-3">
                    <PipelineCheck
                      label="Likely leak"
                      value={getLikelyLeak(selectedRequest.main_problem)}
                    />

                    <PipelineCheck label="Priority" value="Review journey" />

                    <PipelineCheck label="Next action" value="Contact clinic" />
                  </div>

                  <div className="pt-8">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/35">
                        Admin Actions
                      </p>

                      {updatingStatus && (
                        <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                          Updating...
                        </p>
                      )}
                    </div>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      <ActionButton
                        label="Mark Reviewed"
                        disabled={updatingStatus}
                        onClick={() => updateRequestStatus("reviewed")}
                      />

                      <ActionButton
                        label="Mark Contacted"
                        disabled={updatingStatus}
                        onClick={() => updateRequestStatus("contacted")}
                      />

                      <ActionButton
                        label="Mark Qualified"
                        disabled={updatingStatus}
                        onClick={() => updateRequestStatus("qualified")}
                      />

                      <ActionButton
                        label="Not Fit"
                        disabled={updatingStatus}
                        onClick={() => updateRequestStatus("not fit")}
                      />
                    </div>

                    <div className="mt-6 rounded-3xl border border-white/10 bg-black p-5">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <label className="block text-sm font-medium text-white/60">
                          Internal notes
                        </label>

                        {notesSaved && (
                          <p className="text-xs uppercase tracking-[0.2em] text-green-200/80">
                            Saved
                          </p>
                        )}
                      </div>

                      <textarea
                        rows="5"
                        value={internalNotes}
                        onChange={(event) => {
                          setInternalNotes(event.target.value);
                          setNotesSaved(false);
                        }}
                        placeholder="Add diagnosis notes, next action, pitch angle, objections, or follow-up reminders..."
                        className="mt-3 w-full resize-none rounded-2xl border border-white/10 bg-black px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-white/35"
                      />

                      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-xs leading-5 text-white/35">
                          Use this for internal diagnosis. Example: weak trust
                          before enquiry, unclear CTA, slow follow-up, or poor
                          consultation framing.
                        </p>

                        <button
                          type="button"
                          onClick={saveInternalNotes}
                          disabled={savingNotes}
                          className="rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-white/85 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {savingNotes ? "Saving..." : "Save Notes"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex min-h-[600px] items-center justify-center text-center">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/35">
                      No request selected
                    </p>

                    <p className="mt-4 text-sm text-white/45">
                      Select a request from the inbox to view details.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function MetricCard({ label, value }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
      <p className="text-xs uppercase tracking-[0.25em] text-white/35">
        {label}
      </p>

      <p className="mt-3 text-3xl font-semibold tracking-[-0.05em]">
        {value}
      </p>
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

      <p className="mt-1 text-sm text-white/65">{value}</p>
    </div>
  );
}

function DetailCard({ label, value }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black p-5">
      <p className="text-xs uppercase tracking-[0.25em] text-white/30">
        {label}
      </p>

      <p className="mt-3 break-words text-base leading-6 text-white/70">
        {value}
      </p>
    </div>
  );
}

function PipelineCheck({ label, value }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
      <p className="text-xs uppercase tracking-[0.25em] text-white/30">
        {label}
      </p>

      <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-white/80">
        {value}
      </p>
    </div>
  );
}

function ActionButton({ label, onClick, disabled = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="rounded-full border border-white/15 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white/35 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {label}
    </button>
  );
}

function InboxEmptyState({ title, text }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black p-8 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/35">
        {title}
      </p>

      <p className="mt-3 text-sm leading-6 text-white/45">{text}</p>
    </div>
  );
}

function normalizeStatus(status) {
  return status || "new";
}

function formatMetric(value) {
  return String(value).padStart(2, "0");
}

function formatDate(dateString) {
  if (!dateString) return "Unknown";

  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) return "Unknown";

  return date.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getLikelyLeak(problem) {
  if (!problem) return "Diagnosis needed";

  const lowerProblem = problem.toLowerCase();

  if (lowerProblem.includes("price")) return "Trust / Positioning";
  if (lowerProblem.includes("website")) return "Trust / Enquiry";
  if (lowerProblem.includes("instagram")) return "Attention / Trust";
  if (lowerProblem.includes("follow-up")) return "Follow-up";
  if (lowerProblem.includes("positioning")) return "Positioning";
  if (lowerProblem.includes("low-quality")) return "Attention / Qualification";

  return "Pipeline diagnosis";
}