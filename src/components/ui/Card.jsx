import { motion } from 'framer-motion'

export default function Card({
  pad = true,
  className = '',
  children,
  hoverable = true
}) {
  const cls = `mz-card ${pad ? 'mz-cardPad' : ''} ${className}`.trim()

  if (!hoverable) {
    return <div className={cls}>{children}</div>
  }

  return (
    <motion.div
      className={cls}
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

