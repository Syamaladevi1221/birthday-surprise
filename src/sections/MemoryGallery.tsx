import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'
import { MEMORIES } from '../config'
import { useSounds } from '../hooks/useSounds'

function PolaroidCard({
  memory,
  index,
  onOpen,
}: {
  memory: (typeof MEMORIES)[0]
  index: number
  onOpen: () => void
}) {
  const { playClick } = useSounds()

  return (
    <motion.button
      type="button"
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(0,0,0,0.25)' }}
      whileTap={{ scale: 0.98 }}
      onClick={() => {
        playClick()
        onOpen()
      }}
      className="tape polaroid-card group mx-auto w-full max-w-[280px] cursor-pointer text-left"
    >
      <motion.div
        className="overflow-hidden bg-[#faf8f5] p-3 pb-5 shadow-lg"
        style={{
          boxShadow: '0 4px 6px rgba(0,0,0,0.08), 0 12px 28px rgba(0,0,0,0.12)',
        }}
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-[#eee8e0]">
          <img
            src={memory.image}
            alt={memory.caption}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <motion.div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/25 group-hover:opacity-100">
            <ZoomIn className="text-white drop-shadow-md" size={32} />
          </motion.div>
        </div>
        <p className="handwritten mt-3 min-h-[2.5rem] text-center text-lg leading-snug text-[#3d2c35]">
          {memory.caption}
        </p>
        <p className="mt-1 text-center text-[10px] uppercase tracking-widest text-[#9a8a92]">
          {String(index + 1).padStart(2, '0')}
        </p>
      </motion.div>
    </motion.button>
  )
}

export function MemoryGallery() {
  const [lightbox, setLightbox] = useState<(typeof MEMORIES)[0] | null>(null)
  const categories = [...new Set(MEMORIES.map((m) => m.category))]

  return (
    <section id="memories" className="section-pad relative">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <span className="handwritten text-2xl" style={{ color: 'var(--accent)' }}>
            our scrapbook
          </span>
          <h2
            className="display-font mt-2 text-3xl font-semibold sm:text-4xl md:text-5xl"
            style={{ color: 'var(--text-primary)' }}
          >
            Memory Gallery
          </h2>
          <p className="mt-3 text-sm sm:text-base" style={{ color: 'var(--text-muted)' }}>
            Every photo holds a piece of my heart
          </p>
        </motion.div>

        {categories.map((cat) => {
          const items = MEMORIES.filter((m) => m.category === cat)

          return (
            <motion.div
              key={cat}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-16 last:mb-0"
            >
              <h3
                className="handwritten mb-8 text-center text-xl capitalize sm:text-2xl"
                style={{ color: 'var(--accent)' }}
              >
                {cat}
              </h3>

              {/* Structured polaroid grid — aligned rows & columns */}
              <motion.div
                className="grid grid-cols-1 place-items-center gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
              >
                {items.map((memory, i) => (
                  <PolaroidCard
                    key={memory.id}
                    memory={memory}
                    index={i}
                    onOpen={() => setLightbox(memory)}
                  />
                ))}
              </motion.div>
            </motion.div>
          )
        })}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="relative max-h-[90vh] w-full max-w-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="absolute -right-1 -top-1 z-10 rounded-full bg-white/20 p-2.5 text-white backdrop-blur sm:-right-2 sm:-top-2"
                aria-label="Close"
              >
                <X size={22} />
              </button>
              <div className="overflow-hidden bg-white p-4 pb-8 shadow-2xl">
                <img
                  src={lightbox.image}
                  alt={lightbox.caption}
                  className="max-h-[65vh] w-full object-contain"
                />
                <p className="handwritten mt-4 text-center text-xl text-[#3d2c35] sm:text-2xl">
                  {lightbox.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
