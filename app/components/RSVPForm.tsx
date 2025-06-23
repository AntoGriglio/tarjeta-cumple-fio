'use client'

import { useState } from 'react'

const GOOGLE_SHEET_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbwBkJ8xHN6h04YFAl_05tZHiCOB1u14WCaDkLcAVmDf7IvAn07YndUVPDmUoOtSDBcy/exec'

export default function TestForm() {
  const [msg, setMsg] = useState('')
  const [name, setName] = useState('')
  const [attending, setAttending] = useState('sí')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch(GOOGLE_SHEET_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ name, attending }),
      })

      const text = await res.text()
      console.log('Respuesta del servidor:', text)
      setMsg(text === 'OK' ? '¡Gracias por confirmar!' : text)
    } catch (err) {
      console.error(err)
      setMsg('Error al enviar')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm w-full mx-auto bg-white bg-opacity-60 backdrop-blur-md p-6 rounded-2xl shadow-xl space-y-6 font-serif"
    >
      <h2 className="text-xl font-semibold text-gray-700 text-center">Confirmá tu presencia</h2>

      <input
        type="text"
        placeholder="Tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-3 rounded-lg border border-gray-300 text-sm bg-white bg-opacity-40 placeholder-gray-500 text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
      />

      <div className="flex justify-center gap-6 text-sm text-gray-700">
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

      {msg && (
        <p className="text-center text-sm font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg p-2 shadow">
          {msg}
        </p>
      )}
    </form>
  )
}
