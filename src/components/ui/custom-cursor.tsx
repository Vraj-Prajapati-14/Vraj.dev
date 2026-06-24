"use client"

import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
  const dotRef   = useRef<HTMLDivElement>(null)
  const ringRef  = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [hovered, setHovered] = useState(false)
  const pos       = useRef({ x: -200, y: -200 })
  const ring      = useRef({ x: -200, y: -200 })
  const magnetEl  = useRef<HTMLElement | null>(null)
  const rafId     = useRef<number>(0)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    document.body.style.cursor = 'none'
    setVisible(true)

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`
      }
    }

    const onDown = (e: MouseEvent) => {
      setClicked(true)
      // Ripple effect at click point
      import('animejs').then(({ animate }) => {
        const ripple = document.createElement('div')
        Object.assign(ripple.style, {
          position: 'fixed',
          left: `${e.clientX}px`,
          top: `${e.clientY}px`,
          width: '4px',
          height: '4px',
          borderRadius: '50%',
          border: '1px solid rgba(201,168,76,0.75)',
          pointerEvents: 'none',
          zIndex: '9997',
          transform: 'translate(-50%, -50%)',
        })
        document.body.appendChild(ripple)
        animate(ripple, {
          width: ['4px', '72px'],
          height: ['4px', '72px'],
          opacity: [0.75, 0],
          duration: 580,
          ease: 'outExpo',
          onComplete: () => ripple.remove(),
        })
      })
    }

    const onUp = () => setClicked(false)

    // Detect hover — track the interactive element for magnetic pull
    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      const interactive = el.closest('a, button, [role="button"]') as HTMLElement | null
      magnetEl.current = interactive
      setHovered(!!interactive)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup',   onUp)
    window.addEventListener('mouseover', onOver)

    // RAF loop — ring lags cursor; when over interactive element, ring is magnetically pulled
    const animate = () => {
      let tx = pos.current.x
      let ty = pos.current.y

      if (magnetEl.current) {
        try {
          const rect = magnetEl.current.getBoundingClientRect()
          if (rect.width > 0) {
            const cx = rect.left + rect.width / 2
            const cy = rect.top + rect.height / 2
            tx = pos.current.x + (cx - pos.current.x) * 0.28
            ty = pos.current.y + (cy - pos.current.y) * 0.28
          }
        } catch {
          magnetEl.current = null
        }
      }

      ring.current.x += (tx - ring.current.x) * 0.12
      ring.current.y += (ty - ring.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x - 20}px, ${ring.current.y - 20}px)`
      }
      rafId.current = requestAnimationFrame(animate)
    }
    rafId.current = requestAnimationFrame(animate)

    return () => {
      document.body.style.cursor = ''
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup',   onUp)
      window.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(rafId.current)
    }
  }, [])

  if (!visible) return null

  return (
    <>
      {/* Gold dot — snaps instantly */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transition-transform duration-75"
        style={{
          width:  clicked ? 6  : hovered ? 14 : 8,
          height: clicked ? 6  : hovered ? 14 : 8,
          marginLeft: hovered ? -3 : 0,
          marginTop:  hovered ? -3 : 0,
          background: '#C9A84C',
          boxShadow: '0 0 8px rgba(201,168,76,0.7)',
          transition: 'width 0.15s, height 0.15s',
        }}
      />
      {/* Ring — follows with lag */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
        style={{
          width:  hovered ? 48 : 40,
          height: hovered ? 48 : 40,
          border: `1px solid rgba(201,168,76,${hovered ? 0.7 : 0.35})`,
          transition: 'width 0.2s, height 0.2s, border 0.2s',
          boxShadow: hovered ? '0 0 16px rgba(201,168,76,0.2)' : 'none',
        }}
      />
    </>
  )
}
