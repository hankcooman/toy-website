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
    // { label: '商務合作', href: '/contact' },
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
          className="uo-icon-btn uo-icon-social"
          title="LINE 詢問"
          aria-label="LINE 詢問"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M19.365 9.863c.349 0 .63.285.631.631 0 .345-.282.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.282.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
          </svg>
        </a>
        <a
          href="https://www.instagram.com/ultimatetoys__/"
          target="_blank"
          rel="noopener noreferrer"
          className="uo-icon-btn uo-icon-social"
          title="Instagram"
          aria-label="Instagram"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
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
                href="https://lin.ee/6YVErL5"
                target="_blank"
                rel="noopener noreferrer"
                className="uo-mobile-menu-social"
              >
                LINE 詢問
              </a>
              <a
                href="https://www.instagram.com/ultimatetoys__/"
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