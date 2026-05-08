import TopBar from './components/TopBar'
import Nav from './components/Nav'
import Footer from './components/Footer'

export const metadata = {
  title: '頁面不存在',
  description: '你要找的頁面不在這裡。',
}

export default function NotFound() {
  return (
    <>
      <TopBar />
      <Nav />
      <main>
        <section
          style={{
            minHeight: '60vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px 24px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-en)',
              fontSize: 120,
              fontWeight: 900,
              lineHeight: 1,
              color: 'var(--uo-red-bright)',
              letterSpacing: '0.05em',
              marginBottom: 8,
            }}
          >
            404
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 32,
              fontWeight: 700,
              margin: '0 0 16px',
              letterSpacing: '0.05em',
            }}
          >
            找不到這個頁面
          </h1>

          <p
            style={{
              fontSize: 14,
              color: 'var(--uo-mute)',
              maxWidth: 380,
              lineHeight: 1.7,
              margin: '0 0 32px',
            }}
          >
            你輸入的網址可能有誤，或是這個頁面已經下架了。
            回首頁逛逛新貨吧！
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '12px 28px',
                background: 'var(--uo-red)',
                color: 'var(--uo-paper)',
                textDecoration: 'none',
                fontFamily: 'var(--font-en)',
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                borderRadius: 4,
              }}
            >
              回到首頁
            </a>
            <a
              href="/products"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '12px 28px',
                background: 'transparent',
                color: 'var(--uo-paper)',
                border: '1px solid var(--uo-line-strong)',
                textDecoration: 'none',
                fontFamily: 'var(--font-en)',
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                borderRadius: 4,
              }}
            >
              逛全部商品
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}