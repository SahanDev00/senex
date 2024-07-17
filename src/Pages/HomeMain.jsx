import React from 'react'
import vector from "../Assets/Images/vector.jpg"

const HomeMain = () => {
  return (
    <div className='w-[85%] h-[87vh] flex mx-auto'>
        <div className='mt-[25vh] w-full'>
          <h1 className='text-7xl ml-10 font-bold text-red-600 cursor-pointer'>SENƎX</h1>
          <p className='text-2xl ml-10 mt-4'>The best place to buy Laptops, Computers & Accessories. Personal Computers, Laptop Computers, Computer Accessories, Network Products, Repairs</p>
          <button className='px-6 py-3 rounded-full ml-10 mt-5 text-white font-semibold bg-gradient-to-r from-red-600 to-red-400 hover:scale-105 duration-300 hover:shadow-md active:scale-95'>Products</button>
        </div>
        <div className='flex mx-auto items-center'>
          <img className='w-[1600px]' src={vector} alt="" />
        </div>
      
    </div>
  )
}

export default HomeMain