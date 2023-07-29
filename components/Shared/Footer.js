import Link from "next/link";
import styles from "../../styles/Home.module.css"

const Footer = () => {
    return (
        <div className="pt-4 sm:pt-10 lg:pt-12 bg-cover mt-20 px-10 sm:px-auto 	bg-black">
      <footer className="mx-auto max-w-screen-2xl mx-12 sm:w-auto px-4 md:px-8 ">
        <div className="flex  align-center flex-col sm:flex-row mb-10 sm:justify-evenly">
         
        
          <div className="sm:mx-12 mt-12">
            <div className="mb-4  sm:mt-0  font-bold uppercase tracking-widest text-white head-font">Products</div>
    
            <nav className="flex flex-col gap-4">
              <div>
                <Link href="/" className="footer-links regular-font text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600">Overview</Link>
              </div>
    
              <div>
                <Link href="/our-program" className="footer-links regular-font text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600">Our Program</Link>
              </div>
  
            </nav>
          </div>
        
          <div className="sm:mx-12 mt-12">
            <div className="mb-4  sm:mt-0 font-bold uppercase tracking-widest text-white head-font">Company</div>
    
            <nav className="flex flex-col gap-4">
              <div>
                <Link href="/about" className="footer-links regular-font text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600">About</Link>
              </div>
              <div>
                <Link href="/our-program" className="footer-links regular-font text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600">Our Program</Link>

              </div>

              <div>
                <Link href="/blog" className="footer-links regular-font text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600">Blog</Link>
              </div>
              <div>
                <Link href="/how-we-work" className="footer-links regular-font text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600">How we work</Link>
              </div>
            </nav>
          </div>
          
          <div className="sm:mx-12 mt-12">
            <div className="mb-4  sm:mt-0 font-bold uppercase tracking-widest text-white head-font">Support</div>
    
            <nav className="flex flex-col gap-4">

              <div>
                <Link href="/contact-us" className="footer-links regular-font text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600">Contact Us</Link>
              </div>
    
              <div>
                <Link href="/" className="footer-links regular-font text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600">Chat</Link>
              </div>
    
              <div>
                <Link href="faq" className="footer-links regular-font text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600">FAQ</Link>
              </div>
            </nav>
          </div>
          
          <div className="sm:mx-12 mt-12">
            <div className="mb-4  sm:mt-0 font-bold uppercase tracking-widest text-white head-font">Legal</div>
    
            <nav className="flex flex-col gap-4">
              <div>
                <Link href="#terms" className="footer-links regular-font text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600">Terms of Service</Link>
              </div>
    
              <div>
                <Link href="#privacy" className="footer-links regular-font text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</Link>
              </div>
    
              <div>
                <Link href="#cookie" className="footer-links regular-font text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600">Cookie settings</Link>
              </div>
            </nav>
          </div>
          
  
        </div>
    
        <div className=" py-8 text-center text-sm text-white regular-font">Copyright © 2018-2023 Deepta Manohar Inc.</div>
      </footer>
    </div>
    );
}

export default Footer;