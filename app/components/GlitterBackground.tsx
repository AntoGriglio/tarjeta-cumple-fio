'use client'

import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'

export default function GlitterBackground() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        background: {
          color: '#000000',
        },
        particles: {
          number: {
            value: 5500, // cantidad moderada y fluida
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: ['#ffffff', '#c0c0c0'], // distintos tonos plateados
          },
          shape: {
            type: ['circle'],
          },
          opacity: {
            value: 0.9,
            random: false, // todos con opacidad similar
          },
          size: {
            value: { min: 1.5, max: 3.5 },
            random: true,
            anim: {
              enable: false, // sin animación de tamaño
            },
          },
          move: {
            enable: true,
            speed: 0.35, // suave
            direction: 'bottom',
            straight: true, // ✅ bajan en línea recta
            random: false,  // ❌ sin saltos ni desvíos
            outModes: {
              default: 'out',
            },
            gravity: {
              enable: true,
              acceleration: 0.25,
              maxSpeed: 0.6, // velocidad constante y tranquila
            },
          },
        },
        detectRetina: true,
      }}
    />
  )
}
