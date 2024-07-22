import React from 'react'
import { FaTruckFast } from "react-icons/fa6";
import { FaThumbsUp } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoPricetagsOutline } from "react-icons/io5";

const Features = () => {
  return (
    <div className='w-[70%] h-[100px] relative mx-auto flex border border-white  justify-evenly items-center bg-black/50 mt-8 mb-8'>
        <div className='flex items-center border-r pr-10 border-red-600'>
            <FaTruckFast size={45} className='text-red-600'/>
            <div className='ml-4'>
                <h1 className='font-semibold text-white text-lg font-poppins'>Free Delivery</h1>
                <p className='text-white font-poppins'>from $50</p>
            </div>
        </div>
        <div className='flex items-center border-r pr-10 border-red-600'>
            <FaThumbsUp size={45} className='text-red-600'/>
            <div className='ml-4'>
                <h1 className='font-semibold text-white text-lg font-poppins'>99% Customer</h1>
                <p className='text-white font-poppins'>Feedbacks</p>
            </div>
        </div>
        <div className='flex items-center border-r pr-10 border-red-600'>
            <GiReturnArrow size={45} className='text-red-600'/>
            <div className='ml-4'>
                <h1 className='font-semibold text-white text-lg font-poppins'>365 Days</h1>
                <p className='text-white font-poppins'>for Free Return</p>
            </div>
        </div>
        <div className='flex items-center border-r pr-10 border-red-600'>
            <GiTakeMyMoney size={45} className='text-red-600'/>
            <div className='ml-4'>
                <h1 className='font-semibold text-white text-lg font-poppins'>Payment</h1>
                <p className='text-white font-poppins'>Secure System</p>
            </div>
        </div>
        <div className='flex items-center'>
            <IoPricetagsOutline size={45} className='text-red-600'/>
            <div className='ml-4'>
                <h1 className='font-semibold text-lg text-white font-poppins'>Only Best</h1>
                <p className='text-white font-poppins'>brands</p>
            </div>
        </div>
    </div>
  )
}

export default Features