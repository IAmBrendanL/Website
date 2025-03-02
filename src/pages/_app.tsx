import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { useEffect } from "react"
import { initTheme } from "@/utils/theme"

export default function App({ Component, pageProps }: AppProps) {
  // Initialize theme on client-side
  useEffect(() => {
    initTheme()
  }, [])

  return <Component {...pageProps} />
}
