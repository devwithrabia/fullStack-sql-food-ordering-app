import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Notification from '@/components/Notification'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { QueryProvider } from '@/components/QueryProvider'
import AuthProvider from '@/components/AuthProvider'
import { ProgressBar } from '@/components/ProgressBar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MASSIMO',
  description: 'Best food in town!'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthProvider>
          <QueryProvider>
            <ProgressBar />
            <div>
              <Notification />

              <Navbar />

              {children}

              <Footer />
            </div>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
