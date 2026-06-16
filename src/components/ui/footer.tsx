"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'

const navLinks = [
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'AI Tools', href: '#ai-tools' },
  { label: 'Contact',  href: '#contact' },
]

export function Footer() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <footer className="w-full" style={{ background: '#080808', borderTop: '1px solid #1E1E1E' }}>
      {/* Gold accent line */}
      <div className="w-full h-px" style={{ background: 'linear-gradient(90deg, transparent 0%, #C9A84C 30%, #C9A84C 70%, transparent 100%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="luxury-heading text-2xl font-bold gradient-text mb-3">VP.</h3>
            <p className="text-xs text-[#878787] leading-relaxed mb-5 max-w-xs">
              Full-Stack Engineer crafting production-grade platforms with Node.js, NestJS, React & AWS.
            </p>
            <div className="flex gap-3">
              {[
                { href: portfolioData.personal.github, icon: Github, label: 'GitHub' },
                { href: portfolioData.personal.linkedin, icon: Linkedin, label: 'LinkedIn' },
                { href: `mailto:${portfolioData.personal.email}`, icon: Mail, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded border border-[#242424] flex items-center justify-center text-[#878787] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="mono-text text-xs uppercase tracking-widest text-[#C9A84C] mb-5">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="mono-text text-xs text-[#878787] hover:text-[#C9A84C] transition-colors uppercase tracking-widest">
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
            <h4 className="mono-text text-xs uppercase tracking-widest text-[#C9A84C] mb-5">Contact</h4>
            <ul className="space-y-3">
              {[
                { icon: Mail,   value: portfolioData.personal.email,    href: `mailto:${portfolioData.personal.email}` },
                { icon: Phone,  value: portfolioData.personal.phone,    href: `tel:${portfolioData.personal.phone}` },
                { icon: MapPin, value: portfolioData.personal.location, href: '#' },
              ].map(({ icon: Icon, value, href }) => (
                <li key={value}>
                  <a href={href} className="flex items-center gap-2.5 text-xs text-[#878787] hover:text-[#C9A84C] transition-colors group">
                    <Icon size={12} className="shrink-0 group-hover:text-[#C9A84C] transition-colors" />
                    <span className="break-all">{value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid #1A1A1A' }}
        >
          <p className="mono-text text-xs text-[#4A4A4A]">
            © {mounted ? new Date().getFullYear() : '2025'} {portfolioData.personal.name}. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 mono-text text-xs text-[#4A4A4A] hover:text-[#C9A84C] transition-colors group"
          >
            Back to top
            <ArrowUp size={11} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  )
}
