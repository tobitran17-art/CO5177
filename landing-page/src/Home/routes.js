export const SITE_BASE = '/CO5177';

export function siteBase() {
  if (typeof window === 'undefined') {
    return '';
  }
  const path = window.location.pathname;
  if (path === SITE_BASE || path.indexOf(`${SITE_BASE}/`) === 0) {
    return SITE_BASE;
  }
  return '';
}

export function appHref(path) {
  const normalized = path.charAt(0) === '/' ? path : `/${path}`;
  const base = siteBase();
  if (normalized === '/') {
    return base ? `${base}/` : '/';
  }
  return `${base}${normalized}`;
}

export function routeFromPath(pathname) {
  const trimmed = pathname.replace(/\/+$/, '') || '/';
  const base = siteBase();
  let route = base && (trimmed === base || trimmed.indexOf(`${base}/`) === 0)
    ? trimmed.slice(base.length)
    : trimmed;
  if (!route) {
    route = '/';
  }
  return route;
}

export function currentRoute() {
  return routeFromPath(window.location.pathname);
}

export function isAppLink(href) {
  if (!href || href.charAt(0) === '#') {
    return false;
  }
  let url;
  try {
    url = new URL(href, window.location.href);
  } catch (error) {
    return false;
  }
  if (url.origin !== window.location.origin || url.hash) {
    return false;
  }
  const route = routeFromPath(url.pathname);
  return route === '/' || route === '/tabular' || route === '/text' || route === '/image';
}
