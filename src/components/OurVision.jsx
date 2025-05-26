import React from "react";

const OurVision = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col gap-6" id="aboutUs">
        <figure>
          <img
            src={"/TQOA.png"}
            width={170}
            height={170}
            alt="Tajweed e Quran Academy Logo"
            loading="lazy"
          />
        </figure>
        <div className="md:flex text-center items-start justify-start gap-2">
          <h3 className="text-xl md:text-2xl">Welcome to the</h3>
          <div className="text-xl md:text-2xl font-semibold text-center">
            TajweedeQuranOfficial
            <div className="flex items-center justify-center space-x-2">
              <div className="border w-6 border-red-900" />
              <span className="text-xs text-red-900">Online Quran Academy</span>
              <div className="border w-6 border-red-900" />
            </div>
          </div>
        </div>
      </div>

      <h1 className="md:text-6xl text-3xl font-semibold mt-10 mb-10 text-center">
        In The Name Of Allah <br />
        The Beneficent The Merciful
      </h1>

      <div className="flex items-center justify-center">
        <iframe
          className="md:w-[60vw] w-full h-[40vh] md:h-[60vh] mb-6"
          src="https://www.youtube.com/embed/uTiMSoi4wfA?si=5wxIbpC59yrLPGe6"
          title="Learn Quran with Tajweed - Online Quran Academy"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="grid md:grid-cols-2 px-6 md:px-16 gap-6 pb-16 md:py-16">
        <div className="text-justify text-lg md:text-xl">
          <h2 className="md:text-5xl text-2xl text-[#023847] mb-3 font-semibold underline">
            About Us
          </h2>
          <span>
            Tajweed e Quran Academy is an Online Quran School established in 2020. We provide online Quran classes suitable for the entire family, especially kids. Our Quran tutors teach students worldwide who wish to learn Islam and Quran online. 
            We have developed structured Quran courses for all levels of Islamic education. Our online Quran tutors use a combination of ancient and modern techniques to deliver engaging Quran classes. 
           
          </span>
        </div>

        <div className="flex flex-col gap-10">
          {/* Our Mission */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-start">
            <div className="w-20 md:w-56 h-20">
              <img
                src={"/Images/icons/ourmission.png"}
                width={250}
                height={250}
                alt="Tajweed e Quran Academy Mission"
                className="rounded-full border-2 p-2 border-[#032e3c]"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <span className="text-gray-700 text-lg">
                Our mission at Tajweed e Quran Academy is to provide accessible and high-quality online Quran education for individuals and families, fostering a deep understanding and love for the Quran and Islam.
              </span>
            </div>
          </div>

          {/* Our Vision */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-start">
            <div className="w-20 md:w-56 h-20">
              <img
                src={"/Images/icons/quran.png"}
                width={200}
                height={200}
                alt="Online Quran Learning Vision"
                className="rounded-full border-2 p-2 border-[#032e3c]"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Our Vision</h2>
              <span className="text-gray-700 text-lg">
                Our vision is to be a leading online Quran school, cultivating a global community of learners who embody the teachings of the Quran and contribute positively to society.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurVision;
