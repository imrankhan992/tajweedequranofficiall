import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Autoplay, Pagination } from 'swiper/modules';
import { Helmet } from 'react-helmet';

// Import your course data
import learnQuran from './LearnQuran';

const LearnQuran = () => {
  return (
    <>
      

      <section className='md:px-16 px-4 text-center py-12' id="quran-courses">
        <div className='mb-10'>
          <h2 className="md:text-4xl text-2xl font-bold text-[#014B5E] py-2">
            Start Learning Quran Online with Tajweed
          </h2>
          <p className="mb-7 font-bold text-xl text-black">
            Contact now for a free trial lesson for you or your child.
          </p>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 15 },
          }}
          modules={[Pagination, Autoplay]}
          aria-label="Quran Learning Courses"
        >
          {learnQuran.map((item) => (
            <SwiperSlide key={item.id}>
              <article className="p-4 shadow-lg min-h-[430px] rounded-3xl border-2 border-[#032E3C] cursor-pointer hover:bg-[#C28336] transition-all duration-300">
                <img
                  loading="lazy"
                  src={item.image}
                  width={60}
                  height={60}
                  alt={`Icon for ${item.title} course`}
                  className="mx-auto"
                />
                <h3 className="font-semibold text-xl mt-4">{item.title}</h3>
                <p className="text-sm underline text-center text-[#032E3C]">
                  {item.subtitle}
                </p>
                <p className="text-sm text-center mt-3">
                  {item.description}
                </p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-10">
          <a
            href="#contactUs"
            className="inline-block px-8 py-3 bg-[#C28336] text-white font-bold rounded-full hover:bg-[#014B5E] transition-colors"
            aria-label="Get your free trial Quran lesson"
          >
            Get Free Trial Lesson
          </a>
        </div>
      </section>
    </>
  );
};

export default LearnQuran;
