import type React from "react"
import "./globals.css"
import { Inter, Playfair_Display, Dancing_Script } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-handwriting",
})

export const metadata = {
  title: "César Gemayel - Lebanese Master Painter",
  description: "Discover the legacy and works of César Gemayel, a renowned Lebanese painter.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} ${dancingScript.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
