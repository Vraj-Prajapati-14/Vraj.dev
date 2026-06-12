"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { portfolioData } from '@/data/portfolio'

export function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.07 })

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="section-label mb-2">03 — Work</p>
          <h2 className="luxury-heading text-4xl md:text-5xl font-bold text-[#F0EDE8]">
            Featured Projects
          </h2>
          <div className="gold-rule-left mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="luxury-card-gold flex flex-col group overflow-hidden"
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: '180px' }}>
                <Image
                  src={project.image || '/projects/placeholder.png'}
                  alt={project.title}
                  width={400}
                  height={180}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(to top, #111111 0%, rgba(17,17,17,0.4) 60%, transparent 100%)' }}
                />
                {/* Project number */}
                <span
                  className="luxury-heading absolute bottom-3 right-4 text-4xl font-bold opacity-30 group-hover:opacity-50 transition-opacity"
                  style={{ color: '#C9A84C' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="luxury-heading text-lg font-semibold text-[#F0EDE8] leading-snug mb-3 group-hover:text-[#C9A84C] transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-[#878787] leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {(project.technologies || []).slice(0, 5).map((tech) => (
                    <span key={tech} className="mono-tag">{tech}</span>
                  ))}
                  {(project.technologies || []).length > 5 && (
                    <span className="mono-tag">+{(project.technologies || []).length - 5}</span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold flex-1 justify-center text-xs"
                  >
                    <Github size={13} /> Code
                  </a>
                  <a
                    href={project.live !== '#' ? project.live : undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold-fill flex-1 justify-center text-xs"
                    style={project.live === '#' ? { opacity: 0.4, pointerEvents: 'none' } : {}}
                  >
                    <ExternalLink size={13} /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="mono-text text-xs text-[#878787] uppercase tracking-widest mb-4">
            More work on GitHub
          </p>
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex"
          >
            <Github size={14} /> View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  )
}
