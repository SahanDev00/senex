import React from 'react'
import { FaFacebook, FaGoogle, FaInstagram } from 'react-icons/fa'
import { PiTelegramLogoLight } from "react-icons/pi";
import { PiHeadsetBold } from "react-icons/pi";
import paymentPic from "../Assets/Images/payment.png"

const Footer = () => {
  return (
    <div className='w-full h-[400px] bg-red-600 '>
      <div className='w-[85%] h-full mx-auto flex justify-between related'>
        <div className='grid grid-cols-3 mt-14'>
          <div className=''>
            <h1 className='text-xl text-white font-semibold mb-2'>Information</h1>
            <p className='mb-2 text-gray-200 cursor-pointer hover:text-white'>About us</p>
            <p className='mb-2 text-gray-200 cursor-pointer hover:text-white'>Contact us</p>
            <p className='mb-2 text-gray-200 cursor-pointer hover:text-white'>Return Policies</p>
            <p className='mb-2 text-gray-200 cursor-pointer hover:text-white'>Privacy Policies</p>
            <p className='mb-2 text-gray-200 cursor-pointer hover:text-white'>Terms & Condition</p>
          </div>
          <div className=''>
            <h1 className='text-xl text-white font-semibold mb-2'>Contact Info</h1>
            <p className='mb-2 text-gray-200'>Hotline: +94777300288</p>
            <p className='mb-2 text-gray-200'>Showroom: +94114468500</p>
            <p className='mb-2 text-gray-200'>Workshop: +94114673950</p>
            <p className='mb-2 text-gray-200'>Workshop: +94114199941</p>
            <p className='mb-2 text-gray-200'>Email: msds.net@live.com</p>
          </div>
          <div className=''>
            <h1 className='text-xl text-white font-semibold mb-2'>Address</h1>
            <p className='mb-2 text-gray-200'>Microsis Computers</p>
            <p className='mb-2 text-gray-200'>No 29 UC Shipping Complex <br/>Ja-Ela 11350<br/>Sri Lanka</p>
            <p className='mb-2 text-gray-200'>WORKING DAYS / HOURS: MON - SUN / <br/>9:00 AM - 8.00 PM</p>
          </div>
          <div className='absolute mt-64 text-white'>
            <p>The best place to buy Laptops, Computers & Accessories. Personal Computers, Laptop Computers, <br/>Computer Accessories, Network Products, Repairs</p>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className='mt-14 w-[500px]'>
          <div className=''>
            <div className='flex items-center'>
              <PiTelegramLogoLight size={40} className='mr-5 text-white'/>
              <div>
                <h1 className='flex items-center text-white text-2xl font-semibold'>SIGN UP TO NEWSLETTER</h1>
                <p className='text-white'>Recieve $20 Coupon for the First Shopping.</p>
              </div>
            </div>
            <div className='mt-8'>
              <form className='w-full flex'>
                <input type="email" placeholder='Email address' className='w-full rounded-l-full pl-6' />
                <button type='submit' className='bg-gray-800 text-white w-[120px] p-3 hover:bg-gray-300 hover:text-black hover:border-l-2 rounded-r-full font-semibold'>Sign Up</button>
              </form>
            </div>
            <div className='mt-8 mb-2 flex items-center'>
              <div>
                <PiHeadsetBold size={45} className='text-white mr-5'/>
              </div>
              <div>
                <h1 className='text-white font-semibold text-lg'>Got a question? Call us 24/7!</h1>
                <p className='text-white text-3xl'>0777-300-288</p>
              </div>
            </div>
            <div className='flex gap-7 mt-10'>
                <FaFacebook size={35} className='rounded-full bg-white p-1 text-blue-600 hover:scale-105 cursor-pointer'/>
                <FaGoogle size={35} className='rounded-full bg-white p-1 text-black hover:scale-105 cursor-pointer'/>
                <FaInstagram size={35} className='rounded-full bg-white p-1 text-red-600 hover:scale-105 cursor-pointer'/>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-[70px] border-red-600 border-2'>
        <div className='w-[80%] h-full flex mx-auto items-center justify-between'> 
          <h1 className='text-4xl font-bold text-red-600 cursor-pointer'>SENƎX</h1>
          <p>Copyright © <span className='font-semibold'>Exesmart</span> - All rights Reserved</p>
          <img src={paymentPic} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer