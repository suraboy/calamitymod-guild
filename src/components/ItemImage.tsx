'use client'

import { useState } from 'react'

type Stage = 'local' | 'wiki' | 'failed'

export default function ItemImage({
  src,
  fallbackSrc,
  alt,
  size = 20,
}: {
  src: string
  fallbackSrc?: string
  alt: string
  size?: number
}) {
  const [stage, setStage] = useState<Stage>('local')

  const handleError = () => {
    if (stage === 'local' && fallbackSrc) {
      setStage('wiki')
    } else {
      setStage('failed')
    }
  }

  if (stage === 'failed') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 16 16"
        fill="none"
        style={{ width: size, height: size, opacity: 0.2 }}
      >
        <rect x="1" y="1" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 6a3 3 0 0 1 6 0c0 2-3 2-3 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="8" cy="13" r="0.75" fill="currentColor" />
      </svg>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={stage === 'wiki' ? fallbackSrc : src}
      alt={alt}
      width={size}
      height={size}
      style={{ width: size, height: size, imageRendering: 'pixelated' }}
      className="object-contain"
      onError={handleError}
    />
  )
}
