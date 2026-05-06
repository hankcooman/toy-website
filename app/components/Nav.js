'use client'

import { useState, useEffect } from 'react'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  const items = [
    { label: '全部商品', href: '/products' },
    { label: '現貨商品', href: '/in-stock' },
    { label: '搶先預購', href: '/preorder' },
    { label: '限時特惠', href: '/sale' },
    { label: '關於我們', href: '/about' },
    { label: '通路據點', href: '/locations' },
    { label: '商務合作', href: '/contact' },
  ]

  // 選單打開時鎖住背景捲動，避免可以捲動底下的內容
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // 點選單裡的連結後自動關閉選單
  const handleLinkClick = () => setMenuOpen(false)

  return (
    <nav className="uo-nav">
      <a className="uo-logo" href="/">
        <img src="/logo.png" alt="究極玩 Ultimate Toys" className="uo-logo-img" />
      </a>

      {/* 桌機 / 平板版的中央菜單（手機版會被 CSS 藏起） */}
      <div className="uo-nav-links">
        {items.map((item, i) => (
          <a key={i} href={item.href}>{item.label}</a>
        ))}
      </div>

      <div className="uo-nav-icons">
        {/* 「選單」按鈕（只在手機版顯示） — 順序：選單 → LINE → IG */}
        <button
          type="button"
          className={`uo-menu-btn ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? '關閉選單' : '開啟選單'}
          aria-expanded={menuOpen}
        >
          選單
        </button>

        <a
          href="https://lin.ee/6YVErL5"
          target="_blank"
          rel="noopener noreferrer"
          className="uo-icon-btn"
          title="LINE 詢問"
          style={{ textDecoration: 'none', fontWeight: 600 }}
        >
          LINE
        </a>
        <a
          href="https://www.instagram.com/ultimatetoys__/"
          target="_blank"
          rel="noopener noreferrer"
          className="uo-icon-btn"
          title="IG 私訊"
          style={{ textDecoration: 'none', fontWeight: 600 }}
        >
          IG
        </a>
      </div>

      {/* 滑出選單與遮罩：只在選單開啟時才放進 DOM，避免關閉時誤蓋畫面 */}
      {menuOpen && (
        <>
          <div
            className="uo-mobile-menu-overlay is-open"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <aside className="uo-mobile-menu is-open">
            <div className="uo-mobile-menu-header">
              <span className="uo-mobile-menu-title">MENU</span>
              <button
                type="button"
                className="uo-mobile-menu-close"
                onClick={() => setMenuOpen(false)}
                aria-label="關閉選單"
              >
                ✕
              </button>
            </div>

            <nav className="uo-mobile-menu-links">
              {items.map((item, i) => (
                <a key={i} href={item.href} onClick={handleLinkClick}>
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="uo-mobile-menu-footer">
              <a
                href="https://line.me/R/ti/p/@your-line-id"
                target="_blank"
                rel="noopener noreferrer"
                className="uo-mobile-menu-social"
              >
                LINE 詢問
              </a>
              <a
                href="https://instagram.com/your-ig-id"
                target="_blank"
                rel="noopener noreferrer"
                className="uo-mobile-menu-social"
              >
                IG 私訊
              </a>
            </div>
          </aside>
        </>
      )}
    </nav>
  )
}