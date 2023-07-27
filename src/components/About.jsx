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
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-white mx-auto">
              <article className="color-mix border-transparent rounded-lg px-4 md:px-8 py-2 text-center transition">
                <FaAward className="text-white text-2xl md:mb-4" />
                <h5 className="text-sm font-medium">Experience</h5>
                <small className="text-xs">3+ Years Working</small>
              </article>
              <article className="color-mix border-transparent rounded-lg px-4 md:px-8 py-2 text-center transition">
                <FiUsers className=" text-white text-2xl md:mb-4" />
                <h5 className="text-sm font-medium">Client</h5>
                <small className="text-xs">5+ Nationwide</small>
              </article>
              <article className="color-mix border-transparent rounded-lg px-4 md:px-8 py-2 text-center transition">
                <VscFolderLibrary className="about__icon text-white text-2xl md:mb-4" />
                <h5 className="text-sm font-medium">Projects</h5>
                <small className="text-xs">10+ Completed</small>
              </article>
            </div>
            <p className="mt-8 text-white">
              An expert web developer specializing in front end development, ambitious and self-motivated with a strong
              technical background that possesses self-discipline and the ability to work with the minimum of supervision,
              a good team player, who thrives on creating engaging creative solutions, deadline orientated and has the
              ability to produce detailed technical specifications from client requirements.
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
