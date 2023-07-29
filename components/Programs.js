import Heading from "./Heading";
import Image from "next/image";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProgramCard from "./ProgramCard";

const data = [
  {
    img: "nutrition",
    title: "Nutrition Counseling",
    des: "Nutrition counseling involves meeting with a registered dietitian or nutritionist to discuss dietary habits and create a personalized nutrition plan.",
  },
  {
    img: "mental-health",
    title: "Mental Health Counseling",
    des: "Mental health counseling involves meeting with a mental health professional to discuss and manage issues such as depression, anxiety, and stress. ",
  },
  {
    img: "therapy",
    title: "Physical Therapy",
    des: "Physical therapy involves the use of exercises and other physical interventions to treat physical impairments, disabilities, or injuries. This service can help individuals regain mobility, reduce pain, and improve overall physical function.",
  },
  {
    img: "chiropractic",
    title: "Chiropractic Care",
    des: "Chiropractic care involves the manipulation of the spine and other joints to alleviate pain and improve overall health. This service can help individuals with back pain, neck pain, headaches, and other musculoskeletal issues.",
  },
  {
    img: "blood-pressure",
    title: "Blood Pressure",
    des: "Blood pressure monitoring involves measuring an individual's blood pressure to identify high or low blood pressure levels. This service can help individuals manage hypertension or other cardiovascular issues.",
  },
  {
    img: "meditation",
    title: "Wellness Coaching",
    des: "Wellness coaching involves working with a professional to identify and achieve personal health and wellness goals.",
  },
];

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

const Programs = () => {
  

  return (
    <div className="light-grey mx-6 sm:mx-20 rounded mt-20 p-8">
      <Carousel responsive={responsive}>
        {data.map((item)=>{
            return <ProgramCard title={item.title} description={item.des} image={item.img}/>
        })}
      </Carousel>
    </div>
  );
};

export default Programs;
