import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className="flex gap-3">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn color-mix'>Chat Me Up</a>
    </div>
  )
}

export default CTA