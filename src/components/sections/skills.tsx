"use client"

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
  { name: 'Languages',    icon: Code,     skills: portfolioData.skills.languages },
  { name: 'Frontend',     icon: Palette,  skills: portfolioData.skills.frontend },
  { name: 'Backend',      icon: Server,   skills: portfolioData.skills.backend },
  { name: 'Database',     icon: Database, skills: portfolioData.skills.database },
  { name: 'DevOps',       icon: Cloud,    skills: portfolioData.skills.devops },
  { name: 'Security',     icon: Wrench,   skills: portfolioData.skills.security },
  { name: 'Integrations', icon: Zap,      skills: portfolioData.skills.integrations },
  { name: 'AI Tools',     icon: Bot,      skills: portfolioData.skills.aiTools },
]

const extraSkills = [
  'RESTful APIs', 'GraphQL', 'JWT Authentication', 'OAuth', 'CI/CD',
  'Agile/Scrum', 'Git Workflow', 'API Testing', 'Performance Optimization',
  'Responsive Design', 'Microservices', 'Docker Compose',
  'Claude AI', 'Claude Code CLI', 'MCP', 'AI Agents', 'Cursor IDE', 'OpenAI Codex',
]

export function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.06 })

  return (
    <section id="skills" className="py-24 relative" style={{ background: '#0D0D0D' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Tech Stack: split layout ── */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-16 md:mb-24">

          {/* Left: heading */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2A2A2A] mb-6"
              style={{ background: '#111111' }}
            >
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

          {/* Right: 4 vertical scrolling columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div
              className="rounded-2xl p-5 overflow-hidden"
              style={{ background: '#111111', border: '1px solid #1E1E1E', height: '360px' }}
            >
              {/* Top + bottom fade masks */}
              <div className="relative h-full">
                <div className="absolute inset-x-0 top-0 h-12 z-10 pointer-events-none"
                  style={{ background: 'linear-gradient(to bottom, #111111, transparent)' }} />
                <div className="absolute inset-x-0 bottom-0 h-12 z-10 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, #111111, transparent)' }} />

                <div className="grid grid-cols-4 gap-3 h-full">
                  {iconColumns.map((col, colIdx) => {
                    const goUp = colIdx % 2 === 0
                    const doubled = [...col, ...col]
                    return (
                      <div key={colIdx} className="overflow-hidden h-full">
                        <div className={goUp ? 'animate-scroll-up' : 'animate-scroll-down'}>
                          {doubled.map((icon, i) => (
                            <div
                              key={i}
                              className="flex flex-col items-center gap-1.5 group cursor-default mb-3"
                            >
                              <div
                                className="w-14 h-14 rounded-2xl flex items-center justify-center p-3 transition-transform duration-200 group-hover:scale-110"
                                style={{ background: (icon as { dark?: boolean }).dark ? '#1E1E1E' : '#FFFFFF' }}
                              >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={icon.url} alt={icon.name} className="w-full h-full object-contain" loading="lazy" />
                              </div>
                              <span className="mono-text text-[9px] text-[#4A4A4A] group-hover:text-[#C9A84C] transition-colors text-center leading-tight">
                                {icon.name}
                              </span>
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
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-10"
        >
          <span
            className="mono-text text-[10px] uppercase tracking-[0.22em] mb-3 block"
            style={{ color: '#C9A84C' }}
          >
            02 — Expertise
          </span>
          <h2
            className="font-bold leading-tight"
            style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
          >
            <span className="text-[#F0EDE8] text-3xl sm:text-4xl md:text-5xl block">Skills &amp;</span>
            <span
              className="text-3xl sm:text-4xl md:text-5xl block italic"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#5A5040' }}
            >
              Technologies
            </span>
          </h2>
        </motion.div>

        {/* ── Skill category cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-16">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.35 + i * 0.07 }}
              className="group relative rounded-xl p-5 cursor-default overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #111111 0%, #0E0E0E 100%)',
                border: '1px solid #1C1C1C',
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
                style={{ background: 'radial-gradient(ellipse at 30% 0%, rgba(201,168,76,0.05) 0%, transparent 70%)' }}
              />

              {/* Category label row */}
              <div className="flex items-center gap-2.5 mb-4">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.14)' }}
                >
                  <cat.icon size={13} style={{ color: '#C9A84C' }} />
                </div>
                <h3
                  className="text-[10px] uppercase tracking-[0.18em] font-semibold"
                  style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif', color: '#7A6840' }}
                >
                  {cat.name}
                </h3>
              </div>

              {/* Thin gold divider */}
              <div className="mb-4" style={{ height: '1px', background: 'linear-gradient(to right, rgba(201,168,76,0.2), transparent)' }} />

              {/* Skills list */}
              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2.5">
                    <span
                      className="shrink-0 rounded-full"
                      style={{ width: 3, height: 3, background: '#3A3020' }}
                    />
                    <span
                      className="text-[11.5px] leading-snug transition-colors duration-200 group-hover:text-[#C8C3BB]"
                      style={{
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        color: '#6A6560',
                        fontWeight: 400,
                      }}
                    >
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ── Also familiar with ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span
              className="mono-text text-[10px] uppercase tracking-[0.2em]"
              style={{ color: '#3A3020' }}
            >
              Also familiar with
            </span>
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, #1E1E1E, transparent)' }} />
          </div>
          <div className="flex flex-wrap gap-2">
            {extraSkills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.88 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.28, delay: 1 + i * 0.03 }}
                className="cursor-default transition-all duration-200 hover:border-[#C9A84C]/30 hover:text-[#9A8B6A]"
                style={{
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontSize: '10.5px',
                  fontWeight: 400,
                  color: '#4A4540',
                  background: '#0E0E0E',
                  border: '1px solid #1A1A1A',
                  borderRadius: '6px',
                  padding: '4px 10px',
                  letterSpacing: '0.02em',
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
