'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void
  }
}

// Web Vitals tracking component
export function WebVitals() {
  useEffect(() => {
    // Only track in production
    if (process.env.NODE_ENV !== 'production') return
    if (typeof window === 'undefined') return
    if (!process.env.NEXT_PUBLIC_WEB_VITALS_ATTRIBUTION) return

    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Track Core Web Vitals with detailed attribution
      getCLS((metric) => {
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'performance',
            event_label: 'CLS',
            value: Math.round(metric.value * 1000),
            custom_map: { metric_id: 'cls' },
            attribution: metric.attribution
          })
        }
        
        // Log to console in development for debugging
        if (process.env.NODE_ENV === 'development') {
          console.log('CLS:', metric)
        }
      })

      getFID((metric) => {
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'performance',
            event_label: 'FID',
            value: Math.round(metric.value),
            custom_map: { metric_id: 'fid' },
            attribution: metric.attribution
          })
        }
        
        if (process.env.NODE_ENV === 'development') {
          console.log('FID:', metric)
        }
      })

      getFCP((metric) => {
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'performance',
            event_label: 'FCP',
            value: Math.round(metric.value),
            custom_map: { metric_id: 'fcp' },
            attribution: metric.attribution
          })
        }
        
        if (process.env.NODE_ENV === 'development') {
          console.log('FCP:', metric)
        }
      })

      getLCP((metric) => {
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'performance',
            event_label: 'LCP',
            value: Math.round(metric.value),
            custom_map: { metric_id: 'lcp' },
            attribution: metric.attribution
          })
        }
        
        if (process.env.NODE_ENV === 'development') {
          console.log('LCP:', metric)
        }
      })

      getTTFB((metric) => {
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'performance',
            event_label: 'TTFB',
            value: Math.round(metric.value),
            custom_map: { metric_id: 'ttfb' },
            attribution: metric.attribution
          })
        }
        
        if (process.env.NODE_ENV === 'development') {
          console.log('TTFB:', metric)
        }
      })
    })

    // Track additional performance metrics
    if (typeof window !== 'undefined' && 'navigation' in window.performance) {
      const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      
      if (navigation) {
        // DNS lookup time
        const dnsTime = navigation.domainLookupEnd - navigation.domainLookupStart
        
        // Connection time
        const connectionTime = navigation.connectEnd - navigation.connectStart
        
        // SSL time (if HTTPS)
        const sslTime = navigation.connectEnd - navigation.secureConnectionStart
        
        // DOM Content Loaded time
        const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.navigationStart
        
        // Track these metrics
        if (window.gtag) {
          window.gtag('event', 'navigation_timing', {
            event_category: 'performance',
            dns_time: Math.round(dnsTime),
            connection_time: Math.round(connectionTime),
            ssl_time: Math.round(sslTime > 0 ? sslTime : 0),
            dom_content_loaded: Math.round(domContentLoaded)
          })
        }
      }
    }

    // Track resource loading performance
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'resource') {
          const resourceEntry = entry as PerformanceResourceTiming
          
          // Track slow resources (>1s)
          if (resourceEntry.duration > 1000) {
            if (window.gtag) {
              window.gtag('event', 'slow_resource', {
                event_category: 'performance',
                event_label: resourceEntry.name,
                value: Math.round(resourceEntry.duration)
              })
            }
          }
        }
      })
    })

    observer.observe({ entryTypes: ['resource'] })

    return () => {
      observer.disconnect()
    }
  }, [])

  return null
}