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

// const client = sanityClient({
//   projectId: 'your_project_id_here',
//   dataset: 'your_dataset_name_here',
//   useCdn: true // Enable caching
// })




const App = () => {
  return (
    <div className='w-full'>
      <Header/>
      <Nav/>
      <About/>
      <Experience experienceData={experiences} />
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App