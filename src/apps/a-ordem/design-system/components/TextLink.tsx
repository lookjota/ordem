import type { AnchorHTMLAttributes, ReactNode } from 'react'

interface TextLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> { children: ReactNode }

export function TextLink({ className = '', children, ...props }: TextLinkProps) {
  return (
    <a className={`ordem-link ${className}`.trim()} {...props}>
      {children}
    </a>
  )
}
