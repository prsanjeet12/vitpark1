import React from 'react';
import wallet from './images/online-payment.png';
import serviser from './images/networking.png';
import mobility from './images/mobility (4).png';
import social from './images/social.png';
import wallet2 from './images/e-wallet (2).png';
import itPark from './images/science-fiction.png';

const Services = () => {
  const services1 = [
    {
      img: wallet,
      title: 'Payment Gateways',
      description: 'Our advanced payment gateway solutions ensure seamless and secure online transactions for businesses of all sizes. With cutting-edge encryption technologies and robust fraud prevention measures, we empower merchants to accept payments with confidence while providing customers with a smooth and secure checkout experience.'
    },
    {
      img: serviser,
      title: 'Last Mile Connectivity',
      description: 'VITPARK understands the critical importance of last mile connectivity in delivering digital services to end-users. Through strategic partnerships and innovative infrastructure solutions, we bridge the gap between networks and end-users, ensuring reliable and high-speed connectivity to homes, businesses, and communities.'
    },
    {
      img: mobility,
      title: 'Mobility',
      description: 'In an increasingly mobile-centric world, VITPARK enables businesses to embrace mobility with tailored solutions that cater to the needs of today\'s on-the-go consumers. Whether it\'s developing mobile applications, optimizing websites for mobile devices, or leveraging location-based services, we empower businesses to engage with their audiences anytime, anywhere.'
    }
  ];

  const services2 = [
    {
      img: wallet2,
      title: 'E-business',
      description: 'Empower your business to thrive in the digital landscape with VITPARK\'s comprehensive e-business solutions. From setting up online storefronts and implementing digital payment systems to streamlining supply chain management and enhancing customer engagement, we provide end-to-end support to drive your e-business initiatives forward.'
    },
    {
      img: social,
      title: 'Digital Marketing',
      description: 'Unlock the full potential of your digital presence with VITPARK\'s digital marketing expertise. Our seasoned professionals specialize in a wide array of digital marketing strategies, including search engine optimization (SEO), social media marketing, email marketing, content marketing, and online advertising. Harness the power of digital channels to reach your target audience, drive engagement, and achieve your business objectives.'
    },
    {
      img: itPark,
      title: 'IT Park',
      description: 'VITPARK\'s IT Park provides state-of-the-art infrastructure and facilities for businesses to thrive in the digital age. With high-speed internet connectivity, modern office spaces, conference rooms, and collaborative work environments, our IT Park fosters innovation, creativity, and growth. Join us at VITPARK and experience the ultimate workspace for your digital journey.'
    }
  ];

  const renderServices = (services) => (
    services.map((service, index) => (
      <div key={index} className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transform hover:scale-105 transition duration-300">
        <img src={service.img} alt="" className="h-20 w-20 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">{service.title}</h3>
        <p className="text-gray-700 text-center">{service.description}</p>
      </div>
    ))
  );

  return (
    <div className='mt-8 grid grid-cols-1
    lg:mt-[150px] lg:mb-[100px]
    md:grid-cols-3 gap-6' id='services'>
      {renderServices(services1)}
      {renderServices(services2)}
    </div>
  );
};

export default Services;
