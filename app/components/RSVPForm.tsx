'use client'

import { useState } from 'react'

const GOOGLE_SHEET_ENDPOINT = 'https://script.google.com/macros/s/TU_ID_WEBAPP/exec'

export default function RSVPForm() {
  const [name, setName] = useState('')
  const [attending, setAttending] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !attending) return

    try {
      await fetch(GOOGLE_SHEET_ENDPOINT, {
        method: 'POST',
        body: JSON.stringify({ name, attending }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      setSubmitted(true)
    } catch (error) {
      console.error('Error al enviar:', error)
      alert('Ocurrió un error. Probá de nuevo.')
    }
  }

  if (submitted) {
    return (
      <div className="bg-emerald-100 p-4 rounded-xl shadow text-emerald-800 text-sm">
        ¡Gracias por confirmar, {name}!
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-black bg-opacity-30 rounded-2xl shadow-lg p-6 space-y-4 border border-white">
      <h2 className="text-lg font-semibold text-white font-serif">Confima tu presencia. Venis...</h2>
      <input
        type="text"
        placeholder="Tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 rounded-md border border-gray-300 text-sm bg-black bg-opacity-20 text-white placeholder-white/70"
      />
      <div className="flex justify-center gap-6 text-white text-sm font-medium">
        <label className="flex items-center gap-2">
          <input type="radio" value="sí" checked={attending === 'sí'} onChange={() => setAttending('sí')} />
          Sí
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" value="no" checked={attending === 'no'} onChange={() => setAttending('no')} />
          No
        </label>
      </div>
      <button
        type="submit"
        className="bg-white text-black w-full py-2 rounded-full hover:bg-gray-200 transition text-sm font-bold"
      >
        Confirmar
      </button>
    </form>
  )
}
