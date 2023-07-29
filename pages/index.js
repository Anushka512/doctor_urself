import HomeHeader from "@/components/HomeHeader";
import OurTeam from "@/components/OurTeam";
import PlayStore from "@/components/PlayStore";
import Stories from "@/components/Stories";
import TopCourses from "@/components/TopCourses";
import WeProvide from "@/components/WeProvide";
import MainLayout from "@/layout/MainLayout";
import axios from 'axios';
import Carousal from "@/components/Carousal";
import FaQ from "@/components/FaQ";


export default function Home() {
  return (
    <MainLayout>
      <HomeHeader />
      <TopCourses />
      <Stories />
      
        {/* <WeProvide /> */}
      <Carousal/>
      <OurTeam/>
      <PlayStore />
      <FaQ/>
    </MainLayout>
  );
}

