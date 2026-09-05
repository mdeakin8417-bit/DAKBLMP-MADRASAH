// ============================================================
// PWA registration — makes the app installable (Play Store path
// via PWABuilder, or "Add to Home screen" directly from Chrome)
// ============================================================

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch((err) => {
      console.warn('Service worker registration failed:', err);
    });
  });
}
