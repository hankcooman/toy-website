import TopBar from '../components/TopBar'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata = {
  title: '商務合作 - 究極玩 Ultimate Toys',
}

export default function AboutPage() {
  return (
    <>
      <TopBar />
      <Nav />
      <main>
        {/* 麵包屑 + 標題區 */}
        <section className="uo-list-head">
          <div className="uo-crumb">
            <a href="/" style={{ color: 'inherit' }}>首頁</a>
            {' / '}
            <span>商務合作</span>
          </div>
          <h1 className="uo-list-title">
            商務合作
            <span style={{
              color: 'var(--uo-red-bright)',
              fontFamily: 'var(--font-en)',
              fontSize: '0.4em',
              verticalAlign: 'middle',
              letterSpacing: '0.1em',
              marginLeft: 12,
            }}>
              BUSINESS
            </span>
          </h1>
          <div className="uo-list-meta">
            <span>不只是玩具，是收藏每一份歡喜</span>
            <span style={{ fontFamily: 'var(--font-en)', fontSize: 11, letterSpacing: '0.2em' }}>
              EST · 2026
            </span>
          </div>
        </section>

        {/* 品牌故事區（純文字置中版） */}
        <section className="uo-about">
          <div className="uo-about-eyebrow">OUR STORY · 品牌故事</div>

          <h2 className="uo-about-title">
            收藏，<br />
            是<span className="accent-red">大人小孩</span>共通的浪漫
          </h2>

          <p className="uo-about-lead" style={{ maxWidth: 'none' }}>
            究極玩成立於 2026 年，於「全台景點」販售關於盒玩、各式 IP 周邊、文創商品。
          </p>

          <p className="uo-about-body">
            我們相信，玩具不是孩子的專利。每一個盒玩、每一隻絨毛、每一個公仔，都承載著我們對童年、對熱愛、對「不羈」的執著。每月精選 IP 上架，從日本原裝直送，所有商品皆為正版授權，讓每一份歡喜，都能被好好收藏。
          </p>

          <div className="uo-about-info">
          <p style={{
            textAlign: 'center',
            fontSize: 14,
            color: '#1a1a1a',
            fontWeight: 600,
            marginBottom: 20,
            letterSpacing: '0.05em',
          }}>
              商業合作請來信📩
            </p>
            <div className="uo-about-info-row">
              <span className="uo-about-info-arrow">➤</span>
              <span className="uo-about-info-label">統一編號</span>
              <span className="uo-about-info-value">20310469</span>
            </div>
            <div className="uo-about-info-row">
              <span className="uo-about-info-arrow">➤</span>
              <span className="uo-about-info-label">信箱</span>
              <span className="uo-about-info-value">hank25338862@gmail.com</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}