"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FileText, Download } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'

const models = [
  { name: 'BI-LSTM',             acc: 93, color: '#C9A84C' },
  { name: 'CNN',                 acc: 89, color: '#60A5FA' },
  { name: 'GRU',                 acc: 87, color: '#A78BFA' },
  { name: 'Logistic Regression', acc: 82, color: '#34D399' },
  { name: 'Random Forest',       acc: 79, color: '#F87171' },
]

const bigStats = [
  { value: '93%',  label: 'BI-LSTM\nAccuracy',  color: '#C9A84C' },
  { value: '+9%',  label: 'Over Prior\nBaseline', color: '#60A5FA' },
  { value: '5',    label: 'Models\nCompared',    color: '#A78BFA' },
]

export function Research() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })
  const research = portfolioData.research[0]

  return (
    <section id="research" className="py-24 relative" style={{ background: '#0A0A0A' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Heading ── */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-14"
        >
          <span className="mono-text text-[10px] uppercase tracking-[0.22em] mb-3 block" style={{ color: '#C9A84C' }}>
            Research
          </span>
          <h2 className="font-bold leading-tight" style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
            <span className="text-[#F0EDE8] text-3xl sm:text-4xl md:text-5xl">Research &amp; </span>
            <span className="text-3xl sm:text-4xl md:text-5xl italic" style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#4A4030' }}>Innovation</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* ── LEFT ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            {/* Title + description */}
            <h3
              className="text-lg font-semibold text-[#D0C9BE] mb-3 leading-snug"
              style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
            >
              {research.title}
            </h3>
            <p className="text-sm leading-relaxed mb-8" style={{ color: '#4A4540' }}>
              {research.description}
            </p>

            {/* Big stat trio */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {bigStats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                  className="rounded-xl p-4 text-center"
                  style={{ background: '#0E0E0E', border: `1px solid ${s.color}18` }}
                >
                  <p
                    className="text-2xl sm:text-3xl font-black leading-none mb-1.5"
                    style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif', color: s.color }}
                  >
                    {s.value}
                  </p>
                  <p
                    className="text-[9px] uppercase tracking-widest leading-tight whitespace-pre-line"
                    style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif', color: '#3A3530' }}
                  >
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-1.5 mb-8">
              {research.tech?.map((t) => (
                <span
                  key={t}
                  className="text-[10px] px-2.5 py-1 rounded-md"
                  style={{
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    color: '#4A4540',
                    background: '#111111',
                    border: '1px solid #1A1A1A',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <a
                href="/research-paper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-semibold transition-all"
                style={{
                  background: '#F0EDE8',
                  color: '#0A0A0A',
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#C9A84C')}
                onMouseLeave={e => (e.currentTarget.style.background = '#F0EDE8')}
              >
                <FileText size={12} /> View Paper
              </a>
              <a
                href="/research-paper.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-semibold transition-all"
                style={{
                  background: 'transparent',
                  color: '#6A6560',
                  border: '1px solid #222222',
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9A84C'; e.currentTarget.style.color = '#C9A84C' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#222222'; e.currentTarget.style.color = '#6A6560' }}
              >
                <Download size={12} /> Download
              </a>
            </div>
          </motion.div>

          {/* ── RIGHT: model chart ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="rounded-2xl p-7"
            style={{ background: '#0E0E0E', border: '1px solid #161616', borderTop: '2px solid #C9A84C' }}
          >
            <div className="flex items-center justify-between mb-8">
              <span className="mono-text text-[10px] uppercase tracking-widest" style={{ color: '#C9A84C' }}>
                Model Performance
              </span>
              <span className="mono-text text-[9px]" style={{ color: '#2A2A2A' }}>Drug Sentiment · NLP</span>
            </div>

            <div className="space-y-6">
              {models.map((m, i) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: m.color }} />
                      <span
                        className="text-xs"
                        style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif', color: '#5A5550' }}
                      >
                        {m.name}
                      </span>
                      {i === 0 && (
                        <span
                          className="text-[8px] px-1.5 py-0.5 rounded uppercase tracking-widest"
                          style={{ background: `${m.color}18`, color: m.color, fontFamily: 'var(--font-inter)' }}
                        >
                          Best
                        </span>
                      )}
                    </div>
                    <span
                      className="text-sm font-bold tabular-nums"
                      style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif', color: m.color }}
                    >
                      {m.acc}%
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: '#181818' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${m.acc}%` } : {}}
                      transition={{ duration: 1.2, ease: 'easeOut', delay: 0.7 + i * 0.1 }}
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${m.color}88, ${m.color})` }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom note */}
            <div
              className="mt-8 pt-5 flex items-center gap-2"
              style={{ borderTop: '1px solid #141414' }}
            >
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#C9A84C' }} />
              <p className="text-[10px] leading-relaxed" style={{ color: '#2E2A24', fontFamily: 'var(--font-inter)' }}>
                BI-LSTM achieved <span style={{ color: '#C9A84C' }}>93% accuracy</span> — 9% above prior state-of-the-art on drug review sentiment.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
