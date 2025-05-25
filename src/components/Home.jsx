import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { HashLoader } from "react-spinners"
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
// import required modules

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import OurVision from "./OurVision";
import LearnQuran from "./LearnQuran.jsx";
import ServiceOffer from "./ServiceOffer";
import StudentsReviews from "./StudentsReviews";
import Footer from "./Footer";
import HowToEnroll from "./HowToEnroll";


import WhatsAppButton from "./WhatsAppButton";
import ChatIcon from "./ChatIcon";
import ReasonPeopleChoseUs from "./ReasonPeopleChoseUs";
import ContactUs from "./ContactUs";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Layout from "./Layout/Layout";


const Home = () => {
 

  return (
    <>
     <Layout className="relative w-full" id="home">
            <WhatsAppButton />

            <ChatIcon />

          


            <div className="w-full h-full relative mb-16">
              <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                autoplay={
                  {
                    delay: 5000,
                    disableOnInteraction: false,
                  }
                }
                modules={[Navigation, Pagination, Autoplay]}
              >
                <SwiperSlide>
                  {" "}
                  <img loading="lazy" src={"https://res.cloudinary.com/dbcopekhr/image/upload/v1742402904/heropage1_wkmfqm.png"} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img loading="lazy" src={"https://res.cloudinary.com/dbcopekhr/image/upload/v1742402902/heropage2_smrxl0.jpg"} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img loading="lazy" src={"https://res.cloudinary.com/dbcopekhr/image/upload/v1742402900/heropage_omehvg.png"} alt="" />
                </SwiperSlide>
              </Swiper>

            </div>
            {/* <img loading="lazy" src={"/Images/Carousals/sous-slider.png"}  alt="" /> */}
         
            <OurVision />
            <LearnQuran />
            <HowToEnroll />
            <ServiceOffer />
            <ReasonPeopleChoseUs />
            {/* <FeedbackVideos /> */}
            <StudentsReviews />
            <ContactUs />
          
          </Layout>
    </>
  );
};

export default Home;











