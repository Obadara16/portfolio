import React, { useEffect, useRef } from 'react';
import sr from '../utils/sr';
import { email, srConfig } from '../data';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <section
      id="contact"
      className="w-[80%] mx-auto mb-100px text-center"
      ref={revealContainer}
    >
      <div className='w-full md:w-[50%] mx-auto'>
        <h2 className="overline text-2xl">What’s Next?</h2>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Get In Touch</h2>
        <p className="mt-4">
          Although I’m not currently looking for any new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I’ll try my best to get back to you!
        </p>

        <a href={`mailto:${email}`} className="inline-block mt-8 px-8 py-2.5 color-mix text-white rounded-lg">
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
