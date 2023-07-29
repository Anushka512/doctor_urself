import React from 'react';

const Heading = ({title, des,color}) => {
    return (
        <div>
              <div className="mx-auto max-w-screen-2xl px-4 md:px-8 ">
   
   <h2 className={`text-center text-2xl md:text-4xl  font-extrabold ${color? color :"text-gray-800"} lg:text-5xl`}>{title}</h2>

   <p className="mx-auto max-w-screen-md text-center font-bold md:text-lg"></p>
 </div>
        </div>
    );
};

export default Heading;