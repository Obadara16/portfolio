import React from 'react'
import Resume from '../../assets/resume.pdf'

const CTA = () => {
  return (
    <div className="flex gap-3 justify-center">
        <a href={Resume} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn color-mix'>Chat Me Up</a>
    </div>
  )
}

export default CTA