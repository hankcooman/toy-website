import { client, urlFor } from '../sanity'
import TopBar from './components/TopBar'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Footer from './components/Footer'
export const revalidate = 60
async function getProducts() {
  const query = `*[_type == "product" && isPublished == true] | order(_createdAt desc) [0...4] {
    _id,
    name,
    productCode,
    basePrice,
    baseOriginalPrice,
    "ipSeriesName": ipSeries->name,
    "categoryName": category->name,
    baseStockStatus,
    tags,
    shortDescription,
    mainImage,
    slug
  }`
  const products = await client.fetch(query)
  return products
}

export default async function Home() {
  const products = await getProducts()

  return (
    <>
      <TopBar />
      <Nav />
      <main>
        <Hero />

        <section id="products" className="uo-list-head">
          <div className="uo-crumb">SECTION 02 · CURRENT COLLECTION</div>
          <h1 className="uo-list-title">
            最新上架
            <span style={{
              color: 'var(--uo-red-bright)',
              fontFamily: 'var(--font-en)',
              fontSize: '0.4em',
              verticalAlign: 'middle',
              letterSpacing: '0.1em',
              marginLeft: 12,
            }}>
              IN STOCK NOW
            </span>
          </h1>
          <div className="uo-list-meta">
            <span>共 {products.length} 件商品 · 玩出究極</span>
            <span style={{ fontFamily: 'var(--font-en)', fontSize: 11, letterSpacing: '0.2em' }}>
              UPDATED · 2026
            </span>
          </div>
        </section>

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
                  <a
                    key={p._id}
                    href={`/products/${p.slug?.current || p._id}`}
                    style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                  >
                    <article className="uo-prod">
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
                            <div
                              className="img-a"
                              style={{
                                backgroundImage: `url(${imageUrl})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundColor: '#fff',
                              }}
                            />
                            <div
                              className="img-b"
                              style={{
                                backgroundImage: `url(${imageUrl})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundColor: '#fff',
                                filter: 'brightness(0.95)',
                              }}
                            />
                          </>
                        ) : (
                          <>
                            <div className="img-a">
                              <span className="ph">{p.productCode || p.name.slice(0, 8)}</span>
                            </div>
                            <div className="img-b">
                              <span className="ph">{p.productCode || p.name.slice(0, 8)} · ALT</span>
                            </div>
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
                  </a>
                )
              })}
            </div>
          )}

          {/* 「查看全部商品」按鈕 */}
          {products.length > 0 && (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '0 24px 80px' }}>
              <a href="/products" className="uo-btn ghost" style={{ textDecoration: 'none', fontSize: 14, padding: '14px 36px' }}>
                查看全部商品 →
              </a>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  )
}