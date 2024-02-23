import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-900 to-blue-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to VITPARK</h1>
        <p className="text-lg md:text-xl mb-8">Your Gateway to Digital Innovation</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Add icons or illustrations for each service area */}
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">Payment Gateways</h2>
            <p>Ensure seamless and secure online transactions for businesses of all sizes.</p>
          </div>
          {/* Repeat similar structure for other service areas */}
        </div>
        <button className="bg-white text-blue-900 py-2 px-6 rounded-full mt-8 hover:bg-blue-100 transition duration-300">Explore Our Services</button>
        {/* Add client testimonials, statistics, interactive elements, and additional CTAs as needed */}
      </div>
    </section>
  );
};

export default HeroSection;
