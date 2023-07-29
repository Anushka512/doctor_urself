import Link from 'next/link';
import { useState } from 'react';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const menuItems = (
    <>
      <li>
        <Link className="px-3 py-2 text-gray-300 hover:text-white" href="/">Home</Link>
      </li>
      <li>
        <Link className="px-3 py-2 text-gray-300 hover:text-white" href="/our-program">Our Program</Link>
      </li>
      <li>
        <Link className="px-3 py-2 text-gray-300 hover:text-white" href="/testimonials">Testimonials</Link>
      </li>
      <li>
        <Link className="px-3 py-2 text-gray-300 hover:text-white" href="/about-us">About Us</Link>
      </li>
      <li>
        <Link className="px-3 py-2 text-gray-300 hover:text-white" href="/contact-us">Contact Us</Link>
      </li>
     
     
    </>
  );
const otherAreas = <> 
<li>
        <Link className="px-3 py-2 text-gray-300 hover:text-white" href="/how-we-work">How We Work</Link>
      </li>
 <li>
        <Link className="px-3 py-2 text-gray-300 hover:text-white" href="/gallery">Gallery</Link>
      </li>
 <li>
        <Link className="px-3 py-2 text-gray-300 hover:text-white" href="/blog">Blog</Link>
      </li>
<li>
        <Link className="px-3 py-2 text-gray-300 hover:text-white" href="/our-team">Our Team</Link>
      </li>
</>

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 text-white font-bold text-xl">Logo</a>
          </div>
          <div className="flex sm:hidden">
            <button onClick={toggleNavbar} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
          <div className="hidden sm:block">
            <ul className="flex items-center">
              {/* <li><a href="#" className="px-3 py-2 text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#" className="px-3 py-2 text-gray-300 hover:text-white">About</a></li>
              <li><a href="#" className="px-3 py-2 text-gray-300 hover:text-white">Services</a></li>
              <li><a href="#" className="px-3 py-2 text-gray-300 hover:text-white">Contact</a></li> */}
              {menuItems}
              <div className="dropdown dropdown-end">
  <label tabIndex={0} className="btn m-1">Click</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
      {otherAreas}
  </ul>
</div>
           
              
            </ul>
          </div>
        </div>
      </div>
      <div className={isOpen ? "sm:hidden block" : "hidden"}>
        <div className="px-2 pt-2 pb-3">
          <a href="#" className="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md">Home</a>
         
          <a href="#" className="block mt-1 px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">About</a>
          <a href="#" className="block mt-1 px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">Services</a>
          <a href="#" className="block mt-1 px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">Contact</a>
          <div className="dropdown dropdown-right">
  <label tabIndex={0} className="btn m-1">Click</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
   {otherAreas}
  </ul>
</div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
