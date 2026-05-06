import { client, urlFor } from '../../../sanity'
import TopBar from '../../components/TopBar'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import ProductDetail from './ProductDetail'
import { notFound } from 'next/navigation'
export const revalidate = 60
async function getProduct(slug) {
  const query = `*[_type == "product" && slug.current == $slug && isPublished == true][0]{
    _id,
    name,
    productCode,
    basePrice,
    baseOriginalPrice,
    "ipSeriesName": ipSeries->name,
    "ipSeriesSlug": ipSeries->slug.current,
    "categoryName": category->name,
    "categorySlug": category->slug.current,
    "categoryEmoji": category->emoji,
    baseStockStatus,
    tags,
    shortDescription,
    description,
    mainImage,
    gallery,
    variants,
    slug
  }`
  return await client.fetch(query, { slug })
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params
  const product = await getProduct(slug)

  if (!product) {
    notFound()
  }

  return (
    <>
      <TopBar />
      <Nav />
      <main>
        {/* 麵包屑 */}
        <section className="uo-list-head" style={{ paddingBottom: 8, borderBottom: 'none' }}>
          <div className="uo-crumb">
            <a href="/" style={{ color: 'inherit' }}>首頁</a>
            {' / '}
            <a href="/products" style={{ color: 'inherit' }}>商品列表</a>
            {' / '}
            <span>{product.name}</span>
          </div>
        </section>

        {/* 詳細頁主體 */}
        <ProductDetail product={product} />
      </main>
      <Footer />
    </>
  )
}