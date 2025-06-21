'use client'

import { useEffect, useState } from 'react'
import RSVPForm from './components/RSVPForm'
import GlitterBackground from './components/GlitterBackground'

export default function Home() {
  const eventDate = new Date('2025-08-15T20:00:00').getTime()
  const [timeLeft, setTimeLeft] = useState('')

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

  return (
    <>
      <GlitterBackground />

      {/* PORTADA animada con fondo oscuro */}
      <section className="min-h-screen flex flex-col justify-center items-center text-white text-center bg-cover bg-center">
        <div className="bg-black bg-opacity-10 w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-[10rem] font-bold tracking-tight drop-shadow-[0_0_25px_rgba(255,255,255,0.9)]">15</h1>
          <p className="text-[4rem] italic font-light mt-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]">Fiorella</p>
          <p className="text-sm mt-6 animate-bounce drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">Deslizá para ver más ↓</p>
        </div>
      </section>

      {/* FECHA */}
      <section className="min-h-screen bg-white text-black flex flex-col justify-center items-center px-6 text-center font-serif">
        <div className="mb-12">
          <h1 className="text-8xl font-extrabold tracking-tight text-gray-500 drop-shadow-[0_0_8px_rgba(200,200,200,0.5)]">15</h1>
          <p className="text-4xl italic font-light text-gray-500 drop-shadow-[0_0_6px_rgba(200,200,200,0.4)]">Fiorella</p>
        </div>
        <div className="w-full max-w-sm flex justify-between items-center border-t border-b border-gray-300 py-8">
          <div className="flex-1 text-center">
            <p className="text-lg font-semibold">Sábado</p>
          </div>
          <div className="flex-1 text-center border-l border-r border-gray-300 px-4">
            <p className="text-lg font-semibold mb-1">Agosto</p>
            <p className="text-4xl font-bold text-gray-500 drop-shadow-[0_0_6px_rgba(200,200,200,0.4)]">16</p>
          </div>
          <div className="flex-1 text-center">
            <p className="text-lg font-semibold">Hora:</p>
            <p className="text-xl font-bold mt-1">20:00</p>
          </div>
        </div>
      </section>

      {/* CUENTA REGRESIVA */}
      <section className="min-h-screen bg-white text-black flex flex-col justify-center items-center px-6 text-center font-serif">
        <div className="w-full max-w-sm flex flex-col items-center border-t border-b border-gray-300 py-12">
          <h2 className="text-4xl italic font-light mb-6 text-gray-500 drop-shadow-[0_0_6px_rgba(200,200,200,0.5)]">Falta muy poco...</h2>
          <p className="text-3xl font-bold">{timeLeft}</p>
        </div>
      </section>

      {/* LUGAR */}
      <section className="min-h-screen bg-white text-black flex flex-col justify-center items-center px-6 text-center font-serif">
        <div className="w-full max-w-sm flex flex-col items-center border-t border-b border-gray-300 py-12">
          <p className="text-2xl font-semibold text-gray-500 drop-shadow-[0_0_6px_rgba(200,200,200,0.5)] mb-2">📍 Allá Bodegón</p>
          <a
            href="https://www.instagram.com/alla.bodegon?igsh=bnZ2bzZhaGs4OTAw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline hover:opacity-80 mb-4"
          >
            @alla.bodegon
          </a>
          <div className="rounded-xl overflow-hidden shadow border border-gray-300 mt-2 w-full">
            <iframe
              className="w-full h-64"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1702.486263522603!2d-64.498432!3d-31.414883!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d671d1ba6b25f%3A0xf574526d3ab3c047!2sAll%C3%A1%20Lounge%20%26%20Grill!5e0!3m2!1ses!2sar!4v1750433749670!5m2!1ses!2sar"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-sm mt-6">
            Te podés alojar en&nbsp;
            <a
              href="https://www.instagram.com/hostaldelacosta_vcp?igsh=MTE5NXY4enl2ZjR0eg=="
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80"
            >
              @hostaldelacosta_vcp
            </a>
          </p>
        </div>
      </section>

      {/* DRESS CODE */}
      <section className="min-h-screen bg-white text-black flex flex-col justify-center items-center px-6 text-center font-serif">
        <div className="w-full max-w-sm flex flex-col items-center border-t border-b border-gray-300 py-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-500 drop-shadow-[0_0_6px_rgba(200,200,200,0.4)]">🎀 Dress Code</h2>
          <p className="text-sm mb-6">¿Querés inspirarte para tu look? Acá te dejamos ideas:</p>
          <a
            href="https://pin.it/2DrLz1i2W"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
          >
            Ver inspiración
          </a>
        </div>
      </section>

      {/* PLAYLIST */}
      <section className="min-h-screen bg-white text-black flex flex-col justify-center items-center px-6 text-center font-serif">
        <div className="w-full max-w-sm flex flex-col items-center border-t border-b border-gray-300 py-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-500 drop-shadow-[0_0_6px_rgba(200,200,200,0.4)]">🎶 ¡Sumá tu canción!</h2>
          <p className="text-sm mb-6">Ayudanos a armar la playlist para bailar toda la noche 💃🕺</p>
          <a
            href="https://open.spotify.com/playlist/4NNnXadf2nbV3n9chFq92G?si=6e20312ff96c4296"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
          >
            Agregar música a la playlist
          </a>
        </div>
      </section>

      {/* CONFIRMACIÓN */}
      <section className="min-h-screen bg-white text-black flex flex-col justify-center items-center px-6 text-center font-serif">
        <div className="mb-12">
          <h1 className="text-6xl font-extrabold tracking-tight text-gray-500 drop-shadow-[0_0_8px_rgba(200,200,200,0.5)]">¿Venís?</h1>
          <p className="text-xl italic font-light text-gray-500 drop-shadow-[0_0_6px_rgba(200,200,200,0.4)]">Confirmá tu asistencia</p>
        </div>
        <div className="w-full max-w-sm border-t border-b border-gray-300 py-10 px-4">
          <RSVPForm />
        </div>
      </section>
    </>
  )
}
