"use client"

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function IntroAnimation() {
  const [phase, setPhase] = useState<'in' | 'hold' | 'out' | 'done'>('in')

  useEffect(() => {
    // in  → 0ms
    // hold → 900ms
    // out  → 1400ms
    // done → 2100ms
    const t1 = setTimeout(() => setPhase('hold'), 900)
    const t2 = setTimeout(() => setPhase('out'),  1400)
    const t3 = setTimeout(() => setPhase('done'), 2100)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  if (phase === 'done') return null

  return (
    <AnimatePresence>
      <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          animate={{ opacity: phase === 'out' ? 0 : 1 }}
          transition={{ duration: 0.65, ease: 'easeInOut' }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
          style={{ background: '#0A0A0A' }}
        >
          {/* Monogram */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.4em' }}
            animate={{ opacity: 1, letterSpacing: '0.15em' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="luxury-heading text-6xl md:text-8xl font-bold gradient-text"
          >
            VP.
          </motion.p>

          {/* Expanding gold line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
            className="mt-5 h-px origin-left"
            style={{
              width: '120px',
              background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
            }}
          />

          {/* Sub-label */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mono-text text-xs tracking-[0.35em] uppercase mt-4"
            style={{ color: '#4A4A4A' }}
          >
            Full-Stack Engineer
          </motion.p>
        </motion.div>
    </AnimatePresence>
  )
}
