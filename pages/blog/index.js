import BlogMain from "@/components/BlogMain";
import WorkContactHeader from "@/components/WorkContactHeader";
import MainLayout from "@/layout/MainLayout";

function Blog() {
    return (
        <MainLayout>
           <WorkContactHeader title="My Blog" img="assets/how-work-bg.webp" />
         <BlogMain/>
        </MainLayout>
    );
}

export default Blog;