"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'
import emailjs from 'emailjs-com'
import { useState } from 'react'

const contactInfo = [
  { icon: Mail,   label: 'Email',    value: portfolioData.personal.email,    href: `mailto:${portfolioData.personal.email}` },
  { icon: Phone,  label: 'Phone',    value: portfolioData.personal.phone,    href: `tel:${portfolioData.personal.phone}` },
  { icon: MapPin, label: 'Location', value: portfolioData.personal.location, href: '#' },
]

const inputClass =
  'w-full px-4 py-3 bg-[#0F0F0F] border border-[#242424] rounded text-[#F0EDE8] text-sm placeholder-[#4A4A4A] focus:outline-none focus:border-[#C9A84C] transition-colors duration-200 mono-text'

export function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError]     = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true); setSuccess(null); setError(null)
    const form = e.currentTarget
    try {
      await emailjs.sendForm('service_t1bzn0t', 'template_aqielag', form, 'bn8wfDRg8QZNfk3ve')
      setSuccess('Message sent successfully!')
      form.reset()
    } catch {
      setError('Failed to send. Please try again or email me directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="section-label mb-2">05 — Contact</p>
          <h2 className="luxury-heading text-4xl md:text-5xl font-bold text-[#F0EDE8]">
            Get In Touch
          </h2>
          <div className="gold-rule-left mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-[#878787] text-sm leading-relaxed mb-10 max-w-sm">
              Open to full-time roles, freelance projects, and collaborations. I typically respond within 24 hours.
            </p>

            <div className="space-y-5 mb-10">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded border border-[#242424] flex items-center justify-center text-[#878787] group-hover:border-[#C9A84C] group-hover:text-[#C9A84C] transition-colors shrink-0">
                    <info.icon size={15} />
                  </div>
                  <div>
                    <p className="mono-text text-xs text-[#4A4A4A] uppercase tracking-widest">{info.label}</p>
                    <p className="text-sm text-[#F0EDE8] group-hover:text-[#C9A84C] transition-colors">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex gap-3">
              {[
                { href: portfolioData.personal.github,   icon: Github,   label: 'GitHub' },
                { href: portfolioData.personal.linkedin, icon: Linkedin, label: 'LinkedIn' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded border border-[#242424] flex items-center justify-center text-[#878787] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="luxury-card p-8" style={{ borderTop: '2px solid #C9A84C' }}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="mono-text text-xs text-[#878787] uppercase tracking-widest block mb-2">Name</label>
                    <input type="text" name="name" required className={inputClass} placeholder="Your name" />
                  </div>
                  <div>
                    <label className="mono-text text-xs text-[#878787] uppercase tracking-widest block mb-2">Email</label>
                    <input type="email" name="email" required className={inputClass} placeholder="your@email.com" />
                  </div>
                </div>

                <div>
                  <label className="mono-text text-xs text-[#878787] uppercase tracking-widest block mb-2">Subject</label>
                  <input type="text" name="subject" required className={inputClass} placeholder="What's this about?" />
                </div>

                <div>
                  <label className="mono-text text-xs text-[#878787] uppercase tracking-widest block mb-2">Message</label>
                  <textarea name="message" rows={5} required className={inputClass + ' resize-none'} placeholder="Tell me about your project..." />
                </div>

                {success && <p className="mono-text text-xs text-[#10B981] text-center">{success}</p>}
                {error   && <p className="mono-text text-xs text-red-400 text-center">{error}</p>}

                <button type="submit" disabled={loading} className="btn-gold-fill w-full justify-center">
                  <Send size={14} />
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
