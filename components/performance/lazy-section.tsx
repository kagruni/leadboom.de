'use client'

import { ReactNode, useRef, useEffect, useState } from 'react'

interface LazySectionProps {
  children: ReactNode
  rootMargin?: string
  threshold?: number
  fallback?: ReactNode
  className?: string
}

export function LazySection({ 
  children, 
  rootMargin = '100px',
  threshold = 0.1,
  fallback = null,
  className = ''
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasBeenVisible, setHasBeenVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenVisible) {
          setIsVisible(true)
          setHasBeenVisible(true)
          observer.unobserve(element)
        }
      },
      {
        rootMargin,
        threshold
      }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [rootMargin, threshold, hasBeenVisible])

  return (
    <div ref={ref} className={className}>
      {isVisible || hasBeenVisible ? children : fallback}
    </div>
  )
}

// Skeleton loader component
export function SectionSkeleton({ height = '200px' }: { height?: string }) {
  return (
    <div className="animate-pulse" style={{ height }}>
      <div className="h-full bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
    </div>
  )
}