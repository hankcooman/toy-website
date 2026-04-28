'use client'

import { urlFor } from '../../../sanity'

/**
 * 把 Sanity 的描述欄位（可能是字串、可能是 Portable Text）轉成可顯示的純文字
 */
function renderDescription(desc) {
  if (!desc) return null
  if (typeof desc === 'string') return desc
  if (Array.isArray(desc)) {
    return desc
      .map(block => {
        if (typeof block === 'string') return block
        if (block?._type === 'block' && Array.isArray(block.children)) {
          return block.children.map(child => child?.text || '').join('')
        }
        return ''
      })
      .filter(Boolean)
      .join('\n')
  }
  return null
}

/**
 * 庫存狀態的中文標籤 + CSS 類別
 */
function getStockLabel(status) {
  switch (status) {
    case 'inStock':    return { text: '現貨', cls: 'in' }
    case 'preorder':   return { text: '預購', cls: 'low' }
    case 'incoming':   return { text: '到貨中', cls: 'low' }
    case 'outOfStock': return { text: '缺貨', cls: 'low' }
    case 'soldOut':    return { text: '已售完', cls: 'low' }
    default:           return { text: '', cls: '' }
  }
}

export default function ProductDetail({ product, allImages }) {
  // 主圖 URL（只用第一張，也就是 mainImage）
  const mainImageUrl = product.mainImage
    ? urlFor(product.mainImage).width(1200).height(1200).fit('crop').url()
    : null

  // 附圖（galleryImages，排在 PRODUCT DETAILS 下面）
  const galleryImages = product.galleryImages || []

  // LINE 預填訊息
  const lineMessage = encodeURIComponent(
    `你好，我想詢問「${product.name}」(${product.productCode || '商品編號未填'})，請問還有現貨嗎？`
  )
  const lineUrl = `https://line.me/R/ti/p/@your-line-id?text=${lineMessage}`

  // IG 私訊
  const igUrl = `https://instagram.com/your-ig-id`

  // 處理短描述跟詳細描述（自動判斷字串或富文本）
  const shortDescText = renderDescription(product.shortDescription)
  const descText = renderDescription(product.description)

  // 庫存狀態
  const stock = getStockLabel(product.baseStockStatus)

  return (
    <div className="uo-detail">
      <div className="uo-detail-grid">

        {/* 中間主圖（只顯示主圖，不切換縮圖） */}
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

          {/* 短描述（如果有）*/}
          {shortDescText && (
            <p className="uo-detail-sub">{shortDescText}</p>
          )}

          {/* 價格 + 庫存小記號 */}
          <div className="uo-detail-price">
            <span className="now">NT${product.basePrice}</span>
            {product.baseOriginalPrice && product.baseOriginalPrice > product.basePrice && (
              <>
                <span className="old">NT${product.baseOriginalPrice}</span>
                <span className="save">省 NT${product.baseOriginalPrice - product.basePrice}</span>
              </>
            )}
            {stock.text && (
              <span className={`uo-prod-stock ${stock.cls} uo-detail-stock-inline`}>
                • {stock.text}
              </span>
            )}
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
        </div>
      </div>

      {/* 商品描述（如果有 description 才顯示） */}
      {descText && (
        <div className="uo-detail-desc">
          <h3>● PRODUCT DETAILS · 商品描述</h3>
          <div className="content">{descText}</div>
        </div>
      )}

      {/* 附圖區塊（galleryImages 大張排在描述下方） */}
      {galleryImages.length > 0 && (
        <div className="uo-detail-gallery">
          {galleryImages.map((img, i) => {
            const url = urlFor(img).width(1600).fit('max').url()
            return (
              <div
                key={i}
                className="uo-detail-gallery-item"
                style={{ backgroundImage: `url(${url})` }}
              />
            )
          })}
        </div>
      )}

      {/* 購買流程說明（永遠顯示） */}
      <div className="uo-detail-howto">
        <h3>● HOW TO ORDER · 購買流程</h3>
        <div className="uo-howto-grid">
          <div className="uo-howto-step">
            <span className="step-num">01</span>
            <h4>點擊 LINE 詢問</h4>
            <p>點上方「LINE 詢問此商品」按鈕，加入店家好友並送出商品詢問訊息。</p>
          </div>
          <div className="uo-howto-step">
            <span className="step-num">02</span>
            <h4>確認商品與運費</h4>
            <p>店家會確認款式、數量、運送方式，並提供您運費與付款方式。</p>
          </div>
          <div className="uo-howto-step">
            <span className="step-num">03</span>
            <h4>付款與出貨</h4>
            <p>確認後依指示付款，店家收到款項後會盡快安排出貨並提供運送追蹤資訊。</p>
          </div>
          <div className="uo-howto-step">
            <span className="step-num">04</span>
            <h4>實體門市自取</h4>
            <p>歡迎到實體門市親自挑選並取貨，現場有更多商品等你來看！</p>
          </div>
        </div>

        <div className="uo-howto-note">
          ⚠️ <strong>注意事項</strong>：本網站為實體門市線上型錄，所有訂單請透過 LINE / IG 與店家確認後完成。商品價格不含運費，運費依商品重量與運送地區計算。
        </div>
      </div>
    </div>
  )
}