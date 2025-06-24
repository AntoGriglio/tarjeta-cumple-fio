'use client'

import { useEffect, useState, useRef } from 'react'
import RSVPForm from './components/RSVPForm'
import GlitterBackground from './components/GlitterBackground'

export default function Home() {
  const eventDate = new Date('2025-08-15T20:00:00').getTime()
  const [timeLeft, setTimeLeft] = useState('')
  const glowRef = useRef<HTMLDivElement | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = eventDate - now

      if (distance < 0) {
        setTimeLeft('¡Llegó el gran día!')
        clearInterval(timer)
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((distance / (1000 * 60)) % 60)
      const seconds = Math.floor((distance / 1000) % 60)

      setTimeLeft(`${days} días, ${hours}h ${minutes}m ${seconds}s`)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return

    let x = 50, y = 50, direction = 1

    const animate = () => {
      x += 0.05 * direction
      y += 0.03 * direction

      if (x > 55 || x < 45) direction *= -1

      glow.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.35), transparent 70%)`
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.warn('Autoplay bloqueado:', err))
    }
  }

  const sections = [
    {
      id: 'fecha',
      content: (
        <>
          <div className="mb-8">
            <h1 className="silver-glow text-8xl font-extrabold tracking-tight text-gray-500 drop-shadow-[0_0_8px_rgba(200,200,200,0.5)]">15</h1>
            <p className="silver-glow text-4xl italic font-light text-gray-500 drop-shadow-[0_0_6px_rgba(200,200,200,0.4)]">Fiorella</p>
          </div>
          <div className="w-full max-w-sm flex justify-between items-center border-t border-b border-gray-300 py-8">
            <div className="flex-1 text-center">
              <p className="text-lg font-semibold">Sábado</p>
            </div>
            <div className="flex-1 text-center border-l border-r border-gray-300 px-4">
              <p className="text-lg font-semibold mb-1">Agosto</p>
              <p className="silver-glow text-4xl font-bold text-gray-500 drop-shadow-[0_0_6px_rgba(200,200,200,0.4)]">16</p>
            </div>
            <div className="flex-1 text-center">
              <p className="text-lg font-semibold">Hora</p>
              <p className="text-xl font-bold mt-1">20:00</p>
            </div>
          </div>
        </>
      )
    },
    {
      id: 'cuenta',
      content: (
        <div className="w-full max-w-sm flex flex-col items-center border-t border-b border-gray-300 py-12">
          <h2 className="silver-glow text-4xl italic font-light mb-6 text-gray-500 drop-shadow-[0_0_6px_rgba(200,200,200,0.5)]">Falta muy poco...</h2>
          <p className="text-3xl font-bold">{timeLeft}</p>
        </div>
      )
    },
    {
      id: 'lugar',
      content: (
        <div className="w-full max-w-sm flex flex-col items-center border-t border-b border-gray-300 py-12">
          <p className="silver-glow text-2xl font-semibold text-gray-500 drop-shadow-[0_0_6px_rgba(200,200,200,0.5)] mb-2">📍 Allá Bodegón</p>
          <a href="https://www.instagram.com/alla.bodegon" target="_blank" rel="noopener noreferrer" className="text-sm underline hover:opacity-80 mb-4">@alla.bodegon</a>
          <div className="rounded-xl overflow-hidden shadow border border-gray-300 mt-2 w-full">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2087.4715537353964!2d-64.49957892853769!3d-31.41509924952632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d666a7035ab01%3A0x9f44f8ee99946c89!2sAv.%20Uruguay%20338%2C%20X5152%20Villa%20Carlos%20Paz%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1750627199918!5m2!1ses!2sar" width="400" height="300" loading="lazy"></iframe>
          </div>
          <p className="text-sm mt-6">
            Te podés alojar en <a href="https://www.instagram.com/hostaldelacosta_vcp" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">@hostaldelacosta_vcp</a>
          </p>
        </div>
      )
    },
    {
      id: 'dresscode',
      content: (
        <div className="w-full max-w-sm flex flex-col items-center border-t border-b border-gray-300 py-12">
          <h2 className="silver-glow text-2xl font-semibold mb-4 text-gray-500 drop-shadow-[0_0_6px_rgba(200,200,200,0.4)]">🎀 Dress Code</h2>
          <p className="text-sm mb-6">¿Querés inspirarte para tu look? Acá te dejamos ideas:</p>
          <a href="https://pin.it/2DrLz1i2W" target="_blank" rel="noopener noreferrer" className="text-sm px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">Ver inspiración</a>
        </div>
      )
    },
    {
      id: 'playlist',
      content: (
        <div className="w-full max-w-sm flex flex-col items-center border-t border-b border-gray-300 py-12">
          <h2 className="silver-glow text-2xl font-semibold mb-4 text-gray-500 drop-shadow-[0_0_6px_rgba(200,200,200,0.4)]">🎶 ¡Sumá tu canción!</h2>
          <p className="text-sm mb-6">Ayudanos a armar la playlist para bailar toda la noche 💃🕺</p>
          <a href="https://open.spotify.com/playlist/4J26WFxMUA2TXKBGonVxTw?si=10171ab7634d4698&pt=9766b3073d96fa478995ede4120c0355" target="_blank" rel="noopener noreferrer" className="text-sm px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">Agregar música a la playlist</a>
        </div>
      )
    },
    {
      id: 'confirmacion',
      content: (
        <>
          <div className="mb-12">
            <h1 className="silver-glow text-6xl font-extrabold tracking-tight text-gray-500 drop-shadow-[0_0_8px_rgba(200,200,200,0.5)]">¿Venís?</h1>
            <p className="text-xl italic font-light text-gray-500 drop-shadow-[0_0_6px_rgba(200,200,200,0.4)]">Confirmá tu asistencia</p>
          </div>
          <div className="w-full max-w-sm border-t border-b border-gray-300 py-10 px-4">
            <RSVPForm />
          </div>
        </>
      )
    }
  ]

   return (
    <>
      <audio ref={audioRef} src="/ojos.mp3" preload="auto" />
      <style jsx global>{`
        .section-border-glitter {
          position: relative;
          z-index: 1;
        }
        .section-border-glitter::before {
          content: '';
          position: absolute;
          inset: 0;
          border: 3px solid transparent;
          border-radius: 12px;
          pointer-events: none;
          background: linear-gradient(45deg, rgba(255,255,255,0.3), rgba(192,192,192,0.4), rgba(255,255,255,0.3));
          background-size: 300% 300%;
          animation: borderGlitter 4s ease-in-out infinite;
          mix-blend-mode: screen;
          z-index: -1;
        }
        .silver-glow {
          background: linear-gradient(90deg, #999, #ccc, #999);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 4s linear infinite;
        }
        @keyframes borderGlitter {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes shine {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>

      <section className="min-h-screen flex flex-col justify-center items-center text-white text-center bg-cover bg-center relative">
        <GlitterBackground />
        <div className="bg-black bg-opacity-10 w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-[10rem] font-extrabold tracking-tight drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] font-serif">15</h1>
          <p className="text-[4rem] italic font-light mt-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] font-serif ">Fiorella</p>
          <p onClick={playAudio} className="text-sm mt-6 animate-bounce drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] cursor-pointer">Deslizá para ver más ↓</p>
        </div>
      </section>

      {sections.map((section) => (
        <div key={section.id}>
          <div className="h-32 md:h-48 relative overflow-hidden">
            <GlitterBackground />
          </div>
          <section className="section-border-glitter relative min-h-[70vh] bg-white text-black flex flex-col justify-center items-center px-6 text-center font-serif overflow-hidden">
            <div
              ref={glowRef}
              className="absolute inset-0 pointer-events-none z-0"
              style={{ transition: 'background 1s ease-in-out', mixBlendMode: 'screen' }}
            />
            {section.content}
          </section>
        </div>
      ))}
    </>
  )
}
