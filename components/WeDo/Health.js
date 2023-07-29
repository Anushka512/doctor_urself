import Image from "next/image";


const Health = () => {
    return (
        <div className="mx-6 sm:mx-20 bg-[#F8F6F4] mt-20">
            <section className="text-gray-600 body-font">
  <div className="container mx-auto flex p-8 md:flex-row flex-col-reverse items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 head-font">Healthy & Colorful
        <br className="hidden lg:inline-block"/>Recipe
      </h1>
      <p className="mb-8 leading-relaxed regular-font">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex">
        <button className="inline-flex text-white border-0 py-2 px-6 focus:outline-none bg-[#5D9C59] rounded text-lg regular-font">Click Here</button>
      
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 mb-8 sm:mb-auto">
      <Image className="object-cover object-center rounded" alt="hero" src="/assets/colorfull.jpg" height={500} width={500}/>
    </div>
  </div>
</section>
        </div>
    );
};

export default Health;