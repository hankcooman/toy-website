import { client, urlFor } from '../../../sanity'
import TopBar from '../../components/TopBar'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import ProductDetail from './ProductDetail'
import { notFound } from 'next/navigation'

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
    galleryImages,
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

  // 整理所有圖片（主圖 + galleryImages）
  const allImages = [product.mainImage, ...(product.galleryImages || [])].filter(Boolean)

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

        {/* 詳細頁主體（互動部分） */}
        <ProductDetail product={product} allImages={allImages} />
      </main>
      <Footer />
    </>
  )
}