"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, CheckCircle, CheckCircle2, XCircle, X, Send, Calendar } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'
import emailjs from 'emailjs-com'
import { useState, useEffect, useRef } from 'react'

type Toast = { type: 'success' | 'error'; message: string } | null
type Tab   = 'vision' | 'slot'

const TIME_SLOTS = ['10:00 AM', '11:30 AM', '02:00 PM', '04:30 PM', '06:00 PM']

const inputClass =
  'w-full px-4 py-3 rounded-lg text-[#F0EDE8] text-sm placeholder-[#4A4A4A] focus:outline-none focus:border-[#C9A84C] transition-colors duration-200 mono-text border border-[#242424]'
const inputStyle = { background: '#0D0D0D' }

export function Contact() {
  const [ref, inView]       = useInView({ triggerOnce: true, threshold: 0.06 })
  const [tab, setTab]       = useState<Tab>('vision')
  const [loading, setLoading] = useState(false)
  const [toast, setToast]   = useState<Toast>(null)
  const [selectedDate, setSelectedDate] = useState(0)
  const [selectedTime, setSelectedTime] = useState('')
  const [weekDays, setWeekDays]         = useState<{ day: string; date: number; month: string }[]>([])
  const timerRef            = useRef<ReturnType<typeof setTimeout> | null>(null)

  /* Generate next 7 days on client */
  useEffect(() => {
    const days: { day: string; date: number; month: string }[] = []
    const dayNames  = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    const monthNames = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']
    const today = new Date()
    for (let i = 0; i < 7; i++) {
      const d = new Date(today)
      d.setDate(today.getDate() + i)
      days.push({ day: dayNames[d.getDay()], date: d.getDate(), month: monthNames[d.getMonth()] })
    }
    setWeekDays(days)
    setSelectedDate(0)
  }, [])

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
      showToast('success', "Message sent! I'll get back to you within 24 hours.")
      form.reset()
    } catch {
      showToast('error', 'Failed to send. Please email me directly.')
    } finally {
      setLoading(false)
    }
  }

  const confirmSlot = () => {
    const day = weekDays[selectedDate]
    if (!day || !selectedTime) return
    const subject = `Meeting Request: ${day.day} ${day.date} ${day.month} at ${selectedTime} IST`
    window.open(`mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Vraj,\n\nI'd like to schedule a 15-minute call on ${day.day} ${day.date} ${day.month} at ${selectedTime} IST.\n\nPlease confirm if this works for you.\n\nBest regards,`)}`)
    showToast('success', `Appointment request sent for ${day.day} ${day.date} ${day.month} at ${selectedTime}!`)
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">

      {/* ── Toast ── */}
      <div className="fixed bottom-6 right-6 z-[9000] pointer-events-none">
        <motion.div
          key={toast ? toast.type + toast.message : 'empty'}
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={toast ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 24, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="pointer-events-auto"
        >
          {toast && (
            <div className="flex items-start gap-3 px-4 py-3 rounded-lg w-[calc(100vw-3rem)] sm:w-auto sm:min-w-[280px] max-w-xs"
              style={{
                background: '#111111',
                border: `1px solid ${toast.type === 'success' ? 'rgba(201,168,76,0.4)' : 'rgba(239,68,68,0.4)'}`,
                borderLeft: `3px solid ${toast.type === 'success' ? '#C9A84C' : '#EF4444'}`,
                boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
              }}>
              {toast.type === 'success'
                ? <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: '#C9A84C' }} />
                : <XCircle     size={16} className="shrink-0 mt-0.5" style={{ color: '#EF4444' }} />}
              <p className="mono-text text-xs text-[#F0EDE8] leading-relaxed flex-1">{toast.message}</p>
              <button onClick={() => setToast(null)} className="shrink-0 ml-1 text-[#4A4A4A] hover:text-[#878787] transition-colors">
                <X size={13} />
              </button>
            </div>
          )}
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Hero heading ── */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <h2 className="luxury-heading font-bold leading-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            <span className="text-[#F0EDE8]">Let&apos;s </span>
            <span className="text-[#333333] italic">Build</span>
            {/* Inline photo */}
            <span className="inline-flex items-end mx-3 align-bottom mb-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/DP.jpeg"
                alt="Vraj"
                className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover object-top border-2 border-[#2A2A2A] grayscale inline-block"
              />
            </span>
            <br />
            <span className="text-[#F0EDE8]">Something.</span>
          </h2>

          <p className="text-[#878787] text-base max-w-md leading-relaxed mb-8">
            Have an idea, a project, or just want to talk? I&apos;m open to full-time roles, freelance work, collaborations, and interesting problems.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setTab('slot')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#2A2A2A] text-[#F0EDE8] text-sm mono-text hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
            >
              <Calendar size={14} /> Book a 15-Min Call
            </button>
            <button
              onClick={() => setTab('vision')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F0EDE8] text-[#0A0A0A] text-sm font-bold mono-text hover:bg-[#C9A84C] transition-colors"
            >
              <Mail size={14} /> Get in Touch
            </button>
          </div>
        </motion.div>

        {/* ── Tab card ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-2xl overflow-hidden"
          style={{ background: '#0F0F0F', border: '1px solid #1E1E1E' }}
        >
          {/* Tab switcher */}
          <div className="flex border-b border-[#1E1E1E]">
            {(['vision', 'slot'] as Tab[]).map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="flex-1 py-4 mono-text text-xs uppercase tracking-widest transition-colors"
                style={{
                  color: tab === t ? '#C9A84C' : '#4A4A4A',
                  borderBottom: tab === t ? '2px solid #C9A84C' : '2px solid transparent',
                  background: tab === t ? 'rgba(201,168,76,0.04)' : 'transparent',
                }}
              >
                {t === 'vision' ? 'Share Your Vision' : 'Pick Your Slot'}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {/* ── Vision tab ── */}
            {tab === 'vision' && (
              <motion.div
                key="vision"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="grid sm:grid-cols-2 gap-0"
              >
                {/* Left: copy */}
                <div className="p-6 sm:p-8 md:p-10 border-b sm:border-b-0 sm:border-r border-[#1E1E1E]">
                  <p className="luxury-heading text-2xl font-bold text-[#F0EDE8] mb-3 uppercase tracking-wide">
                    Share Your Vision.
                  </p>
                  <p className="text-[#878787] text-sm leading-relaxed mb-8">
                    Let me know the details of your request. I specialise in building exactly what you need, even if you can&apos;t explain the code behind it.
                  </p>
                  <div className="space-y-3">
                    {[
                      'Free 24h Response Strategy',
                      'End-to-End Execution Plan',
                    ].map(item => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle size={14} style={{ color: '#C9A84C' }} className="shrink-0" />
                        <span className="text-sm text-[#878787]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: form */}
                <div className="p-8 md:p-10">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="hidden" name="to_name" value="Vraj" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="mono-text text-[10px] uppercase tracking-widest text-[#4A4A4A] flex items-center gap-1.5 mb-2">
                          <Mail size={10} /> Name
                        </label>
                        <input type="text" name="from_name" required className={inputClass} style={inputStyle} placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="mono-text text-[10px] uppercase tracking-widest text-[#4A4A4A] flex items-center gap-1.5 mb-2">
                          <Mail size={10} /> Email
                        </label>
                        <input type="email" name="reply_to" required className={inputClass} style={inputStyle} placeholder="john@example.com" />
                      </div>
                    </div>
                    <div>
                      <label className="mono-text text-[10px] uppercase tracking-widest text-[#4A4A4A] flex items-center gap-1.5 mb-2">
                        <Send size={10} /> Your Vision
                      </label>
                      <textarea name="message" rows={4} required
                        className={inputClass + ' resize-none'}
                        style={inputStyle}
                        placeholder="Tell me about your project..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 rounded-full bg-[#F0EDE8] text-[#0A0A0A] text-sm font-bold mono-text hover:bg-[#C9A84C] transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                      <Send size={14} />
                      {loading ? 'Sending...' : 'Send Inquiry'}
                    </button>
                  </form>
                </div>
              </motion.div>
            )}

            {/* ── Slot tab ── */}
            {tab === 'slot' && (
              <motion.div
                key="slot"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="grid sm:grid-cols-2 gap-0"
              >
                {/* Left: date picker */}
                <div className="p-6 sm:p-8 md:p-10 border-b sm:border-b-0 sm:border-r border-[#1E1E1E]">
                  <p className="luxury-heading text-2xl font-bold text-[#F0EDE8] mb-2 uppercase tracking-wide">
                    Pick Your Slot.
                  </p>
                  <p className="text-[#878787] text-sm leading-relaxed mb-8">
                    Select a date and time that works best for you. Let&apos;s talk business + technology.
                  </p>

                  <p className="mono-text text-[10px] uppercase tracking-widest text-[#4A4A4A] mb-3">Available Week</p>
                  <div className="flex flex-wrap gap-2">
                    {weekDays.map((d, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedDate(i)}
                        className="flex flex-col items-center px-3 py-2.5 rounded-xl border transition-all text-center min-w-[52px]"
                        style={{
                          borderColor: selectedDate === i ? '#C9A84C' : '#242424',
                          background:  selectedDate === i ? 'rgba(201,168,76,0.08)' : '#111111',
                          color: selectedDate === i ? '#C9A84C' : '#878787',
                        }}
                      >
                        <span className="mono-text text-[9px] uppercase tracking-widest">{d.day}</span>
                        <span className="luxury-heading text-lg font-bold mt-0.5">{d.date}</span>
                        <span className="mono-text text-[9px] uppercase tracking-widest">{d.month}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right: time slots + confirm */}
                <div className="p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <p className="mono-text text-[10px] uppercase tracking-widest text-[#4A4A4A] mb-4">
                      Available Slots (IST)
                    </p>
                    <div className="grid grid-cols-2 gap-2 mb-8">
                      {TIME_SLOTS.map(t => (
                        <button
                          key={t}
                          onClick={() => setSelectedTime(t)}
                          className="py-2.5 px-3 rounded-xl border mono-text text-sm transition-all"
                          style={{
                            borderColor: selectedTime === t ? '#C9A84C' : '#242424',
                            background:  selectedTime === t ? 'rgba(201,168,76,0.08)' : '#111111',
                            color: selectedTime === t ? '#C9A84C' : '#878787',
                          }}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={confirmSlot}
                      disabled={!selectedTime || weekDays.length === 0}
                      className="w-full py-3.5 rounded-full border border-[#2A2A2A] text-[#878787] text-sm mono-text hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Confirm Appointment →
                    </button>
                    <p className="mono-text text-[9px] text-center mt-3 uppercase tracking-widest" style={{ color: '#2A2A2A' }}>
                      Securely Encrypted · Vraj Scheduler
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}
