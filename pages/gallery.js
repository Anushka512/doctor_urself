import GalleryHeader from "@/components/GalleryHeader";
import GalleryMain from "@/components/GalleryMain";
import WorkContactHeader from "@/components/WorkContactHeader";
import MainLayout from "@/layout/MainLayout";

function Gallery() {
    return (
        <MainLayout>
             <WorkContactHeader title="My Gallery" img="assets/my-gallery.webp" />
             <GalleryHeader/>
             <GalleryMain/>
        </MainLayout>
    );
}

export default Gallery;