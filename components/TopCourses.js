import Link from "next/link";
import Heading from "./Heading";
import Image from "next/image";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { getCourses} from '../lib/fetchHelper'
import {  useQuery } from "@tanstack/react-query";
import CourseCards from "./CourseCards"
import { courseData } from "./data";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 601 },
    items: 2,
    slidesToSlide: 2 
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

function TopCourses() {

   const { isLoading, isError, data, error,refetch } = useQuery({ queryKey: ['courses'], queryFn: getCourses })
    console.log(data)
   
    const renderCourse = ()=>{
      return courseData.map((item)=>{
        return <CourseCards title={item.title} image={item.image} description={item.description} stars={item.stars}/>
      })
    }

    return (
        <div className="mt-20 mx-5 sm:mx-20 light-grey py-10 px-1 sm:px-6 rounded">
          <div>
      <div className="flex  justify-center pt-6">
     
      </div>
      <div>
        <Heading title="Browse our top courses" color="text-black head-font" />
      </div>
      <div className="mt-12">
        <Carousel
          // swipeable={false}
          // draggable={false}
          // showDots={true}
          responsive={responsive}
          // ssr={true} // means to render carousel on server-side.
          // infinite={true}
          // autoPlaySpeed={1000}
          // keyBoardControl={true}
          // customTransition="all .5"
          // transitionDuration={500}
          // containerClass="carousel-container"
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          // dotListClass="custom-dot-list-style"
          // itemClass="carousel-item-padding-40-px"
        >
          {renderCourse()}
        </Carousel>
      </div>
          {/* <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center py-10">
            {data &&
              data?.data?.map((item) => (
                <div key={item.id} className="card static md:w-92 lg:w-96 shadow-xl">
                  <Link href={item?._id}>
                    <figure>
                      <Image
                        src={item?.img}
                        className="w-full h-64 rounded-t-xl"
                        alt="Shoes"
                      width={200}
                      height={200}
                      />
                    </figure>
                  </Link>
                  <div className="card-body text-white">
                    <h2 className="card-title justify-center">{item?.title}</h2>
                    <p>{item?.description?.slice(0, 100)
                    }...</p>
                    <div className="flex justify-center items-center">
                      <label className="mr-2 text-xl font-bold">
                        {item?.ratings?.rating}
                      </label>
                      <div className="rating static rating-sm ">
                        <input
                          type="radio"
                          name="rating-6"
                          className="mask mask-star-2 static bg-orange-400"
                          aria-label="rating"
                        />
                        <input
                          type="radio"
                          name="rating-6"
                          className="mask mask-star-2 bg-orange-400"
                          aria-label="rating"
                        />
                        <input
                          type="radio"
                          name="rating-6"
                          className="mask mask-star-2 bg-orange-400"
                          aria-label="rating"
                        />
                        <input
                          type="radio"
                          name="rating-6"
                          className="mask mask-star-2 bg-orange-400"
                          aria-label="rating"
                        />
                        <input
                          type="radio"
                          name="rating-6"
                          className="mask mask-star-2 bg-orange-400"
                          aria-label="rating"
                        />
                      </div>
                    </div>
                    <h1 className="text-center font-extrabold text-3xl">
                      ₹ {item.price}
                    </h1>
                    <div className="card-actions justify-center"> */}
                      {/* {
        !inCart(item.id)  ?
        <button onClick={() => addItem(item)}  className="btn btn-primary rounded-full">Add To Cart</button>
        :
        <Link href="/cart"  className="btn btn-Info rounded-full">Go To Cart</Link>
      } */}
                    {/* <Link href={`/payment/${item._id}`}> <button
                      
                      className="btn btn-primary rounded-full"
                    >
                      Enroll Now
                    </button></Link>
                    </div>
                  </div>
                </div>
              ))}
          </div> */}
    </div>
  </div>
    );
}



export default TopCourses;