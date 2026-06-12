"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Database, Server, Cloud, Palette, Wrench, Zap, Bot } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'

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
