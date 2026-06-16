"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const books = [
  {
    title: 'How to Win Friends & Influence People',
    author: 'Dale Carnegie',
    genre: 'SELF-DEVELOPMENT',
    accent: '#4A9EFF',
    /* Multiple ISBN fallbacks for this title */
    covers: [
      'https://covers.openlibrary.org/b/isbn/1439167346-L.jpg',
      'https://covers.openlibrary.org/b/isbn/0671027034-L.jpg',
    ],
  },
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert T. Kiyosaki',
    genre: 'FINANCE',
    accent: '#F97316',
    covers: [
      'https://covers.openlibrary.org/b/isbn/1612680194-L.jpg',
      'https://covers.openlibrary.org/b/isbn/0446310611-L.jpg',
    ],
  },
  {
    title: 'The Power of Now',
    author: 'Eckhart Tolle',
    genre: 'MINDFULNESS',
    accent: '#22C55E',
    covers: [
      'https://covers.openlibrary.org/b/isbn/1577314808-L.jpg',
      'https://covers.openlibrary.org/b/isbn/9781577314806-L.jpg',
    ],
  },
  {
    title: 'The 7 Habits of Highly Effective People',
    author: 'Stephen R. Covey',
    genre: 'PRODUCTIVITY',
    accent: '#C9A84C',
    covers: [
      'https://covers.openlibrary.org/b/isbn/1982137274-L.jpg',
      'https://covers.openlibrary.org/b/isbn/0743269519-L.jpg',
    ],
  },
]

/* Try each cover URL in sequence; show fallback card if all fail */
function BookCover({ book, className = '' }: { book: typeof books[0]; className?: string }) {
  const [idx, setIdx] = useState(0)
  const [failed, setFailed] = useState(false)

  useEffect(() => { setIdx(0); setFailed(false) }, [book.title])

  if (failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center rounded-r-md text-center px-4 ${className}`}
        style={{
          background: `linear-gradient(160deg, #111111 0%, ${book.accent}22 100%)`,
          border: `1px solid ${book.accent}30`,
          minHeight: '240px',
        }}
      >
        <p className="mono-text text-[9px] uppercase tracking-widest mb-3" style={{ color: book.accent }}>{book.genre}</p>
        <p className="text-xs font-semibold text-[#F0EDE8] leading-snug">{book.title}</p>
        <p className="mono-text text-[9px] text-[#4A4A4A] mt-2">— {book.author}</p>
      </div>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={book.covers[idx]}
      alt={book.title}
      className={className}
      style={{ objectFit: 'cover', display: 'block', borderRadius: '2px 6px 6px 2px' }}
      onError={() => {
        if (idx < book.covers.length - 1) setIdx(idx + 1)
        else setFailed(true)
      }}
    />
  )
}

export function Reading() {
  const [current, setCurrent] = useState(0)
  const [dir, setDir]         = useState(1)
  const [ref, inView]         = useInView({ triggerOnce: true, threshold: 0.08 })

  /* Preload first cover of every book on mount */
  useEffect(() => {
    books.forEach(b => { const i = new window.Image(); i.src = b.covers[0] })
  }, [])

  const go = (next: number) => {
    setDir(next > current ? 1 : -1)
    setCurrent((next + books.length) % books.length)
  }

  const book = books[current]

  const variants = {
    enter:  (d: number) => ({ x: d > 0 ? 50 : -50, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit:   (d: number) => ({ x: d > 0 ? -50 : 50, opacity: 0, scale: 0.95 }),
  }

  return (
    <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: '#080808' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={ref} className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* ══ LEFT ══ */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65 }}
            className="flex flex-col"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1E1E1E] mb-8 self-start"
              style={{ background: '#111111' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
              <span className="mono-text text-[10px] uppercase tracking-widest text-[#878787]">Live Reading Scroll</span>
            </div>

            {/* Big ghost word */}
            <div
              className="text-[5rem] sm:text-[6rem] md:text-[7rem] font-black leading-none mb-1 select-none"
              style={{
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                WebkitTextStroke: '1px #1E1E1E',
                color: 'transparent',
                letterSpacing: '-0.03em',
              }}
            >
              BOOKS
            </div>

            {/* Subtitle */}
            <div className="mb-6">
              <p className="text-xl md:text-2xl font-semibold text-[#F0EDE8] leading-tight"
                style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
                I&apos;m Currently Reading
              </p>
              <p className="text-sm italic mt-1" style={{ color: '#2A2A2A' }}>
                &amp; Personal Favourites.
              </p>
            </div>

            <div className="mb-6" style={{ width: 40, height: 1, background: '#1E1E1E' }} />

            <p className="text-xs leading-relaxed max-w-xs mb-10" style={{ color: '#3A3A3A' }}>
              Logic, philosophy &amp; wisdom — books that fuel how I think and build.
            </p>

            {/* Arrows + dots */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => go(current - 1)}
                className="w-9 h-9 rounded-full border border-[#2A2A2A] flex items-center justify-center text-[#555555] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => go(current + 1)}
                className="w-9 h-9 rounded-full border border-[#2A2A2A] flex items-center justify-center text-[#555555] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all"
              >
                <ChevronRight size={16} />
              </button>
              <div className="flex items-center gap-1.5 ml-1">
                {books.map((b, i) => (
                  <button
                    key={i}
                    onClick={() => go(i)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === current ? '20px' : '6px',
                      height: '6px',
                      background: i === current ? b.accent : '#2A2A2A',
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* ══ RIGHT: book cover only ══ */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="flex items-center justify-center"
          >
            {/* Fixed container for the book */}
            <div style={{ width: 'min(220px, 55vw)', height: 'min(320px, 82vw)', position: 'relative', flexShrink: 0 }}>
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={current}
                  custom={dir}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  style={{
                    position: 'absolute', inset: 0,
                    filter: 'drop-shadow(-12px 20px 36px rgba(0,0,0,0.85))',
                  }}
                >
                  <BookCover
                    book={book}
                    className="absolute inset-0 w-full h-full"
                  />

                  {/* Spine shadow */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, bottom: 0, width: 16,
                    background: 'linear-gradient(to right, rgba(0,0,0,0.6), transparent)',
                    borderRadius: '3px 0 0 3px', pointerEvents: 'none',
                  }} />
                  {/* Accent spine */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, bottom: 0, width: 3,
                    background: book.accent, borderRadius: '3px 0 0 3px',
                    opacity: 0.9, pointerEvents: 'none',
                  }} />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
