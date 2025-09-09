"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink, Code, Users, Car } from 'lucide-react'
import Image from 'next/image'
import { portfolioData } from '@/data/portfolio'

const projectIcons = {
  'SocioFeed': Users,
  'Virtual Wheels': Car,
  'Research': Code,
}

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20 relative section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A collection of my recent work showcasing full-stack development, modern technologies, and innovative solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(Array.isArray(portfolioData.projects) ? portfolioData.projects : []).map((project, index) => {
            const IconComponent = projectIcons[project.title as keyof typeof projectIcons] || Code
            const techs = project.technologies || [];
            const highlights = 'highlights' in project && Array.isArray(project.highlights) ? project.highlights : [];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group glass rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-background/80 flex flex-col relative"
              >
                {/* Featured Badge */}
                {project.featured && (
                  <span className="absolute top-3 left-3 bg-gradient-to-r from-primary to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    Featured
                  </span>
                )}
                {/* Project Image with Overlay */}
                <div className="relative">
                  <Image
                    src={project.image || '/projects/placeholder.png'}
                    alt={project.title}
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover rounded-t-xl group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  {/* Project Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <IconComponent className="text-primary" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {techs.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {techs.length > 4 && (
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold shadow-sm">
                        +{techs.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Highlights */}
                <div className="p-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Features</h4>
                  {Array.isArray(highlights) && highlights.length > 0 ? (
                    <ul className="space-y-2 mb-6">
                      {highlights.slice(0, 3).map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="text-muted-foreground text-xs mb-6 italic">See project description and code for details.</div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-primary/10 hover:scale-105 transition-all text-sm font-semibold shadow"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/80 hover:scale-105 transition-all text-sm font-semibold shadow"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Want to see more?
            </h3>
            <p className="text-muted-foreground mb-6">
              I&apos;m constantly working on new projects and improving existing ones. Check out my GitHub for the latest updates.
            </p>
            <motion.a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              <Github size={20} />
              View All Projects
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 