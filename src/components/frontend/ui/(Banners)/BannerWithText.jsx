import React from 'react';
import Banner from '../../../../../public/frontend/Banner/Group_910.webp';
import Image from 'next/image';

const BannerWithText = () => {
  return (
    
    
    <div className='flex flex-col md:flex-row items-center  p-4 md:p-8 mt-10'>
      {/* Image Section */}
      

      {/* Text Section */}
      <div className=' md:w-1/2 mt-6 md:mt-0 md:ml-[10rem] text-left  w-full flex flex-col '>
        <h1 className='text-2xl md:text-6xl font-bold text-[#D07021] mb-4 w-[30rem]'>
        Utah Born. Utah Made.
        </h1>
        <p className='text-gray-600 text-lg md:text-xl leading-relaxed w-[40rem]'>
        Zhou HQ is located in Salt Lake City, tucked away in Utah’s Wasatch Mountain Range. Our passion for all things outdoors fuels everything we do. We design supplements to help us feel our best, so we can keep enjoying the beauty around us.
        </p>
      </div>

      <div className='w-full md:w-1/2'>
        <Image
          src={Banner}
          alt='Banner Image'
          className='w-full h-auto object-cover rounded-lg '
        />
      </div>
    </div>
  )
}

export default BannerWithText