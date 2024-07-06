import { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'

function AnimateViewWrapper({children}: PropsWithChildren) {
  return (
    <motion.div
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -10, opacity: 0 }}
    transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  )
}

export default AnimateViewWrapper
