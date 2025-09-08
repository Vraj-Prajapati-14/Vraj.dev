import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { LiveGridBackground } from '@/components/ui/live-grid-background'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Vraj Prajapati - Full Stack Developer | MERN Stack Expert',
    template: '%s | Vraj Prajapati'
  },
  description: 'Experienced Full Stack Developer specializing in MERN stack, React.js, Node.js, TypeScript, and modern web technologies. Building scalable applications with 2+ years of experience. Available for freelance projects.',
  keywords: [
    'Full Stack Developer',
    'React Developer',
    'Node.js Developer', 
    'MERN Stack Developer',
    'TypeScript Developer',
    'JavaScript Developer',
    'Web Developer',
    'Frontend Developer',
    'Backend Developer',
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'PostgreSQL',
    'TypeScript',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Next.js',
    'Portfolio',
    'Freelance Developer',
    'Web Development Services',
    'Software Engineer',
    'Ahmedabad Developer',
    'India Developer'
  ],
  authors: [{ name: 'Vraj Prajapati', url: 'https://vraj-prajapati.dev' }],
  creator: 'Vraj Prajapati',
  publisher: 'Vraj Prajapati',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://vraj-prajapati.dev',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vraj-prajapati.dev',
    title: 'Vraj Prajapati - Full Stack Developer | MERN Stack Expert',
    description: 'Experienced Full Stack Developer specializing in MERN stack, React.js, Node.js, TypeScript, and modern web technologies. Building scalable applications with 2+ years of experience.',
    siteName: 'Vraj Prajapati Portfolio',
    images: [
      {
        url: 'https://vraj-prajapati.dev/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vraj Prajapati - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vraj Prajapati - Full Stack Developer | MERN Stack Expert',
    description: 'Experienced Full Stack Developer specializing in MERN stack, React.js, Node.js, TypeScript, and modern web technologies.',
    creator: '@vrajprajapati',
    images: ['https://vraj-prajapati.dev/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'Portfolio Website',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Vraj Prajapati",
    "jobTitle": "Full Stack Developer",
    "description": "Experienced Full Stack Developer specializing in MERN stack, React.js, Node.js, TypeScript, and modern web technologies.",
    "url": "https://vraj-prajapati.dev",
    "image": "https://vraj-prajapati.dev/og-image.jpg",
    "sameAs": [
      "https://linkedin.com/in/vraj-prajapati-4b6130232",
      "https://github.com/vraj-prajapati"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "addressCountry": "India"
    },
    "email": "prajapativraj147@gmail.com",
    "telephone": "+91-9664860627",
    "knowsAbout": [
      "React.js",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "MongoDB",
      "PostgreSQL",
      "Express.js",
      "Next.js",
      "MERN Stack",
      "Web Development",
      "Full Stack Development"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Chandubhai S Patel Institute of Technology (CHARUSAT)"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "BACANCY Technologies"
    }
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
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
