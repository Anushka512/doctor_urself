import Image from "next/image";
import styles from "../styles/Home.module.css";
import bgImage from "../public/assets/plate.jpg";

const HomeHeader = () => {
  return (
    <div className='relative lg:mx-20'>
      <section className="lg:h-screen flex flex-1 shrink-0 items-center justify-start overflow-hidden pb-16 md:py-22">
        <div className="flex ml-6 mt-16 sm:ml-20 flex-col -z-10 md:items-left p-4 lg:mt-10 md:w-1/2 ">
          <span className="mb-4 text-left text-md sm:text-xl md:mb-8 regular-font">
            Learn Deepta Manohar's way
          </span>
          <h1 className="mb-5 md:text-left text-2xl font-bold text-black md:mb-6 md:text-4xl lg:text-5xl head-font">
            A healthy and a safe journey
            <br className="md:hidden" /> heading for you
          </h1>
          {/* <span className="mb-4 text-left text-md sm:text-xl md:mb-8 regular-font">We provide online courses</span> */}
          <div className="flex flex-col gap-2.5 sm:flex-row w-28">
            <a
              href="#enroll"
              className="inline-block   p-4  regular-font dark-green text-white rounded"
              aria-label="Enroll now"
            >
              Enroll Now
            </a>
          </div>
        </div>
        <div className="main-img absolute top-0 right-0 h-full w-full -z-50">
          <Image
            src={bgImage}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            priority={true}
            objectPosition="right"
          />
        </div>
      </section>
    </div>
  );
};

export default HomeHeader;
