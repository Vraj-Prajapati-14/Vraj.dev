"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Award, ArrowRight, Briefcase, GraduationCap, ScrollText } from 'lucide-react'
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

          {/* ── Section heading ── */}
          <motion.div
            ref={gridRef}
            initial={{ opacity: 0, y: 20 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="mono-text text-[10px] uppercase tracking-[0.22em] mb-2 block" style={{ color: '#C9A84C' }}>
              01 — Background
            </span>
            <h3 className="font-bold leading-tight" style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
              <span className="text-[#F0EDE8] text-2xl sm:text-3xl md:text-4xl">Experience &amp; </span>
              <span className="text-2xl sm:text-3xl md:text-4xl italic" style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#4A4030' }}>Education</span>
            </h3>
          </motion.div>

          {/* ── Quick stats strip ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12"
          >
            {[
              { val: '2+',   label: 'Years Exp',    color: '#C9A84C' },
              { val: '40+',  label: 'APIs Built',   color: '#60A5FA' },
              { val: '3',    label: 'Platforms',    color: '#A78BFA' },
              { val: '9.33', label: 'CGPA / 10',   color: '#34D399' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                className="rounded-xl p-4 text-center"
                style={{ background: '#0E0E0E', border: `1px solid ${s.color}15` }}
              >
                <p className="text-2xl font-black leading-none mb-1" style={{ fontFamily: 'var(--font-inter)', color: s.color }}>{s.val}</p>
                <p className="text-[9px] uppercase tracking-widest" style={{ fontFamily: 'var(--font-inter)', color: '#2E2A24' }}>{s.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16">

            {/* ── Experience timeline ── */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={gridInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.25 }}
            >
              <div className="flex items-center gap-2.5 mb-7">
                <Briefcase size={13} style={{ color: '#C9A84C' }} />
                <span className="mono-text text-[10px] uppercase tracking-[0.18em]" style={{ color: '#C9A84C' }}>Work Experience</span>
              </div>

              {/* Timeline */}
              <div className="relative pl-5" style={{ borderLeft: '1px solid #1A1A1A' }}>
                {portfolioData.experience.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={gridInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.35 + i * 0.12 }}
                    className="relative mb-8 last:mb-0"
                  >
                    {/* Timeline dot */}
                    <div
                      className="absolute -left-[22px] top-1.5 w-2.5 h-2.5 rounded-full"
                      style={{ background: i === 0 ? '#C9A84C' : '#1E1E1E', border: '1px solid #2A2A2A' }}
                    />

                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h5
                          className="text-sm font-semibold text-[#D0C9BE] leading-snug"
                          style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                        >
                          {exp.title}
                        </h5>
                        <p
                          className="text-[11px] mt-0.5"
                          style={{ fontFamily: 'var(--font-inter)', color: '#C9A84C' }}
                        >
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <span
                          className="text-[9px] uppercase tracking-widest block"
                          style={{ fontFamily: 'var(--font-inter)', color: '#3A3530' }}
                        >
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1 justify-end mt-0.5">
                          <MapPin size={9} style={{ color: '#2A2520' }} />
                          <span className="text-[9px]" style={{ fontFamily: 'var(--font-inter)', color: '#2A2520' }}>{exp.location}</span>
                        </span>
                      </div>
                    </div>

                    {/* Key highlights — just first 2 to keep it compact */}
                    <div className="space-y-1.5">
                      {exp.description.slice(0, 2).map((d, di) => (
                        <p key={di} className="flex items-start gap-2 text-[11px] leading-relaxed" style={{ color: '#3A3530', fontFamily: 'var(--font-inter)' }}>
                          <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: '#2A2520' }} />
                          {d}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── Education + Certs ── */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={gridInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.35 }}
            >
              <div className="flex items-center gap-2.5 mb-7">
                <GraduationCap size={13} style={{ color: '#C9A84C' }} />
                <span className="mono-text text-[10px] uppercase tracking-[0.18em]" style={{ color: '#C9A84C' }}>Education</span>
              </div>

              <div className="space-y-3 mb-10">
                {portfolioData.education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={gridInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    className="rounded-xl p-4"
                    style={{ background: '#0E0E0E', border: '1px solid #161616' }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1.5">
                      <h5
                        className="text-xs font-semibold text-[#C8C3B8] leading-snug max-w-[220px]"
                        style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                      >
                        {edu.degree}
                      </h5>
                      <span
                        className="text-[9px] shrink-0"
                        style={{ fontFamily: 'var(--font-inter)', color: '#2E2A24' }}
                      >
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-[10px] mb-2" style={{ fontFamily: 'var(--font-inter)', color: '#3A3530' }}>{edu.institution}</p>
                    {edu.cgpa && (
                      <span className="inline-flex items-center gap-1 text-[9px] px-2 py-0.5 rounded-full" style={{ background: 'rgba(201,168,76,0.08)', color: '#C9A84C', fontFamily: 'var(--font-inter)' }}>
                        CGPA {edu.cgpa}
                      </span>
                    )}
                    {edu.percentage && (
                      <span className="inline-flex items-center gap-1 text-[9px] px-2 py-0.5 rounded-full" style={{ background: 'rgba(52,211,153,0.08)', color: '#34D399', fontFamily: 'var(--font-inter)' }}>
                        Score {edu.percentage}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Certs */}
              <div className="flex items-center gap-2.5 mb-5">
                <ScrollText size={13} style={{ color: '#C9A84C' }} />
                <span className="mono-text text-[10px] uppercase tracking-[0.18em]" style={{ color: '#C9A84C' }}>Certifications</span>
              </div>
              <div className="space-y-2">
                {portfolioData.awards[0].items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 12 }}
                    animate={gridInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
                    className="flex items-start gap-3 px-4 py-3 rounded-lg"
                    style={{ background: '#0C0C0C', border: '1px solid #141414' }}
                  >
                    <Award size={11} className="shrink-0 mt-0.5" style={{ color: '#3A3020' }} />
                    <span className="text-[10px] leading-snug" style={{ fontFamily: 'var(--font-inter)', color: '#3A3530' }}>{item}</span>
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
