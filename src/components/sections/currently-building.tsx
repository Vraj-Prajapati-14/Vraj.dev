"use client"

import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'

const items = [
  { emoji: '🤖', text: 'LLM-powered backends with Claude API & MCP' },
  { emoji: '⚡', text: 'Exploring Bun runtime & Drizzle ORM' },
  { emoji: '🔐', text: 'RBAC systems with fine-grained permission scoping' },
  { emoji: '📡', text: 'Real-time features with WebSocket & Redis pub/sub' },
  { emoji: '🧠', text: 'Learning RAG pipelines & vector databases' },
  { emoji: '🚀', text: 'tRPC + Next.js App Router full-stack patterns' },
]

export function CurrentlyBuilding() {
  return (
    <div
      className="w-full border-y overflow-hidden"
      style={{ borderColor: '#1E1E1E', background: '#0D0D0D' }}
    >
      <div className="flex items-center">
        {/* Label */}
        <div
          className="shrink-0 flex items-center gap-2 px-5 py-3 border-r"
          style={{ borderColor: '#1E1E1E', borderRight: '1px solid #C9A84C22' }}
        >
          <Zap size={12} style={{ color: '#C9A84C' }} />
          <span className="mono-text text-xs uppercase tracking-widest whitespace-nowrap" style={{ color: '#C9A84C' }}>
            Now Building
          </span>
        </div>

        {/* Scrolling marquee */}
        <div className="overflow-hidden flex-1 relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(90deg, #0D0D0D, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-8 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(270deg, #0D0D0D, transparent)' }} />

          <motion.div
            className="flex gap-10 py-3 whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            {/* Duplicate for seamless loop */}
            {[...items, ...items].map((item, i) => (
              <span key={i} className="mono-text text-xs flex items-center gap-2" style={{ color: '#878787' }}>
                <span>{item.emoji}</span>
                {item.text}
                <span className="mx-4" style={{ color: '#242424' }}>—</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
