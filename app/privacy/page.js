import TopBar from '../components/TopBar'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata = {
  title: '隱私權聲明',
  description: '究極玩 Ultimate Toys 個人資料蒐集、使用與保護政策。',
}

export default function PrivacyPage() {
  return (
    <>
      <TopBar />
      <Nav />
      <main>
        <section className="uo-list-head">
          <div className="uo-crumb">
            <a href="/" style={{ color: 'inherit' }}>首頁</a>
            {' / '}
            <span>隱私權聲明</span>
          </div>
          <h1 className="uo-list-title">
            隱私權聲明
            <span style={{
              color: 'var(--uo-red-bright)',
              fontFamily: 'var(--font-en)',
              fontSize: '0.4em',
              verticalAlign: 'middle',
              letterSpacing: '0.1em',
              marginLeft: 12,
            }}>
              PRIVACY
            </span>
          </h1>
          <div className="uo-list-meta">
            <span>最後更新日期：2026 年 5 月 8 日</span>
          </div>
        </section>

        <section className="uo-policy">
          <p className="uo-policy-intro">
            「究極玩 Ultimate Toys」（以下簡稱「本網站」）非常重視您的隱私權。
            本聲明說明我們如何蒐集、使用及保護您所提供的個人資料，並依照《個人資料保護法》相關規定執行。
          </p>

          <h2>一、個人資料之蒐集</h2>
          <p>本網站於下列情況下蒐集您的個人資料：</p>
          <ul>
            <li><strong>商品詢價或下單時</strong>：透過 LINE 或 Email 與本網站聯繫購物之相關資訊。</li>
            <li><strong>主動提供時</strong>：您透過 LINE、Email 等管道與我們聯絡時所提供之資料。</li>
            <li><strong>網站瀏覽時</strong>：自動蒐集之非識別性資料（如瀏覽器類型、裝置資訊、瀏覽紀錄）以改善網站體驗。</li>
          </ul>

          <h2>二、蒐集之資料類型</h2>
          <ul>
            <li><strong>身分識別類</strong>：姓名、LINE 暱稱、聯絡電話、Email。</li>
            <li><strong>聯絡與寄送資料</strong>：收件地址、郵遞區號。</li>
            <li><strong>交易資料</strong>：購買紀錄、付款方式、訂單金額。</li>
            <li><strong>通訊內容</strong>：與本網站之間透過 LINE、Email 之對話記錄。</li>
          </ul>
          <p style={{ fontSize: 13, color: 'var(--uo-mute)' }}>
            本網站<strong>不會</strong>主動蒐集您的金融帳戶詳細資料（如完整信用卡卡號、銀行帳戶密碼等）。
          </p>

          <h2>三、個人資料之使用</h2>
          <p>蒐集之個人資料將用於下列目的：</p>
          <ul>
            <li>處理訂單、商品配送、退換貨服務。</li>
            <li>顧客客服、商品諮詢、預購到貨通知。</li>
            <li>新品上架、優惠活動、商品資訊之傳送（您可隨時要求停止）。</li>
            <li>網站功能優化、使用體驗改善。</li>
            <li>依法令要求或主管機關請求提供。</li>
          </ul>

          <h2>四、個人資料之保護</h2>
          <p>
            本網站採取合理之技術與管理措施，保護您的個人資料免於未經授權之存取、使用或揭露。
            個人資料僅供本網站營運所需使用，<strong>不會販售、出租或提供給第三方</strong>，
            但下列情況除外：
          </p>
          <ul>
            <li>為完成訂單配送之必要：提供姓名、地址、電話予物流業者（黑貓、宅配通等）。</li>
            <li>為配合司法機關、檢警調單位依法令所為之要求。</li>
            <li>事先取得您的明確同意。</li>
          </ul>

          <h2>五、Cookie 之使用</h2>
          <p>
            本網站使用 Cookie 等技術以改善使用體驗與分析網站流量。
            您可透過瀏覽器設定拒絕 Cookie，但部分功能可能因此受限。
          </p>

          <h2>六、第三方服務</h2>
          <p>本網站使用下列第三方服務，請參考其個別之隱私權政策：</p>
          <ul>
            <li>網站託管：Vercel Inc.</li>
            <li>內容管理：Sanity.io</li>
            <li>客服管道：LINE Corporation、Google (Gmail)</li>
            <li>社群連結：Meta Platforms, Inc. (Instagram)</li>
          </ul>

          <h2>七、您的權利</h2>
          <p>依《個人資料保護法》，您對於本網站所持有之個人資料，享有下列權利：</p>
          <ul>
            <li>查詢或請求閱覽。</li>
            <li>請求製給複製本。</li>
            <li>請求補充或更正。</li>
            <li>請求停止蒐集、處理或利用。</li>
            <li>請求刪除。</li>
          </ul>
          <p>如欲行使上述權利，請透過 Email 或 LINE 與本網站聯繫，我們將於合理期間內處理。</p>

          <h2>八、未成年使用者</h2>
          <p>
            本網站建議未滿 18 歲之未成年人於使用本服務或進行任何購物行為前，
            應先取得法定代理人（家長）之同意。
          </p>

          <h2>九、隱私權聲明之修訂</h2>
          <p>
            本網站保留隨時修訂本聲明之權利，修訂後之內容將公告於本頁面，公告即生效。
            建議您定期檢視本頁內容，以確保了解最新政策。
          </p>

          <h2>十、聯絡方式</h2>
          <p>如對隱私權聲明有任何疑問，歡迎聯繫：</p>
          <ul>
            <li>LINE 官方帳號：<a href="https://lin.ee/6YVErL5" target="_blank" rel="noopener noreferrer">點此加入</a></li>
            <li>Email：<a href="mailto:hank25338862@gmail.com">hank25338862@gmail.com</a></li>
          </ul>

          <p style={{ marginTop: 48, fontSize: 12, color: 'var(--uo-mute)', textAlign: 'center' }}>
            究極玩 Ultimate Toys ・ 統一編號 20310469
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}