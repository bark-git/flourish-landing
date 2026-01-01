import type { Metadata } from 'next'
import { Lora, Work_Sans } from 'next/font/google'
import './globals.css'

const lora = Lora({ 
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

const workSans = Work_Sans({ 
  subsets: ['latin'],
  variable: '--font-work-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Flourish - The Holistic PCOS Companion',
  description: 'The first holistic PCOS companion designed for whole-person wellness, not just symptom management.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${lora.variable} ${workSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
