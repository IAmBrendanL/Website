import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/charter-webfont@3/charter.min.css"
        />
        {/* Preload fonts to prevent layout shift */}
        <link
          rel="preload"
          href="https://cdn.jsdelivr.net/npm/charter-webfont@3/charter.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        {/* Prevent flash of unstyled content in dark mode */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function getThemePreference() {
                  if (typeof window !== 'undefined' && window.localStorage) {
                    const storedPrefs = window.localStorage.getItem('color-theme');
                    if (typeof storedPrefs === 'string') {
                      return storedPrefs;
                    }
                    
                    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
                    if (userMedia.matches) {
                      return 'dark';
                    }
                  }
                  
                  return 'light';
                }

                const theme = getThemePreference();
                
                // Set the data-theme attribute on the HTML element
                document.documentElement.setAttribute('data-theme', theme);
                
                // Apply colors immediately to prevent flash
                if (theme === 'dark') {
                  document.documentElement.style.backgroundColor = '#121212';
                  document.documentElement.style.color = '#f5f5f5';
                  document.body.style.backgroundColor = '#121212';
                  document.body.style.color = '#f5f5f5';
                } else {
                  document.documentElement.style.backgroundColor = '#ffffff';
                  document.documentElement.style.color = '#333333';
                  document.body.style.backgroundColor = '#ffffff';
                  document.body.style.color = '#333333';
                }
              })();
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
