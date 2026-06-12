"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Target, TrendingUp, Code, BarChart3, Zap } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'

const features = [
  { icon: Brain,    title: 'Deep Learning Models',      desc: 'BI-LSTM, CNN, GRU, and Transformer-based models.' },
  { icon: Target,   title: '93% Accuracy',              desc: 'BI-LSTM surpassed previous results by 9%.' },
  { icon: TrendingUp, title: 'Performance Optimization', desc: 'Hyperparameter tuning and advanced preprocessing.' },
  { icon: Code,     title: 'Modern Frameworks',         desc: 'TensorFlow, Keras, and Hugging Face Transformers.' },
  { icon: BarChart3, title: 'Algorithmic Comparison',   desc: 'Detailed statistical analysis across 5 models.' },
  { icon: Zap,      title: 'Real-world Application',    desc: 'Pharmaceutical sentiment analysis at scale.' },
]

const models = [
  { name: 'BI-LSTM',            acc: 93, color: '#C9A84C' },
  { name: 'CNN',                acc: 89, color: '#00D4FF' },
  { name: 'GRU',                acc: 87, color: '#7C3AED' },
  { name: 'Logistic Regression', acc: 82, color: '#10B981' },
  { name: 'Random Forest',       acc: 79, color: '#F87171' },
]

export function Research() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const research = portfolioData.research[0]

  return (
    <section id="research" className="py-24 relative" style={{ background: '#0D0D0D' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="section-label mb-2">Research</p>
          <h2 className="luxury-heading text-4xl md:text-5xl font-bold text-[#F0EDE8]">
            Research & Innovation
          </h2>
          <div className="gold-rule-left mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 mb-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h3 className="luxury-heading text-2xl font-bold text-[#F0EDE8] mb-4">{research.title}</h3>
            <p className="text-sm text-[#878787] leading-relaxed mb-6">{research.description}</p>

            <div className="space-y-3 mb-8">
              {research.highlights?.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-[#878787]">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0" />
                  {h}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5 mb-8">
              {research.tech?.map((t) => (
                <span key={t} className="mono-tag">{t}</span>
              ))}
            </div>

            {/* Stats */}
            <div className="luxury-card p-6 grid grid-cols-2 gap-6 mb-8">
              {[{ val: '93%', label: 'BI-LSTM Accuracy' }, { val: '+9%', label: 'Improvement' }].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="luxury-heading text-4xl font-bold gradient-text">{s.val}</p>
                  <p className="mono-text text-xs text-[#878787] uppercase tracking-widest mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="/research-paper.pdf" target="_blank" rel="noopener noreferrer" className="btn-gold-fill">
                See Paper
              </a>
              <a href="/research-paper.pdf" download className="btn-gold">
                Download Paper
              </a>
            </div>
          </motion.div>

          {/* Right — model chart */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="luxury-card p-8"
            style={{ borderTop: '2px solid #C9A84C' }}
          >
            <h4 className="mono-text text-xs uppercase tracking-widest text-[#C9A84C] mb-6">Model Performance</h4>
            <div className="space-y-5">
              {models.map((m, i) => (
                <motion.div key={m.name} className="space-y-1.5"
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
                >
                  <div className="flex justify-between items-center">
                    <span className="mono-text text-xs text-[#878787]">{m.name}</span>
                    <span className="mono-text text-xs font-bold" style={{ color: m.color }}>{m.acc}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[#1A1A1A] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${m.acc}%` } : {}}
                      transition={{ duration: 1.2, delay: 0.8 + i * 0.1 }}
                      className="h-full rounded-full"
                      style={{ background: m.color }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.7 + i * 0.08 }}
              className="luxury-card p-5 group"
            >
              <div className="w-9 h-9 rounded border border-[#242424] flex items-center justify-center mb-4 group-hover:border-[#C9A84C] transition-colors">
                <f.icon size={16} style={{ color: '#C9A84C' }} />
              </div>
              <h4 className="mono-text text-xs uppercase tracking-widest text-[#F0EDE8] mb-2">{f.title}</h4>
              <p className="text-xs text-[#878787] leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
