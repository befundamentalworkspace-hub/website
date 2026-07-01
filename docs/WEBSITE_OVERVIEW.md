# Fundamental Website Overview

This document explains the current Fundamental.co website project: what the public website does, how the CMS and lead database work, how the admin panel is organized, and what needs to be configured for local development and deployment.

## 1. Project Summary

The website is a Next.js App Router project for Fundamental.co, a clinic growth and patient acquisition website. It has two major surfaces:

1. Public website: marketing pages, blog, and audit request form.
2. Admin panel: private dashboard for audit leads, blog CMS, blog SEO metadata, and operational status tracking.

The project is connected to Supabase for:

- Blog CMS content in `blog_posts`.
- Lead/audit submissions in `request_audits`.
- Admin-related database support in `admin_users`.

The local development server currently runs on:

```text
http://localhost:3002
```

The main admin URL is:

```text
http://localhost:3002/admin/dashboard
```

## 2. Technology Stack

- Framework: Next.js 14 App Router
- Language: TypeScript
- Styling: Tailwind CSS
- UI: Custom components with the Fundamental.co design language
- Icons: `lucide-react`
- Database/CMS: Supabase Postgres via REST API
- Hosting target: Vercel

Key files:

- `app/`: routes, pages, and API endpoints
- `components/`: reusable UI, layout, sections, and admin components
- `lib/`: shared helpers, CMS mapping, metadata, admin auth, Supabase REST helper
- `public/`: static assets
- `.env.local`: local environment variables, not committed
- `.env.example`: safe template for required environment variables

## 3. Public Website Pages

### `/`

Homepage for Fundamental.co.

Purpose:

- Explain the attention-to-conversion pipeline.
- Position Fundamental.co as a trust-first growth system for doctor-led clinics.
- Drive visitors toward the audit request flow.

Main sections include:

- Hero section
- Problem section
- Journey breaks section
- Pipeline section
- Asset map
- Services preview
- Before/after section
- Results preview
- CTA section

Important components:

- `components/sections/HeroSection.tsx`
- `components/sections/ProblemSection.tsx`
- `components/sections/PipelineSection.tsx`
- `components/sections/AuditForm.tsx`

### `/services`

Explains the clinic marketing services.

Purpose:

- Show what Fundamental.co helps with.
- Present services as a system rather than isolated deliverables.

Content source:

- Static website data from `lib/siteData.ts`.

### `/results`

Shows clinic growth results, transformations, and examples.

Purpose:

- Build proof and trust.
- Show before/after style improvements and pipeline outcomes.

Content source:

- Static website data from `lib/siteData.ts`.

### `/clients`

Client-facing page for credibility and positioning.

Purpose:

- Support trust-building for visitors evaluating the company.

### `/about`

Explains the company philosophy and approach.

Purpose:

- Position Fundamental.co around trust, patient acquisition, and conversion systems.

### `/request-audit`

The main lead capture page.

Purpose:

- Let a clinic request a pipeline audit.
- Send the submitted lead data into Supabase.

Main component:

- `components/sections/AuditForm.tsx`

API endpoint used:

- `POST /api/audit-requests`

Data table:

- `request_audits`

### `/contact`

Contact and business information page.

Purpose:

- Give visitors and ad platforms a clear business contact route.
- Show business email, phone/WhatsApp, location, service area, and the preferred first step.
- Direct qualified visitors back to the Pipeline Audit flow.

Business details are configured through `siteConfig.contact` in `lib/siteData.ts`, with environment variable overrides available for deployment.

Current public business details:

- Business email: `hello@justfundamental.com`
- Phone / WhatsApp: `+91 9082811893`
- WhatsApp link: `https://wa.me/919082811893`
- Location: Lucknow, India. Serving clients across India.
- Service area: Doctor-led clinics, aesthetic clinics, healthcare businesses, and high-trust local businesses across India.
- Public business/brand name: Fundamental.co

### `/privacy-policy`

Privacy Policy page.

Purpose:

- Explain lead form data collection.
- Explain analytics, advertising pixels, cookies/local storage, and attribution capture.
- Give visitors a privacy contact route.

### `/terms-of-use`

Terms of Use page.

Purpose:

- Explain acceptable website use.
- Clarify that audit requests do not guarantee acceptance or a paid engagement.
- Clarify that website content is general business/marketing information, not medical, legal, or regulatory advice.

### `/refund-cancellation-policy`

Refund and Cancellation Policy page.

Purpose:

- Clarify that the current audit request form is free.
- Clarify that current paid services are proposal-based and invoice-based.
- Explain that refund and cancellation terms are handled as per the individual proposal or invoice.
- Explain that once work has started, payments for strategy, planning, creative work, development work, ad setup, or execution are generally non-refundable unless agreed otherwise.

### `/blog`

Blog listing page.

Purpose:

- Show published CMS blog posts.
- Pull posts from Supabase when available.
- Fall back to local static data if Supabase is unavailable during build or local testing.

Data source:

- Primary: Supabase `blog_posts`
- Fallback: `lib/siteData.ts`

Main helper:

- `lib/cms.ts`

### `/blog/[slug]`

Individual blog article page.

Purpose:

- Render a single published blog post.
- Load dynamic SEO metadata from Supabase.

SEO fields used:

- `seo_title`
- `seo_description`
- `seo_keywords`

## 4. Supabase Database Structure

The website currently relies on three Supabase tables.

### `blog_posts`

Used as the website CMS.

Important columns:

- `id`
- `created_at`
- `updated_at`
- `title`
- `slug`
- `excerpt`
- `content`
- `featured_image_url`
- `author`
- `tags`
- `status`
- `read_time`
- `seo_title`
- `seo_description`
- `seo_keywords`
- `published_at`
- `created_by`

Supported statuses:

- `draft`
- `published`
- `archived`

Public website behavior:

- Only published posts are shown on `/blog`.
- Individual blog pages load by slug.
- SEO fields are used for metadata.

Admin behavior:

- Admin can create, edit, publish, draft, archive, and delete posts.
- Admin can update SEO title, description, and keywords.

### `request_audits`

Used as the lead/audit request database.

Important columns:

- `id`
- `created_at`
- `name`
- `clinic_name`
- `city`
- `specialty`
- `website`
- `instagram`
- `monthly_enquiries`
- `main_problem`
- `budget_range`
- `preferred_contact`
- `notes`
- `status`
- `source`
- `internal_notes`

Supported statuses:

- `new`
- `reviewed`
- `contacted`
- `qualified`
- `not_fit`

Public website behavior:

- Visitors submit the audit form.
- The submission is saved into `request_audits`.
- The contact detail is stored inside the `notes` field because the current database table does not have a dedicated `contact_detail` column.

Admin behavior:

- Admin can view all audit requests.
- Admin can filter by status.
- Admin can update status.
- Admin can save internal notes.

### `admin_users`

Currently available in Supabase for admin-related support.

Important columns:

- `id`
- `created_at`
- `email`
- `role`
- `is_active`

Current app authentication:

- The implemented admin login can use Supabase Auth when `ADMIN_AUTH_PROVIDER=supabase`.
- In Supabase mode, the user's email/password are verified by Supabase Auth.
- Access is then limited to active emails in the `admin_users` table, unless `ADMIN_EMAILS` is set as an env allowlist.

## 5. Environment Variables

Local variables belong in:

```text
.env.local
```

Safe template lives in:

```text
.env.example
```

Required variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_publishable_or_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_server_only_service_role_or_secret_key
ADMIN_AUTH_PROVIDER=supabase
ADMIN_SESSION_SECRET=choose_a_long_random_session_signing_secret
NEXT_PUBLIC_BUSINESS_EMAIL=hello@justfundamental.com
NEXT_PUBLIC_BUSINESS_PHONE=+91 9082811893
NEXT_PUBLIC_BUSINESS_WHATSAPP=https://wa.me/919082811893
NEXT_PUBLIC_BUSINESS_LOCATION=Lucknow, India. Serving clients across India.
NEXT_PUBLIC_SERVICE_AREA=Doctor-led clinics, aesthetic clinics, healthcare businesses, and high-trust local businesses across India.
```

Notes:

- `NEXT_PUBLIC_SUPABASE_URL` is safe for browser use.
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` or `NEXT_PUBLIC_SUPABASE_ANON_KEY` is safe for public browser reads and form submissions when RLS policies allow it.
- `SUPABASE_SERVICE_ROLE_KEY` or `SUPABASE_SECRET_KEY` must stay server-only.
- Never prefix the private Supabase key with `NEXT_PUBLIC_`.
- Never commit `.env.local`.
- Add the same production variables in Vercel Project Settings.

## 6. Public Lead Flow

User journey:

1. Visitor opens `/request-audit`.
2. Visitor completes the audit request form.
3. The form validates required fields in the browser.
4. The form posts JSON to `/api/audit-requests`.
5. The API route validates the payload again.
6. The API route saves the record to Supabase `request_audits`.
7. The visitor sees a success message.
8. Admin can review the request in `/admin/audit-requests`.

Required form fields:

- Full name
- Clinic name
- City
- Specialty
- Email or WhatsApp number
- Main problem
- Preferred contact method

Optional fields:

- Website
- Instagram
- Monthly enquiry volume
- Budget range
- Notes
- UTM/referrer/landing page tracking

Main files:

- `components/sections/AuditForm.tsx`
- `app/api/audit-requests/route.ts`

## 7. Blog CMS Flow

Public blog read flow:

1. `/blog` calls `getBlogContent()`.
2. `getBlogContent()` reads published posts from Supabase `blog_posts`.
3. Posts are sorted by `published_at`.
4. If Supabase cannot be reached, local fallback articles from `lib/siteData.ts` are used.

Individual blog post flow:

1. `/blog/[slug]` calls `getBlogPost(slug)`.
2. The app fetches the matching published post from Supabase.
3. The article page renders title, excerpt, content, read time, and category.
4. `generateMetadata()` uses Supabase SEO fields for meta tags.

Admin blog workflow:

1. Admin opens `/admin/blog`.
2. Admin searches or filters blog posts.
3. Admin creates a post at `/admin/blog/new`.
4. Admin edits a post at `/admin/blog/[id]`.
5. Admin can save as draft or publish.
6. Admin can archive or delete posts.

Main files:

- `lib/cms.ts`
- `app/blog/page.tsx`
- `app/blog/[slug]/page.tsx`
- `components/admin/AdminPanel.tsx`
- `app/api/admin/blog-posts/route.ts`

## 8. Admin Panel

The admin panel uses the same visual language as the website:

- Light canvas background
- Editorial serif display headings
- Rounded cards and panels
- Hairline borders
- Restrained operating-dashboard layout
- Fundamental.co typography and spacing

Main admin component:

```text
components/admin/AdminPanel.tsx
```

Shared admin auth:

```text
lib/adminAuth.ts
lib/adminGuard.ts
```

### `/admin`

Redirects to:

```text
/admin/dashboard
```

### `/admin/dashboard`

Purpose:

- Operating overview.
- Shows lead counts.
- Shows content pulse.
- Shows recent audit requests.
- Allows quick lead status updates.

Data loaded:

- `request_audits`
- `blog_posts`

### `/admin/audit-requests`

Purpose:

- Lead inbox for audit requests.
- Review request details.
- Filter by status.
- Update pipeline status.
- Add internal notes.

Actions:

- Mark reviewed
- Mark contacted
- Mark qualified
- Mark not fit
- Save internal notes

API endpoint:

```text
GET /api/admin/audit-requests
PATCH /api/admin/audit-requests
```

### `/admin/blog`

Purpose:

- Blog CMS list.
- Search posts.
- Filter posts by status.
- Open public post.
- Edit post.
- Archive post.
- Delete post.

API endpoint:

```text
GET /api/admin/blog-posts
PATCH /api/admin/blog-posts
DELETE /api/admin/blog-posts
```

### `/admin/blog/new`

Purpose:

- Create a new blog post.
- Save as draft or publish immediately.

Fields:

- Title
- Slug
- Excerpt
- Content
- Author
- Read time
- Tags
- Featured image URL
- SEO title
- SEO description
- SEO keywords

### `/admin/blog/[id]`

Purpose:

- Edit an existing blog post.
- Update core article content.
- Update publishing fields.
- Update SEO/meta fields.
- Save as draft or publish.

### `/admin/meta-tags`

Purpose:

- Focused SEO metadata editor for existing blog posts.

Fields:

- SEO title
- SEO description
- SEO keywords

API endpoint:

```text
GET /api/admin/meta-tags
PATCH /api/admin/meta-tags
```

## 9. Admin Authentication

Current admin login supports Supabase-backed authentication.

Flow:

1. Admin enters their Supabase Auth email and password.
2. `POST /api/admin/login` verifies the credentials with Supabase Auth.
3. The app checks that the authenticated email is active in `admin_users`, or is listed in `ADMIN_EMAILS`.
4. If valid, the app sets an HTTP-only cookie.
5. Admin API routes check the cookie before serving data.
6. `POST /api/admin/logout` clears the cookie.

Cookie name:

```text
fundamental_admin_session
```

Important security notes:

- `ADMIN_SESSION_SECRET` should be long and private.
- The Supabase secret/service key is only used in server-side admin API routes.
- The private Supabase key is never exposed to browser code.
- Admin pages are marked `robots: noindex`.

## 10. API Routes

### Public API

```text
POST /api/audit-requests
```

Purpose:

- Save public audit request form submissions into Supabase.

### Admin APIs

```text
POST /api/admin/login
POST /api/admin/logout
GET /api/admin/audit-requests
PATCH /api/admin/audit-requests
GET /api/admin/blog-posts
POST /api/admin/blog-posts
PATCH /api/admin/blog-posts
DELETE /api/admin/blog-posts
GET /api/admin/meta-tags
PATCH /api/admin/meta-tags
```

Admin API requirements:

- Valid admin session cookie.
- Server-side Supabase secret/service key.

## 11. Design System

The website uses a warm editorial design system.

Core visual ideas:

- Light canvas background
- Soft gradients in the global body background
- Cream/white card surfaces
- Ink and stone text colors
- Serif display headings
- Sans-serif body copy
- Rounded panels and cards
- Subtle borders and shadows

Important Tailwind tokens:

- `canvas`
- `canvas-soft`
- `ink`
- `primary`
- `body`
- `muted`
- `hairline`
- `card`
- `surface-strong`

Core CSS variables:

- `--canvas`
- `--canvas-soft`
- `--ink`
- `--primary`
- `--body`
- `--muted`
- `--hairline`
- `--font-inter`
- `--font-display`

Main files:

- `app/globals.css`
- `tailwind.config.ts`
- `components/ui/Button.tsx`
- `components/ui/Input.tsx`
- `components/ui/Card.tsx`
- `components/layout/Container.tsx`
- `components/layout/Section.tsx`

## 12. Local Development

Install dependencies:

```bash
npm install
```

Run the local server:

```bash
npm run dev -- -p 3002
```

Open the public website:

```text
http://localhost:3002
```

Open admin:

```text
http://localhost:3002/admin/dashboard
```

Build the project:

```bash
npm run build
```

Known local note:

- If Next.js shows stale chunk errors after major code changes, stop the dev server, clear the generated `.next` folder, and restart the dev server.

## 13. Deployment Notes

Recommended deployment target:

- Vercel

Before deploying:

1. Add all required environment variables in Vercel.
2. Confirm `NEXT_PUBLIC_SUPABASE_URL` points to the correct Supabase project.
3. Confirm the publishable/anon key is valid.
4. Confirm the server-only Supabase secret/service key is valid.
5. Confirm `ADMIN_PANEL_TOKEN` is set.
6. Redeploy after adding or changing environment variables.
7. Test `/admin/dashboard` after deployment.
8. Test public audit form submission.
9. Test blog CMS create/edit flow.

Production admin URLs:

```text
https://justfundamental.com/admin/dashboard
https://justfundamental.com/admin/audit-requests
https://justfundamental.com/admin/blog
```

## 14. Verification Already Completed

The following checks have been run locally:

- `npm run build` passed.
- `/admin/dashboard` returned `HTTP 200`.
- `/admin/audit-requests` returned `HTTP 200`.
- `/admin/blog` returned `HTTP 200`.
- `/admin/blog/new` returned `HTTP 200`.
- Admin login returned `HTTP 200`.
- Admin blog API loaded 11 blog posts.
- Admin audit API loaded 2 audit requests.
- Temporary blog post create/delete test passed.
- Audit request no-op status update returned `HTTP 200`.

## 15. Future Improvements

Recommended next improvements:

1. Move admin login from token-only auth to Supabase Auth or another user-based auth system.
2. Add a dedicated `contact_detail` column to `request_audits`.
3. Add image upload support for blog featured images using Supabase Storage.
4. Add pagination for blog posts and audit requests.
5. Add richer markdown or rich-text editing for blog content.
6. Add admin activity logs for who changed lead status or blog content.
7. Add role-based permissions if multiple admin users will use the system.
8. Add automated end-to-end tests for the admin flows.
9. Add a production readiness checklist before launch.

## 16. Quick File Map

Public pages:

```text
app/page.tsx
app/about/page.tsx
app/services/page.tsx
app/results/page.tsx
app/clients/page.tsx
app/request-audit/page.tsx
app/contact/page.tsx
app/privacy-policy/page.tsx
app/terms-of-use/page.tsx
app/refund-cancellation-policy/page.tsx
app/blog/page.tsx
app/blog/[slug]/page.tsx
```

Admin pages:

```text
app/admin/page.tsx
app/admin/dashboard/page.tsx
app/admin/audit-requests/page.tsx
app/admin/blog/page.tsx
app/admin/blog/new/page.tsx
app/admin/blog/[id]/page.tsx
app/admin/meta-tags/page.tsx
```

API routes:

```text
app/api/audit-requests/route.ts
app/api/admin/login/route.ts
app/api/admin/logout/route.ts
app/api/admin/audit-requests/route.ts
app/api/admin/blog-posts/route.ts
app/api/admin/meta-tags/route.ts
```

Core helpers:

```text
lib/supabaseRest.ts
lib/cms.ts
lib/adminAuth.ts
lib/adminGuard.ts
lib/metadata.ts
lib/siteData.ts
```

Core admin UI:

```text
components/admin/AdminPanel.tsx
components/admin/MetaTagsAdmin.tsx
```

Core public UI:

```text
components/layout/*
components/ui/*
components/sections/*
```

## 17. Analytics and Conversion Tracking

Analytics and conversion tracking are a pre-launch requirement for this website, not a future improvement. The site may generate leads without tracking, but the business will not know which page, campaign, ad, or source produced those leads unless conversion tracking is configured.

Implemented tracking tools:

- Google Analytics 4
- Meta Pixel
- Google Ads conversion tracking
- Site-wide custom event layer
- Audit form submit conversion event
- Button click events
- Scroll depth tracking
- UTM capture
- Google click ID capture
- Meta click ID capture
- Landing page capture
- First landing page capture
- Referrer capture

Tracking files:

```text
components/analytics/AnalyticsScripts.tsx
components/analytics/AnalyticsEvents.tsx
components/analytics/CookieNotice.tsx
lib/analytics.ts
```

The cookie notice is also a pre-launch requirement because the website can load Google Analytics, Meta Pixel, and Google Ads tracking. Analytics scripts are consent-gated and load only after a visitor accepts analytics cookies in the notice.

### Required Analytics Environment Variables

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=000000000000000
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_AUDIT_CONVERSION_LABEL=conversion_label_here
```

How the variables work:

- `NEXT_PUBLIC_GA_MEASUREMENT_ID` loads GA4 and sends page/event data.
- `NEXT_PUBLIC_META_PIXEL_ID` loads Meta Pixel and sends PageView, Lead, and custom events.
- `NEXT_PUBLIC_GOOGLE_ADS_ID` configures Google Ads tracking.
- `NEXT_PUBLIC_GOOGLE_ADS_AUDIT_CONVERSION_LABEL` sends the audit form conversion to the correct Google Ads conversion action.

### Event Tracking Plan

| Event | Destination | Trigger | Notes |
| --- | --- | --- | --- |
| `page_view` | GA4, Meta, dataLayer | Every route view | Includes page title, path, location, referrer, and attribution fields. |
| `button_clicked` | GA4, Meta custom event, dataLayer | Any link or button click | Includes button text, element type, destination URL, and page location. |
| `scroll_depth_reached` | GA4, Meta custom event, dataLayer | 25%, 50%, 75%, 90%, 100% scroll depth | Fires once per threshold per page view. |
| `audit_form_submitted` | GA4, Meta custom event, dataLayer | Successful audit form database save | Includes non-PII form context and attribution. |
| `Lead` | Meta Pixel standard event | Successful audit form database save | Used for Meta campaign optimization. |
| `conversion` | Google Ads | Successful audit form database save | Uses `AW-ID/conversion_label`. |

### Attribution Capture

The site stores attribution in browser local storage so campaign data is not lost when a visitor lands on one page and later navigates to `/request-audit`.

Captured fields:

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_term`
- `utm_content`
- `gclid`
- `fbclid`
- first landing page
- current landing page
- referrer
- timestamp

The audit request API stores the attribution details in the `request_audits.notes` field. This keeps the lead record connected to the source/campaign that produced it.

### Privacy Notes

Analytics events intentionally avoid sending direct personally identifiable information to ad or analytics platforms. The audit conversion event does not send:

- Full name
- Contact detail
- Clinic name
- Free-text notes

It does send useful non-PII context:

- Specialty
- Main problem
- Budget range
- Preferred contact method
- Whether website/Instagram were provided
- Attribution fields

### Validation Checklist Before Launch

- Confirm GA4 property receives `page_view`.
- Confirm GA4 receives `button_clicked`.
- Confirm GA4 receives `scroll_depth_reached`.
- Confirm GA4 receives `audit_form_submitted`.
- Mark `audit_form_submitted` as a key event/conversion in GA4.
- Confirm Meta Pixel Helper sees PageView and Lead.
- Confirm Google Ads conversion action receives test conversions.
- Confirm UTM values are stored when landing on a campaign URL.
- Confirm UTM values persist after navigating to `/request-audit`.
- Confirm Supabase lead notes include UTM/referrer/landing page details.
- Confirm no PII is being sent to GA4, Meta, or Google Ads events.
