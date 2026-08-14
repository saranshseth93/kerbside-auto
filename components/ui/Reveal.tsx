'use client'

import { useEffect, useRef, type ReactNode } from 'react'

/**
 * Scroll reveal with no animation library.
 *
 * An IntersectionObserver adds one class and then stops observing; the
 * animation itself is a CSS keyframe in globals.css, and
 * prefers-reduced-motion turns it off there. This is the whole reason the
 * site ships no motion runtime.
 */
export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        el.classList.add('is-visible')
        observer.disconnect()
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.05 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  )
}
