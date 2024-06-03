/* Client-side URL utilities */

/*
 * Get the Science Platform login URL based on the hostname in the window,
 * requesting a redirect back to the current page.
 */
export function getLoginUrl(currentUrl: string): string {
  const url = new URL('/login', currentUrl)
  const homeUrl = new URL('/obsenv-ui', currentUrl)
  url.searchParams.append('rd', homeUrl.toString())
  return url.href
}

/*
 * Get the Science Platform logout URL based on the hostname in the window,
 * requesting a redirect back to the homepage.
 */
export function getLogoutUrl(currentUrl: string): string {
  const logoutUrl = new URL('/logout', currentUrl)
  const homeUrl = new URL('/obsenv-ui', currentUrl)
  logoutUrl.searchParams.append('rd', homeUrl.toString())
  return logoutUrl.href
}

/*
 * Get the development-mode login API endpoint.
 */
export function getDevLoginEndpoint(currentUrl: string): string {
  const url = new URL('/api/dev/login', currentUrl)
  return url.href
}

/*
 * Get the development-mode logout API endpoint.
 */
export function getDevLogoutEndpoint(currentUrl: string): string {
  const url = new URL('/api/dev/logout', currentUrl)
  return url.href
}
