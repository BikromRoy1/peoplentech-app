'use client';

import Link from 'next/link';
import { FaRegClone, FaRegFileLines } from 'react-icons/fa6';
import { RiTimerLine } from 'react-icons/ri';

const CourseDetails = () => {
  return (
    <section>
      <section className='pb-[90px] pt-[90px] page-banner-bg bg-[#020617] relative'>
        <div
          className='absolute inset-0 z-0'
          style={{
            backgroundImage: `radial-gradient(circle 500px at 50% 300px, rgba(4,169,255,0.35), transparent)`,
          }}
        />
        <div className='mx-auto px-4 sm:px-6 container lg:px-8 relative'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-7 md:items-center md:gap-9'>
            <div className='md:col-span-5'>
              <div>
                <ul className='mx-auto text-gray-500 text-sm lg:text-sm'>
                  <li className='inline-flex items-center'>
                    <Link
                      className='hover:text-primary text-[#ced4df] font-medium'
                      href='/'
                    >
                      Home
                    </Link>
                    <svg
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      className='h-5 w-auto text-gray-300'
                    >
                      <path
                        fillRule='evenodd'
                        d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </li>
                  <li className='inline-flex items-center'>
                    <Link
                      className='hover:text-primary text-[#ced4df] font-medium'
                      href='/'
                    >
                      Course
                    </Link>
                    <svg
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      className='h-5 w-auto text-gray-300'
                    >
                      <path
                        fillRule='evenodd'
                        d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </li>
                  <li className='inline-flex items-center text-gray-400'>
                    <span className='capitalize'>
                      Adobe Premiere Pro Masterclass - Video Editing
                    </span>
                  </li>
                </ul>
                <h4 className='text-2xl lg:text-4xl font-semibold mt-4 capitalize text-white'>
                  Adobe Premiere Pro Masterclass - Video Editing
                </h4>
                <p className='text-gray-300 mt-4 text-[16px] leading-7 font-medium'>
                  Are you passionate about software testing and quality
                  assurance? Our course on software testing & quality assurance
                  can be your best choice. The Software Testing and Quality
                  Assurance training course at PeopleNTech provides participants
                  with comprehensive insights into the principles and practices
                  of software testing. Covering a range of topics from testing
                  methodologies to quality assurance processes, this course
                  equips individuals with the skills needed to ensure the
                  delivery of high-quality software products.
                </p>
                <div className='flex items-center gap-4 mt-6 flex-wrap'>
                  <div className='flex items-center gap-2 rounded-full bg-[#1f2838] px-6 py-2'>
                    <FaRegFileLines className='text-primary' />
                    <span className='text-white font-semibold text-[15px]'>
                      Class - 50
                    </span>
                  </div>
                  <div className='flex items-center gap-2 rounded-full bg-[#1f2838] px-6 py-2'>
                    <RiTimerLine className='text-primary' />
                    <span className='text-white font-semibold text-[15px]'>
                      Duration - 6 Month
                    </span>
                  </div>
                  <div className='flex items-center gap-2 rounded-full bg-[#1f2838] px-6 py-2'>
                    <FaRegClone className='text-primary' />
                    <span className='text-white font-semibold text-[15px]'>
                      Projects - 04+
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='md:col-span-2 text-white'>
              <div className='border-[7px] border-[#f3f4f6] rounded-[15px] overflow-hidden bg-white'>
                <img
                  className='w-full rounded-[10px]'
                  src='/image/course/course-details.jpg'
                  alt='image'
                />
                <div className='p-4'>
                  <h3 className='mt-1 mb-3'>
                    <span class='text-secondary font-bold text-[23px]'>
                      ৳ 30,000
                    </span>
                    <del class='ml-3 font-semibold text-[17px] text-neutral-600'>
                      ৳ 40,000
                    </del>
                  </h3>
                  <button className='bg-primary rounded-md cursor-pointer px-8 py-2 whitespace-nowrap md:w-full text-white flex items-center justify-center text-md font-semibold capitalize'>
                    Register for Discount
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CourseDetails;
