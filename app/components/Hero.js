export default function Hero() {
  return (
    <section className="uo-hero">
      <div className="uo-hero-grid">
        <div className="uo-hero-left">
          <div>
            <div className="uo-hero-eyebrow">
              <span>VOL.01 · 2026 SPRING DROP</span>
            </div>
            <h1>
              收藏<span className="accent">究極</span><br/>
              玩出 <span className="stroke">不羈</span>
            </h1>
            <p className="lead">
              來自全球的玩具、盲盒與絨毛玩偶選品店。每月精選 IP 上架，從三麗鷗到吉伊卡哇，從迪士尼到鈴狶，究極玩陪你蒐藏每一份心動。
            </p>
            <div className="uo-hero-cta">
              <a href="https://line.me/R/ti/p/@your-line-id" target="_blank" rel="noopener noreferrer" className="uo-btn red" style={{ textDecoration: 'none' }}>
                LINE 詢問
              </a>
              <a href="#products" className="uo-btn ghost" style={{ textDecoration: 'none' }}>
                瀏覽商品
              </a>
            </div>
          </div>
          <div className="uo-hero-meta">
            <div>
              <span className="num">100+</span>
              <span className="lab">SKUs IN STOCK</span>
            </div>
            <div>
              <span className="num">12</span>
              <span className="lab">IP SERIES</span>
            </div>
            <div>
              <span className="num">24h</span>
              <span className="lab">FAST REPLY</span>
            </div>
          </div>
        </div>
        <div className="uo-hero-right">
          <span className="uo-hero-tag">★ FEATURED · 2026</span>
          <div className="uo-hero-figure">
            <span className="placeholder-label">[ HERO 商品圖待替換 ]</span>
          </div>
          <div className="uo-hero-circle"/>
          <div className="uo-hero-stamp">
            ULTIMATE<br/>TOYS<br/>· EST 2026 ·
          </div>
        </div>
      </div>
    </section>
  )
}