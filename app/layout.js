import './globals.css'
import './styles.css'

const SITE_URL = 'https://uttoys.com'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: '究極玩 Ultimate Toys',
    template: '%s｜究極玩 Ultimate Toys',
  },
  description: '來自全球的玩具、盲盒與絨毛玩偶的集成商店。每月精選 IP 上架，商品皆是正版授權商品，請放心選購。',
  keywords: [
    '盒玩', '日本盒玩', 'Re-MeNT', 'IP 周邊', '正版授權', '究極玩',
    'Ultimate Toys', '三麗鷗', '寶可夢', 'SPY×FAMILY', 'Kirby',
  ],
  authors: [{ name: '究極玩 Ultimate Toys' }],
  creator: '究極玩 Ultimate Toys',

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: '/apple-icon.png',
  },

  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    url: SITE_URL,
    siteName: '究極玩 Ultimate Toys',
    title: '究極玩 Ultimate Toys',
    description: '來自全球的玩具、盲盒與絨毛玩偶的集成商店。每月精選 IP 上架，商品皆是正版授權商品，請放心選購。',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '究極玩 Ultimate Toys',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: '究極玩 Ultimate Toys',
    description: '來自全球的玩具、盲盒與絨毛玩偶的集成商店。',
    images: ['/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@300;400;500;600;700;800;900&family=Noto+Sans+TC:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="uo-app theme-mag">
          {children}
        </div>
      </body>
    </html>
  )
}