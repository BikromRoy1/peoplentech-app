import Link from 'next/link';
import { IoArrowForwardSharp } from 'react-icons/io5';
import SectionTitle from '../SectionTitle/SectionTitle';
import './SuccessStoryVideo.css';

const SuccessStoryVideo = () => {
  return (
    <section className='pb-[100px]'>
      <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
        <SectionTitle
          title='Success Stories Of Our Students'
          subtitle='Reviews'
        />
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
          <div className='relative successStudents-items'>
            <a href=''>
              <img
                className='w-full h-full object-cover rounded-[10px] cursor-pointer'
                src='https://img.youtube.com/vi/ec8I4GI5ULo/maxresdefault.jpg'
                alt='image'
              />
            </a>
            <div className='flex items-center justify-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10'>
              <a href=''>
                <img
                  className='w-[70px] h-[70px]'
                  src='/image/icons/play_icon_2 1.svg'
                  alt='icons'
                />
              </a>
            </div>
          </div>
          <div className='relative successStudents-items'>
            <a href=''>
              <img
                className='w-full h-full object-cover rounded-[10px] cursor-pointer'
                src='https://img.youtube.com/vi/GFSQYBZ7-yU/maxresdefault.jpg'
                alt='image'
              />
            </a>
            <div className='flex items-center justify-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10'>
              <a href=''>
                <img
                  className='w-[70px] h-[70px]'
                  src='/image/icons/play_icon_2 1.svg'
                  alt='icons'
                />
              </a>
            </div>
          </div>
          <div className='relative successStudents-items'>
            <a href=''>
              <img
                className='w-full h-full object-cover rounded-[10px] cursor-pointer'
                src='https://img.youtube.com/vi/VEjAVNvh-0Y/maxresdefault.jpg'
                alt='image'
              />
            </a>
            <div className='flex items-center justify-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10'>
              <a href=''>
                <img
                  className='w-[70px] h-[70px]'
                  src='/image/icons/play_icon_2 1.svg'
                  alt='icons'
                />
              </a>
            </div>
          </div>
        </div>
        <div className='mt-8 text-center'>
          <Link href='/success-stories' className='primary-btn'>
            Show More
            <IoArrowForwardSharp className='ml-2' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoryVideo;
