import { FaStar } from 'react-icons/fa';
import { IoArrowForwardSharp } from 'react-icons/io5';
import SectionTitle from '../SectionTitle/SectionTitle';

const Course = () => {
  return (
    <section className='pb-[100px] pt-[100px] bg-[#F2F4F7]'>
      <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
        <SectionTitle
          title='Explore Featured Courses'
          subtitle='Skills Courses'
        />
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'>
          <div className='bg-white rounded-[10px] border border-[#E0E5EB] pt-[20px] transition-transform duration-300 hover:-translate-y-[8px]'>
            <div className='px-[20px]'>
              <div className='w-full h-auto overflow-hidden rounded-[10px]'>
                <img
                  className=' w-full h-full object-cover'
                  src='/image/Course/course-1.jpg'
                  alt='icons'
                />
              </div>
            </div>
            <div className='p-[20px] mb-[20px] border-b border-[#E0E5EB]'>
              <h4 className='text-[19px] leading-7 font-semibold mb-[15px] hover:text-[#2396d2] transition-all duration-300 ease-in-out'>
                <a href='#'>Adobe Premiere Pro Masterclass: Video Editing </a>
              </h4>
              <div className='flex items-center justify-between'>
                <div>
                  <h3>
                    <span className='text-[#2396d2] font-semibold text-[17px]'>
                      ৳ 70,000
                    </span>
                    <del className='ml-3 font-medium text-[15px] text-neutral-600'>
                      ৳ 90,000
                    </del>
                  </h3>
                </div>
                <div className='flex items-center gap-1.5'>
                  <FaStar className='text-[#ffc000]' />
                  <span className='text-[#162726] text-[15px] font-medium'>
                    4.5(50)
                  </span>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-between px-[20px] pb-[20px]'>
              <a
                href=''
                className='text-white bg-[#2396d2] border border-[#2396d2] font-semibold text-[15px] rounded-full py-[5px] px-[20px] hover:border-[#2396d2] transition-all duration-300 ease-in-out'
              >
                Registration
              </a>
              <a
                className='text-[#162726] border border-[#E0E5EB] font-semibold text-[15px] rounded-full py-[5px] px-[20px] hover:border-[#2396d2] transition-all duration-300 ease-in-out'
                href='#'
              >
                View Details{' '}
              </a>
            </div>
          </div>
          <div className='bg-white rounded-[10px] border border-[#E0E5EB] pt-[20px] transition-transform duration-300 hover:-translate-y-[8px]'>
            <div className='px-[20px]'>
              <div className='w-full h-auto overflow-hidden rounded-[10px]'>
                <img
                  className=' w-full h-full object-cover'
                  src='/image/Course/course-2.jpg'
                  alt='icons'
                />
              </div>
            </div>
            <div className='p-[20px] mb-[20px] border-b border-[#E0E5EB]'>
              <h4 className='text-[19px] leading-7 font-semibold mb-[15px] hover:text-[#2396d2] transition-all duration-300 ease-in-out'>
                <a href='#'>Front-End Development with React JS</a>
              </h4>
              <div className='flex items-center justify-between'>
                <div>
                  <h3>
                    <span className='text-[#2396d2] font-semibold text-[17px]'>
                      ৳ 30,000
                    </span>
                    <del className='ml-3 font-medium text-[15px] text-neutral-600'>
                      ৳ 40,000
                    </del>
                  </h3>
                </div>
                <div className='flex items-center gap-1.5'>
                  <FaStar className='text-[#ffc000]' />
                  <span className='text-[#162726] text-[15px] font-medium'>
                    4.9(30)
                  </span>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-between px-[20px] pb-[20px]'>
              <a
                href=''
                className='text-white bg-[#2396d2] border border-[#2396d2] font-semibold text-[15px] rounded-full py-[5px] px-[20px] hover:border-[#2396d2] transition-all duration-300 ease-in-out'
              >
                Registration
              </a>
              <a
                className='text-[#162726] border border-[#E0E5EB] font-semibold text-[15px] rounded-full py-[5px] px-[20px] hover:border-[#2396d2] transition-all duration-300 ease-in-out'
                href='#'
              >
                View Details{' '}
              </a>
            </div>
          </div>
          <div className='bg-white rounded-[10px] border border-[#E0E5EB] pt-[20px] transition-transform duration-300 hover:-translate-y-[8px]'>
            <div className='px-[20px]'>
              <div className='w-full h-auto overflow-hidden rounded-[10px]'>
                <img
                  className=' w-full h-full object-cover'
                  src='/image/Course/course-3.jpg'
                  alt='icons'
                />
              </div>
            </div>
            <div className='p-[20px] mb-[20px] border-b border-[#E0E5EB]'>
              <h4 className='text-[19px] leading-7 font-semibold mb-[15px] hover:text-[#2396d2] transition-all duration-300 ease-in-out'>
                <a href='#'>Diploma in Graphics & Animation</a>
              </h4>
              <div className='flex items-center justify-between'>
                <div>
                  <h3>
                    <span className='text-[#2396d2] font-semibold text-[17px]'>
                      ৳ 50,000
                    </span>
                    <del className='ml-3 font-medium text-[15px] text-neutral-600'>
                      ৳ 60,000
                    </del>
                  </h3>
                </div>
                <div className='flex items-center gap-1.5'>
                  <FaStar className='text-[#ffc000]' />
                  <span className='text-[#162726] text-[15px] font-medium'>
                    4.2(80)
                  </span>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-between px-[20px] pb-[20px]'>
              <a
                href=''
                className='text-white bg-[#2396d2] border border-[#2396d2] font-semibold text-[15px] rounded-full py-[5px] px-[20px] hover:border-[#2396d2] transition-all duration-300 ease-in-out'
              >
                Registration
              </a>
              <a
                className='text-[#162726] border border-[#E0E5EB] font-semibold text-[15px] rounded-full py-[5px] px-[20px] hover:border-[#2396d2] transition-all duration-300 ease-in-out'
                href='#'
              >
                View Details{' '}
              </a>
            </div>
          </div>
          <div className='bg-white rounded-[10px] border border-[#E0E5EB] pt-[20px] transition-transform duration-300 hover:-translate-y-[8px]'>
            <div className='px-[20px]'>
              <div className='w-full h-auto overflow-hidden rounded-[10px]'>
                <img
                  className=' w-full h-full object-cover'
                  src='/image/Course/course-4.jpg'
                  alt='icons'
                />
              </div>
            </div>
            <div className='p-[20px] mb-[20px] border-b border-[#E0E5EB]'>
              <h4 className='text-[19px] leading-7 font-semibold mb-[15px] hover:text-[#2396d2] transition-all duration-300 ease-in-out'>
                <a href='#'>IT Infrastructure & Cybersecurity Diploma</a>
              </h4>
              <div className='flex items-center justify-between'>
                <div>
                  <h3>
                    <span className='text-[#2396d2] font-semibold text-[17px]'>
                      ৳ 25,000
                    </span>
                    <del className='ml-3 font-medium text-[15px] text-neutral-600'>
                      ৳ 35,000
                    </del>
                  </h3>
                </div>
                <div className='flex items-center gap-1.5'>
                  <FaStar className='text-[#ffc000]' />
                  <span className='text-[#162726] text-[15px] font-medium'>
                    5.0(26)
                  </span>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-between px-[20px] pb-[20px]'>
              <a
                href=''
                className='text-white bg-[#2396d2] border border-[#2396d2] font-semibold text-[15px] rounded-full py-[5px] px-[20px] hover:border-[#2396d2] transition-all duration-300 ease-in-out'
              >
                Registration
              </a>
              <a
                className='text-[#162726] border border-[#E0E5EB] font-semibold text-[15px] rounded-full py-[5px] px-[20px] hover:border-[#2396d2] transition-all duration-300 ease-in-out'
                href='#'
              >
                View Details{' '}
              </a>
            </div>
          </div>
        </div>
        <div className='mt-8 text-center'>
          <a href='#' className='primary-btn'>
            View all course
            <IoArrowForwardSharp className='ml-2' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Course;
