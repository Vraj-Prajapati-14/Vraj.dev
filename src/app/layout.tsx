import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { LiveGridBackground } from '@/components/ui/live-grid-background'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vraj Prajapati - Full Stack Developer',
  description: 'Full Stack Developer specializing in MERN stack, React, Node.js, and modern web technologies. Passionate about building scalable applications and innovative solutions.',
  keywords: ['Full Stack Developer', 'React', 'Node.js', 'MERN Stack', 'TypeScript', 'JavaScript', 'Web Development'],
  authors: [{ name: 'Vraj Prajapati' }],
  creator: 'Vraj Prajapati',
  publisher: 'Vraj Prajapati',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vraj.dev',
    title: 'Vraj Prajapati - Full Stack Developer',
    description: 'Full Stack Developer specializing in MERN stack, React, Node.js, and modern web technologies.',
    siteName: 'Vraj Prajapati Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vraj Prajapati - Full Stack Developer',
    description: 'Full Stack Developer specializing in MERN stack, React, Node.js, and modern web technologies.',
  },
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LiveGridBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
