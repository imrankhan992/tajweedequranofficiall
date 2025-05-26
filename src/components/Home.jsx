import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Helmet } from "react-helmet";

import Layout from "./Layout/Layout";
import WhatsAppButton from "./WhatsAppButton";
import ChatIcon from "./ChatIcon";
import OurVision from "./OurVision";
import LearnQuran from "./LearnQuran.jsx";
import ServiceOffer from "./ServiceOffer";
import StudentsReviews from "./StudentsReviews";
import HowToEnroll from "./HowToEnroll";
import ReasonPeopleChoseUs from "./ReasonPeopleChoseUs";
import ContactUs from "./ContactUs";

const Home = () => {
 <Helmet>
        <title>Tajweed e Quran Official - Online Quran Courses</title>
        <meta
          name="description"
          content="Learn Quran online with expert male & female teachers. Courses in Noorani Qaida, Tajweed, Memorization, Tafseer & Arabic."
        />
        <meta
          name="keywords"
          content="Quran online, Tajweed, Noorani Qaida, Quran classes, Islamic Studies"
        />
        <link rel="canonical" href="https://tajweedequranofficial.com/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tajweedequranofficial.com/" />
        <meta property="og:title" content="Tajweed e Quran Official - Online Quran Courses" />
        <meta
          property="og:description"
          content="Join certified Quran courses for kids & adults. Learn with male/female teachers."
        />
        <meta
          property="og:image"
          content="https://tajweedequranofficial.com/Images/Blogs/TajweedeQuran.avif"
        />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tajweed e Quran Official - Online Quran Courses" />
        <meta
          name="twitter:description"
          content="Flexible online Quran classes with expert teachers for all ages."
        />
        <meta
          name="twitter:image"
          content="https://tajweedequranofficial.com/Images/Blogs/TajweedeQuran.avif"
        />
      </Helmet>

  return (
    <>
      <Helmet>
        <title>Best Online Quran Academy | Learn Quran with Tajweed</title>
        <meta
          name="description"
          content="Join the best online Quran academy for kids and adults. Learn Quran with proper Tajweed from qualified teachers. Start your free trial today!"
        />
        <meta name="keywords" content={pageKeywords} />
        <link rel="canonical" href="https://yourdomain.com" />
      </Helmet>

      <Layout className="relative w-full" id="home">
        {/* Floating action buttons */}
        <WhatsAppButton />
        <ChatIcon />

        {/* Hero Slider */}
        <section className="w-full h-full relative mb-16" aria-label="Quran Learning Introduction">
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Pagination, Autoplay]}
          >
            <SwiperSlide>
              <img 
                loading="lazy" 
                src={"https://res.cloudinary.com/dbcopekhr/image/upload/v1742402904/heropage1_wkmfqm.png"} 
                alt="Child learning Quran online with teacher" 
                className="w-full h-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img 
                loading="lazy" 
                src={"https://res.cloudinary.com/dbcopekhr/image/upload/v1742402902/heropage2_smrxl0.jpg"} 
                alt="Online Quran classes for all ages" 
                className="w-full h-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img 
                loading="lazy" 
                src={"https://res.cloudinary.com/dbcopekhr/image/upload/v1742402900/heropage_omehvg.png"} 
                alt="Tajweed e Quran Academy - Learn Quran properly" 
                className="w-full h-auto"
              />
            </SwiperSlide>
          </Swiper>
        </section>

        {/* Page Sections */}
        <OurVision />
        <LearnQuran />
        <HowToEnroll />
        <ServiceOffer />
        <ReasonPeopleChoseUs />
        <StudentsReviews />
        <ContactUs />
      </Layout>
    </>
  );
};

export default Home;
