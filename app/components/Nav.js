'use client'

export default function Nav() {
  const items = [
    { label: '全部商品', href: '/products' },
    { label: '現貨商品', href: '/in-stock' },
    { label: '搶先預購', href: '/preorder' },
    { label: '限時特惠', href: '/sale' },
    { label: '關於我們', href: '/about' },  
    { label: '通路據點', href: '/locations' },
    { label: '商務合作', href: '/contact' },
  ]

  return (
    <nav className="uo-nav">
      <a className="uo-logo" href="/">
        <img src="/logo.png" alt="究極玩 Ultimate Toys" className="uo-logo-img" />
      </a>

      <div className="uo-nav-links">
        {items.map((item, i) => (
          <a key={i} href={item.href}>{item.label}</a>
        ))}
      </div>

      <div className="uo-nav-icons">
        <a href="https://line.me/R/ti/p/@your-line-id" target="_blank" rel="noopener noreferrer" className="uo-icon-btn" title="LINE 詢問" style={{ textDecoration: 'none', fontWeight: 600 }}>LINE</a>
        <a href="https://instagram.com/your-ig-id" target="_blank" rel="noopener noreferrer" className="uo-icon-btn" title="IG 私訊" style={{ textDecoration: 'none', fontWeight: 600 }}>IG</a>
      </div>
    </nav>
  )
}