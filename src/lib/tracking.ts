declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export const trackEvent = (event: string, data?: Record<string, unknown>) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...data });
};
