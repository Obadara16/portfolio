import React from 'react'
import '../styles.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">ROCKin</a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">PortFolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="facebook.com"><FaFacebookF/></a>
        <a href="instagram.com"><FiInstagram/></a>
        <a href="twitter.com"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; ROCKin. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer