'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void
    dataLayer: any[]
  }
}

// Event tracking types
interface EventParams {
  action: string
  category: string
  label?: string
  value?: number
}

interface ConversionParams {
  event_category: 'engagement' | 'conversion' | 'interaction'
  event_label?: string
  value?: number
}

// Generic event tracking
export function trackEvent({ action, category, label, value }: EventParams) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    })
  }
}

// Specific tracking functions based on success metrics from the plan
export const Analytics = {
  // Demo request tracking (primary conversion)
  trackDemoRequest: (source?: string) => {
    trackEvent({
      action: 'demo_request',
      category: 'conversion',
      label: source || 'unknown'
    })
    
    // Enhanced conversion tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: process.env.NEXT_PUBLIC_GA_CONVERSION_ID,
        event_category: 'conversion',
        event_label: 'demo_request'
      })
    }
  },

  // Platform module engagement (section 9 metrics)
  trackModuleEngagement: (moduleName: string, action: 'view' | 'click' | 'hover') => {
    trackEvent({
      action: `module_${action}`,
      category: 'engagement',
      label: moduleName
    })
  },

  // Solution page visits (industry-specific)
  trackSolutionPageView: (solutionType: string) => {
    trackEvent({
      action: 'solution_page_view',
      category: 'engagement', 
      label: solutionType
    })
  },

  // CTA button interactions
  trackCTAClick: (ctaType: 'demo' | 'platform' | 'contact' | 'pricing', location: string) => {
    trackEvent({
      action: 'cta_click',
      category: 'interaction',
      label: `${ctaType}_${location}`
    })
  },

  // Resource downloads (success metric from plan)
  trackResourceDownload: (resourceType: string, resourceName: string) => {
    trackEvent({
      action: 'resource_download',
      category: 'engagement',
      label: `${resourceType}_${resourceName}`
    })
  },

  // Page scroll depth (engagement metric)
  trackScrollDepth: (depth: 25 | 50 | 75 | 100) => {
    trackEvent({
      action: 'scroll_depth',
      category: 'engagement',
      label: `${depth}_percent`,
      value: depth
    })
  },

  // Time on page milestones
  trackTimeOnPage: (seconds: number) => {
    const milestones = [30, 60, 120, 300] // 30s, 1m, 2m, 5m
    if (milestones.includes(seconds)) {
      trackEvent({
        action: 'time_on_page',
        category: 'engagement',
        label: `${seconds}_seconds`,
        value: seconds
      })
    }
  },

  // Form interactions
  trackFormStart: (formType: string) => {
    trackEvent({
      action: 'form_start',
      category: 'interaction',
      label: formType
    })
  },

  trackFormComplete: (formType: string) => {
    trackEvent({
      action: 'form_complete',
      category: 'conversion',
      label: formType
    })
  },

  // Video interactions
  trackVideoPlay: (videoTitle: string) => {
    trackEvent({
      action: 'video_play',
      category: 'engagement',
      label: videoTitle
    })
  },

  // Search interactions
  trackSearch: (query: string, resultsCount: number) => {
    trackEvent({
      action: 'search',
      category: 'interaction',
      label: query,
      value: resultsCount
    })
  }
}

// Hook for tracking page views
export function usePageTracking() {
  useEffect(() => {
    const handleRouteChange = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || '', {
          page_title: document.title,
          page_location: window.location.href,
        })
      }
    }

    // Track initial page load
    handleRouteChange()

    // Listen for route changes (for SPA navigation)
    window.addEventListener('popstate', handleRouteChange)
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange)
    }
  }, [])
}

// Hook for scroll depth tracking
export function useScrollTracking() {
  useEffect(() => {
    const milestones = [25, 50, 75, 100]
    const triggered = new Set<number>()

    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = Math.round((scrollTop / docHeight) * 100)

      milestones.forEach(milestone => {
        if (scrollPercent >= milestone && !triggered.has(milestone)) {
          triggered.add(milestone)
          Analytics.trackScrollDepth(milestone as 25 | 50 | 75 | 100)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
}

// Hook for time on page tracking
export function useTimeTracking() {
  useEffect(() => {
    const startTime = Date.now()
    const intervals: NodeJS.Timeout[] = []

    // Set up intervals for different milestones
    const milestones = [30, 60, 120, 300] // 30s, 1m, 2m, 5m
    
    milestones.forEach(seconds => {
      const timeout = setTimeout(() => {
        Analytics.trackTimeOnPage(seconds)
      }, seconds * 1000)
      intervals.push(timeout)
    })

    return () => {
      intervals.forEach(clearTimeout)
    }
  }, [])
}

// Component for automatic page tracking
export function PageTracker() {
  usePageTracking()
  useScrollTracking() 
  useTimeTracking()
  
  return null
}