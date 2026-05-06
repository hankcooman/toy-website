import { client } from '../../sanity'
import TopBar from '../components/TopBar'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ProductsList from '../products/ProductsList'
export const revalidate = 60
async function getData() {
  // 同時抓三種資料：現貨商品、IP 系列、商品類型
  const [products, ipSeriesList, categoryList] = await Promise.all([
    client.fetch(`*[_type == "product" && isPublished == true && baseStockStatus == "inStock"] | order(_createdAt desc) {
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
      mainImage,
      slug,
      _createdAt
    }`),
    client.fetch(`*[_type == "ipSeries"] | order(sortOrder asc) {
      _id,
      name,
      "slug": slug.current,
      sortOrder
    }`),
    client.fetch(`*[_type == "category"] | order(sortOrder asc) {
      _id,
      name,
      emoji,
      "slug": slug.current,
      sortOrder
    }`),
  ])

  return { products, ipSeriesList, categoryList }
}

export default async function InStockPage() {
  const { products, ipSeriesList, categoryList } = await getData()

  return (
    <>
      <TopBar />
      <Nav />
      <main>
        <section className="uo-list-head">
          <div className="uo-crumb">
            <a href="/" style={{ color: 'inherit' }}>首頁</a>
            {' / '}
            <span>現貨商品</span>
          </div>
          <h1 className="uo-list-title">
            現貨商品
            <span style={{
              color: 'var(--uo-red-bright)',
              fontFamily: 'var(--font-en)',
              fontSize: '0.4em',
              verticalAlign: 'middle',
              letterSpacing: '0.1em',
              marginLeft: 12,
            }}>
              IN STOCK
            </span>
          </h1>
          <div className="uo-list-meta">
            <span>共 {products.length} 件現貨商品 · 即下單即出貨</span>
            <span style={{ fontFamily: 'var(--font-en)', fontSize: 11, letterSpacing: '0.2em' }}>
              READY TO SHIP
            </span>
          </div>
        </section>

        <ProductsList
          products={products}
          ipSeriesList={ipSeriesList}
          categoryList={categoryList}
        />
      </main>
      <Footer />
    </>
  )
}