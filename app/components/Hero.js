'use client'

import { useState, useEffect } from 'react'
import { urlFor } from '../../sanity'

/**
 * Hero 區
 * @param {Array} slides - 從 Sanity 撈來的輪播圖（可能為空陣列）
 *   - 空陣列時 fallback 顯示原本的黑底紅邊預設方塊
 *   - 有資料時做輪播：3 秒自動換、左右滑動、底下有 dots 可手動切換
 */
export default function Hero({ slides = [] }) {
  const hasSlides = slides && slides.length > 0
  const [activeIndex, setActiveIndex] = useState(0)

  // 自動播放：每 3 秒下一張（只在有 2 張以上時才需要）
  useEffect(() => {
    if (slides.length < 2) return
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="uo-hero">
      <div className="uo-hero-grid">
        <div className="uo-hero-left">
          <div>
            <div className="uo-hero-eyebrow">
              <span>VOL.01 · 2026 SPRING DROP</span>
            </div>
            <h1>
              收藏<span className="accent">究極</span><br />
              玩出 <span className="stroke">不羈</span>
            </h1>
            <p className="lead">
              來自全球的玩具、盲盒與絨毛玩偶的集成商店。每月精選 IP 上架，商品皆是正版授權商品，請放心選購。
            </p>
            <div className="uo-hero-cta">
              <a href="https://lin.ee/6YVErL5" target="_blank" rel="noopener noreferrer" className="uo-btn red" style={{ textDecoration: 'none' }}>
                LINE 詢問
              </a>
              <a href="/products" className="uo-btn ghost" style={{ textDecoration: 'none' }}>
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

        {/* 有輪播圖時 .uo-hero-right 多一個 has-slides class，CSS 用它控制虛線/戳印 */}
        <div className={`uo-hero-right ${hasSlides ? 'has-slides' : ''}`}>
          <span className="uo-hero-tag">★ FEATURED · 2026</span>

          {hasSlides ? (
            // 有輪播圖：跑輪播
            <div className="uo-hero-figure has-slides">
              <div className="uo-hero-slider">
                {slides.map((slide, i) => {
                  const imgUrl = slide.image
                    ? urlFor(slide.image).width(1200).height(900).fit('crop').url()
                    : null
                  return (
                    <div
                      key={slide._id}
                      className={`uo-hero-slide ${i === activeIndex ? 'is-active' : ''} ${i < activeIndex ? 'is-past' : ''}`}
                      style={imgUrl ? {
                        backgroundImage: `url(${imgUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      } : {}}
                      aria-hidden={i !== activeIndex}
                    />
                  )
                })}
              </div>

              {/* 底下的 dots（只在有 2 張以上時顯示） */}
              {slides.length > 1 && (
                <div className="uo-hero-dots" role="tablist" aria-label="輪播圖切換">
                  {slides.map((slide, i) => (
                    <button
                      key={slide._id}
                      type="button"
                      className={`uo-hero-dot ${i === activeIndex ? 'is-active' : ''}`}
                      onClick={() => setActiveIndex(i)}
                      aria-label={`切換到第 ${i + 1} 張圖`}
                      aria-selected={i === activeIndex}
                      role="tab"
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            // 沒有輪播圖：保留原本的預設方塊（fallback）
            <div className="uo-hero-figure">
              <span className="placeholder-label">[ HERO 商品圖待替換 ]</span>
            </div>
          )}

          <div className="uo-hero-circle" />
          <div className="uo-hero-stamp">
            ULTIMATE<br />TOYS<br />· EST 2026 ·
          </div>
        </div>
      </div>
    </section>
  )
}