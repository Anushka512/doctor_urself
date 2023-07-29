import styles from "../styles/Home.module.css"

const HomeHeader = () => {
    return (
        <div className={`bg-auto sm:bg-cover	bg-no-repeat ${styles.bg}`}>
              <section className="lg:h-screen  flex flex-1 shrink-0 items-center justify-start overflow-hidden   pb-16  md:py-22  " >
 
     
     
      <div className=" flex flex-col md:items-center p-4 lg:mt-20 md:w-1/2 ">
        <p className="mb-4 text-center text-md text-indigo-200 sm:text-xl md:mb-8">LEARN DEEPTA MANOHAR'S WAY</p>
        <h1 className="mb-5 md:text-center text-xl font-bold text-white md:mb-12 md:text-4xl lg:text-5xl">A healthy and a safe <br className="md:hidden"/> journey of<br className="md:hidden"/>  heading for you</h1>

          <p className='text-white uppercase '>we provide<br className="md:hidden"/> online course</p>
        <div className="flex  flex-col gap-2.5 sm:flex-row  ">
          
          <a href="#enroll" className="inline-block rounded-lg bg-gray-500 px-8 py-3 w-40 text-center text-sm font-semibold text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50" aria-label="Enroll now">Enroll Now</a>

        </div>
      </div>
      
    </section>
        </div>
    );
};

export default HomeHeader;