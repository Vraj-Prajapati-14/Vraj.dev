"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'About',    href: '#about' },
  { name: 'Skills',   href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'AI Tools', href: '#ai-tools' },
  { name: 'Contact',  href: '#contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen]   = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#242424]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            className="luxury-heading text-xl font-bold gradient-text tracking-wide"
          >
            VP.
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="mono-text text-xs uppercase tracking-widest text-[#878787] hover:text-[#C9A84C] transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-xs"
            >
              Resume
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[#878787] hover:text-[#C9A84C] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0D0D0D] border-b border-[#242424]"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="mono-text text-xs uppercase tracking-widest text-[#878787] hover:text-[#C9A84C] transition-colors py-1"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-xs w-fit"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
