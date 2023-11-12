// src/Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" bg-blue-gray-50 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-lg font-bold">JodDev</div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="">
            Home
          </a>
          <a href="#" className="">
            About
          </a>
          <a href="#" className="">
            Services
          </a>
          <a href="#" className="">
            Contact
          </a>
        </div>
        {/* Responsive menu icon for small screens */}
        <div className="md:hidden">
          <button
            className=""
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        {/* Responsive menu for small screens */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 mt-4">
              <a href="#" className="">
                Home
              </a>
              <a href="#" className="">
                About
              </a>
              <a href="#" className="">
                Services
              </a>
              <a href="#" className="">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
