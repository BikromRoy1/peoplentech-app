'use client';

import { MediaPlayer, MediaProvider } from '@vidstack/react';
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from '@vidstack/react/player/layouts/default';

import { useRef, useState } from 'react';
import { FaLock } from 'react-icons/fa';
import './VideoPlayer.css';

const VideosPlaying = () => {
  const videoData = [
    {
      id: 1,
      title: 'Introduction',
      source: '/image/vidoes/parrot.mp4',
      duration: '2m 10s',
      isPremium: false,
    },
    {
      id: 2,
      title: 'Staying on the Sales Tightrope',
      source: '/image/vidoes/animal.mp4',
      duration: '15m 10s',
      isPremium: false,
    },
    {
      id: 3,
      title: 'First Impressions and Body Language',
      source: '/image/vidoes/production.mp4',
      duration: '18m 10s',
      isPremium: true,
    },
    {
      id: 4,
      title: 'Scratch Programming Basic',
      source: '/image/vidoes/bird.mp4',
      duration: '25m 10s',
      isPremium: true,
    },
    {
      id: 5,
      title: 'Install and Overview',
      source: '/image/vidoes/Call-of-Duty.mp4',
      duration: '25m 10s',
      isPremium: true,
    },
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [activeVideoTitle, setActiveVideoTitle] = useState(videoData[0].title);
  const [videoDuration, setVideoDuration] = useState('0:00');
  const videoRef = useRef(null);

  const changeVideoSource = (newIndex) => {
    setCurrentVideoIndex(newIndex);
    setActiveVideoTitle(videoData[newIndex].title);
    setVideoDuration('0:00');
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      const durationInSeconds = videoRef.current.duration;
      const formattedDuration = formatVideoDuration(durationInSeconds);
      setVideoDuration(formattedDuration);
    }
  };

  const formatVideoDuration = (durationInSeconds) => {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = Math.floor(durationInSeconds % 60);
    return `${minutes}m ${seconds}s`;
  };

  return (
    <section className='videosPlaying-section'>
      <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5'>
          {/* -------- Left Side Video -------- */}
          <div>
            <div className='flex items-center gap-2 lg:gap-4 pb-[20px]'>
              <h4 className='font-bold text-[#124265] text-[16px] md:text-[20px] leading-[28px]'>
                Professional Diploma in Graphics, Editing & Animation
              </h4>
            </div>

            <MediaPlayer
              autoplay
              crossorigin
              playsinline
              width='100%'
              height='420px'
              ref={videoRef}
              title={activeVideoTitle}
              onLoadedMetadata={handleLoadedMetadata}
              src={videoData[currentVideoIndex].source}
            >
              <MediaProvider />
              <DefaultVideoLayout
                thumbnails='/videos/thumbnails.vtt' // ✅ put inside /public/videos
                icons={defaultLayoutIcons}
              />
            </MediaPlayer>

            <h3 className='font-semibold text-[16px] md:text-[19px] leading-[28px] pt-[20px]'>
              Video: {activeVideoTitle} - Duration: {videoDuration}
            </h3>
          </div>

          {/* -------- Right Side Course Content -------- */}
          <div>
            <div className='bg-slate-600 px-4 py-7 rounded-md'>
              <div className='videos-module'>
                <div className='Course-Content flex items-center justify-between pb-4'>
                  <h4 className='font-semibold text-[16px] md:text-[22px] text-gray-300'>
                    Course Content
                  </h4>
                  <h5 className='font-semibold text-[16px] md:text-[22px] text-primary'>
                    {videoData.length + 4} Lessons (8h 15m)
                  </h5>
                </div>

                {/* One Details Example */}
                <details
                  className='group rounded-lg [&_summary::-webkit-details-marker]:hidden mb-[1rem] bg-[#F5F7F9]'
                  open
                >
                  <summary className='flex items-center justify-between cursor-pointer bg-[#F5F7F9] py-[1rem] px-[1.25rem] rounded-[6px]'>
                    <h2 className='font-bold text-[#124265] text-[14px] md:text-[16px]'>
                      Class 01: Oracle Database-SQL: Practice SQL to be
                      confident in Query
                      <span className='font-medium text-[#7b7b8a]'>
                        ({videoData.length} Lectures)
                      </span>
                    </h2>
                  </summary>

                  <div className='mt-[1rem] pl-[1rem]'>
                    {videoData.map((data, index) => (
                      <div key={data.id}>
                        <div className='flex justify-between items-center flex-wrap'>
                          <div className='relative flex items-center flex-wrap'>
                            <button
                              onClick={() => changeVideoSource(data.id - 1)}
                              className='btn-danger-soft mb-0'
                            >
                              ▶
                            </button>
                            <span className='inline-block truncate ml-2 mb-0 text-base font-normal w-[200px] cursor-pointer'>
                              <span
                                className={`${
                                  currentVideoIndex === index
                                    ? 'active-video text-[#d6293e] font-semibold'
                                    : ''
                                }`}
                                onClick={() => changeVideoSource(data.id - 1)}
                              >
                                {data.title}
                              </span>
                              {data.isPremium ? (
                                <span className='badge bg-[#FD7E14] text-[14px] text-white ml-1 capitalize flex items-center gap-1'>
                                  <FaLock className='w-[13px] h-[13px]' />
                                  premium
                                </span>
                              ) : (
                                <span className='badge bg-[#1CAB55] text-[14px] text-white ml-1'>
                                  ফ্রি
                                </span>
                              )}
                            </span>
                          </div>
                          <p className='mb-0 text-[#7b7b8a] text-[16px] font-semibold flex items-center gap-2'>
                            {videoDuration}
                          </p>
                        </div>
                        {index !== videoData.length - 1 && (
                          <hr className='hr-style my-[1rem] text-[#9a9ea4]' />
                        )}
                      </div>
                    ))}
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideosPlaying;
