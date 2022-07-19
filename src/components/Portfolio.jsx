import React from 'react'
import '../styles.css'
import { data } from '../data'
import { getByTitle } from '@testing-library/react'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>PortFolio</h2>

      <div className="container portfolio__container">
      {data.map((item) => {
        return (
          <article className="portfolio__item" key={item.id}>
          <div className="portfolio__item-image">
            <img src={item.image} alt="Portfolio 1" />
          </div>
          <h3 style={{color: "#fff"}}>{item.title}</h3>
          <h4><i>{item.description}</i></h4>
          <div className="portfolio__item-cta">
            <a href={item.github} className="btn" target='_blank'>Github</a>
            <a href={item.demo} className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
        )

      })
    }
        
      </div>
    </section>
  )
}

export default Portfolio