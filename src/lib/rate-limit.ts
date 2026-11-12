// Best-effort per-IP limiter: 5 requests per 10 minutes.
//
// State lives in this server instance's memory. On Vercel each serverless
// instance keeps its own counts, so this slows down casual abuse but is not a
// hard guarantee. If spam shows up, move to a shared store (Upstash Redis or
// Vercel KV) behind this same function.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

const hits = new Map<string, number[]>();

export function isRateLimited(
  key: string,
  { max = MAX_REQUESTS, windowMs = WINDOW_MS, now = Date.now() } = {},
): boolean {
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  if (recent.length >= max) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);

  // Keep the map from growing without bound.
  if (hits.size > 5000) {
    for (const [k, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
    }
  }
  return false;
}

const seen = new Map<string, number>();

/** True if this key was recorded with rememberKey() in the last 10 minutes. */
export function wasSeenRecently(key: string, now = Date.now()): boolean {
  const last = seen.get(key);
  return last !== undefined && now - last < WINDOW_MS;
}

/** Record a key. Call it only after the work succeeded, so a failed attempt can be retried. */
export function rememberKey(key: string, now = Date.now()): void {
  seen.set(key, now);
  if (seen.size > 2000) {
    for (const [k, t] of seen) if (now - t >= WINDOW_MS) seen.delete(k);
  }
}
