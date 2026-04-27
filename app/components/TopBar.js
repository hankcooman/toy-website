export default function TopBar() {
  const message = '究極玩 Ultimate Toys · 收藏每一份歡喜 · 加入 LINE 領取最新上架資訊 · 實體門市歡迎光臨 · '

  return (
    <div className="uo-topbar">
      <div className="marquee" style={{ whiteSpace: 'nowrap' }}>
        {message}{message}
      </div>
    </div>
  )
}