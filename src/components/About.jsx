import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles.css';
import ME from '../assets/me.png';

const About = () => {
  useEffect(() => {
    AOS.init({
      delay: 200, // Set delay of 200ms for content div animation
    });
  }, []);

  return (
    <section id="about" className="relative w-10/12 mx-auto">
      <div className="w-full flex flex-col-reverse md:flex-row gap-8 mt-8 mx-auto justify-center items-center">
        <div className="w-full place-items-center flex justify-center items-center z-0" aos-init="true" aos-animate="true"  data-aos="fade-up" data-aos-duration="1200">
          <div className="overflow-hidden transition flex bg-white justify-center items-center rounded-full p-8">
            <img src={ME} alt="About Me" className='w-[240px] h-[240px]'/>
            <div className="after absolute top-4 left-4 right-4 bottom-4 border-white border-3"></div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center" >
          <div className='w-full mx-auto'>
            <h2 className="text-3xl font-bold" aos-init="true" aos-animate="true"  data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600">About Me</h2>
            
            <p className="mt-8 text-white" aos-init="true" aos-animate="true"  data-aos="fade-up" data-aos-duration="1200" data-aos-delay="800">
            A dedicated full stack software engineer with a strong foundation in building scalable, user-focused web applications. I thrive at the intersection of front-end design and back-end architecture—crafting clean, maintainable code while ensuring smooth, performant user experiences.
            </p>

            <p className='mt-8 text-white' aos-init="true" aos-animate="true"  data-aos="fade-up" data-aos-duration="1200" data-aos-delay="1000">
            With a deep understanding of technologies like React, Next.js, NestJS, and Docker, I build modern solutions that balance functionality and usability. I enjoy working across the entire development lifecycle, from shaping intuitive interfaces to deploying robust APIs and microservices.
            </p>

            <p className='mt-8 text-white' aos-init="true" aos-animate="true"  data-aos="fade-up" data-aos-duration="1200" data-aos-delay="1000">
            Beyond the code, I value collaboration—whether it’s with designers, developers, or product teams—and actively engage with the developer community. I believe great software is built with empathy, feedback, and continuous improvement.
            </p>

            <p className='mt-8 text-white' aos-init="true" aos-animate="true"  data-aos="fade-up" data-aos-duration="1200" data-aos-delay="1000">
            Driven by a passion for solving real-world problems, I’m excited to contribute to meaningful projects that push the web forward and create lasting impact. 
            </p>

            <a href="#contact" className="btn color-mix mt-8" aos-init="true" aos-animate="true"  data-aos="fade-up" data-aos-duration="1200" data-aos-delay="1200">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
