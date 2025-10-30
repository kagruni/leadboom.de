import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { generateMetadata, STRUCTURED_DATA, SITE_CONFIG } from "@/lib/seo-config"
import { WebVitals } from "@/components/performance/web-vitals"
import Script from "next/script"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = generateMetadata({
  title: "Leadboom | Lead Generation & CRM Platform",
  description: "Die All-in-One Plattform für professionellen Vertrieb. Premium-Datensätze vom eigenen Scraping, KI-gestütztes CRM und automatisierte Workflows – entwickelt für maximalen Erfolg im DACH-Markt.",
  keywords: [
    "Lead Generation",
    "CRM Platform",
    "Lead Scraping",
    "Sales Automation",
    "Vertriebsautomatisierung"
  ],
  canonical: "/",
  ogType: "website"
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={inter.variable}>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <Script
          id="structured-data-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(STRUCTURED_DATA.organization)
          }}
        />
        <Script
          id="structured-data-software"
          type="application/ld+json" 
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(STRUCTURED_DATA.softwareApplication)
          }}
        />
        <Script
          id="structured-data-service"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(STRUCTURED_DATA.service)
          }}
        />

        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#7c3aed" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={SITE_CONFIG.name} />
        
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} font-sans antialiased bg-white`}>
        {/* Skip to main content for accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-purple-600 focus:text-white focus:top-4 focus:left-4 focus:rounded">
          Skip to main content
        </a>
        
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />

        {/* Performance Monitoring */}
        <WebVitals />

        {/* Analytics Scripts */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_title: document.title,
                  page_location: window.location.href,
                });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}

