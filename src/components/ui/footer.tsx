"use client"

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'

export function Footer() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <footer className="w-full border-t border-border bg-background/80 py-10 mt-16">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-6">
        {/* Logo and Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=""
        >
          <h3 className="text-2xl font-bold gradient-text mb-2">
            {portfolioData.personal.name}
          </h3>
          <p className="text-base text-muted-foreground max-w-xl">
            {portfolioData.personal.about}
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex gap-4 mt-2"
        >
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-muted p-3 hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-primary transition-colors shadow"
          >
            <Github className="w-5 h-5 text-primary" />
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-muted p-3 hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-primary transition-colors shadow"
          >
            <Linkedin className="w-5 h-5 text-primary" />
          </a>
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="rounded-full bg-muted p-3 hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-primary transition-colors shadow"
          >
            <Mail className="w-5 h-5 text-primary" />
          </a>
        </motion.div>

        {/* Copyright */}
        <motion.div
         
        >
          <p className="text-xs text-muted-foreground">
            © {mounted ? new Date().getFullYear() : '2025'} {portfolioData.personal.name}. Made with{' '}
            <Heart className="inline-block w-4 h-4 text-red-500" /> 
          </p>
        </motion.div>
      </div>
    </footer>
  )
} 