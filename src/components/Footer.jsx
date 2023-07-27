import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoGithub, IoLogoTwitter } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className="bg-black border border-white pt-12 pb-32">
      <div className='flex flex-col-reverse md:flex-row gap-12 md:gap-4 w-10/12 mx-auto'>
      <div className="flex gap-4 justify-center md:justify-start items-center w-full">
        <a href="facebook.com" className="text-white">
          <FaFacebookF className='w-6 h-6' />
        </a>
        <a href="instagram.com" className="text-white">
          <FiInstagram className='w-6 h-6' />
        </a>
        <a href="twitter.com" className="text-white">
          <IoLogoTwitter className='w-6 h-6' />
        </a>
        <a href="twitter.com" className="text-white">
          <IoLogoGithub className='w-6 h-6' />
        </a>
      </div>
        <div className='flex flex-col w-full text-center md:text-end'>
          <p>Designed and coded in <span className='text-[#E66EBB]'>Visual Studio Code</span> by yours truly. </p>
          <p>Built with <span className='text-[#E66EBB]'>React</span> and <span className='text-[#E66EBB]'>Tailwind CSS,</span> deployed with <span className='text-[#E66EBB]'>Render.</span> </p>
           <p> All text is set in the Inter typeface.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
