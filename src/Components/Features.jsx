import React from 'react'
import { FaTruckFast } from "react-icons/fa6";
import { FaThumbsUp } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoPricetagsOutline } from "react-icons/io5";

const Features = () => {
  return (
    <div className='w-[70%] h-[100px] relative mx-auto flex border-2 border-white  justify-evenly items-center bg-black/50 mt-8 mb-8'>
        <div className='flex items-center border-r pr-10 border-red-600'>
            <FaTruckFast size={45} className='text-red-600'/>
            <div className='ml-4'>
                <h1 className='font-semibold text-white text-lg'>Free Delivery</h1>
                <p className='text-white'>from $50</p>
            </div>
        </div>
        <div className='flex items-center border-r pr-10 border-red-600'>
            <FaThumbsUp size={45} className='text-red-600'/>
            <div className='ml-4'>
                <h1 className='font-semibold text-white text-lg'>99% Customer</h1>
                <p className='text-white'>Feedbacks</p>
            </div>
        </div>
        <div className='flex items-center border-r pr-10 border-red-600'>
            <GiReturnArrow size={45} className='text-red-600'/>
            <div className='ml-4'>
                <h1 className='font-semibold text-white text-lg'>365 Days</h1>
                <p className='text-white'>for Free Return</p>
            </div>
        </div>
        <div className='flex items-center border-r pr-10 border-red-600'>
            <GiTakeMyMoney size={45} className='text-red-600'/>
            <div className='ml-4'>
                <h1 className='font-semibold text-white text-lg'>Payment</h1>
                <p className='text-white'>Secure System</p>
            </div>
        </div>
        <div className='flex items-center'>
            <IoPricetagsOutline size={45} className='text-red-600'/>
            <div className='ml-4'>
                <h1 className='font-semibold text-lg text-white'>Only Best</h1>
                <p className='text-white'>brands</p>
            </div>
        </div>
    </div>
  )
}

export default Features