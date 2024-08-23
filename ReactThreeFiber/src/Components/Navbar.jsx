import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import calestia from '/celestia.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-2">
              <span><img src={calestia} className='h-10 w-11' alt="calestia" /></span>
              <span className="text-white font-bold text-xl">Celestia</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-1xl font-semibold ">Home</NavLink>
                <NavLink to="/visit" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-1xl font-semibold ">Visit </NavLink>
                <NavLink to="/educational" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-1xl font-semibold ">Educational</NavLink>
                <NavLink to="/News" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-1xl font-semibold ">News</NavLink>
                <NavLink to="/satellite" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-1xl font-semibold ">Satellite</NavLink>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleNavbar} className="text-gray-200 hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</NavLink>
            <NavLink to="/visit" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Visit</NavLink>
            <NavLink to="/educational" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Eductional</NavLink>
            <NavLink to="/news" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">News</NavLink>
            <NavLink to="/satellite" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Satellite</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
