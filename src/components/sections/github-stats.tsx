"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, Star, GitFork, BookOpen, Users, Code2, Zap, Activity } from 'lucide-react'

const USERNAME = 'vraj-prajapati'

const LANG_COLORS: Record<string, string> = {
  JavaScript:       '#F7DF1E',
  TypeScript:       '#3178C6',
  Python:           '#3572A5',
  'Jupyter Notebook': '#DA5B0B',
  PHP:              '#777BB4',
  CSS:              '#563D7C',
  HTML:             '#E34C26',
  'C++':            '#F34B7D',
  C:                '#555555',
  'C#':             '#178600',
  Java:             '#B07219',
  Go:               '#00ADD8',
  Rust:             '#DEA584',
  Shell:            '#89E051',
  EJS:              '#a91e50',
}

interface GitHubUser {
  public_repos: number
  followers: number
  following: number
  name: string
}

interface Repo {
  stargazers_count: number
  forks_count: number
  language: string | null
  name: string
  fork: boolean
}

interface Stats {
  repos: number
  stars: number
  forks: number
  followers: number
  following: number
  topLangs: { name: string; count: number; pct: number }[]
}

const leetSkills = [
  { label: 'Algorithms',      desc: 'DP, graphs, trees, binary search, sliding window' },
  { label: 'Data Structures', desc: 'Heaps, tries, segment trees, union-find' },
  { label: 'Approach',        desc: 'Optimal time & space complexity — JS & C++' },
  { label: 'NPTEL DSA',       desc: 'Certified — IIT Kharagpur' },
]

function Skeleton({ w = 'w-20', h = 'h-3' }: { w?: string; h?: string }) {
  return <div className={`${w} ${h} rounded animate-pulse`} style={{ background: '#1E1E1E' }} />
}

export function GithubStats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.06 })
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`),
          fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&type=owner`),
        ])
        const user: GitHubUser = await userRes.json()
        const repos: Repo[]    = await reposRes.json()

        const ownRepos = repos.filter(r => !r.fork)

        const stars  = ownRepos.reduce((s, r) => s + r.stargazers_count, 0)
        const forks  = ownRepos.reduce((s, r) => s + r.forks_count, 0)

        // Language breakdown by repo count
        const langMap: Record<string, number> = {}
        ownRepos.forEach(r => {
          if (r.language) langMap[r.language] = (langMap[r.language] || 0) + 1
        })
        const total = Object.values(langMap).reduce((a, b) => a + b, 0)
        const topLangs = Object.entries(langMap)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 6)
          .map(([name, count]) => ({ name, count, pct: Math.round((count / total) * 100) }))

        setStats({
          repos:     user.public_repos,
          stars,
          forks,
          followers: user.followers,
          following: user.following,
          topLangs,
        })
      } catch {
        // silently fail — skeletons stay
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const statItems = stats
    ? [
        { icon: BookOpen, label: 'Public Repos',  value: stats.repos },
        { icon: Star,     label: 'Total Stars',   value: stats.stars },
        { icon: GitFork,  label: 'Total Forks',   value: stats.forks },
        { icon: Users,    label: 'Followers',      value: stats.followers },
      ]
    : []

  return (
    <section id="github-stats" className="py-24 relative" style={{ background: '#0D0D0D' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="section-label mb-2">Coding Activity</p>
          <h2 className="luxury-heading text-4xl md:text-5xl font-bold text-[#F0EDE8]">
            GitHub & Problem Solving
          </h2>
          <div className="gold-rule-left mt-4" />
          <p className="text-[#878787] text-sm mt-4 max-w-md">
            Live data fetched from the GitHub API — contributions, languages, and algorithm skills.
          </p>
        </motion.div>

        {/* ── Row 1: stat tiles ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="p-5 rounded-lg" style={{ background: '#111111', border: '1px solid #1E1E1E', borderTop: '2px solid #C9A84C' }}>
                  <Skeleton w="w-8" h="h-8" />
                  <Skeleton w="w-16" h="h-6" />
                  <Skeleton w="w-24" h="h-3" />
                </div>
              ))
            : statItems.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
                  className="p-5 rounded-lg"
                  style={{ background: '#111111', border: '1px solid #242424', borderTop: '2px solid #C9A84C' }}
                >
                  <s.icon size={16} style={{ color: '#C9A84C', marginBottom: 12 }} />
                  <p className="luxury-heading text-3xl font-bold text-[#F0EDE8] mb-1">{s.value}</p>
                  <p className="mono-text text-[10px] uppercase tracking-widest text-[#878787]">{s.label}</p>
                </motion.div>
              ))}
        </div>

        {/* ── Row 2: Languages + Profile link ── */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">

          {/* Top Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="p-6 rounded-lg"
            style={{ background: '#111111', border: '1px solid #242424', borderTop: '2px solid #C9A84C' }}
          >
            <div className="flex items-center gap-2 mb-5">
              <Code2 size={13} style={{ color: '#C9A84C' }} />
              <span className="mono-text text-[10px] uppercase tracking-widest text-[#C9A84C]">Top Languages</span>
            </div>

            {loading ? (
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="space-y-1.5">
                    <Skeleton w="w-32" h="h-2.5" />
                    <Skeleton w="w-full" h="h-1.5" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {stats?.topLangs.map((lang, i) => (
                  <motion.div key={lang.name}
                    initial={{ opacity: 0, x: -16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                  >
                    <div className="flex justify-between items-center mb-1.5">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2 h-2 rounded-full shrink-0"
                          style={{ background: LANG_COLORS[lang.name] ?? '#888' }}
                        />
                        <span className="mono-text text-xs text-[#F0EDE8]">{lang.name}</span>
                      </div>
                      <span className="mono-text text-[10px] text-[#878787]">{lang.pct}%</span>
                    </div>
                    <div className="h-1 rounded-full overflow-hidden" style={{ background: '#1E1E1E' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${lang.pct}%` } : {}}
                        transition={{ duration: 1, delay: 0.4 + i * 0.07 }}
                        className="h-full rounded-full"
                        style={{ background: LANG_COLORS[lang.name] ?? '#C9A84C' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* GitHub profile card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-6 rounded-lg flex flex-col justify-between"
            style={{ background: '#111111', border: '1px solid #242424', borderTop: '2px solid #C9A84C' }}
          >
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Activity size={13} style={{ color: '#C9A84C' }} />
                <span className="mono-text text-[10px] uppercase tracking-widest text-[#C9A84C]">Profile</span>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  { label: 'Username',  val: `@${USERNAME}` },
                  { label: 'Focus',     val: 'Full-Stack · Backend · Cloud' },
                  { label: 'Stack',     val: 'Node.js · NestJS · React · AWS' },
                  { label: 'Following', val: loading ? '—' : String(stats?.following ?? '—') },
                ].map(row => (
                  <div key={row.label} className="flex justify-between items-center py-2" style={{ borderBottom: '1px solid #1A1A1A' }}>
                    <span className="mono-text text-[10px] uppercase tracking-widest text-[#878787]">{row.label}</span>
                    <span className="mono-text text-xs text-[#F0EDE8]">{row.val}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={`https://github.com/${USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full justify-center text-[10px]"
            >
              <Github size={13} /> View GitHub Profile
            </a>
          </motion.div>
        </div>

        {/* ── Divider ── */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px" style={{ background: '#1E1E1E' }} />
          <span className="mono-text text-[10px] uppercase tracking-widest" style={{ color: '#4A4A4A' }}>Problem Solving</span>
          <div className="flex-1 h-px" style={{ background: '#1E1E1E' }} />
        </div>

        {/* ── Problem solving cards ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {leetSkills.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
              className="p-4 rounded-lg"
              style={{ background: '#111111', border: '1px solid #1E1E1E', borderTop: '2px solid rgba(201,168,76,0.3)' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Zap size={11} style={{ color: '#C9A84C' }} />
                <p className="mono-text text-[10px] font-semibold text-[#F0EDE8] uppercase tracking-widest">{item.label}</p>
              </div>
              <p className="text-xs text-[#878787] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
