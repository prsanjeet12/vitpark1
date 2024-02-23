import React from 'react';
import aboutUsImage from './images/product3.jpg'; // Renamed the import to follow JavaScript naming conventions

const AboutUs = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center mt-[100px] mb-12
     mx-auto px-4 bg-white " id='about'>
      {/* Illustration on the left */}
      <div className="lg:w-1/2 lg:pr-8 mt-12 lg:mt-0">
        <img src={aboutUsImage} alt="About Us Illustration" className="w-full h-[600px] object-cover" />
      </div>
      {/* Text content on the right */}
      <div className="lg:w-1/2 lg:mb-[110px] lg:pl-8 lg:flex lg:flex-col lg:justify-center">
  <h2 className="text-4xl  
   font-bold mb-4 lg:mb-[50px]
    md:text-center
    
   lg:text-left
    lg:ml-[260px] text-center md:mt-5">About Us</h2>
  <p className="text-center  lg:text-[17px] 
  lg:text-center font-normal text-base leading-relaxed mb-6 lg:mb-8 font-poppins">
    VITPARK leads digital transformation with advanced payment gateways, last mile connectivity solutions, mobility services, comprehensive e-business support, and expert digital marketing strategies. Our state-of-the-art IT park fosters innovation and collaboration. Join us for cutting-edge solutions and a culture of excellence in the digital age. Experience limitless possibilities with VITPARK. We are your partner in navigating the digital landscape, offering innovative solutions and fostering a community of forward-thinking pioneers. Join us for unparalleled expertise and endless opportunities.
  </p>
</div>
    </section>
  );
};

export default AboutUs;