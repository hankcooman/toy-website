'use client'

import { useState } from 'react'
import { urlFor } from '../../../sanity'

export default function ProductDetail({ product, allImages }) {
  const [thumbIndex, setThumbIndex] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(null)

  // 主圖 URL
  const mainImageUrl = allImages[thumbIndex]
    ? urlFor(allImages[thumbIndex]).width(1200).height(1200).fit('crop').url()
    : null

  // LINE 預填訊息
  const lineMessage = encodeURIComponent(
    `你好，我想詢問「${product.name}」(${product.productCode || '商品編號未填'})，請問還有現貨嗎？`
  )
  const lineUrl = `https://line.me/R/ti/p/@your-line-id?text=${lineMessage}`

  // IG 私訊（IG 不支援預填訊息，直接導到帳號）
  const igUrl = `https://instagram.com/your-ig-id`

  return (
    <div className="uo-detail" style={{ padding: '0 24px 64px' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '80px 1fr 380px',
        gap: 24,
        alignItems: 'start',
      }}>
        {/* 縮圖列 */}
        <div className="uo-thumb-col" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {allImages.length > 0 ? (
            allImages.map((img, i) => {
              const thumbUrl = urlFor(img).width(160).height(160).fit('crop').url()
              return (
                <div
                  key={i}
                  className={`uo-thumb ${i === thumbIndex ? 'on' : ''}`}
                  onClick={() => setThumbIndex(i)}
                  style={{
                    width: 80,
                    height: 80,
                    backgroundImage: `url(${thumbUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: '#fff',
                    cursor: 'pointer',
                    border: i === thumbIndex ? '2px solid var(--uo-red-bright)' : '1px solid var(--uo-line)',
                  }}
                />
              )
            })
          ) : (
            <div className="uo-thumb on" style={{ width: 80, height: 80, background: '#f4efe6' }}>
              <span style={{ fontSize: 10 }}>無圖</span>
            </div>
          )}
        </div>

        {/* 主圖 */}
        <div className="uo-main-img" style={{
          backgroundImage: mainImageUrl ? `url(${mainImageUrl})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#fff',
          minHeight: 500,
          position: 'relative',
        }}>
          {/* 商品標籤 */}
          {product.tags && product.tags.includes('new') && (
            <span className="uo-tag dark" style={{ position: 'absolute', top: 16, left: 16 }}>NEW</span>
          )}
          {product.tags && product.tags.includes('hot') && (
            <span className="uo-tag red" style={{ position: 'absolute', top: 16, left: 16 }}>HOT</span>
          )}
          {!mainImageUrl && (
            <span className="ph" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              {product.productCode || product.name}
            </span>
          )}
        </div>

        {/* 右側商品資訊 */}
        <div className="uo-detail-info">
          <div className="uo-detail-brand" style={{ fontSize: 12, color: 'var(--uo-mute)', letterSpacing: '0.1em', marginBottom: 8 }}>
            ★ {product.ipSeriesName} · {product.categoryEmoji} {product.categoryName}
          </div>

          <h1 className="uo-detail-title" style={{ fontSize: 32, fontWeight: 700, lineHeight: 1.2, marginBottom: 16 }}>
            {product.name}
          </h1>

          {product.shortDescription && (
            <p className="uo-detail-sub" style={{ fontSize: 14, color: 'var(--uo-mute)', lineHeight: 1.7, marginBottom: 24 }}>
              {product.shortDescription}
            </p>
          )}

          {/* 價格 */}
          <div className="uo-detail-price" style={{ marginBottom: 24, display: 'flex', alignItems: 'baseline', gap: 12 }}>
            <span className="now" style={{ fontSize: 32, fontWeight: 700 }}>NT${product.basePrice}</span>
            {product.baseOriginalPrice && product.baseOriginalPrice > product.basePrice && (
              <>
                <span className="old" style={{ fontSize: 16, textDecoration: 'line-through', color: 'var(--uo-mute)' }}>
                  NT${product.baseOriginalPrice}
                </span>
                <span className="save" style={{ fontSize: 12, color: 'var(--uo-red-bright)', fontWeight: 600 }}>
                  省 NT${product.baseOriginalPrice - product.basePrice}
                </span>
              </>
            )}
          </div>

          {/* 庫存狀態 */}
          <div style={{ marginBottom: 24, padding: '8px 16px', background: 'var(--uo-paper-2)', borderRadius: 4, fontSize: 13 }}>
            <span className={`uo-prod-stock ${product.baseStockStatus === 'inStock' ? 'in' : 'low'}`}>
              {product.baseStockStatus === 'inStock' && '✅ 現貨供應'}
              {product.baseStockStatus === 'preorder' && '📦 預購中'}
              {product.baseStockStatus === 'incoming' && '🚚 到貨中'}
              {product.baseStockStatus === 'outOfStock' && '❌ 暫時缺貨'}
              {product.baseStockStatus === 'soldOut' && '❌ 已售完'}
            </span>
          </div>

          {/* LINE / IG 詢問按鈕 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="uo-btn red"
              style={{ textDecoration: 'none', textAlign: 'center', padding: '16px 24px', fontSize: 15, fontWeight: 600 }}
            >
              LINE 詢問此商品
            </a>
            <a
              href={igUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="uo-btn ghost"
              style={{ textDecoration: 'none', textAlign: 'center', padding: '14px 24px', fontSize: 14 }}
            >
              IG 私訊詢問
            </a>
          </div>

          {/* 規格表 */}
          <div className="uo-spec" style={{ borderTop: '1px solid var(--uo-line)', paddingTop: 16 }}>
            <h6 style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--uo-mute)', marginBottom: 12 }}>
              ● PRODUCT SPECS · 商品規格
            </h6>
            <dl style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: '8px 16px', fontSize: 13, margin: 0 }}>
              {product.productCode && (<>
                <dt style={{ color: 'var(--uo-mute)' }}>商品編號</dt>
                <dd style={{ margin: 0 }}>{product.productCode}</dd>
              </>)}
              <dt style={{ color: 'var(--uo-mute)' }}>IP 系列</dt>
              <dd style={{ margin: 0 }}>{product.ipSeriesName}</dd>
              <dt style={{ color: 'var(--uo-mute)' }}>商品類型</dt>
              <dd style={{ margin: 0 }}>{product.categoryEmoji} {product.categoryName}</dd>
              <dt style={{ color: 'var(--uo-mute)' }}>庫存狀態</dt>
              <dd style={{ margin: 0 }}>
                {product.baseStockStatus === 'inStock' && '現貨'}
                {product.baseStockStatus === 'preorder' && '預購'}
                {product.baseStockStatus === 'incoming' && '到貨中'}
                {product.baseStockStatus === 'outOfStock' && '暫時缺貨'}
                {product.baseStockStatus === 'soldOut' && '已售完'}
              </dd>
            </dl>
          </div>
        </div>
      </div>

      {/* 商品描述（如果有 description 才顯示） */}
      {product.description && (
        <div style={{ marginTop: 64, paddingTop: 32, borderTop: '1px solid var(--uo-line)' }}>
          <h3 style={{ fontSize: 18, marginBottom: 16, letterSpacing: '0.05em' }}>商品描述</h3>
          <div style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--uo-ink)', whiteSpace: 'pre-wrap' }}>
            {product.description}
          </div>
        </div>
      )}
    </div>
  )
}