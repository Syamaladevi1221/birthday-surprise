import { motion } from 'framer-motion'
import { useApp, type Theme } from '../context/AppContext'

const THEMES: { id: Theme; label: string; emoji: string }[] = [
  { id: 'night', label: 'Night Sky', emoji: '🌙' },
  { id: 'pastel', label: 'Romantic Pink', emoji: '🌸' },
]

export function ThemeSwitcher() {
  const { theme, setTheme, unlocked } = useApp()
  if (!unlocked) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass fixed left-4 top-4 z-[70] flex gap-1 rounded-full p-1 sm:left-6 sm:top-6"
    >
      {THEMES.map((t) => (
        <button
          key={t.id}
          type="button"
          onClick={() => setTheme(t.id)}
          className="rounded-full px-3 py-1.5 text-xs font-semibold transition-all sm:text-sm"
          style={{
            background: theme === t.id ? 'var(--accent-soft)' : 'transparent',
            color: theme === t.id ? 'var(--accent-strong)' : 'var(--text-primary)',
            boxShadow: theme === t.id ? `0 0 12px var(--accent-soft)` : 'none',
          }}
          title={t.label}
        >
          {t.emoji}
        </button>
      ))}
    </motion.div>
  )
}
