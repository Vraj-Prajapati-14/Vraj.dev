"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Database, Server, Cloud, Palette, Wrench, Zap, Bot } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'

const techIcons = [
  { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Node.js',    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'React',      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'NestJS',     url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
  { name: 'PostgreSQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB',    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'MySQL',      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Docker',     url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Python',     url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Git',        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GraphQL',    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  { name: 'AWS',        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { name: 'Redis',      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'Express',    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'Redux',      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
]

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
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section id="skills" className="py-24 relative" style={{ background: '#0D0D0D' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="section-label mb-2">02 — Expertise</p>
          <h2 className="luxury-heading text-4xl md:text-5xl font-bold text-[#F0EDE8]">
            Skills & Technologies
          </h2>
          <div className="gold-rule-left mt-4" />
        </motion.div>

        {/* ── Tech Icon Grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-16"
        >
          <p className="section-label mb-6">Core stack at a glance</p>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-16 gap-4">
            {techIcons.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.04 }}
                className="flex flex-col items-center gap-2 group"
              >
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-lg border border-[#242424] p-2.5 group-hover:border-[#C9A84C] transition-all duration-200"
                  style={{ background: '#111111' }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={tech.url}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                    style={tech.name === 'Express' || tech.name === 'AWS' ? { filter: 'invert(0.6)' } : {}}
                    loading="lazy"
                  />
                </div>
                <span className="mono-text text-[10px] text-[#4A4A4A] group-hover:text-[#C9A84C] transition-colors text-center leading-tight">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="luxury-card-gold p-5 group"
            >
              <div className="flex items-center gap-2.5 mb-5">
                <cat.icon size={16} style={{ color: '#C9A84C' }} />
                <h3 className="mono-text text-xs uppercase tracking-widest text-[#C9A84C]">
                  {cat.name}
                </h3>
              </div>

              <ul className="space-y-2.5">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-sm text-[#878787] group-hover:text-[#AAAAAA] transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C9A84C] shrink-0" />
                    <span className="mono-text text-xs">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Extra skills chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <p className="section-label mb-5">Also familiar with</p>
          <div className="flex flex-wrap gap-2">
            {extraSkills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + i * 0.03 }}
                className="mono-tag hover:border-[#C9A84C] hover:bg-[rgba(201,168,76,0.18)] transition-all cursor-default"
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
