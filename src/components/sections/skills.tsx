"use client"

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Database, Server, Cloud, Palette, Wrench, Zap, Bot } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'

const col1 = [
  { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Node.js',    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'NestJS',     url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
  { name: 'MongoDB',    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Docker',     url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
]
const col2 = [
  { name: 'TypeScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'React',      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'PostgreSQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Git',        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Redis',      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
]
const col3 = [
  { name: 'GraphQL',    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  { name: 'MySQL',      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Python',     url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Redux',      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
  { name: 'AWS',        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', dark: true },
]
const col4 = [
  { name: 'Express',    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', dark: true },
  { name: 'Docker',     url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'NestJS',     url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
  { name: 'React',      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
]
const iconColumns = [col1, col2, col3, col4]

const skillCategories = [
  { name: 'Languages',    Icon: Code,     color: '#60A5FA', bg: 'rgba(96,165,250,0.08)',  skills: portfolioData.skills.languages },
  { name: 'Frontend',     Icon: Palette,  color: '#F472B6', bg: 'rgba(244,114,182,0.08)', skills: portfolioData.skills.frontend },
  { name: 'Backend',      Icon: Server,   color: '#34D399', bg: 'rgba(52,211,153,0.08)',  skills: portfolioData.skills.backend },
  { name: 'Database',     Icon: Database, color: '#FBBF24', bg: 'rgba(251,191,36,0.08)',  skills: portfolioData.skills.database },
  { name: 'DevOps',       Icon: Cloud,    color: '#38BDF8', bg: 'rgba(56,189,248,0.08)',  skills: portfolioData.skills.devops },
  { name: 'Security',     Icon: Wrench,   color: '#F87171', bg: 'rgba(248,113,113,0.08)', skills: portfolioData.skills.security },
  { name: 'Integrations', Icon: Zap,      color: '#A78BFA', bg: 'rgba(167,139,250,0.08)', skills: portfolioData.skills.integrations },
  { name: 'AI Tools',     Icon: Bot,      color: '#C9A84C', bg: 'rgba(201,168,76,0.08)',  skills: portfolioData.skills.aiTools },
]

const extraSkills = [
  'RESTful APIs', 'GraphQL', 'JWT Authentication', 'OAuth', 'CI/CD',
  'Agile/Scrum', 'Git Workflow', 'API Testing', 'Performance Optimization',
  'Responsive Design', 'Microservices', 'Docker Compose',
  'Claude AI', 'Claude Code CLI', 'MCP', 'AI Agents', 'Cursor IDE', 'OpenAI Codex',
]

export function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.06 })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!inView || hasAnimated.current) return
    hasAnimated.current = true
    import('animejs').then(({ animate, stagger }) => {
      animate('.skill-row', {
        opacity: [0, 1],
        translateX: [-14, 0],
        delay: stagger(55, { start: 350 }),
        duration: 500,
        ease: 'outExpo',
      })
      animate('.extra-skill', {
        opacity: [0, 1],
        scale: [0.82, 1],
        delay: stagger(22, { start: 850 }),
        duration: 280,
        ease: 'outBack',
      })
    })
  }, [inView])

  return (
    <section id="skills" className="py-24 relative" style={{ background: '#0D0D0D' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Tech Stack split layout ── */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-20">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2A2A2A] mb-6" style={{ background: '#111111' }}>
              <span className="text-[#C9A84C]">✦</span>
              <span className="mono-text text-[10px] uppercase tracking-widest text-[#878787]">Tech Stack</span>
            </div>
            <h2 className="luxury-heading font-bold leading-tight mb-4">
              <span className="text-[#F0EDE8] text-3xl sm:text-4xl md:text-5xl block">Key Technologies</span>
              <span className="text-[#333333] text-3xl sm:text-4xl md:text-5xl italic block">&amp; Platforms</span>
            </h2>
            <p className="text-[#878787] text-sm leading-relaxed max-w-sm">
              A curated set of modern tools I use to build fast, scalable, and production-ready applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="rounded-2xl p-5 overflow-hidden" style={{ background: '#111111', border: '1px solid #1E1E1E', height: '360px' }}>
              <div className="relative h-full">
                <div className="absolute inset-x-0 top-0 h-12 z-10 pointer-events-none" style={{ background: 'linear-gradient(to bottom, #111111, transparent)' }} />
                <div className="absolute inset-x-0 bottom-0 h-12 z-10 pointer-events-none" style={{ background: 'linear-gradient(to top, #111111, transparent)' }} />
                <div className="grid grid-cols-4 gap-3 h-full">
                  {iconColumns.map((col, colIdx) => {
                    const goUp = colIdx % 2 === 0
                    const doubled = [...col, ...col]
                    return (
                      <div key={colIdx} className="overflow-hidden h-full">
                        <div className={goUp ? 'animate-scroll-up' : 'animate-scroll-down'}>
                          {doubled.map((icon, i) => (
                            <div key={i} className="flex flex-col items-center gap-1.5 group cursor-default mb-3">
                              <div
                                className="w-14 h-14 rounded-2xl flex items-center justify-center p-3 transition-transform duration-200 group-hover:scale-110"
                                style={{ background: (icon as { dark?: boolean }).dark ? '#1E1E1E' : '#FFFFFF' }}
                              >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={icon.url} alt={icon.name} className="w-full h-full object-contain" loading="lazy" />
                              </div>
                              <span className="mono-text text-[9px] text-[#4A4A4A] group-hover:text-[#C9A84C] transition-colors text-center leading-tight">{icon.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Section heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <span className="mono-text text-[10px] uppercase tracking-[0.22em] mb-2 block" style={{ color: '#C9A84C' }}>
            02 — Expertise
          </span>
          <h2 style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
            <span className="font-bold text-[#E8E3DC] text-2xl sm:text-3xl md:text-4xl">Skills &amp; </span>
            <span className="font-bold text-2xl sm:text-3xl md:text-4xl italic" style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#6B5C38' }}>Technologies</span>
          </h2>
        </motion.div>

        {/* ── Skill rows with color per category ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-2xl overflow-hidden mb-12"
          style={{ border: '1px solid #1A1A1A', background: '#0B0B0B' }}
        >
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0" style={{ '--tw-divide-opacity': 1 } as React.CSSProperties}>
            {/* Left column */}
            <div className="divide-y" style={{ borderRight: '1px solid #1A1A1A' }}>
              {skillCategories.slice(0, 4).map((cat) => (
                <SkillRow key={cat.name} cat={cat} />
              ))}
            </div>
            {/* Right column */}
            <div className="divide-y">
              {skillCategories.slice(4).map((cat) => (
                <SkillRow key={cat.name} cat={cat} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Also familiar with ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.95 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[9px] uppercase tracking-[0.22em]" style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif', color: '#3A3530' }}>
              Also familiar with
            </span>
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, #1E1E1E, transparent)' }} />
          </div>
          <div className="flex flex-wrap gap-2">
            {extraSkills.map((skill) => (
              <span
                key={skill}
                className="extra-skill cursor-default transition-all duration-200 hover:border-[#C9A84C] hover:text-[#C9A84C]"
                style={{
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontSize: '10.5px',
                  color: '#5A5550',
                  background: '#0E0E0E',
                  border: '1px solid #1E1E1E',
                  borderRadius: '6px',
                  padding: '4px 10px',
                  letterSpacing: '0.01em',
                  opacity: 0,
                  display: 'inline-block',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

function SkillRow({
  cat,
}: {
  cat: typeof skillCategories[0]
}) {
  return (
    <div
      className="skill-row flex items-start gap-4 px-5 py-4 group transition-colors duration-200"
      style={{ borderColor: '#1A1A1A', opacity: 0 }}
      onMouseEnter={e => (e.currentTarget.style.background = '#111111')}
      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
    >
      {/* Icon + label */}
      <div className="flex items-center gap-2.5 w-32 shrink-0 pt-0.5">
        <div
          className="w-6 h-6 rounded-md flex items-center justify-center shrink-0"
          style={{ background: cat.bg }}
        >
          <cat.Icon size={12} style={{ color: cat.color }} />
        </div>
        <span
          className="text-[9.5px] uppercase tracking-[0.14em] font-semibold"
          style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif', color: cat.color, opacity: 0.7 }}
        >
          {cat.name}
        </span>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-x-1 gap-y-1.5 pt-0.5">
        {cat.skills.map((skill, si) => (
          <span
            key={skill}
            className="inline-flex items-center gap-1"
          >
            {si > 0 && (
              <span style={{ color: '#2A2A2A', fontSize: 10 }}>·</span>
            )}
            <span
              style={{
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontSize: '11.5px',
                color: '#9A9390',
                fontWeight: 400,
                letterSpacing: '0.01em',
              }}
            >
              {skill}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
