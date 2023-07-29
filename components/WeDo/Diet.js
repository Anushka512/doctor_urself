import Image from "next/image";

const Diet = () => {
    return (
        <div className="mx-6 sm:mx-20">
            <section className="text-gray-600 body-font">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8 mt-20">
   
   <h2 className="mb-4 text-center text-4xl font-extrabold text-gray-800 md:mb-6 lg:text-5xl head-font">How we do it?</h2>

   <p className="mx-auto max-w-screen-md text-center font-bold md:text-xl regular-font">Accutouch Therapy</p>
 </div>
  <div className="container  flex p-8 mt-20 md:flex-row flex-col align-left  bg-[#F8F6F4]">
    <div className="lg:max-w-lg lg:w-full md:w-1/2  mb-10 md:mb-0">
      <Image className="object-cover object-center rounded" alt="hero" src="/assets/diet.jpg" width={500} height={500}/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left">
      <h1 className="head-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Diet
      </h1>
      <p className="mb-8 leading-relaxed regular-font">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex">
        <button className="inline-flex text-white border-0 bg-[#5D9C59] py-2 px-6 focus:outline-none  rounded text-lg regular-font">Click Here</button>
       
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default Diet;