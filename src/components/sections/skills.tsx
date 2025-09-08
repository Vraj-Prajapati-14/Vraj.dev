"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Database, Server, Cloud, Palette, Wrench, Zap } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'

const skillCategories = [
  { name: 'Languages', icon: Code, skills: portfolioData.skills.languages },
  { name: 'Frontend', icon: Palette, skills: portfolioData.skills.frontend },
  { name: 'Backend', icon: Server, skills: portfolioData.skills.backend },
  { name: 'Database', icon: Database, skills: portfolioData.skills.database },
  { name: 'DevOps', icon: Cloud, skills: portfolioData.skills.devops },
  { name: 'Tools', icon: Wrench, skills: portfolioData.skills.tools },
  { name: 'Integrations', icon: Zap, skills: portfolioData.skills.integrations },
]

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20 relative section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I&apos;ve worked with a variety of technologies to create robust and scalable applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white/15 dark:hover:bg-black/15 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <category.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.name}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    className="flex items-center justify-between"
                  >
                    <span className="text-foreground font-medium">{skill}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${Math.random() * 40 + 60}%` } : {}}
                          transition={{ duration: 1, delay: (index * 0.1) + (skillIndex * 0.05) }}
                          className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'RESTful APIs', 'GraphQL', 'JWT Authentication', 'OAuth', 'CI/CD',
              'Agile/Scrum', 'Git Workflow', 'API Testing', 'Performance Optimization',
              'Responsive Design', 'Progressive Web Apps', 'Microservices', 'Docker Compose'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + (index * 0.05) }}
                className="px-4 py-2 bg-muted text-foreground rounded-full text-sm font-medium hover:bg-muted/80 transition-colors"
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