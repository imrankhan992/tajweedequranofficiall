import React from "react";
import learnQuran from "./LearnQuran";
import instagram from "/instagram.svg"
import facebook from "/facebook.svg"
import tiktok from "/tiktok.svg"
import youtube from "/youtube copy.svg"
const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <footer className="bg-[#014B5E] text-center text-white dark:bg-neutral-600">
      <div className="container pt-9">
        {/* Footer Content Sections */}
        <div className="grid md:grid-cols-3 gap-8 text-start mb-6 px-10">
          {/* Courses Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Courses</h4>
            <ul className="text-sm gap-2 flex items-start justify-start flex-col">
              {learnQuran.map((item) => {
                return (
                  <li
                    onClick={() => scrollToSection("courses")}
                    key={item.id}
                    className="hover:underline cursor-pointer"
                  >
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* About Us Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4 ">About Us</h4>
            <p className="text-sm ">
              We are dedicated to providing quality Quran education online,
              helping students master Quranic recitation, Tajweed, and
              understanding.
            </p>
            <ul className="text-sm gap-2 mt-[8px] flex items-start justify-start flex-col">
              <li
                className="hover:underline cursor-pointer "
                onClick={() => scrollToSection("aboutUs")}
              >
                Our Mission
              </li>
              <li
                className="hover:underline cursor-pointer"
                onClick={() => scrollToSection("aboutUs")}
              >
                Our Vision
              </li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="text-sm flex items-start justify-start gap-2 flex-col">
              <li>
                <a
                  href="mailto:info@tajweedequran.com"
                  className="hover:underline cursor-pointer"
                >
                  Email: tajweedequranofficial@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/1234567890"
                  className="hover:underline cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: +923434207288
                </a>
              </li>
              {/* uk number */}
              <li>
                <a
                  href="https://wa.me/1234567890"
                  className="hover:underline cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Uk Contact: +447466582421
                </a>
              </li>
              <li>
                <a
                  href="https://tajweedequranofficial.com"
                  className="hover:underline cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website: https://tajweedequranofficial.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mb-9 !w-full flex md:gap-6 gap-4 justify-center items-center">
          <a className="border-2 rounded-full p-2 bg-white border-gray-800 text-white cursor-pointer dark:text-neutral-200" href="https://www.facebook.com/TajweedeQuranOfficial?mibextid=ZbWKwL" target="_blank">
            {/* Facebook Icon */}
           <img src={facebook} alt="" srcset="" width={30} height={30} className="md:w-12 w-7"/>
          </a>
        
          <a className=" border-2 rounded-full p-2 bg-white border-gray-800 text-white cursor-pointer dark:text-neutral-200" href="https://www.instagram.com/tajweedequranofficial" target="_blank">

            {/* Instagram Icon */}
            <img src={instagram} alt="" srcset="" width={30} height={30} className="md:w-12 w-7"/>
          </a>
          
          <a className=" border-2 rounded-full p-2 bg-white border-gray-800 text-white cursor-pointer dark:text-neutral-200" href="https://www.youtube.com/@tajweedequranofficial" target="_blank">
            {/* youtube Icon */}
            <img src={youtube} alt="" srcset="" width={30} height={30} className="md:w-12 w-7"/>
          </a>
          <a className=" border-2 rounded-full p-2 bg-white border-gray-800 text-white cursor-pointer dark:text-neutral-200" href="https://www.tiktok.com/@tajweedequranofficial" target="_blank">
            {/*tiktok icon */}
            <img src={tiktok} alt="" srcset="" width={30} height={30} className="md:w-12 w-7"/>
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#032E3C] p-4 text-center text-white dark:bg-neutral-700 dark:text-neutral-200">
        © 2023 Copyright:{" "}
        <a
          className="text-white dark:text-neutral-400"
          href="https://www.tajweedequran.com"
        >
          Tajweed e Quran Official
        </a>
      </div>
    </footer>
  );
};

export default Footer;
