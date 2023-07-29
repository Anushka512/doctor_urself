import React,{useEffect,useState} from 'react';
import AliceCarousel from 'react-alice-carousel';
import CarousalCards from './CarousalCards';
import 'react-alice-carousel/lib/alice-carousel.css';
import { data } from './data';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import achutha_rao_profile from "../public/assets/testimonials/Achutha_rao/achutha_rao_profile.jpeg"
import achutha_rao_transformation from "../public/assets/testimonials/Achutha_rao/achutha_rao_transformation.jpeg"
import achutha_rao_letter from "../public/assets/testimonials/Achutha_rao/achutha_rao_letter.png"
import bhavana_m_profile from "../public/assets/testimonials/bhavana_m_a/bhavana_m_profile.jpeg"
import bhavana_m_transformation from "../public/assets/testimonials/bhavana_m_a/bhavana_m_transformation.jpeg"
import bhavana_m_letter from "../public/assets/testimonials/bhavana_m_a/bhavana_m_letter.jpeg" 
import h_ramaswamy_profile from "../public/assets/testimonials/H_ramaswamy/h_ramaswamy_profile.jpeg"
import h_ramaswamy_transformation from "../public/assets/testimonials/H_ramaswamy/h_ramaswamy_transformation.jpeg"
import h_ramaswamy_letter from "../public/assets/testimonials/H_ramaswamy/h_ramaswamy_letter.jpg"
import madhu_ramaswamy_profile from "../public/assets/testimonials/madhu_ramaswamy/madhu_ramaswamy_profile.jpg"
import madhu_ramaswamy_transformation from "../public/assets/testimonials/madhu_ramaswamy/madhu_ramaswamy_transformation.jpg"
import madhu_ramaswamy_letter from "../public/assets/testimonials/madhu_ramaswamy/madhu_ramaswamy_letter.png"
import priya_r_profile from "../public/assets/testimonials/priya_r/priya_r_profile.jpeg"
import priya_r_transformation from "../public/assets/testimonials/priya_r/priya_r_transformation.jpeg"
import priya_r_letter from "../public/assets/testimonials/priya_r/priya_r_letter.jpeg"
import sanjay_k_s_profile from "../public/assets/testimonials/sanjay_k_s/sanjay_k_s_profile.jpg"
import sanjay_k_s_transformation from "../public/assets/testimonials/sanjay_k_s/sanjay_k_s_transformation.jpg"
import sanjay_k_s_letter from "../public/assets/testimonials/sanjay_k_s/sanjay_k_s_letter.jpeg"
import sunitha_b_letter from "../public/assets/testimonials/sunitha_b/sunitha_b_letter.png"
import shilpa_patil_letter from "../public/assets/testimonials/shilpa_patil/shilpa_patil_letter.jpeg"
import Sandhya_rao_letter from "../public/assets/testimonials/Sandhya_rao/Sandhya_rao_letter.jpeg"
import Ramya_bhat_letter from "../public/assets/testimonials/Ramya_bhat/Ramya_bhat_letter.jpeg"
import nagarju_c_letter from "../public/assets/testimonials/Nagarju_c/Nagarju_c_letter.png"
import keerti_anand_letter from "../public/assets/testimonials/keerti_anand/keerti_anand_letter.jpeg"
import keerti_anand_profile from "../public/assets/testimonials/keerti_anand/keerti_anand_profile.jpg"
import keerti_anand_transformation from  "../public/assets/testimonials/keerti_anand/keerti_anand_transformation.jpg"
 

import man from "../public/assets/man.png"
import women from "../public/assets/women.png"
import Heading from './Heading';
 

const handleDragStart = (e) => e.preventDefault();


const res = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};



const Carousal = () => {
  const [items,setItems]= useState([])
  const responsive = {
    0: {
        items: 1,
    },
    1024: {
        items: 3,
        itemsFit: 'contain',
    }
  }
  useEffect(()=>{
    const temp = data.map((item,index)=>{
      if(item.image==="achutha_rao_profile"){
        return <CarousalCards key={index} image={achutha_rao_profile} transformation={achutha_rao_transformation} letter={achutha_rao_letter} item={item} onDragStart={handleDragStart} role="presentation" />
      }else if(item.image==="bhavana_m_profile"){
        return <CarousalCards key={index} image={bhavana_m_profile} transformation={bhavana_m_transformation} letter={bhavana_m_letter} item={item} onDragStart={handleDragStart} role="presentation" />
      }else if(item.image==="h_ramaswamy_profile"){
        return <CarousalCards key={index} image={h_ramaswamy_profile} transformation={h_ramaswamy_transformation} letter={h_ramaswamy_letter} item={item} onDragStart={handleDragStart} role="presentation" />
      }else if(item.image==="madhu_ramaswamy_profile"){
        return <CarousalCards key={index} image={madhu_ramaswamy_profile} transformation={madhu_ramaswamy_transformation} letter={madhu_ramaswamy_letter} item={item} onDragStart={handleDragStart} role="presentation" />
      }else if(item.image==="priya_r_profile"){
        return <CarousalCards key={index} image={priya_r_profile} transformation={priya_r_transformation} letter={priya_r_letter} item={item} onDragStart={handleDragStart} role="presentation" />
      }else if(item.image==="sanjay_k_s_profile"){
        return <CarousalCards key={index} image={sanjay_k_s_profile} transformation={sanjay_k_s_transformation} letter={sanjay_k_s_letter} item={item} onDragStart={handleDragStart} role="presentation" />
      }else if(item.image==="keerti_anand_profile"){
        return <CarousalCards key={index} image={keerti_anand_profile} transformation={keerti_anand_transformation} letter={keerti_anand_letter} item={item} onDragStart={handleDragStart} role="presentation" />
      }else if(item.gender==="male"){
        if(item.name==="Nagarju C"){
          return <CarousalCards key={index} image={man} item={item} transformation="NA" letter={nagarju_c_letter} onDragStart={handleDragStart} role="presentation" />
        }
      }else if(item.gender==="female"){
        if(item.name==="Sunitha B"){
          return <CarousalCards key={index} image={women} item={item} transformation={"NA"} letter={sunitha_b_letter} onDragStart={handleDragStart} role="presentation" />
        }else if(item.name==="Shilpa Patil"){
          return <CarousalCards key={index} image={women} item={item} transformation={"NA"} letter={shilpa_patil_letter} onDragStart={handleDragStart} role="presentation" />
        }else if(item.name==="Sandhya Rao"){
          return <CarousalCards key={index} image={women} item={item} transformation={"NA"} letter={Sandhya_rao_letter} onDragStart={handleDragStart} role="presentation" />
        }else if(item.name==="Ramya Bhat"){
          return <CarousalCards key={index} image={women} item={item} transformation={"NA"} letter={Ramya_bhat_letter} onDragStart={handleDragStart} role="presentation" />
        }
      }
    })
    setItems(temp)
  },[])
  return (
    <div className='mx-5 sm:mx-20 mt-20 light-grey py-10 px-1 sm:px-6'>
      <Heading title="Testimonials" color="text-black head-font mb-20"/>
      {/* <AliceCarousel mouseTracking items={items} responsive={responsive}/> */}
      <Carousel
          // swipeable={false}
          // draggable={false}
          // showDots={true}
          responsive={res}
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
          {items}
        </Carousel>
    </div>
  );
}

export default Carousal;