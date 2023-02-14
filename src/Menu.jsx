import React, { useState } from 'react';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="relative block w-10 h-10 p-0 z-10 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className="hamburger absolute w-full h-2 bg-gray-800 rounded-full transition duration-150 ease-in-out"
        ></span>
        <span
          className={`hamburger absolute w-full h-2 bg-gray-800 rounded-full transition duration-150 ease-in-out ${
            isOpen ? 'transform rotate-45' : ''
          }`}
          style={{ top: '5px' }}
        ></span>
        <span
          className={`hamburger absolute w-full h-2 bg-gray-800 rounded-full transition duration-150 ease-in-out ${
            isOpen ? 'opacity-0 transform translate-y-5' : ''
          }`}
          style={{ top: '10px' }}
        ></span>
      </button>
      <nav
        className={`fixed right-0 top-0 z-0 bg-white p-5 rounded-lg shadow-md transition ease-in-out duration-150 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <a className="block font-medium text-lg text-gray-800 hover:text-gray-600" href="#">
          Home
        </a>
        <a className="block font-medium text-lg text-gray-800 hover:text-gray-600 mt-5" href="#">
          About
        </a>
        <a className="block font-medium text-lg text-gray-800 hover:text-gray-600 mt-5" href="#">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Menu;
