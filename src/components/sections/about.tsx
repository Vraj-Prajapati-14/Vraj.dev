"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Award } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'

export function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="section-label mb-2">01 — Background</p>
          <h2 className="luxury-heading text-4xl md:text-5xl font-bold text-[#F0EDE8]">
            About Me
          </h2>
          <div className="gold-rule-left mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h3 className="mono-text text-xs uppercase tracking-widest text-[#C9A84C] mb-8">
              Work Experience
            </h3>

            <div className="space-y-6">
              {portfolioData.experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
                  className="luxury-card-gold p-6"
                >
                  <div className="flex flex-wrap justify-between items-start gap-3 mb-3">
                    <div>
                      <h4 className="luxury-heading text-lg font-semibold text-[#F0EDE8]">
                        {exp.title}
                      </h4>
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

          {/* Education + Awards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="mono-text text-xs uppercase tracking-widest text-[#C9A84C] mb-8">
              Education
            </h3>

            <div className="space-y-5 mb-12">
              {portfolioData.education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.35 + i * 0.1 }}
                  className="luxury-card p-6"
                >
                  <div className="flex flex-wrap justify-between items-start gap-3 mb-2">
                    <div>
                      <h4 className="luxury-heading text-base font-semibold text-[#F0EDE8] leading-snug">
                        {edu.degree}
                      </h4>
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

            {/* Certifications */}
            <h3 className="mono-text text-xs uppercase tracking-widest text-[#C9A84C] mb-6 flex items-center gap-2">
              <Award size={14} /> Certifications
            </h3>
            <div className="space-y-4">
              {portfolioData.awards.map((award, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
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
    </section>
  )
}
