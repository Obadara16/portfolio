import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles.css';
import ME from '../assets/me.png';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import HeaderSocials from './others/HeaderSocials';

const About = () => {
  useEffect(() => {
    AOS.init({
      delay: 200, // Set delay of 200ms for content div animation
    });
  }, []);

  return (
    <section id="about" className="relative w-10/12 mx-auto">
      <div className="w-full flex flex-col-reverse md:flex-row gap-8 mt-8 mx-auto justify-center items-center">
        <div className="w-full place-items-center flex justify-center items-center z-0" aos-init aos-animate data-aos="fade-up" data-aos-duration="1200">
          <div className="overflow-hidden transition flex bg-white justify-center items-center rounded-full p-8">
            <img src={ME} alt="About Me" className='w-[240px] h-[240px]'/>
            <div className="after absolute top-4 left-4 right-4 bottom-4 border-white border-3"></div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center" aos-init aos-animate data-aos="fade-up" data-aos-duration="1200" data-aos-delay="1200">
          <div className='w-full mx-auto'>
            <h2 className="text-3xl font-bold">About Me</h2>
            
            <p className="mt-8 text-white">
            A passionate frontend developer focused on creating user-friendly web experiences. With a love for coding and an eye for design, 
            I deliver modern solutions, collaborating seamlessly with designers and backend developers to optimize performance and maintain
             a user-centric approach.
            </p>

            <p className='mt-8 text-white'>
            Beyond technical expertise, I engage with the developer community and value user feedback. 
            Committed to excellence, I look forward to contributing my skills to impactful projects, shaping a better digital world with exciting possibilities.

            </p>

            <a href="#contact" className="btn color-mix mt-8">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
