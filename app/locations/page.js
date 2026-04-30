import TopBar from '../components/TopBar'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata = {
  title: '通路據點 - 究極玩 Ultimate Toys',
}

export default function LocationsPage() {
  return (
    <>
      <TopBar />
      <Nav />
      <main>
        <section className="uo-placeholder">
          <div className="uo-placeholder-inner">
            <div className="uo-placeholder-eyebrow">LOCATIONS</div>
            <h1 className="uo-placeholder-title">通路據點</h1>
            <p className="uo-placeholder-text">頁面製作中，敬請期待 ～</p>
            <a href="/" className="uo-btn ghost uo-placeholder-btn">← 返回首頁</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}