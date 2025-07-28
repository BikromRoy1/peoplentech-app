import PageBanner from '@/components/PageBanner/PageBanner';
import Image from 'next/image';
import { FaTrophy, FaUserGraduate } from 'react-icons/fa';
import { FaFileWord } from 'react-icons/fa6';
import { IoPeopleSharp, IoPlay } from 'react-icons/io5';
import { MdEmail, MdPhoneInTalk } from 'react-icons/md';
import './FacultyDetails.css';

const FacultyDetails = () => {
  return (
    <div>
      <PageBanner title='Hossain Shariar Akash' subtitle='Our Mentors' />
      <div className='pb-[60px] pt-[60px]'>
        <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-7 md:gap-10'>
            <div className='md:col-span-4'>
              <div className="bg-[url('/image/Teachers/candidate-bg.jpg')] bg-cover rounded-[15px] bg-center flex justify-center items-center px-8 py-12">
                <div>
                  <div className='border-[7px] border-[#f3f4f6] w-[200px] h-[200px] mx-auto rounded-[15px] overflow-hidden bg-white'>
                    <Image
                      width={200}
                      height={200}
                      className='rounded-[10px] object-cover object-center'
                      src='/image/Teachers/07.jpg'
                      alt='candidate'
                    />
                  </div>
                  <div className='text-center mt-4 relative'>
                    <h4 className='text-[20px] text-white capitalize leading-7 font-semibold mb-[3px]'>
                      Hossain Shariar Akash
                    </h4>
                    <p className='text-[15px] leading-6 text-white font-medium opacity-90'>
                      Sr. Faculty (Asp.Net MVC)
                    </p>
                  </div>
                </div>
              </div>
              <div className='mt-10'>
                <h2 className='mb-5 text-2xl font-bold capitalize leading-[30px] text-[#17171d]'>
                  About Me
                </h2>
                <p className='text-gray-500 text-[15px] mb-4 font-medium'>
                  With 20 years of extensive experience in the technology and
                  business sectors, a professional journey that began in 1999 as
                  a programmer has evolved into a distinguished career spanning
                  various domains, including ERP, SaaS, e-commerce, FinTech,
                  VAS, EdTech, eGovernance, cloud computing, and web security.
                </p>
                <p className='text-gray-500 text-[15px] mb-4 font-medium'>
                  Contributions have focused on mid-scale business solutions and
                  large-scale enterprise software development, with additional
                  experience in Artificial Intelligence projects, particularly
                  in Natural Language Processing and Image Processing. Senior
                  leadership roles across industries have included positions
                  such as Chief Technology Officer, Chief Digital Business
                  Officer, Chief Analyst Officer, and Technology Lead. In the
                  academic realm, responsibilities have encompassed serving as
                  an Adjunct Assistant Professor in Computing and Information
                  Systems and as Head of Faculty at a notable IT training
                  institute.
                </p>
              </div>
              <div className='mt-10'>
                <h2 className='mb-5 text-2xl font-bold capitalize leading-[30px] text-[#17171d]'>
                  Specialized Area
                </h2>
                <div className='border border-[#ddd] rounded-[10px] p-8'>
                  <div className='grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2'>
                    <div>
                      <div className='flex items-center gap-3'>
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          style={{ color: '#04a9ff' }}
                        >
                          <rect
                            width='24'
                            height='24'
                            rx='12'
                            fill='currentColor'
                          ></rect>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M9.81818 18L4 12.2993L6.05091 10.2898L9.81818 13.9667L17.9491 6L20 8.02375L9.81818 18Z'
                            fill='white'
                          ></path>
                        </svg>
                        <p className='text-[#2e2f32] text-[16px] font-medium'>
                          Corporate & Brand Design
                        </p>
                      </div>
                      <div className='flex items-center gap-3 mt-2.5'>
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          style={{ color: '#04a9ff' }}
                        >
                          <rect
                            width='24'
                            height='24'
                            rx='12'
                            fill='currentColor'
                          ></rect>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M9.81818 18L4 12.2993L6.05091 10.2898L9.81818 13.9667L17.9491 6L20 8.02375L9.81818 18Z'
                            fill='white'
                          ></path>
                        </svg>
                        <p className='text-[#2e2f32] text-[16px] font-medium'>
                          Marketing Material Design
                        </p>
                      </div>
                      <div className='flex items-center gap-3 mt-2.5'>
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          style={{ color: '#04a9ff' }}
                        >
                          <rect
                            width='24'
                            height='24'
                            rx='12'
                            fill='currentColor'
                          ></rect>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M9.81818 18L4 12.2993L6.05091 10.2898L9.81818 13.9667L17.9491 6L20 8.02375L9.81818 18Z'
                            fill='white'
                          ></path>
                        </svg>
                        <p className='text-[#2e2f32] text-[16px] font-medium'>
                          Packaging Design
                        </p>
                      </div>
                      <div className='flex items-center gap-3 mt-2.5'>
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          style={{ color: '#04a9ff' }}
                        >
                          <rect
                            width='24'
                            height='24'
                            rx='12'
                            fill='currentColor'
                          ></rect>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M9.81818 18L4 12.2993L6.05091 10.2898L9.81818 13.9667L17.9491 6L20 8.02375L9.81818 18Z'
                            fill='white'
                          ></path>
                        </svg>
                        <p className='text-[#2e2f32] text-[16px] font-medium'>
                          Visual Design
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className='flex items-center gap-3'>
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          style={{ color: '#04a9ff' }}
                        >
                          <rect
                            width='24'
                            height='24'
                            rx='12'
                            fill='currentColor'
                          ></rect>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M9.81818 18L4 12.2993L6.05091 10.2898L9.81818 13.9667L17.9491 6L20 8.02375L9.81818 18Z'
                            fill='white'
                          ></path>
                        </svg>
                        <p className='text-[#2e2f32] text-[16px] font-medium'>
                          Story Boarding
                        </p>
                      </div>
                      <div className='flex items-center gap-3 mt-2.5'>
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          style={{ color: '#04a9ff' }}
                        >
                          <rect
                            width='24'
                            height='24'
                            rx='12'
                            fill='currentColor'
                          ></rect>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M9.81818 18L4 12.2993L6.05091 10.2898L9.81818 13.9667L17.9491 6L20 8.02375L9.81818 18Z'
                            fill='white'
                          ></path>
                        </svg>
                        <p className='text-[#2e2f32] text-[16px] font-medium'>
                          Packaging & Label Design
                        </p>
                      </div>
                      <div className='flex items-center gap-3 mt-2.5'>
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          style={{ color: '#04a9ff' }}
                        >
                          <rect
                            width='24'
                            height='24'
                            rx='12'
                            fill='currentColor'
                          ></rect>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M9.81818 18L4 12.2993L6.05091 10.2898L9.81818 13.9667L17.9491 6L20 8.02375L9.81818 18Z'
                            fill='white'
                          ></path>
                        </svg>
                        <p className='text-[#2e2f32] text-[16px] font-medium'>
                          Brand Identity Design
                        </p>
                      </div>
                      <div className='flex items-center gap-3 mt-2.5'>
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          style={{ color: '#04a9ff' }}
                        >
                          <rect
                            width='24'
                            height='24'
                            rx='12'
                            fill='currentColor'
                          ></rect>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M9.81818 18L4 12.2993L6.05091 10.2898L9.81818 13.9667L17.9491 6L20 8.02375L9.81818 18Z'
                            fill='white'
                          ></path>
                        </svg>
                        <p className='text-[#2e2f32] text-[16px] font-medium'>
                          Marketing & Advertising
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-10'>
                <h2 className='mb-5 text-2xl font-bold capitalize leading-[30px] text-[#17171d]'>
                  Certifications
                </h2>
                <div className='border border-[#ddd] rounded-[10px] p-8'>
                  <div className='flex items-center justify-start gap-4'>
                    <div className='flex items-center justify-center bg-[#cbfbf1] w-12 h-12 rounded-lg'>
                      <FaFileWord size={24} className='text-[#009689]' />
                    </div>
                    <div>
                      <h5 className='text-[17px] font-semibold mb-0'>
                        Oracle Cloud Infrastructure 2021 Certified Associate
                      </h5>
                      <p className='text-gray-700 text-[14px]'>
                        International Organization for Project Management™
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center justify-start gap-4 mt-4'>
                    <div className='flex items-center justify-center bg-[#cbfbf1] w-12 h-12 rounded-lg'>
                      <FaFileWord size={24} className='text-[#009689]' />
                    </div>
                    <div>
                      <h5 className='text-[17px] font-semibold mb-0'>
                        Accredited Project Manager™ (APRM)
                      </h5>
                      <p className='text-gray-700 text-[14px]'>
                        International Organization for Project Management™
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-10'>
                <h2 className='mb-5 text-2xl font-bold capitalize leading-[30px] text-[#17171d]'>
                  Education Qualification
                </h2>
                <div className='border border-[#ddd] rounded-[10px] p-8'>
                  <div className='flex items-center justify-start gap-4'>
                    <div className='flex items-center justify-center bg-[#ffe2e2] w-12 h-12 rounded-lg'>
                      <FaUserGraduate size={24} className='text-[#e7000b]' />
                    </div>
                    <div>
                      <h5 className='text-[17px] font-semibold mb-0'>
                        PHD in IT (Artificial Intelligence)
                      </h5>
                      <p className='text-gray-700 text-[14px]'>
                        Passed with 89% Marks
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center justify-start gap-4 mt-4'>
                    <div className='flex items-center justify-center bg-[#ffe2e2] w-12 h-12 rounded-lg'>
                      <FaUserGraduate size={24} className='text-[#e7000b]' />
                    </div>
                    <div>
                      <h5 className='text-[17px] font-semibold mb-0'>
                        MSC in CS (Software Engineering)
                      </h5>
                      <p className='text-gray-700 text-[14px]'>
                        Passed with 85% Marks
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center justify-start gap-4 mt-4'>
                    <div className='flex items-center justify-center bg-[#ffe2e2] w-12 h-12 rounded-lg'>
                      <FaUserGraduate size={24} className='text-[#e7000b]' />
                    </div>
                    <div>
                      <h5 className='text-[17px] font-semibold mb-0'>
                        BSC in CIS
                      </h5>
                      <p className='text-gray-700 text-[14px]'>
                        Passed with 81% Marks
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='md:col-span-3'>
              <div>
                <div className='bg-white card-shadow  rounded-xl p-7'>
                  <h2 className='mb-6 text-xl font-bold capitalize leading-[30px] text-[#17171d]'>
                    General Information
                  </h2>
                  <div className='flex items-center justify-start gap-4'>
                    <div className='flex items-center justify-center bg-[#FFF2E7] w-12 h-12 rounded-lg'>
                      <FaTrophy size={24} className='text-[#FD7E14]' />
                    </div>
                    <div>
                      <h5 className='text-[20px] font-bold mb-0'>10+</h5>
                      <p className='text-gray-700 text-[15px]'>
                        Training Experience
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center justify-start gap-4 mt-4'>
                    <div className='flex items-center justify-center bg-[#E9E8F8] w-12 h-12 rounded-lg'>
                      <IoPeopleSharp size={24} className='text-[#6F42C1]' />
                    </div>
                    <div>
                      <h5 className='text-[20px] font-bold mb-0'>4000+</h5>
                      <p className='text-gray-700 text-[15px]'>
                        Total Students
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center justify-start gap-4 mt-4'>
                    <div className='flex items-center justify-center bg-[#E8F3EE] w-12 h-12 rounded-lg'>
                      <IoPlay size={24} className='text-[#198754]' />
                    </div>
                    <div>
                      <h5 className='text-[20px] font-bold mb-0'>10+</h5>
                      <p className='text-gray-700 text-[15px]'>Total Courses</p>
                    </div>
                  </div>
                  <div className='flex items-center justify-start gap-4 mt-4'>
                    <div className='flex items-center justify-center bg-[#dff2fe] w-12 h-12 rounded-lg'>
                      <MdEmail size={24} className='text-[#0084d1]' />
                    </div>
                    <div>
                      <h5 className='text-[20px] font-bold mb-0'>Email</h5>
                      <p className='text-gray-700 text-[15px]'>
                        emahbub@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center justify-start gap-4 mt-4'>
                    <div className='flex items-center justify-center bg-[#fae8ff] w-12 h-12 rounded-lg'>
                      <MdPhoneInTalk size={24} className='text-[#a800b7]' />
                    </div>
                    <div>
                      <h5 className='text-[20px] font-bold mb-0'>Phone</h5>
                      <p className='text-gray-700 text-[15px]'>01799446655</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-9'>
                <div className='bg-white card-shadow  rounded-xl p-6'>
                  <h2 className='mb-4 text-xl font-bold capitalize leading-[30px] text-[#17171d]'>
                    Skills
                  </h2>
                  <div className='flex flex-wrap items-center gap-3'>
                    <a
                      href='#'
                      className='py-[5px] hover:bg-primary  hover:text-white px-[15px] capitalize font-semibold  inline-block text-primary rounded-[8px] text-[14px] bg-[#f0f6fe] transition-all duration-300 ease-in-out'
                    >
                      HTML
                    </a>
                    <a
                      href='#'
                      className='py-[5px] hover:bg-primary  hover:text-white px-[15px] capitalize font-semibold  inline-block text-primary rounded-[8px] text-[14px] bg-[#f0f6fe] transition-all duration-300 ease-in-out'
                    >
                      CSS
                    </a>
                    <a
                      href='#'
                      className='py-[5px] hover:bg-primary  hover:text-white px-[15px] capitalize font-semibold  inline-block text-primary rounded-[8px] text-[14px] bg-[#f0f6fe] transition-all duration-300 ease-in-out'
                    >
                      MySQL
                    </a>
                    <a
                      href='#'
                      className='py-[5px] hover:bg-primary  hover:text-white px-[15px] capitalize font-semibold  inline-block text-primary rounded-[8px] text-[14px] bg-[#f0f6fe] transition-all duration-300 ease-in-out'
                    >
                      SQL Server
                    </a>
                    <a
                      href='#'
                      className='py-[5px] hover:bg-primary  hover:text-white px-[15px] capitalize font-semibold  inline-block text-primary rounded-[8px] text-[14px] bg-[#f0f6fe] transition-all duration-300 ease-in-out'
                    >
                      ORACLE
                    </a>
                    <a
                      href='#'
                      className='py-[5px] hover:bg-primary  hover:text-white px-[15px] capitalize font-semibold  inline-block text-primary rounded-[8px] text-[14px] bg-[#f0f6fe] transition-all duration-300 ease-in-out'
                    >
                      Java
                    </a>
                    <a
                      href='#'
                      className='py-[5px] hover:bg-primary  hover:text-white px-[15px] capitalize font-semibold  inline-block text-primary rounded-[8px] text-[14px] bg-[#f0f6fe] transition-all duration-300 ease-in-out'
                    >
                      C#
                    </a>
                    <a
                      href='#'
                      className='py-[5px] hover:bg-primary  hover:text-white px-[15px] capitalize font-semibold  inline-block text-primary rounded-[8px] text-[14px] bg-[#f0f6fe] transition-all duration-300 ease-in-out'
                    >
                      .NET
                    </a>
                  </div>
                </div>
              </div>
              <div className='mt-9'>
                <div className='bg-white card-shadow  rounded-xl p-6'>
                  <h2 className='mb-4 text-xl font-bold capitalize leading-[30px] text-[#17171d]'>
                    Work Place
                  </h2>
                  <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
                    <div className='border border-[#d9ddef] rounded-lg px-5 py-3 text-center transition-shadow duration-300 hover:shadow-[0_10px_14px_rgba(0,0,0,0.05)]'>
                      <div className='w-[120px] h-[120px] mx-auto flex items-center justify-center'>
                        <Image
                          width={100}
                          height={100}
                          className='object-cover'
                          src='/image/icons/Work-1.png'
                          alt='icons'
                        />
                      </div>
                    </div>
                    <div className='border border-[#d9ddef] rounded-lg px-5 py-3 text-center transition-shadow duration-300 hover:shadow-[0_10px_14px_rgba(0,0,0,0.05)]'>
                      <div className='w-[120px] h-[120px] mx-auto flex items-center justify-center'>
                        <Image
                          width={100}
                          height={100}
                          className='object-cover'
                          src='/image/icons/Work-2.png'
                          alt='icons'
                        />
                      </div>
                    </div>
                    <div className='border border-[#d9ddef] rounded-lg px-5 py-3 text-center transition-shadow duration-300 hover:shadow-[0_10px_14px_rgba(0,0,0,0.05)]'>
                      <div className='w-[120px] h-[120px] mx-auto flex items-center justify-center'>
                        <Image
                          width={100}
                          height={100}
                          className='object-cover'
                          src='/image/icons/Work-3.png'
                          alt='icons'
                        />
                      </div>
                    </div>
                    <div className='border border-[#d9ddef] rounded-lg px-5 py-3 text-center transition-shadow duration-300 hover:shadow-[0_10px_14px_rgba(0,0,0,0.05)]'>
                      <div className='w-[120px] h-[120px] mx-auto flex items-center justify-center'>
                        <Image
                          width={100}
                          height={100}
                          className='object-cover'
                          src='/image/icons/Work-4.png'
                          alt='icons'
                        />
                      </div>
                    </div>
                    <div className='border border-[#d9ddef] rounded-lg px-5 py-3 text-center transition-shadow duration-300 hover:shadow-[0_10px_14px_rgba(0,0,0,0.05)]'>
                      <div className='w-[120px] h-[120px] mx-auto flex items-center justify-center'>
                        <Image
                          width={100}
                          height={100}
                          className='object-cover'
                          src='/image/icons/Work-5.png'
                          alt='icons'
                        />
                      </div>
                    </div>
                    <div className='border border-[#d9ddef] rounded-lg px-5 py-3 text-center transition-shadow duration-300 hover:shadow-[0_10px_14px_rgba(0,0,0,0.05)]'>
                      <div className='w-[120px] h-[120px] mx-auto flex items-center justify-center'>
                        <Image
                          width={100}
                          height={100}
                          className='object-cover'
                          src='/image/icons/Work-6.png'
                          alt='icons'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyDetails;
