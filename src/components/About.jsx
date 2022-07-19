import React from 'react'
import '../styles.css'
import ME from '../assets/me.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import HeaderSocials from './others/HeaderSocials'
import {FaArrowCircleRight} from 'react-icons/fa';


const About = () => {
  return (
    <section id='about'>
      <HeaderSocials/>
      <h2> About Me</h2>

      <div className="container about__container">

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Client</h5>
              <small>5+ Nationwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
          An expert web developer specializing in front end development, ambitious and self-motivated with a
          strong technical background that possesses self-discipline and the ability to work with the minimum of
          supervision, a good team player, who thrives on creating engaging creative solutions, deadline
          orientated and has the ability to produce detailed technical specifications from client requirements. 
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
      </div> 
      <p className="scroll__down"><a href="mailto:obadararoqeeb@gmail.com" target="_blank">obadararoqeeb@gmail.com</a></p>


      
    </section>
  )
}

export default About