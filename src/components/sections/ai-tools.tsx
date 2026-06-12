"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const aiTools = [
  {
    name: 'Claude',
    by: 'Anthropic',
    description:
      'Primary AI assistant for architecture reviews, code generation, and agent-based workflows. Proficient with Claude API, Agents SDK, MCP, and Claude Code CLI for terminal-native engineering.',
    tags: ['Claude API', 'Agents SDK', 'MCP', 'Claude Code CLI', 'CLAUDE.md / Rules'],
    accentColor: '#C9A84C',
    borderStyle: { borderTop: '2px solid #C9A84C' },
    initial: 'C',
  },
  {
    name: 'Cursor',
    by: 'Anysphere',
    description:
      'AI-powered IDE for multi-file editing, codebase chat, and agentic code generation. Used daily for inline AI suggestions, refactors, and natural language to code across full-stack projects.',
    tags: ['AI Autocomplete', 'Multi-file Edit', 'Codebase Chat', 'Agent Mode'],
    accentColor: '#7C3AED',
    borderStyle: { borderTop: '2px solid #7C3AED' },
    initial: '▷',
  },
  {
    name: 'Codex',
    by: 'OpenAI',
    description:
      "OpenAI's code model powering GitHub Copilot. Used for boilerplate generation, function scaffolding, and natural language to code workflows in daily development.",
    tags: ['Code Generation', 'GitHub Copilot', 'NL→Code', 'CLI'],
    accentColor: '#10B981',
    borderStyle: { borderTop: '2px solid #10B981' },
    initial: '⌥',
  },
]

const claudeFeatures = [
  { label: 'Claude API & SDK',  desc: 'Direct API calls, streaming, tool use, prompt caching' },
  { label: 'Agents SDK',         desc: 'Multi-step autonomous agents with tool calling' },
  { label: 'MCP',               desc: 'Model Context Protocol — connect AI to external tools & data' },
  { label: 'Claude Code CLI',   desc: 'Terminal-native AI assistant for engineering tasks' },
  { label: 'CLAUDE.md / Rules', desc: 'Project-level memory, instructions & persistent context' },
]

export function AiTools() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section id="ai-tools" className="py-24 relative" style={{ background: '#0D0D0D' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="section-label mb-2">04 — AI Integration</p>
          <h2 className="luxury-heading text-4xl md:text-5xl font-bold text-[#F0EDE8]">
            AI Tools I Use
          </h2>
          <div className="gold-rule-left mt-4" />
          <p className="text-[#878787] text-sm mt-5 max-w-xl">
            Beyond code editors — I build with and on top of AI systems, integrating them into real production workflows.
          </p>
        </motion.div>

        {/* Tool cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {aiTools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="luxury-card p-6 flex flex-col"
              style={tool.borderStyle}
            >
              {/* Logo + name */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center luxury-heading text-xl font-bold shrink-0"
                  style={{ background: `${tool.accentColor}18`, color: tool.accentColor }}
                >
                  {tool.initial}
                </div>
                <div>
                  <h3 className="luxury-heading text-lg font-bold text-[#F0EDE8]">{tool.name}</h3>
                  <p className="mono-text text-xs text-[#878787]">by {tool.by}</p>
                </div>
              </div>

              <p className="text-sm text-[#878787] leading-relaxed mb-5 flex-1">{tool.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {tool.tags.map((tag) => (
                  <span
                    key={tag}
                    className="mono-text text-xs px-2.5 py-1 rounded border"
                    style={{
                      color: tool.accentColor,
                      background: `${tool.accentColor}12`,
                      borderColor: `${tool.accentColor}30`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Claude deep dive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="luxury-card p-8"
          style={{ borderTop: '2px solid #C9A84C' }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1.5 h-7 rounded-full bg-[#C9A84C]" />
            <h3 className="luxury-heading text-xl font-bold text-[#F0EDE8]">Claude — Full Ecosystem</h3>
          </div>
          <p className="text-sm text-[#878787] mb-7 ml-5">
            Deep familiarity beyond basic prompting — API integration, agent orchestration, tool use, and project-level configuration.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {claudeFeatures.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.55 + i * 0.07 }}
                className="luxury-card p-4 hover:border-[#C9A84C] transition-colors duration-300"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0" />
                  <p className="mono-text text-xs font-semibold text-[#F0EDE8] uppercase tracking-wider">{f.label}</p>
                </div>
                <p className="text-xs text-[#878787] ml-3.5 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
