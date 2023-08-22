"use client"
import Providers from "@modules/providers"
import { Kaushan_Script } from "next/font/google"
import ReactGA from "react-ga4"
import "styles/globals.css"

ReactGA.initialize(process.env.NEXT_PUBLIC_ANALYTICS_ID)

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
