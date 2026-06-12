"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, XCircle, X } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'
import emailjs from 'emailjs-com'
import { useState, useEffect, useRef } from 'react'

const contactInfo = [
  { icon: Mail,   label: 'Email',    value: portfolioData.personal.email,    href: `mailto:${portfolioData.personal.email}` },
  { icon: Phone,  label: 'Phone',    value: portfolioData.personal.phone,    href: `tel:${portfolioData.personal.phone}` },
  { icon: MapPin, label: 'Location', value: portfolioData.personal.location, href: '#' },
]

const inputClass =
  'w-full px-4 py-3 bg-[#0F0F0F] border border-[#242424] rounded text-[#F0EDE8] text-sm placeholder-[#4A4A4A] focus:outline-none focus:border-[#C9A84C] transition-colors duration-200 mono-text'

type Toast = { type: 'success' | 'error'; message: string } | null

export function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [loading, setLoading] = useState(false)
  const [toast, setToast]     = useState<Toast>(null)
  const timerRef              = useRef<ReturnType<typeof setTimeout> | null>(null)

  const showToast = (type: 'success' | 'error', message: string) => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setToast({ type, message })
    timerRef.current = setTimeout(() => setToast(null), 5000)
  }

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current) }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    try {
      await emailjs.sendForm('service_t1bzn0t', 'template_aqielag', form, 'bn8wfDRg8QZNfk3ve')
      showToast('success', 'Message sent! I\'ll get back to you within 24 hours.')
      form.reset()
    } catch {
      showToast('error', 'Failed to send. Please email me directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 relative">

      {/* ── Toast notification ── */}
      <div className="fixed bottom-6 right-6 z-[9000] pointer-events-none">
        <motion.div
          key={toast ? toast.type + toast.message : 'empty'}
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={toast ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 24, scale: 0.95 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="pointer-events-auto"
        >
          {toast && (
            <div
              className="flex items-start gap-3 px-4 py-3 rounded-lg min-w-[280px] max-w-xs"
              style={{
                background: '#111111',
                border: `1px solid ${toast.type === 'success' ? 'rgba(201,168,76,0.4)' : 'rgba(239,68,68,0.4)'}`,
                borderLeft: `3px solid ${toast.type === 'success' ? '#C9A84C' : '#EF4444'}`,
                boxShadow: `0 8px 32px rgba(0,0,0,0.5), 0 0 20px ${toast.type === 'success' ? 'rgba(201,168,76,0.08)' : 'rgba(239,68,68,0.08)'}`,
              }}
            >
              {toast.type === 'success'
                ? <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: '#C9A84C' }} />
                : <XCircle     size={16} className="shrink-0 mt-0.5" style={{ color: '#EF4444' }} />
              }
              <p className="mono-text text-xs text-[#F0EDE8] leading-relaxed flex-1">{toast.message}</p>
              <button
                onClick={() => setToast(null)}
                className="shrink-0 ml-1 text-[#4A4A4A] hover:text-[#878787] transition-colors"
              >
                <X size={13} />
              </button>
            </div>
          )}
        </motion.div>
      </div>
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
                {/* Hidden fields that match EmailJS template variables */}
                <input type="hidden" name="to_name" value="Vraj" />

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="mono-text text-xs text-[#878787] uppercase tracking-widest block mb-2">Name</label>
                    {/* name="from_name" matches {{from_name}} in template */}
                    <input type="text" name="from_name" required className={inputClass} placeholder="Your name" />
                  </div>
                  <div>
                    <label className="mono-text text-xs text-[#878787] uppercase tracking-widest block mb-2">Email</label>
                    {/* name="reply_to" matches {{reply_to}} — also sets reply-to header */}
                    <input type="email" name="reply_to" required className={inputClass} placeholder="your@email.com" />
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
