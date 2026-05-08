export default function Footer() {
  return (
    <footer className="uo-foot">
      <div className="uo-foot-grid">
        <div>
          <a className="uo-logo" href="/" style={{ marginBottom: 14, display: 'inline-flex' }}>
            <span style={{
              width: 36,
              height: 36,
              background: 'var(--uo-paper)',
              color: 'var(--uo-ink)',
              borderRadius: '50%',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-en)',
              fontWeight: 700,
              fontSize: 14,
            }}>
              UT
            </span>
            <span>
              究極玩
              <small>ULTIMATE TOYS</small>
            </span>
          </a>
          <p style={{
            fontSize: 13,
            color: 'var(--uo-mute)',
            marginTop: 14,
            lineHeight: 1.7,
            maxWidth: 340
          }}>
            潮玩、盲盒、絨毛玩偶現貨直送。集結全球話題 IP 與設計師品牌，為你獻上最究極的收藏體驗。
          </p>
        </div>

        <div>
          <h5>SHOP</h5>
          <ul>
            <li><a href="/products">全部商品</a></li>
            <li><a href="/in-stock">現貨商品</a></li>
            <li><a href="/preorder">預購商品</a></li>
            <li><a href="/sale">特價區</a></li>
          </ul>
        </div>

        <div>
          <h5>FOLLOW</h5>
          <ul>
            <li>
              <a href="https://lin.ee/6YVErL5" target="_blank" rel="noopener noreferrer">
                LINE 官方帳號
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ultimatetoys__/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li><a href="/about">商務合作</a></li>
          </ul>
        </div>
      </div>

      <div className="uo-foot-bot">
        <span>© 2026 ULTIMATE TOYS · ALL RIGHTS RESERVED</span>
        <span>POWERED BY 究極玩</span>
      </div>
    </footer>
  )
}