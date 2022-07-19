import React from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import About from './components/About'
import Experience from './components/Experience'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <ScrollToTop/>
      <Footer/>
    </>
  )
}

export default App