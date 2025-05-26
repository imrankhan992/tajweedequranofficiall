import React from "react";
import MobileDrawer from "./Drawer/MobileDrawer";
import { Link } from "react-router-dom";
import tajweedQuranLogo from "../assets/TQOA_logo.png"
const Header = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#214C5E] shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to={"/"} className="flex-shrink-0">
          <img
            src={tajweedQuranLogo}
            width={70}
            height={70}
            alt="Tajweed e Quran Online Academy logo"
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 text-white font-semibold text-sm lg:text-base">
          <li className="hover:underline cursor-pointer" onClick={() => scrollToSection("home")}>
          <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:underline cursor-pointer" onClick={() => scrollToSection("courses")}>
            <Link to={"/#courses"}>Courses</Link>
          </li>
          <li className="hover:underline cursor-pointer" onClick={() => scrollToSection("aboutUs")}>
           <Link to={"/#aboutUs"}>About Us</Link>
          </li>
          <li className="hover:underline cursor-pointer" onClick={() => scrollToSection("contactUs")}>
            <Link to={"/#contactUs"}>Contact Us</Link>
          </li>
          <li className="hover:underline cursor-pointer" onClick={() => scrollToSection("FAQ")}>
            <Link to={"/#FAQ"}>FAQ</Link>
          </li>
          <li className="hover:underline cursor-pointer" >
          <Link to={"/blogs"}>  Blogs</Link>
          </li>
          <li>
            <button
              className="bg-[#C28336] text-white px-4 py-2 rounded-full hover:brightness-110 transition"
              onClick={() => scrollToSection("courses")}
              aria-label="Request a demo class"
            >
             <Link to={"/#courses"}>Request a Demo</Link>
            </button>
          </li>
        </ul>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <MobileDrawer />
        </div>
      </nav>
    </header>
  );
};

export default Header;
