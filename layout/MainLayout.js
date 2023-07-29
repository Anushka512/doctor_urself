import Footer from "@/components/Shared/Footer";
import Nav from "@/components/Shared/Nav";
import Navbar from "@/components/Shared/Navbar";
import TopNav from "@/components/Shared/TopNav";

const MainLayout = ({ children }) => {
  return (
    <div>
      <div className="sticky top-0 z-10">
        <TopNav />
        <Navbar />
        {/* <Nav/> */}
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
