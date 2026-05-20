import { client } from '../sanity'

const SITE_URL = 'https://uttoys.com'

export const revalidate = 3600 // 每小時重新生成 sitemap

export default async function sitemap() {
  // 靜態頁
  const staticRoutes = [
    '',           // 首頁
    '/products',
    '/in-stock',
    '/preorder',
    '/sale',
    '/about',
    '/locations',
    '/terms',
    '/privacy',
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'daily' : 'weekly',
    priority: path === '' ? 1.0 : 0.7,
  }))

  // 動態:撈 Sanity 已上架的商品
  let productRoutes = []
  try {
    const products = await client.fetch(
      `*[_type == "product" && isPublished == true && defined(slug.current)]{
        "slug": slug.current,
        _updatedAt
      }`
    )
    productRoutes = products.map((p) => ({
      url: `${SITE_URL}/products/${p.slug}`,
      lastModified: new Date(p._updatedAt),
      changeFrequency: 'weekly',
      priority: 0.8,
    }))
  } catch (err) {
    console.error('sitemap: failed to fetch products', err)
  }

  return [...staticRoutes, ...productRoutes]
}