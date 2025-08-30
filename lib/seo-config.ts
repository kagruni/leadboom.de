import { Metadata } from 'next'

// Primary SEO Keywords from WEBSITE_RESTRUCTURE_PLAN.md section 8.1
export const PRIMARY_KEYWORDS = [
  'Agency management platform',
  'Sales automation software', 
  'Client fulfillment system',
  'Digital agency tools',
  'Business process automation'
] as const

// Long-tail keywords from section 8.2
export const LONG_TAIL_KEYWORDS = [
  'Complete agency management solution',
  'Automated sales pipeline for agencies', 
  'Digital contract signing for agencies',
  'WhatsApp automation for businesses',
  'Agency project management software'
] as const

// Site-wide SEO configuration
export const SITE_CONFIG = {
  name: 'Leadboom',
  title: 'Leadboom - Agency Management Platform | Complete Business Automation',
  description: 'Das führende Betriebssystem für erfolgreiche Agenturen. Von der Lead-Generierung bis zur Projekt-Lieferung – eine Plattform für alles. Sales automation software und client fulfillment system in einem.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://leadboom.de',
  ogImage: '/og-image.jpg',
  creator: 'Leadboom Team',
  keywords: [...PRIMARY_KEYWORDS, ...LONG_TAIL_KEYWORDS],
  language: 'de',
  locale: 'de_DE'
} as const

// Generate metadata for pages
interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  noindex?: boolean
  ogImage?: string
  ogType?: 'website' | 'article' | 'product'
  structuredData?: Record<string, any>
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  canonical,
  noindex = false,
  ogImage,
  ogType = 'website',
  structuredData
}: SEOProps = {}): Metadata {
  const fullTitle = title 
    ? `${title} | ${SITE_CONFIG.name}` 
    : SITE_CONFIG.title
  
  const fullDescription = description || SITE_CONFIG.description
  const fullKeywords = [...SITE_CONFIG.keywords, ...keywords]
  const canonicalUrl = canonical ? `${SITE_CONFIG.url}${canonical}` : SITE_CONFIG.url
  const imageUrl = ogImage ? `${SITE_CONFIG.url}${ogImage}` : `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`

  const metadata: Metadata = {
    title: fullTitle,
    description: fullDescription,
    keywords: fullKeywords.join(', '),
    authors: [{ name: SITE_CONFIG.creator }],
    creator: SITE_CONFIG.creator,
    publisher: SITE_CONFIG.creator,
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      type: ogType,
      locale: SITE_CONFIG.locale,
      url: canonicalUrl,
      title: fullTitle,
      description: fullDescription,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      creator: '@leadboom',
      images: [imageUrl]
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
      other: {
        'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION || ''
      }
    }
  }

  return metadata
}

// Structured data templates
export const STRUCTURED_DATA = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    sameAs: [
      'https://www.linkedin.com/company/leadboom',
      'https://twitter.com/leadboom'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+49-XXX-XXXXXXX',
      contactType: 'customer service',
      availableLanguage: ['German', 'English']
    }
  },

  softwareApplication: {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE_CONFIG.name,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web Browser',
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    screenshot: `${SITE_CONFIG.url}/screenshots/dashboard.png`,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
      description: 'Kostenlose Demo verfügbar'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '500',
      bestRating: '5'
    }
  },

  service: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Agency Management Platform',
    description: 'Complete business automation solution for digital agencies',
    provider: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url
    },
    areaServed: {
      '@type': 'Country',
      name: 'Germany'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Agency Management Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Lead Generation Automation'
          }
        },
        {
          '@type': 'Offer', 
          itemOffered: {
            '@type': 'Service',
            name: 'Sales Pipeline Management'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service', 
            name: 'Client Fulfillment System'
          }
        }
      ]
    }
  },

  breadcrumb: (items: Array<{ name: string; url: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.url}`
    }))
  }),

  faq: (faqs: Array<{ question: string; answer: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  })
}

// SEO utility functions
export function generatePageTitle(pageTitle: string, suffix?: string): string {
  const parts = [pageTitle]
  if (suffix) parts.push(suffix)
  parts.push(SITE_CONFIG.name)
  return parts.join(' | ')
}

export function generateCanonicalUrl(path: string): string {
  return `${SITE_CONFIG.url}${path.startsWith('/') ? path : `/${path}`}`
}

export function generateOGImage(title: string, subtitle?: string): string {
  const params = new URLSearchParams({
    title,
    ...(subtitle && { subtitle })
  })
  return `${SITE_CONFIG.url}/api/og?${params.toString()}`
}