import React from 'react';

const Stories = () => {
    return (
        <div>
            <section className="text-gray-600 body-font bg-[#F8F6F4] p-8
             flex lg:px-40 lg:py-10 flex-col sm:flex-row mt-20 mx-5 sm:mx-20">
                  <div className="sm:w-1/2 lg:pr-20 md:pr-10 ">
                    <iframe
                    title='f'
                      className="w-full h-full"
                      src="https://drive.google.com/file/d/1Y3hwcQAqzpvbrmLqgov4swg8vrlQD422/preview"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen>
                    </iframe>
                  </div>
                  <div className="mt-8 sm:w-1/2">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 head-font">Before they sold out
                      <br className="hidden lg:inline-block"/>readymade gluten
                    </h1>
                    <p className="mb-8 leading-relaxed regular-font">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                  </div>
              </section>
        </div>
    );
};

export default Stories;