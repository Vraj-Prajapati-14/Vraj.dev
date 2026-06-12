"use client"

export function LiveGridBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none select-none"
      style={{ width: '100vw', height: '100vh', zIndex: -1, overflow: 'hidden' }}
    >
      {/* Subtle gold-tinted grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
        }}
      />
      {/* Radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 70% at 50% 0%, rgba(201,168,76,0.04) 0%, transparent 70%)',
        }}
      />
    </div>
  )
}
