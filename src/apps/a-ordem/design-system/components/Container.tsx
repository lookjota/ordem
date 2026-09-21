import type { HTMLAttributes, ReactNode } from 'react'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> { children: ReactNode }

export function Container({ className = '', children, ...props }: ContainerProps) {
  return (
    <div className={`ordem-container ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}
