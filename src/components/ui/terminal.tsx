"use client"

import { useState, useRef, useEffect, KeyboardEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'

/* ── Types ─────────────────────────────────────────── */
type LineKind = 'system' | 'prompt' | 'output' | 'error' | 'blank'
interface Line {
  kind: LineKind
  text?: string
  multi?: string[]
  color?: string
}

/* ── Constants ─────────────────────────────────────── */
const PROMPT = 'C:\\Users\\Vraj\\Portfolio>'

const COMMANDS: { cmd: string; desc: string }[] = [
  { cmd: 'help',     desc: 'List all available commands' },
  { cmd: 'whoami',   desc: 'Who is Vraj?' },
  { cmd: 'about',    desc: 'Background & story' },
  { cmd: 'skills',   desc: 'Full tech stack' },
  { cmd: 'projects', desc: 'Featured work' },
  { cmd: 'contact',  desc: 'Get in touch' },
  { cmd: 'github',   desc: 'Open GitHub profile' },
  { cmd: 'dir',      desc: 'List portfolio sections' },
  { cmd: 'cls',      desc: 'Clear screen' },
  { cmd: 'exit',     desc: 'Close terminal' },
]

const BOOT: Line[] = [
  { kind: 'system', text: 'Vraj OS [Version 2025.06.16]' },
  { kind: 'system', text: '(c) Vraj Corp. All rights reserved.' },
  { kind: 'blank' },
  { kind: 'system', text: "Type 'help' for a list of available commands." },
  { kind: 'blank' },
]

const HELP_LINES = [
  'The following commands are available:',
  '',
  '  WHOAMI   ........  Who is Vraj?',
  '  ABOUT    ........  Background & story',
  '  SKILLS   ........  Full tech stack',
  '  PROJECTS ........  Featured work',
  '  CONTACT  ........  Get in touch',
  '  GITHUB   ........  Open GitHub profile',
  '  DIR      ........  List sections',
  '  CLS      ........  Clear screen',
  '  EXIT     ........  Close terminal',
]

function run(cmd: string, close: () => void): Line[] {
  const c = cmd.trim().toLowerCase()

  if (c === '') return []

  if (c === 'help') {
    return [{ kind: 'output', multi: HELP_LINES, color: '#F0EDE8' }, { kind: 'blank' }]
  }

  if (c === 'whoami') {
    return [{
      kind: 'output',
      multi: [
        `Name      : ${portfolioData.personal.name}`,
        `Role      : Full-Stack Engineer`,
        `Company   : BACANCY Technologies`,
        `Location  : ${portfolioData.personal.location}`,
        `Email     : ${portfolioData.personal.email}`,
        `GitHub    : github.com/Vraj-Prajapati-14`,
      ],
      color: '#22C55E',
    }, { kind: 'blank' }]
  }

  if (c === 'about') {
    return [{
      kind: 'output',
      multi: [
        portfolioData.personal.about,
        '',
        'Education : B.Tech CSE — CHARUSAT (CGPA 9.33)',
        'Interests : System Design · AI/ML · Cloud Architecture',
      ],
      color: '#00D4FF',
    }, { kind: 'blank' }]
  }

  if (c === 'skills') {
    return [{
      kind: 'output',
      multi: [
        'Languages    : JavaScript, TypeScript, Python, C/C++',
        'Frontend     : React.js, Redux, HTML5, CSS3',
        'Backend      : Node.js, Express.js, NestJS, GraphQL',
        'Database     : PostgreSQL, MySQL, MongoDB',
        'DevOps       : AWS, Docker, CI/CD, Vercel',
        'Security     : JWT, OAuth2, AWS Cognito, RBAC',
        'AI Tools     : Claude API, Cursor, OpenAI Codex, MCP',
      ],
      color: '#C9A84C',
    }, { kind: 'blank' }]
  }

  if (c === 'projects') {
    return [{
      kind: 'output',
      multi: portfolioData.projects.flatMap((p, i) => [
        `[${i + 1}] ${p.title}`,
        `    ${p.technologies.slice(0, 4).join(' · ')}`,
        '',
      ]),
      color: '#A78BFA',
    }]
  }

  if (c === 'contact') {
    return [{
      kind: 'output',
      multi: [
        `Email    : ${portfolioData.personal.email}`,
        `Phone    : ${portfolioData.personal.phone}`,
        `LinkedIn : linkedin.com/in/vraj-prajapati`,
        `GitHub   : github.com/Vraj-Prajapati-14`,
        `Location : ${portfolioData.personal.location}`,
      ],
      color: '#F472B6',
    }, { kind: 'blank' }]
  }

  if (c === 'github') {
    window.open('https://github.com/Vraj-Prajapati-14', '_blank')
    return [{ kind: 'output', multi: ['Opening GitHub profile...'], color: '#22C55E' }, { kind: 'blank' }]
  }

  if (c === 'dir') {
    return [{
      kind: 'output',
      multi: [
        ' Directory of C:\\Users\\Vraj\\Portfolio',
        '',
        '  HOME  ABOUT  SKILLS  RESEARCH  PROJECTS  GITHUB  AI-TOOLS  CONTACT',
      ],
      color: '#F0EDE8',
    }, { kind: 'blank' }]
  }

  if (c === 'cls') {
    return [{ kind: 'blank', text: '__CLS__' }]
  }

  if (c === 'exit') {
    close()
    return []
  }

  return [{
    kind: 'error',
    text: `'${cmd}' is not recognized as an internal or external command,\noperable program or batch file.`,
  }, { kind: 'blank' }]
}

/* ── Component ─────────────────────────────────────── */
export function Terminal() {
  const [open, setOpen]       = useState(false)
  const [lines, setLines]     = useState<Line[]>(BOOT)
  const [input, setInput]     = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [histIdx, setHistIdx] = useState(-1)
  const [suggs, setSuggs]     = useState<typeof COMMANDS>([])
  const [suggIdx, setSuggIdx] = useState(-1)

  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef  = useRef<HTMLInputElement>(null)

  /* Listen for open event from nav */
  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener('vraj:terminal', handler)
    return () => window.removeEventListener('vraj:terminal', handler)
  }, [])

  /* Scroll to bottom on new output */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [lines])

  /* Focus input when open */
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 80)
  }, [open])

  const close = () => {
    setOpen(false)
    setLines(BOOT)
    setInput('')
    setHistory([])
    setHistIdx(-1)
    setSuggs([])
    setSuggIdx(-1)
  }

  const handleInputChange = (val: string) => {
    setInput(val)
    setHistIdx(-1)
    if (val.trim() === '') {
      setSuggs([])
      setSuggIdx(-1)
      return
    }
    const filtered = COMMANDS.filter(c => c.cmd.startsWith(val.toLowerCase()))
    setSuggs(filtered)
    setSuggIdx(-1)
  }

  const applySuggestion = (cmd: string) => {
    setInput(cmd)
    setSuggs([])
    setSuggIdx(-1)
    inputRef.current?.focus()
  }

  const submit = (value?: string) => {
    const trimmed = (value ?? input).trim()
    setSuggs([])
    setSuggIdx(-1)

    const promptLine: Line = { kind: 'prompt', text: trimmed }
    const result = run(trimmed, close)

    if (result.some(l => l.text === '__CLS__')) {
      setLines(BOOT)
      setInput('')
      setHistIdx(-1)
      return
    }

    setLines(prev => [...prev, promptLine, ...result])
    if (trimmed) setHistory(prev => [trimmed, ...prev])
    setInput('')
    setHistIdx(-1)
  }

  const onKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (suggs.length > 0) {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSuggIdx(i => Math.min(i + 1, suggs.length - 1))
        return
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSuggIdx(i => Math.max(i - 1, -1))
        return
      }
      if (e.key === 'Tab' || e.key === 'ArrowRight') {
        e.preventDefault()
        const pick = suggIdx >= 0 ? suggs[suggIdx].cmd : suggs[0].cmd
        applySuggestion(pick)
        return
      }
      if (e.key === 'Enter') {
        if (suggIdx >= 0) {
          e.preventDefault()
          applySuggestion(suggs[suggIdx].cmd)
          return
        }
        // fall through to submit
      }
      if (e.key === 'Escape') {
        setSuggs([])
        setSuggIdx(-1)
        return
      }
    }

    if (e.key === 'Enter') {
      submit()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const next = Math.min(histIdx + 1, history.length - 1)
      setHistIdx(next)
      const val = history[next] ?? ''
      setInput(val)
      handleInputChange(val)
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = Math.max(histIdx - 1, -1)
      setHistIdx(next)
      const val = next === -1 ? '' : history[next]
      setInput(val)
      handleInputChange(val)
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const match = COMMANDS.find(c => c.cmd.startsWith(input.toLowerCase()))
      if (match) applySuggestion(match.cmd)
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="terminal"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="fixed inset-0 z-[99998] flex flex-col"
          style={{
            background: '#0C0C0C',
            fontFamily: 'var(--font-mono), "Courier New", monospace',
          }}
        >
          <div className="flex flex-col h-full w-full">

            {/* ── Title bar ── */}
            <div
              className="flex items-center justify-between px-6 md:px-12 py-3 shrink-0"
              style={{ background: '#141414', borderBottom: '1px solid #2A2A2A' }}
            >
              <span className="text-[11px] text-[#878787]">Command Prompt</span>
              <span className="text-[11px] text-[#4A4A4A] hidden sm:block">vraj@portfolio — C:\Users\Vraj\Portfolio</span>
              <button
                onClick={close}
                className="text-[11px] text-[#878787] hover:text-red-400 transition-colors ml-4"
              >
                × exit
              </button>
            </div>

            {/* ── Output area ── */}
            <div
              className="flex-1 overflow-y-auto px-6 md:px-12 py-6 text-[14px] leading-relaxed"
              style={{ minHeight: 0 }}
              onClick={() => inputRef.current?.focus()}
            >
              {lines.map((line, i) => {
                if (line.kind === 'blank') return <div key={i} className="h-3" />

                if (line.kind === 'system') {
                  return <div key={i} className="text-[#F0EDE8]">{line.text}</div>
                }

                if (line.kind === 'prompt') {
                  return (
                    <div key={i} className="flex gap-1.5">
                      <span style={{ color: '#878787' }}>{PROMPT}</span>
                      <span className="text-[#F0EDE8]">{line.text}</span>
                    </div>
                  )
                }

                if (line.kind === 'error') {
                  return (
                    <div key={i}>
                      {(line.text ?? '').split('\n').map((t, ii) => (
                        <div key={ii} style={{ color: '#EF4444' }}>{t}</div>
                      ))}
                    </div>
                  )
                }

                if (line.kind === 'output' && line.multi) {
                  return (
                    <div key={i}>
                      {line.multi.map((t, ii) => (
                        <div key={ii} style={{ color: line.color ?? '#F0EDE8' }}>{t || ' '}</div>
                      ))}
                    </div>
                  )
                }

                return null
              })}

              {/* ── Active prompt row + autocomplete dropdown ── */}
              <div className="relative">
                {/* Autocomplete dropdown — floats above the input */}
                <AnimatePresence>
                  {suggs.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.12 }}
                      className="absolute bottom-full mb-1 left-0 z-10 overflow-hidden"
                      style={{
                        background: '#1A1A1A',
                        border: '1px solid #2E2E2E',
                        borderRadius: '6px',
                        minWidth: '280px',
                        boxShadow: '0 -8px 32px rgba(0,0,0,0.6)',
                      }}
                    >
                      {/* Dropdown header */}
                      <div
                        className="px-3 py-1.5 text-[10px] uppercase tracking-widest flex items-center gap-2"
                        style={{ borderBottom: '1px solid #2A2A2A', color: '#4A4A4A' }}
                      >
                        <span style={{ color: '#C9A84C' }}>▸</span>
                        <span>Tab / ↑↓ to navigate · Enter to select</span>
                      </div>

                      {suggs.map((s, i) => (
                        <button
                          key={s.cmd}
                          onMouseDown={(e) => { e.preventDefault(); applySuggestion(s.cmd) }}
                          className="w-full flex items-center gap-3 px-3 py-2 text-left transition-colors"
                          style={{
                            background: i === suggIdx ? 'rgba(201,168,76,0.10)' : 'transparent',
                            borderLeft: i === suggIdx ? '2px solid #C9A84C' : '2px solid transparent',
                          }}
                        >
                          {/* Command name — highlight matching prefix */}
                          <span className="text-[13px] w-20 shrink-0" style={{ color: i === suggIdx ? '#C9A84C' : '#F0EDE8' }}>
                            <span style={{ color: '#C9A84C' }}>{s.cmd.slice(0, input.length)}</span>
                            <span style={{ color: i === suggIdx ? '#F0EDE8' : '#555555' }}>{s.cmd.slice(input.length)}</span>
                          </span>
                          {/* Separator */}
                          <span style={{ color: '#2E2E2E' }}>│</span>
                          {/* Description */}
                          <span className="text-[11px] truncate" style={{ color: i === suggIdx ? '#878787' : '#3A3A3A' }}>
                            {s.desc}
                          </span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Prompt input row */}
                <div className="flex gap-1.5 items-center">
                  <span style={{ color: '#878787' }}>{PROMPT}</span>
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={e => handleInputChange(e.target.value)}
                    onKeyDown={onKey}
                    className="flex-1 bg-transparent outline-none text-[#F0EDE8] caret-[#C9A84C]"
                    autoComplete="off"
                    autoCapitalize="off"
                    spellCheck={false}
                    aria-label="Terminal input"
                  />
                </div>
              </div>

              <div ref={bottomRef} />
            </div>

            {/* ── Status bar ── */}
            <div
              className="flex items-center justify-between px-6 md:px-12 py-2 shrink-0 text-[11px]"
              style={{ background: '#141414', borderTop: '1px solid #2A2A2A' }}
            >
              <span style={{ color: '#22C55E' }}>● vraj@portfolio</span>
              <div className="flex items-center gap-6 text-[#4A4A4A]">
                <span>↑↓ navigate</span>
                <span>Tab / → complete</span>
                <span>Enter to run</span>
                <span>Esc dismiss</span>
              </div>
              <span style={{ color: '#878787' }}>CMD</span>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
