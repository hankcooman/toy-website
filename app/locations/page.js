// app/locations/page.js
// 通路據點頁 — 2026/05/07 v2 真實據點版（3 個據點）
// 改資料時：直接編輯下方的 LOCATIONS 陣列即可

import TopBar from '../components/TopBar'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata = {
  title: '通路據點 — 究極玩 Ultimate Toys',
  description: '究極玩 Ultimate Toys 全台實體據點資訊，歡迎現場挑選盒玩、絨毛、公仔。',
}

// === 據點資料（要改就改這裡）=========================================
// 欄位說明：
//   name      店名
//   address   地址
//   image     照片網址（放在 public/locations/xxx.jpg，這裡寫 "/locations/xxx.jpg"）
//   mapUrl    （選填）Google Map 連結，沒填的話「查看地圖」按鈕會自動用地址產生
const LOCATIONS = [
  {
    name: '紙箱王',
    address: '台中市北屯區東山路二段二巷2號',
    image: '/locations/carton_king.jpg',
    mapUrl: '',
  },
  {
    name: '月眉糖廠',
    address: '台中市后里區甲后路二段350號',
    image: '/locations/yu_mei.jpg',
    mapUrl: '',
  },
  {
    name: '寶熊漁樂碼頭',
    address: '台中市潭子區中山路三段11號',
    image: '/locations/okuma_center.jpg',
    mapUrl: '',
  },
]
// =================================================================

function buildMapUrl(loc) {
  if (loc.mapUrl) return loc.mapUrl
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`
}

export default function LocationsPage() {
  return (
    <>
      <TopBar />
      <Nav />

      <main className="locations-page">
        {/* 頁首 */}
        <section className="locations-hero">
          <h1 className="locations-title">通路據點</h1>
          <p className="locations-subtitle">
            歡迎親臨究極玩實體門市，現場挑選你的療癒小物
          </p>
        </section>

        {/* 卡片列表 */}
        <section className="locations-grid">
          {LOCATIONS.map((loc, i) => (
            <article key={i} className="location-card">
              <div className="location-image">
                <img src={loc.image} alt={loc.name} loading="lazy" />
              </div>
              <div className="location-info">
                <h2 className="location-name">{loc.name}</h2>
                <p className="location-address">
                  <span className="location-icon" aria-hidden="true">📍</span>
                  {loc.address}
                </p>
                <a
                  className="location-map-btn"
                  href={buildMapUrl(loc)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  查看地圖 →
                </a>
              </div>
            </article>
          ))}
        </section>

      </main>

      <Footer />
    </>
  )
}
