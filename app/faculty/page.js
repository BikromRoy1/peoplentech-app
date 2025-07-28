import PageBanner from '@/components/PageBanner/PageBanner';
import Link from 'next/link';
import { IoArrowForwardSharp } from 'react-icons/io5';

const Faculty = () => {
  return (
    <div>
      <PageBanner
        title='Start the course with the best mentor'
        subtitle='Our Mentors'
      />
      <div className='pt-[80px] pb-[80px]'>
        <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
          <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'>
            <div className='bg-linear-to-l from-[#e4f8fe] to-[#ffeef3] rounded-[10px] border border-[#E0E5EB] pt-[20px] transition-transform duration-300 hover:-translate-y-[8px]'>
              <div className='px-[20px]'>
                <div className='w-full h-auto overflow-hidden rounded-[10px]'>
                  <img
                    className=' w-full h-full object-cover'
                    src='/image/Teachers/07.jpg'
                    alt='icons'
                  />
                </div>
              </div>
              <div className='p-[20px] text-center'>
                <h4 className='text-[19px] capitalize leading-7 font-semibold mb-[3px] hover:text-primary transition-all duration-300 ease-in-out'>
                  <Link href='/faculty/1'>Fatama Mostafa</Link>
                </h4>
                <p className='text-[15px] leading-6 text-[#162726] font-medium'>
                  Sr. Faculty (Asp.Net MVC)
                </p>
              </div>
              <div className='flex items-center justify-center px-[20px] pb-[20px]'>
                <Link
                  className='text-white flex items-center justify-center w-full border bg-primary border-primary font-semibold text-[15px] rounded-lg py-[7px] px-[20px] hover:border-[#0B0A28] hover:bg-[#0B0A28] transition-all duration-300 ease-in-out'
                  href='/faculty/1'
                >
                  View Details <IoArrowForwardSharp className='ml-2' />
                </Link>
              </div>
            </div>
            <div className='bg-linear-to-l from-[#e4f8fe] to-[#ffeef3] rounded-[10px] border border-[#E0E5EB] pt-[20px] transition-transform duration-300 hover:-translate-y-[8px]'>
              <div className='px-[20px]'>
                <div className='w-full h-auto overflow-hidden rounded-[10px]'>
                  <img
                    className=' w-full h-full object-cover'
                    src='/image/Teachers/01.jpg'
                    alt='icons'
                  />
                </div>
              </div>
              <div className='p-[20px] text-center'>
                <h4 className='text-[19px] capitalize leading-7 font-semibold mb-[3px] hover:text-primary transition-all duration-300 ease-in-out'>
                  <a href='#'>Syed Tanvir Ahmad</a>
                </h4>
                <p className='text-[15px] leading-6 text-[#162726] font-medium'>
                  Senior Faculty, Mobile Application
                </p>
              </div>
              <div className='flex items-center justify-center px-[20px] pb-[20px]'>
                <a
                  className='text-white flex items-center justify-center w-full border bg-primary border-primary font-semibold text-[15px] rounded-lg py-[7px] px-[20px] hover:border-[#0B0A28] hover:bg-[#0B0A28] transition-all duration-300 ease-in-out'
                  href='#'
                >
                  View Details <IoArrowForwardSharp className='ml-2' />
                </a>
              </div>
            </div>
            <div className='bg-linear-to-l from-[#e4f8fe] to-[#ffeef3] rounded-[10px] border border-[#E0E5EB] pt-[20px] transition-transform duration-300 hover:-translate-y-[8px]'>
              <div className='px-[20px]'>
                <div className='w-full h-auto overflow-hidden rounded-[10px]'>
                  <img
                    className=' w-full h-full object-cover'
                    src='/image/Teachers/02.jpg'
                    alt='icons'
                  />
                </div>
              </div>
              <div className='p-[20px] text-center'>
                <h4 className='text-[19px] capitalize leading-7 font-semibold mb-[3px] hover:text-primary transition-all duration-300 ease-in-out'>
                  <a href='#'>Hossain Shariar Akash</a>
                </h4>
                <p className='text-[15px] leading-6 text-[#162726] font-medium'>
                  Faculty, MERN Stack Development
                </p>
              </div>
              <div className='flex items-center justify-center px-[20px] pb-[20px]'>
                <a
                  className='text-white flex items-center justify-center w-full border bg-primary border-primary font-semibold text-[15px] rounded-lg py-[7px] px-[20px] hover:border-[#0B0A28] hover:bg-[#0B0A28] transition-all duration-300 ease-in-out'
                  href='#'
                >
                  View Details <IoArrowForwardSharp className='ml-2' />
                </a>
              </div>
            </div>
            <div className='bg-linear-to-l from-[#e4f8fe] to-[#ffeef3] rounded-[10px] border border-[#E0E5EB] pt-[20px] transition-transform duration-300 hover:-translate-y-[8px]'>
              <div className='px-[20px]'>
                <div className='w-full h-auto overflow-hidden rounded-[10px]'>
                  <img
                    className=' w-full h-full object-cover'
                    src='/image/Teachers/03.jpg'
                    alt='icons'
                  />
                </div>
              </div>
              <div className='p-[20px] text-center'>
                <h4 className='text-[19px] capitalize leading-7 font-semibold mb-[3px] hover:text-primary transition-all duration-300 ease-in-out'>
                  <a href='#'>Nirjhor Anjum</a>
                </h4>
                <p className='text-[15px] leading-6 text-[#162726] font-medium'>
                  Faculty Head & Chief Consultant
                </p>
              </div>
              <div className='flex items-center justify-center px-[20px] pb-[20px]'>
                <a
                  className='text-white flex items-center justify-center w-full border bg-primary border-primary font-semibold text-[15px] rounded-lg py-[7px] px-[20px] hover:border-[#0B0A28] hover:bg-[#0B0A28] transition-all duration-300 ease-in-out'
                  href='#'
                >
                  View Details <IoArrowForwardSharp className='ml-2' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
