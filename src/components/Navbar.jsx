import React, { useState } from 'react';
import Logo from './images/vitpark.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-lg sticky top-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-14 w-20" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white font-handwriting" style={{ fontFamily: 'cursive' }}>VIT PARK</span>
        </div>
        <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded={isOpen}>
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`w-full md:flex md:w-auto ${isOpen ? '' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#home" className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${activeLink === 'home' ? 'text-pink-700' : 'text-gray-900 '}`} onClick={() => handleSetActiveLink('home')}>Home</a>
            </li>
            <li>
              <a href="#about" className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${activeLink === 'about' ? 'text-pink-700' : 'text-gray-900'}`} onClick={() => handleSetActiveLink('about')}>About Us</a>
            </li>
            <li>
              <a href="#business" className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${activeLink === 'business' ? 'text-pink-700' : 'text-gray-900'}`} onClick={() => handleSetActiveLink('business')}>Business</a>
            </li>
            <li>
              <a href="#services" className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${activeLink === 'services' ? 'text-pink-700' : 'text-gray-900'}`} onClick={() => handleSetActiveLink('services')}>Services</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;