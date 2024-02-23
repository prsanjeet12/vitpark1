import React from 'react';
// import Illustration from './Illustration'; // Import your illustration component

const Businesses = () => {
  return (
    <section className="flex justify-between items-center mt-12 mb-12 mx-auto max-w-7xl px-4">
      {/* Illustration on the left */}
      <div className="w-1/2 pr-8">
        {/* <Illustration /> */}
      </div>
      {/* Text content on the right */}
      <div className="w-1/2 pl-8">
        <h2 className="text-3xl font-bold mb-4">Empowering Businesses with Digital Solutions</h2>
        <p>At VITPARK, we empower businesses with cutting-edge digital infrastructure solutions. From advanced payment gateways to last mile connectivity, tailored mobility solutions, comprehensive e-business support, and expert digital marketing strategies, we propel businesses towards success. Our state-of-the-art IT park fosters innovation and collaboration, providing an ideal environment for growth and technological advancement. Join us and unlock endless possibilities for your business in the digital age.</p>
      </div>
    </section>
  );
};

export default Businesses;
