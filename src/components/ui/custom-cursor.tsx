"use client"

import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
  const dotRef   = useRef<HTMLDivElement>(null)
  const ringRef  = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [hovered, setHovered] = useState(false)
  const pos = useRef({ x: -200, y: -200 })
  const ring = useRef({ x: -200, y: -200 })
  const rafId = useRef<number>(0)

  useEffect(() => {
    // Only show on pointer-fine (mouse) devices
    if (!window.matchMedia('(pointer: fine)').matches) return

    document.body.style.cursor = 'none'
    setVisible(true)

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`
      }
    }

    const onDown  = () => setClicked(true)
    const onUp    = () => setClicked(false)

    // Detect hover over interactive elements
    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      setHovered(!!el.closest('a, button, [role="button"]'))
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup',   onUp)
    window.addEventListener('mouseover', onOver)

    // RAF loop for smooth ring lag
    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12
      ring.current.y += (pos.current.y - ring.current.y) * 0.12
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
