import TopBar from '../components/TopBar'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata = {
  title: '商務合作 - 究極玩 Ultimate Toys',
}

export default function ContactPage() {
  return (
    <>
      <TopBar />
      <Nav />
      <main>
        <section className="uo-placeholder">
          <div className="uo-placeholder-inner">
            <div className="uo-placeholder-eyebrow">CONTACT</div>
            <h1 className="uo-placeholder-title">商務合作</h1>
            <p className="uo-placeholder-text">頁面製作中，敬請期待 ～</p>
            <a href="/" className="uo-btn ghost uo-placeholder-btn">← 返回首頁</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}