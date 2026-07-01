type SupabaseRequestOptions = {
  key?: string;
  method?: "GET" | "POST" | "PATCH" | "DELETE";
  body?: unknown;
  query?: string;
  cache?: RequestCache;
  next?: NextFetchRequestConfig;
  prefer?: string;
};

const DEFAULT_SUPABASE_URL = "https://qltbeuqyllykwheqmbqz.supabase.co";

export function getSupabaseUrl() {
  return process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || DEFAULT_SUPABASE_URL;
}

export function getPublicSupabaseKey() {
  return (
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    process.env.SUPABASE_PUBLISHABLE_KEY ||
    process.env.SUPABASE_ANON_KEY ||
    ""
  );
}

export function getServerSupabaseKey() {
  return (
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_SECRET_KEY ||
    process.env.SUPABASE_SERVICE_KEY ||
    ""
  );
}

export async function supabaseRest<T>(path: string, options: SupabaseRequestOptions = {}) {
  const key = options.key ?? getPublicSupabaseKey();

  if (!key) {
    throw new Error("Supabase API key is not configured.");
  }

  const url = new URL(`/rest/v1/${path.replace(/^\//, "")}`, getSupabaseUrl());
  if (options.query) {
    url.search = options.query;
  }

  const response = await fetch(url, {
    method: options.method ?? "GET",
    cache: options.cache,
    next: options.next,
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      ...(options.prefer ? { Prefer: options.prefer } : {})
    },
    body: options.body ? JSON.stringify(options.body) : undefined
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `Supabase request failed with ${response.status}`);
  }

  if (response.status === 204) {
    return null as T;
  }

  return (await response.json()) as T;
}
