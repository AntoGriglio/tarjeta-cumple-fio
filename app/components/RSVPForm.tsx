'use client'

import { useState } from 'react'

const GOOGLE_SHEET_ENDPOINT = 'https://script.google.com/macros/s/AKfycbyAvyjOPRF8keH2D2tw2ngA-p5pZisk9QdeGO-wBpkB1e6duOPUeyzmCCAoAkXMRTvxlA/exec'

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
  body: new URLSearchParams({ name, attending }), // 👈 importante
})


      setSubmitted(true)
    } catch (error) {
      console.error('Error al enviar:', error)
      alert('Ocurrió un error. Probá de nuevo.')
    }
  }

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 text-sm px-4 py-3 rounded-xl shadow font-serif">
        ¡Gracias por confirmar, <span className="font-semibold">{name}</span>!
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white bg-opacity-60 backdrop-blur-md border border-gray-300 rounded-2xl shadow-xl p-6 space-y-6 font-serif"
    >
      <h2 className="text-xl font-semibold text-gray-700 drop-shadow-sm">Confirmá tu presencia</h2>

      <input
        type="text"
        placeholder="Tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-3 rounded-lg border border-gray-300 text-sm bg-white bg-opacity-40 placeholder-gray-500 text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
      />

      <div className="flex justify-center gap-8 text-sm font-medium text-gray-700">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            value="sí"
            checked={attending === 'sí'}
            onChange={() => setAttending('sí')}
            className="accent-gray-600"
          />
          Sí
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            value="no"
            checked={attending === 'no'}
            onChange={() => setAttending('no')}
            className="accent-gray-600"
          />
          No
        </label>
      </div>

      <button
        type="submit"
        className="w-full py-2 rounded-full bg-gradient-to-r from-gray-200 to-white text-black font-semibold hover:from-white hover:to-gray-100 transition shadow-md border border-gray-300"
      >
        Confirmar
      </button>
    </form>
  )
}
