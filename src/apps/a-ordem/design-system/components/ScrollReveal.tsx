import { useEffect, useRef, useState } from 'react'
import type { HTMLAttributes, ReactNode } from 'react'

interface ScrollRevealProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  delay?: number
}

export function ScrollReveal({ children, delay = 0, className = '', ...props }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => setIsVisible(true), delay)
          return () => clearTimeout(timer)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`ordem-reveal ${isVisible ? 'ordem-reveal--visible' : 'ordem-reveal--pending'} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  )
}
