"use client"

export function LiveGridBackground() {

  return (
    <div
      className="fixed inset-0 pointer-events-none select-none"
      style={{
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        overflow: "hidden",
      }}
    >
      {/* Grid pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          opacity: 0.3,
        }}
      />


      {/* Particles */}
      {[...Array(15)].map((_, i) => {
        const left = ((i * 31) % 100) + (i % 20)
        const top = ((i * 19) % 100) + (i % 15)
        const size = 2 + (i % 3)
        const delay = (i % 5) * 1.5
        
        return (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
              background: 'rgba(59, 130, 246, 0.6)',
              boxShadow: '0 0 6px rgba(59, 130, 246, 0.4)',
              animation: `pulse 3s ease-in-out infinite`,
              animationDelay: `${delay}s`,
            }}
          />
        )
      })}
    </div>
  );
} 