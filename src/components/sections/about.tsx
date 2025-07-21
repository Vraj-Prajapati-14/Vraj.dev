"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, GraduationCap, Award } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-muted/30 relative section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {portfolioData.personal.about}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Calendar className="text-primary" />
              Work Experience
            </h3>
            <div className="space-y-8">
              {portfolioData.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="glass p-6 rounded-lg"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground">
                        {exp.title}
                      </h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin size={16} className="mr-1" />
                    {exp.location}
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((desc, descIndex) => (
                      <li key={descIndex} className="text-muted-foreground text-sm leading-relaxed">
                        • {desc}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <GraduationCap className="text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {portfolioData.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="glass p-6 rounded-lg"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground">
                        {edu.degree}
                      </h4>
                      <p className="text-primary font-medium">{edu.institution}</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      {edu.year}
                    </span>
                  </div>
                  {edu.cgpa && (
                    <p className="text-muted-foreground mb-3">
                      CGPA: <span className="font-semibold text-foreground">{edu.cgpa}</span>
                    </p>
                  )}
                  {edu.percentage && (
                    <p className="text-muted-foreground mb-3">
                      Percentage: <span className="font-semibold text-foreground">{edu.percentage}</span>
                    </p>
                  )}
                  {edu.coursework && (
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Coursework:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, courseIndex) => (
                          <span
                            key={courseIndex}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12"
            >
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <Award className="text-primary" />
                Awards & Certifications
              </h3>
              <div className="space-y-4">
                {portfolioData.awards.map((award, index) => (
                  <div key={index} className="glass p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      {award.title}
                    </h4>
                    <div className="space-y-2">
                      {award.items.map((item, itemIndex) => (
                        <p key={itemIndex} className="text-muted-foreground text-sm">
                          • {item}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 