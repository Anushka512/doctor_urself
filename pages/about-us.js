import AboutUs from "@/components/AboutUs";
import WorkContactHeader from "@/components/WorkContactHeader";
import MainLayout from "@/layout/MainLayout";

const AboutUsPage = () => {
  return (
    <MainLayout>
      <WorkContactHeader title="About Us" img="assets/about-us.jpg" />
      <AboutUs />
    </MainLayout>
  );
};

export default AboutUsPage;
