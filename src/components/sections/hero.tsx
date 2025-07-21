"use client"

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'
import { portfolioData } from '@/data/portfolio'

export function Hero() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Solar Ring Live Animation Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="relative aspect-square w-[110vw] max-w-[500px] max-h-[110vw] md:w-[80vw] md:max-w-[700px] md:max-h-[60vw] lg:w-[700px] lg:max-w-[900px] lg:max-h-[700px]">
          {/* Main ring */}
          <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-rotate-slow" style={{ boxShadow: '0 0 80px 10px rgba(59,130,246,0.08)' }} />
          {/* Inner ring */}
          <div className="absolute inset-[12%] rounded-full border border-purple-400/20 animate-rotate-reverse" />
          {/* Orbiting planet 1 */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-6 h-6 bg-gradient-to-tr from-blue-500 to-purple-400 rounded-full shadow-lg animate-orbit" style={{ animationDuration: '7s' }} />
          {/* Orbiting planet 2 */}
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-3 h-3 bg-gradient-to-tr from-pink-400 to-yellow-300 rounded-full shadow-md animate-orbit2" style={{ animationDuration: '11s' }} />
        </div>
      </div>
      {/* Background is now handled globally by LiveGridBackground component */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Profile Picture */}
        {/* Removed profile image and aura as per user request */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Greeting */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Hello, I&apos;m
          </motion.div> */}

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold gradient-text leading-tight"
          >
            {portfolioData.personal.name}
          </motion.h1>

          {/* Title with Typing Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-foreground/80 font-medium min-h-[2rem] flex items-center justify-center"
          >
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'React.js Developer',
                2000,
                'Node.js Developer',
                2000,
                'MERN Stack Developer',
                2000,
                'TypeScript Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="gradient-text"
            />
          </motion.div>

          {/* Description with Typing Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed min-h-[3rem] flex items-center justify-center"
          >
            <TypeAnimation
              sequence={[
                portfolioData.personal.about,
                3000,
              ]}
              wrapper="p"
              speed={60}
              cursor={true}
              repeat={0}
            />
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center space-x-6"
          >
            <motion.a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href={`mailto:${portfolioData.personal.email}`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>

          {/* Resume Button Group - Centered with Floating Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex justify-center items-center mb-16 animate-float"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3 rounded-full bg-blue-600 text-white font-bold shadow-md hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 transition-all text-base mr-2"
              style={{ minWidth: 140, justifyContent: 'center' }}
            >
              See Resume
            </a>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-3 px-6 py-2 rounded-full border-2 border-blue-400 text-blue-700 font-bold bg-transparent hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 transition-all text-base"
              style={{ minWidth: 170, justifyContent: 'center' }}
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-400 text-white mr-2">
                <Download size={22} />
              </span>
              Download Resume
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={scrollToAbout}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors flex items-center gap-2"
            >
              Learn More
              <ArrowDown size={20} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
} 