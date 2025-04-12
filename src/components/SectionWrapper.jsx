import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const SectionWrapper = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: false,
  })

  return (
    <motion.section
      ref={ref}
      className='h-screen flex items-center justify-center transition-opacity duration-400 ease-in-out'
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      style={{ pointerEvents: inView ? 'auto' : 'none' }}
    >
      {children}
    </motion.section>
  )
}

export default SectionWrapper
