import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { HIDDEN_NOTES } from '../config'

interface SecretMessagesProps {
  onSelect: (note: (typeof HIDDEN_NOTES)[0]) => void
  layout?: 'bar' | 'grid'
}

export function SecretMessageButtons({ onSelect, layout = 'bar' }: SecretMessagesProps) {
  return (
    <div
      className={
        layout === 'grid'
          ? 'grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3'
          : 'flex flex-wrap items-center justify-center gap-2 sm:gap-3'
      }
    >
      {HIDDEN_NOTES.map((note, i) => (
        <motion.button
          key={note.id}
          type="button"
          className="secret-note-pill flex w-full items-center gap-2.5 rounded-2xl px-4 py-3 sm:w-auto sm:min-w-[200px] sm:px-5"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + i * 0.08 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(note)}
        >
          <Heart size={20} className="secret-note-icon shrink-0 fill-current" />
          <span className="text-left text-sm font-bold leading-snug sm:text-base">
            {note.trigger}
          </span>
        </motion.button>
      ))}
    </div>
  )
}
