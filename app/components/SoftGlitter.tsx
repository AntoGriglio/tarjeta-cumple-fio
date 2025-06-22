'use client'

import { useEffect, useRef } from 'react'

export default function SoftGlitterWhite() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return

    let x = 50, y = 50, direction = 1

    const animate = () => {
      x += 0.05 * direction
      y += 0.03 * direction

      if (x > 55 || x < 45) direction *= -1

      glow.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.4), transparent 70%)`
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <div
      ref={glowRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{
        transition: 'background 1s ease-in-out',
        mixBlendMode: 'screen'
      }}
    />
  )
}
