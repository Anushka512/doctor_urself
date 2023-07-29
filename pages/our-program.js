import OurProgramHeader from "@/components/OurProgramHeader";
import Programs from "@/components/Programs";
import PlayStore from "@/components/PlayStore";
import OurTeam from "@/components/OurTeam";
import Diet from "@/components/WeDo/Diet";
import Health from "@/components/WeDo/Health";
import LifeStyle from "@/components/WeDo/LifeStyle";
import ClientSeen from "@/components/ClientSeen";
import MainLayout from "@/layout/MainLayout";
import HowWorks from "@/components/HowWorks";
import ProgramStories from "@/components/ProgramStories";
import WorkContactHeader from "@/components/WorkContactHeader";

const OurProgram = () => {
  return (
    <MainLayout>
       <WorkContactHeader title="Our Program" img="assets/our-program.jpg"/>
      <Programs/>
      <Diet/>
      <Health/>
      <LifeStyle/>
      <ClientSeen/>
      <HowWorks/>
      <ProgramStories/>
      <OurTeam/>
      <PlayStore/>
    </MainLayout>
  );
};

export default OurProgram;
