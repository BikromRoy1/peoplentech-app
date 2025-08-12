import PageBanner from '@/components/PageBanner/PageBanner';
import Link from 'next/link';
import { BsFillAlarmFill } from 'react-icons/bs';
import { FaPersonWalkingArrowLoopLeft } from 'react-icons/fa6';

export const Zoom = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    preserveAspectRatio='xMidYMid'
    viewBox='0 0 256 256'
    {...props}
  >
    <defs>
      <linearGradient
        id='zoom__a'
        x1='23.666%'
        x2='76.334%'
        y1='95.6118%'
        y2='4.3882%'
      >
        <stop offset='.00006%' stopColor='#0845BF' />
        <stop offset='19.11%' stopColor='#0950DE' />
        <stop offset='38.23%' stopColor='#0B59F6' />
        <stop offset='50%' stopColor='#0B5CFF' />
        <stop offset='67.32%' stopColor='#0E5EFE' />
        <stop offset='77.74%' stopColor='#1665FC' />
        <stop offset='86.33%' stopColor='#246FF9' />
        <stop offset='93.88%' stopColor='#387FF4' />
        <stop offset='100%' stopColor='#4F90EE' />
      </linearGradient>
    </defs>
    <path
      fill='url(#zoom__a)'
      d='M256 128c0 13.568-1.024 27.136-3.328 40.192-6.912 43.264-41.216 77.568-84.48 84.48C155.136 254.976 141.568 256 128 256c-13.568 0-27.136-1.024-40.192-3.328-43.264-6.912-77.568-41.216-84.48-84.48C1.024 155.136 0 141.568 0 128c0-13.568 1.024-27.136 3.328-40.192 6.912-43.264 41.216-77.568 84.48-84.48C100.864 1.024 114.432 0 128 0c13.568 0 27.136 1.024 40.192 3.328 43.264 6.912 77.568 41.216 84.48 84.48C254.976 100.864 256 114.432 256 128Z'
    />
    <path
      fill='#FFF'
      d='M204.032 207.872H75.008c-8.448 0-16.64-4.608-20.48-12.032-4.608-8.704-2.816-19.2 4.096-26.112l89.856-89.856H83.968c-17.664 0-32-14.336-32-32h118.784c8.448 0 16.64 4.608 20.48 12.032 4.608 8.704 2.816 19.2-4.096 26.112l-89.6 90.112h74.496c17.664 0 32 14.08 32 31.744Z'
    />
  </svg>
);

const Seminars = () => {
  return (
    <div>
      <PageBanner title='Schedule of free seminars' subtitle='Free Seminars' />
      <div className='pb-[80px] pt-[80px]'>
        <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
          <div className='grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2'>
            <div class='project' data-filter='design'>
              <div class='group rounded-[20px] border-2 border-red-300 bg-white px-4 py-6 transition hover:border-primary hover:bg-primary/10 sm:p-[30px]'>
                <div>
                  <h6 class='mb-4 text-base font-black uppercase text-secondary'>
                    30 july, 2025
                  </h6>
                  <h4 class='mb-8 text-xl font-extrabold capitalize text-black  sm:text-1xl'>
                    <Link href='/seminars/1'>
                      Post Graduate Diploma in Cyber Security
                    </Link>
                  </h4>
                  <div class='flex items-center justify-between'>
                    <div className='flex items-center gap-5'>
                      <div class='flex items-center gap-2'>
                        <div>
                          <Zoom />
                        </div>
                        <div class='font-bold text-black capitalize  sm:text-base'>
                          Online
                        </div>
                      </div>
                      <div class='flex items-center gap-2'>
                        <div>
                          <BsFillAlarmFill className='text-primary' />
                        </div>
                        <div class='font-bold text-black capitalize  sm:text-base'>
                          10:00 PM
                        </div>
                      </div>
                      <div class='flex items-center gap-2'>
                        <div>
                          <FaPersonWalkingArrowLoopLeft className='text-primary' />
                        </div>
                        <div class='font-bold text-black capitalize  sm:text-base'>
                          10 Day left
                        </div>
                      </div>
                    </div>
                    <Link
                      href='/seminars/1'
                      class='flex h-[45px] w-[45px] items-center justify-center rounded-full bg-[#F3F4F6] text-black transition hover:bg-primary hover:text-white rtl:rotate-180'
                    >
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M9.41083 14.4102L10.5892 15.5885L16.1783 9.99932L10.5892 4.41016L9.41083 5.58849L12.9883 9.16599H5V10.8327H12.9883L9.41083 14.4102Z'
                          fill='currentColor'
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class='project' data-filter='design'>
              <div class='group rounded-[20px] border-2 border-red-300 bg-white px-4 py-6 transition hover:border-primary hover:bg-primary/10 sm:p-[30px]'>
                <h6 class='mb-4 text-base font-black uppercase text-secondary'>
                  23 july, 2025
                </h6>
                <h4 class='mb-8 text-xl font-extrabold capitalize text-black  sm:text-1xl'>
                  <a href='#'>Seminar on Data Analytics with Power BI</a>
                </h4>
                <div class='flex items-center justify-between'>
                  <div className='flex items-center gap-5'>
                    <div class='flex items-center gap-2'>
                      <div>
                        <svg
                          width='18'
                          height='20'
                          viewBox='0 0 18 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M0 8.45529C0 3.77836 3.8292 0 8.53659 0C13.244 0 17.0732 3.77836 17.0732 8.45529C17.0732 11.3641 15.3769 14.235 13.5791 16.3248C12.6693 17.3823 11.7037 18.2751 10.852 18.9101C10.4268 19.227 10.0181 19.4886 9.64923 19.6744C9.30343 19.8485 8.90853 20 8.53659 20C8.16464 20 7.76974 19.8485 7.42394 19.6744C7.05506 19.4886 6.6464 19.227 6.22121 18.9101C5.36948 18.2751 4.40386 17.3823 3.49409 16.3248C1.69631 14.235 0 11.3641 0 8.45529ZM8.53661 10.9748C6.92017 10.9748 5.60978 9.66437 5.60978 8.04792C5.60978 6.43148 6.92017 5.12109 8.53661 5.12109C10.1531 5.12109 11.4634 6.43148 11.4634 8.04792C11.4634 9.66437 10.1531 10.9748 8.53661 10.9748Z'
                            fill='#04a9ff'
                          ></path>
                        </svg>
                      </div>
                      <div class='font-bold text-black  sm:text-base'>
                        Online
                      </div>
                    </div>
                    <div class='flex items-center gap-2'>
                      <div>
                        <BsFillAlarmFill className='text-primary' />
                      </div>
                      <div class='font-bold text-black  sm:text-base'>
                        07:00 PM
                      </div>
                    </div>
                  </div>
                  <a
                    href='javascript:'
                    class='flex h-[45px] w-[45px] items-center justify-center rounded-full bg-[#F3F4F6] text-black transition hover:bg-primary hover:text-white rtl:rotate-180'
                  >
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 20 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M9.41083 14.4102L10.5892 15.5885L16.1783 9.99932L10.5892 4.41016L9.41083 5.58849L12.9883 9.16599H5V10.8327H12.9883L9.41083 14.4102Z'
                        fill='currentColor'
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seminars;
