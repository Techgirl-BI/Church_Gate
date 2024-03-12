import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black text-white mx-64 flex justify-between'>
<div className='flex'>
<img width='130' src='https://www.pngkey.com/png/full/208-2089134_rccg-logo-redeemed-christian-church-logo.png'/>
<p className='text-4xl ml-4 italic font-normal'>Palace <br/> of <br/> Praise</p>
    </div>        
        <ul className='text-xl mt-12 font-bold'>
            <li className='inline mr-4'>ABOUT</li>
            <li className='inline mr-4'>EVENTS</li>
            <li className='inline mr-4'>CONNECT</li>
            <li className='inline mr-4'>GET INVOLVED</li>
            <li className='inline mr-4'>FIND HELP</li>
        </ul>
        <button className='mr-4 font-bold text-xl bg-lime-500 w-fit h-fit mt-10 rounded-3xl py-2 px-7 border border-white'>MESSAGES</button>
        <button className='font-bold relative right-11 text-xl w-fit h-fit mt-10  rounded-3xl px-9 py-2 border outline-2 border-white'>GIVE</button>
    </div>
  )
}

export default Navbar