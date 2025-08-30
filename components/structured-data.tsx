import Script from 'next/script'

interface StructuredDataProps {
  data: Record<string, any>
  id?: string
}

export function StructuredData({ data, id }: StructuredDataProps) {
  return (
    <Script
      id={id || `structured-data-${Date.now()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data)
      }}
    />
  )
}

// Specific structured data components for different page types
export function OrganizationSchema({ organization }: { organization: any }) {
  return <StructuredData data={organization} id="structured-data-organization" />
}

export function ProductSchema({ product }: { product: any }) {
  return <StructuredData data={product} id="structured-data-product" />
}

export function ServiceSchema({ service }: { service: any }) {
  return <StructuredData data={service} id="structured-data-service" />
}

export function BreadcrumbSchema({ breadcrumbs }: { breadcrumbs: any }) {
  return <StructuredData data={breadcrumbs} id="structured-data-breadcrumb" />
}

export function FAQSchema({ faq }: { faq: any }) {
  return <StructuredData data={faq} id="structured-data-faq" />
}

export function ArticleSchema({ article }: { article: any }) {
  return <StructuredData data={article} id="structured-data-article" />
}