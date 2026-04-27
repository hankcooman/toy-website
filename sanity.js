import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'y3eo25p1',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

// 圖片網址產生器：把 Sanity 的圖片參考轉成可顯示的網址
const builder = imageUrlBuilder(client)
export function urlFor(source) {
  return builder.image(source)
}