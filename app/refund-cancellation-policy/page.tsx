import { Metadata } from "next";
import { PolicyPage } from "@/components/layout/PolicyPage";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/siteData";

export const metadata: Metadata = pageMetadata({
  title: "Refund and Cancellation Policy | Fundamental.co",
  description:
    "Refund and cancellation policy for Fundamental.co proposal-based and invoice-based services.",
  path: "/refund-cancellation-policy"
});

export default function RefundCancellationPolicyPage() {
  return (
    <PolicyPage
      eyebrow="Policy"
      title="Refund and Cancellation Policy"
      intro="This policy explains how refunds, cancellations, rescheduling, and scope changes are handled for Fundamental.co's proposal-based and invoice-based services."
      updated="1 July 2026"
      sections={[
        {
          title: "Current audit request",
          body: [
            "The initial website pipeline audit request form is free to submit. Submitting the form does not create a paid booking, invoice, subscription, or obligation to purchase services.",
            "Fundamental.co does not currently take direct paid bookings or paid consultations online through the website."
          ]
        },
        {
          title: "Proposal-based and invoice-based services",
          body: [
            "All paid services are handled through individual proposals, invoices, scopes of work, or written agreements. The specific commercial terms for each engagement should be reviewed before payment.",
            "Refund and cancellation terms are handled as per the individual proposal or invoice."
          ]
        },
        {
          title: "After work has started",
          body: [
            "Once work has started, payments made for strategy, planning, creative work, development work, ad setup, execution, or reserved delivery capacity are generally non-refundable unless the proposal, invoice, or written agreement states otherwise.",
            "This is because service work often begins before visible deliverables are complete, including diagnosis, planning, research, internal strategy, technical setup, creative direction, and project allocation."
          ]
        },
        {
          title: "Rescheduling and scope changes",
          body: [
            "Rescheduling, timeline changes, or scope changes may be allowed based on mutual agreement.",
            "If a requested change affects workload, timeline, third-party costs, or deliverables, Fundamental.co may issue a revised proposal, change request, or additional invoice."
          ]
        },
        {
          title: "Third-party costs",
          body: [
            "Advertising spend, software subscriptions, domain fees, hosting fees, stock assets, paid tools, or other third-party costs are usually paid to external providers and may not be refundable by Fundamental.co.",
            "Clients should review third-party billing terms before approving those expenses."
          ]
        },
        {
          title: "How to request help",
          body: [
            `For cancellation, refund, or billing questions, contact ${siteConfig.contact.email} with your name, clinic/business name, booking or invoice details, and the reason for the request.`
          ]
        }
      ]}
    />
  );
}
