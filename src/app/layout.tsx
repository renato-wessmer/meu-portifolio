import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Renato Wéssmėr', // Nome que aparece na aba do navegador
  description: 'Renato Wéssmėr é um estudante de desenvolvimento de software e cloud', //ajuda no seo da página e descreve brevemente sobre o que se trata o projeto
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
