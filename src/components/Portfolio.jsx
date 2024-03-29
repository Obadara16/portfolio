import React, { useState, useEffect } from 'react';
import { data } from '../data';
import Aos from 'aos';

const Portfolio = () => {
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleExpand = (itemId) => {
    if (expandedItems.includes(itemId)) {
      setExpandedItems(expandedItems.filter((id) => id !== itemId));
    } else {
      setExpandedItems([...expandedItems, itemId]);
    }
  };

  useEffect(() => {
    Aos.init({
      delay: 200, 
    });
  }, []);

  useEffect(() => {
    Aos.refresh();
  }, [expandedItems]);

  return (
    <section id="portfolio" className="w-[80%] mx-auto">
      <h5 className="text-gray-400">My Recent Projects</h5>
      <h2 className="text-3xl font-bold mb-8">Portfolio</h2>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {data.map((item, index) => (
          <article
            key={item.id}
            className="bg-white shadow-md w-full h-full pb-6"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay={index * 200} // Delay each item based on its index
          >
            <div className='w-full'>
              <img src={item.image} alt="Portfolio" className="w-full h-full" />
            </div>
            <div className='w-full px-6'>
              <h3 className="text-lg font-bold text-[#9C27B0] mt-4">{item.title}</h3>
              <div className="text-sm text-gray-600 mt-2 mb-4">
                {expandedItems.includes(item.id) ? (
                  <>
                    <p>{item.description}</p>
                    <button className="mt-2 text-sm text-gray-400 font-light italic hover:text-black" onClick={() => toggleExpand(item.id)}>
                      Show Less
                    </button>
                  </>
                ) : (
                  <>
                    <p className="line-clamp-4">{item.description}</p>
                    <button className="mt-2 text-sm text-gray-400 font-light italic hover:text-black" onClick={() => toggleExpand(item.id)}>
                      Read More
                    </button>
                  </>
                )}
              </div>
              <div className="flex gap-2 mt-4">
                <a href={item.github} className="px-4 py-1 rounded-sm bg-gray-800 hover:bg-black text-white text-[12px]" target="_blank" rel="noopener noreferrer">
                  Github
                </a>
                <a href={item.demo} className="px-4 py-1 rounded-sm color-mix hover:bg-blue-600 text-white text-[12px]" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
