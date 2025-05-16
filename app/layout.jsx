import './output.css'
import './css/index.css'
 
export function generateViewport({ params }) {
  return {
    themeColor: "#ffffff",
    width:"device-width", 
    initialScale: 1, 
    maximumScale: 1, 
    userScalable: 0,
    title: 'Aeolus Developer',
    description: 'Just a new website I designed',
    keywords: 'aeolusdev, aeolusdeveloper, discord, captaincool6333, autocode',
    authors: [{ name: 'AeolusDeveloper' }],
    robots: 'index, follow',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="sl-theme-dark" data-theme="dark">
      <head>
        {/* Icons */}
        <link rel="apple-touch-icon" sizes="57x57" href="./images/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="./images/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="./images/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="./images/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="./images/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="./images/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="./images/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="./images/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="./images/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="./images/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="./images/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./images/favicon-16x16.png" />
        <link rel="manifest" href="./images/manifest.json" />
        <link rel="icon" href="./images/logo.png" />
        
        {/* External CSS */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.12.0/cdn/themes/dark.css" />
        <style type="text/css">
          {`span.iconify, i.iconify, iconify-icon { display: inline-block; width: 1em; }`}
        </style>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      </head>
      <body>
        {children}
        
        {/* Scripts */}
        <script src="https://unpkg.com/axios@1.6.7/dist/axios.min.js" async></script>
        <script type="module" src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.12.0/cdn/shoelace-autoloader.js" async></script>
        <script src="https://code.iconify.design/2/2.2.1/iconify.min.js" async></script>
        <script src="https://code.iconify.design/iconify-icon/1.0.2/iconify-icon.min.js" async></script>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js" async></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.2/particles.min.js" async></script>
        <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js" async></script>

      </body>
    </html>
  )
}