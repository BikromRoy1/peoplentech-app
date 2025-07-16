'use client';

import Link from 'next/link';
import { FaRegClone, FaRegFileLines } from 'react-icons/fa6';
import { LiaCertificateSolid, LiaToolsSolid } from 'react-icons/lia';
import { LuBookAudio } from 'react-icons/lu';
import {
  MdOutlineOndemandVideo,
  MdOutlineSlowMotionVideo,
} from 'react-icons/md';
import { RiTimerFlashLine, RiTimerLine } from 'react-icons/ri';
import { VscWorkspaceTrusted } from 'react-icons/vsc';
import './CourseDetails.css';

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
                  src='/image/course-details.jpg'
                  alt='image'
                />
                <div className='p-4'>
                  <h3 className='mt-1 mb-3'>
                    <span className='text-secondary font-bold text-[23px]'>
                      ৳ 30,000
                    </span>
                    <del className='ml-3 font-semibold text-[17px] text-neutral-600'>
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

      {/* More details */}
      <div className='pb-[60px] pt-[60px]'>
        <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-7 md:items-center md:gap-9'>
            <div className='md:col-span-5'></div>
            <div className='md:col-span-2'>
              <div className='relative p-[2px] rounded-xl bg-gradient-to-r from-[#04a9ff] to-[#f1581e]'>
                <div className='bg-white rounded-xl p-6'>
                  <h2 className='mb-4 text-xl font-semibold'>
                    Course Features
                  </h2>
                  <div>
                    <div className='flex items-center mb-3 leading-5'>
                      <MdOutlineSlowMotionVideo className='text-[#334155] h-[18px] w-[18px] ' />
                      <h4 className='mb-0 inline-block pl-3 text-[#334155] text-[15px] font-medium'>
                        Online and Offline Support
                      </h4>
                    </div>
                  </div>
                  <div>
                    <div className='flex items-center mb-3 leading-5'>
                      <LiaToolsSolid className='text-[#334155] h-[18px] w-[18px] ' />
                      <h4 className='mb-0 inline-block pl-3 text-[#334155] text-[15px] font-medium'>
                        Tools, Templates and Book Suggestions
                      </h4>
                    </div>
                  </div>
                  <div>
                    <div className='flex items-center mb-3 leading-5'>
                      <LiaCertificateSolid className='text-[#334155] h-[18px] w-[18px] ' />

                      <h4 className='mb-0 inline-block pl-3 text-[#334155] text-[15px] font-medium'>
                        Assessment and Certificate
                      </h4>
                    </div>
                  </div>
                  <div>
                    <div className='flex items-center mb-3 leading-5'>
                      <LuBookAudio className='text-[#334155] h-[18px] w-[18px] ' />
                      <h4 className='mb-0 inline-block pl-3 text-[#334155] text-[15px] font-medium'>
                        40+ Classes
                      </h4>
                    </div>
                  </div>
                  <div>
                    <div className='flex items-center mb-3 leading-5'>
                      <MdOutlineOndemandVideo className='text-[#334155] h-[18px] w-[18px] ' />
                      <h4 className='mb-0 inline-block pl-3 text-[#334155] text-[15px] font-medium'>
                        40+ Recorded Videos
                      </h4>
                    </div>
                  </div>
                  <div>
                    <div className='flex items-center mb-3 leading-5'>
                      <VscWorkspaceTrusted className='text-[#334155] h-[18px] w-[18px] ' />

                      <h4 className='mb-0 inline-block pl-3 text-[#334155] text-[15px] font-medium'>
                        Job Placement Support
                      </h4>
                    </div>
                  </div>
                  <div>
                    <div className='flex items-center mb-1 leading-5'>
                      <RiTimerFlashLine className='text-[#334155] h-[18px] w-[18px] ' />
                      <h4 className='mb-0 inline-block pl-3 text-[#334155] text-[15px] font-medium'>
                        Total 120 Hours
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-6'>
                <div className='benefits-bg rounded-xl p-6 overflow-hidden'>
                  <div>
                    <img
                      className='w-full h-60 object-contain'
                      src='/image/icons/bn-2.svg'
                      alt='image'
                    />
                  </div>
                  <div className='mt-1'>
                    <h3 className='font-bold max-w-xs text-white text-xl md:text-2xl mb-4'>
                      Download the Guidelines for FREE!
                    </h3>
                    <button className='button-bg rounded-md cursor-pointer px-8 py-2 whitespace-nowrap md:w-full text-white flex items-center justify-center text-md font-semibold capitalize'>
                      Download Course Module
                    </button>
                  </div>
                </div>
              </div>
              <div className='mt-6'>
                <div className='lg:px-6 p-8 bg-[#2D0B70] lg:pb-0 lg:p-12 relative rounded-xl h-full  bg-cover gap-3'>
                  <div className='max-w-sm relative z-10'>
                    <h3 className='font-bold text-white text-center text-xl md:text-3xl mb-4 font-siliguri'>
                      কোর্সটি সম্পর্কে বিস্তারিত জানতে
                    </h3>
                    <p className='text-base text-white/80 mb-6'>
                      <span className='flex items-center justify-center ml-2 cursor-pointer text-green'>
                        <svg
                          stroke='currentColor'
                          fill='currentColor'
                          strokeWidth='0'
                          viewBox='0 0 512 512'
                          height='1em'
                          width='1em'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z'></path>
                        </svg>
                        <span className='ml-2 font-siliguri font-medium'>
                          ফোন করুন (0179-944-6655)
                        </span>
                      </span>
                    </p>
                  </div>
                  <div>
                    <img
                      src='/image/icons/bn-3.svg'
                      className='hidden lg:block relative z-10'
                      alt='benefit illustration'
                    />
                  </div>
                  <img
                    src='/image/icons/blur-shape.png'
                    alt='blur shape'
                    className='h-full w-full -z-0 absolute top-0 right-0'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
