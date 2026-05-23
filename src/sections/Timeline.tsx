import { motion } from 'framer-motion'
import { TIMELINE_EVENTS } from '../config'

export function Timeline() {
  return (
    <section id="timeline" className="section-pad relative overflow-hidden">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="handwritten text-2xl" style={{ color: 'var(--accent)' }}>
            our story
          </span>
          <h2
            className="display-font mt-2 text-3xl font-semibold sm:text-4xl"
            style={{ color: 'var(--text-primary)' }}
          >
            Love Story Timeline
          </h2>
        </motion.div>

        <div className="relative">
          {/* Glowing line */}
          <motion.div
            className="absolute left-6 top-0 bottom-0 w-0.5 sm:left-1/2 sm:-translate-x-px"
            style={{
              background: `linear-gradient(to bottom, transparent, var(--accent), transparent)`,
              boxShadow: '0 0 20px var(--accent-glow)',
            }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />

          {TIMELINE_EVENTS.map((event, i) => (
            <motion.div
              key={event.id}
              className={`relative mb-12 flex items-start gap-6 sm:mb-16 ${
                i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              {/* Heart node */}
              <motion.div
                className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full glass glow-border text-xl sm:absolute sm:left-1/2 sm:-translate-x-1/2"
                whileInView={{ scale: [0, 1.2, 1] }}
                viewport={{ once: true }}
              >
                <motion.span
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {event.icon}
                </motion.span>
              </motion.div>

              <motion.div
                className={`glass glow-border ml-14 flex-1 rounded-2xl p-5 sm:ml-0 sm:w-[calc(50%-3rem)] ${
                  i % 2 === 0 ? 'sm:mr-auto sm:pr-8' : 'sm:ml-auto sm:pl-8'
                }`}
                whileHover={{ boxShadow: '0 0 30px var(--accent-soft)' }}
              >
                <span
                  className="text-xs font-medium uppercase tracking-wider"
                  style={{ color: 'var(--accent)' }}
                >
                  {event.date}
                </span>
                <h3
                  className="display-font mt-1 text-xl font-semibold sm:text-2xl"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {event.title}
                </h3>
                <p
                  className="elegant-font mt-2 text-sm leading-relaxed sm:text-base"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {event.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
