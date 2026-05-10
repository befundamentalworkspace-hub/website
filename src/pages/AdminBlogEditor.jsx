import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Eye,
  ImagePlus,
  Loader2,
  Save,
  Send,
  Sparkles,
  Trash2,
  Upload,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { supabase } from "../lib/supabaseClient";

const emptyForm = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  featured_image_url: "",
  author: "Fundamental Co.",
  tags: "",
  read_time: "",
  seo_title: "",
  seo_description: "",
  seo_keywords: "",
};

const BLOG_IMAGES_BUCKET = "blog-images";

export default function AdminBlogEditor() {
  const { id } = useParams();
  const navigate = useNavigate();

  const isEditMode = Boolean(id);

  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(isEditMode);
  const [saving, setSaving] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [autoSaving, setAutoSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [lastSavedAt, setLastSavedAt] = useState(null);
  const [status, setStatus] = useState("draft");
  const [editorMode, setEditorMode] = useState("write");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const initialLoadRef = useRef(true);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (!isEditMode) return;

    async function fetchPost() {
      setLoading(true);
      setErrorMessage("");

      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("id", id)
        .maybeSingle();

      if (error || !data) {
        setErrorMessage(error?.message || "Blog post not found.");
        setLoading(false);
        return;
      }

      setForm({
        title: data.title || "",
        slug: data.slug || "",
        excerpt: data.excerpt || "",
        content: data.content || "",
        featured_image_url: data.featured_image_url || "",
        author: data.author || "Fundamental Co.",
        tags: Array.isArray(data.tags) ? data.tags.join(", ") : "",
        read_time: data.read_time || "",
        seo_title: data.seo_title || "",
        seo_description: data.seo_description || "",
        seo_keywords: data.seo_keywords || "",
      });

      setStatus(data.status || "draft");
      setHasUnsavedChanges(false);
      setLoading(false);
    }

    fetchPost();
  }, [id, isEditMode]);

  const wordCount = useMemo(() => {
    return form.content.trim()
      ? form.content.trim().split(/\s+/).filter(Boolean).length
      : 0;
  }, [form.content]);

  const estimatedReadTime = useMemo(() => {
    const minutes = Math.max(1, Math.ceil(wordCount / 220));
    return `${minutes} min read`;
  }, [wordCount]);

  useEffect(() => {
    if (loading) return;

    if (initialLoadRef.current) {
      initialLoadRef.current = false;
      return;
    }

    if (!hasUnsavedChanges) return;
    if (saving || publishing || autoSaving || uploadingImage) return;

    const hasEnoughContentToSave =
      form.title.trim() && form.slug.trim() && form.content.trim();

    if (!hasEnoughContentToSave) return;

    const timer = setTimeout(() => {
      savePost("draft", {
        silent: true,
        isAutoSave: true,
      });
    }, 30000);

    return () => clearTimeout(timer);
  }, [
    form,
    hasUnsavedChanges,
    loading,
    saving,
    publishing,
    autoSaving,
    uploadingImage,
  ]);

  function updateField(field, value) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setHasUnsavedChanges(true);
  }

  function createSlug(value) {
    return value
      .toLowerCase()
      .trim()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
  }

  function handleTitleChange(value) {
    setForm((current) => ({
      ...current,
      title: value,
      slug: current.slug || createSlug(value),
      seo_title: current.seo_title || value,
    }));

    setHasUnsavedChanges(true);
  }

  function handleGenerateSlug() {
    updateField("slug", createSlug(form.title));
  }

  function handleGenerateReadTime() {
    updateField("read_time", estimatedReadTime);
  }

  function normalizeTags(tagsValue) {
    if (!tagsValue.trim()) return [];

    return tagsValue
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
  }

  function validateForm() {
    if (!form.title.trim()) return "Title is required.";
    if (!form.slug.trim()) return "Slug is required.";
    if (!form.content.trim()) return "Content is required.";
    return "";
  }

  async function getCurrentUserId() {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    return session?.user?.id || null;
  }

  async function handleFeaturedImageUpload(event) {
    const file = event.target.files?.[0];

    if (!file) return;

    setErrorMessage("");
    setSuccessMessage("");

    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

    if (!allowedTypes.includes(file.type)) {
      setErrorMessage("Please upload a JPG, PNG, or WEBP image.");
      event.target.value = "";
      return;
    }

    const maxSizeInMb = 5;
    const maxSizeInBytes = maxSizeInMb * 1024 * 1024;

    if (file.size > maxSizeInBytes) {
      setErrorMessage(`Image must be smaller than ${maxSizeInMb}MB.`);
      event.target.value = "";
      return;
    }

    try {
      setUploadingImage(true);

      const safeTitle = createSlug(form.title || "blog-image");
      const fileExt = file.name.split(".").pop();
      const fileName = `${safeTitle}-${Date.now()}.${fileExt}`;
      const filePath = `featured/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from(BLOG_IMAGES_BUCKET)
        .upload(filePath, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (uploadError) {
        setErrorMessage(uploadError.message);
        setUploadingImage(false);
        event.target.value = "";
        return;
      }

      const { data } = supabase.storage
        .from(BLOG_IMAGES_BUCKET)
        .getPublicUrl(filePath);

      if (!data?.publicUrl) {
        setErrorMessage("Image uploaded, but public URL could not be generated.");
        setUploadingImage(false);
        event.target.value = "";
        return;
      }

      updateField("featured_image_url", data.publicUrl);
      setSuccessMessage("Featured image uploaded successfully.");
    } catch (error) {
      setErrorMessage(error.message || "Image upload failed.");
    } finally {
      setUploadingImage(false);
      event.target.value = "";
    }
  }

  function handleRemoveFeaturedImage() {
    updateField("featured_image_url", "");
  }

  async function savePost(nextStatus = "draft", options = {}) {
    const { silent = false, isAutoSave = false } = options;

    const validationError = validateForm();

    if (validationError) {
      if (!silent) {
        setErrorMessage(validationError);
        setSuccessMessage("");
      }
      return;
    }

    if (!silent) {
      setErrorMessage("");
      setSuccessMessage("");
    }

    if (isAutoSave) {
      setAutoSaving(true);
    } else if (nextStatus === "published") {
      setPublishing(true);
    } else {
      setSaving(true);
    }

    const userId = await getCurrentUserId();

    const payload = {
      title: form.title.trim(),
      slug: createSlug(form.slug),
      excerpt: form.excerpt.trim() || null,
      content: form.content,
      featured_image_url: form.featured_image_url.trim() || null,
      author: form.author.trim() || "Fundamental Co.",
      tags: normalizeTags(form.tags),
      status: nextStatus,
      read_time: form.read_time.trim() || estimatedReadTime,
      seo_title: form.seo_title.trim() || form.title.trim(),
      seo_description: form.seo_description.trim() || form.excerpt.trim() || null,
      seo_keywords: form.seo_keywords.trim() || null,
      published_at:
        nextStatus === "published" && status !== "published"
          ? new Date().toISOString()
          : undefined,
      created_by: userId,
    };

    Object.keys(payload).forEach((key) => {
      if (payload[key] === undefined) delete payload[key];
    });

    let response;

    if (isEditMode) {
      response = await supabase.from("blog_posts").update(payload).eq("id", id);
    } else {
      response = await supabase
        .from("blog_posts")
        .insert(payload)
        .select("id")
        .single();
    }

    if (response.error) {
      if (!silent) {
        setErrorMessage(response.error.message);
      }
    } else {
      setStatus(nextStatus);
      setHasUnsavedChanges(false);
      setLastSavedAt(new Date());

      if (!silent) {
        setSuccessMessage(
          nextStatus === "published"
            ? "Post published successfully."
            : "Draft saved successfully."
        );
      }

      if (!isEditMode && response.data?.id) {
        navigate(`/admin/blog/edit/${response.data.id}`, { replace: true });
      }
    }

    setSaving(false);
    setPublishing(false);
    setAutoSaving(false);
  }

  if (loading) {
    return (
      <section className="min-h-screen bg-black px-6 py-10 text-white">
        <div className="mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center">
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.24em] text-white/45">
            <Loader2 size={18} className="animate-spin" />
            Loading editor...
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-black px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 border-b border-white/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Link
              to="/admin/blog"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/45 transition hover:text-white"
            >
              <ArrowLeft size={15} />
              Back to posts
            </Link>

            <p className="mt-8 text-xs uppercase tracking-[0.32em] text-white/45">
              Blog CMS
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
              {isEditMode ? "Edit Blog Post" : "Create Blog Post"}
            </h1>

            <div className="mt-5 flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] text-white/35">
              <span>Status: {status}</span>
              <span>Words: {wordCount}</span>
              <span>Estimate: {estimatedReadTime}</span>
              <span>Mode: {editorMode}</span>

              {uploadingImage && <span>Uploading image...</span>}
              {autoSaving && <span>Auto-saving...</span>}

              {!autoSaving && !uploadingImage && hasUnsavedChanges && (
                <span>Unsaved changes</span>
              )}

              {!autoSaving && !uploadingImage && !hasUnsavedChanges && lastSavedAt && (
                <span>
                  Saved at{" "}
                  {lastSavedAt.toLocaleTimeString("en-IN", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {status === "published" && form.slug && (
              <Link
                to={`/blog/${form.slug}`}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white/35 hover:bg-white/[0.04]"
              >
                <Eye size={15} />
                View
              </Link>
            )}

            <button
              onClick={() => savePost("draft")}
              disabled={saving || publishing || autoSaving || uploadingImage}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white/35 hover:bg-white/[0.04] disabled:opacity-40"
            >
              {saving ? (
                <Loader2 size={15} className="animate-spin" />
              ) : (
                <Save size={15} />
              )}
              Save Draft
            </button>

            <button
              onClick={() => savePost("published")}
              disabled={saving || publishing || autoSaving || uploadingImage}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-white/85 disabled:opacity-40"
            >
              {publishing ? (
                <Loader2 size={15} className="animate-spin" />
              ) : (
                <Send size={15} />
              )}
              Publish
            </button>
          </div>
        </div>

        {errorMessage && (
          <div className="mt-6 rounded-2xl border border-red-400/30 bg-red-500/10 px-5 py-4 text-sm text-red-200">
            {errorMessage}
          </div>
        )}

        {successMessage && (
          <div className="mt-6 rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-4 text-sm text-white/70">
            {successMessage}
          </div>
        )}

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.45fr_0.75fr]">
          <div className="space-y-6">
            <EditorPanel title="Core Article">
              <Field label="Title">
                <input
                  value={form.title}
                  onChange={(event) => handleTitleChange(event.target.value)}
                  placeholder="Example: Why Aesthetic Clinics Need Trust Before More Leads"
                  className="field-input"
                />
              </Field>

              <Field
                label="Slug"
                action={
                  <button
                    type="button"
                    onClick={handleGenerateSlug}
                    className="text-[11px] uppercase tracking-[0.18em] text-white/45 hover:text-white"
                  >
                    Generate
                  </button>
                }
              >
                <input
                  value={form.slug}
                  onChange={(event) =>
                    updateField("slug", createSlug(event.target.value))
                  }
                  placeholder="why-aesthetic-clinics-need-trust-before-more-leads"
                  className="field-input"
                />
              </Field>

              <Field label="Excerpt">
                <textarea
                  value={form.excerpt}
                  onChange={(event) => updateField("excerpt", event.target.value)}
                  placeholder="Short summary shown on the blog listing page."
                  rows={4}
                  className="field-textarea"
                />
              </Field>

              <div>
                <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-xs uppercase tracking-[0.22em] text-white/40">
                    Content
                  </span>

                  <div className="inline-flex rounded-full border border-white/10 bg-black p-1">
                    <button
                      type="button"
                      onClick={() => setEditorMode("write")}
                      className={`rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition ${
                        editorMode === "write"
                          ? "bg-white text-black"
                          : "text-white/45 hover:text-white"
                      }`}
                    >
                      Write
                    </button>

                    <button
                      type="button"
                      onClick={() => setEditorMode("preview")}
                      className={`rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition ${
                        editorMode === "preview"
                          ? "bg-white text-black"
                          : "text-white/45 hover:text-white"
                      }`}
                    >
                      Preview
                    </button>
                  </div>
                </div>

                {editorMode === "write" ? (
                  <textarea
                    value={form.content}
                    onChange={(event) => updateField("content", event.target.value)}
                    placeholder={`Write the blog content here.\n\nUse markdown:\n\n# Main heading\n## Subheading\n- Bullet point\n**Bold text**\n> Quote\n\n| Stage | What breaks |\n|---|---|\n| Trust | The clinic looks active but not credible |`}
                    rows={28}
                    className="field-textarea font-mono text-[13px] leading-6"
                  />
                ) : (
                  <div className="min-h-[680px] rounded-[24px] border border-white/10 bg-black/45 px-5 py-6 md:px-8">
                    {form.content.trim() ? (
                      <div className="blog-preview">
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          components={markdownComponents}
                        >
                          {form.content}
                        </ReactMarkdown>
                      </div>
                    ) : (
                      <div className="flex min-h-[560px] items-center justify-center text-center">
                        <div>
                          <p className="text-xs uppercase tracking-[0.28em] text-white/35">
                            Preview is empty
                          </p>
                          <p className="mt-3 max-w-md text-sm leading-6 text-white/45">
                            Write content in the editor, then switch to preview to
                            see how it will appear on the public blog page.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </EditorPanel>

            <EditorPanel title="SEO Settings">
              <Field label="SEO Title">
                <input
                  value={form.seo_title}
                  onChange={(event) => updateField("seo_title", event.target.value)}
                  placeholder="Best Marketing Agency for Doctors in India | Fundamental.co"
                  className="field-input"
                />
              </Field>

              <Field label="SEO Description">
                <textarea
                  value={form.seo_description}
                  onChange={(event) =>
                    updateField("seo_description", event.target.value)
                  }
                  placeholder="Write a search-focused description between 140–160 characters."
                  rows={4}
                  className="field-textarea"
                />
              </Field>

              <Field label="SEO Keywords">
                <textarea
                  value={form.seo_keywords}
                  onChange={(event) =>
                    updateField("seo_keywords", event.target.value)
                  }
                  placeholder="doctor marketing agency, aesthetic clinic marketing, clinic SEO India"
                  rows={3}
                  className="field-textarea"
                />
              </Field>
            </EditorPanel>
          </div>

          <aside className="space-y-6">
            <EditorPanel title="Featured Image">
              <div className="space-y-4">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  onChange={handleFeaturedImageUpload}
                  className="hidden"
                />

                {form.featured_image_url ? (
                  <div className="overflow-hidden rounded-[24px] border border-white/10 bg-black">
                    <img
                      src={form.featured_image_url}
                      alt="Featured preview"
                      className="h-56 w-full object-cover grayscale"
                    />
                  </div>
                ) : (
                  <div className="flex h-56 items-center justify-center rounded-[24px] border border-dashed border-white/15 bg-black/40 text-center">
                    <div>
                      <ImagePlus className="mx-auto text-white/35" size={28} />
                      <p className="mt-4 text-xs uppercase tracking-[0.22em] text-white/35">
                        No featured image
                      </p>
                    </div>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploadingImage}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white/35 hover:bg-white/[0.04] disabled:opacity-40"
                >
                  {uploadingImage ? (
                    <Loader2 size={15} className="animate-spin" />
                  ) : (
                    <Upload size={15} />
                  )}
                  Upload Image
                </button>

                {form.featured_image_url && (
                  <button
                    type="button"
                    onClick={handleRemoveFeaturedImage}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/45 transition hover:border-white/25 hover:text-white"
                  >
                    <Trash2 size={15} />
                    Remove Image
                  </button>
                )}

                <Field label="Image URL">
                  <input
                    value={form.featured_image_url}
                    onChange={(event) =>
                      updateField("featured_image_url", event.target.value)
                    }
                    placeholder="Upload image or paste external URL"
                    className="field-input"
                  />
                </Field>

                <p className="text-xs leading-5 text-white/35">
                  Recommended: 1600×900, JPG/PNG/WEBP, under 5MB.
                </p>
              </div>
            </EditorPanel>

            <EditorPanel title="Publishing">
              <div className="space-y-4">
                <Field label="Author">
                  <input
                    value={form.author}
                    onChange={(event) => updateField("author", event.target.value)}
                    className="field-input"
                  />
                </Field>

                <Field
                  label="Read Time"
                  action={
                    <button
                      type="button"
                      onClick={handleGenerateReadTime}
                      className="text-[11px] uppercase tracking-[0.18em] text-white/45 hover:text-white"
                    >
                      Auto
                    </button>
                  }
                >
                  <input
                    value={form.read_time}
                    onChange={(event) =>
                      updateField("read_time", event.target.value)
                    }
                    placeholder={estimatedReadTime}
                    className="field-input"
                  />
                </Field>

                <Field label="Tags">
                  <input
                    value={form.tags}
                    onChange={(event) => updateField("tags", event.target.value)}
                    placeholder="SEO, Aesthetic Clinics, Trust"
                    className="field-input"
                  />
                </Field>
              </div>
            </EditorPanel>

            <EditorPanel title="SEO Checklist">
              <div className="space-y-3">
                <ChecklistItem active={Boolean(form.title)} label="Title added" />
                <ChecklistItem active={Boolean(form.slug)} label="Slug added" />
                <ChecklistItem
                  active={Boolean(form.excerpt)}
                  label="Excerpt added"
                />
                <ChecklistItem
                  active={wordCount >= 500}
                  label="500+ words recommended"
                />
                <ChecklistItem
                  active={Boolean(form.featured_image_url)}
                  label="Featured image added"
                />
                <ChecklistItem
                  active={Boolean(form.seo_title)}
                  label="SEO title added"
                />
                <ChecklistItem
                  active={Boolean(form.seo_description)}
                  label="SEO description added"
                />
                <ChecklistItem
                  active={Boolean(form.seo_keywords)}
                  label="SEO keywords added"
                />
              </div>
            </EditorPanel>

            <EditorPanel title="Markdown Guide">
              <div className="space-y-4 text-sm leading-6 text-white/50">
                <MarkdownHint code="# Heading" label="Large section heading" />
                <MarkdownHint code="## Subheading" label="Smaller heading" />
                <MarkdownHint code="**Bold text**" label="Bold emphasis" />
                <MarkdownHint code="- Bullet point" label="Bullet list" />
                <MarkdownHint code="> Quote" label="Callout / quote" />
                <MarkdownHint code="[Text](https://...)" label="Link" />
              </div>
            </EditorPanel>

            <EditorPanel title="Writing Direction">
              <div className="space-y-4 text-sm leading-6 text-white/50">
                <div className="flex gap-3">
                  <Sparkles size={16} className="mt-1 shrink-0 text-white/40" />
                  <p>
                    Write for doctors and clinic owners. Avoid generic marketing
                    advice.
                  </p>
                </div>

                <div className="flex gap-3">
                  <Sparkles size={16} className="mt-1 shrink-0 text-white/40" />
                  <p>
                    Connect every article to trust, patient quality, enquiries,
                    follow-up, consultation, or revenue leakage.
                  </p>
                </div>

                <div className="flex gap-3">
                  <Sparkles size={16} className="mt-1 shrink-0 text-white/40" />
                  <p>
                    Use simple language. The reader should feel understood before
                    they feel sold.
                  </p>
                </div>
              </div>
            </EditorPanel>
          </aside>
        </div>
      </div>
    </section>
  );
}

function EditorPanel({ title, children }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
      <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-white/45">
        {title}
      </h2>
      <div className="space-y-5">{children}</div>
    </div>
  );
}

function Field({ label, action, children }) {
  return (
    <label className="block">
      <div className="mb-2 flex items-center justify-between gap-4">
        <span className="text-xs uppercase tracking-[0.22em] text-white/40">
          {label}
        </span>
        {action}
      </div>
      {children}
    </label>
  );
}

function ChecklistItem({ active, label }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/40 px-4 py-3">
      <span className="text-sm text-white/55">{label}</span>
      <span
        className={`h-2.5 w-2.5 rounded-full ${
          active ? "bg-white" : "bg-white/15"
        }`}
      />
    </div>
  );
}

function MarkdownHint({ code, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
      <code className="text-xs text-white/75">{code}</code>
      <p className="mt-2 text-xs leading-5 text-white/35">{label}</p>
    </div>
  );
}

const markdownComponents = {
  h1: ({ children }) => (
    <h2 className="mt-10 text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-white md:text-5xl">
      {children}
    </h2>
  ),

  h2: ({ children }) => (
    <h2 className="mt-10 text-3xl font-semibold leading-[1.1] tracking-[-0.04em] text-white md:text-4xl">
      {children}
    </h2>
  ),

  h3: ({ children }) => (
    <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-white">
      {children}
    </h3>
  ),

  h4: ({ children }) => (
    <h4 className="mt-7 text-xl font-semibold tracking-[-0.02em] text-white">
      {children}
    </h4>
  ),

  p: ({ children }) => (
    <p className="mt-5 text-base leading-8 text-white/62 md:text-lg">
      {children}
    </p>
  ),

  strong: ({ children }) => (
    <strong className="font-semibold text-white">{children}</strong>
  ),

  em: ({ children }) => <em className="text-white/75">{children}</em>,

  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="border-b border-white/35 text-white transition hover:border-white"
    >
      {children}
    </a>
  ),

  ul: ({ children }) => (
    <ul className="mt-5 space-y-3 pl-6 text-white/62">{children}</ul>
  ),

  ol: ({ children }) => (
    <ol className="mt-5 list-decimal space-y-3 pl-6 text-white/62">
      {children}
    </ol>
  ),

  li: ({ children }) => (
    <li className="pl-1 text-base leading-8 md:text-lg">{children}</li>
  ),

  blockquote: ({ children }) => (
    <blockquote className="mt-8 border-l border-white/25 pl-6 text-xl leading-8 text-white/75">
      {children}
    </blockquote>
  ),

  hr: () => <hr className="my-12 border-white/10" />,

  code: ({ inline, children }) => {
    if (inline) {
      return (
        <code className="rounded-md border border-white/10 bg-white/[0.06] px-1.5 py-0.5 text-sm text-white/80">
          {children}
        </code>
      );
    }

    return (
      <code className="block overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.05] p-5 text-sm leading-7 text-white/70">
        {children}
      </code>
    );
  },

  pre: ({ children }) => <pre className="mt-6">{children}</pre>,

  table: ({ children }) => (
    <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10">
      <table className="w-full border-collapse text-left text-sm text-white/60">
        {children}
      </table>
    </div>
  ),

  thead: ({ children }) => (
    <thead className="border-b border-white/10 bg-white/[0.04] text-white">
      {children}
    </thead>
  ),

  th: ({ children }) => (
    <th className="min-w-[180px] px-5 py-4 text-xs uppercase tracking-[0.16em] text-white/70">
      {children}
    </th>
  ),

  td: ({ children }) => (
    <td className="border-t border-white/10 px-5 py-4 text-white/55">
      {children}
    </td>
  ),

  img: ({ src, alt }) => (
    <img
      src={src}
      alt={alt || ""}
      className="mt-8 w-full rounded-[28px] border border-white/10 grayscale"
    />
  ),
};