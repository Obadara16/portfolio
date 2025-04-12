import React from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import About from './components/About'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { experiences } from './data'
import SectionWrapper from './components/SectionWrapper'

const App = () => {
  return (
    <div className='w-full'>
      <Header />
      <Nav />
      <SectionWrapper><About /></SectionWrapper>
      <SectionWrapper><Experience experienceData={experiences} /></SectionWrapper>
      <SectionWrapper><Portfolio /></SectionWrapper>
      <SectionWrapper><Contact /></SectionWrapper>
      <Footer />
    </div>
  )
}

export default App
