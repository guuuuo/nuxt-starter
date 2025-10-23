/**
 * This composable will handle bfcache (back-forward cache) behavior, which is used certain browsers (e.g. Safari)
 * You can use it to detect when a page is restored from the bfcache and perform actions accordingly.
 */

import { onUnmounted } from 'vue';

export function useBFCache(onRestore: () => void) {
  function handleBFCache(event: PageTransitionEvent) {
    if (event.persisted) {
      // trigger callback when the page is persisted from bfcache
      onRestore();
    }
  }

  if (import.meta.client) {
    window.addEventListener('pageshow', handleBFCache);
  }

  onUnmounted(() => {
    if (import.meta.client) {
      window.removeEventListener('pageshow', handleBFCache);
    }
  });
}
