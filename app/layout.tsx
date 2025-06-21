import './globals.css'

export const metadata = {
  title: "Fiorella - Mis 15",
  description: "Invitación digital de cumpleaños",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}