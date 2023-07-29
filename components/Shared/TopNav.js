import React from 'react';
import { BsFillBagPlusFill } from 'react-icons/bs';
const TopNav = () => {
    return (
        <div >
            <nav className="flex justify-end items-center px-4 bg-[#7FB77E]">
      
      <div className="flex items-center text-[10px] md:text-lg lg:px-16">
        <p className="mr-6 text-sm text-white light-regular-font">deepta.manu@gmail.com</p>
        <p className="mr-6 text-sm text-white light-regular-font">+91-9353690229</p>
        <a href='!#' className="text-sm flex items-center justify-center px-4 py-2 rounded-md text-white focus:outline-none light-regular-font">
         <BsFillBagPlusFill className='mr-2'/>
          Health Tool
        </a>
      </div>
    </nav>
        </div>
    );
};

export default TopNav;