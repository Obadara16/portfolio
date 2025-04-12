import React, { useState, useEffect } from 'react';
import { data } from '../data';
import Aos from 'aos';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

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
      delay: 50, 
    });
  }, []);

  useEffect(() => {
    Aos.refresh();
  }, [expandedItems]);

  return (
    <section id="portfolio" className="w-[80%] mx-auto">
      <h5 className="text-gray-400">My Recent Projects</h5>
      <h2 className="text-3xl font-bold mb-8">Portfolio</h2>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        spaceBetween={50}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className}" style="${index === this.activeIndex ? 'width: 40px;' : 'width: 20px;'} height: 3px; border-radius: 10px; margin-left: 5px; margin-right: 5px; background: white;"></span>`;
          }
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {data.map((item, index) => (
          <SwiperSlide key={item.id} className="bg-white shadow-md p-6 rounded-lg">
            <div className="w-full">
              <img src={item.image} alt="Portfolio" className="w-full h-full object-cover rounded-md" />
            </div>
            <div className="w-full mt-4">
              <h3 className="text-lg font-bold text-[#9C27B0]">{item.title}</h3>
              <div className="text-sm text-gray-600 mt-2 mb-4">
                {expandedItems.includes(item.id) ? (
                  <>
                    <p dangerouslySetInnerHTML={{ __html: item.description }} />
                    <button className="mt-2 text-sm text-gray-400 font-light italic hover:text-black" onClick={() => toggleExpand(item.id)}>
                      Show Less
                    </button>
                  </>
                ) : (
                  <>
                    <p className="line-clamp-4" dangerouslySetInnerHTML={{ __html: item.description }} />
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
                <a href={item.demo} className="px-4 py-1 bg-[#9C27B0] rounded-sm hover:bg-blue-600 text-white text-[12px]" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Portfolio;
