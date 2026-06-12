import type { Metadata } from 'next'
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { LiveGridBackground } from '@/components/ui/live-grid-background'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', weight: ['400','600','700','900'] })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', weight: ['400','500','700'] })

export const metadata: Metadata = {
  title: {
    default: 'Vraj Prajapati - Full Stack Developer | Freelance Web Developer | MERN Stack Expert',
    template: '%s | Vraj Prajapati'
  },
  description: 'Vraj Prajapati - Experienced Full Stack Developer & Freelancer specializing in MERN stack, React.js, Node.js, TypeScript. Building scalable web applications, e-commerce platforms, and startup solutions. Available for freelance projects, web development services, and startup consulting in Ahmedabad, Gujarat, India.',
  keywords: [
    // Name variations
    'Vraj Prajapati',
    'Vraj',
    'Vraj Developer',
    'Vraj Prajapati Portfolio',
    'Vraj Prajapati Developer',
    'Vraj Full Stack Developer',
    'Vraj Web Developer',
    'Vraj Freelance Developer',
    'Vraj MERN Stack',
    'Vraj React Developer',
    
    // Core Developer Keywords
    'Full Stack Developer',
    'MERN Stack Developer',
    'React Developer',
    'Node.js Developer',
    'TypeScript Developer',
    'JavaScript Developer',
    'Web Developer',
    'Frontend Developer',
    'Backend Developer',
    'Software Engineer',
    'Software Developer',
    
    // Freelance & Services
    'Freelance Developer',
    'Freelance Web Developer',
    'Freelance Full Stack Developer',
    'Freelance React Developer',
    'Freelance MERN Stack Developer',
    'Web Development Services',
    'Freelance Web Development',
    'Hire Freelance Developer',
    'Remote Developer',
    'Contract Developer',
    
    // Startup & Business
    'Startup Developer',
    'Startup Web Developer',
    'Startup Full Stack Developer',
    'Web Development for Startups',
    'MVP Development',
    'Startup Technical Consultant',
    'Tech Startup Developer',
    'Startup CTO Services',
    
    // Technologies
    'React.js',
    'React Developer',
    'React.js Expert',
    'Node.js',
    'Node.js Developer',
    'Express.js',
    'Express.js Developer',
    'MongoDB Developer',
    'PostgreSQL Developer',
    'TypeScript Expert',
    'JavaScript Expert',
    'Next.js Developer',
    'Redux Developer',
    'REST API Developer',
    'GraphQL Developer',
    
    // Frontend Technologies
    'HTML5 Developer',
    'CSS3 Developer',
    'Tailwind CSS Developer',
    'Material UI Developer',
    'MUI Developer',
    'Responsive Web Design',
    'Frontend Engineering',
    
    // Backend Technologies
    'Backend Engineer',
    'API Development',
    'RESTful API',
    'Database Design',
    'MongoDB',
    'PostgreSQL',
    'MySQL',
    'Prisma ORM',
    'Mongoose',
    
    // Development Services
    'Custom Web Development',
    'E-commerce Development',
    'Web Application Development',
    'SaaS Development',
    'API Integration',
    'Third-party Integration',
    'Payment Gateway Integration',
    'Real-time Chat Development',
    'Socket.IO Development',
    
    // Project Types
    'E-commerce Developer',
    'Social Media Platform Developer',
    'Job Portal Developer',
    'Real-time Application Developer',
    'Chat Application Developer',
    '3D Web Application',
    
    // Skills & Expertise
    'AWS Developer',
    'Docker Developer',
    'Git Expert',
    'CI/CD Implementation',
    'JWT Authentication',
    'OAuth Implementation',
    'Cloudinary Integration',
    'Payment Integration',
    'Razorpay Integration',
    'Stripe Integration',
    'WebSocket Development',
    
    // Location-based
    'Ahmedabad Developer',
    'Gujarat Developer',
    'India Developer',
    'Ahmedabad Web Developer',
    'Ahmedabad Full Stack Developer',
    'Gujarat Full Stack Developer',
    'India Full Stack Developer',
    'Developer in Ahmedabad',
    'Web Developer in Gujarat',
    'Freelance Developer Ahmedabad',
    'Freelance Developer Gujarat',
    'Freelance Developer India',
    
    // Portfolio & Work
    'Portfolio',
    'Developer Portfolio',
    'Web Developer Portfolio',
    'Full Stack Portfolio',
    'Project Portfolio',
    
    // Education & Research
    'CHARUSAT Alumni',
    'Computer Science Engineer',
    'CSE Graduate',
    'Drug Sentiment Analysis',
    'NLP Research',
    'Machine Learning Developer',
    
    // Experience
    'BACANCY Technologies Developer',
    '2 Years Experience Developer',
    'Experienced Web Developer',
    'Senior Developer',
    
    // Specific Solutions
    'SocioFeed Developer',
    'Virtual Wheels Developer',
    'EStore Developer',
    'Job Portal Developer',
    'Online Voting System Developer',
    'Fake News Detection Developer',
    
    // Additional Search Terms
    'Hire Web Developer',
    'Hire MERN Stack Developer',
    'Hire React Developer',
    'Hire Full Stack Developer',
    'Looking for Web Developer',
    'Need Web Developer',
    'Web Development Expert',
    'Professional Web Developer',
    'Experienced React Developer',
    'Best Developer in Ahmedabad',
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
    title: 'Vraj Prajapati - Full Stack Developer | Freelance Web Developer | MERN Stack Expert',
    description: 'Vraj Prajapati - Experienced Full Stack Developer & Freelancer specializing in MERN stack, React.js, Node.js, TypeScript. Expert in building scalable web applications, e-commerce platforms, and startup solutions. Available for freelance projects and web development services in Ahmedabad, India.',
    siteName: 'Vraj Prajapati - Full Stack Developer Portfolio',
    images: [
      {
        url: 'https://vraj-prajapati.dev/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vraj Prajapati - Full Stack Developer, Freelance Web Developer, MERN Stack Expert',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vraj Prajapati - Full Stack Developer | Freelance Web Developer',
    description: 'Vraj Prajapati - Experienced Full Stack Developer & Freelancer specializing in MERN stack, React.js, Node.js, TypeScript. Building scalable web applications for startups and businesses.',
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
  // Enhanced Person Schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Vraj Prajapati",
    "alternateName": ["Vraj", "Vraj Developer"],
    "jobTitle": "Full Stack Developer & Freelance Web Developer",
    "description": "Experienced Full Stack Developer and Freelancer specializing in MERN stack, React.js, Node.js, TypeScript, and modern web technologies. Expert in building scalable web applications, e-commerce platforms, and startup solutions.",
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
      "addressCountry": "IN"
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
      "Full Stack Development",
      "Freelance Development",
      "Startup Development",
      "E-commerce Development",
      "API Development",
      "Database Design",
      "Cloud Computing",
      "AWS",
      "Docker"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full Stack Developer",
      "occupationLocation": {
        "@type": "City",
        "name": "Ahmedabad"
      },
      "estimatedSalary": {
        "@type": "MonetaryAmountDistribution",
        "name": "base",
        "currency": "INR"
      },
      "skills": "React.js, Node.js, TypeScript, JavaScript, MongoDB, PostgreSQL, Express.js, Next.js, MERN Stack"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Chandubhai S Patel Institute of Technology (CHARUSAT)"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "BACANCY Technologies"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Full Stack Web Development",
          "description": "Custom web application development using MERN stack"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Freelance Development Services",
          "description": "Freelance web development and consulting for startups and businesses"
        }
      }
    ]
  }

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Vraj Prajapati - Full Stack Developer Portfolio",
    "alternateName": "Vraj Developer Portfolio",
    "url": "https://vraj-prajapati.dev",
    "description": "Portfolio website of Vraj Prajapati, a Full Stack Developer and Freelancer specializing in MERN stack development",
    "author": {
      "@type": "Person",
      "name": "Vraj Prajapati"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://vraj-prajapati.dev/#search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  // Professional Service Schema
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Vraj Prajapati - Freelance Web Development Services",
    "image": "https://vraj-prajapati.dev/og-image.jpg",
    "description": "Professional freelance web development services specializing in MERN stack, React.js, Node.js, TypeScript. Expert in building scalable web applications, e-commerce platforms, and startup solutions.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    },
    "telephone": "+91-9664860627",
    "email": "prajapativraj147@gmail.com",
    "url": "https://vraj-prajapati.dev",
    "priceRange": "$$",
    "serviceType": [
      "Full Stack Web Development",
      "MERN Stack Development",
      "React.js Development",
      "Node.js Development",
      "E-commerce Development",
      "Startup Web Development",
      "API Development",
      "Database Design",
      "Web Application Development",
      "Freelance Development"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "provider": {
      "@type": "Person",
      "name": "Vraj Prajapati"
    }
  }

  // Organization Schema for Freelance Work
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vraj Prajapati - Freelance Developer",
    "alternateName": "Vraj Developer",
    "url": "https://vraj-prajapati.dev",
    "logo": "https://vraj-prajapati.dev/logo.webp",
    "image": "https://vraj-prajapati.dev/og-image.jpg",
    "description": "Freelance web development services by Vraj Prajapati, specializing in MERN stack and modern web technologies",
    "email": "prajapativraj147@gmail.com",
    "telephone": "+91-9664860627",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    },
    "founder": {
      "@type": "Person",
      "name": "Vraj Prajapati"
    }
  }

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://vraj-prajapati.dev"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://vraj-prajapati.dev/#about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Skills",
        "item": "https://vraj-prajapati.dev/#skills"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Projects",
        "item": "https://vraj-prajapati.dev/#projects"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Contact",
        "item": "https://vraj-prajapati.dev/#contact"
      }
    ]
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <meta name="author" content="Vraj Prajapati" />
        <meta name="copyright" content="Vraj Prajapati" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <link rel="canonical" href="https://vraj-prajapati.dev" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <LiveGridBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
