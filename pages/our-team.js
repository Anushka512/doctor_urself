import WorkContactHeader from "@/components/WorkContactHeader";
import MainLayout from "@/layout/MainLayout";
import OurTeam from "@/components/OurTeam";

function OurTeamPage() {
    return (
        <MainLayout>
           <WorkContactHeader title="Our Team" img="assets/how-work-bg.webp"/>
           <OurTeam/>
        </MainLayout>
    );
}

export default OurTeamPage;