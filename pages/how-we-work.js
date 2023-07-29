import HowWeWork from "@/components/HowWeWork";
import HowWorks from "@/components/HowWorks";
import WorkContactHeader from "@/components/WorkContactHeader";
import MainLayout from "@/layout/MainLayout";

const HowWeWorkPage = () => {
    return (
        <MainLayout>
    <WorkContactHeader title="How We Work" img="assets/how-we-work.jpg"/>
    <HowWeWork/>
    <HowWorks/>
        </MainLayout>
    );
}

export default HowWeWorkPage;