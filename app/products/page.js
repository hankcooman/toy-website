import { client, urlFor } from '../../sanity'
import TopBar from '../components/TopBar'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

async function getAllProducts() {
  const query = `*[_type == "product" && isPublished == true] | order(_createdAt desc) {
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
    mainImage,
    slug
  }`
  return await client.fetch(query)
}

export default async function ProductsPage() {
  const products = await getAllProducts()

  return (
    <>
      <TopBar />
      <Nav />
      <main>
        {/* 麵包屑 + 標題 */}
        <section className="uo-list-head">
          <div className="uo-crumb">
            <a href="/" style={{ color: 'inherit' }}>首頁</a>
            {' / '}
            <span>商品列表</span>
          </div>
          <h1 className="uo-list-title">
            全部商品
            <span style={{
              color: 'var(--uo-red-bright)',
              fontFamily: 'var(--font-en)',
              fontSize: '0.4em',
              verticalAlign: 'middle',
              letterSpacing: '0.1em',
              marginLeft: 12,
            }}>
              ALL PRODUCTS
            </span>
          </h1>
          <div className="uo-list-meta">
            <span>共 {products.length} 件商品 · 收藏每一份歡喜</span>
            <span style={{ fontFamily: 'var(--font-en)', fontSize: 11, letterSpacing: '0.2em' }}>
              SHOWING ALL
            </span>
          </div>
        </section>

        {/* 商品網格 */}
        <section style={{ padding: '0 24px 64px' }}>
          {products.length === 0 ? (
            <div style={{ padding: 80, textAlign: 'center', color: 'var(--uo-mute)' }}>
              還沒有任何商品。
            </div>
          ) : (
            <div className="uo-prod-grid">
              {products.map((p) => {
                const imageUrl = p.mainImage
                  ? urlFor(p.mainImage).width(800).height(800).fit('crop').url()
                  : null

                return (
                  <article key={p._id} className="uo-prod">
                    <div className="uo-prod-tags">
                      {p.tags && p.tags.includes('new') && (
                        <span className="uo-tag dark">NEW</span>
                      )}
                      {p.tags && p.tags.includes('hot') && (
                        <span className="uo-tag red">HOT</span>
                      )}
                      {p.tags && p.tags.includes('limited') && (
                        <span className="uo-tag dark">LIMITED</span>
                      )}
                      {p.baseStockStatus === 'preorder' && (
                        <span className="uo-tag dark">PRE-ORDER</span>
                      )}
                    </div>

                    <div className="uo-prod-img">
                      {imageUrl ? (
                        <>
                          <div className="img-a" style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#fff' }} />
                          <div className="img-b" style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#fff', filter: 'brightness(0.95)' }} />
                        </>
                      ) : (
                        <>
                          <div className="img-a"><span className="ph">{p.productCode || p.name.slice(0, 8)}</span></div>
                          <div className="img-b"><span className="ph">{p.productCode || p.name.slice(0, 8)} · ALT</span></div>
                        </>
                      )}
                    </div>

                    <div className="uo-prod-info">
                      <span className="uo-prod-brand">{p.ipSeriesName} · {p.categoryName}</span>
                      <h4 className="uo-prod-name">{p.name}</h4>
                      <div className="uo-prod-foot">
                        <div className="uo-prod-price">
                          {p.baseOriginalPrice && p.baseOriginalPrice > p.basePrice && (
                            <span className="old">NT${p.baseOriginalPrice}</span>
                          )}
                          NT${p.basePrice}
                        </div>
                        <span className={`uo-prod-stock ${p.baseStockStatus === 'inStock' ? 'in' : 'low'}`}>
                          {p.baseStockStatus === 'inStock' && '• 現貨'}
                          {p.baseStockStatus === 'preorder' && '• 預購'}
                          {p.baseStockStatus === 'incoming' && '• 到貨中'}
                          {p.baseStockStatus === 'outOfStock' && '• 缺貨'}
                          {p.baseStockStatus === 'soldOut' && '• 已售完'}
                        </span>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  )
}