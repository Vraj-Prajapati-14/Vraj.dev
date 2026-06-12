"use client"

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'
import { portfolioData } from '@/data/portfolio'

const stats = [
  { value: '2+',  label: 'Years Experience' },
  { value: '3',   label: 'Production Apps' },
  { value: '40+', label: 'API Endpoints' },
  { value: '35%', label: 'DB Performance Gain' },
]

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-16">

      {/* Top gold radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)' }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-label mb-6"
        >
          Available for opportunities
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="luxury-heading text-5xl md:text-7xl lg:text-8xl font-bold gradient-text leading-tight tracking-tight mb-4 pb-3"
        >
          {portfolioData.personal.name}
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-24 h-px mx-auto mb-6"
          style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}
        />

        {/* Typing title */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mono-text text-base md:text-lg tracking-widest uppercase mb-6 min-h-[1.8rem] flex items-center justify-center"
          style={{ color: '#00D4FF' }}
        >
          <TypeAnimation
            sequence={[
              'Full-Stack Engineer',    2000,
              'Node.js Developer',      2000,
              'NestJS Specialist',      2000,
              'AWS Cloud Engineer',     2000,
              'TypeScript Expert',      2000,
            ]}
            wrapper="span"
            speed={55}
            repeat={Infinity}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-[#878787] text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Building production-grade platforms with Node.js, NestJS, React & AWS.
          From API architecture to cloud deployment — end to end.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a href="#projects" className="btn-gold-fill">View Work</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-gold">
            See Resume
          </a>
          <a href="/resume.pdf" download className="btn-gold">
            Download CV
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex items-center justify-center gap-5 mb-16"
        >
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
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#242424] text-[#878787] hover:text-[#C9A84C] hover:border-[#C9A84C] transition-all duration-200"
            >
              <Icon size={17} />
            </a>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + i * 0.08 }}
              className="text-center"
            >
              <p className="luxury-heading text-3xl md:text-4xl font-bold gradient-text">{s.value}</p>
              <p className="mono-text text-xs text-[#878787] uppercase tracking-widest mt-1">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#4A4A4A] hover:text-[#C9A84C] transition-colors"
      >
        <span className="mono-text text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown size={14} />
        </motion.div>
      </motion.a>
    </section>
  )
}
