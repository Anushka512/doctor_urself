import { AuthContext } from "@/Context/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        // navigate("/");
      })
      .catch((e) => console.log(e));
  };

  const menuItems = (
    <>
      <li>
        <Link  className="regular-font" href="/">Home</Link>
      </li>
      <li>
        <Link className="regular-font" href="/our-program">Our Program</Link>
      </li>
      <li>
        <Link className="regular-font" href="/testimonials">Testimonials</Link>
      </li>

      <li>
        <Link className="regular-font" href="/our-team">Our Team</Link>
      </li>
      <li>
        <Link className="regular-font" href="/how-we-work">How We Work</Link>
      </li>
      <li>
        <Link className="regular-font" href="/about-us">About Us</Link>
      </li>
      <li>
        <Link className="regular-font" href="/contact-us">Contact Us</Link>
      </li>
      <li>
        <Link className="regular-font" href="/blog">Blog</Link>
      </li>
      <li>
        <Link className="regular-font" href="/gallery">Gallery</Link>
      </li>
    </>
  );

  const buttons = (
    <>
      {!user && (
        <>
          <Link href="/login" className="btn btn-ghost regular-font">
            Login
          </Link>
          <Link className="btn px-6 bg-black text-white border-none regular-font" href="/signup" aria-label="Sign up now">Sign up</Link>

        </>
      )}
    </>
  );

  const subMenu = <>
  <li>
  <Link className="regular-font" href="/testimonials">Testimonials</Link>
</li>

<li>
  <Link className="regular-font" href="/our-team">Our Team</Link>
</li>
<li>
  <Link className="regular-font" href="/blog">Blog</Link>
</li>
<li>
  <Link className="regular-font" href="/gallery">Gallery</Link>
</li>
</>



  const mainMenu = (
    <>
      <li>
        <Link  className="regular-font focus:bg-[#5D9C59]" href="/">Home</Link>
      </li>
      <li>
        <Link className="regular-font focus:bg-[#5D9C59]" href="/our-program">Our Program</Link>
      </li>
      <li>
        <Link className="regular-font focus:bg-[#5D9C59]" href="/how-we-work">How We Work</Link>
      </li>
      <li>
        <Link className="regular-font focus:bg-[#5D9C59]" href="/about-us">About Us</Link>
      </li>
      <li>
        <Link className="regular-font focus:bg-[#5D9C59]" href="/contact-us">Contact Us</Link>
      </li>
      <li>
      <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost regular-font btn-lowercase focus:bg-[#5D9C59]">
              More
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow  md:bg-[#5D9C59] focus:bg-[#5D9C59] rounded-box w-52 text-white"
            >
              {subMenu}<span className="md:hidden">{buttons}</span>
            </ul>
          </div>
      </li>
    </>
  )

 
  const profileButtons = (
    <>
      {user && (
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Image src={user?.photoURL} alt="user" height={20} width={20} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#!" className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a href="#!">Settings</a>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
  return (
    <div className="z-10">
      <div className="navbar bg-base-100 lg:px-20">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow light-green md:bg-info rounded-box w-52 text-white"
            >
              {menuItems}<span className="md:hidden">{buttons}</span>
            </ul>
          </div>
          <a
            href="/"
            className="btn btn-ghost normal-case flex text-xl items-center"
          >
            <Image
              src="/assets/logopng.webp"
              alt="logo"
              width={60}
              height={60}
            />
            <div className="ml-2 flex flex-col mb-2">
              <h1 className="text-md head-font text-left">Doctor Yourself</h1>
              <p className="text-xs regular-font text-left">Free from diseases</p>
            </div>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            
          {mainMenu}
          
          
          </ul>
         
        </div>
        <div className="navbar-end md:w-[50%] lg:w-[40%]">
          <div className="hidden md:flex">{buttons}</div>
          <div className="">{profileButtons}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
