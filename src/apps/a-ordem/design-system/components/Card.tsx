import type { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> { children: ReactNode }

export function Card({ className = '', children, ...props }: CardProps) {
  return (
    <div className={`ordem-card ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}
