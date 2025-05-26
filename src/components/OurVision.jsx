import React from "react";
import { Button } from "./ui/button";

const OurVision = () => {
  // Main keywords for this page
  const mainKeywords = "Online Quran Academy, Learn Quran Online, Tajweed Classes, Islamic Education";
  
  return (
    <>
      <div
        className="flex items-center justify-center flex-col gap-6"
        id="aboutUs"
      >
        <figure>
          <img 
            src={"/TQOA.png"} 
            width={170} 
            height={170} 
            alt="Tajweed e Quran Academy logo - Online Quran learning platform" 
            loading="lazy" 
          />
        </figure>
        <div className="md:flex text-center items-start justify-start gap-2">
          <h3 className="text-xl md:text-2xl">
            Welcome to the
          </h3>
          <div className="text-xl md:text-2xl font-semibold items-center justify-center text-center">
            TajweedeQuranOfficial
            <div className="flex items-center justify-center space-x-2">
              <div className="border w-6 border-red-900"/>
              <span className="text-xs flex items-center justify-center text-red-900">
                Online Quran Academy
              </span>
              <div className="border w-6 border-red-900"/>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content section with H1 */}
      <section>
        <h1 className="md:text-6xl text-center text-3xl font-semibold mt-10 mb-10">
        Tajweed e Quran Academy
        </h1>
        
        <div className="flex items-center justify-center">
          <iframe 
            className="md:w-[60vw] w-full h-[40vh] mb-6 md:h-[60vh]" 
            src="https://www.youtube.com/embed/uTiMSoi4wfA?si=5wxIbpC59yrLPGe6" 
            title="Learn Quran Online with Tajweed - Introduction Video" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen
          ></iframe>
        </div>
        
        <div className="grid md:grid-cols-2 px-6 md:px-16 gap-6 items-start justify-center pb-16 md:py-16">
          <div className="text-justify text-lg md:text-xl">
            <h2 className="md:text-5xl text-2xl text-[#023847] mb-3 font-semibold underline">
              About Our Online Quran Academy
            </h2>
            <p>
              Tajweed e Quran Academy is a premier Online Quran School established in 2020. 
              We specialize in providing comprehensive online Quran classes suitable for 
              the whole family, with specially designed programs for kids. Our qualified 
              Quran tutors are dedicated to teaching Quran online with proper Tajweed rules, 
              helping students worldwide connect with the divine words of Allah.
            </p>
            
            <p className="mt-4">
              We offer structured Quran courses covering basic Islamic education, 
              Tajweed rules, and Quran memorization. Utilizing both traditional 
              and modern teaching methodologies, our online Quran classes make 
              learning accessible, effective, and engaging for students of all ages.
            </p>
            
            {/* Internal link example */}
            <div className="mt-6">
              <Button 
                as="a" 
                href="#courses" 
                className="md:mt-7 mt-3 bg-transparent border-2 border-[#C28336] active:scale-95 duration-150 transition-transform hover:bg-[#C28336] !px-16 !py-6 rounded-full text-lg text-black"
              >
                Explore Our Quran Courses
              </Button>
            </div>
          </div>
          
          <div className="flex items-start justify-center gap-10 flex-col">
            {/* Our Mission */}
            <article className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-start">
              <div className="w-20 md:w-56 h-20">
                <img
                  src={"/Images/icons/ourmission.png"}
                  width={250}
                  height={250}
                  alt="Our Mission - Teaching Quran with proper Tajweed"
                  className="rounded-full border-2 p-2 border-[#032e3c]"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-bold">Our Mission</h2>
                <p className="text-gray-700 text-lg">
                  Our mission at Tajweed e Quran Academy is to provide accessible, 
                  authentic online Quran education with a focus on proper recitation 
                  (Tajweed). We aim to foster a deep understanding and love for the 
                  Quran among Muslims worldwide through our structured online learning 
                  platform.
                </p>
              </div>
            </article>
            
            {/* Our Vision */}
            <article className="flex items-center justify-center md:justify-start gap-4 md:flex-row flex-col text-center md:text-start">
              <div className="w-20 md:w-56 h-20">
                <img
                  src={"/Images/icons/quran.png"}
                  width={200}
                  height={200}
                  alt="Our Vision - Global Quran education"
                  className="rounded-full border-2 p-2 border-[#032e3c]"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-bold">Our Vision</h2>
                <p className="text-gray-700 text-lg">
                  We envision becoming a global leader in online Quran education, 
                  creating a community of Quran learners who not only recite but 
                  also understand and implement Quranic teachings in their daily 
                  lives. Through our online platform, we aim to make Quranic 
                  knowledge accessible to every Muslim household.
                </p>
              </div>
            </article>
            
            {/* External link to authority site */}
            <div className="mt-4 text-center md:text-left">
              <p className="text-sm text-gray-600">
                Learn more about the importance of Tajweed from {' '}
                <a 
                  href="https://tajweedequranofficial.com/blog/what-is-tajweed" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#023847] underline"
                >
                  Islamic Relief's Tajweed Guide
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurVision;