import "@/styles/globals.css"
import { Inter, Space_Grotesk } from "next/font/google"
import type React from "react"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata = {
  title: "Taku Yamada - Creative Developer & Technical Artist",
  description: "インタラクティブなWebサイト、3Dビジュアライゼーション、モーショングラフィックスを通じて、ユニークなデジタル体験を生み出します。",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
