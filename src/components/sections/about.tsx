"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Award, ArrowRight } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'

const INTERESTS = [
  { icon: '⚡', label: 'API DESIGN' },
  { icon: '🏗️', label: 'SYSTEM DESIGN' },
  { icon: '🏏', label: 'CRICKET' },
]

export function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.06 })
  const [gridRef, gridInView] = useInView({ triggerOnce: true, threshold: 0.06 })

  return (
    <section id="about" className="relative" style={{ background: '#0A0A0A' }}>

      {/* ══════════════════════════════════════════
          BLOCK 1 — My Story (ankitorion style)
      ══════════════════════════════════════════ */}
      <div className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ref} className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

            {/* ── LEFT: tags + photo + name card ── */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65 }}
            >
              {/* Photo with tags overlaid top-left */}
              <div className="relative rounded-2xl overflow-hidden w-full" style={{ maxWidth: 340 }}>
                {/* Interest tags — absolute top-left over image */}
                <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
                  {INTERESTS.map((tag) => (
                    <div
                      key={tag.label}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full self-start"
                      style={{
                        background: 'rgba(10,10,10,0.72)',
                        border: '1px solid rgba(255,255,255,0.07)',
                        backdropFilter: 'blur(6px)',
                      }}
                    >
                      <span className="text-[10px] leading-none">{tag.icon}</span>
                      <span className="mono-text text-[8px] uppercase tracking-widest text-[#555555]">{tag.label}</span>
                    </div>
                  ))}
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/DP.jpeg"
                  alt="Vraj Prajapati"
                  className="w-full"
                  style={{
                    aspectRatio: '3/4',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    filter: 'grayscale(100%) brightness(0.85) contrast(1.1)',
                    display: 'block',
                  }}
                />
                {/* Bottom gradient */}
                <div
                  className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75), transparent)' }}
                />
                {/* Name card */}
                <div
                  className="absolute bottom-4 right-4 px-3 py-2 rounded-xl"
                  style={{ background: 'rgba(10,10,10,0.85)', border: '1px solid #222222', backdropFilter: 'blur(8px)' }}
                >
                  <p className="text-[#F0EDE8] text-xs font-semibold leading-none mb-0.5"
                    style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
                    Vraj Prajapati
                  </p>
                  <p className="mono-text text-[9px] text-[#4A4A4A]">B.Tech · CSE · CHARUSAT</p>
                </div>
              </div>
            </motion.div>

            {/* ── RIGHT: My Story ── */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.15 }}
              className=""
            >
              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-8"
                style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
                <span className="text-[#F0EDE8]">My </span>
                <span className="italic text-[#F0EDE8]" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
                  Story
                </span>
              </h2>

              {/* Paragraphs */}
              <div className="space-y-5">
                <p className="text-sm md:text-base leading-relaxed" style={{ color: '#878787' }}>
                  I&apos;m Vraj — a Full-Stack Engineer at{' '}
                  <span className="text-[#F0EDE8] font-medium">BACANCY Technologies</span>,
                  building production-grade systems since 2022. My work lives at the intersection of
                  clean API design and scalable backend architecture, always with a deep respect for
                  the developer experience on both sides of the contract.
                </p>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: '#878787' }}>
                  Beyond the terminal, I&apos;m drawn to system thinking — how complex things are made
                  simple, how decisions ripple through architecture, and how great software feels
                  inevitable in hindsight. I graduated from{' '}
                  <span className="text-[#F0EDE8] font-medium">CHARUSAT</span> with a B.Tech in
                  Computer Science, where curiosity for building things became a lifelong discipline.
                </p>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: '#878787' }}>
                  I believe that an API is a promise — and I take promises seriously. Whether it&apos;s
                  a microservice boundary, a database schema, or a deployment pipeline, I care about
                  getting the fundamentals right so everything built on top can move fast and{' '}
                  <span className="text-[#F0EDE8] font-medium">not break things</span>.
                </p>
              </div>

              {/* CTA + location */}
              <div className="flex flex-wrap items-center gap-6 mt-10">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all"
                  style={{
                    background: '#F0EDE8',
                    color: '#0A0A0A',
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#C9A84C')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#F0EDE8')}
                >
                  View My Work <ArrowRight size={14} />
                </a>
                <span className="mono-text text-[10px] uppercase tracking-widest text-[#2E2E2E]">
                  Vadodara, Gujarat · India
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div style={{ height: 1, background: '#141414' }} />
      </div>

      {/* ══════════════════════════════════════════
          BLOCK 2 — Experience / Education / Certs
      ══════════════════════════════════════════ */}
      <div className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            ref={gridRef}
            initial={{ opacity: 0, y: 20 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="section-label mb-2">01 — Background</p>
            <h3 className="luxury-heading text-3xl md:text-4xl font-bold text-[#F0EDE8]">
              Experience &amp; Education
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16">

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={gridInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h4 className="mono-text text-xs uppercase tracking-widest text-[#C9A84C] mb-8">
                Work Experience
              </h4>
              <div className="space-y-6">
                {portfolioData.experience.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={gridInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
                    className="luxury-card-gold p-6"
                  >
                    <div className="flex flex-wrap justify-between items-start gap-3 mb-3">
                      <div>
                        <h5 className="luxury-heading text-lg font-semibold text-[#F0EDE8]">{exp.title}</h5>
                        <p className="gradient-text font-medium text-sm mt-0.5">{exp.company}</p>
                      </div>
                      <span className="mono-tag shrink-0">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 mb-4">
                      <MapPin size={12} style={{ color: '#878787' }} />
                      <span className="mono-text text-xs text-[#878787]">{exp.location}</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((d, di) => (
                        <li key={di} className="flex items-start gap-2.5 text-sm text-[#878787] leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education + Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={gridInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              <h4 className="mono-text text-xs uppercase tracking-widest text-[#C9A84C] mb-8">
                Education
              </h4>
              <div className="space-y-5 mb-12">
                {portfolioData.education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={gridInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                    className="luxury-card p-6"
                  >
                    <div className="flex flex-wrap justify-between items-start gap-3 mb-2">
                      <div>
                        <h5 className="luxury-heading text-base font-semibold text-[#F0EDE8] leading-snug">{edu.degree}</h5>
                        <p className="text-[#C9A84C] text-sm mt-0.5">{edu.institution}</p>
                      </div>
                      <span className="mono-tag shrink-0">{edu.year}</span>
                    </div>
                    {edu.cgpa && (
                      <p className="mono-text text-xs text-[#878787] mt-2">
                        CGPA: <span className="text-[#F0EDE8] font-semibold">{edu.cgpa}</span>
                      </p>
                    )}
                    {edu.percentage && (
                      <p className="mono-text text-xs text-[#878787] mt-2">
                        Score: <span className="text-[#F0EDE8] font-semibold">{edu.percentage}</span>
                      </p>
                    )}
                    {edu.coursework && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {edu.coursework.map((c) => (
                          <span key={c} className="blue-tag">{c}</span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <h4 className="mono-text text-xs uppercase tracking-widest text-[#C9A84C] mb-6 flex items-center gap-2">
                <Award size={14} /> Certifications
              </h4>
              <div className="space-y-4">
                {portfolioData.awards.map((award, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    animate={gridInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.55 + i * 0.08 }}
                    className="luxury-card p-5"
                  >
                    {award.items.map((item, ii) => (
                      <p key={ii} className="flex items-start gap-2.5 text-sm text-[#878787] leading-relaxed mb-2 last:mb-0">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0" />
                        {item}
                      </p>
                    ))}
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>

    </section>
  )
}
