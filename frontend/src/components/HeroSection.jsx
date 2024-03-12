import React from 'react';
import Navbar from './Navbar';
import video from '../assets/video.mp4';

const HeroSection = () => {
  return (
    <div className='relative'>
      {/* Navbar component */}
      <Navbar className='absolute top-0 left-0 w-full z-40' />
      {/* Hero content */}
      <div className='relative w-full'>
        <video className='w-full' autoPlay muted loop>
          <source src={video} type='video/mp4' />
        </video>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
          <p className='text-white text-3xl font-semibold mb-4'>LOVING RADICALLY, LIVING GENEROUSLY</p>
          <p className='text-white text-5xl font-bold mb-8'>WATCHING JESUS DO THE EXTRAORDINARY</p>
          <button className='bg-lime-500 font-bold text-xl rounded-3xl py-2 px-7 border border-white text-white '>CONNECT</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
