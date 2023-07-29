import Image from "next/image";

const LifeStyle = () => {
    return (
        <div className="mx-6 sm:mx-20 mt-20 light-grey p-8">
            <section className="text-gray-600 body-font">
  <div className="container flex md:flex-row flex-col">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 mb-10 md:mb-0">
      <Image className="object-cover rounded" alt="hero" src="/assets/lifestyle.jpg" width={500} height={500}/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 head-font">Lifestyle
      </h1>
      <p className="mb-8 leading-relaxed regular-font">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex">
        <button className="inline-flex text-white  border-0 py-2 px-6 focus:outline-none rounded text-lg regular-font dark-green">Click Here</button>
       
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default LifeStyle;