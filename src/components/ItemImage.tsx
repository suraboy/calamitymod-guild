'use client'

import { useState } from 'react'

export default function ItemImage({
  src,
  alt,
  size = 20,
}: {
  src: string
  alt: string
  size?: number
}) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 16 16"
        fill="none"
        style={{ width: size, height: size, opacity: 0.3 }}
        className="text-slate-400"
      >
        <rect x="1" y="1" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <text x="8" y="11" textAnchor="middle" fontSize="8" fill="currentColor" fontWeight="bold">?</text>
      </svg>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      style={{ width: size, height: size, imageRendering: 'pixelated' }}
      className="object-contain"
      onError={() => setFailed(true)}
    />
  )
}
