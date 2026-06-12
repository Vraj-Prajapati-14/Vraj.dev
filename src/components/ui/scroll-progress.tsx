"use client"

import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (scrolled / total) * 100 : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div className="fixed top-0 left-0 z-[200] h-[2px] w-full pointer-events-none">
      <div
        className="h-full transition-all duration-75 ease-linear"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #C9A84C, #F0C060, #C9A84C)',
          boxShadow: '0 0 8px rgba(201,168,76,0.6)',
        }}
      />
    </div>
  )
}
