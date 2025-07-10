'use client';

import SectionTitle from '../SectionTitle/SectionTitle';
import './CareerPlacement.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination } from 'swiper/modules';

const CareerPlacement = () => {
  return (
    <section className='pb-[90px] pt-[90px]'>
      <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
        <SectionTitle
          title=' Recent  Successful  Career Placements'
          subtitle='Career Placement'
        />

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          speed={400}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 23,
            },
          }}
        >
          <SwiperSlide>
            <div className='Placement'>
              <img
                className='w-full'
                src='/image/student/student-02.jpg'
                alt='image'
              />
              <div className='success-list'>
                <h5>Ayesha Rahman</h5>
                <p>Junior Frontend Developer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='Placement'>
              <img
                className='w-full'
                src='/image/student/student-04.jpg'
                alt='jobs'
              />
              <div className='success-list'>
                <h5> Tanisha Dey</h5>
                <p>Digital Marketer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='Placement'>
              <img
                className='w-full'
                src='/image/student/student-03.jpg'
                alt='jobs'
              />
              <div className='success-list'>
                <h5>Nusrat Jahan</h5>
                <p>Junior Web Developer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='Placement'>
              <img
                className='w-full'
                src='/image/student/student-01.jpg'
                alt='jobs'
              />
              <div className='success-list'>
                <h5>Sadia Afrin</h5>
                <p>Freelancer and UI/XI Designer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='Placement'>
              <img
                className='w-full'
                src='/image/student/student-05.jpg'
                alt='jobs'
              />
              <div className='success-list'>
                <h5>Tanvir Ahmed</h5>
                <p>Graphic designer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='Placement'>
              <img
                className='w-full'
                src='/image/student/student-06.jpg'
                alt='jobs'
              />
              <div className='success-list'>
                <h5>Mohana Haque</h5>
                <p>Digital Marketing Trainee</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default CareerPlacement;
