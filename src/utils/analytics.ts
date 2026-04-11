export function trackEvent(path: string, title?: string) {
  if (typeof window === 'undefined') return;
  const gc = (window as any).goatcounter;
  if (!gc?.count) return; // silently no-op in dev or with ad blockers
  gc.count({ path, title });
}
