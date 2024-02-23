import React from 'react';
import businessImage from './images/business.jpeg';

const Business = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center mt-10 lg:mt-20 
    
    
    mb-12 mx-auto px-4 bg-white" id='business'>
      {/* Text content on the left */}
      <div className="lg:w-1/2 lg:pr-8 lg:flex lg:flex-col lg:justify-center">
        <h2 className="text-4xl font-bold mb-4  text-center lg:text-center lg:mb-[50px]">Our Businesses</h2>
        <p className="text-base
        
        md:text-center
        lg:text-lg leading-relaxed mb-6 lg:mb-8 font-poppins text-center lg:text-center">
          At VITPARK, we empower businesses with cutting-edge digital infrastructure solutions. From advanced payment gateways to last mile connectivity, tailored mobility solutions, comprehensive e-business support, and expert digital marketing strategies, we propel businesses towards success. Our state-of-the-art IT park fosters innovation and collaboration, providing an ideal environment for growth and technological advancement. Join us and unlock endless possibilities for your business in the digital age.
        </p>
      </div>
      {/* Illustration on the right */}
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <img src={businessImage} alt="Business Illustration" className="w-full h-auto lg:h-[600px] object-cover" />
      </div>
    </section>
  );
};

export default Business;