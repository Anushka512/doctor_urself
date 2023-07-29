import Image from 'next/image';
import React from 'react';

const ProgramStories = () => {
    return (
        <div className='mx-6 sm:mx-20 mt-20 p-8 light-grey'>
            <section className="text-gray-600 body-font">
  <div className="container mx-auto flex md:flex-row flex-col ">
    <div className="lg:max-w-lg lg:w-full md:w-1/2  mb-10 md:mb-0">
      <Image className="object-cover object-center rounded" alt="hero" src="/assets/shilpa.png" width={350} height={350}/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left ">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 head-font">Before they sold out
        <br className="hidden lg:inline-block"/>readymade gluten
      </h1>
      <p className="mb-8 leading-relaxed regular-font">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex ">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg dark-green">Contact Us</button>
        {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default ProgramStories;