/**
 * Per-page SEO helper.
 * Sets title, description, canonical, Open Graph, and Twitter Card tags
 * from a single call. Extend `options` as the site grows.
 */
export function usePageSeo(options: {
  title: string
  description: string
  /** Relative path, e.g. '/about'. Defaults to current route path. */
  path?: string
  /** Absolute URL to an OG image. Defaults to the logo. */
  image?: string
}) {
  const config = useRuntimeConfig()
  const route  = useRoute()

  const siteUrl = config.public.siteUrl as string
  const path    = options.path ?? route.path
  const url     = `${siteUrl}${path === '/' ? '' : path}`
  const image   = options.image ?? `${siteUrl}/assets/logo-horizontal.png`

  useHead({
    title: options.title,
    link: [
      { rel: 'canonical', href: url },
    ],
    meta: [
      { name: 'description',        content: options.description },
      // Open Graph
      { property: 'og:title',       content: options.title },
      { property: 'og:description', content: options.description },
      { property: 'og:url',         content: url },
      { property: 'og:image',       content: image },
      // Twitter Card
      { name: 'twitter:title',       content: options.title },
      { name: 'twitter:description', content: options.description },
      { name: 'twitter:image',       content: image },
    ],
  })
}
