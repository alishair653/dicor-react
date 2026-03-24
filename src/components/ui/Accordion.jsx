import { motion } from 'framer-motion'
import { useId, useState } from 'react'

export default function Accordion({ items = [], className = '' }) {
  const [openIndex, setOpenIndex] = useState(0)
  const groupId = useId()

  return (
    <div
      className={['mz-accordion', className].filter(Boolean).join(' ')}
      role="region"
      aria-label="FAQ Accordion"
    >
      {items.map((it, idx) => {
        const isOpen = idx === openIndex
        const btnId = `${groupId}-btn-${idx}`
        const panelId = `${groupId}-panel-${idx}`

        return (
          <div className="mz-accordionItem" key={it.question}>
            <button
              id={btnId}
              type="button"
              className="mz-accordionBtn"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex((cur) => (cur === idx ? -1 : idx))}
            >
              <span className="mz-accordionQuestion">{it.question}</span>
              <span className="mz-accordionIcon" aria-hidden="true">
                {isOpen ? '×' : '+'}
              </span>
            </button>

            <motion.div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className="mz-accordionPanel"
              initial={false}
              animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0.95 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              style={{ overflow: 'hidden' }}
            >
              <div className="mz-accordionPanelInner">{it.answer}</div>
            </motion.div>
          </div>
        )
      })}
    </div>
  )
}

