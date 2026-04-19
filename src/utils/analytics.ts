interface GoatCounter {
  count: (args: { path: string; title?: string }) => void;
}

declare global {
  interface Window { goatcounter?: GoatCounter; }
}

export function trackEvent(path: string, title?: string) {
  if (typeof window === 'undefined') return;
  const gc = window.goatcounter;
  if (!gc?.count) return; // silently no-op in dev or with ad blockers
  gc.count({ path, title });
}
