/* Présent pour que le navigateur accepte d'installer le site comme une appli. Ne met rien en cache. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
