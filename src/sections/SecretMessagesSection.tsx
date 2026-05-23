import { motion } from 'framer-motion'
import { useState } from 'react'
import { HIDDEN_NOTES } from '../config'
import { SecretMessageButtons } from '../components/SecretMessages'
import { LoveNoteModal } from '../components/LoveNoteModal'
import { useSounds } from '../hooks/useSounds'

/** In-page secret messages block — easy to find when you scroll to the top */
export function SecretMessagesSection() {
  const [activeNote, setActiveNote] = useState<(typeof HIDDEN_NOTES)[0] | null>(null)
  const { playNote } = useSounds()

  return (
    <section id="secret-messages" className="section-pad scroll-mt-40 pt-4">
      <motion.div
        className="secret-notes-panel mx-auto max-w-3xl rounded-3xl p-6 sm:p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p
          className="mb-1 text-center text-xs font-bold uppercase tracking-widest sm:text-sm"
          style={{ color: 'var(--secret-accent)' }}
        >
          💌 For your eyes only
        </p>
        <h2
          className="display-font mb-2 text-center text-2xl font-semibold sm:text-3xl"
          style={{ color: 'var(--text-primary)' }}
        >
          Secret Messages
        </h2>
        <p
          className="mb-6 text-center text-sm sm:text-base"
          style={{ color: 'var(--text-muted)' }}
        >
          Tap any message below to read your secret notes.
        </p>
        <SecretMessageButtons
          layout="grid"
          onSelect={(note) => {
            playNote()
            setActiveNote(note)
          }}
        />
      </motion.div>

      <LoveNoteModal
        open={!!activeNote}
        message={activeNote?.message ?? ''}
        onClose={() => setActiveNote(null)}
      />
    </section>
  )
}
