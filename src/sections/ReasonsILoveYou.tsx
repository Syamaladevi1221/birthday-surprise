import { motion } from 'framer-motion'
import { LOVE_REASONS } from '../config'

export function ReasonsILoveYou() {
  return (
    <section id="reasons" className="section-pad relative">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="handwritten text-2xl" style={{ color: 'var(--accent)' }}>
            every reason
          </span>
          <h2
            className="display-font mt-2 text-3xl font-semibold sm:text-4xl"
            style={{ color: 'var(--text-primary)' }}
          >
            Reasons I Love You
          </h2>
          <p className="mt-2 text-sm" style={{ color: 'var(--text-muted)' }}>
            Hover or tap to reveal each one ♥
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {LOVE_REASONS.map((reason, i) => (
            <motion.div
              key={reason.front}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flip-card group h-48 cursor-pointer sm:h-52"
              tabIndex={0}
              onClick={(e) => {
                const card = e.currentTarget
                card.classList.toggle('flipped')
              }}
            >
              <motion.div
                className="flip-card-inner relative h-full w-full"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3 + i * 0.2, repeat: Infinity }}
              >
                <div
                  className="flip-card-front glass glow-border absolute inset-0 flex items-center justify-center rounded-2xl p-6"
                >
                  <span
                    className="handwritten text-2xl sm:text-3xl"
                    style={{ color: 'var(--accent-strong)' }}
                  >
                    {reason.front}
                  </span>
                </div>
                <motion.div
                  className="flip-card-back glass absolute inset-0 flex items-center justify-center rounded-2xl p-6"
                  style={{
                    background: 'var(--accent-soft)',
                    border: '1px solid var(--glass-border)',
                  }}
                >
                  <p
                    className="elegant-font text-center text-sm leading-relaxed sm:text-base"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {reason.back}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
