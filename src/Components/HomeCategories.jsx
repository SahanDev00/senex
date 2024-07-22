import React from 'react'
import computer from "../Assets/Images/computer.jpg"
import { Link } from 'react-router-dom'

const HomeCategories = () => {
  return (
    <div className='w-[90%] h-[510px] relative  border-red-500 rounded-xl mx-auto flex '>
        <div className='w-full'>
            <p className='flex justify-center uppercase text-sm font-semibold text-white mt-5 font-mono'>Products</p>
            <h1 className='text-4xl flex justify-center text-white font-bold font-poppins'>SHOP BY CATEGORY</h1>
            <div className='h-[400px] w-full rounded-xl mx-auto mt-2 flex justify-between items-center px-7'>
                {/* Cards */}
                <div className='w-[300px] border-2 h-[350px] relative bg-black rounded-xl hover:scale-105 active:scale-100 duration-300'>
                    <img className='w-full h-full object-cover rounded-xl' src={computer} alt="" />
                    <Link>
                        <button className='absolute text-white text-2xl font-semibold inset-0 bg-black/30 rounded-xl font-poppins'>
                            COMPUTERS
                        </button>
                    </Link>
                </div>
                <div className='w-[300px] border-2 h-[350px] relative bg-black rounded-xl hover:scale-105 active:scale-100 duration-300'>
                    <img className='w-full h-full object-cover rounded-xl' src={computer} alt="" />
                    <Link>
                        <button className='absolute text-white text-2xl font-semibold inset-0 bg-black/30 rounded-xl font-poppins'>
                            MONITORS
                        </button>
                    </Link>
                </div>
                <div className='w-[300px] border-2 h-[350px] relative bg-black rounded-xl hover:scale-105 active:scale-100 duration-300'>
                    <img className='w-full h-full object-cover rounded-xl' src={computer} alt="" />
                    <Link>
                        <button className='absolute text-white text-2xl font-semibold inset-0 bg-black/30 rounded-xl font-poppins'>
                            ACCESSORIES
                        </button>
                    </Link>
                </div>
                <div className='w-[300px] border-2 h-[350px] relative bg-black rounded-xl hover:scale-105 active:scale-100 duration-300'>
                    <img className='w-full h-full object-cover rounded-xl' src={computer} alt="" />
                    <Link>
                        <button className='absolute text-white text-2xl font-semibold inset-0 bg-black/30 rounded-xl font-poppins'>
                            USED PARTS
                        </button>
                    </Link>
                </div>
                <div className='w-[300px] border-2 h-[350px] relative bg-black rounded-xl hover:scale-105 active:scale-100 duration-300'>
                    <img className='w-full h-full object-cover rounded-xl' src={computer} alt="" />
                    <Link>
                        <button className='absolute text-white text-2xl font-semibold inset-0 bg-black/30 rounded-xl font-poppins'>
                            CAMERAS & OTHERS
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    </div>
  )
}

export default HomeCategories