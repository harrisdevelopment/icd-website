// Best-effort per-IP limiter: 5 requests per 10 minutes.
//
// State lives in this server instance's memory. On Vercel each serverless
// instance keeps its own counts, so this slows down casual abuse but is not a
// hard guarantee. If spam shows up, move to a shared store (Upstash Redis or
// Vercel KV) behind this same function.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

const hits = new Map<string, number[]>();

export function isRateLimited(key: string, now = Date.now()): boolean {
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) {
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
