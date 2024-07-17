import React from 'react'
import { FaTruckFast } from "react-icons/fa6";
import { FaThumbsUp } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoPricetagsOutline } from "react-icons/io5";

const Features = () => {
  return (
    <div className='w-[70%] h-[100px] mx-auto flex border border-red-600 mt-7 justify-evenly items-center bg-white mb-24'>
        <div className='flex items-center border-r pr-10 border-red-600'>
            <FaTruckFast size={45} className='text-red-600'/>
            <div className='ml-4'>
                <h1 className='font-semibold text-lg'>Free Delivery</h1>
                <p className=''>from $50</p>
            </div>
        </div>
        <div className='flex items-center border-r pr-10 border-red-600'>
            <FaThumbsUp size={45} className='text-red-600'/>
            <div className='ml-4'>
                <h1 className='font-semibold text-lg'>99% Customer</h1>
                <p className=''>Feedbacks</p>
            </div>
        </div>
        <div className='flex items-center border-r pr-10 border-red-600'>
            <GiReturnArrow size={45} className='text-red-600'/>
            <div className='ml-4'>
                <h1 className='font-semibold text-lg'>365 Days</h1>
                <p className=''>for Free Return</p>
            </div>
        </div>
        <div className='flex items-center border-r pr-10 border-red-600'>
            <GiTakeMyMoney size={45} className='text-red-600'/>
            <div className='ml-4'>
                <h1 className='font-semibold text-lg'>Payment</h1>
                <p className=''>Secure System</p>
            </div>
        </div>
        <div className='flex items-center'>
            <IoPricetagsOutline size={45} className='text-red-600'/>
            <div className='ml-4'>
                <h1 className='font-semibold text-lg'>Only Best</h1>
                <p className=''>brands</p>
            </div>
        </div>
    </div>
  )
}

export default Features