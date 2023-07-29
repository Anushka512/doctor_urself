import Image from "next/image";
import React from "react";
import Heading from "./Heading";

const PlayStore = () => {
  return (
    <div className=" bg-[#F8F6F4] mx-5 sm:mx-20 mt-20 text-black p-8">
      <Heading title="Our Mobile App" color="text-black head-font" />
      <div className="">
        <div className="hero-content flex-col lg:flex-row mt-8">
          <Image
            src="/assets/app.webp"
            className="w-full md:w-1/2 lg:w-1/4 rounded-lg shadow-2xl"
            alt=""
            width={400}
            height={400}
          />
          <div className="ml-5">
            <h1 className="text-2xl font-bold regular-font">
              Want to know more about programs ? <br />
              Install our app from the playstore now!
            </h1>
            <Image
              src="/assets/playstore.webp"
              alt=""
              className="w-1/3 mt-5 "
              height={200}
              width={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayStore;
