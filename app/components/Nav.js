'use client'

export default function Nav() {
  const items = [
    { label: '全部商品', href: '/' },
    { label: '三麗鷗', href: '/' },
    { label: '吉伊卡哇', href: '/' },
    { label: '迪士尼', href: '/' },
    { label: '預購商品', href: '/' },
    { label: '聯絡我們', href: '/' },
  ]

  return (
    <nav className="uo-nav">
      <a className="uo-logo" href="/">
        <span style={{ width: 36, height: 36, background: 'var(--uo-paper)', color: 'var(--uo-ink)', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-en)', fontWeight: 700, fontSize: 14 }}>UT</span>
        <span>究極玩<small>ULTIMATE TOYS</small></span>
      </a>

      <div className="uo-nav-links">
        {items.map((item, i) => (
          <a key={i} href={item.href}>{item.label}</a>
        ))}
      </div>

      <div className="uo-nav-icons">
        <a href="https://line.me/R/ti/p/@your-line-id" target="_blank" rel="noopener noreferrer" className="uo-icon-btn" title="LINE 詢問" style={{ textDecoration: 'none', fontSize: 11, fontWeight: 600 }}>LINE</a>
        <a href="https://instagram.com/your-ig-id" target="_blank" rel="noopener noreferrer" className="uo-icon-btn" title="IG 私訊" style={{ textDecoration: 'none', fontSize: 11, fontWeight: 600 }}>IG</a>
      </div>
    </nav>
  )
}