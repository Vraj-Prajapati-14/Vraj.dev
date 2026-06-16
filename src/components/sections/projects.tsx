"use client"

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { portfolioData } from '@/data/portfolio'

const cardThemes = [
  {
    bg: '#0D0F1A',
    border: 'rgba(201,168,76,0.15)',
    accent: '#C9A84C',
    label: 'FULL-STACK PLATFORM',
    year: '2025',
    topBorder: '#C9A84C',
  },
  {
    bg: '#0A0E17',
    border: 'rgba(0,212,255,0.12)',
    accent: '#00D4FF',
    label: 'HEALTHCARE PLATFORM',
    year: '2025',
    topBorder: '#00D4FF',
  },
  {
    bg: '#0A130E',
    border: 'rgba(34,197,94,0.12)',
    accent: '#22C55E',
    label: 'SOCIAL PLATFORM',
    year: '2024',
    topBorder: '#22C55E',
  },
]

function ProjectCard({
  project,
  index,
}: {
  project: (typeof portfolioData.projects)[0]
  index: number
}) {
  const theme = cardThemes[index % cardThemes.length]
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ['start end', 'start start'] })
  const y = useTransform(scrollYProgress, [0, 1], [60, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0.4, 1])

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity }}
      className="md:sticky rounded-2xl overflow-hidden w-full"
      css-top={`${88 + index * 20}px`}
      data-index={index}
    >
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background: theme.bg,
          border: `1px solid ${theme.border}`,
          borderTop: `2px solid ${theme.topBorder}`,
        }}
      >
        <div className="grid md:grid-cols-2 min-h-[480px] md:min-h-[420px]">

          {/* Left: text content */}
          <div className="p-8 md:p-10 flex flex-col justify-between">
            <div>
              {/* Category + year */}
              <div className="flex items-center justify-between mb-6">
                <span
                  className="mono-text text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border"
                  style={{ color: theme.accent, borderColor: `${theme.accent}30`, background: `${theme.accent}08` }}
                >
                  {theme.label}
                </span>
                <span className="mono-text text-[10px] text-[#4A4A4A]">{theme.year}</span>
              </div>

              {/* Title */}
              <h3
                className="luxury-heading text-2xl md:text-3xl font-bold text-[#F0EDE8] leading-snug mb-4"
              >
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-[#878787] text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5">
                {(project.technologies || []).map((tech) => (
                  <span key={tech} className="mono-tag">{tech}</span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-8">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                <Github size={13} /> Source Code
              </a>
              {project.live !== '#' && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-fill"
                >
                  <ExternalLink size={13} /> Live Preview
                </a>
              )}
            </div>
          </div>

          {/* Right: image */}
          <div className="relative overflow-hidden min-h-[220px] md:min-h-0">
            <Image
              src={project.image || '/projects/placeholder.png'}
              alt={project.title}
              fill
              className="object-cover object-top"
              style={{ opacity: 0.75 }}
            />
            {/* Gradient overlay from left to blend with text side */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to right, ${theme.bg} 0%, ${theme.bg}80 20%, transparent 60%)`,
              }}
            />
            {/* Large project number watermark */}
            <span
              className="luxury-heading absolute bottom-4 right-5 text-4xl md:text-6xl font-bold select-none pointer-events-none"
              style={{ color: theme.topBorder, opacity: 0.12 }}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  const [headingRef, headingInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="section-label mb-4">03 — Work</p>
          <h2 className="luxury-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-[#F0EDE8]">Some Of My </span>
            <span className="gradient-text italic">Featured</span>
            <span className="text-[#F0EDE8]"> Project</span>
          </h2>
        </motion.div>

        {/* Stacked project cards */}
        <div className="space-y-6">
          {portfolioData.projects.map((project, i) => (
            <div
              key={project.title}
              className="sticky"
              style={{ top: `${88 + i * 20}px`, zIndex: i + 1 }}
            >
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>

        {/* Spacer so last card can scroll fully into view */}
        <div className="h-16" />

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="mono-text text-xs text-[#878787] uppercase tracking-widest mb-4">
            More on GitHub
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
