import React, { useState } from 'react'
import logo from "../Assets/logo.jpg"
import { TiShoppingCart } from "react-icons/ti";
import { FaUserLarge } from "react-icons/fa6";
import { FaHotjar } from "react-icons/fa";
import { SlTarget } from "react-icons/sl";
import { MdLocationOn } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [activeLink, setActiveLink] = useState("");

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

  return (
    <div className='w-[85%] h-[70px] mx-auto'>
        <div className='flex justify-between items-center w-full h-full'>
            <div>
                <h1 className='text-4xl font-bold text-red-600 cursor-pointer'>SENƎX</h1>
            </div> 
            <div>
                <ul className='flex gap-12 font-bold text-lg'>
                    <Link to='/' className={`cursor-pointer hover:text-red-600 text-gray-600`}>HOME</Link>
                    <Link to='about-us' className='cursor-pointer hover:text-red-600 text-gray-600'>ABOUT US</Link>
                    <Link to='contact-us' className='cursor-pointer hover:text-red-600 text-gray-600'>CONTACT US</Link>
                </ul>
            </div>
            <div className='flex items-center gap-8'>
                <div>
                    <TiShoppingCart className='hover:text-red-600 cursor-pointer' size={35}/>
                    <p className='absolute top-1 ml-6 bg-red-600 text-white font-semibold rounded-full p-1 px-2 text-xs'>4</p>
                </div>
                <FaUserLarge className='hover:text-red-600 cursor-pointer' size={25}/>
            </div>
        </div>
        <hr className='border'/>
        <div className='w-[85%] h-[40px] mx-auto mt-2'>
            <div className='w-full h-full flex justify-between items-center'>
                <div>
                    <ul className='flex gap-8 text-lg font-semibold'>
                        <li className='cursor-pointer text-gray-600 hover:text-red-400 flex items-center gap-1'><FaHotjar/>Hot Deals</li>
                        <li className='cursor-pointer text-gray-600 hover:text-red-400 flex items-center gap-1'><SlTarget/>Track Order</li>
                        <li className='cursor-pointer text-gray-600 hover:text-red-400 flex items-center gap-1'><MdLocationOn/>Store Location</li>
                    </ul>
                </div>
                <div>
                    <p className='cursor-pointer text-white rounded-full bg-red-600 px-4 py-1 font-semibold hover:scale-105 duration-100 hover:shadow-lg flex items-center gap-1'><IoIosCall/>Support</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar