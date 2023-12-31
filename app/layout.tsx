import './globals.css'
import type { Metadata } from 'next'
import { roboto } from '@/utils/fonts'
import { GlobalProvider } from './GlobalProvider'
import Navbar from '@/components/Navbar'
import '@fortawesome/fontawesome-svg-core'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

export const metadata: Metadata = {
  title: 'Fake Store',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={roboto.className}>
            <GlobalProvider>
                <Navbar />
                {children}
            </GlobalProvider>
        </body>
    </html>
  )
}
