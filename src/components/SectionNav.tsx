import { motion } from 'framer-motion'

const LINKS = [
  { href: '#secret-messages', label: 'Secrets', emoji: '💌' },
  { href: '#memories', label: 'Photos', emoji: '📷' },
  { href: '#timeline', label: 'Story', emoji: '✨' },
  { href: '#letter', label: 'Letter', emoji: '💕' },
  { href: '#finale', label: 'Finale', emoji: '♥' },
]

export function SectionNav() {
  return (
    <motion.nav
      className="sticky top-0 z-[55] border-b px-2 py-2 backdrop-blur-md sm:px-4"
      style={{
        background: 'var(--glass)',
        borderColor: 'var(--glass-border)',
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      aria-label="Jump to section"
    >
      <div className="mx-auto flex max-w-4xl gap-1 overflow-x-auto pb-1 scrollbar-hide sm:justify-center sm:gap-2">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="flex shrink-0 items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold transition-colors sm:px-3 sm:py-1.5 sm:text-sm"
            style={{
              color: 'var(--text-primary)',
              background: 'var(--accent-soft)',
            }}
          >
            <span>{link.emoji}</span>
            {link.label}
          </a>
        ))}
      </div>
    </motion.nav>
  )
}
