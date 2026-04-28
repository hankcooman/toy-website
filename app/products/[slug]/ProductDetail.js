'use client'

import { useState } from 'react'
import { urlFor } from '../../../sanity'

export default function ProductDetail({ product, allImages }) {
  const [thumbIndex, setThumbIndex] = useState(0)

  // 主圖 URL
  const mainImageUrl = allImages[thumbIndex]
    ? urlFor(allImages[thumbIndex]).width(1200).height(1200).fit('crop').url()
    : null

  // LINE 預填訊息
  const lineMessage = encodeURIComponent(
    `你好，我想詢問「${product.name}」(${product.productCode || '商品編號未填'})，請問還有現貨嗎？`
  )
  const lineUrl = `https://line.me/R/ti/p/@your-line-id?text=${lineMessage}`

  // IG 私訊
  const igUrl = `https://instagram.com/your-ig-id`

  // 是否顯示縮圖列（圖多於 1 張才顯示）
  const showThumbCol = allImages.length > 1

  return (
    <div className="uo-detail">
      <div className={`uo-detail-grid ${showThumbCol ? 'has-thumbs' : ''}`}>

        {/* 左側縮圖列（多張圖才顯示） */}
        {showThumbCol && (
          <div className="uo-thumb-col">
            {allImages.map((img, i) => {
              const thumbUrl = urlFor(img).width(160).height(160).fit('crop').url()
              return (
                <div
                  key={i}
                  className={`uo-thumb ${i === thumbIndex ? 'on' : ''}`}
                  onClick={() => setThumbIndex(i)}
                  style={{ backgroundImage: `url(${thumbUrl})` }}
                />
              )
            })}
          </div>
        )}

        {/* 中間主圖 */}
        <div
          className="uo-main-img"
          style={{
            backgroundImage: mainImageUrl ? `url(${mainImageUrl})` : 'none',
          }}
        >
          {/* 商品標籤 */}
          {product.tags && product.tags.includes('new') && (
            <span className="uo-tag dark uo-detail-badge">NEW</span>
          )}
          {product.tags && product.tags.includes('hot') && (
            <span className="uo-tag red uo-detail-badge">HOT</span>
          )}
          {!mainImageUrl && (
            <span className="ph">
              {product.productCode || product.name}
            </span>
          )}
        </div>

        {/* 右側商品資訊 */}
        <div className="uo-detail-info">
          <div className="uo-detail-brand">
            ★ {product.ipSeriesName} · {product.categoryEmoji} {product.categoryName}
          </div>

          <h1 className="uo-detail-title">{product.name}</h1>

          {product.shortDescription && (
            <p className="uo-detail-sub">{product.shortDescription}</p>
          )}

          {/* 價格 */}
          <div className="uo-detail-price">
            <span className="now">NT${product.basePrice}</span>
            {product.baseOriginalPrice && product.baseOriginalPrice > product.basePrice && (
              <>
                <span className="old">NT${product.baseOriginalPrice}</span>
                <span className="save">省 NT${product.baseOriginalPrice - product.basePrice}</span>
              </>
            )}
          </div>

          {/* 庫存狀態 */}
          <div className="uo-detail-stock">
            <span className={`uo-prod-stock ${product.baseStockStatus === 'inStock' ? 'in' : 'low'}`}>
              {product.baseStockStatus === 'inStock' && '✅ 現貨供應'}
              {product.baseStockStatus === 'preorder' && '📦 預購中'}
              {product.baseStockStatus === 'incoming' && '🚚 到貨中'}
              {product.baseStockStatus === 'outOfStock' && '❌ 暫時缺貨'}
              {product.baseStockStatus === 'soldOut' && '❌ 已售完'}
            </span>
          </div>

          {/* LINE / IG 詢問按鈕 */}
          <div className="uo-detail-cta">
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="uo-btn red uo-detail-btn"
            >
              LINE 詢問此商品
            </a>
            <a
              href={igUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="uo-btn ghost uo-detail-btn"
            >
              IG 私訊詢問
            </a>
          </div>

          {/* 規格表 */}
          <div className="uo-spec">
            <h6>● PRODUCT SPECS · 商品規格</h6>
            <dl>
              {product.productCode && (<>
                <dt>商品編號</dt>
                <dd>{product.productCode}</dd>
              </>)}
              <dt>IP 系列</dt>
              <dd>{product.ipSeriesName}</dd>
              <dt>商品類型</dt>
              <dd>{product.categoryEmoji} {product.categoryName}</dd>
              <dt>庫存狀態</dt>
              <dd>
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
        <div className="uo-detail-desc">
          <h3>商品描述</h3>
          <div className="content">{product.description}</div>
        </div>
      )}
    </div>
  )
}