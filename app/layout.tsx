import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "RSS Reader",
  description: "RSS reader or aggregator for news feeds."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
