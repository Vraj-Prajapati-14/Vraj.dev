"use client"

import { useEffect, useRef } from "react";

export function LiveGridBackground() {
  const squareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame: number;
    let angle = 0;
    function animate() {
      angle += 0.05; // Very slow rotation
      if (squareRef.current) {
        squareRef.current.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
      }
      frame = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

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

      {/* Large square behind name area */}
      <div
        ref={squareRef}
        className="absolute top-1/2 left-1/2"
        style={{
          width: '500px',
          height: '250px',
          background: 'rgba(59, 130, 246, 0.08)',
          border: '2px solid rgba(59, 130, 246, 0.2)',
          borderRadius: '15px',
          boxShadow: '0 0 50px rgba(59, 130, 246, 0.1)',
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