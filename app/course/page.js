import PageBanner from '@/components/PageBanner/PageBanner';
import { FaStar } from 'react-icons/fa';

const AllCourse = () => {
  return (
    <div>
      <PageBanner title='Our All Courses' subtitle='Courses' />
      <div className='pt-[100px] pb-[100px]'>
        <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-8'>
            <div className='md:col-span-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              ad ullam, voluptate, tempora eius asperiores non deserunt labore
              iste eum molestiae repellat doloribus. Numquam, fugiat error
              veritatis neque modi distinctio?
            </div>
            <div className='md:col-span-10'>
              <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
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
                    <h4 className='text-[19px] leading-7 font-semibold mb-[15px] hover:text-primary transition-all duration-300 ease-in-out'>
                      <a href='#'>
                        Adobe Premiere Pro Masterclass: Video Editing{' '}
                      </a>
                    </h4>
                    <div className='flex items-center justify-between'>
                      <div>
                        <h3>
                          <span className='text-primary font-semibold text-[17px]'>
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
                      className='text-white bg-primary border border-primary font-semibold text-[15px] rounded-full py-[5px] px-[20px] hover:border-primary transition-all duration-300 ease-in-out'
                    >
                      Registration
                    </a>
                    <a
                      className='text-[#162726] border border-[#E0E5EB] font-semibold text-[15px] rounded-full py-[5px] px-[20px] hover:border-primary transition-all duration-300 ease-in-out'
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
                    <h4 className='text-[19px] leading-7 font-semibold mb-[15px] hover:text-primary transition-all duration-300 ease-in-out'>
                      <a href='#'>Front-End Development with React JS</a>
                    </h4>
                    <div className='flex items-center justify-between'>
                      <div>
                        <h3>
                          <span className='text-primary font-semibold text-[17px]'>
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
                      className='text-white bg-primary border border-primary font-semibold text-[15px] rounded-full py-[5px] px-[20px] hover:border-primary transition-all duration-300 ease-in-out'
                    >
                      Registration
                    </a>
                    <a
                      className='text-[#162726] border border-[#E0E5EB] font-semibold text-[15px] rounded-full py-[5px] px-[20px] hover:border-primary transition-all duration-300 ease-in-out'
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
                    <h4 className='text-[19px] leading-7 font-semibold mb-[15px] hover:text-primary transition-all duration-300 ease-in-out'>
                      <a href='#'>Diploma in Graphics & Animation</a>
                    </h4>
                    <div className='flex items-center justify-between'>
                      <div>
                        <h3>
                          <span className='text-primary font-semibold text-[17px]'>
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
                      className='text-white bg-primary border border-primary font-semibold text-[15px] rounded-full py-[5px] px-[20px] hover:border-primary transition-all duration-300 ease-in-out'
                    >
                      Registration
                    </a>
                    <a
                      className='text-[#162726] border border-[#E0E5EB] font-semibold text-[15px] rounded-full py-[5px] px-[20px] hover:border-primary transition-all duration-300 ease-in-out'
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
                    <h4 className='text-[19px] leading-7 font-semibold mb-[15px] hover:text-primary transition-all duration-300 ease-in-out'>
                      <a href='#'>IT Infrastructure & Cybersecurity Diploma</a>
                    </h4>
                    <div className='flex items-center justify-between'>
                      <div>
                        <h3>
                          <span className='text-primary font-semibold text-[17px]'>
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
                      className='text-white bg-primary border border-primary font-semibold text-[15px] rounded-full py-[5px] px-[20px] hover:border-primary transition-all duration-300 ease-in-out'
                    >
                      Registration
                    </a>
                    <a
                      className='text-[#162726] border border-[#E0E5EB] font-semibold text-[15px] rounded-full py-[5px] px-[20px] hover:border-primary transition-all duration-300 ease-in-out'
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
                        src='/image/Course/course-6.jpg'
                        alt='icons'
                      />
                    </div>
                  </div>
                  <div className='p-[20px] mb-[20px] border-b border-[#E0E5EB]'>
                    <h4 className='text-[19px] leading-7 font-semibold mb-[15px] hover:text-primary transition-all duration-300 ease-in-out'>
                      <a href='#'>Amazon Web Service</a>
                    </h4>
                    <div className='flex items-center justify-between'>
                      <div>
                        <h3>
                          <span className='text-primary font-semibold text-[17px]'>
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
                      className='text-white bg-primary border border-primary font-semibold text-[15px] rounded-full py-[5px] px-[20px] hover:border-primary transition-all duration-300 ease-in-out'
                    >
                      Registration
                    </a>
                    <a
                      className='text-[#162726] border border-[#E0E5EB] font-semibold text-[15px] rounded-full py-[5px] px-[20px] hover:border-primary transition-all duration-300 ease-in-out'
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
                        src='/image/Course/course-5.jpg'
                        alt='icons'
                      />
                    </div>
                  </div>
                  <div className='p-[20px] mb-[20px] border-b border-[#E0E5EB]'>
                    <h4 className='text-[19px] leading-7 font-semibold mb-[15px] hover:text-primary transition-all duration-300 ease-in-out'>
                      <a href='#'>Creative Graphic Design with Freelancing</a>
                    </h4>
                    <div className='flex items-center justify-between'>
                      <div>
                        <h3>
                          <span className='text-primary font-semibold text-[17px]'>
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
                      className='text-white bg-primary border border-primary font-semibold text-[15px] rounded-full py-[5px] px-[20px] hover:border-primary transition-all duration-300 ease-in-out'
                    >
                      Registration
                    </a>
                    <a
                      className='text-[#162726] border border-[#E0E5EB] font-semibold text-[15px] rounded-full py-[5px] px-[20px] hover:border-primary transition-all duration-300 ease-in-out'
                      href='#'
                    >
                      View Details{' '}
                    </a>
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

export default AllCourse;
