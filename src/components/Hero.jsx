import React from 'react';
import Typewriter from './Typewriter';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b mt-6 lg:mb-[140px] text-black py-20 font-poppins"  id='home'>
      <div className="container-fluid mx-auto text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <Typewriter text="Welcome to VITPARK" delay={100} />
        </h1>
        <p className="text-lg md:text-xl mb-4">Your Gateway to Digital Innovation</p>
        <div className="w-3xl lg:w-[1320px] mx-auto rounded-lg mb-9">
          <p className="text-lg md:text-xl  text-black">
            At VITPARK, we are dedicated to driving digital transformation and empowering businesses to thrive in the digital age. With our comprehensive suite of services and expertise in digital infrastructure, we provide end-to-end support to help businesses unlock endless possibilities for success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Add icons or illustrations for each service area */}
      
          {/* Repeat similar structure for other service areas */}
        </div>
        <button className="bg-black text-white py-3 px-6 rounded-md mt-8 transition duration-300">
          <a href="#services"> Explore Our Services</a>
         </button>
        {/* Add client testimonials, statistics, interactive elements, and additional CTAs as needed */}
      </div>
    </section>
  );
};

export default Hero;