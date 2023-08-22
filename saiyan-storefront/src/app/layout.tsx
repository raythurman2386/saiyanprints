"use client"
import Providers from "@modules/providers"
import { Kaushan_Script } from "next/font/google"
import "styles/globals.css"

export const kaushan_script = Kaushan_Script({
  subsets: ["latin-ext"],
  weight: "400",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="forest">
      <body>
        <Providers>
          <main className="relative">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
