import React from 'react'
import pic from "../Assets/Images/laptop.png"
import pic2 from "../Assets/Images/computer.jpg"
import pic3 from "../Assets/Images/monitor.png"

const Cards = () => {
  return (
    /* Special Offers */
    <div className=' w-full h-[300px] flex gap-4 items-center mt-7'>
        <div className=' w-[500px] rounded-2xl '>
            <div className='relative w-full rounded-lg h-[250px] flex items-cente'>
                <img className='pt-2 h-[230px] mx-auto ' src={pic} alt="" />
                <button className='absolute w-full h-full bg-black/30 rounded-lg font-bold text-white text-3xl hover:text-[32px] duration-300 ease-in-out hover:shadow-lg'>SPECIAL OFFERS</button>
            </div>
        </div>

        {/* New Arrivals */}
        <div className='w-[380px] '>
            <div className='relative w-full rounded-lg h-[250px] flex items-center '>
                <img className='pt-2 h-[230px] mx-auto ' src={pic2} alt="" />
                <button className='absolute w-full h-full bg-black/30 rounded-lg font-bold text-white text-3xl hover:text-[32px] duration-300 ease-in-out hover:shadow-lg'>NEW ARRIVALS</button>
            </div>
        </div>
        
        {/* Featured */}
        <div className=' w-[500px] rounded-2xl '>
            <div className='relative w-full rounded-lg h-[250px] flex items-center'>
                <img className='pt-2 h-[230px] mx-auto ' src={pic3} alt="" />
                <button className='absolute w-full h-full bg-black/30 rounded-lg font-bold text-white text-3xl hover:text-[32px] duration-300 ease-in-out hover:shadow-lg'>FEATURED</button>
            </div>
        </div>
    </div>
  )
}

export default Cards