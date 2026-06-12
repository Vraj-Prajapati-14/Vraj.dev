"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const aiTools = [
  {
    name: 'Claude',
    by: 'Anthropic',
    description:
      'Daily driver for code generation, architecture discussions, and AI-assisted development. Proficient with the Claude API, Agents SDK, MCP (Model Context Protocol), and Claude Code CLI.',
    tags: ['Claude API', 'Agents SDK', 'MCP', 'Claude Code CLI', 'CLAUDE.md / Rules'],
    gradient: 'from-orange-500/20 via-amber-400/10 to-yellow-500/10',
    border: 'border-orange-500/30',
    badge: 'bg-orange-500/10 text-orange-400 border border-orange-500/20',
    logo: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-label="Claude">
        <circle cx="20" cy="20" r="20" fill="#D97706" opacity="0.15" />
        <text x="50%" y="56%" dominantBaseline="middle" textAnchor="middle" fontSize="18" fontWeight="700" fill="#D97706">C</text>
      </svg>
    ),
  },
  {
    name: 'Cursor',
    by: 'Anysphere',
    description:
      'AI-powered IDE built on VS Code. Used for AI-assisted multi-file editing, inline chat, codebase context search, and agentic code generation across full-stack projects.',
    tags: ['AI Autocomplete', 'Multi-file Edit', 'Codebase Chat', 'Agent Mode'],
    gradient: 'from-violet-500/20 via-purple-400/10 to-indigo-500/10',
    border: 'border-violet-500/30',
    badge: 'bg-violet-500/10 text-violet-400 border border-violet-500/20',
    logo: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-label="Cursor">
        <circle cx="20" cy="20" r="20" fill="#7C3AED" opacity="0.15" />
        <text x="50%" y="56%" dominantBaseline="middle" textAnchor="middle" fontSize="18" fontWeight="700" fill="#7C3AED">▷</text>
      </svg>
    ),
  },
  {
    name: 'Codex',
    by: 'OpenAI',
    description:
      'OpenAI\'s code-generation model powering GitHub Copilot and CLI tools. Used for boilerplate generation, function scaffolding, and natural language to code workflows.',
    tags: ['Code Generation', 'GitHub Copilot', 'CLI', 'NL→Code'],
    gradient: 'from-emerald-500/20 via-teal-400/10 to-cyan-500/10',
    border: 'border-emerald-500/30',
    badge: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    logo: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-label="Codex">
        <circle cx="20" cy="20" r="20" fill="#10B981" opacity="0.15" />
        <text x="50%" y="56%" dominantBaseline="middle" textAnchor="middle" fontSize="18" fontWeight="700" fill="#10B981">⌥</text>
      </svg>
    ),
  },
]

const claudeFeatures = [
  { label: 'Claude API & SDK', desc: 'Direct API integration for custom AI features in apps' },
  { label: 'Agents SDK', desc: 'Build multi-step autonomous agents with tool use' },
  { label: 'MCP', desc: 'Model Context Protocol — connect AI to external data & tools' },
  { label: 'Claude Code CLI', desc: 'Terminal-native AI assistant for engineering workflows' },
  { label: 'CLAUDE.md / Rules', desc: 'Project-level instructions and persistent memory setup' },
]

export function AiTools() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="ai-tools" className="py-20 relative bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            AI Tools I Use
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I actively integrate AI-powered tools into my development workflow — from code generation and architectural decisions to building agentic systems.
          </p>
        </motion.div>

        {/* Tool Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {aiTools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative glass rounded-2xl p-6 border ${tool.border} bg-gradient-to-br ${tool.gradient} hover:scale-[1.02] transition-all duration-300 hover:shadow-lg`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0">{tool.logo}</div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{tool.name}</h3>
                  <span className="text-xs text-muted-foreground">by {tool.by}</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {tool.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {tool.tags.map((tag) => (
                  <span key={tag} className={`text-xs px-2.5 py-1 rounded-full font-medium ${tool.badge}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Claude Deep Dive */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="glass rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 via-amber-400/5 to-transparent p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 rounded-full bg-gradient-to-b from-orange-400 to-amber-500" />
            <h3 className="text-2xl font-bold text-foreground">Claude — Deep Familiarity</h3>
          </div>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            Beyond basic prompting — I understand and work with Claude's full ecosystem including the API, agentic frameworks, tool use, and project-level configuration.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {claudeFeatures.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
                className="flex gap-3 p-4 rounded-xl bg-background/50 border border-border hover:border-orange-500/30 transition-colors"
              >
                <div className="mt-0.5 w-2 h-2 rounded-full bg-orange-400 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground">{f.label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
