import React from 'react'
import pic from "../Assets/Images/laptop.png"
import pic2 from "../Assets/Images/computer.jpg"
import pic3 from "../Assets/Images/monitor.png"

const Cards = () => {
  return (
    /* Special Offers */
    <div className=' w-[91%] grid-cols-1 grid lg:grid-cols-3 items-center mt-12 sm:mt-16 lg:mt-14 gap-3'>
        <div className='w-[320px] md:w-[450px] lg:w-[300px] 2xl:w-[420px] rounded-2xl mx-auto'>
            <div className='relative w-full rounded-lg h-[250px] flex items-center border-white bg-white'>
                <img className='pt-2 h-[230px] mx-auto ' src={pic} alt="" />
                <button className='absolute w-full font-poppins h-full bg-black/50 border-white border-2 rounded-lg font-bold text-white text-3xl hover:text-[32px] duration-300 ease-in-out hover:shadow-lg'>SPECIAL OFFERS</button>
            </div>
        </div>

        {/* New Arrivals */}
        <div className='w-[320px] md:w-[450px] lg:w-[250px] 2xl:w-[400px] mx-auto'>
            <div className='relative w-full rounded-lg h-[250px] flex items-center bg-white'>
                <img className='pt-2 h-[230px] mx-auto ' src={pic2} alt="" />
                <button className='absolute w-full font-poppins h-full bg-black/50 rounded-lg font-bold text-white border-2 text-3xl hover:text-[32px] duration-300 ease-in-out hover:shadow-lg'>NEW ARRIVALS</button>
            </div>
        </div>
        
        {/* Featured */}
        <div className='w-[320px] md:w-[450px] lg:w-[300px] 2xl:w-[420px] rounded-2xl mx-auto'>
            <div className='relative w-full rounded-lg h-[250px] flex items-center bg-white'>
                <img className='pt-2 h-[230px] mx-auto ' src={pic3} alt="" />
                <button className='absolute w-full font-poppins h-full bg-black/50 rounded-lg font-bold text-white border-2 text-3xl hover:text-[32px] duration-300 ease-in-out hover:shadow-lg'>FEATURED</button>
            </div>
        </div>
    </div>
  )
}

export default Cards