import React from 'react';

const WorkContactHeader = ({title,img}) => {
    return (
        <div className='mx-0 sm:mx-20'>
               <div className='bg-no-repeat bg-cover' style={{backgroundImage:`url(${img})`, }}>
              <section className="  flex flex-1 shrink-0 items-center justify-start overflow-hidden   pb-16  md:py-20 xl:py-48" >

     
      <div className=" flex mt-8 flex-col items-center p-4 sm:max-w-xl">
       
        <h1 className="head-font mb-8 text-left ml-2 sm:pl-20 md:pl-30 lg:pl-20 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">{title}</h1>

        
      </div>
      
    </section>
        </div>
        </div>
    );
};

export default WorkContactHeader;