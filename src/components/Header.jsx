import React from 'react'
import '../styles.css'
import CTA from './others/CTA'

const Header = () => {
  return (
    <header>
      <div className="brand"><i className='brand__name'>ROCKin</i></div>
      <div className="main__container header__container">
        <h5>Hello I'm</h5>
        <h1>Roqeeb Obadara</h1>
        <h5 className="text-light"><i>Front-End Developer</i></h5>
        <CTA/>
      </div >
    </header>
  )
}

export default Header