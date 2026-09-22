import type { CSSProperties } from 'react'

interface MediaProps { src?: string; alt: string; aspectRatio?: string }

export function Media({ src, alt, aspectRatio = '16 / 9' }: MediaProps) {
  const style = { aspectRatio } as CSSProperties
  if (!src) {
    return (
      <div className="ordem-media-placeholder" style={style} aria-label={alt}>
        <span>{alt}</span>
      </div>
    )
  }
  return <img src={src} alt={alt} className="ordem-media" style={style} />
}
