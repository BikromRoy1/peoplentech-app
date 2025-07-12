import SectionTitle from '../SectionTitle/SectionTitle';

const SisterConcerns = () => {
  return (
    <section className='pb-[100px] pt-[100px]  bg-[#F2F4F7] relative'>
      <div
        className='absolute inset-0 z-0'
        style={{
          backgroundImage: `
        linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
        radial-gradient(circle 500px at 20% 80%, rgba(139,92,246,0.3), transparent),
        radial-gradient(circle 500px at 80% 20%, rgba(59,130,246,0.3), transparent)
      `,
          backgroundSize: '48px 48px, 48px 48px, 100% 100%, 100% 100%',
        }}
      />
      <div className='mx-auto px-4 sm:px-6 container lg:px-8 relative z-10'>
        <SectionTitle title='Our Sister Concerns' subtitle='Sister Concern' />
        <div className='grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6'>
          <div className='bg-white p-[13px] border border-[#E0E5EB]  h-[100px] flex items-center justify-center overflow-hidden rounded-lg'>
            <img
              className='max-w-[100px]'
              src='/image/Sister-Concern/nrb-main-logo.png'
              alt='image'
            />
          </div>
          <div className='bg-white p-[13px] border border-[#E0E5EB]  h-[100px] flex items-center justify-center overflow-hidden rounded-lg'>
            <img
              className='max-w-[100px]'
              src='/image/Sister-Concern/cbbl.png'
              alt='image'
            />
          </div>
          <div className='bg-white p-[13px] border border-[#E0E5EB]  h-[100px] flex items-center justify-center overflow-hidden rounded-lg'>
            <img
              className='max-w-[100px]'
              src='/image/Sister-Concern/Higher.png'
              alt='image'
            />
          </div>
          <div className='bg-white p-[13px] border border-[#E0E5EB]  h-[100px] flex items-center justify-center overflow-hidden rounded-lg'>
            <img
              className='max-w-[100px]'
              src='/image/Sister-Concern/jobnresume.png'
              alt='image'
            />
          </div>
          <div className='bg-white p-[13px] border border-[#E0E5EB]  h-[100px] flex items-center justify-center overflow-hidden rounded-lg'>
            <img
              className='max-w-[100px]'
              src='/image/Sister-Concern/upscalelearning.png'
              alt='image'
            />
          </div>
          <div className='bg-white p-[13px] border border-[#E0E5EB] h-[100px] flex items-center justify-center overflow-hidden rounded-lg'>
            <img
              className='max-w-[100px]'
              src='/image/Sister-Concern/smart.png'
              alt='image'
            />
          </div>
          <div className='bg-white p-[13px] border border-[#E0E5EB]  h-[100px] flex items-center justify-center overflow-hidden rounded-lg'>
            <img
              className='max-w-[100px]'
              src='/image/Sister-Concern/pntdns.png'
              alt='image'
            />
          </div>
          <div className='bg-white p-[13px] border border-[#E0E5EB]  h-[100px] flex items-center justify-center overflow-hidden rounded-lg'>
            <img
              className='max-w-[100px]'
              src='/image/Sister-Concern/bdclippingstudio.png'
              alt='image'
            />
          </div>
          <div className='bg-white p-[13px]  border border-[#E0E5EB] h-[100px] flex items-center justify-center overflow-hidden rounded-lg'>
            <img
              className='max-w-[100px]'
              src='/image/Sister-Concern/care247.png'
              alt='image'
            />
          </div>
          <div className='bg-white p-[13px] border border-[#E0E5EB]  h-[100px] flex items-center justify-center overflow-hidden rounded-lg'>
            <img
              className='max-w-[100px]'
              src='/image/Sister-Concern/amarquiz.png'
              alt='image'
            />
          </div>
          <div className='bg-white p-[13px] border border-[#E0E5EB]  h-[100px] flex items-center justify-center overflow-hidden rounded-lg'>
            <img
              className='max-w-[100px]'
              src='/image/Sister-Concern/volumecoder.png'
              alt='image'
            />
          </div>
          <div className='bg-white p-[13px] border border-[#E0E5EB]  h-[100px] flex items-center justify-center overflow-hidden rounded-lg'>
            <img
              className='max-w-[100px]'
              src='/image/Sister-Concern/gts365.png'
              alt='image'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SisterConcerns;
