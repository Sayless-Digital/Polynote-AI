/**
 * Utility functions for URL parameter handling
 */

/**
 * Add a parameter to the current URL
 */
export function addUrlParam(key: string, value: string, currentUrl?: string): string {
  const url = currentUrl || (typeof window !== 'undefined' ? window.location.href : '');
  const urlObj = new URL(url);
  urlObj.searchParams.set(key, value);
  return urlObj.toString();
}

/**
 * Remove a parameter from the current URL
 */
export function removeUrlParam(key: string, currentUrl?: string): string {
  const url = currentUrl || (typeof window !== 'undefined' ? window.location.href : '');
  const urlObj = new URL(url);
  urlObj.searchParams.delete(key);
  return urlObj.toString();
}

/**
 * Get a parameter from the current URL
 */
export function getUrlParam(key: string, currentUrl?: string): string | null {
  const url = currentUrl || (typeof window !== 'undefined' ? window.location.href : '');
  const urlObj = new URL(url);
  return urlObj.searchParams.get(key);
}

/**
 * Check if a parameter exists in the current URL
 */
export function hasUrlParam(key: string, currentUrl?: string): boolean {
  return getUrlParam(key, currentUrl) !== null;
}

/**
 * Create a settings page URL with refresh parameter
 */
export function createSettingsUrl(refresh: boolean = true): string {
  return refresh ? '/settings?refresh=true' : '/settings';
}
