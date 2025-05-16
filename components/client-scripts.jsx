'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export default function ClientScripts() {
  useEffect(() => {
    // Any code that needs to run in the client side after component mount
    const loadScripts = async () => {
      try {
        // You can add any initialization that needs to happen after scripts are loaded
        console.log('Scripts loaded successfully')
      } catch (error) {
        console.error('Error loading scripts:', error)
      }
    }

    loadScripts()
  }, [])

  return (
    <>
      {/* Third-party libraries */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.2/axios.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.12/typed.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.3/particles.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.5.2/cdn/shoelace.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/iconify-icon@1.0.8/dist/iconify-icon.min.js"
        strategy="beforeInteractive"
      />

      {/* Custom scripts */}
      <Script id="index-js" strategy="afterInteractive" src="/index.js" />
      <Script id="spotify-js" strategy="afterInteractive" src="/spotify.js" />
      <Script id="quotesgen-js" strategy="afterInteractive" src="/quotesgen.js" />
    </>
  )
}
