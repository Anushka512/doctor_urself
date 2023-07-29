import MainLayout from '@/layout/MainLayout';
import axios from 'axios';


function CourseDetails({ data }) {
  return (
    <MainLayout>
      <div className="bg-[#171717ED] mb-10">
      <div className="card static w-full  ">
        <h1 className="text-xl md:text-2xl  text-white text-center font-bold my-6">
          {" "}
          {data?.title}{" "}
        </h1>
        <figure>
          <img src={data?.img} alt="Shoes" className="w-full md:w-1/2" />
        </figure>
        <div className="card-body text-white">
          <div className="flex justify-center items-center">
            <span className="mr-2 text-xl font-bold">
              {data?.ratings?.rating}
            </span>
            <div className="rating rating-sm ">
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
          <h1 className="text-center font-extrabold text-3xl">
            ₹ {data?.price}
          </h1>
          <div className="card-actions justify-center">
            <button className="btn btn-primary rounded-full">Enroll Now</button>
          </div>
          <div className="flex items-center flex-col mt-20">
            <h2 className="card-title justify-center my-5">
              About These Course
            </h2>
            <p className="w-full lg:w-1/2">{data?.description}</p>
          </div>
          <div className="flex items-center flex-col mt-20">
            <h2 className="card-title justify-center my-5">
              Learning Objectives
            </h2>
            <p className="w-full lg:w-1/2">{data?.learning_objective}</p>
          </div>
        </div>
      </div>
    </div>
    </MainLayout>
  );
}

export async function getStaticPaths() {

  const res = await axios.get(
    `https://doctor-yourself-server-ebon.vercel.app/api/v1/course`
  );

  const paths = res.data.data.map(item=>{
    return {
      params:{
        courseId : item._id.toString()
      }
    }
  })

  return {
     paths,
     fallback: false,
   
    
  };
}
export async function getStaticProps(ctx) {
  const { courseId } = ctx.params;

  const res = await axios.get(
    `https://doctor-yourself-server-ebon.vercel.app/api/v1/course/${courseId}`
  );
  const data = await res.data;

  return {
    props: {
      data: data.data,
      
    },
    
  };
}

export default CourseDetails;
