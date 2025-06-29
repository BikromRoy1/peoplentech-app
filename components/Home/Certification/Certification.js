import './Certification.css';
import { FaBolt } from 'react-icons/fa';

const Certification = () => {
  return (
    <>
      <section className='pb-[100px] pt-[100px]'>
        <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-5 md:items-center md:gap-8'>
            <div className='md:col-span-2'>
              <div className='max-w-lg md:max-w-none'>
                <div className='section-heading'>
                  <h4 className='bg-white text-[#162726] text-[15px] font-medium inline-flex items-center gap-2.5 mb-4 relative border border-[#E0E5EB] rounded-full section-padding'>
                    <span className='background-color-section text-[#2396d2] text-[14px] w-7 h-7 rounded-full flex items-center justify-center'>
                      <FaBolt />
                    </span>
                    Certification
                  </h4>
                  <h2 className='text-[20px] sm:text-[22px] md:text-[25px] lg:text-[30px] xl:text-[35px] font-semibold leading-tight mb-5'>
                    Accreditation & Certification
                  </h2>
                  <p className='text-[15px] text-[#6C706F] mb-6'>
                    We Are Legal Members Of Well Known Associations. At
                    PeopleNTech Institute of IT , we uphold the highest
                    standards of excellence, validated by our key accreditations
                    and distinguished memberships
                  </p>
                </div>
              </div>
            </div>

            <div className='md:col-span-3'>
              <div className='relative'>
                <div className='absolute hidden xl:block lg:block md:block Certification-background'>
                  <img
                    className='w-full'
                    src='/image/background/blurry.png'
                    alt='blurry'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Certification;
