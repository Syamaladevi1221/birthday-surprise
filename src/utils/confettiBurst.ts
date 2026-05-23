import confetti from 'canvas-confetti'

const COLORS = ['#ff6b9d', '#ffd700', '#ff69b4', '#fff', '#7eb8ff']

function burst() {
  confetti({
    particleCount: 40,
    spread: 70,
    origin: { y: 0.55, x: Math.random() * 0.4 + 0.3 },
    colors: COLORS,
  })
  confetti({
    particleCount: 25,
    angle: 60,
    spread: 55,
    origin: { x: 0, y: 0.65 },
    colors: COLORS,
  })
  confetti({
    particleCount: 25,
    angle: 120,
    spread: 55,
    origin: { x: 1, y: 0.65 },
    colors: COLORS,
  })
}

/** Fires confetti for exactly `durationMs`, then stops and clears the canvas. */
export function fireConfettiBurst(durationMs = 3000): () => void {
  burst()
  const intervalId = setInterval(burst, 320)
  const timeoutId = setTimeout(() => {
    clearInterval(intervalId)
    confetti.reset()
  }, durationMs)

  return () => {
    clearInterval(intervalId)
    clearTimeout(timeoutId)
    confetti.reset()
  }
}
