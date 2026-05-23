import { useEffect, useRef } from 'react'

interface Sparkle {
  x: number
  y: number
  id: number
  life: number
}

export function useCursorSparkles(enabled: boolean) {
  const containerRef = useRef<HTMLDivElement>(null)
  const sparklesRef = useRef<Sparkle[]>([])
  const idRef = useRef(0)

  useEffect(() => {
    if (!enabled) return

    const container = containerRef.current
    if (!container) return

    let raf: number

    const onMove = (e: MouseEvent) => {
      if (Math.random() > 0.65) return
      sparklesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        id: idRef.current++,
        life: 1,
      })
      if (sparklesRef.current.length > 40) {
        sparklesRef.current.shift()
      }
    }

    const animate = () => {
      const els = container.querySelectorAll('.cursor-sparkle')
      els.forEach((el) => el.remove())

      sparklesRef.current = sparklesRef.current.filter((s) => {
        s.life -= 0.04
        if (s.life <= 0) return false

        const span = document.createElement('span')
        span.className = 'cursor-sparkle pointer-events-none fixed z-[9999] text-xs'
        span.style.left = `${s.x + (Math.random() - 0.5) * 20}px`
        span.style.top = `${s.y + (Math.random() - 0.5) * 20}px`
        span.style.opacity = String(s.life)
        span.style.transform = `scale(${s.life})`
        span.textContent = Math.random() > 0.5 ? '✨' : '♥'
        span.style.color = 'var(--accent)'
        container.appendChild(span)
        return true
      })

      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [enabled])

  return containerRef
}
