"use client"

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'AI Tools', href: '#ai-tools' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="w-full border-t border-border bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-3">
              {portfolioData.personal.name}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-xs">
              Full-Stack Engineer crafting production-grade apps with Node.js, React, NestJS & AWS.
            </p>
            <div className="flex gap-3">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-muted p-2.5 hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-muted p-2.5 hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="rounded-full bg-muted p-2.5 hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-foreground/70">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href={`mailto:${portfolioData.personal.email}`} className="hover:text-primary transition-colors break-all">
                  {portfolioData.personal.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-foreground/70">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href={`tel:${portfolioData.personal.phone}`} className="hover:text-primary transition-colors">
                  {portfolioData.personal.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-foreground/70">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>{portfolioData.personal.location}</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {mounted ? new Date().getFullYear() : '2025'} {portfolioData.personal.name}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors group"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  )
}
