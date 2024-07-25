import React from 'react'
import pic from "../Assets/Images/laptop.webp"
import pic2 from "../Assets/Images/computer.webp"
import pic3 from "../Assets/Images/monitor.webp"

const Cards = () => {
  return (
    /* Special Offers */
    <div className=' w-full md:w-[91%] lxl:w-[87%] mxl:w-[91%] grid-cols-1 grid lg:grid-cols-3 items-center mt-12 sm:mt-16 lg:mt-14  gap-3'>
        <div className='w-[320px] flex  md:w-[450px] lg:w-[250px] xl:w-[300px] 2xl:w-[380px] rounded-2xl mx-auto'>
            <div className='relative w-full rounded-lg h-[250px] flex items-center border-white bg-white'>
                <img className='pt-2 h-[230px] mx-auto object-cover' src={pic} alt="" />
                <button className='absolute w-full font-poppins h-full bg-black/50 border-white border-2 rounded-lg font-bold text-white sm:text-xl text-lg lg:text-2xl xl:text-3xl hover:text-[32px] duration-300 ease-in-out hover:shadow-lg'>SPECIAL OFFERS</button>
            </div>
        </div>

        {/* New Arrivals */}
        <div className='w-[320px] md:w-[450px] lg:w-[250px] xl:w-[250px] 2xl:w-[300px] mx-auto'>
            <div className='relative w-full rounded-lg h-[250px] flex items-center bg-white'>
                <img className='pt-2 h-[230px] mx-auto object-cover' src={pic2} alt="" />
                <button className='absolute w-full font-poppins h-full bg-black/50 rounded-lg font-bold text-white border-2 sm:text-xl text-lg lg:text-2xl xl:text-3xl hover:text-[32px] duration-300 ease-in-out hover:shadow-lg'>NEW ARRIVALS</button>
            </div>
        </div>
        
        {/* Featured */}
        <div className='w-[320px] md:w-[450px] lg:w-[250px] xl:w-[300px] 2xl:w-[380px] rounded-2xl mx-auto'>
            <div className='relative w-full rounded-lg h-[250px] flex items-center bg-white'>
                <img className='pt-2 h-[230px] mx-auto object-cover' src={pic3} alt="" />
                <button className='absolute w-full font-poppins h-full bg-black/50 rounded-lg font-bold text-white border-2 sm:text-xl text-lg lg:text-2xl xl:text-3xl hover:text-[32px] duration-300 ease-in-out hover:shadow-lg'>FEATURED</button>
            </div>
        </div>
    </div>
  )
}

export default Cards