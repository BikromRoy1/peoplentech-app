import { FaQuoteRight } from 'react-icons/fa';
import SectionTitle from '../SectionTitle/SectionTitle';

const SuccessStoryText = () => {
  return (
    <section className='pb-[100px] pt-[100px]'>
      <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
        <SectionTitle
          title='See What Our Learners Are  Saying'
          subtitle='Learner Reviews'
        />
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
          <div className='bg-[#f4f6f9] rounded-[10px] p-[30px] relative border border-[#E0E5EB]'>
            <div className='mb-5'>
              <p className='text-neutral-700 font-siliguri text-base'>
                &quot;এই কোর্সটি আমার জীবনে এক বিশাল পরিবর্তন এনেছে। প্রতিটি
                লেকচার পরিষ্কারভাবে উপস্থাপন করা হয়েছে এবং প্র্যাকটিক্যাল
                প্রজেক্টগুলো শেখাকে আরও সহজ করে তুলেছে। কোর্সটি শেষ করার পর আমি
                ফ্রিল্যান্সিং শুরু করেছি এবং ইতিমধ্যে কয়েকটি প্রজেক্ট পেয়েছি।
                শিক্ষকদের সাপোর্টও দারুণ ছিল। আমি সবাইকে এই কোর্সটি পরামর্শ
                &quot;
              </p>
            </div>
            <div className='flex items-center gap-3'>
              <img
                className='w-[55px] h-[55px] object-cover rounded-full'
                src='./image/icons/user-06.webp'
                alt='users'
              />
              <div>
                <h4 className='text-[17px] leading-7 font-semibold text-[#162726]'>
                  Tahiya Faiza
                </h4>
                <p className='text-[14px] text-[#2396d2] font-medium'>
                  MERN Stack Web Development
                </p>
              </div>
            </div>
            <div>
              <FaQuoteRight className='text-[#2490eb] text-[54px] leading-[62px] absolute right-[30px] bottom-[30px] opacity-[0.1]' />
            </div>
          </div>
          <div className='bg-[#f4f6f9] rounded-[10px] p-[30px] relative border border-[#E0E5EB]'>
            <div className='mb-5'>
              <p className='text-neutral-700 font-siliguri text-base'>
                &quot;এটাই ছিল আমার প্রথম অনলাইন কোর্স এবং অভিজ্ঞতা ছিল
                দুর্দান্ত। কঠিন বিষয়গুলোকে এত সহজভাবে বোঝানো হয়েছে যে শেখাটা
                আনন্দের হয়ে উঠেছে। কুইজ, অ্যাসাইনমেন্ট এবং ডাউনলোডযোগ্য
                রিসোর্সগুলো আমার অনেক কাজে এসেছে। যারা একদম শুরু থেকে শিখতে চান,
                তাদের জন্য এটা একদম পারফেক্ট।&quot;
              </p>
            </div>
            <div className='flex items-center gap-3'>
              <img
                className='w-[55px] h-[55px] object-cover rounded-full'
                src='./image/icons/user-12.jpg'
                alt='users'
              />
              <div>
                <h4 className='text-[17px] leading-7 font-semibold text-[#162726]'>
                  Hasibur Rahman
                </h4>
                <p className='text-[14px] text-[#2396d2] font-medium'>
                  Full Stack Development
                </p>
              </div>
            </div>
            <div>
              <FaQuoteRight className='text-[#2490eb] text-[54px] leading-[62px] absolute right-[30px] bottom-[30px] opacity-[0.1]' />
            </div>
          </div>
          <div className='bg-[#f4f6f9] rounded-[10px] p-[30px] relative border border-[#E0E5EB]'>
            <div className='mb-5'>
              <p className='text-neutral-700 font-siliguri text-base'>
                &quot;অনেক অনলাইন কোর্স করেছি, কিন্তু এই কোর্সটা সত্যিই আলাদা।
                শুধু থিওরি না, এখানে বাস্তব উদাহরণ আর প্রজেক্ট ভিত্তিক শেখানো
                হয়েছে। কোর্স চলাকালীনই আমি শেখা বিষয়গুলো আমার চাকরিতে প্রয়োগ
                করতে পেরেছি। ফলে কাজের মান অনেক উন্নত হয়েছে। ইনস্ট্রাক্টরের
                গাইডলাইন এবং ইন্টারঅ্যাকটিভ কনটেন্ট সত্যিই প্রশংসনীয়।&quot;
              </p>
            </div>
            <div className='flex items-center gap-3'>
              <img
                className='w-[55px] h-[55px] object-cover rounded-full'
                src='./image/icons/user-13.jpg'
                alt='users'
              />
              <div>
                <h4 className='text-[17px] leading-7 font-semibold text-[#162726]'>
                  Nusrat Jahan
                </h4>
                <p className='text-[14px] text-[#2396d2] font-medium'>
                  UI/UX Design Essentials
                </p>
              </div>
            </div>
            <div>
              <FaQuoteRight className='text-[#2490eb] text-[54px] leading-[62px] absolute right-[30px] bottom-[30px] opacity-[0.1]' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoryText;
