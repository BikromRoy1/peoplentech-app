'use client';

const VideosModal = ({ video_url }) => {
  return (
    <div>
      {/* Modal toggle (hidden checkbox) */}
      <input type='checkbox' id='video_modal' className='modal-toggle' />

      {/* Modal */}
      <div className='modal'>
        <div className='modal-box relative max-w-2xl bg-white rounded-2xl'>
          {/* Close button at top-right */}
          <label
            htmlFor='video_modal'
            className='btn btn-sm btn-circle absolute right-2 top-2 bg-[#f5c310] border-0'
          >
            ✕
          </label>

          {/* Title */}
          <h3 className='text-lg font-bold mb-2'>
            কীভাবে আপনার বাচ্চাদের কোডিং{' '}
            <span className='text-[#1bb57b]'>রোবোটিক্স দিয়ে</span>
          </h3>
          <hr />

          {/* Video */}
          <div className='pt-3'>
            <iframe
              width='100%'
              height='315'
              src='https://www.youtube.com/embed/Xt8BVcT9ezY?si=3UAfJmsETmrt_3lU'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen
              className='rounded-lg'
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosModal;
