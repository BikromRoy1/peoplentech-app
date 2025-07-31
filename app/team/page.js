import PageBanner from '@/components/PageBanner/PageBanner';
import './Team.css';

const Team = () => {
  return (
    <div>
      <PageBanner
        title='Get to Know the Faces Behind Our Work'
        subtitle='Team'
      />
      <div className='pt-[80px] pb-[60px]'>
        <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
          <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'>
            <div className='relative text-center mb-[30px] block team-two__single'>
              <div className='relative block max-w-[300px] w-full mx-auto z-20'>
                <div className='relative block rounded-full overflow-hidden team-two__img z-10'>
                  <img
                    className='w-full rounded-full object-cover'
                    src='/image/Teachers/01.jpg'
                    alt='team'
                  />
                </div>
              </div>
              <div className='team-two__content'>
                <h4 className='text-[20px] capitalize leading-7 font-semibold mb-[2px] hover:text-primary transition-all duration-300 ease-in-out'>
                  Hossain Shariar Akash
                </h4>
                <p className='text-[15px] leading-6 text-[#162726] font-medium'>
                  Neurology Expert
                </p>
              </div>
            </div>

            <div className='relative text-center mb-[30px] block team-two__single'>
              <div className='relative block max-w-[300px] w-full mx-auto z-20'>
                <div className='relative block rounded-full overflow-hidden team-two__img z-10'>
                  <img
                    className='w-full rounded-full object-cover'
                    src='/image/Teachers/07.jpg'
                    alt='team'
                  />
                </div>
              </div>
              <div className='team-two__content'>
                <h4 className='text-[20px] capitalize leading-7 font-semibold mb-[2px] hover:text-primary transition-all duration-300 ease-in-out'>
                  Fatama Mostafa
                </h4>
                <p className='text-[15px] leading-6 text-[#162726] font-medium'>
                  Chief Executive Officer
                </p>
              </div>
            </div>

            <div className='relative text-center mb-[30px] block team-two__single'>
              <div className='relative block max-w-[300px] w-full mx-auto z-20'>
                <div className='relative block rounded-full overflow-hidden team-two__img z-10'>
                  <img
                    className='w-full rounded-full object-cover'
                    src='/image/Teachers/02.jpg'
                    alt='team'
                  />
                </div>
              </div>
              <div className='team-two__content'>
                <h4 className='text-[20px] capitalize leading-7 font-semibold mb-[2px] hover:text-primary transition-all duration-300 ease-in-out'>
                  Sarah Jhonson
                </h4>
                <p className='text-[15px] leading-6 text-[#162726] font-medium'>
                  Product Manager
                </p>
              </div>
            </div>

            <div className='relative text-center mb-[30px] block team-two__single'>
              <div className='relative block max-w-[300px] w-full mx-auto z-20'>
                <div className='relative block rounded-full overflow-hidden team-two__img z-10'>
                  <img
                    className='w-full rounded-full object-cover'
                    src='/image/Teachers/03.jpg'
                    alt='team'
                  />
                </div>
              </div>
              <div className='team-two__content'>
                <h4 className='text-[20px] capitalize leading-7 font-semibold mb-[2px] hover:text-primary transition-all duration-300 ease-in-out'>
                  Amanda Jepson
                </h4>
                <p className='text-[15px] leading-6 text-[#162726] font-medium'>
                  Marketing Manager
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
