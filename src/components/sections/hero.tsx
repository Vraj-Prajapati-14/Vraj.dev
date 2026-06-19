"use client"

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, X as XIcon } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16 md:pt-0">

      {/* Gold radial glow top-right */}
      <div
        className="absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 100% 0%, rgba(201,168,76,0.06) 0%, transparent 60%)' }}
      />
      {/* Subtle left glow */}
      <div
        className="absolute bottom-0 left-0 w-1/2 h-1/2 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 0% 100%, rgba(201,168,76,0.03) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[88vh] pb-8 lg:pb-0">

          {/* ── LEFT: Text (order-2 on mobile, order-1 on lg) ── */}
          <div className="order-2 lg:order-1">
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1E1E1E] bg-[#111111] mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="mono-text text-xs text-[#878787]">Available for opportunities</span>
            </motion.div>

            {/* Headline */}
            <h1 className="luxury-heading font-bold leading-[1.05] mb-6">
              <motion.span
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="block text-[2.4rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] text-[#F0EDE8]"
              >
                APIs First.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="block text-[2.4rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] text-[#333333] italic"
              >
                Everything Else
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55 }}
                className="block text-[2.4rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] gradient-text italic pb-2"
              >
                Follows.
              </motion.span>
            </h1>

            {/* Intro paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-[#878787] text-base leading-relaxed mb-8 max-w-[480px] italic"
            >
              Hey, I&apos;m Vraj — a Full-Stack Engineer from Ahmedabad. I build backend systems that don&apos;t break at 3am, APIs that scale, and products that actually ship. Currently crafting things at BACANCY with Node.js, NestJS & AWS.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a href="#projects" className="btn-gold-fill">See My Work</a>
              <a href="#contact" className="btn-gold">Let&apos;s Talk</a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-gold">
                Resume
              </a>
            </motion.div>

            {/* Social + quick stat */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex items-center gap-4 flex-wrap"
            >
              {[
                { href: portfolioData.personal.github,              icon: Github,   label: 'GitHub' },
                { href: portfolioData.personal.linkedin,            icon: Linkedin, label: 'LinkedIn' },
                { href: portfolioData.personal.twitter,             icon: XIcon,    label: 'Twitter' },
                { href: `mailto:${portfolioData.personal.email}`,   icon: Mail,     label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-[#242424] text-[#878787] hover:text-[#C9A84C] hover:border-[#C9A84C] transition-all duration-200"
                >
                  <Icon size={17} />
                </a>
              ))}
              <div className="w-px h-5 bg-[#242424] hidden sm:block" />
              <span className="mono-text text-xs text-[#4A4A4A] hidden sm:block">
                2+ yrs · 40+ APIs · BACANCY
              </span>
            </motion.div>
          </div>

          {/* ── RIGHT: Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.35 }}
            className="relative flex items-center justify-center order-1 lg:order-2"
          >
            {/* Corner frame decorations */}
            <div className="absolute inset-0 pointer-events-none z-10">
              <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#C9A84C] opacity-50" />
              <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#C9A84C] opacity-50" />
              <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#C9A84C] opacity-50" />
              <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#C9A84C] opacity-50" />
            </div>

            {/* Photo container */}
            <div
              className="relative w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[440px] aspect-[3/4] rounded-3xl overflow-hidden mx-auto"
              style={{ background: '#0A0A0A' }}
            >
              {/* Base — left half clear, full brightness */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/DP.jpeg"
                alt="Vraj Prajapati"
                className="absolute inset-0 w-full h-full object-cover object-top"
                style={{ filter: 'grayscale(100%) brightness(1.55) contrast(1.25)' }}
                loading="eager"
              />

              {/* 10 progressive blur strips from 45% → 95% */}
              {[
                { s: 48,  e: 53,  blur: 2,  br: 1.45 },
                { s: 53,  e: 58,  blur: 4,  br: 1.35 },
                { s: 58,  e: 63,  blur: 6,  br: 1.25 },
                { s: 63,  e: 68,  blur: 9,  br: 1.1  },
                { s: 68,  e: 73,  blur: 12, br: 0.95 },
                { s: 73,  e: 78,  blur: 15, br: 0.8  },
                { s: 78,  e: 83,  blur: 18, br: 0.62 },
                { s: 83,  e: 88,  blur: 21, br: 0.46 },
                { s: 88,  e: 93,  blur: 24, br: 0.3  },
                { s: 93,  e: 100, blur: 28, br: 0.16 },
              ].map((strip, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={i} src="/DP.jpeg" alt="" aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
                  style={{
                    filter: `grayscale(100%) brightness(${strip.br}) contrast(1.2) blur(${strip.blur}px)`,
                    clipPath: `inset(0 ${100 - strip.e}% 0 ${strip.s - 0.15}%)`,
                  }}
                />
              ))}

              {/* Hairline dividers — one per strip boundary, fading out */}
              {[48, 53, 58, 63, 68, 73, 78, 83, 88, 93].map((pos, i) => (
                <div key={`line-${i}`} className="absolute inset-y-0 pointer-events-none" style={{
                  left: `${pos}%`,
                  width: '1px',
                  background: `rgba(255,255,255,${(0.14 - i * 0.012).toFixed(3)})`,
                }} />
              ))}

              {/* Bottom fade */}
              <div
                className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
                style={{ background: 'linear-gradient(to top, #0A0A0A 0%, transparent 100%)' }}
              />
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  )
}
