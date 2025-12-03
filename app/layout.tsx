import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ATG - Chiến Thuật & Hướng Dẫn Arena of Valor',
  description: 'Hướng dẫn chi tiết, bảng xếp hạng nhân vật, build vật phẩm, và chiến lược cho Arena of Valor. Tham gia cộng đồng và nâng cao kỹ năng chơi game của bạn.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  )
}
