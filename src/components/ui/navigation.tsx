"use client"

import { Github, Linkedin, Code2 } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'

export function Navigation() {
  return (
    <>
      {/* ── Floating centered pill — all screen sizes ── */}
      <nav className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-max max-w-[calc(100vw-16px)]">
        <div
          className="flex items-center gap-0.5 sm:gap-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full border border-[#2A2A2A] bg-[#0A0A0A]/90 backdrop-blur-md"
          style={{ boxShadow: '0 0 0 1px rgba(201,168,76,0.06), 0 8px 32px rgba(0,0,0,0.6)' }}
        >
          {/* Logo */}
          <a href="#home" className="luxury-heading text-sm font-bold gradient-text tracking-wide px-2 py-1">
            VP.
          </a>

          <div className="w-px h-4 bg-[#2A2A2A] mx-1" />

          {/* Icon links */}
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-8 h-8 flex items-center justify-center text-[#878787] hover:text-[#C9A84C] transition-colors rounded-full hover:bg-[#181818]"
          >
            <Github size={14} />
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-8 h-8 flex items-center justify-center text-[#878787] hover:text-[#C9A84C] transition-colors rounded-full hover:bg-[#181818]"
          >
            <Linkedin size={14} />
          </a>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('vraj:terminal'))}
            aria-label="Open terminal"
            title="Open terminal (try 'help')"
            className="w-8 h-8 flex items-center justify-center text-[#878787] hover:text-[#C9A84C] transition-colors rounded-full hover:bg-[#181818]"
          >
            <Code2 size={14} />
          </button>

          <div className="w-px h-4 bg-[#2A2A2A] mx-1" />

          {/* Resume text link */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mono-text text-[11px] uppercase tracking-widest text-[#878787] hover:text-[#C9A84C] transition-colors px-2 py-1"
          >
            Resume
          </a>

          {/* Contact pill */}
          <a
            href="#contact"
            className="px-4 py-1.5 rounded-full bg-[#F0EDE8] text-[#0A0A0A] text-[11px] font-bold mono-text hover:bg-[#C9A84C] transition-colors ml-1"
          >
            Contact
          </a>
        </div>
      </nav>

    </>
  )
}
