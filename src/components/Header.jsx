import React, { useEffect, useState, useCallback } from 'react';
import '../styles.css';
import CTA from './others/CTA';
import TypewriterAnimation from './others/TypeWriterAnimation';

const Header = () => {
  const [setShouldShowBackgroundImage] = useState(window.innerWidth < 768);
  const [isHelloComplete, setIsHelloComplete] = useState(false);
  const [isRoqeebComplete, setIsRoqeebComplete] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShouldShowBackgroundImage(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Use useCallback to prevent the functions from being recreated on each render
  const handleHelloComplete = useCallback(() => {
    setIsHelloComplete(true);
  }, []);

  const handleRoqeebComplete = useCallback(() => {
    setIsRoqeebComplete(true);
  }, []);

  return (
    <div id="home" className="w-full h-screen font-poppins mx-auto">
      <div className="w-10/12 mx-auto h-full">
        <div className="w-[80%] mt-6">
          <i className="font-semibold font-poppins">ROCKin</i>
        </div>
        <div className=" mx-auto w-full md:w-1/2 h-full flex flex-col -mt-12">
          <div className="flex flex-col gap-6 justify-center h-full whitespace-nowrap text-center">
            <TypewriterAnimation text="Hello I'm" speed={100} onComplete={handleHelloComplete} styles="text-md"/>
            {isHelloComplete && <TypewriterAnimation text="Roqeeb Obadara" speed={100} onComplete={handleRoqeebComplete} styles="text-6xl text-mix" />}
            {isRoqeebComplete && <TypewriterAnimation text="Full Stack Software Developer" speed={100} styles="text-md"/>}
            <CTA />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
