import TopBar from '../components/TopBar'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata = {
  title: '服務條款與退換貨說明',
  description: '究極玩 Ultimate Toys 服務條款、購物須知、預購商品退換貨說明。',
}

export default function TermsPage() {
  return (
    <>
      <TopBar />
      <Nav />
      <main>
        <section className="uo-list-head">
          <div className="uo-crumb">
            <a href="/" style={{ color: 'inherit' }}>首頁</a>
            {' / '}
            <span>服務條款</span>
          </div>
          <h1 className="uo-list-title">
            服務條款
            <span style={{
              color: 'var(--uo-red-bright)',
              fontFamily: 'var(--font-en)',
              fontSize: '0.4em',
              verticalAlign: 'middle',
              letterSpacing: '0.1em',
              marginLeft: 12,
            }}>
              TERMS
            </span>
          </h1>
          <div className="uo-list-meta">
            <span>最後更新日期：2026 年 5 月 8 日</span>
          </div>
        </section>

        <section className="uo-policy">
          <p className="uo-policy-intro">
            歡迎使用「究極玩 Ultimate Toys」（以下簡稱「本網站」）。請於使用本網站前，仔細閱讀以下條款。
            一旦您於本網站完成購物詢價或下單行為，即視為已閱讀、了解並同意接受本條款全部內容之拘束。
          </p>

          <h2>一、商品性質說明</h2>
          <p>
            本網站所販售之商品<strong>絕大多數為「預購商品」</strong>，係依顧客下單後向日本原廠或代理商統一訂購。
            預購商品到貨時間視原廠出貨進度而定，恕無法保證確切日期。下單前請務必確認以下事項：
          </p>
          <ul>
            <li>預購商品須<strong>付款後才會替您下單</strong>，付款後即進入訂購流程，恕無法任意取消。</li>
            <li>到貨時間以原廠公告為準，本網站若得知延誤將主動透過 LINE 通知。</li>
            <li>所有商品均為日本原裝正品，恕不接受「不喜歡」等個人因素之退換貨申請。</li>
          </ul>

          <h2>二、訂購與付款流程</h2>
          <ol>
            <li>於本網站瀏覽商品 → 透過 LINE 官方帳號或 Email 與我們聯繫詢價。</li>
            <li>確認商品款式、數量、金額後，我方會提供匯款資訊或行動支付連結。</li>
            <li>付款完成後，請保留交易紀錄並回傳予我方核對。</li>
            <li>核對成功後即代表訂購完成，您將收到下單確認訊息。</li>
          </ol>

          <h2>三、退換貨政策</h2>

          <h3>3.1 可退換貨之情況</h3>
          <p>本網站接受下列情況之退換貨申請：</p>
          <ul>
            <li><strong>商品瑕疵</strong>：商品本體缺陷、明顯刮傷、零件遺失等。</li>
            <li><strong>運送途中損傷</strong>：包裝外箱嚴重壓損、商品受潮等。</li>
            <li><strong>出貨錯誤</strong>：寄送之商品款式或數量與訂單不符。</li>
          </ul>
          <p>
            申請期限：商品<strong>到貨後 7 日內</strong>，請透過 LINE 或 Email 拍照舉證並聯繫我方。
            逾期恕不受理。
          </p>

          <h3>3.2 不接受退換貨之情況</h3>
          <p>下列情況恕不接受退換貨：</p>
          <ul>
            <li>個人喜好因素（如顏色、款式不如預期）。</li>
            <li>盒玩、扭蛋類商品因抽中款式不符期望。</li>
            <li>商品已拆封、使用、組裝，且非本網站責任所致。</li>
            <li>外盒輕微壓痕、原廠出廠瑕疵（如水貼紙微歪）等不影響商品本體之情形。</li>
            <li>逾申請期限（7 日）之申請。</li>
          </ul>

          <h3>3.3 退款方式</h3>
          <p>
            退換貨經審核通過後，將以原付款方式退款。匯款手續費依實際情況由買賣雙方協議分擔。
            退款作業時間約 3-7 個工作日。
          </p>

          <h2>四、商品價格與優惠</h2>
          <p>
            本網站標示之價格均為新台幣，以實際結帳金額為準。本網站保留隨時調整商品價格之權利，
            已下單之訂單以下單當下價格為準，不受後續價格調整影響。
          </p>

          <h2>五、智慧財產權</h2>
          <p>
            本網站所販售之商品皆為日本原廠正版授權商品，IP 角色版權歸原權利人所有。
            本網站之網站內容、商品圖片、文案說明等，未經授權禁止任何形式之轉載、複製或商業使用。
          </p>

          <h2>六、責任限制</h2>
          <p>
            本網站對於下列情況不負損害賠償責任：
          </p>
          <ul>
            <li>不可抗力之天然災害、戰爭、原廠停產等致使商品無法到貨。</li>
            <li>運送商（黑貓、宅配通等）造成之延誤或商品輕微外觀損傷。</li>
            <li>顧客提供錯誤之收件資訊導致商品遺失。</li>
          </ul>

          <h2>七、條款修訂</h2>
          <p>
            本網站保留隨時修改本條款之權利，修改後之條款將公告於本頁面，公告即生效。
            建議您定期檢視本條款內容。
          </p>

          <h2>八、聯絡方式</h2>
          <p>如對以上條款有任何疑問，歡迎透過下列管道聯繫我們：</p>
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