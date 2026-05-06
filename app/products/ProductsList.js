'use client'

import { useState, useMemo, useEffect } from 'react'
import { urlFor } from '../../sanity'

const PAGE_SIZE = 12

export default function ProductsList({ products, ipSeriesList, categoryList }) {
  const [selectedIp, setSelectedIp] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('newest')
  const [currentPage, setCurrentPage] = useState(1)

  // 篩選器分組的「展開/收合」狀態 — 桌機預設展開、手機預設收合
  // 用 null 當初始值，等掛載後依視窗寬度設定，避免 SSR/CSR 不一致
  const [ipOpen, setIpOpen] = useState(null)
  const [catOpen, setCatOpen] = useState(null)

  useEffect(() => {
    // 元件掛載後依視窗寬度決定預設狀態
    const isDesktop = window.innerWidth > 768
    setIpOpen(isDesktop)
    setCatOpen(isDesktop)
  }, [])

  // 篩選 + 排序的計算結果
  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedIp !== 'all') {
      result = result.filter(p => p.ipSeriesSlug === selectedIp)
    }
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.categorySlug === selectedCategory)
    }

    if (sortBy === 'priceLow') {
      result.sort((a, b) => a.basePrice - b.basePrice)
    } else if (sortBy === 'priceHigh') {
      result.sort((a, b) => b.basePrice - a.basePrice)
    }

    return result
  }, [products, selectedIp, selectedCategory, sortBy])

  // 分頁
  const totalPages = Math.ceil(filteredProducts.length / PAGE_SIZE)
  const pagedProducts = filteredProducts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  )

  // 切換篩選時自動回到第 1 頁
  const handleFilterChange = (type, value) => {
    if (type === 'ip') setSelectedIp(value)
    if (type === 'category') setSelectedCategory(value)
    setCurrentPage(1)
  }

  // 計算每個 IP / 商品類型有幾筆商品（顯示在篩選器旁）
  const getIpCount = (slug) => {
    if (slug === 'all') return products.length
    return products.filter(p => p.ipSeriesSlug === slug).length
  }
  const getCategoryCount = (slug) => {
    if (slug === 'all') return products.length
    return products.filter(p => p.categorySlug === slug).length
  }

  // 顯示在標題旁的「目前選中的篩選值」（收合時讓人知道目前選了什麼）
  const ipBadge = selectedIp === 'all'
    ? '全部'
    : (ipSeriesList.find(i => i.slug === selectedIp)?.name || '全部')
  const catBadge = selectedCategory === 'all'
    ? '全部'
    : (categoryList.find(c => c.slug === selectedCategory)?.name || '全部')

  return (
    <div className="uo-list-body">
      {/* 左側篩選器 */}
      <aside className="uo-filter">
        {/* IP 系列篩選分組（手風琴） */}
        <div className={`uo-filter-group accordion ${ipOpen ? 'is-open' : ''}`}>
          <button
            type="button"
            className="uo-filter-head"
            onClick={() => setIpOpen(!ipOpen)}
            aria-expanded={!!ipOpen}
          >
            <span className="uo-filter-head-title">IP 系列</span>
            <span className="uo-filter-head-meta">
              <span className="uo-filter-head-badge">{ipBadge}</span>
              <span className="uo-filter-head-arrow" aria-hidden="true">▼</span>
            </span>
          </button>

          <div className="uo-filter-body">
            <label className="uo-filter-opt">
              <input
                type="radio"
                name="ip"
                checked={selectedIp === 'all'}
                onChange={() => handleFilterChange('ip', 'all')}
              />
              <span className="lab">全部</span>
              <span className="count">{getIpCount('all')}</span>
            </label>
            {ipSeriesList.map((ip) => (
              <label key={ip._id} className="uo-filter-opt">
                <input
                  type="radio"
                  name="ip"
                  checked={selectedIp === ip.slug}
                  onChange={() => handleFilterChange('ip', ip.slug)}
                />
                <span className="lab">{ip.name}</span>
                <span className="count">{getIpCount(ip.slug)}</span>
              </label>
            ))}
          </div>
        </div>

        {/* 商品類型篩選分組（手風琴） */}
        <div className={`uo-filter-group accordion ${catOpen ? 'is-open' : ''}`}>
          <button
            type="button"
            className="uo-filter-head"
            onClick={() => setCatOpen(!catOpen)}
            aria-expanded={!!catOpen}
          >
            <span className="uo-filter-head-title">商品類型</span>
            <span className="uo-filter-head-meta">
              <span className="uo-filter-head-badge">{catBadge}</span>
              <span className="uo-filter-head-arrow" aria-hidden="true">▼</span>
            </span>
          </button>

          <div className="uo-filter-body">
            <label className="uo-filter-opt">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === 'all'}
                onChange={() => handleFilterChange('category', 'all')}
              />
              <span className="lab">全部</span>
              <span className="count">{getCategoryCount('all')}</span>
            </label>
            {categoryList.map((cat) => (
              <label key={cat._id} className="uo-filter-opt">
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === cat.slug}
                  onChange={() => handleFilterChange('category', cat.slug)}
                />
                <span className="lab">{cat.emoji} {cat.name}</span>
                <span className="count">{getCategoryCount(cat.slug)}</span>
              </label>
            ))}
          </div>
        </div>
      </aside>

      {/* 右側商品區 */}
      <section>
        <div className="uo-toolbar">
          <span style={{ color: 'var(--uo-mute)', fontFamily: 'var(--font-en)', fontSize: 11, letterSpacing: '0.2em' }}>
            {filteredProducts.length} RESULTS
          </span>
          <div style={{ display: 'flex', gap: 10 }}>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="newest">SORT · 最新上架</option>
              <option value="priceLow">價格 · 低 → 高</option>
              <option value="priceHigh">價格 · 高 → 低</option>
            </select>
          </div>
        </div>

        {pagedProducts.length === 0 ? (
          <div style={{ padding: 80, textAlign: 'center', color: 'var(--uo-mute)' }}>
            這個篩選沒有商品。
          </div>
        ) : (
          <div className="uo-prod-grid">
            {pagedProducts.map((p) => {
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
                      {p.tags && p.tags.includes('new') && <span className="uo-tag dark">NEW</span>}
                      {p.tags && p.tags.includes('hot') && <span className="uo-tag red">HOT</span>}
                      {p.tags && p.tags.includes('limited') && <span className="uo-tag dark">LIMITED</span>}
                      {p.tags && p.tags.includes('sale') && <span className="uo-tag red">SALE</span>}
                      {p.tags && p.tags.includes('recommended') && <span className="uo-tag dark">RECOMMENDED</span>}
                      {p.baseStockStatus === 'preorder' && <span className="uo-tag dark">PRE-ORDER</span>}
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
                        <span className={`uo-prod-stock stock-${p.baseStockStatus}`}>
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

        {totalPages > 1 && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 32, padding: '24px 0' }}>
            <button
              className="uo-chip"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              ← 上一頁
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                className={`uo-chip ${n === currentPage ? 'on' : ''}`}
                onClick={() => setCurrentPage(n)}
                style={{ minWidth: 40, justifyContent: 'center' }}
              >
                {n}
              </button>
            ))}
            <button
              className="uo-chip"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              下一頁 →
            </button>
          </div>
        )}
      </section>
    </div>
  )
}