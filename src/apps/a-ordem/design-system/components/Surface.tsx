import type { HTMLAttributes, ReactNode } from 'react'

type SurfaceTone = 'default' | 'muted' | 'dark' | 'accent'
interface SurfaceProps extends HTMLAttributes<HTMLDivElement> { 
  tone?: SurfaceTone
  children: ReactNode
}

export function Surface({ tone = 'default', className = '', children, ...props }: SurfaceProps) {
  return (
    <div className={`ordem-surface ordem-surface--${tone} ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}
