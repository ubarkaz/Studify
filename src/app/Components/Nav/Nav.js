'use client'; // Mark this component as a client component

import React, { useState } from 'react';

function Nav() {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu open/close

  return (
    <nav className=''>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 xl:px-4'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <a href='/' className='text-black'>
                Logo
              </a>
            </div>
          </div>

          <div className='hidden md:flex items-center space-x-4'>
            <div className='relative'>
              <input
                type='text'
                placeholder='Search courses'
                className='p-2 rounded-full border border-white text-black pl-10 w-72'
              />
              <svg
                className='absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
              </svg>
            </div>
            <a href='/' className='text-black hover:bg-white hover:text-black rounded-lg p-2'>About</a>
            <a href='/about' className='text-black hover:bg-white hover:text-black rounded-lg p-2'>Courses</a>
            <a href='/services' className='text-black hover:bg-white hover:text-black rounded-lg p-2'>Tutors</a>
            <a href='/contact' className='text-black hover:bg-white hover:text-black rounded-lg p-2'>Pricing</a>
            <button className='text-[#524fd5] border border-white bg-white hover:bg-white hover:text-black rounded-xl p-2 w-24'>Sign Up</button>
          </div>

          {/* Hamburger button for mobile */}
          <div className='md:hidden'>
            <button 
              onClick={() => setIsOpen(!isOpen)}  // Toggle menu open/close
              className='text-white focus:outline-none'>
              <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                {isOpen ? ( // Change icon based on state
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                ) : (
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && ( // Conditionally render menu based on state
        <div className='md:hidden fixed top-16 right-0 bg-black w-3/4 max-w-xs border-white border-2 z-50'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <a href='/' className='block text-white hover:bg-white hover:text-black p-2'>Home</a>
            <a href='/about' className='block text-white hover:bg-white hover:text-black p-2'>About</a>
            <a href='/services' className='block text-white hover:bg-white hover:text-black p-2'>Services</a>
            <a href='/contact' className='block text-white hover:bg-white hover:text-black p-2'>Contact</a>
            <button className='w-full text-white border border-white bg-transparent hover:bg-white hover:text-black p-2 mt-2'>Sign In</button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
