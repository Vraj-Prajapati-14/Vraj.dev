"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const facts = [
  "I write console.log() everywhere and call it \"strategic debugging.\"",
  "I've named variables data, data2, finalData, and finalDataV2 in the same file.",
  "I once debugged for 2 hours. The issue was a missing comma in a JSON file.",
  "My most-used Git command is git stash — I have 11 stashes I'll \"get to later.\"",
  "I deploy on Fridays and cope by trusting my own tests. It's fine.",
  "Half my TODO comments are from last year. They're probably still valid. Probably.",
  "I open 30 browser tabs for one feature and close them all without reading half.",
  "I've Googled \"how to merge objects in JavaScript\" at least once this month.",
]

export function FunFacts() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: '#080808' }}>
      {/* Subtle center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.03) 0%, transparent 65%)' }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2
            className="font-bold text-[#F0EDE8] mb-4 leading-tight"
            style={{
              fontFamily: 'var(--font-caveat)',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              letterSpacing: '0.01em',
            }}
          >
            Things I Probably{' '}
            <span style={{ color: '#3A3A3A', fontStyle: 'italic' }}>Shouldn&apos;t Admit</span>
          </h2>
          <div
            className="w-16 h-px mx-auto"
            style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}
          />
        </motion.div>

        {/* Facts list */}
        <div className="space-y-4">
          {facts.map((fact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.07 }}
              className="flex items-start gap-3"
            >
              <span className="text-[#C9A84C] mt-0.5 shrink-0" style={{ fontFamily: 'var(--font-caveat)', fontSize: '1.4rem' }}>·</span>
              <p
                className="text-[#878787] leading-relaxed"
                style={{
                  fontFamily: 'var(--font-caveat)',
                  fontSize: 'clamp(1.05rem, 4vw, 1.35rem)',
                }}
              >
                {fact}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
